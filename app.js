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
const login = () => {
  clearDivs();
};

const attachClickLinks = () => {
  document.getElementById("login").addEventListener("click", login);
};

const welcomePage = () => {
  document.getElementById("welcome").innerHTML += `
    <a href="#" id="login">Login</a>
    <a href="#" id="signup">Sign Up!</a>
  <h1>Connect To Your Property</h1>

  <img id="connect" src="http://images.hw.net/interactives/MFE/img/smarthome.gif"></img>
  `;
  document.getElementById("login").addEventListener("click", login);
  attachClickLinks();
};
window.addEventListener("DOMContentLoaded", welcomePage);

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

const getNav;
debugger;
