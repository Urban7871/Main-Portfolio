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