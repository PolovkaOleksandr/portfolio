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
  console.log('animonScroll called');
  animItems.forEach((animItem) => {
    const animItemHeight = animItem.offsetHeight;
    const animItemOffset = offset(animItem).top;
    const animStart = 4;

    let animItemPoint = window.innerHeight - (animItemHeight / animStart);
    if (animItemHeight > window.innerHeight) {
      animItemPoint = window.innerHeight - (window.innerHeight / animStart);
    }

    const isVisible = isElementVisible(animItem, 0.25); // Check if element is at least 25% visible
    console.log(`isVisible: ${isVisible}`);
    if (isVisible && !animItem.hasAttribute('data-animated')) {
      console.log(`adding active class to ${animItem}`);
      animItem.classList.add('active');
      animItem.setAttribute('data-animated', 'true'); // Mark as animated
    }
  });
}

if (animItems.length > 0) {
  window.addEventListener('scroll', animonScroll);
}

setTimeout(() => {
  animonScroll();
}, 300);