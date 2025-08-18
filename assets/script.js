// Theme toggle + year + smooth scroll
(function(){
  const html = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme');
  if(saved){ html.setAttribute('data-bs-theme', saved); }
  btn?.addEventListener('click', ()=>{
    const next = html.getAttribute('data-bs-theme') === 'light' ? 'dark' : 'light';
    html.setAttribute('data-bs-theme', next);
    localStorage.setItem('theme', next);
    btn.innerHTML = next === 'light' ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
  });
  document.getElementById('year').textContent = new Date().getFullYear();
  // Smooth scroll for same-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const id = a.getAttribute('href');
      if(id && id.length>1){
        e.preventDefault();
        document.querySelector(id)?.scrollIntoView({behavior:'smooth', block:'start'});
        history.pushState(null, '', id);
      }
    });
  });
})();