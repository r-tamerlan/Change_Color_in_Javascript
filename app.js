let btn = document.querySelector("button");
let colorDesk = document.getElementById("colorDesk");
let rengler = new Array("blue", "red", "green", "black", "white", "#00FA9A",
    "#191970", "#663399", "#2F4F4F")
let z = 0;

btn.addEventListener("click", function() {

    colorDesk.style.background = rengler[z];

    if (z == 4) { colorDesk.style.color = "black" } else { colorDesk.style.color = "white" };
    z++;
    if (z == 8) { z = 0 };


});