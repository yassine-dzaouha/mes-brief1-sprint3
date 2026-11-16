const API_URL = "https://countries.dev/countries";

// Tous les pays reçus de l'API (rempli une seule fois, au chargement)
let allCountries = [];

// TODO : récupère ici les éléments du DOM dont tu as besoin

/**
 * Récupère tous les pays depuis l'API.
 * - Utilise fetch avec async/await.
 * - Appelée UNE SEULE FOIS, au chargement de la page.
 *
 * @returns {Promise<Array>} Le tableau de tous les pays.
 */
function fetchCountries() {
  fetch(API_URL)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            allCountries = data;
            displayCountries(allCountries)
            console.log(allCountries)
        })
        .catch((error) => {
            console.error(error);
        })
}
/**
 * Crée la carte HTML d'un pays, sur le modèle de la maquette :
 * drapeau (avec un texte alternatif utile), nom, capitale, population.
 *
 * @param {Object} country - Un pays tel que renvoyé par l'API.
 * @returns {HTMLElement} La carte, prête à être ajoutée à la grille.
 */
function createCountryCard(country) {
  let article = document.createElement("article");
  article.className = "my-5 w-full max-w-sm bg-white border border-[#D9E0E8] rounded-lg overflow-hidden"
  let img = document.createElement("img")
  img.className = "w-full h-48 object-cover bg-[#E5EBF3]"
  img.src = country.flags.png

  let div = document.createElement("div");
  div.className = "p-5 leading-8"
  let p = document.createElement("p")
  p.className = "text-2xl font-semibold mb-2"
  p.textContent = country.name;

  let divCapital = document.createElement("div");
  divCapital.className = "flex justify-between"
  let cap = document.createElement("span");
  cap.textContent = "capital";
  let capName = document.createElement("span");
  capName.textContent = country.capital;
  divCapital.append(cap,capName);

  let divPeapol = document.createElement("div");
  divPeapol.className = "flex justify-between"
  let peap = document.createElement("span");
  peap.textContent = "Population";
  let peapNum = document.createElement("span");
  peapNum.textContent = country.population;
  divPeapol.append(peap,peapNum);
  
  div.append(p,divCapital,divPeapol);
  article.append(img,div);
  return article;
}

/**
 * Affiche une liste de pays dans la grille.
 * - Vide d'abord la grille (sinon les cartes s'accumulent).
 * - Ajoute une carte par pays.
 * - Si la liste est vide, affiche le message « Aucun pays ne correspond ».
 *
 * @param {Array} countries - Les pays à afficher.
 */
function displayCountries(countries) {
  articles = document.getElementById("articles")

  allCountries.forEach((country)=>{
    articles.append(createCountryCard(country));
  });
}

/**
 * Applique les deux filtres EN MÊME TEMPS sur allCountries :
 * - le continent choisi dans la liste déroulante ;
 * - le texte saisi dans la recherche (majuscules et minuscules ignorées).
 * Puis affiche le résultat avec displayCountries().
 *
 * Aucune requête vers l'API ici !
 */
let searchInput = document.getElementById("search");
let filterSelect = document.getElementById("continent");
function filterCountries() {
  let select = filterSelect.value
  let search = searchInput.value.trim().toLowerCase();

  let filtredCountys = allCountries.filter((country) => {
    let continent = country.region == select;
    let searched = country.name.toLowerCase().includes(search);

    return continent && searched
  });

  displayCountries(filtredCountys);

}
searchInput.addEventListener("input" , ()=>{
    filterCountries();
  })

// ------------------------------------------------------------
// BONUS
// ------------------------------------------------------------

/**
 * (Bonus) Trie des pays par population, du plus peuplé au moins peuplé.
 * Attention : ne modifie pas le tableau allCountries d'origine.
 *
 * @param {Array} countries
 * @returns {Array} Un nouveau tableau trié.
 */
function sortByPopulation(countries) {
  // TODO
}

/**
 * (Bonus) Affiche ou masque le message « Chargement des pays… ».
 *
 * @param {boolean} isLoading - true pour l'afficher, false pour le masquer.
 */
function showLoader(isLoading) {
  // TODO
}

/**
 * (Bonus) Affiche un message d'erreur clair quand l'API ne répond pas.
 *
 * @param {string} message
 */
function showError(message) {
  // TODO
}


// ------------------------------------------------------------
// DÉMARRAGE
// ------------------------------------------------------------

/**
 * Point d'entrée de l'application :
 * 1. récupère les pays avec fetchCountries() et les stocke dans allCountries ;
 * 2. affiche les pays du continent sélectionné par défaut ;
 * 3. écoute les changements de continent et la saisie dans la recherche.
 *
 * (Bonus) Gère le chargement et les erreurs avec try...catch.
 */
async function init() {
  // TODO\
  
  fetchCountries()
  
}

init();
