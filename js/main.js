/* ================= Fade animation ================= */
const faders = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
});

faders.forEach(el => observer.observe(el));


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

close.onclick = () => lightbox.style.display = 'none';
lightbox.onclick = () => lightbox.style.display = 'none';


/* ================= Filter buttons (FIXED) ================= */
const buttons = document.querySelectorAll('.filters button');
const photos = document.querySelectorAll('.gallery img');

buttons.forEach(button => {
  button.addEventListener('click', () => {

    buttons.forEach(b => b.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;

    photos.forEach(photo => {
      const category = photo.dataset.cat;

      if (filter === 'all' || category === filter) {
        photo.style.display = 'block';
      } else {
        photo.style.display = 'none';
      }
    });

  });
});
