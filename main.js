import { checker, sanitizeInput } from "./function.js";
import { checkPass } from "./function.js";
import { countChar } from "./function.js";
import { validationUI } from "./function.js";
import { isMajor } from "./function.js";


console.log("script loaded");
const form = document.querySelector("form");
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexTel = /^(\+33\s?|0)\s?[1-9]\s?(\d{2}\s?){3}\d{2}$/;
const info = document.createElement("p");

// Ecouteurs d'évènements

form.firstName.addEventListener("keyup", () => {
    countChar(form.firstName);
});
form.lastName.addEventListener("keyup", () => {
    countChar(form.lastName);
});

form.email.addEventListener("keyup", () => {
    validationUI(form.email, regexEmail);
});
form.pass1.addEventListener("keyup", () => {
    checkPass(form.pass1, form.pass2);
});
form.pass2.addEventListener("keyup", () => {
    checkPass(form.pass1, form.pass2);
});
form.contact.addEventListener("keyup", () => {
    validationUI(form.contact, regexTel);
});

form.majeur.addEventListener("change", () => {
    isMajor(form.majeur);
});

// Soumission du formulaire
form.addEventListener("submit", (e) => {
    // Tester chaque champ
    // A chaque fois on enregistre la réponse dans un tableau
    // Tester si tous les champs du tableau === true pour envoyer le formulaire
    e.preventDefault();
    console.log("===================> form sumition");
    let isValid = false;
    let verif = [];
    for (let i = 0; i < form.elements.length; i++) {
        let field = form.elements[i];
       
        if (field.id === "firstName" || field.id === "lastName"  ) {
            field.value = sanitizeInput(field.value);        
            isValid=countChar(field);
            verif.push(isValid);
        } 
        if (field.id === "email") {
            isValid = validationUI(field, regexEmail);
            verif.push(isValid);
        }
        if (field.id === "pass1" || field.id === "pass2"){
            isValid = checkPass(form.pass1, form.pass2);
            verif.push(isValid)
        }
        if (field.id === "contact") {
            isValid = validationUI(field, regexTel);
            verif.push(isValid);
        }
        if (field.id === "majeur") {
            isValid = isMajor(field);
            verif.push(isValid);
        }
        console.log('verif => ', verif);
    }
   
    if (checker(verif)) {
        console.log("✅ data sent to server")
        setTimeout( () =>form.submit(), 2000);
    }else{
        console.warn("Form is invalide")
    }
   
    // const isLargeNumber = (element) => element === false;
    // if(verif.findIndex(isLargeNumber) > -1){
    //     console.warn("Form is invalide")
    // }else{
    //     console.log("✅ data sent to server")
    // }
});


