const btnSwith = document.querySelector('#switch');

btnSwith.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  btnSwith.classList.toggle('active');
})