(function(){
  function applyTheme(theme){
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
    document.querySelectorAll('.theme-btn').forEach(function(button){
      button.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    });
  }

  function moveTabIndicator(tabs, target){
    if (!tabs || !target) return;
    tabs.style.setProperty('--tab-indicator-x', target.offsetLeft + 'px');
    tabs.style.setProperty('--tab-indicator-w', target.offsetWidth + 'px');
  }

  function syncTabIndicator(tabs){
    moveTabIndicator(tabs, tabs.querySelector('.tab-btn.active') || tabs.querySelector('.tab-btn'));
  }

  function initTabs(){
    document.querySelectorAll('.tabs').forEach(function(tabs){
      var buttons = tabs.querySelectorAll('.tab-btn');
      if (!buttons.length) return;

      syncTabIndicator(tabs);

      buttons.forEach(function(button){
        button.addEventListener('mouseenter', function(){ moveTabIndicator(tabs, button); });
        button.addEventListener('focus', function(){ moveTabIndicator(tabs, button); });
        button.addEventListener('click', function(){
          requestAnimationFrame(function(){ syncTabIndicator(tabs); });
        });
      });

      tabs.addEventListener('mouseleave', function(){ syncTabIndicator(tabs); });
      tabs.addEventListener('focusout', function(){
        requestAnimationFrame(function(){
          if (!tabs.contains(document.activeElement)) syncTabIndicator(tabs);
        });
      });
      tabs.addEventListener('scroll', function(){ syncTabIndicator(tabs); }, {passive:true});
      window.addEventListener('resize', function(){ syncTabIndicator(tabs); });
    });
  }

  function syncAllTabIndicators(){
    document.querySelectorAll('.tabs').forEach(syncTabIndicator);
  }

  function switchDashboardTab(options){
    var current = options.current;
    var next = options.next;
    var ids = options.ids;
    if (current === next) return current;

    var reduced = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
    document.querySelectorAll('.tab-btn').forEach(function(button, index){
      button.classList.toggle('active', ids[index] === next);
    });
    requestAnimationFrame(syncAllTabIndicators);

    if (!current || reduced){
      ids.forEach(function(id){
        var panel = document.getElementById('tab-' + id);
        if (panel) panel.style.display = id === next ? 'block' : 'none';
      });
      return next;
    }

    var out = document.getElementById('tab-' + current);
    var incoming = document.getElementById('tab-' + next);
    if (!out || !incoming) return next;

    out.classList.add('tab-panel-leave');
    incoming.style.display = 'block';
    incoming.classList.add('tab-panel-enter');

    requestAnimationFrame(function(){
      incoming.classList.add('tab-panel-active');
      incoming.classList.remove('tab-panel-enter');
    });

    window.setTimeout(function(){
      out.style.display = 'none';
      out.classList.remove('tab-panel-leave', 'tab-panel-active');
      incoming.classList.remove('tab-panel-active');
    }, 190);

    return next;
  }

  function isLocalPageLink(link){
    if (!link || link.target || link.hasAttribute('download')) return false;
    var href = link.getAttribute('href') || '';
    if (href === '#' || href.charAt(0) === '#') return false;
    if (link.origin !== window.location.origin) return false;
    if (link.pathname === window.location.pathname && link.hash) return false;
    if (link.href === window.location.href) return false;
    return /\.html$/.test(link.pathname) || /\/$/.test(link.pathname);
  }

  function initRouteLoading(){
    document.addEventListener('click', function(event){
      var link = event.target.closest && event.target.closest('a[href]');
      if (!isLocalPageLink(link) || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.defaultPrevented) return;
      event.preventDefault();
      document.body.classList.add('is-route-loading');
      window.setTimeout(function(){ window.location.href = link.href; }, 150);
    });
  }

  window.switchDashboardTab = switchDashboardTab;

  document.addEventListener('DOMContentLoaded', function(){
    var current = document.documentElement.dataset.theme || 'light';
    applyTheme(current);
    initTabs();
    initRouteLoading();
    document.querySelectorAll('.theme-btn').forEach(function(button){
      button.addEventListener('click', function(){
        applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
      });
    });
  });
})();
