const btnSwith = document.querySelector('#switch');

btnSwith.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  btnSwith.classList.toggle('active');

  // Guardamos el modo en localstorage
  if(document.body.classList.contains('dark')){
    localStorage.setItem('dark-mode', 'true');
  } else {
    localStorage.setItem('dark-mode', 'false');
  }
});

// Obtenemos el modo actual
if(localStorage.getItem('dark-mode') === 'true'){
  document.body.classList.add('dark');
  btnSwith.classList.add('active');
} else {
  document.body.classList.remove('dark');
  btnSwith.classList.remove('active');
}