const dateElement = document.getElementById("date");
const loader = document.getElementById("loader");
document.addEventListener("DOMContentLoaded", () => {
  if (dateElement !== null) {
    const newDate = new Date();
    const fullYear = newDate.getFullYear();
    dateElement.textContent = fullYear;
  }
  if (loader !== null) {
    setTimeout(() => {
      loader.classList.replace("opacity-100", "opacity-0");
    }, 1500);
    setTimeout(() => {
      loader.classList.replace("d-flex", "d-none");
    }, 2000);
  }
  const formElement = document.querySelector("form");
  const submitFormText = document.querySelector("#fomrText");
  const textarea = document.querySelector("form textarea");
  if (formElement !== null) {
    formElement.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(formElement);
      const clientName = formData.get("name");
      formElement.style.display = "none";
      submitFormText.textContent = `${clientName} vaša poruka je primljena. Javicemo Vam se u najkracem mogucem roku`;
      setTimeout(() => {
        formElement.style.display = "block";
        submitFormText.textContent =
          " Ukoliko imate bilo kakvih pitanja ili nejasnoća slobodno nas kontaktirajte";
        if (textarea.value !== null) {
          textarea.value = " ";
        }
      }, 7000);
    });
  }
});

var replace = new ReplaceMe(document.querySelector(".replace-me"), {
  animation: "animated wobble", // Animation class or classes
  speed: 2500, // Delay between each phrase in miliseconds
  separator: ",", // Phrases separator
  hoverStop: true, // Stop rotator on phrase hover
  clickChange: false, // Change phrase on click
  loopCount: "infinite", // Loop Count - 'infinite' or number
  autoRun: true, // Run rotator automatically
});

const formElement = document.querySelector("form");
const submitFormText = document.querySelector("#fomrText");
