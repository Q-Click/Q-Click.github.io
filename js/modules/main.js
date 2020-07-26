// <!-- Landing page animation -->

function createBubble() {
  const section = document.querySelector(".bubble");
  const createElement = document.createElement("span");

  let size = Math.random() * 40;

  createElement.style.width = `${size}px`;
  createElement.style.height = `${size}px`;
  createElement.style.left = Math.random() * innerWidth + "px";
  section.appendChild(createElement);

  setTimeout(() => {
    createElement.remove();
  }, 5000);
}

setInterval(createBubble, 50);

function createFoam1() {
  const section = document.querySelector(".foam1");

  const createElement = document.createElement("span");

  let size = Math.random() * 40;

  createElement.style.width = `${size}px`;
  createElement.style.height = `${size}px`;
  createElement.style.left = Math.random() * innerWidth + "px";
  section.appendChild(createElement);

  setTimeout(() => {
    createElement.remove();
  }, 5000);
}

setInterval(createFoam1, 50);

function createFoam2() {
  const section = document.querySelector(".foam2");

  const createElement = document.createElement("span");

  let size = Math.random() * 40;

  createElement.style.width = `${size}px`;
  createElement.style.height = `${size}px`;
  createElement.style.left = Math.random() * innerWidth + "px";
  section.appendChild(createElement);

  setTimeout(() => {
    createElement.remove();
  }, 5000);
}

setInterval(createFoam2, 50);

function createFoam3() {
  const section = document.querySelector(".foam3");

  const createElement = document.createElement("span");

  let size = Math.random() * 40;

  createElement.style.width = `${size}px`;
  createElement.style.height = `${size}px`;
  createElement.style.left = Math.random() * innerWidth + "px";
  section.appendChild(createElement);

  setTimeout(() => {
    createElement.remove();
  }, 5000);
}

setInterval(createFoam3, 50);

// <!-- Landing page animation -->

// <!-- MDB animation -->

$(document).ready(function () {
  new WOW().init();
});

// <!-- MDB animation -->

// <!-- Form validation -->

function validateForm() {
  var name = document.getElementById("contact-name").value;
  if (name == "") {
    document.querySelector(".status").innerHTML = "Name cannot be empty";
    return false;
  }
  var email = document.getElementById("contact-email").value;
  if (email == "") {
    document.querySelector(".status").innerHTML = "Email cannot be empty";
    return false;
  } else {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      document.querySelector(".status").innerHTML = "Email format invalid";
      return false;
    }
  }
  var subject = document.getElementById("contact-Subject").value;
  if (subject == "") {
    document.querySelector(".status").innerHTML = "Subject cannot be empty";
    return false;
  }
  var message = document.getElementById("contact-message").value;
  if (message == "") {
    document.querySelector(".status").innerHTML = "Message cannot be empty";
    return false;
  }
  document.querySelector(".status").innerHTML = "Sending...";
}

// <!-- Form validation -->
