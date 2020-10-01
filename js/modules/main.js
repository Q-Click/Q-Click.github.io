// <!-- Landing page animation -->

// <!-- Landing page animation -->

// <!-- MDB animation -->

$(document).ready(function () {
  new WOW().init();
  $("#slides").superslides({
    animation: "fade",
    play: 5000,
    pagination: false,
  });

  var typed = new Typed(".typed", {
    strings: ["Software Engineer.", "Web Developer.", "Student."],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false,
  });
  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 4,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
      938: {
        items: 4,
      },
    },
  });
});

// <!-- MDB animation -->

// <!-- Form validation -->

function validateForm() {
  var name = document.getElementById("contact-name").value;
  btn = document.getElementById("btn-form");
  area = document.querySelector(".status");
  if (name == "") {
    area.innerHTML = "Name cannot be empty";
    return (btn.disabled = true);
  }
  var email = document.getElementById("contact-email").value;
  if (email == "") {
    area.innerHTML = "Email cannot be empty!";
    return (btn.disabled = true);
  } else {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      area.innerHTML = "Email format invalid!";
      return (btn.disabled = true);
    }
  }
  var subject = document.getElementById("contact-Subject").value;
  if (subject == "") {
    area.innerHTML = "Subject cannot be empty!";
    return (btn.disabled = true);
  }
  var message = document.getElementById("contact-message").value;
  if (message == "") {
    area.innerHTML = "Message cannot be empty!";
    return (btn.disabled = true);
  }
  area.innerHTML = "Ready to send!";
  btn.disabled = false;
}

// <!-- Form validation -->

(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 45,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: 96,
  });
})(jQuery); // End of use strict

const nav = document.querySelector(".navbar");
const navTop = 610;

window.addEventListener("scroll", () => {
  if (window.scrollY > navTop) {
    nav.classList.add("fixed-top");
  } else {
    nav.classList.remove("fixed-top");
  }
});
