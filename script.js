// =====================================================
// Kata JS 6 — Mon balcon
// Suis les TODO dans l'ordre. La constante plantes vient de plantes.js.
// =====================================================


// ---------- PARTIE 1 : les fonctions qui CALCULENT ----------
// Elles reçoivent des données et RETOURNENT un résultat.
// Elles ne touchent pas à la page.


// TODO 1 — compterAArroser(liste)
// Retourne le nombre de plantes de la liste dont aArroser vaut true.
function compterAArroser(array) {
    let count = 0;
    array.forEach(element => {
        if(element.aArroser){
            count++;
        }
    });
    console.log(`count: ${count}`);
    return count
}
// compterAArroser(plantes);

// Vérifie dans la console avant de passer à la suite :
// console.log(compterAArroser(plantes)) // doit afficher 4


// TODO 2 — filtrerParLieu(liste, lieu)
// Retourne un NOUVEAU tableau avec seulement les plantes dont le lieu
// est égal au paramètre lieu ("intérieur" ou "extérieur").
function filtrerParLieu(liste, lieu) {
    let tab = [];
    let tab1 = [];
    let i = 0;
    liste.forEach(l => {
        let nom = l.nom;
        if(l.lieu === lieu){
            i++;
            tab.push(` ${nom}`);
            tab1.push(l);
            // tab.push(i);
            
        } 
    });
    console.log(`tableau des plantes: ${tab}`)
    console.log(`${i} plantes`);
    return tab1;    
}
// filtrerParLieu(plantes, "intérieur");
// console.log(filtrerParLieu(plantes, "intérieur")) // doit afficher 4 plantes


// ---------- PARTIE 2 : les fonctions qui AFFICHENT ----------
// Elles modifient la page. Elles ne retournent rien.


// TODO 3 — afficherPlantes(liste)
// 1. Vide la liste <ul id="liste">
// 2. Pour chaque plante, crée un <li> qui contient l'emoji puis le nom
// 3. Si la plante est à arroser, ajoute au <li> la classe "a-arroser"
// 4. Mets à jour <p id="compteur"> : « 4 plantes à arroser sur 8 »
//    (utilise compterAArroser, ne recompte pas ici)
const listePlante = document.getElementById("liste");
const compteur = document.getElementById("compteur");
function afficherPlantes(liste) {
    listePlante.innerHTML = "";
    liste.forEach( list =>{
        const li = document.createElement("li");
        li.textContent = `${list.emoji} ${ list.nom}`;
        if(list.aArroser){
           li.classList.add("a-arroser");
        }
        compterAArroser(liste);
        let nbrePlanteAArroser = compterAArroser(liste);
        listePlante.appendChild(li);
        compteur.textContent = `${nbrePlanteAArroser} plantes à arroser sur ${liste.length}`;
    })    
}
// afficherPlantes(plantes);


// TODO 4 — Au chargement de la page, affiche toutes les plantes.
document.addEventListener("DOMContentLoaded", () =>{
    afficherPlantes(plantes);
})


// ---------- PARTIE 3 : les clics ----------


// TODO 5 — Les trois boutons de filtre
// Au clic sur « Intérieur » : affiche seulement les plantes d'intérieur.
// Au clic sur « Extérieur » : seulement celles d'extérieur.
// Au clic sur « Toutes » : toutes les plantes.
// Les gestionnaires sont des fonctions fléchées : () => { ... }
const allPlants = document.getElementById("btn-toutes");
const outPlants = document.getElementById("btn-exterieur");
const inPlants = document.getElementById("btn-interieur");



// TODO 6 — Le bouton actif
// Le bouton cliqué prend la classe "actif", les deux autres la perdent.
allPlants.addEventListener("click", () =>{
    afficherPlantes(plantes);
    // alert(afficherPlantes(plantes));
})

outPlants.addEventListener("click", () =>{
    filtrerParLieu(plantes, "extérieur");
    // alert(filtrerParLieu(plantes, "extérieur"));
    let allOutPlants = filtrerParLieu(plantes, "extérieur");
    // alert(allOutPlants);
    afficherPlantes(allOutPlants);
})

inPlants.addEventListener("click", () =>{
    filtrerParLieu(plantes, "intérieur");
    const allInPlants = filtrerParLieu(plantes, "intérieur");
    afficherPlantes(allInPlants);
})



// =====================================================
// Questions de recul (réponds en commentaire ici)
// 1.
// 2.
// 3.
// =====================================================
