//Random number generator
function getRandNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
//Function to generate a random quote
function randQuote() {
    var quotes = [
        "Fear is the path to the dark side...-Yoda",
        "Anger, fear, aggression...the dark side of the Force are they. -Yoda",
        "No! Try not! Do...or do not. There is no try. -Yoda",
        "A good speach is comparatively the same like a miniskirt: it must be long enough to cover the important things and short enough to keep things interessting. -Sifu Wong",
        "And this is very important: smile from your heart... -Sifu Wong",
        "In my experience, there is no such thing as luck. -Obi Wan Kenobi",
        "There can be only one. -Christopher Lambert",
        "Crushing it",
        "Let's go!",
        "I play Pokemon Go, everyday...I play Pokemon Go. -Pokemon Go Kid",
        "I wanna be, the very best. Like no one ever was. -Pokemon Theme Song",
        "This is the end."
    ],
        str = quotes[getRandNum(0, quotes.length)];
    return str;
}

//This waits for the document to load
$(document).ready(function() {
    //Function to change the html and display the quote
    var newQuote = randQuote();
    $(".message").html(newQuote);
});