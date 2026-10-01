// ============================================================
// PyMaster30 — Simple Hash-based Router
// ============================================================

class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = null;
    this.beforeNavigate = null;
    
    window.addEventListener('hashchange', () => this._handleRoute());
    window.addEventListener('load', () => this._handleRoute());
  }

  addRoute(path, handler) {
    this.routes[path] = handler;
  }

  navigate(path) {
    window.location.hash = path;
  }

  getCurrentRoute() {
    return this.currentRoute;
  }

  _handleRoute() {
    const hash = window.location.hash.slice(1) || '/';
    const [path, ...paramParts] = hash.split('/').filter(Boolean);
    const route = '/' + (path || '');
    const params = paramParts;

    this.currentRoute = { path: route, params };

    // Check for exact route match
    if (this.routes[route]) {
      this.routes[route](params);
      return;
    }

    // Check for parameterized routes
    for (const [routePath, handler] of Object.entries(this.routes)) {
      if (routePath.includes(':')) {
        const routeParts = routePath.split('/').filter(Boolean);
        const hashParts = hash.split('/').filter(Boolean);
        
        if (routeParts.length === hashParts.length) {
          const routeParams = {};
          let match = true;
          
          for (let i = 0; i < routeParts.length; i++) {
            if (routeParts[i].startsWith(':')) {
              routeParams[routeParts[i].slice(1)] = hashParts[i];
            } else if (routeParts[i] !== hashParts[i]) {
              match = false;
              break;
            }
          }
          
          if (match) {
            handler(Object.values(routeParams));
            return;
          }
        }
      }
    }

    // Default route
    if (this.routes['/']) {
      this.routes['/'](params);
    }
  }
}

export const router = new Router();
