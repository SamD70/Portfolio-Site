$(document).ready(function () {
    $('.submit').click(function (event) {
        event.preventDefault();

        var email = $('.email').val();
        var subject = $('.subject').val();
        var message = $('.message').val();
        var statusElm = $('.status');

        statusElm.empty();

        if(email.length>2 && email.includes('@') && email.includes('.')){
        }
        else{
            statusElm.append('<div>Email is not valid</div>');
            event.preventDefault();
        };
        if(subject.length>0){
        }
        else{
            statusElm.append('<div>Subject is not valid</div>');
            event.preventDefault();
        };
        if(message.length>0){
        }
        else{
            statusElm.append('<div>Message is not valid</div>');
            event.preventDefault();
        };
    });
});