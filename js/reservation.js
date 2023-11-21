$(document).ready(function () {
    // Navbar Color
    let navbar = $("nav");
    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll > 300) {
            navbar.css("background-color", "#005561");
        } else {
            navbar.css("background-color", "transparent");
        }
    });
    // Navbar Responsivity
    $(".fa-grip-lines").on("click", function () {
        $("#navItems").toggle()
    })

    // Subscription
    $(".subscribe > form").on("submit", function (event) {
        let name = $("#name").val();
        let email = $("#emailt").val();
        let sms = $("#message"); // No .val() here for a paragraph

        if (name === '' || email === '') {
            sms.text('Please fill in all fields.');
            sms.css("color", "#ff0000");

            event.preventDefault();
            return;
        }

        if (!/^[a-zA-Z]+$/.test(name)) {
            sms.text('Name should only contain letters.');
            sms.css("color", "#ff0000");
            event.preventDefault();
            return;
        }

        sms.text('Subscription successful!');
        sms.css("color", "#00ff00");
        event.preventDefault();
    });

    // Year
    let year = new Date().getFullYear()
    $("#year").text(year)
})