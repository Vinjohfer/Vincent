// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


document.getElementById("songTitle").style.opacity = "0";

let opacity = 0;

let animation = setInterval(function () {
    opacity = opacity + 0.05;

    document.getElementById("songTitle").style.opacity = opacity;

    if (opacity >= 1) {
        clearInterval(animation);
    }
}, 100);

document.getElementById("starButton").onclick = function () {
    document.getElementById("message").innerHTML =
        "Keep looking at the stars!";
};

