let a = 5;
let b = 10;

console.log("valeur du début :");
console.log("a =", a);
console.log("b =", b);


// je fais intervenir une 3ème valeur pour effectuer une rotation des valeur
let c = a;
a = b;
b = c;

// vu que j'ai déjà déclarer "a et b" plus haut, je n'écris plus "let"

console.log("valeur de la fin :");
console.log("a =", a);
console.log("b =", b);