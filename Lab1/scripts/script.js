/*
Student's Name: Mariana Salinas
script.js
Today's Date: 04/19/24 
*/

// Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
