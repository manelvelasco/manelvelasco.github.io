(function() {
  const KEY = 'pref-lang';
  function setLang(lang) {
    localStorage.setItem(KEY, lang);
    document.querySelectorAll('.post-lang').forEach(el => {
      el.classList.toggle('active', el.dataset.lang === lang);
    });
    document.querySelectorAll('.lang-switch [data-lang]').forEach(b=>{
      b.classList.toggle('active', b.dataset.lang === lang);
    });
  }
  document.addEventListener('DOMContentLoaded', () => {
    const pref = localStorage.getItem(KEY) || 'es';
    setLang(pref);
    document.querySelector('.lang-switch')?.addEventListener('click', (e)=>{
      const btn = e.target.closest('[data-lang]');
      if (btn) setLang(btn.dataset.lang);
    });
  });
})();
