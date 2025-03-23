document.addEventListener("DOMContentLoaded", () => {
    const colorPicker = document.getElementById("colorPicker");

    // Load saved color from local storage
    const savedColor = localStorage.getItem("bgColor");
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
        colorPicker.value = savedColor;
    }

    // Change background and save color
    colorPicker.addEventListener("input", (event) => {
        const selectedColor = event.target.value;
        document.body.style.backgroundColor = selectedColor;
        localStorage.setItem("bgColor", selectedColor);
    });
});