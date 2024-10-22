const form = document.querySelector("#contactForm");
const successMessage = document.querySelector("#successMessage");

document.addEventListener("DOMContentLoaded", () => {
  const radioOptions = document.querySelectorAll(
    '.radioOption input[type="radio"]'
  );

  radioOptions.forEach((radio) => {
    radio.addEventListener("change", function () {
      document
        .querySelectorAll(".radioOption")
        .forEach((option) => option.classList.remove("active"));

      if (this.checked) {
        this.closest(".radioOption").classList.add("active");
      }
    });
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;
  const email = document.querySelector("#email").value;
  const queryType = document.querySelector('input[name="queryType"]:checked');
  const message = document.querySelector("#message").value.trim();
  const consent = document.querySelector("#consent").checked;

  const error = document.querySelectorAll(".error");
  let isValid = true;

  if (firstName === "") {
    isValid = false;
    document.querySelector("#firstName + .error").style.display = "block";
    document.querySelector("#firstName").style.border = "1px solid var(--red)";
  } else {
    document.querySelector("#firstName + .error").style.display = "none";
    document.querySelector("#firstName").style.border =
      "1px solid var(--medium-grey)";
  }

  if (lastName === "") {
    isValid = false;
    document.querySelector("#lastName + .error").style.display = "block";
    document.querySelector("#lastName").style.border = "1px solid var(--red)";
  } else {
    document.querySelector("#lastName + .error").style.display = "none";
    document.querySelector("#lastName").style.border =
      "1px solid var(--medium-grey)";
  }

  if (!isEmailValid(email)) {
    isValid = false;
    document.querySelector("#email + .error").style.display = "block";
    document.querySelector("#email").style.border = "1px solid var(--red)";
  } else {
    document.querySelector("#email + .error").style.display = "none";
    document.querySelector("#email").style.border =
      "1px solid var(--medium-grey)";
  }

  if (!queryType) {
    isValid = false;
    document.querySelector("#radioInputs + .error").style.display = "block";
  } else {
    document.querySelector("#radioInputs + .error").style.display = "none";
  }

  if (message === "") {
    isValid = false;
    document.querySelector("#message + .error").style.display = "block";
    document.querySelector("#message").style.border = "1px solid var(--red)";
  } else {
    document.querySelector("#message + .error").style.display = "none";
    document.querySelector("#message").style.border =
      "1px solid var(--medium-grey)";
  }
  console.log(error);
  if (!consent) {
    isValid = false;
    error[5].classList.add("formError");
  } else {
    error[5].classList.remove("formError");
  }

  if (isValid) {
    document
      .querySelectorAll(".radioOption")
      .forEach((option) => option.classList.remove("active"));
    successMessage.classList.add("active");
    form.reset();
  }
});

function isEmailValid(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
