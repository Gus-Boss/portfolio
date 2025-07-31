var img = document.getElementById("lamp");
var container = document.getElementsByClassName("container")


img.addEventListener("click", function () {
    if (img.src.includes("lamp_off.png")) {
        img.src = "assets/lamp_on.png"
        document.body.style.background= "radial-gradient(circle,#ffff99 10%,#222 100%)"

    } else {
        img.src="assets/lamp_off.png"
        document.body.style.background= "radial-gradient(circle, white 8%, black 100%)"
    }
})
  
    

