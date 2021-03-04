const getLandlords = () => {
  fetch("http://localhost:3000/landlords")
    .then((resp) => resp.json())
    .then((landlord) => {
      landlord.map((landlord) => {
        debugger;
      });
      document.getElementById("buildings").innerHTML += `
        Z   `;
    });
};

window.addEventListener("DOMContentLoaded", getLandlords);
