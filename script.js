let count = 0;
const alienImage = document.getElementById("alienImage");
const counterDisplay = document.getElementById("counter");
const miaoDisplay = document.getElementById("miao"); // "MIAO" element

// Load a pop sound for the click
const popSound = new Audio('pop.mp3'); 

function clickAlien() {
    count++;
    counterDisplay.childNodes[0].nodeValue = count + " "; // Update only the number part

    // Play sound
    popSound.play();


    alienImage.classList.add("pop");
    miaoDisplay.classList.add("miao-pop"); // Add animation to "MIAO" text

    // Change the image briefly on click
    alienImage.src = "cat2.jpg";

   
    setTimeout(() => {
        alienImage.src = "cat1.jpg";
        alienImage.classList.remove("pop");
        miaoDisplay.classList.remove("miao-pop"); 
    }, 300); 
}
