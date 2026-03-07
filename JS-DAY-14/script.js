const element = document.getElementById("myElement");
    const toggleButton = document.getElementById("toggleClassBtn");

    toggleButton.addEventListener("click", function() {
        element.classList.toggle("new-class");
    });