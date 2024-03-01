/**
 * @name: Assignement1
 * @Course Code: SODV1201
 * @class: Software Development Diploma program.
 * @author: Daniela Souza Freire.
 */

//javacript page home
const date = document.getElementById("date");
date.textContent = new Intl.DateTimeFormat("en-US").format(new Date());

const imageCaption = document.getElementsByClassName("caption")[0];

if (imageCaption) {
  setTimeout(() => {
    imageCaption.style.visibility = "visible";
  }, 10000);
}

// javascript page grades_app
const form = document.getElementById("Form");
if (form) {
  form.addEventListener("submit", formSubmited);
}

function formSubmited(event) {
  event.preventDefault();
  const InputBox = document.getElementById("mark-input-box");
  const parsed = parseInt(InputBox.value);
  console.log(parsed);

  const errorMessage = document.getElementsByClassName("error")[0];
  const successMessage = document.getElementsByClassName("success")[0];

  try {
    errorMessage.textContent = "";
    successMessage.textContent = "";
    if (parsed < 0) {
      throw new Error("Invalid Number.Number must be < 0");
    }
    if (parsed > 100) {
      throw new Error("Invalid Number.Number must be > 100");
    }

    if (parsed > 90) {
      successMessage.textContent = "Grade A";
    } else if (parsed > 80) {
      successMessage.textContent = "Grade B";
    } else if (parsed > 70) {
      successMessage.textContent = "Grade C";
    } else if (parsed > 50) {
      successMessage.textContent = "Grade D";
    } else {
      successMessage.textContent = "Grade F";
    }
  } catch (error) {
    errorMessage.textContent = error.message;
  }
}

//javascript page weather

const degreesForm = document.getElementById("Degrees");
degreesForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const degreesBox = document.getElementById("degrees-box");
  document.querySelector("input[name=convertion]:checked");
  const checkBox = document.querySelector("input[name=convertion]:checked");
  if (checkBox.value == "fc") {
    const result = (degreesBox.value - 32) / 1.8;
    const resultValue = document.getElementsByClassName("result")[0];
    resultValue.textContent = `The result is ${result.toFixed(1)}!`;
  } else {
    const result = Number(degreesBox.value) + 273.15;
    const resultValue = document.getElementsByClassName("result")[0];
    resultValue.textContent = `The result is ${result.toFixed(2)}!`;
  }
});
