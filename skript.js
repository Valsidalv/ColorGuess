var numOfSquares = 6;
var colors = generateColors(numOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("h1 span");
var msgDisplay = document.querySelector("#msg");
var heder = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

for (var i = 0; i < modeBtns.length; i++) {
    modeBtns[i].addEventListener("click", function(){
        modeBtns[0].classList.remove("selected");
        modeBtns[1].classList.remove("selected");
        this.classList.add("selected");

        this.textContent == "Izi" ? numOfSquares = 3 : numOfSquares = 6;

        reset();
    });
}

resetBtn.addEventListener("click", reset);

function reset(){
    colors = generateColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    heder.style.backgroundColor = "steelblue";
    msgDisplay.textContent = "";
    reset.textContent = "Nu colors";

    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
    }
}

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;

        if(clickedColor == pickedColor){
            msgDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            heder.style.backgroundColor = pickedColor;
            resetBtn.textContent = "Play again?"
        } else {
            this.style.backgroundColor = "#505050";
            msgDisplay.textContent = "Try again";
        }
    });
}

function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateColors(num){
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var red = Math.floor(Math.random() *256);
    var green = Math.floor(Math.random() *256);
    var blue = Math.floor(Math.random() *256);

    return "rgb(" + red +", " + green + ", " + blue + ")";
}