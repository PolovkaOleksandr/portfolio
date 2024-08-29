// const animItems =document.querySelectorAll('.anim');
// if (animItems.length > 0) {
//     window.addEventListener('scroll', animonScroll);
// function animonScroll() {
//     for (let index = 0; index < animItems.length; index++) {
//         const animItem= animItems [index];
//         const animItemHeight = animItem.offsetHeight;
//         const animItemOffset = offset(animItem).top;
//         const animStart = 4;

//     let animItemPoint = window.innerHeight -animItemHeight / animStart;
//     if (animItemHeight > window.innerHeight) {
//         animItemPoint = window.innerHeight -window.innerHeight / animStart;

// if ((pageYOffset > animItemOffset- animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
//     animItem.classList.add('active');
// } else {
// if (lanimItem.classList.contains('_anim-no-hide')) {
// animItem.classList.remove('active');
// }
// }
// }
// }
// }
// function offset(el) {
//     const rect = el.getBoundingClientRect(),
//     scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//     scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
//     }
// setTimeout(()=>{
//     animonScroll();
// },300);
//         }
const animItems = document.querySelectorAll('.anim');

function offset(el) {
  const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

function isElementVisible(el, threshold) {
  const elementTop = offset(el).top;
  const elementBottom = elementTop + el.offsetHeight;
  const viewportTop = window.pageYOffset;
  const viewportBottom = viewportTop + window.innerHeight;

  return (elementBottom > viewportTop && elementTop < viewportBottom) && (elementBottom - viewportBottom) < threshold * viewportBottom;
}

function animonScroll() {
  for (let index = 0; index < animItems.length; index++) {
    const animItem = animItems[index];
    const animItemHeight = animItem.offsetHeight;
    const animItemOffset = offset(animItem).top;
    const animStart = 4;

    let animItemPoint = window.innerHeight - (animItemHeight / animStart);
    if (animItemHeight > window.innerHeight) {
      animItemPoint = window.innerHeight - (window.innerHeight / animStart);
    }

    const isVisible = isElementVisible(animItem, 0.25); // Check if element is at least 25% visible
    if (isVisible) {
      animItem.classList.add('active');
    } else {
      animItem.classList.remove('active');
    }
  }
}

if (animItems.length > 0) {
  window.addEventListener('scroll', animonScroll);
}

setTimeout(() => {
  animonScroll();
}, 300);