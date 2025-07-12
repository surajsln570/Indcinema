let isVisible = false;
function toggleOptions(){
    const link = document.querySelector('#ab')
    const options = document.querySelector('#options')
    if (isVisible) {
        options.style.display = "none";
        link.textContent = "Show Menu"
    }
    else {
        options.style.display = "block";
        link.textContent = "Hide Menu";
    }
    isVisible = !isVisible;
}
toggleOptions()