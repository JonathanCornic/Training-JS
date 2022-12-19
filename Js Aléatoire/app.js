// créer un nombre aléatoire entre 0 et 10:

function aleatoire(max){
    return Math.floor(Math.random() * (max + 1))
}
const solution = aleatoire(10)

// si bonne réponse :

function siVrai(n) {
    return solution === n
}

// prompt et verification :
function deviner() {
    const nombre = prompt('entrez un chiffre entre 1 et 10') * 1
    return siVrai(nombre)
}

// boucle nombre de chance restante ou reussite :
for (chance = 0; chance < 3; chance++){
    if(deviner()){
        console.log('Bravo')
        break;
    }else if (chance === 0) {
        console.log('Encore 2 chances');
    }else if (chance === 1) {
        console.log("Plus qu'une chance");
    }else if(chance === 2) 
        console.log('Vous avez perdu');
}