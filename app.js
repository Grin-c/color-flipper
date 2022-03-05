let body = document.getElementById("body");
let bg_name = document.getElementById("background_color_name");
let button = document.getElementById("button_switch_color");

function randomNumber(max, min=0) {
    let random_number = Math.floor(Math.random() * (max - min) + min);
    let last_random_number = -1;

    if (last_random_number !== random_number) {
        last_random_number = random_number;
        return random_number;
    } 

    randomNumber();
}

function randomColor() {
    const colors = ["red", "blue", "white", "gray", "pink", "purple", "aquamarine", "beige", "Crimson", "indigo", "linen", "brown", "tan", "wheat", "white"];
    const max = colors.length;

    let random_color = colors[randomNumber(max, 0)];

    return random_color; 
}

button.addEventListener("click", () => {
    let new_color = randomColor()
    bg_name.innerHTML = `The new color is ${new_color}`;
    body.style.background = new_color;
})
