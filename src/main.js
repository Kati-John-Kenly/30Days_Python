// ============================================================
// PyMaster30 — Main Application Entry Point
// ============================================================

import './style.css';
import { router } from './router.js';
import { auth } from './auth.js';
import { curriculum, weeks, getDayByNumber, searchCurriculum } from './data/curriculum.js';
import { showToast } from './toast.js';

// ============================================================
// NAVBAR
// ============================================================
function renderNavbar() {
  const nav = document.getElementById('main-nav');
  const user = auth.getUser();

  nav.innerHTML = `
    <div class="container">
      <div class="nav-brand" onclick="location.hash='/'">
        <span class="nav-brand-icon">🐍</span>
        <span class="nav-brand-text">PyMaster<span>30</span></span>
      </div>

      <ul class="nav-links" id="nav-links">
        <li><a href="#/" class="${getActiveClass('/')}">Home</a></li>
        <li><a href="#/roadmap" class="${getActiveClass('/roadmap')}">Roadmap</a></li>
        <li><a href="#/playground" class="${getActiveClass('/playground')}">Playground</a></li>
        <li><a href="#/resources" class="${getActiveClass('/resources')}">Resources</a></li>
        ${user ? `<li><a href="#/dashboard" class="${getActiveClass('/dashboard')}">Dashboard</a></li>` : ''}
      </ul>

      <div class="nav-actions">
        <div class="nav-search">
          <span class="nav-search-icon">🔍</span>
          <input type="text" id="nav-search-input" placeholder="Search topics..." autocomplete="off" />
        </div>
        ${user ? `
          <div style="position:relative" id="user-menu-container">
            <div class="user-avatar" id="user-avatar-btn">${user.name.charAt(0).toUpperCase()}</div>
            <div class="user-dropdown hidden" id="user-dropdown">
              <div style="padding: 8px 16px; border-bottom: 1px solid rgba(255,255,255,0.05); margin-bottom: 4px;">
                <div style="font-weight: 700; font-size: 0.9rem;">${user.name}</div>
                <div style="font-size: 0.75rem; color: var(--color-text-tertiary);">${user.email}</div>
              </div>
              <button class="user-dropdown-item" onclick="location.hash='#/dashboard'">📊 Dashboard</button>
              <button class="user-dropdown-item" onclick="location.hash='#/playground'">💻 Playground</button>
              <div class="user-dropdown-divider"></div>
              <button class="user-dropdown-item" id="logout-btn">🚪 Sign Out</button>
            </div>
          </div>
        ` : `
          <button class="btn btn-primary" id="auth-btn">Get Started</button>
        `}
      </div>

      <button class="nav-toggle" id="nav-toggle">
        <span></span><span></span><span></span>
      </button>
    </div>
  `;

  // Event listeners
  setupNavEvents();
}

function getActiveClass(path) {
  const current = window.location.hash.slice(1) || '/';
  return current === path || current.startsWith(path + '/') ? 'active' : '';
}

function setupNavEvents() {
  // Mobile toggle
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      links.classList.toggle('open');
    });
  }

  // Auth button
  const authBtn = document.getElementById('auth-btn');
  if (authBtn) {
    authBtn.addEventListener('click', () => showAuthModal());
  }

  // Logout
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      auth.logout();
      showToast('Signed out successfully!', 'success');
      renderNavbar();
      router.navigate('/');
    });
  }

  // User dropdown
  const avatarBtn = document.getElementById('user-avatar-btn');
  const dropdown = document.getElementById('user-dropdown');
  if (avatarBtn && dropdown) {
    avatarBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('hidden');
    });
    document.addEventListener('click', () => {
      dropdown.classList.add('hidden');
    });
  }

  // Search
  const searchInput = document.getElementById('nav-search-input');
  if (searchInput) {
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => handleSearch(e.target.value), 200);
    });
    searchInput.addEventListener('blur', () => {
      setTimeout(() => {
        const results = document.getElementById('search-results');
        if (results) results.remove();
      }, 200);
    });
  }

  // Scroll effect
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 30);
  });
}

function handleSearch(query) {
  const existing = document.getElementById('search-results');
  if (existing) existing.remove();

  if (!query.trim()) return;

  const results = searchCurriculum(query);
  if (results.length === 0) return;

  const container = document.createElement('div');
  container.id = 'search-results';
  container.className = 'search-results';
  container.innerHTML = results.slice(0, 8).map(day => `
    <div class="search-result-item" onclick="location.hash='#/lesson/${day.day}'; this.parentElement.remove();">
      <span class="search-result-day">Day ${day.day}</span>
      <div>
        <div class="search-result-title">${day.icon} ${day.title}</div>
        <div class="search-result-desc">${day.topics.slice(0, 3).join(', ')}</div>
      </div>
    </div>
  `).join('');

  document.body.appendChild(container);
}

// ============================================================
// AUTH MODAL
// ============================================================
function showAuthModal(mode = 'signup') {
  const modal = document.getElementById('auth-modal');
  modal.classList.remove('hidden');

  const isLogin = mode === 'login';

  modal.innerHTML = `
    <div class="modal">
      <button class="modal-close" id="modal-close-btn">✕</button>
      <h2>${isLogin ? 'Welcome Back!' : 'Start Learning Today'}</h2>
      <p class="modal-subtitle">${isLogin ? 'Sign in to continue your Python journey' : 'Create your free account to track progress'}</p>
      
      <form id="auth-form">
        ${!isLogin ? `
          <div class="form-group">
            <label class="form-label">Full Name</label>
            <input type="text" class="form-input" id="auth-name" placeholder="John Doe" required />
          </div>
        ` : ''}
        <div class="form-group">
          <label class="form-label">Email Address</label>
          <input type="email" class="form-input" id="auth-email" placeholder="you@example.com" required />
        </div>
        <div class="form-group">
          <label class="form-label">Password</label>
          <input type="password" class="form-input" id="auth-password" placeholder="${isLogin ? 'Enter password' : 'Min 6 characters'}" required />
        </div>
        <div id="auth-error" class="form-error" style="display:none;"></div>
        <button type="submit" class="btn btn-primary btn-lg" style="width:100%; margin-top: 8px;">
          ${isLogin ? 'Sign In' : 'Create Account'} →
        </button>
      </form>

      <div class="modal-toggle">
        ${isLogin ? "Don't have an account?" : 'Already have an account?'}
        <button id="auth-toggle-btn">${isLogin ? 'Sign Up' : 'Sign In'}</button>
      </div>
    </div>
  `;

  // Wait for DOM update then add listeners
  requestAnimationFrame(() => {
    modal.classList.add('visible');
    
    document.getElementById('modal-close-btn').addEventListener('click', closeAuthModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeAuthModal(); });

    document.getElementById('auth-toggle-btn').addEventListener('click', () => {
      showAuthModal(isLogin ? 'signup' : 'login');
    });

    document.getElementById('auth-form').addEventListener('submit', (e) => {
      e.preventDefault();
      handleAuth(isLogin);
    });
  });
}

function closeAuthModal() {
  const modal = document.getElementById('auth-modal');
  modal.classList.remove('visible');
  setTimeout(() => {
    modal.classList.add('hidden');
    modal.innerHTML = '';
  }, 250);
}

function handleAuth(isLogin) {
  const email = document.getElementById('auth-email').value;
  const password = document.getElementById('auth-password').value;
  const errorEl = document.getElementById('auth-error');

  let result;
  if (isLogin) {
    result = auth.login(email, password);
  } else {
    const name = document.getElementById('auth-name').value;
    result = auth.signup(name, email, password);
  }

  if (result.success) {
    closeAuthModal();
    showToast(`Welcome${isLogin ? ' back' : ''}, ${result.user.name}! 🎉`, 'success');
    renderNavbar();
    router.navigate('/dashboard');
  } else {
    errorEl.textContent = result.error;
    errorEl.style.display = 'block';
  }
}

// ============================================================
// FOOTER
// ============================================================
function renderFooter() {
  const footer = document.getElementById('main-footer');
  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <h3>🐍 PyMaster30</h3>
          <p>Master Python in 30 days with interactive lessons, live code editor, quizzes, and real-world projects. From zero to hero — your journey starts here.</p>
        </div>
        <div class="footer-column">
          <h4>Learn</h4>
          <ul>
            <li><a href="#/roadmap">Curriculum</a></li>
            <li><a href="#/playground">Code Playground</a></li>
            <li><a href="#/resources">Resources</a></li>
            <li><a href="#/lesson/1">Start Day 1</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Projects</h4>
          <ul>
            <li><a href="#/lesson/27">To-Do List App</a></li>
            <li><a href="#/lesson/28">Password Generator</a></li>
            <li><a href="#/lesson/29">Rock Paper Scissors</a></li>
            <li><a href="#/lesson/30">Final Challenge</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><a href="https://python.org" target="_blank">Python.org</a></li>
            <li><a href="https://docs.python.org/3/" target="_blank">Python Docs</a></li>
            <li><a href="https://replit.com" target="_blank">Replit</a></li>
            <li><a href="https://github.com" target="_blank">GitHub</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2024 PyMaster30. Built with ❤️ for Python learners.</span>
        <span>Learn Consistently. Code Daily. Become a Python Developer.</span>
      </div>
      <div class="footer-quote">
        "Code is like humor. When you have to explain it, it's bad." — Cory House
      </div>
    </div>
  `;
}

// ============================================================
// HOME PAGE
// ============================================================
function renderHomePage() {
  const main = document.getElementById('main-content');
  main.innerHTML = `
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-content">
            <div class="hero-badge">
              <span class="hero-badge-dot"></span>
              30-Day Learning Path
            </div>
            <h1>
              Master <span class="text-gradient">Python</span><br>
              From <span class="highlight">Zero</span> to <span class="highlight">Hero</span>
            </h1>
            <p class="hero-description">
              Join thousands of learners on a structured 30-day journey through Python. 
              Interactive lessons, live code editor, real-world projects, and quizzes — 
              everything you need to become a confident Python developer.
            </p>
            <div class="hero-cta">
              <button class="btn btn-primary btn-lg" onclick="location.hash='#/lesson/1'">
                🚀 Start Day 1 — Free
              </button>
              <button class="btn btn-secondary btn-lg" onclick="location.hash='#/roadmap'">
                📋 View Roadmap
              </button>
            </div>
            <div class="hero-stats">
              <div class="hero-stat">
                <div class="hero-stat-value">30</div>
                <div class="hero-stat-label">Days</div>
              </div>
              <div class="hero-stat">
                <div class="hero-stat-value">100+</div>
                <div class="hero-stat-label">Code Examples</div>
              </div>
              <div class="hero-stat">
                <div class="hero-stat-value">90+</div>
                <div class="hero-stat-label">Quiz Questions</div>
              </div>
              <div class="hero-stat">
                <div class="hero-stat-value">3</div>
                <div class="hero-stat-label">Projects</div>
              </div>
            </div>
          </div>

          <div class="hero-visual">
            <div class="hero-float" style="font-size: 0.85rem;">
              <span style="color: var(--color-success);">✓</span> No installation needed
            </div>
            <div class="hero-float" style="font-size: 0.85rem;">
              <span style="color: var(--color-python-yellow);">⚡</span> Live code editor
            </div>
            <div class="hero-float" style="font-size: 0.85rem;">
              <span style="color: var(--color-accent-secondary);">📊</span> Track progress
            </div>
            <div class="hero-code-window">
              <div class="code-window-header">
                <span class="code-window-dot red"></span>
                <span class="code-window-dot yellow"></span>
                <span class="code-window-dot green"></span>
                <span class="code-window-title">hello_world.py</span>
              </div>
              <div class="code-window-body">
                <span class="code-line"><span class="code-comment"># Your Python journey starts here! 🐍</span></span>
                <span class="code-line"><span class="code-keyword">def</span> <span class="code-function">learn_python</span>():</span>
                <span class="code-line">    skills = [<span class="code-string">"variables"</span>, <span class="code-string">"loops"</span>, <span class="code-string">"OOP"</span>]</span>
                <span class="code-line">    <span class="code-keyword">for</span> skill <span class="code-keyword">in</span> skills:</span>
                <span class="code-line">        <span class="code-builtin">print</span>(<span class="code-string">f"Learning </span><span class="code-operator">{</span>skill<span class="code-operator">}</span><span class="code-string">..."</span>)</span>
                <span class="code-line">    <span class="code-keyword">return</span> <span class="code-string">"🏆 Python Master!"</span></span>
                <span class="code-line"></span>
                <span class="code-line"><span class="code-builtin">print</span>(<span class="code-function">learn_python</span>())</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <div class="section-header">
          <div class="section-label">✨ Platform Features</div>
          <h2 class="section-title">Everything You Need to <span class="text-gradient">Master Python</span></h2>
          <p class="section-description">A comprehensive learning platform designed with beginners in mind. No experience required.</p>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon" style="background: rgba(16, 185, 129, 0.1);">📚</div>
            <h3>Structured Curriculum</h3>
            <p>30 carefully designed lessons progressing from basic variables to building complete projects. Each lesson builds on the last.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon" style="background: rgba(99, 102, 241, 0.1);">💻</div>
            <h3>Live Code Editor</h3>
            <p>Write and run Python code directly in your browser with our integrated Pyodide-powered editor. No installation required.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon" style="background: rgba(245, 158, 11, 0.1);">📝</div>
            <h3>Quizzes & Exercises</h3>
            <p>Test your understanding with interactive quizzes and coding exercises for every lesson. Get instant feedback.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon" style="background: rgba(239, 68, 68, 0.1);">🎥</div>
            <h3>Video Resources</h3>
            <p>Curated YouTube tutorials from top channels like Corey Schafer, Programming with Mosh, and Tech With Tim.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon" style="background: rgba(139, 92, 246, 0.1);">🏗️</div>
            <h3>Real Projects</h3>
            <p>Build 3 complete projects: To-Do App, Password Generator, and Rock Paper Scissors. Apply what you've learned!</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon" style="background: rgba(59, 130, 246, 0.1);">📊</div>
            <h3>Progress Tracking</h3>
            <p>Create an account to save your progress, track completed lessons, quiz scores, and see your learning journey visualized.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Curriculum Preview -->
    <section class="roadmap-section" id="curriculum-preview">
      <div class="container">
        <div class="section-header">
          <div class="section-label">🗺️ Learning Path</div>
          <h2 class="section-title">Your 30-Day <span class="text-gradient">Python Journey</span></h2>
          <p class="section-description">A proven roadmap taking you from complete beginner to building real applications.</p>
        </div>
        ${renderRoadmapWeeks()}
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section" style="text-align: center;">
      <div class="container">
        <h2 class="section-title">Ready to Start Your <span class="text-gradient">Python Journey</span>?</h2>
        <p class="section-description" style="margin-bottom: 2rem;">Join thousands of learners. No cost. No installation. Just pure Python learning.</p>
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <button class="btn btn-primary btn-lg" onclick="location.hash='#/lesson/1'">🚀 Start Learning Now</button>
          <button class="btn btn-secondary btn-lg" onclick="location.hash='#/playground'">💻 Try the Playground</button>
        </div>
      </div>
    </section>
  `;

  // Animate roadmap weeks on scroll
  observeElements('.roadmap-week');
}

// ============================================================
// ROADMAP PAGE
// ============================================================
function renderRoadmapWeeks() {
  return `<div class="roadmap-weeks">${weeks.map(week => {
    const days = week.days.map(d => getDayByNumber(d)).filter(Boolean);
    return `
      <div class="roadmap-week" data-animate>
        <div class="week-header">
          <div class="week-number ${week.difficulty}">W${week.number}</div>
          <div class="week-info">
            <h3>${week.title}</h3>
            <p>${week.description}</p>
          </div>
          <span class="week-badge ${week.difficulty}">${week.difficulty}</span>
        </div>
        <div class="days-grid">
          ${days.map(day => renderDayCard(day)).join('')}
        </div>
      </div>
    `;
  }).join('')}</div>`;
}

function renderDayCard(day) {
  const completed = auth.isDayCompleted(day.day);
  const started = auth.isDayStarted(day.day);
  
  return `
    <div class="day-card ${completed ? 'completed' : ''}" onclick="location.hash='#/lesson/${day.day}'">
      <div class="day-card-header">
        <span class="day-number">${day.isProject ? '🏗️ Project' : `Day ${day.day}`}</span>
        <span class="day-icon">${day.icon}</span>
      </div>
      <h4>${day.title}</h4>
      <ul class="day-topics">
        ${day.topics.slice(0, 4).map(t => `<li>${t}</li>`).join('')}
      </ul>
      <div class="day-card-footer">
        <div class="day-progress">
          <div class="day-progress-bar">
            <div class="day-progress-fill" style="width: ${completed ? '100' : started ? '50' : '0'}%"></div>
          </div>
          <span>${completed ? '100%' : started ? '50%' : '0%'}</span>
        </div>
        <span class="day-status ${completed ? 'completed' : started ? 'in-progress' : ''}">
          ${completed ? '✅ Done' : started ? '🔄 In Progress' : '○ Start'}
        </span>
      </div>
    </div>
  `;
}

function renderRoadmapPage() {
  const main = document.getElementById('main-content');
  main.innerHTML = `
    <div class="lesson-page">
      <div class="container">
        <div class="section-header" style="margin-bottom: 3rem;">
          <div class="section-label">🗺️ Complete Roadmap</div>
          <h1 class="section-title">30-Day Python <span class="text-gradient">Curriculum</span></h1>
          <p class="section-description">Follow the path from beginner to project builder. Each day builds on the previous one.</p>
        </div>
        ${renderRoadmapWeeks()}
      </div>
    </div>
  `;
  observeElements('.roadmap-week');
}

// ============================================================
// LESSON PAGE
// ============================================================
function renderLessonPage(dayNum) {
  const day = getDayByNumber(parseInt(dayNum));
  if (!day) {
    renderNotFoundPage();
    return;
  }

  // Mark as started
  if (auth.isLoggedIn()) {
    auth.updateProgress(day.day);
  }

  const main = document.getElementById('main-content');
  const prevDay = getDayByNumber(day.day - 1);
  const nextDay = getDayByNumber(day.day + 1);
  const completed = auth.isDayCompleted(day.day);

  main.innerHTML = `
    <div class="lesson-page page-enter">
      <div class="lesson-layout">
        <!-- Sidebar -->
        <aside class="lesson-sidebar">
          <h3>📚 Lessons</h3>
          <nav class="sidebar-nav">
            ${curriculum.map(d => `
              <div class="sidebar-nav-item ${d.day === day.day ? 'active' : ''} ${auth.isDayCompleted(d.day) ? 'completed' : ''}"
                   onclick="location.hash='#/lesson/${d.day}'">
                <span class="sidebar-check">${auth.isDayCompleted(d.day) ? '✓' : ''}</span>
                <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                  ${d.day}. ${d.title}
                </span>
              </div>
            `).join('')}
          </nav>
        </aside>

        <!-- Main Content -->
        <div class="lesson-content">
          <!-- Header -->
          <div class="lesson-header">
            <div class="lesson-breadcrumb">
              <a href="#/">Home</a> › <a href="#/roadmap">Roadmap</a> › 
              <span style="color: var(--color-text-primary);">Day ${day.day}</span>
            </div>
            <div class="lesson-meta">
              <span class="lesson-meta-item">
                <span class="week-badge ${day.difficulty}">${day.difficulty}</span>
              </span>
              <span class="lesson-meta-item">⏱️ ${day.estimatedTime}</span>
              <span class="lesson-meta-item">${day.icon} Week ${day.week}</span>
            </div>
            <h1 class="lesson-title">Day ${day.day}: ${day.title}</h1>
            <p class="lesson-intro">${day.description}</p>
          </div>

          <!-- Content Sections -->
          ${day.content.map(section => renderLessonSection(section)).join('')}

          <!-- Exercises -->
          ${day.exercises && day.exercises.length > 0 ? `
            <div class="lesson-section">
              <h2>💪 Practice Exercises</h2>
              ${day.exercises.map(ex => renderExercise(ex)).join('')}
            </div>
          ` : ''}

          <!-- Quiz -->
          ${day.quiz && day.quiz.length > 0 ? `
            <div class="lesson-section">
              <h2>🧠 Knowledge Check</h2>
              <div id="quiz-container">${renderQuiz(day)}</div>
            </div>
          ` : ''}

          <!-- YouTube Resources -->
          ${day.youtubeLinks && day.youtubeLinks.length > 0 ? `
            <div class="youtube-section">
              <h3>🎥 Recommended Videos</h3>
              <div class="youtube-links">
                ${day.youtubeLinks.map(link => `
                  <a href="${link.url}" target="_blank" rel="noopener" class="youtube-link">
                    <span class="youtube-link-icon">▶️</span>
                    <div class="youtube-link-info">
                      <div class="youtube-link-title">${link.title}</div>
                      <div class="youtube-link-channel">📺 ${link.channel}</div>
                    </div>
                  </a>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Complete Button -->
          <button class="btn ${completed ? 'complete-lesson-btn completed' : 'btn-success btn-lg complete-lesson-btn'}" 
                  id="complete-btn" ${completed ? '' : `onclick="completeLesson(${day.day})"`}>
            ${completed ? '✅ Lesson Completed!' : '✅ Mark as Complete'}
          </button>

          <!-- Navigation -->
          <div class="lesson-nav">
            ${prevDay ? `
              <div class="lesson-nav-btn" onclick="location.hash='#/lesson/${prevDay.day}'">
                <div>
                  <div class="lesson-nav-label">← Previous</div>
                  <div class="lesson-nav-title">Day ${prevDay.day}: ${prevDay.title}</div>
                </div>
              </div>
            ` : '<div></div>'}
            ${nextDay ? `
              <div class="lesson-nav-btn" onclick="location.hash='#/lesson/${nextDay.day}'" style="text-align: right;">
                <div>
                  <div class="lesson-nav-label">Next →</div>
                  <div class="lesson-nav-title">Day ${nextDay.day}: ${nextDay.title}</div>
                </div>
              </div>
            ` : '<div></div>'}
          </div>
        </div>
      </div>
    </div>
  `;

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderLessonSection(section) {
  switch (section.type) {
    case 'text':
      return `
        <div class="lesson-section">
          <h2>${section.title}</h2>
          <div>${formatMarkdown(section.body)}</div>
        </div>
      `;
    case 'code':
      return `
        <div class="lesson-section">
          <h2>${section.title}</h2>
          ${section.explanation ? `<p>${section.explanation}</p>` : ''}
          <div class="code-block">
            <div class="code-block-header">
              <span class="code-block-title">🐍 ${section.filename || 'script.py'}</span>
              <div class="code-block-actions">
                <button class="code-block-btn" onclick="copyCode(this)">📋 Copy</button>
                <button class="code-block-btn run" onclick="runInPlayground(this)">▶ Run</button>
              </div>
            </div>
            <pre><code>${escapeHtml(section.code)}</code></pre>
          </div>
        </div>
      `;
    case 'tip':
      return `
        <div class="info-box tip">
          <span class="info-box-icon">💡</span>
          <div class="info-box-content">
            <h4>${section.title || 'Tip'}</h4>
            <p>${section.body}</p>
          </div>
        </div>
      `;
    case 'warning':
      return `
        <div class="info-box warning">
          <span class="info-box-icon">⚠️</span>
          <div class="info-box-content">
            <h4>${section.title || 'Warning'}</h4>
            <p>${section.body}</p>
          </div>
        </div>
      `;
    case 'info':
      return `
        <div class="info-box info">
          <span class="info-box-icon">ℹ️</span>
          <div class="info-box-content">
            <h4>${section.title || 'Note'}</h4>
            <p>${section.body}</p>
          </div>
        </div>
      `;
    default:
      return '';
  }
}

function renderExercise(exercise) {
  return `
    <div class="exercise-container" id="exercise-${exercise.id}">
      <div class="exercise-header">
        <div class="exercise-title">
          <h3>🎯 ${exercise.title}</h3>
          <span class="exercise-badge ${exercise.difficulty}">${exercise.difficulty}</span>
        </div>
      </div>
      <p class="exercise-description">${exercise.description}</p>
      
      <div class="code-block">
        <div class="code-block-header">
          <span class="code-block-title">📝 Starter Code</span>
          <div class="code-block-actions">
            <button class="code-block-btn" onclick="copyCode(this)">📋 Copy</button>
            <button class="code-block-btn run" onclick="runInPlayground(this)">▶ Try It</button>
          </div>
        </div>
        <pre><code>${escapeHtml(exercise.starterCode)}</code></pre>
      </div>

      <div style="display:flex; gap: 0.5rem; margin-bottom: 1rem;">
        <button class="btn btn-secondary btn-sm" onclick="toggleHint('${exercise.id}')">💡 Show Hint</button>
        <button class="btn btn-secondary btn-sm" onclick="toggleSolution('${exercise.id}')">🔑 Show Solution</button>
      </div>

      <div id="hint-${exercise.id}" class="info-box tip" style="display:none;">
        <span class="info-box-icon">💡</span>
        <div class="info-box-content">
          <h4>Hint</h4>
          <p>${exercise.hint}</p>
        </div>
      </div>

      <div id="solution-${exercise.id}" style="display:none;">
        <div class="code-block">
          <div class="code-block-header">
            <span class="code-block-title">✅ Solution</span>
            <div class="code-block-actions">
              <button class="code-block-btn" onclick="copyCode(this)">📋 Copy</button>
            </div>
          </div>
          <pre><code>${escapeHtml(exercise.solution)}</code></pre>
        </div>
      </div>
    </div>
  `;
}

function renderQuiz(day) {
  const quiz = day.quiz;
  if (!quiz || quiz.length === 0) return '';

  return `
    <div class="quiz-container">
      <div class="quiz-header">
        <div class="quiz-title">🧠 Quiz — Day ${day.day}: ${day.title}</div>
        <div class="quiz-progress-text" id="quiz-progress">${quiz.length} questions</div>
      </div>
      ${quiz.map((q, i) => `
        <div class="quiz-question" id="quiz-q-${i}">
          <h3>Q${i + 1}. ${q.question}</h3>
          <div class="quiz-options">
            ${q.options.map((opt, j) => `
              <div class="quiz-option" data-question="${i}" data-option="${j}" onclick="selectQuizOption(${i}, ${j}, ${q.correct})">
                <span class="quiz-option-letter">${String.fromCharCode(65 + j)}</span>
                <span>${opt}</span>
              </div>
            `).join('')}
          </div>
          <div id="quiz-feedback-${i}" class="quiz-feedback" style="display:none;"></div>
        </div>
      `).join('')}
      <div class="quiz-actions">
        <div id="quiz-score" style="font-weight: 700; color: var(--color-text-secondary);"></div>
        <button class="btn btn-primary" id="quiz-submit-btn" onclick="submitQuiz(${day.day}, ${quiz.length})">Submit Quiz</button>
      </div>
    </div>
  `;
}

// ============================================================
// PLAYGROUND PAGE
// ============================================================
function renderPlaygroundPage() {
  const main = document.getElementById('main-content');
  main.innerHTML = `
    <div class="playground-section page-enter">
      <div class="container" style="margin-bottom: 1rem;">
        <h2 style="font-size: 1.5rem; font-weight: 700;">
          💻 Python Playground
          <span style="font-size: 0.9rem; font-weight: 400; color: var(--color-text-secondary); margin-left: 0.5rem;">
            Powered by Pyodide (Python in Browser)
          </span>
        </h2>
      </div>
      <div class="playground-layout">
        <div class="editor-panel">
          <div class="editor-toolbar">
            <div class="editor-toolbar-left">
              <span style="color: var(--color-success); font-size: 0.9rem;">●</span>
              <span class="editor-toolbar-title">main.py</span>
            </div>
            <div class="editor-toolbar-right">
              <button class="btn btn-sm btn-ghost" onclick="clearEditor()">🗑️ Clear</button>
              <button class="btn btn-sm btn-ghost" onclick="loadExample()">📋 Example</button>
              <button class="btn btn-sm btn-success" onclick="runPython()" id="run-btn">▶ Run</button>
            </div>
          </div>
          <textarea class="editor-textarea" id="python-editor" spellcheck="false" placeholder="# Write your Python code here...
# Press 'Run' to execute

print('Hello, Python! 🐍')
"># Welcome to PyMaster30 Playground! 🐍
# Write your Python code and click Run

# Example: Variables and loops
name = "Python Learner"
print(f"Hello, {name}!")

for i in range(1, 6):
    print(f"  Day {i}: Learning something new!")

print("\\n🎉 Keep coding, keep growing!")
</textarea>
        </div>
        <div class="output-panel">
          <div class="output-toolbar">
            <span class="output-toolbar-title">📤 Output</span>
            <button class="btn btn-sm btn-ghost" onclick="clearOutput()">Clear</button>
          </div>
          <div class="output-content" id="python-output">
            <span style="color: var(--color-text-tertiary);">Click "Run" to execute your Python code...</span>
          </div>
        </div>
      </div>
    </div>
  `;

  // Handle Tab key in textarea
  const editor = document.getElementById('python-editor');
  editor.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = editor.selectionStart;
      const end = editor.selectionEnd;
      editor.value = editor.value.substring(0, start) + '    ' + editor.value.substring(end);
      editor.selectionStart = editor.selectionEnd = start + 4;
    }
    // Ctrl+Enter to run
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      runPython();
    }
  });
}

// ============================================================
// DASHBOARD PAGE
// ============================================================
function renderDashboardPage() {
  const user = auth.getUser();
  if (!user) {
    showAuthModal('login');
    router.navigate('/');
    return;
  }

  const progress = auth.getProgress();
  const completedCount = progress.completed.length;
  const percentage = auth.getCompletionPercentage();
  const quizCount = Object.keys(progress.quizScores).length;
  const totalQuizScore = Object.values(progress.quizScores).reduce((sum, q) => sum + q.score, 0);
  const totalQuizPossible = Object.values(progress.quizScores).reduce((sum, q) => sum + q.total, 0);

  const main = document.getElementById('main-content');
  main.innerHTML = `
    <div class="dashboard-page page-enter">
      <div class="container">
        <div class="dashboard-header">
          <h1 class="dashboard-greeting">Welcome back, <span class="text-gradient">${user.name}</span>! 👋</h1>
          <p class="dashboard-subtitle">Here's your learning progress. Keep up the great work!</p>
        </div>

        <!-- Stats Cards -->
        <div class="dashboard-stats">
          <div class="stat-card">
            <div class="stat-card-icon">📚</div>
            <div class="stat-card-value">${completedCount}/30</div>
            <div class="stat-card-label">Lessons Completed</div>
          </div>
          <div class="stat-card">
            <div class="stat-card-icon">🎯</div>
            <div class="stat-card-value">${percentage}%</div>
            <div class="stat-card-label">Overall Progress</div>
          </div>
          <div class="stat-card">
            <div class="stat-card-icon">🧠</div>
            <div class="stat-card-value">${quizCount}</div>
            <div class="stat-card-label">Quizzes Taken</div>
          </div>
          <div class="stat-card">
            <div class="stat-card-icon">⭐</div>
            <div class="stat-card-value">${totalQuizPossible > 0 ? Math.round((totalQuizScore / totalQuizPossible) * 100) : 0}%</div>
            <div class="stat-card-label">Quiz Accuracy</div>
          </div>
        </div>

        <!-- Progress Bar -->
        <div class="overall-progress">
          <div class="overall-progress-header">
            <h3>🏆 Overall Progress</h3>
            <span class="overall-progress-percentage">${percentage}%</span>
          </div>
          <div class="overall-progress-bar">
            <div class="overall-progress-fill" style="width: ${percentage}%"></div>
          </div>
          <p style="margin-top: 1rem; font-size: 0.9rem; color: var(--color-text-secondary);">
            ${completedCount === 0 ? '🚀 Start your journey! Head to Day 1 to begin.' :
              completedCount < 10 ? `🌱 Great start! You've completed ${completedCount} lessons. Keep going!` :
              completedCount < 20 ? `💪 Impressive progress! You're building real skills.` :
              completedCount < 30 ? `🔥 Almost there! Just ${30 - completedCount} more lessons to go!` :
              `🏆 Congratulations! You've completed the entire 30-Day Python Challenge!`}
          </p>
        </div>

        <!-- Continue Learning -->
        <div style="margin-bottom: 2rem;">
          <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem;">📖 Continue Learning</h3>
          <div class="days-grid">
            ${getNextLessons(progress.completed).map(day => renderDayCard(day)).join('')}
          </div>
        </div>

        <!-- Completed Lessons -->
        ${completedCount > 0 ? `
          <div>
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem;">✅ Completed Lessons</h3>
            <div class="days-grid">
              ${progress.completed.map(d => {
                const day = getDayByNumber(d);
                return day ? renderDayCard(day) : '';
              }).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

function getNextLessons(completed) {
  const next = [];
  for (let i = 1; i <= 30; i++) {
    if (!completed.includes(i)) {
      next.push(getDayByNumber(i));
      if (next.length >= 6) break;
    }
  }
  return next.filter(Boolean);
}

// ============================================================
// RESOURCES PAGE
// ============================================================
function renderResourcesPage() {
  const main = document.getElementById('main-content');
  main.innerHTML = `
    <div class="lesson-page page-enter">
      <div class="container">
        <div class="section-header" style="margin-bottom: 3rem;">
          <div class="section-label">📖 Resource Library</div>
          <h1 class="section-title">Python Learning <span class="text-gradient">Resources</span></h1>
          <p class="section-description">Curated collection of the best Python tutorials, documentation, and tools.</p>
        </div>

        <!-- Tabs -->
        <div class="tabs">
          <button class="tab active" onclick="filterResources('all', this)">All</button>
          <button class="tab" onclick="filterResources('video', this)">🎥 Videos</button>
          <button class="tab" onclick="filterResources('docs', this)">📄 Documentation</button>
          <button class="tab" onclick="filterResources('article', this)">📝 Articles & Tools</button>
        </div>

        <div class="resources-grid" id="resources-grid">
          ${getResources().map(r => `
            <div class="resource-card" data-type="${r.type}">
              <div class="resource-card-type ${r.type}">${r.typeIcon} ${r.typeLabel}</div>
              <h3>${r.title}</h3>
              <p>${r.description}</p>
              <a href="${r.url}" target="_blank" rel="noopener" class="resource-card-link">
                Visit Resource →
              </a>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function getResources() {
  return [
    { type: 'video', typeIcon: '🎥', typeLabel: 'Video', title: 'Python Tutorial for Beginners — Full Course', description: 'Complete Python tutorial by Programming with Mosh. 6 hours of comprehensive content.', url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc' },
    { type: 'video', typeIcon: '🎥', typeLabel: 'Video', title: 'Corey Schafer — Python Tutorials', description: 'One of the best Python tutorial series on YouTube. Covers basics to advanced topics.', url: 'https://www.youtube.com/c/Coreyms' },
    { type: 'video', typeIcon: '🎥', typeLabel: 'Video', title: 'Tech With Tim — Python Projects', description: 'Project-based Python tutorials for intermediate learners.', url: 'https://www.youtube.com/c/TechWithTim' },
    { type: 'video', typeIcon: '🎥', typeLabel: 'Video', title: 'freeCodeCamp — Python Full Course', description: 'Free, comprehensive Python course from freeCodeCamp.', url: 'https://www.youtube.com/watch?v=rfscVS0vtbw' },
    { type: 'docs', typeIcon: '📄', typeLabel: 'Documentation', title: 'Official Python Documentation', description: 'The official Python docs — the most comprehensive reference for the language.', url: 'https://docs.python.org/3/' },
    { type: 'docs', typeIcon: '📄', typeLabel: 'Documentation', title: 'Python Standard Library', description: 'Reference for all built-in modules and functions in Python.', url: 'https://docs.python.org/3/library/' },
    { type: 'docs', typeIcon: '📄', typeLabel: 'Documentation', title: 'PEP 8 — Style Guide', description: 'The official Python style guide. Learn to write clean, Pythonic code.', url: 'https://peps.python.org/pep-0008/' },
    { type: 'article', typeIcon: '📝', typeLabel: 'Tool', title: 'Replit — Online Python IDE', description: 'Free online IDE where you can write and run Python instantly in the browser.', url: 'https://replit.com/languages/python3' },
    { type: 'article', typeIcon: '📝', typeLabel: 'Tool', title: 'Python Tutor — Code Visualizer', description: 'Visualize Python code execution step by step. Perfect for understanding how code works.', url: 'https://pythontutor.com/' },
    { type: 'article', typeIcon: '📝', typeLabel: 'Practice', title: 'LeetCode — Python Problems', description: 'Practice coding problems to sharpen your Python skills.', url: 'https://leetcode.com/problemset/' },
    { type: 'article', typeIcon: '📝', typeLabel: 'Practice', title: 'HackerRank — Python Track', description: 'Structured Python challenges from beginner to advanced.', url: 'https://www.hackerrank.com/domains/python' },
    { type: 'article', typeIcon: '📝', typeLabel: 'Community', title: 'r/learnpython — Reddit', description: 'Active community of Python learners helping each other.', url: 'https://www.reddit.com/r/learnpython/' },
  ];
}

// ============================================================
// 404 PAGE
// ============================================================
function renderNotFoundPage() {
  const main = document.getElementById('main-content');
  main.innerHTML = `
    <div class="lesson-page" style="text-align: center; padding-top: calc(var(--nav-height) + 5rem);">
      <div class="container">
        <div style="font-size: 6rem; margin-bottom: 1rem;">🐍</div>
        <h1 style="font-size: 2rem; margin-bottom: 1rem;">Page Not Found</h1>
        <p style="color: var(--color-text-secondary); margin-bottom: 2rem;">The page you're looking for doesn't exist.</p>
        <button class="btn btn-primary btn-lg" onclick="location.hash='#/'">← Back to Home</button>
      </div>
    </div>
  `;
}

// ============================================================
// GLOBAL FUNCTIONS (attached to window)
// ============================================================

// Quiz handling
window.selectQuizOption = function(questionIdx, optionIdx, correctIdx) {
  const options = document.querySelectorAll(`[data-question="${questionIdx}"]`);
  
  // Prevent re-selection
  if (options[0].closest('.quiz-question').dataset.answered) return;
  options[0].closest('.quiz-question').dataset.answered = 'true';

  options.forEach((opt, i) => {
    opt.style.pointerEvents = 'none';
    if (i === correctIdx) opt.classList.add('correct');
    if (i === optionIdx && i !== correctIdx) opt.classList.add('incorrect');
  });

  const feedback = document.getElementById(`quiz-feedback-${questionIdx}`);
  const quizData = curriculum.find(d => {
    const hash = window.location.hash.slice(1);
    const dayNum = parseInt(hash.split('/').pop());
    return d.day === dayNum;
  });

  if (quizData && quizData.quiz[questionIdx]) {
    feedback.innerHTML = optionIdx === correctIdx
      ? `✅ Correct! ${quizData.quiz[questionIdx].explanation}`
      : `❌ Incorrect. ${quizData.quiz[questionIdx].explanation}`;
    feedback.className = `quiz-feedback ${optionIdx === correctIdx ? 'correct' : 'incorrect'}`;
    feedback.style.display = 'block';
  }
};

window.submitQuiz = function(dayNum, totalQuestions) {
  const answered = document.querySelectorAll('.quiz-question[data-answered="true"]');
  const correct = document.querySelectorAll('.quiz-option.correct.selected, .quiz-option.correct').length;
  
  // Count actual correct answers
  let score = 0;
  document.querySelectorAll('.quiz-question').forEach(q => {
    const selectedCorrect = q.querySelector('.quiz-option.selected.correct');
    if (selectedCorrect) score++;
  });

  // Actually count selected options that are correct
  score = 0;
  document.querySelectorAll('.quiz-question').forEach((q, i) => {
    const selected = q.querySelector('.quiz-option.selected');
    const correct = q.querySelector('.quiz-option.correct');
    if (selected && selected === correct) score++;
  });

  // Simpler: count questions where the selected option IS the correct option
  score = document.querySelectorAll('.quiz-feedback.correct').length;

  const scoreEl = document.getElementById('quiz-score');
  scoreEl.textContent = `Score: ${score}/${totalQuestions} (${Math.round((score / totalQuestions) * 100)}%)`;
  scoreEl.style.color = score >= totalQuestions * 0.7 ? 'var(--color-success)' : 'var(--color-warning)';

  if (auth.isLoggedIn()) {
    auth.saveQuizScore(dayNum, score, totalQuestions);
    showToast(`Quiz completed! Score: ${score}/${totalQuestions}`, score >= totalQuestions * 0.7 ? 'success' : 'info');
  }

  document.getElementById('quiz-submit-btn').disabled = true;
  document.getElementById('quiz-submit-btn').textContent = '✅ Submitted';
};

window.completeLesson = function(dayNum) {
  if (!auth.isLoggedIn()) {
    showAuthModal('signup');
    showToast('Create an account to track your progress!', 'info');
    return;
  }

  auth.updateProgress(dayNum, true);
  showToast(`🎉 Day ${dayNum} completed! Great job!`, 'success');

  const btn = document.getElementById('complete-btn');
  btn.className = 'btn complete-lesson-btn completed';
  btn.innerHTML = '✅ Lesson Completed!';
  btn.onclick = null;

  renderNavbar();
};

window.toggleHint = function(exerciseId) {
  const hint = document.getElementById(`hint-${exerciseId}`);
  hint.style.display = hint.style.display === 'none' ? 'flex' : 'none';
};

window.toggleSolution = function(exerciseId) {
  const solution = document.getElementById(`solution-${exerciseId}`);
  solution.style.display = solution.style.display === 'none' ? 'block' : 'none';
};

window.copyCode = function(btn) {
  const code = btn.closest('.code-block').querySelector('code').textContent;
  navigator.clipboard.writeText(code).then(() => {
    const origText = btn.textContent;
    btn.textContent = '✅ Copied!';
    setTimeout(() => btn.textContent = origText, 1500);
  });
};

window.runInPlayground = function(btn) {
  const code = btn.closest('.code-block').querySelector('code').textContent;
  sessionStorage.setItem('playground_code', code);
  location.hash = '#/playground';
};

// Playground functions
let pyodide = null;
let pyodideLoading = false;

async function loadPyodide() {
  if (pyodide) return pyodide;
  if (pyodideLoading) return null;
  
  pyodideLoading = true;
  const output = document.getElementById('python-output');
  if (output) output.innerHTML = '<span style="color: var(--color-warning);">⏳ Loading Python environment (first time may take a moment)...</span>';

  try {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js';
    document.head.appendChild(script);

    await new Promise((resolve, reject) => {
      script.onload = resolve;
      script.onerror = reject;
    });

    pyodide = await window.loadPyodide();
    pyodideLoading = false;
    if (output) output.innerHTML = '<span class="success">✅ Python environment ready! Run your code.</span>';
    return pyodide;
  } catch (error) {
    pyodideLoading = false;
    if (output) output.innerHTML = `<span class="error">❌ Failed to load Python. Try refreshing.</span>`;
    return null;
  }
}

window.runPython = async function() {
  const editor = document.getElementById('python-editor');
  const output = document.getElementById('python-output');
  const runBtn = document.getElementById('run-btn');
  
  if (!editor || !output) return;

  runBtn.disabled = true;
  runBtn.textContent = '⏳ Running...';

  const py = await loadPyodide();
  
  if (!py) {
    output.innerHTML = '<span class="error">❌ Python environment not available. Please refresh and try again.</span>';
    runBtn.disabled = false;
    runBtn.textContent = '▶ Run';
    return;
  }

  // Redirect stdout
  py.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
sys.stderr = StringIO()
  `);

  try {
    py.runPython(editor.value);
    const stdout = py.runPython('sys.stdout.getvalue()');
    const stderr = py.runPython('sys.stderr.getvalue()');
    
    let result = '';
    if (stdout) result += stdout;
    if (stderr) result += `<span class="error">${escapeHtml(stderr)}</span>`;
    if (!result) result = '<span style="color: var(--color-text-tertiary);">(No output)</span>';
    
    output.innerHTML = result;
  } catch (error) {
    output.innerHTML = `<span class="error">❌ Error:\n${escapeHtml(error.message)}</span>`;
  }

  runBtn.disabled = false;
  runBtn.textContent = '▶ Run';
};

window.clearEditor = function() {
  const editor = document.getElementById('python-editor');
  if (editor) editor.value = '';
};

window.clearOutput = function() {
  const output = document.getElementById('python-output');
  if (output) output.innerHTML = '<span style="color: var(--color-text-tertiary);">Output cleared.</span>';
};

window.loadExample = function() {
  const examples = [
    `# Example: FizzBuzz\nfor i in range(1, 21):\n    if i % 15 == 0:\n        print("FizzBuzz")\n    elif i % 3 == 0:\n        print("Fizz")\n    elif i % 5 == 0:\n        print("Buzz")\n    else:\n        print(i)`,
    `# Example: Fibonacci Sequence\ndef fibonacci(n):\n    a, b = 0, 1\n    result = []\n    for _ in range(n):\n        result.append(a)\n        a, b = b, a + b\n    return result\n\nprint("First 15 Fibonacci numbers:")\nprint(fibonacci(15))`,
    `# Example: Simple Calculator\ndef calculate(a, op, b):\n    operations = {\n        '+': a + b,\n        '-': a - b,\n        '*': a * b,\n        '/': a / b if b != 0 else 'Error: Division by zero'\n    }\n    return operations.get(op, 'Invalid operator')\n\nprint(f"10 + 5 = {calculate(10, '+', 5)}")\nprint(f"10 - 3 = {calculate(10, '-', 3)}")\nprint(f"10 * 4 = {calculate(10, '*', 4)}")\nprint(f"10 / 3 = {calculate(10, '/', 3):.2f}")`,
    `# Example: List Comprehensions\nnumbers = list(range(1, 21))\n\nsquares = [x**2 for x in numbers]\nevens = [x for x in numbers if x % 2 == 0]\nfizzbuzz = ["FizzBuzz" if x%15==0 else "Fizz" if x%3==0 else "Buzz" if x%5==0 else x for x in numbers]\n\nprint("Numbers:", numbers)\nprint("Squares:", squares)\nprint("Evens:", evens)\nprint("FizzBuzz:", fizzbuzz)`,
    `# Example: OOP - Shape Calculator\nimport math\n\nclass Shape:\n    def area(self):\n        raise NotImplementedError\n\nclass Circle(Shape):\n    def __init__(self, radius):\n        self.radius = radius\n    def area(self):\n        return math.pi * self.radius ** 2\n\nclass Rectangle(Shape):\n    def __init__(self, w, h):\n        self.w, self.h = w, h\n    def area(self):\n        return self.w * self.h\n\nshapes = [Circle(5), Rectangle(4, 6), Circle(3)]\nfor s in shapes:\n    print(f"{s.__class__.__name__}: area = {s.area():.2f}")`
  ];

  const editor = document.getElementById('python-editor');
  if (editor) {
    editor.value = examples[Math.floor(Math.random() * examples.length)];
  }
};

window.filterResources = function(type, btn) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('.resource-card').forEach(card => {
    if (type === 'all' || card.dataset.type === type) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
};

// ============================================================
// UTILITY FUNCTIONS
// ============================================================
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function formatMarkdown(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code style="background: rgba(99,102,241,0.1); padding: 2px 6px; border-radius: 4px; font-size: 0.9em;">$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul style="margin: 0.5rem 0; padding-left: 1.5rem;">$&</ul>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>');
}

function observeElements(selector) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(selector).forEach(el => observer.observe(el));
}

// ============================================================
// ROUTER SETUP
// ============================================================
router.addRoute('/', () => {
  renderNavbar();
  renderHomePage();
  renderFooter();
});

router.addRoute('/roadmap', () => {
  renderNavbar();
  renderRoadmapPage();
  renderFooter();
});

router.addRoute('/lesson/:day', (params) => {
  renderNavbar();
  renderLessonPage(params[0]);
  renderFooter();
});

router.addRoute('/playground', () => {
  renderNavbar();
  renderPlaygroundPage();
  // Check if code was sent from a lesson
  const savedCode = sessionStorage.getItem('playground_code');
  if (savedCode) {
    setTimeout(() => {
      const editor = document.getElementById('python-editor');
      if (editor) editor.value = savedCode;
      sessionStorage.removeItem('playground_code');
    }, 100);
  }
  document.getElementById('main-footer').innerHTML = '';
});

router.addRoute('/dashboard', () => {
  renderNavbar();
  renderDashboardPage();
  renderFooter();
});

router.addRoute('/resources', () => {
  renderNavbar();
  renderResourcesPage();
  renderFooter();
});

// ============================================================
// AUTH STATE LISTENER
// ============================================================
auth.onAuthChange(() => {
  renderNavbar();
});

// Delete tsconfig.json if it exists (we're not using TypeScript)
console.log('🐍 PyMaster30 — 30-Day Python Challenge Platform');
console.log('✨ Built with Vite + Vanilla JS + Pyodide');
