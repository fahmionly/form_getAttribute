const form = document.querySelector("form");
const nameInput = form.elements.name;
const output = document.querySelector("span#output");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (event.submitter.dataset.key === "value") {
    output.textContent = nameInput.value;
  } else if (event.submitter.dataset.key === "getAttribute") {
    output.textContent = nameInput.getAttribute("value");
  }
});
