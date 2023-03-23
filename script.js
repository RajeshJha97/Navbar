const ham = document.querySelector('#ham-menu');

ham.addEventListener('click', function () {
  const smallMenu = document.querySelector('#small-menu');
  const hidden = smallMenu.classList.contains('hidden');
  const options = document.querySelector('#options');
  if (hidden) {
    // smallMenu.classList.add('duration-500');
    smallMenu.classList.remove('hidden');
  } else {
    // smallMenu.classList.add('duration-500');
    smallMenu.classList.add('hidden');
  }
});
