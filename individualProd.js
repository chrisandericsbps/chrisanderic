// document.addEventListener('DOMContentLoaded', function() {
//   const accordionButtons = document.querySelectorAll('.accordion-button');

//   accordionButtons.forEach(button => {
//     button.addEventListener('click', () => {
//       const content = button.nextElementSibling;

//       if (content.style.display === 'block') {
//         content.style.display = 'none';
//       } else {
//         content.style.display = 'block';
//       }
//     });
//   });
// });
document.querySelectorAll('.accordion-button').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    button.classList.toggle('active');
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});
