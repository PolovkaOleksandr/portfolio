const langSwitcher = document.getElementById('lang-switcher');
const heroTitle = document.getElementById('hero-title');
const aboutText = document.querySelector('#about p');

langSwitcher.addEventListener('change', () => {
  if (langSwitcher.checked) {
    heroTitle.textContent = heroTitle.dataset.ua;
    aboutText.textContent = 'Я програміст початківець з Києва,Україна. Маю знання мов html css та java script (Українська версія)';
  } else {
    heroTitle.textContent = heroTitle.dataset.en;
    aboutText.textContent = 'I am a junior developer from Kyiv, Ukraine. I have knowledge of html, css, and java script (English version)';
  }
});