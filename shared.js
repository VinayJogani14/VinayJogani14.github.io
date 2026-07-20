(function(){
  var saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  window.toggleTheme = function(){
    var cur = document.documentElement.getAttribute('data-theme')==='dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', cur);
    localStorage.setItem('theme', cur);
    var b=document.getElementById('theme-btn'); if(b) b.textContent = cur==='dark' ? 'Light' : 'Dark';
  };
  document.addEventListener('DOMContentLoaded', function(){
    var b=document.getElementById('theme-btn');
    if(b) b.textContent = saved==='dark' ? 'Light' : 'Dark';
  });
})();
