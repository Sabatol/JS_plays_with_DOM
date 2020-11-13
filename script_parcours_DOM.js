// Question 1
let pelements = document.getElementsByTagName("p")
console.log(pelements.length);
// Question 2
let coucou = document.getElementById("coucou")
console.log(coucou);
// Question 3 
let classA = document.getElementsByTagName("a")[2]
console.log(classA);
// Question 4
let count = document.getElementsByClassName("compte-moi")
console.log(count.length);
// Question 5
console.log(document.querySelectorAll("li.compte-moi")); 
// Question 6
console.log(document.querySelectorAll("ol > li.compte-moi ")); 
// Question 7
console.log(document.querySelectorAll("div > ul")[1].getElementsByTagName("li")[0])
// La page contient un seul élément <div>. Celui-ci contient 2 éléments "unordered list" ou <ul>. Dans le second <ul>, le premier élément de la liste (tag <li>) est caché visuellement de l'utilisateur mais toi, tu peux en récupérer le contenu. Affiche-le dans la console.