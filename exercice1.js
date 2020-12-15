let voiture = {
    Nom : "Eggo",
    imgUrl : "https://images.caradisiac.com/logos/9/9/8/2/159982/S7-Citroen-Eggo-concept-de-citadine-du-futur-73689.jpg",
    nombresRoues : "4",
    Couleur : "Marron",
    Contructeur : "Citroen",
    Carburant : "Solaire",
    nombrePortes : "3",
    Autonomie : "450km",
    vitesseMaxi : "120km/h"
};

let divContainer = document.getElementById("container");
let img = document.createElement("img");
img.src = voiture.imgUrl;
divContainer.append(img);
divContainer.innerHTML += "<br>";
divContainer.innerHTML += "Nom : " + voiture.Nom + "<br>";
divContainer.innerHTML += "Nombres de roues : " + voiture.nombresRoues + "<br>";
divContainer.innerHTML += "Couleurs : " + voiture.Couleur + "<br>";
divContainer.innerHTML += "Constructeur : " + voiture.Contructeur + "<br>";
divContainer.innerHTML += "Type de carburant : " + voiture.Carburant + "<br>";
divContainer.innerHTML += "Nombre de portes : " + voiture.nombrePortes + "<br>";
divContainer.innerHTML += "Autonomie : " + voiture.Autonomie + "<br>";
divContainer.innerHTML += "Vitesse maximale : " + voiture.vitesseMaxi + "<br>";



