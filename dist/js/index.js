window.onscroll = function () {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector("#to-top");
  
    if (window.pageYOffset > fixedNav) {
      header.classList.add("navbar-fixed");
      toTop.classList.remove("hidden");
      toTop.classList.add("flex");
    } else {
      header.classList.remove("navbar-fixed");
      toTop.classList.remove("flex");
      toTop.classList.add("hidden");
    }
  };
  
  const hamburger = document.querySelector("#hamburger");
  const navMenu = document.querySelector("#nav-menu");
  
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
  });
  
  window.addEventListener("click", function (e) {
    if (e.target != hamburger && e.target != navMenu) {
      hamburger.classList.remove("hamburger-active");
      navMenu.classList.add("hidden");
    }
  });
  
  const darkToggle = document.querySelector("#dark-toggle");
  const html = document.querySelector("html");
  
  darkToggle.addEventListener("click", function () {
    if (darkToggle.checked) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  });
  //type scrp
  const typedTextSpan = document.querySelector(".typed-text");
  const cursorSpan = document.querySelector(".cursor");
  const textArray = [
    "IST Annuqayah",
    "IST Annuqayah",
    "IST Annuqayah",
    "IST Annuqayah",
  ];
  const typingDelay = 200;
  const erasingDelay = 100;
  const newTextDelay = 2000; // Delay between current and next textlet textArrayIndex = 0;let charIndex = 0; function type() {  if (charIndex < textArray[textArrayIndex].length) {    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);    charIndex++;    setTimeout(type, typingDelay);  }   else {    cursorSpan.classList.remove("typing");  	setTimeout(erase, newTextDelay);  }} function erase() {	if (charIndex > 0) {    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);    charIndex--;    setTimeout(erase, erasingDelay);  }   else {    cursorSpan.classList.remove("typing");    textArrayIndex++;    if(textArrayIndex>=textArray.length) textArrayIndex=0;    setTimeout(type, typingDelay + 1100);  }} document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect  if(textArray.length) setTimeout(type, newTextDelay + 250);});
  let textArrayIndex = 0;
  let charIndex = 0;
  
  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      if (!cursorSpan.classList.contains("typing"))
        cursorSpan.classList.add("typing");
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      cursorSpan.classList.remove("typing");
      setTimeout(erase, newTextDelay);
    }
  }
  
  function erase() {
    if (charIndex > 0) {
      if (!cursorSpan.classList.contains("typing"))
        cursorSpan.classList.add("typing");
      typedTextSpan.textContent = textArray[textArrayIndex].substring(
        0,
        charIndex - 1
      );
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      cursorSpan.classList.remove("typing");
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 1100);
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
  });
  
  // LOADING PAGE
  const refreshPage = () => {
    location.reload();
  };
  const playLoader = () => {
    let loader = document.querySelector(".load-wrapper");
    let bodyLoad = document.querySelector("body");
    loader.style.display = "none";
    bodyLoad.classList.remove("overflow-hidden");
  };
  const stopLoader = () => {
    let loader = document.querySelector(".load-wrapper");
    loader.style.display = "none";
  };
  
  window.addEventListener("load", () => {
    let bodyLoad = document.querySelector("body");
    bodyLoad.classList.add("overflow-hidden");
    setTimeout(playLoader, 2000);
  });