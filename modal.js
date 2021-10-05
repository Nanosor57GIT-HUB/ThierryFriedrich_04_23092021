function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//MODAL

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.querySelectorAll(".close");
const modalContent = document.querySelector(".content");
const form = document.querySelector("form");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeModal.forEach((close) => close.addEventListener("click", closeM));

// close modal form
function closeM() {
  modalbg.style.display = "none";
}
/************************************************************************************ */

//Création d'un élément span avec in id
let span1 = document.createElement("span");
span1.id = "error";

// Création du texte dans la span
span1.appendChild(document.createTextNode(""));

// Appelle de la class text-control pour la base du positionnement de la span
let textError = document.getElementsByClassName(".text-control");

//prend par id
// Obtention de l'élément de référence
let spa1 = document.getElementById("first");
let spa2 = document.getElementById("last");
spa2.setAttribute("minlength", "2");
let spa3 = document.getElementById("email");
let spa4 = document.getElementById("birthdate");
let spa5 = document.getElementById("quantity");
let spa6 = document.getElementById("location1");
let spa7 = document.getElementById("checkbox1");

// Récupération de l'élément parent
let parent1 = spa1.parentNode;
let parent2 = spa2.parentNode;
let parent3 = spa3.parentNode;
let parent4 = spa4.parentNode;
let parent5 = spa5.parentNode;
let parent6 = spa6.parentNode;
let parent7 = spa7.parentNode;

// Insert le nouvel élément spa'' dans if de la condition de myForm -->

//Prend par nom
//Création  des variables avec la propriété form(form name + input name)
let firstName = document.forms["reserve"]["first"];
let lastName = document.forms["reserve"]["last"];
let email = document.forms["reserve"]["email"];
let birthday = document.forms["reserve"]["birthdate"];
let winGame = document.forms["reserve"]["quantity"];
let citys = document.forms["reserve"]["location"];
let condUtilisations = document.forms["reserve"]["checkbox1"];

//Expression rules for first and last names (regExp)
let regName = /^([a-zA-Z_]){2,15}$/;

//Expression rules for email (regExp)
let regMail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//Création d'une variable pour les éléments du formulaire
let myForm = document.getElementById("reserve");

//Création de l'evènement submit dans une fonction
myForm.addEventListener("submit", function (e) {
  //Test si la valeur entrée dans le formulaire(first) est différente du regExp
  if (!regName.test(firstName.value)) {
    span1.innerHTML = "(Votre prénom ne doit comporter que des caractères !)";
    parent1.insertBefore(span1, textError.nextSibling);
    firstName.focus();
    e.preventDefault();
    return false;
  }

  //Test si la valeur entrée dans le formulaire(last) est différente du regExp
  if (!regName.test(lastName.value)) {
    span1.innerHTML = "(Votre nom ne doit comporter que des carctères !)";
    parent2.insertBefore(span1, textError.nextSibling);
    lastName.focus();
    e.preventDefault();
    return false;
  }

  //Test si la valeur entrée dans le formulaire(email) est différente du regExp
  if (!regMail.test(email.value)) {
    span1.innerHTML = "(Veuillez mettre une adresse Email valide !)";
    parent3.insertBefore(span1, textError.nextSibling);
    email.focus();
    e.preventDefault();
    return false;
  }

  //Test si une valeur(date) est entrée dans le formulaire
  if (birthday.value == "") {
    span1.innerHTML = "(Veuillez saisir votre date de naissance !)";
    parent4.insertBefore(span1, textError.nextSibling);
    e.preventDefault();
    return false;
  }

  //test si une valeur(number) est entrée dans le formulaire
  if (winGame.value == "") {
    span1.innerHTML = "(Veuillez selectionner un nombre de participation !)";
    parent5.insertBefore(span1, textError.nextSibling);
    e.preventDefault();
    return false;
    //Si la valeur est de "0" alors retourne true pour citys et passe au suivant
  } else if (winGame.value == "0") {
    citys = false;
    //Si la valeur est superieur à "0", demande une valeur de citys
  } else {
    winGame.value > "0";
    citys.value == "";
  }

  //test si une valeur est entrée dans le formulaire
  if (citys.value == "") {
    span1.innerHTML = "(Veuillez sélectionner une ville de participation !)";
    parent6.insertAdjacentElement("beforebegin", span1, textError);
    e.preventDefault();
    return false;
  }
  //Test si la "conditions d'utilisations" est différente de checked
  if (!condUtilisations.checked) {
    span1.innerHTML = "(Vous devez accepter les conditions d'utilisations !)";
    parent7.insertAdjacentElement("beforebegin", span1, textError);
    e.preventDefault();
    return false;
  }

  e.preventDefault();
  //Appelle de la fonction "confirmation"
  confirmation();
});

//Création de la fonction confirmation
function confirmation() {
  //Suppression du formulaire pour laisser la place au message de confirmation
  const formBody = document.querySelector("form");
  formBody.style.display = "none";

  //Création d'un boutton "buttonOk" pour sortir du modal de confirmation
  let buttonOk = document.createElement("button");
  //Création d'une class dans l'objet button
  buttonOk.classList.add("btnOk");
  //Création du contenu dans le bouton
  buttonOk.textContent = "Quitter";

  //Ajouter un evenement au click pour fermer le modal
  buttonOk.addEventListener("click", function () {
    modalbg.style.display = "none";
  });

  //Message de confirmation intégrant les nom, prénom et adresse mail
  //Création de l'élément "p"
  const validationMessage = document.createElement("p");
  validationMessage.classList.add("messageValid");
  validationMessage.innerHTML =
    firstName.value +
    " " +
    lastName.value +
    " !" +
    "<br>" +
    " Une confirmation vous sera envoyée à l'adresse " +
    "<br>" +
    email.value +
    "</p>";

  //Appelle de l'élément modal-body
  let modal = document.querySelector(".modal-body");
  //Ajout d'un identifiant
  modal.setAttribute("id", "confirmText");

  //Mise en place des éléments enfants(boutton et message) dans le modal-body
  modal.appendChild(validationMessage);
  modal.appendChild(buttonOk);
}
