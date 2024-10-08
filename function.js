
export  const checker = (arr) => arr.every((v) => v === true);
// compter le nombre de caract

export function countChar(input) {
    if (input.value.length > 4 && input.value.length <= 20) {
        input.classList.remove("danger");
        input.classList.add("success");
        input.parentElement.classList.add("success-checked");
        console.info(`✅ ${input.id} Nb de charactère OK`);
        return true;
    } else {
        input.classList.remove("success");
        input.parentElement.classList.remove("success-checked");
        input.classList.add("danger");
        console.warn(`${input.id}: Nb de charactère incorrect`);
        return false;
    }
}

// verifier la présence d'un mail valide et un numéro de téléphone valide

export function validationUI(input, regex) {
    if (regex.test(input.value)) {
        input.classList.remove("danger");
        input.classList.add("success");
        input.parentElement.classList.add("success-checked");
        console.info("✅ input is valid");
        return true;
    } else {
        input.classList.remove("success");
        input.classList.add("danger");
        console.warn("input is invalid");
        return false;
    }
}

// tester si les mots de passes sont identique
export function checkPass(pass1, pass2) {
    if (pass1.value === pass2.value && pass1.value.length > 4) {
        pass1.classList.remove("danger");
        pass1.classList.add("success");
        pass2.classList.remove("danger");
        pass2.classList.add("success");
        console.info("✅ Les mots de passes sont identiques");
        return true;
    } else {
        pass1.classList.remove("success");
        pass1.classList.add("danger");
        pass2.classList.remove("success");
        pass2.classList.add("danger");
        console.warn("Les mots de passes ne correspondent pas");
        return false;
    }
}
// Tester si l'utilisateur est majeur
export function isMajor(input) {
    if (input.checked) {
        input.parentElement.classList.remove("danger");
        input.parentElement.classList.add("success");
        console.info("✅ Utilisateur majeur");
        return true;
    } else {
        input.parentElement.classList.remove("success");
        input.parentElement.classList.add("danger");
        console.info("✅ Utilisateur mineur");
        return false;
    }
}
// Empécher l'injection de code ou de caractaires spéciaux

export function sanitizeInput(input) {
    // Enlever les balises HTML
    input = input.replace(/<[^>]*>/g, "");
    // Enlever les caractères spéciaux dangereux
    input = input.replace(/[^a-zA-Z0-9 ]/g, "");
    // Enlever les espaces multiples
    input = input.replace(/\s\s+/g, " ");
    console.log("input 4 => ", input);
    // Enlever les espaces en début et fin de chaîne
    input = input.trim();
    console.log("input 5 => ", input);
    return input;
}