// JavaScript Document

console.log("Linked up");

(function(){

    console.log("SEAF Fired");
    
    // save shortcut to button in DOM
    var button = document.querySelector("button");
    var burgerCon = document.querySelector("#burgerCon");
    
    function hamburgerMenu() {
        console.log("Click Worked")
        burgerCon.classList.toggle("slideToggle");
        button.classList.toggle("expanded");
    }
    
    button.addEventListener("click", hamburgerMenu, false);
    
    
    })();