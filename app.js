const getLandlords = () => {
  fetch("http://localhost:3000/landlords")
    .then((resp) => resp.json())
    .then((landlord) => {
      landlord.map((landlord) => {
        document.getElementById("buildings").innerHTML += `
        <li>${landlord.name}<li/>  `;
      });
    });
};

const attachClickLinks = () => {
  const li = document.querySelector("li");
  li.addEventListener("click", getBuildings);
};
window.addEventListener("DOMContentLoaded", getLandlords);
const getBuildings = () => {
  fetch("http://localhost:3000/landlords")
    .then((resp) => resp.json())
    .then((landlord) => {
      landlord.map((landlord) => {
        debugger;
        document.getElementById("buildings").innerHTML += `
        <li>${landlord.name}<li/>  `;
      });
    });
};

// const getNav;
// debugger;
