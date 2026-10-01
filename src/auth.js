// ============================================================
// PyMaster30 — Authentication System (LocalStorage-based)
// ============================================================

const AUTH_KEY = 'pymaster30_user';
const USERS_KEY = 'pymaster30_users';

class AuthSystem {
  constructor() {
    this.currentUser = this._loadCurrentUser();
    this.listeners = [];
  }

  _loadCurrentUser() {
    try {
      const data = localStorage.getItem(AUTH_KEY);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  }

  _loadUsers() {
    try {
      const data = localStorage.getItem(USERS_KEY);
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  }

  _saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  _setCurrentUser(user) {
    this.currentUser = user;
    if (user) {
      localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(AUTH_KEY);
    }
    this._notifyListeners();
  }

  _notifyListeners() {
    this.listeners.forEach(fn => fn(this.currentUser));
  }

  onAuthChange(callback) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(fn => fn !== callback);
    };
  }

  isLoggedIn() {
    return this.currentUser !== null;
  }

  getUser() {
    return this.currentUser;
  }

  signup(name, email, password) {
    const users = this._loadUsers();
    
    if (!name || !email || !password) {
      return { success: false, error: 'All fields are required.' };
    }

    if (password.length < 6) {
      return { success: false, error: 'Password must be at least 6 characters.' };
    }

    const emailLower = email.toLowerCase();

    if (users[emailLower]) {
      return { success: false, error: 'An account with this email already exists.' };
    }

    const user = {
      id: 'user_' + Date.now(),
      name: name.trim(),
      email: emailLower,
      password: btoa(password), // Simple encoding (NOT for production)
      joinedAt: new Date().toISOString(),
      progress: {},
      completedDays: [],
      quizScores: {},
      totalTimeSpent: 0,
      streak: 0,
      lastActivity: new Date().toISOString()
    };

    users[emailLower] = user;
    this._saveUsers(users);
    
    // Auto-login after signup
    const { password: _, ...safeUser } = user;
    this._setCurrentUser(safeUser);

    return { success: true, user: safeUser };
  }

  login(email, password) {
    const users = this._loadUsers();

    if (!email || !password) {
      return { success: false, error: 'Email and password are required.' };
    }

    const emailLower = email.toLowerCase();
    const user = users[emailLower];

    if (!user) {
      return { success: false, error: 'No account found with this email.' };
    }

    if (user.password !== btoa(password)) {
      return { success: false, error: 'Incorrect password.' };
    }

    // Update last activity
    user.lastActivity = new Date().toISOString();
    users[emailLower] = user;
    this._saveUsers(users);

    const { password: _, ...safeUser } = user;
    this._setCurrentUser(safeUser);

    return { success: true, user: safeUser };
  }

  logout() {
    this._setCurrentUser(null);
  }

  updateProgress(dayNumber, completed = false) {
    if (!this.currentUser) return;

    const users = this._loadUsers();
    const user = users[this.currentUser.email];
    if (!user) return;

    if (!user.progress) user.progress = {};
    user.progress[dayNumber] = {
      started: true,
      completed,
      lastAccessed: new Date().toISOString()
    };

    if (completed && !user.completedDays.includes(dayNumber)) {
      user.completedDays.push(dayNumber);
      user.completedDays.sort((a, b) => a - b);
    }

    user.lastActivity = new Date().toISOString();
    users[this.currentUser.email] = user;
    this._saveUsers(users);

    const { password: _, ...safeUser } = user;
    this._setCurrentUser(safeUser);
  }

  saveQuizScore(dayNumber, score, total) {
    if (!this.currentUser) return;

    const users = this._loadUsers();
    const user = users[this.currentUser.email];
    if (!user) return;

    if (!user.quizScores) user.quizScores = {};
    user.quizScores[dayNumber] = { score, total, date: new Date().toISOString() };

    users[this.currentUser.email] = user;
    this._saveUsers(users);

    const { password: _, ...safeUser } = user;
    this._setCurrentUser(safeUser);
  }

  getProgress() {
    if (!this.currentUser) return { completed: [], progress: {}, quizScores: {} };
    return {
      completed: this.currentUser.completedDays || [],
      progress: this.currentUser.progress || {},
      quizScores: this.currentUser.quizScores || {}
    };
  }

  getCompletionPercentage() {
    if (!this.currentUser) return 0;
    return Math.round(((this.currentUser.completedDays || []).length / 30) * 100);
  }

  isDayCompleted(dayNumber) {
    if (!this.currentUser) return false;
    return (this.currentUser.completedDays || []).includes(dayNumber);
  }

  isDayStarted(dayNumber) {
    if (!this.currentUser) return false;
    return !!((this.currentUser.progress || {})[dayNumber]);
  }
}

// Singleton instance
export const auth = new AuthSystem();
