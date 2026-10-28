/* =========================================================
   MowMow SPA Router
   Supports HTML5 History API with hash fallback
   ========================================================= */

(function(){
  'use strict';

  const routes = {};
  let currentRoute = null;

  function addRoute(pattern, handler){
    // Convert pattern like /restaurants/:id into regex
    const paramNames = [];
    const regexPath = pattern.replace(/:([a-zA-Z0-9_-]+)/g, (_, paramName) => {
      paramNames.push(paramName);
      return '([^/]+)';
    });
    const regex = new RegExp('^' + regexPath + '$');
    routes[pattern] = { pattern, regex, paramNames, handler };
  }

  function getPath(){
    if (window.location.hash && window.location.hash.startsWith('#/')) {
      return window.location.hash.slice(1);
    }
    const path = window.location.pathname;
    return path || '/';
  }

  function matchRoute(path){
    // Normalize path (strip trailing slash unless just "/")
    const normalized = path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;
    
    // Check direct pattern match or wildcard regex match
    for (const key in routes) {
      const r = routes[key];
      const match = normalized.match(r.regex);
      if (match) {
        const params = {};
        r.paramNames.forEach((name, i) => {
          params[name] = decodeURIComponent(match[i + 1]);
        });
        return { handler: r.handler, params, pattern: r.pattern, path: normalized };
      }
    }
    // Default fallback to home
    return routes['/'] ? { handler: routes['/'].handler, params: {}, pattern: '/', path: '/' } : null;
  }

  function updateActiveNav(path){
    const base = path === '/' ? '/' : '/' + path.split('/')[1];
    document.querySelectorAll('[data-nav-link]').forEach(el => {
      const target = el.getAttribute('data-route') || el.getAttribute('href');
      const isActive = target === base || (base === '/' && (target === '/' || target === '/home'));
      el.classList.toggle('active', !!isActive);
    });
  }

  function resolveRoute(){
    const path = getPath();
    const matched = matchRoute(path);
    if (!matched) return;

    currentRoute = matched;
    updateActiveNav(matched.path);

    // Call route handler
    if (typeof matched.handler === 'function') {
      matched.handler(matched.params);
    }

    // Scroll smoothly to top on page navigation
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function navigateTo(url, replace = false){
    if (url.startsWith('http://') || url.startsWith('https://')) {
      window.location.href = url;
      return;
    }

    // Check if running on file:// or static server without fallback
    const isFileProtocol = window.location.protocol === 'file:';
    
    if (isFileProtocol) {
      window.location.hash = '#' + url;
    } else {
      if (replace) {
        window.history.replaceState({}, '', url);
      } else {
        window.history.pushState({}, '', url);
      }
      resolveRoute();
    }
  }

  // Handle back / forward browser events
  window.addEventListener('popstate', resolveRoute);
  window.addEventListener('hashchange', resolveRoute);

  // Global delegated click handler for links & data-route elements
  document.addEventListener('click', e => {
    const routeTarget = e.target.closest('[data-route]');
    if (routeTarget) {
      const dest = routeTarget.getAttribute('data-route');
      if (dest) {
        e.preventDefault();
        navigateTo(dest);
        return;
      }
    }

    const anchor = e.target.closest('a');
    if (anchor && anchor.getAttribute('href')) {
      const href = anchor.getAttribute('href');
      if (href.startsWith('/') && !href.startsWith('//')) {
        e.preventDefault();
        navigateTo(href);
      }
    }
  });

  window.MowRouter = {
    addRoute,
    navigateTo,
    resolveRoute,
    getPath,
    getCurrentRoute: () => currentRoute
  };

})();
