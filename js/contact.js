// /*** Created by anna on 27.06.17.***/
// var name1 = document.getElementById('name');
// var email = document.getElementById('e-mail');
// var message = document.getElementById('message');
//
// var form = document.getElementById("form");
// if(form){
//     form.addEventListener('send', sendFeedbackForm);
//
// }
//
// function sendFeedbackForm(e) {
//     e.preventDefault();
//     console.log("test27");
//     $.post({
//         url: "https://mail.google.com/mail/u/1/#inbox",
//         data: {name: name1.value, email: email.value, message: message.value, subject: "string"},
//         dataType: "json",
//         success: function (data) {
//             console.log(data);
//             // document.getElementById("successmessage").classList.remove('hide');
//             // function successMessage() {
//             //     document.getElementById("successmessage").classList.add('hide');
//             // }
//             // setTimeout(successMessage,5000);
//             name1.value ='';
//             email.value = '';
//             message.value = '';
//         },
//         error: function (error) {
//             // document.getElementById("errormessage").classList.remove('hide');
//             // function errorMessage () {
//             //     document.getElementById("errormessage").classList.add('hide');
//             // }
//             // setTimeout(errorMessage,5000);
//             name1.value ='';
//             email.value = '';
//             message.value = '';
//             // console.log(error);
//
//         }
//     });
// }