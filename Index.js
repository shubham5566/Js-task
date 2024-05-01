console.log("hello world")

document.body.addEventListener("click", function(event) {
    // Remove any existing cursor image
    const existingCursorImage = document.querySelector(".cursor-image");
    if (existingCursorImage) {
        existingCursorImage.remove();
    }

    // Create a new image element
    const cursorImage = document.createElement("img");
    cursorImage.src = "https://www.wizard.financial/static/media/wizaart-img.56787174.gif"; // Set the source of your image
    cursorImage.classList.add("cursor-image");

    // Set the position of the image based on the cursor coordinates
    cursorImage.style.left = (event.clientX + window.scrollX) + "px"; // Add window.scrollX for horizontal scroll
    cursorImage.style.top = (event.clientY + window.scrollY) + "px"; // Add window.scrollY for vertical scroll

    // Append the image to the body
    document.body.appendChild(cursorImage);
});