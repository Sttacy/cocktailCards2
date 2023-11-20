//www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
import "../css/common.css";
import cardTpl from "../templates/card.hbs";
const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const refs = {
  form: document.getElementById("actionForm"),
  card: document.querySelector(".card"),
  cardInput: document.getElementById("cocktailInput"),
};

refs.form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = refs.cardInput.value.trim();
  if (title !== "") {
    getData(title);
  } else {
    alert("no cocktails by your input");
  }
});

function getData(title) {
  return fetch(`${BASE_URL}${title}`)
    .then((response) => response.json())
    .then((data) => {
      refs.card.innerHTML = cardTpl(data.drinks);
    })
    .catch((error) => {
      console.log(error);
      alert(error);
    });
}
