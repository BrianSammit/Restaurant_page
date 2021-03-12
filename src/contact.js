function createContact() {}

function loadContact() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createContact());
}

export default loadContact;
