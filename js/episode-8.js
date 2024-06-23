let nom = prompt("Veuillez entrer votre nom")

let sexe = prompt("quel est votre sexe? (homme/femme)")


if (sexe.toLowerCase() === "homme"){
    alert("Bonjour monsieur " + nom);
} else if (sexe.toLowerCase() === "femme") {
    alert("Bonjour madame " + nom)
}


