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