const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll",()=>{

const scrollTop=window.scrollY;

const height=document.documentElement.scrollHeight-window.innerHeight;

const progress=(scrollTop/height)*100;

progressBar.style.width=progress+"%";

});
// ============================
// Project Cards 3D Effect
// ============================

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 12;
        const rotateX = ((y / rect.height) - 0.5) * -12;

        card.style.transform =
            `perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-10px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";

    });

});


//-----------------------------Footer---------
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

const form = document.getElementById("contact-form");
const sendBtn = document.getElementById("sendBtn");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Name Validation
    if (name.length < 3) {
        alert("Name must be at least 3 characters.");
        return;
    }

    // Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Subject Validation
    if (subject.length < 5) {
        alert("Subject must be at least 5 characters.");
        return;
    }

    // Message Validation
    if (message.length < 10) {
        alert("Message must be at least 10 characters.");
        return;
    }

    sendBtn.disabled = true;
    sendBtn.innerHTML = "Sending...";

    emailjs.sendForm(
        "service_32anbnl",
        "template_uqoh3ws",
        form
    )
    .then(() => {

       showToast(
    "success",
    "Message Sent",
    "Thanks for contacting me. I'll reply as soon as possible."
);
        form.reset();

    })
    .catch((error) => {

        console.log(error);

        showToast(
    "error",
    "Sending Failed",
    "Something went wrong. Please try again."
);

    })
    .finally(() => {

        sendBtn.disabled = false;
        sendBtn.innerHTML = "Send Message";

    });

});

//---------Pop up Meessaage----------------
const toast = document.getElementById("toast");

const toastTitle = document.getElementById("toastTitle");

const toastMessage = document.getElementById("toastMessage");

const toastIcon = document.getElementById("toastIcon");

const toastClose = document.getElementById("toastClose");

function showToast(type, title, message){

    toast.classList.remove("show");

    void toast.offsetWidth;

    toastTitle.innerHTML = title;

    toastMessage.innerHTML = message;

    if(type==="success"){

        toast.style.borderLeftColor="#22c55e";

        document.querySelector(".toast-progress").style.background="#22c55e";

        document.querySelector(".toast-icon").style.background=
        "linear-gradient(135deg,#22c55e,#16a34a)";

        toastIcon.className="fa-solid fa-circle-check";

    }

    else{

        toast.style.borderLeftColor="#ef4444";

        document.querySelector(".toast-progress").style.background="#ef4444";

        document.querySelector(".toast-icon").style.background=
        "linear-gradient(135deg,#ef4444,#dc2626)";

        toastIcon.className="fa-solid fa-circle-xmark";

    }

    toast.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer=setTimeout(()=>{

        toast.classList.remove("show");

    },4000);

}

toastClose.onclick=()=>{

    toast.classList.remove("show");

}