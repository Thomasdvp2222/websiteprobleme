var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 25,
    slidesPerGroup: 1,
    loop: true,
    fade:true,
    centerSlider:true,
    grabCursor:true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true,

    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        968:{
            slidesPerView:3,
        },
    },
  });
var radius = 240;
var autoRotate = true;
var rotateSpeed = -60;
var imgWidth = 120; 
var imgHeight = 170;

var bgMusicControls = true;



setTimeout(init, 100);

var obox = document.getElementById('drag-container');
var ospin = document.getElementById('spin-container');
var aImg = ospin.getElementsByTagName('img');
var aVid = ospin.getElementsByTagName('video');
var aEle = [...aImg, ...aVid];


ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";


var ground = document.getElementById('ground');
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";

function init(delayTime) {
for (var i = 0; i < aEle.length; i++) {
aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
aEle[i].style.transition = "transform 1s";
aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
}
}

function applyTranform(obj) {

if(tY > 180) tY = 180;
if(tY < 0) tY = 0;

obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
}

function playSpin(yes) {
ospin.style.animationPlayState = (yes?'running':'paused');
}

var sX, sY, nX, nY, desX = 0,
desY = 0,
tX = 0,
tY = 10;


if (autoRotate) {
var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}





document.onpointerdown = function (e) {
clearInterval(obox.timer);
e = e || window.event;
var sX = e.clientX,
  sY = e.clientY;

this.onpointermove = function (e) {
e = e || window.event;
var nX = e.clientX,
    nY = e.clientY;
desX = nX - sX;
desY = nY - sY;
tX += desX * 0.1;
tY += desY * 0.1;
applyTranform(obox);
sX = nX;
sY = nY;
};

this.onpointerup = function (e) {
obox.timer = setInterval(function () {
  desX *= 0.95;
  desY *= 0.95;
  tX += desX * 0.1;
  tY += desY * 0.1;
  applyTranform(obox);
  playSpin(false);
  if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
    clearInterval(obox.timer);
    playSpin(true);
  }
}, 17);
this.onpointermove = this.onpointerup = null;
};

return false;
};

document.onmousewheel = function(e) {
e = e || window.event;
var d = e.wheelDelta / 20 || -e.detail;
radius += d;
init(1);
};
const navbarToggle = document.querySelector(".toggle");


const sr = ScrollReveal({
origin: "top",
distance: "30px",
duration: 2000,
});

sr.reveal(
`nav, .main-container,
.services-container,
.about-container,
.milestones-container,
.about-us-container,
.questions-container`,
{
interval: 200,
}
);
/*tabs*/
function openPage(pageName,elmnt,color) {
var i, tabcontent, tablinks;
tabcontent = document.getElementsByClassName("tabcontent22");
for (i = 0; i < tabcontent.length; i++) {
tabcontent[i].style.display = "none";
}
tablinks = document.getElementsByClassName("tablink22");
for (i = 0; i < tablinks.length; i++) {
tablinks[i].style.backgroundColor = "";
}
document.getElementById(pageName).style.display = "block";
elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen22").click();


/* LINEUPS*/

function openPage(pageName,elmnt,color) {
var i, tabcontent, tablinks;
tabcontent = document.getElementsByClassName("tabcontentDD");
for (i = 0; i < tabcontent.length; i++) {
tabcontent[i].style.display = "none";
}
tablinks = document.getElementsByClassName("tablinkDD");
for (i = 0; i < tablinks.length; i++) {
tablinks[i].style.backgroundColor = "";
}
document.getElementById(pageName).style.display = "block";
elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpenDD").click();
function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontentDD");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinkDD");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpenDD").click();