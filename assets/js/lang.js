(function(){
  const KEY='pref-lang';
  function setLang(l){
    localStorage.setItem(KEY,l);
    document.querySelectorAll('.post-lang').forEach(el=>{
      el.classList.toggle('active', el.dataset.lang===l);
    });
    document.querySelectorAll('.lang-switch [data-lang]').forEach(b=>{
      b.classList.toggle('active', b.dataset.lang===l);
    });
  }
  document.addEventListener('DOMContentLoaded', ()=>{
    setLang(localStorage.getItem(KEY)||'es');
    document.body.addEventListener('click', e=>{
      const b=e.target.closest('[data-lang]');
      if(b) setLang(b.dataset.lang);
    });
  });
})();
