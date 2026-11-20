/* All content remains readable without JavaScript. */
(() => {
  const toggle = document.querySelector('#language-toggle');
  const elements = document.querySelectorAll('[data-en][data-zh]');

  function setLanguage(language) {
    const isChinese = language === 'zh';
    document.documentElement.lang = isChinese ? 'zh-CN' : 'en';
    elements.forEach(element => {
      element.textContent = element.dataset[isChinese ? 'zh' : 'en'];
    });
    toggle.textContent = isChinese ? 'English' : '中文';
    toggle.setAttribute('aria-label', isChinese ? 'Switch to English' : '切换到中文');
    document.title = isChinese ? 'Hanyang Xing | 机器人与感知' : 'Hanyang Xing | Robotics & Perception';
    try { localStorage.setItem('hanyang-language', language); } catch (_) { /* Storage is optional. */ }
  }

  let savedLanguage;
  try { savedLanguage = localStorage.getItem('hanyang-language'); } catch (_) { /* English by default. */ }
  setLanguage(savedLanguage === 'zh' ? 'zh' : 'en');
  toggle.addEventListener('click', () => {
    setLanguage(document.documentElement.lang === 'en' ? 'zh' : 'en');
  });
  document.querySelector('#year').textContent = String(new Date().getFullYear());
})();
