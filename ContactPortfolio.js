const baricon=document.querySelector(".bar")
 const container=document.querySelector(".container")
 const crossicon=document.querySelector(".cross")
 baricon.addEventListener("click",()=>{
    container.style.display="flex";
    baricon.style.display="none";
    crossicon.style.display="block"
 })
crossicon.addEventListener("click",()=>{
    container.style.display="none";
    crossicon.style.display="none"
    baricon.style.display="block"
 })
 function checkWidth() {
    if (window.innerWidth >900) {
        container.style.display = "flex";
        baricon.style.display = "none";
        crossicon.style.display = "none";
    } else {
        container.style.display = "none";
        baricon.style.display = "block";
    }
}
window.addEventListener("resize", checkWidth);

checkWidth();
const form=document.querySelector("form")
const FullName=document.getElementById("name")
const email=document.getElementById("email")
const phoneNumber=document.getElementById("phone")
const subject=document.getElementById("subject")
const message=document.getElementById("message")
const submit=document.querySelector("button")

function sendEmail(){
    const bodyMessage=`FullName:${FullName.value} <br> Email:${email.value},<br>
    PhoneNumber:${phoneNumber.value}<br> Subject:${subject.value} <br>
    Message:${message.value}`
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "arjunprabhu0611@gmail.com",
        Password : "78E1B0FBFF02A814E1B78C267D24F38CAC6C",
        To : 'arjunprabhu0611@gmail.com',
        From : "arjunprabhu0611@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if(message=="OK"){
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        form.reset()
        }
      }
    );
    
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    sendEmail();

})
