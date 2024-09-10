// Array of phrases to cycle through
var phrases = ["a developer.", "a professional coder."];
var currentIndex = 0;

function changeText() {
    var elements = document.getElementsByClassName("intosech");
    
    if (elements.length > 0) { // Ensure the element exists
        // Change the text to the current phrase
        elements[0].innerText = phrases[currentIndex];
        
        // Update the index to the next phrase
        currentIndex = (currentIndex + 1) % phrases.length; // Loop back to the first phrase
    }
}

// Change the text every 3 seconds (3000 milliseconds)
setInterval(changeText, 2000);
