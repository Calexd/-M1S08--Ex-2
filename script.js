let textInput = document.getElementById("textInput");
let button = document.getElementById("button-text");
let allText = document.querySelectorAll('.all-text');

button.addEventListener('click', () => {
    const newText = textInput.value;
    allText.forEach(element => {
        element.innerText = newText;
    });
});

