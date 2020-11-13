function changeTitles() {
  change_to_do = document.querySelector("body > main > section > div > h1")
  change_to_do.textContent = "Ce que j'ai appris à THP"
  change_to_do2 = document.querySelector("body > main > section > div > p.lead.text-muted")
  change_to_do2.textContent = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"
}
changeTitles()

function changeCallToActions() {
  button = document.querySelector("body > main > section > div > p:nth-child(3) > a.btn.btn-primary.my-2")
  button.textContent = "OK je veux tester !"
  button.href = "http://www.thehackingproject.org"
  button2 = document.querySelector("body > main > section > div > p:nth-child(3) > a.btn.btn-secondary.my-2")
  button2.textContent ="Non Merci"
  button2.href = "https://www.pole-emploi.fr/accueil/"
}
changeCallToActions()

function changeLogoName() {
  logo_title = document.querySelector("body > header > div.navbar.navbar-dark.bg-dark.box-shadow > div > a > strong")
  logo_title.textContent = "The THP Experience"
  logo_title.style.fontSize = "2rem"
}
changeLogoName()

function populateImages() {
  let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
  let pictures = document.querySelectorAll("body > main > div > div > div > div:nth-child(n) > div > img");
  pictures.forEach((element, i) => {
  element.src = imagesArray[i];
});
}
populateImages()


function deleteLastCards() {
  cards = document.querySelectorAll("body > main > div > div > div > div:nth-child(n)")
  last_3_cards = [cards[cards.length-3], cards[cards.length-2], cards[cards.length-1]]
  last_3_cards.forEach((card) => {
    card.remove()
  })
  console.log(cards);
}
deleteLastCards()

let changeCardsText = (params) => {
let cardsTexts = document.querySelectorAll("body > main > div > div > div > div:nth-child(n) > div > div > p")
let replacementText = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web","Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML","JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."]
for (let i = 0; i < 3; i++) {
  cardsTexts[i].textContent = replacementText[i];
}
}
changeCardsText()

let changeViewButtons = () => {
  view_buttons = document.querySelectorAll("body > main > div > div > div > div:nth-child(n) > div > div > div > div > button:nth-child(1)")
  view_buttons.forEach((button) => { button.className = "btn btn-sm btn-success" })
}
changeViewButtons()

let lastFunction = () => {
  row = document.createElement("div")
  row.className = "row"
  document.querySelector("body > main > div > div").appendChild(row)

  jsCard = document.querySelector("body > main > div > div > div:nth-child(1) > div:nth-child(3)")
  document.querySelector("body > main > div > div > div:nth-child(2)").appendChild(jsCard)
}
lastFunction()