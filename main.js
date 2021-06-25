const DarkLight = document.querySelector(".btn-tg");
const Card = document.querySelectorAll(".card");
const Title1 = document.querySelector(".title1");
const Title2 = document.querySelector(".title2");
const Cart = document.querySelectorAll(".cart");

let DarkMode = localStorage.getItem("DarkMode");

const EnableDark = () => {
  localStorage.setItem("DarkMode", "enabled");
  DarkLight.classList.add("change");
  const body = document.querySelector("body");
  body.classList.add("dark");
  Title1.classList.add("show");
  Title2.classList.add("show");
  Card.forEach((ca) => {
    ca.classList.add("dark");
  });
  Cart.forEach((ca) => {
    ca.classList.add("dark");
  });
};
const DisableDark = () => {
  localStorage.setItem("DarkMode", null);
  DarkLight.classList.remove("change");
  const body = document.querySelector("body");
  Title1.classList.remove("show");
  Title2.classList.remove("show");
  body.classList.remove("dark");
  Card.forEach((ca) => {
    ca.classList.remove("dark");
  });
  Cart.forEach((ca) => {
    ca.classList.remove("dark");
  });
};

if (DarkMode === "enabled") {
  EnableDark();
}

DarkLight.addEventListener("click", () => {
  DarkMode = localStorage.getItem("DarkMode");
  if (DarkMode !== "enabled") {
    EnableDark();
  } else {
    DisableDark();
  }
});
