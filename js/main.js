/* Fade in */
const faders = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
});

faders.forEach(el => observer.observe(el));


/* Lightbox */
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


/* Filtering */
const buttons = document.querySelectorAll('.filters button');
const photos = document.querySelectorAll('.gallery img[data-cat]');

buttons.forEach(btn => {
  btn.onclick = () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    photos.forEach(img => {
      if (filter === 'all' || img.dataset.cat === filter)
        img.classList.remove('hide');
      else
        img.classList.add('hide');
    });
  };
});
