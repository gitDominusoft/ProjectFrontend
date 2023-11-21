// Navbar Color
let navbar = document.getElementsByTagName("nav")[0];
window.onscroll = function () {
    var scroll = window.pageYOffset;
    if (scroll > 300) {
        navbar.style.backgroundColor = "#005561";
    } else {
        navbar.style.backgroundColor = "transparent";
    }
};
// Navbar Responsivity
let navItems = document.getElementById("navItems");
function navResponsiviteti() {
    if (navItems.style.display == "block") {
        navItems.style.display = "none"
    } else {
        navItems.style.display = "block"
    }
}


// Heart
const heartIcon = document.getElementsByClassName("fa-heart");
for (let i = 0; i < heartIcon.length; i++) {
    heartIcon[i].addEventListener("click", () => {
        heartIcon[i].classList.toggle("fa-solid");
    });
}
// Read more
let paragraph = document.getElementsByClassName("hiddenParagraph");
let button = document.getElementsByClassName("read")
console.log(paragraph, button)
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => {
        if (paragraph[i].style.display == "block") {
            paragraph[i].style.display = "none"
            button[i].textContent = "Read More"
        } else {
            paragraph[i].style.display = "block"
            button[i].textContent = "Read Less"
        }
    })
}


// Subscription
function Subscription(event) {

    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let sms = document.getElementById("message")

    if (name === '' || email === '') {
        sms.textContent = 'Please fill in all fields.';
        sms.style.color = "#ff0000"
        event.preventDefault();
        return
    }

    if (!/^[a-zA-Z]+$/.test(name)) {
        sms.textContent = 'Name should only contain letters.';
        sms.style.color = "#ff0000"
        event.preventDefault();
        return
    }



    sms.textContent = 'Subscription successful!';
    sms.style.color = "#00ff00"
    event.preventDefault();

}


// Year

document.getElementById("year").textContent = new Date().getFullYear()
