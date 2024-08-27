// const langSwitcher = document.getElementById('lang-switcher');
const heroTitle = document.getElementById('hero-title');
// const aboutText = document.querySelector('#about p');
// const p=document.querySelector(".p")
// const h22=document.getElementById('h22')
// const em=document.getElementById('e-mail')

// langSwitcher.addEventListener('change', () => {
//   if (langSwitcher.checked) {
//     heroTitle.textContent = heroTitle.dataset.ua;
//     em.textContent=em.dataset.ua
//     h22.textContent=h22.dataset.ua
//     aboutText.textContent = 'Я програміст початківець з Києва,Україна. Маю знання мов html css та java script (Українська версія)';
//   } else {
//     heroTitle.textContent = heroTitle.dataset.en;
//     em.textContent=em.dataset.en
//     h22.textContent=h22.dataset.en
//     aboutText.textContent = 'I am a junior developer from Kyiv, Ukraine. I have knowledge of html, css, and java script (English version)';
//   }
// });
// const langSwitcher = document.querySelector('.lang-button');
const heroDiv = document.querySelector('#hero-div');


const langSwitcher = document.getElementById('lang-switcher');
const translatableElements = document.querySelectorAll('[data-ua], [data-en]');

langSwitcher.addEventListener('change', () => {
  const lang = langSwitcher.checked ? 'ua' : 'en';

  translatableElements.forEach((element) => {
    const text = element.getAttribute(`data-${lang}`);
    element.textContent = text;
  });
  heroDiv.classList.toggle('lang-switched');
});