console.log("Portfolio website loaded");

let welcomeText = document.getElementById("welcome-text");

if (welcomeText) {
    let message = "Welcome to my portfolio";
    let index = 0;

    welcomeText.textContent = "";

    function typeEffect(){
        if(index < message.length){
            welcomeText.textContent += message[index];
            index++;
        }
        else {
            clearInterval(typingTimer);
        }
    }

    let typingTimer = setInterval(typeEffect,150);
}

let logo = document.getElementById("logo");

if (logo) {
    logo.addEventListener("click",function(){
       logo.style.color = "#007bff";
    });
}

let aboutPhoto = document.getElementById("about-photo");

if (aboutPhoto) {
    let photoSwitched = false;

    function switchPhoto(){
        if (!photoSwitched){
            aboutPhoto.src = "images/profile2.JPG";
            photoSwitched = true;
        }
    }

    let photoTimer = setTimeout(switchPhoto, 3000);

    aboutPhoto.addEventListener("click", function(){
        clearTimeout(photoTimer);
        switchPhoto();
    });
}
let hamburger = document.querySelector(".hamburger");
let navLinks = document.querySelector(".nav-link");

if (hamburger && navLinks) {
    hamburger.addEventListener("click", function(){
        navLinks.classList.toggle("show");
    });
}
let langToggle = document.getElementById("lang-toggle");

if (langToggle) {
    let currentLang = "en";

    langToggle.addEventListener("click", function(){
        if (currentLang === "en") {
            currentLang = "fr";
            langToggle.textContent = "🇬🇧 EN";
        } else {
            currentLang = "en";
            langToggle.textContent = "🇫🇷 FR";
        }

        let translatableElements = document.querySelectorAll("[data-en]");

        translatableElements.forEach(function(element){
            element.textContent = element.getAttribute("data-" + currentLang);
        });
    });
}

let contactForm = document.getElementById("contact-form");

if (contactForm) {
    let formSuccess = document.getElementById("form-success");

    contactForm.addEventListener("submit", function(event){
        event.preventDefault();

        let formData = new FormData(contactForm);

        fetch(contactForm.action, {
            method: "POST",
            body: formData,
            headers: { "Accept": "application/json" }
        })
        .then(function(response){
            if (response.ok) {
                contactForm.reset();
                formSuccess.style.display = "block";
            }
        })
        .catch(function(error){
            console.log("Form submission error:", error);
        });
    });
}

function playClickSound() {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(600, audioCtx.currentTime);

    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.15);
}

document.addEventListener("click", function() {
    playClickSound();
});
const scrollElements = document.querySelectorAll(".scroll-fade");

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

scrollElements.forEach(function(element) {
    observer.observe(element);
});
fetch("http://localhost:3000/visit")
    .catch(function(error) {
        console.log("Visitor counter not reachable:", error);
    });