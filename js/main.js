/* ================= Fade animation ================= */
const faders = document.querySelectorAll('.fade');

const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
});

faders.forEach(el => fadeObserver.observe(el));


/* ================= Lightbox ================= */
const imgs = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightImg = document.getElementById('lightbox-img');
const close = document.getElementById('close');

imgs.forEach(img => {
  img.onclick = () => {
    lightbox.style.display = 'flex';
    lightImg.src = img.src;
  };
});

lightImg.onclick = e => e.stopPropagation();
close.onclick = () => lightbox.style.display = 'none';
lightbox.onclick = () => lightbox.style.display = 'none';


/* ================= Filter buttons ================= */
const buttons = document.querySelectorAll('.filters button');
const photos = document.querySelectorAll('.gallery img');

buttons.forEach(button => {
  button.addEventListener('click', () => {

    buttons.forEach(b => b.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;

    photos.forEach(photo => {
      const category = photo.dataset.cat;

      photo.style.display =
        (filter === 'all' || category === filter) ? 'block' : 'none';
    });
  });
});


/* ================= Parallax ================= */
const banner = document.querySelector('.parallax');

if (banner) {
  window.addEventListener('scroll', () => {
    const offset = window.scrollY * 0.15;
    banner.style.transform = `translateY(${offset}px)`;
  });
}


/* ================= Spotlight cursor ================= */
document.addEventListener('mousemove', e => {
  document.body.style.setProperty('--x', e.clientX + 'px');
  document.body.style.setProperty('--y', e.clientY + 'px');
});


/* ================= Typing animation ================= */
const typing = document.querySelector('.typing');
const bannerSection = document.querySelector('.banner');

if (typing && bannerSection) {

  const text = typing.dataset.text;
  let typed = false;

  const typingObserver = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !typed) {
      typed = true;

      let i = 0;
      function type() {
        if (i < text.length) {
          typing.textContent += text[i];
          i++;
          setTimeout(type, 70);
        }
      }
      type();
    }
  }, { threshold: 0.6 });

  typingObserver.observe(bannerSection);
}