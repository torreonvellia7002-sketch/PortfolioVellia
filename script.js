// ===============================
// AOS Animation
// ===============================

AOS.init({
    duration: 1000,
    once: true
});

// ===============================
// Active Navigation Highlight
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});

// ===============================
// Typing Effect
// ===============================

const professions = [

"Student Graphic Designer",

"BSIT Student",

"Aspiring Web Developer",

"Creative Designer"

];

let professionIndex = 0;
let characterIndex = 0;

const typingElement = document.querySelector(".hero-text h4");

function typeProfession(){

    if(characterIndex < professions[professionIndex].length){

        typingElement.textContent += professions[professionIndex].charAt(characterIndex);

        characterIndex++;

        setTimeout(typeProfession,80);

    }else{

        setTimeout(deleteProfession,1800);

    }

}

function deleteProfession(){

    if(characterIndex > 0){

        typingElement.textContent = professions[professionIndex].substring(0,characterIndex-1);

        characterIndex--;

        setTimeout(deleteProfession,40);

    }else{

        professionIndex++;

        if(professionIndex >= professions.length){

            professionIndex = 0;

        }

        setTimeout(typeProfession,300);

    }

}

typingElement.textContent="";

typeProfession();

// ===============================
// Back To Top Button
// ===============================

const topButton = document.createElement("button");

topButton.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position="fixed";
topButton.style.bottom="30px";
topButton.style.right="30px";
topButton.style.width="55px";
topButton.style.height="55px";
topButton.style.border="none";
topButton.style.borderRadius="50%";
topButton.style.background="#ff5e92";
topButton.style.color="white";
topButton.style.fontSize="22px";
topButton.style.cursor="pointer";
topButton.style.display="none";
topButton.style.boxShadow="0 10px 25px rgba(0,0,0,.25)";
topButton.style.zIndex="999";

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topButton.style.display="block";

    }else{

        topButton.style.display="none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ===============================
// Dark / Light Mode
// ===============================

const modeButton=document.createElement("button");

modeButton.innerHTML='<i class="fa-solid fa-moon"></i>';

modeButton.id="modeBtn";

document.body.appendChild(modeButton);

modeButton.style.position="fixed";
modeButton.style.bottom="100px";
modeButton.style.right="30px";
modeButton.style.width="55px";
modeButton.style.height="55px";
modeButton.style.borderRadius="50%";
modeButton.style.border="none";
modeButton.style.background="#4ecbff";
modeButton.style.color="white";
modeButton.style.fontSize="22px";
modeButton.style.cursor="pointer";
modeButton.style.boxShadow="0 10px 25px rgba(0,0,0,.25)";
modeButton.style.zIndex="999";

let dark=false;

modeButton.addEventListener("click",()=>{

    dark=!dark;

    if(dark){

        document.body.style.background="#151515";
        document.body.style.color="white";

        document.querySelectorAll(".card,.timeline-item,.about-container,.project-card").forEach(card=>{

            card.style.background="#222";

            card.style.color="white";

        });

        modeButton.innerHTML='<i class="fa-solid fa-sun"></i>';

    }else{

        document.body.style.background="#f7f7f7";
        document.body.style.color="#222";

        document.querySelectorAll(".card,.timeline-item,.about-container,.project-card").forEach(card=>{

            card.style.background="white";

            card.style.color="#222";

        });

        modeButton.innerHTML='<i class="fa-solid fa-moon"></i>';

    }

});

// ===============================
// Gallery Lightbox
// ===============================

const galleryImages=document.querySelectorAll(".gallery img");

galleryImages.forEach(image=>{

    image.addEventListener("click",()=>{

        const overlay=document.createElement("div");

        overlay.style.position="fixed";
        overlay.style.left="0";
        overlay.style.top="0";
        overlay.style.width="100%";
        overlay.style.height="100%";
        overlay.style.background="rgba(0,0,0,.85)";
        overlay.style.display="flex";
        overlay.style.justifyContent="center";
        overlay.style.alignItems="center";
        overlay.style.zIndex="9999";

        const bigImage=document.createElement("img");

        bigImage.src=image.src;

        bigImage.style.maxWidth="90%";
        bigImage.style.maxHeight="90%";
        bigImage.style.borderRadius="15px";

        overlay.appendChild(bigImage);

        document.body.appendChild(overlay);

        overlay.addEventListener("click",()=>{

            overlay.remove();

        });

    });

});

// ===============================
// Loading Screen
// ===============================

window.addEventListener("load",()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        document.body.style.transition="opacity 1s";

        document.body.style.opacity="1";

    },100);

});