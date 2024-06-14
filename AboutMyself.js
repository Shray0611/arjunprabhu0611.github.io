const baricon=document.querySelector(".bar")
 const container=document.querySelector(".container")
 const crossicon=document.querySelector(".cross")
 baricon.addEventListener("click",()=>{
    container.style.display="flex";
    baricon.style.display="none";
    crossicon.style.display="block"
 })
crossicon.addEventListener("click",()=>{
    container.style.display="none";
    crossicon.style.display="none"
    baricon.style.display="block"
 })
 function checkWidth() {
    if (window.innerWidth > 900) {
        container.style.display = "flex";
        baricon.style.display = "none";
        crossicon.style.display = "none";
    } else {
        container.style.display = "none";
        baricon.style.display = "block";
    }
}
window.addEventListener("resize", checkWidth);

checkWidth();