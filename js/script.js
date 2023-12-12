/*  ============= Typing animation ============*/
var typed = new Typed(".typing" , {
    strings:["" ,"Web Designer" , "Web Developer","Frontend Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

/* ============== Contact us ====================*/
const form =document.querySelector("form");
const name =document.getElementById("name");
const email =document.getElementById("email");
const subject =document.getElementById("subject");
const message =document.getElementById("message");


function sendEmail() {
    const bodyMessage = `Name: ${name.value}<br> Email: ${email.value}<br> Subject: ${subject.value}<br> Message: ${message.value}`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "isuriupeksha258@gmail.com",
        Password : "51FF480678F1A4FC49D4E4F731EACA5628C9",
        To : 'isuriupeksha258@gmail.com',
        From : "isuriupeksha258@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
        message => {
            if (message == "OK"){
                Swal.fire({
                    title: "Success!",
                    text: "Message Sent Successfully!",
                    icon: "success"
                });
            }
        }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
})