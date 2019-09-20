// JavaScript Document
(() => {
    console.log("about page Linked up");


    
    // save shortcut to button in DOM
    
    var adam = document.querySelector("#adamImg");
    var lucas = document.querySelector("#lucasImg");
    var graham = document.querySelector("#grahamImg");
    var james = document.querySelector("#jamesImg");
    
    function adamClick() {
        console.log("Adams photo")
        var a = document.getElementById("adam");
        if (a.style.display != "block") {
            a.style.display = "block";
          } else {
            a.style.display = "none";
          }
    }

    function lucasClick() {
        console.log("Lucas photo")
        var a = document.getElementById("lucas");
        if (a.style.display != "block") {
            a.style.display = "block";
          } else {
            a.style.display = "none";
          }
    }

    function grahamClick() {
        console.log("Grahams photo")
        var a = document.getElementById("graham");
        if (a.style.display != "block") {
            a.style.display = "block";
          } else {
            a.style.display = "none";
          }
    }

    function jamesClick() {
        console.log("James photo")
        var a = document.getElementById("james");
        if (a.style.display != "block") {
            a.style.display = "block";
          } else {
            a.style.display = "none";
          }
    }
    
    adam.addEventListener("click", adamClick, false);
    lucas.addEventListener("click", lucasClick, false);
    graham.addEventListener("click", grahamClick, false);
    james.addEventListener("click", jamesClick, false);
    
    
    })();