
function myFunction() {
    var x = document.getElementById("myTopnav");
    var nav = document.getElementById("navbar");
    x.style.display = "block";
    if (x.className === "topnav") {
      x.className += " responsive";
      document.getElementsByClassName("linka").style.display = "block";
    } else {
      x.className = "topnav";
    }
  }
  const navLink = document.querySelectorAll(".linka");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu(){
  var x = document.getElementById("myTopnav");
  x.style.display = "none";
  myFunction();
  }