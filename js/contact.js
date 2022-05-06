// ---------------hamburger----------------
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header-nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((e) =>
  e.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
// --------function for henting av apiCall----------------
const url = "https://beardland.hols.no/wp-json/wp/v2/posts/";

async function apiCall(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {}
}

//--------------------form ------------------

const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#fullName");
const fullNameErr = document.querySelector("#fullname-err");

const subject = document.querySelector("#subject");
const subjectErr = document.querySelector("#subject-err");

const messages = document.querySelector("#messages");
const messagesErr = document.querySelector("#messages-err");

const email = document.querySelector("#email");
const emailErr = document.querySelector("#email-err");

const validForm = (e) => {
  e.preventDefault();

  if (checkLength(fullName.value, 1)) {
    fullNameErr.style.display = "none";
  } else {
    fullNameErr.style.display = "block";
  }
  if (emailValid(email.value)) {
    emailErr.style.display = "none";
  } else {
    emailErr.style.display = "block";
  }
  if (checkLength(subject.value, 15)) {
    subjectErr.style.display = "none";
  } else {
    subjectErr.style.display = "block";
  }
  if (checkLength(messages.value, 25)) {
    messagesErr.style.display = "none";
  } else {
    messagesErr.style.display = "block";
  }
};

form.addEventListener("submit", validForm);

const checkLength = (value, len) => {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
};

const emailValid = (email) => {
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
};
