let currentModal = null;

function openModal(modalId, caption) {
  let modal = document.getElementById(modalId);
  modal.style.display = "flex";
  modal.classList.add("show");
  let message = modal.querySelector(".caption");
  message.innerText = caption;
  currentModal = modalId;
}

function closeModal(modalId) {
  let modal = document.getElementById(modalId);
  modal.classList.remove("show");
  setTimeout(function () {
    modal.style.display = "none";
    modal.querySelector(".caption").innerText = "";
  }, 300);
  currentModal = null;
}

// keyboard

function checkKey(modalId, caption, event) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    openModal(modalId, caption);
  }
};

function galleryCheckKey(button, filter, event) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    filterGallery(filter);
  }
}


// Close modal when Escape key is pressed
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && currentModal) {
    closeModal(currentModal);
  }
});

// Header Nav
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.headerNav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
})

document.querySelectorAll('.headerNav a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  })
}); 

// Keyboard

hamburger.addEventListener('keydown', (event) => { // [ Referenced from https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp ] 
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  }
});

document.querySelectorAll('.headerNav a').forEach(link => {
  link.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    }
  })
});