let count = 0;
const catImage = document.getElementById("alienImage");
const counterDisplay = document.getElementById("counter");

function clickCat() {
    count++;
    counterDisplay.textContent = count;

    // Change the image briefly on click
    catImage.src = "alien2.jpg"; // This is the "clicked" image

    // Change back to original after a short delay
    setTimeout(() => {
        catImage.src = "alien1.jpg";
    }, 100); // Adjust timing as desired
}