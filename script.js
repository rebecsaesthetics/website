function openMenu() {
    var x = document.getElementById("mobilelinks");
    var y = document.getElementById("menuicon")
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.background = "#28007e";
      y.style.color= "white";
    } else {
      x.style.display = "block";
      y.style.color = "#28007e";
      y.style.background= "white";
    }
  } 