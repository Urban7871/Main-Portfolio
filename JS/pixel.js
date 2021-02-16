//PIXEl PAGE NAV
const aboutBtn = document.querySelector('.button-1');
const projectsBtn = document.querySelector('.button-2');
const contactBtn = document.querySelector('.button-3');


const aboutSect = document.querySelector('#about');
const projectsSect = document.querySelector('#projects');
const contactSect = document.querySelector('#contact');

aboutBtn.addEventListener('click', aboutShow);
projectsBtn.addEventListener('click', projectsShow);
contactBtn.addEventListener('click', contactShow);


function aboutShow(e) {
    e.preventDefault();
    aboutSect.style.display = 'block';
    aboutSect.style.height = '75rem';

    projectsSect.style.display = 'none';
    contactSect.style.display = 'none';

    window.scrollBy({ 
        top: 750, // could be negative value
        left: 0, 
        behavior: 'smooth' 
      });
}

function projectsShow(e) {
    e.preventDefault();
    projectsSect.style.display = 'block';
    projectsSect.style.height = '75rem';

    contactSect.style.display = 'none';
    aboutSect.style.display = 'none';

    window.scrollBy({ 
        top: 700, // could be negative value
        left: 0, 
        behavior: 'smooth' 
      });
}
function contactShow(e) {
  e.preventDefault();
  contactSect.style.display = 'block';
  contactSect.style.height = '75rem';

  projectsSect.style.display = 'none';
  aboutSect.style.display = 'none';

  window.scrollBy({ 
      top: 700, // could be negative value
      left: 0, 
      behavior: 'smooth' 
    });
}


//CONTACT FORM
$(document).ready(function () {
  $('#contact__btn').click(function (event){
      console.log('clicked');

      const email =$('#contact__form-email').val();
      const firstName =$('#contact__form-firstname').val();
      const lastName =$('#contact__form-lastname').val();
      const feedback =$('#contact__form-feedback').val();
      const status =$('.status');
      status.empty();


      if(email.length>5 && email.includes('@') && email.includes('.')) {
          
      } else {
          event.preventDefault();
          status.append('<div>Make sure your email is correct</div>')
      }

      if(firstName.length>1) {
          
      } else {
          event.preventDefault();
          status.append('<div>Type in your name</div>')
      }

      if(feedback.length>=1) {
          
      } else {
          event.preventDefault();
          status.append('<div>Feedback must have more than 2 letters</div>')
      }
  })
})