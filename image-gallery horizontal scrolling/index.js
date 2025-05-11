let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

nextBtn.addEventListener("click",()=>{
    console.log("next");
    scrollContainer.scrollLeft+=900;
});
backBtn.addEventListener("click",()=>{
    console.log("next- back");
    scrollContainer.scrollLeft-=900;
});