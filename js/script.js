const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('open');
  menu.classList.toggle('open');
});

// Hide the menu when a link is clicked
menu.addEventListener('click', () => {
  burgerMenu.classList.remove('open');
  menu.classList.remove('open');
});

$(document).ready(function() {
  // Show the form
  $('#feedback-btn').click(function() {
    $('#feedback-form').show();
  });

  //Close the form
  $('#close-btn').click(function() {
    $('#feedback-form').hide();
  });

  // Validation for phone number
  $('form').submit(function(event) {
    event.preventDefault();
    let phone = $('#tel').val();
    let phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
      $('#phone-error').html('');
    } else {
      $('#phone-error').empty();
    }
  });
});