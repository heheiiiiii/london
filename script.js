// =========================================
// London Step Recruitment Script
// =========================================



document.addEventListener(
"DOMContentLoaded",
()=>{


/* =========================================
   FAQ Accordion
========================================= */


const faqItems =
document.querySelectorAll(".faq-item");


faqItems.forEach(item=>{


const button =
item.querySelector("button");

const answer =
item.querySelector("div");


if(!button || !answer) return;


answer.style.maxHeight = "0";
answer.style.overflow = "hidden";
answer.style.transition = "max-height .35s ease";


button.addEventListener(
"click",
()=>{


const isOpen =
item.classList.contains("active");


// close all
faqItems.forEach(other=>{

other.classList.remove("active");

const otherAnswer =
other.querySelector("div");

if(otherAnswer){
otherAnswer.style.maxHeight="0";
}

});



// open clicked
if(!isOpen){

item.classList.add("active");

answer.style.maxHeight =
answer.scrollHeight + "px";

}


});


});







/* =========================================
 Smooth Scroll
========================================= */


document
.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{


anchor.addEventListener(
"click",
function(e){


const target =
document.querySelector(
this.getAttribute("href")
);


if(target){

e.preventDefault();


const navbarHeight =
document.querySelector(".navbar")
?.offsetHeight || 0;


window.scrollTo({

top:
target.offsetTop-navbarHeight,

behavior:"smooth"

});


}


});


});








/* =========================================
 Scroll Animation
========================================= */


const animatedElements =
document.querySelectorAll(
".section h2, .card, .condition-grid div, .review, .image-text"
);



animatedElements.forEach(el=>{


el.style.opacity="0";

el.style.transform=
"translateY(30px)";

el.style.transition=
"opacity .7s ease, transform .7s ease";


});



const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0)";


observer.unobserve(
entry.target
);


}


});


},
{

threshold:0.15

});



animatedElements.forEach(el=>{
observer.observe(el);
});








/* =========================================
 Navbar Effect
========================================= */


const navbar =
document.querySelector(".navbar");


window.addEventListener(
"scroll",
()=>{


if(window.scrollY>80){


navbar.style.background=
"rgba(252,250,247,0.98)";


navbar.style.boxShadow=
"0 5px 20px rgba(0,0,0,0.08)";


}

else{


navbar.style.background=
"rgba(252,250,247,0.85)";


navbar.style.boxShadow=
"none";


}


});








/* =========================================
 Hero Image Fade
========================================= */


const heroImage =
document.querySelector(".hero-image");


if(heroImage){


heroImage.addEventListener(
"load",
()=>{

heroImage.style.opacity="1";

});


heroImage.style.opacity="0";

heroImage.style.transition=
"opacity 1s ease";


}








/* =========================================
 Mobile Apply Button
========================================= */


const applyButton =
document.querySelector(".nav-button");


if(applyButton &&
window.innerWidth <=768){


window.addEventListener(
"scroll",
()=>{


if(window.scrollY>300){


applyButton.style.opacity="1";

applyButton.style.transform=
"translateY(0)";


}

else{


applyButton.style.opacity="0";

applyButton.style.transform=
"translateY(20px)";


}


});


}





console.log(
"London Step Recruitment loaded"
);



});
