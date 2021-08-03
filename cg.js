var colors = [];
var numOfSquares = 6;
var pickedColor;
var modeButtons = document.querySelectorAll('.mode');
var squares = document.querySelectorAll('.square')
var winColor = document.getElementById('winColor');
var h1 = document.querySelector('h1');
var messageDisplay = document.querySelector('#message');

var newColorsButton = document.querySelector('#newColors');

winColor.textContent = pickedColor

initit()

function initit() {
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    for(var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', function(){
            modeButtons[0].classList.remove('selected')
            modeButtons[1].classList.remove('selected')
            this.classList.add('selected')
            //turnary operator for the commented out IF statement
            this.textContent === 'Easy' ? numOfSquares = 3: numOfSquares = 6;
            reset()
        });
    };
}

function setupSquares(){
    for(i = 0; i < squares.length; i++) {
        //add click event to square
        squares[i].addEventListener('click', function(){
            //grab clicked color
            var clickedColor = this.style.backgroundColor
            //compare to picked color
            if(clickedColor === pickedColor){
                messageDisplay.textContent = 'Yay! winnER!';
                changeColors(clickedColor);
                h1.style.backgroundColor = pickedColor;
                newColorsButton.textContent = 'Play Again!'
            }
            else {
                this.style.backgroundColor = '#232323';
                messageDisplay.textContent = 'Try Again, Loser'
    
            }
        });
    };
}

for(i = 0; i < squares.length; i++) {
    //assign initial colors to squares
    squares[i].style.backgroundColor = colors[i]
    //add click event to square
    squares[i].addEventListener('click', function(){
        //grab clicked color
        var clickedColor = this.style.backgroundColor
        //compare to picked color
        if(clickedColor === pickedColor){
            messageDisplay.textContent = 'Yay! Winner!';
            changeColors(clickedColor);
            h1.style.backgroundColor = pickedColor;
            newColorsButton.textContent = 'Play Again!'
        }
        else {
            this.style.backgroundColor = '#232323';
            messageDisplay.textContent = 'Uh Oh! Try Again!'

        }
    });
}

function changeColors(color) {
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColors() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
    
}

function generateRandomColors(num) {
    var arr = [];
    for(let i = 0; i < num; i++) {
        arr.push(randomColor())
    };
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}







for(var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function(){
        modeButtons[0].classList.remove('selected')
        modeButtons[1].classList.remove('selected')
        this.classList.add('selected')
        //turnary operator for the commented out IF statement
        this.textContent === 'Easy' ? numOfSquares = 3: numOfSquares = 6;
       
        reset()
    });
}

function reset() {
    //generate all new colors
    colors = generateRandomColors(numOfSquares);
    //pick new random colors
    pickedColor = pickColors();    
    //change colorDisplay to match pickedColor
    winColor.textContent = pickedColor;
    //change colors of squaeres
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = 'block';
        squares[i].style.background = colors[i];
        }
        else {
            squares[i].style.display = 'none';
        }
    };
    h1.style.backgroundColor = 'steelblue';
    messageDisplay.textContent = '';
    newColorsButton.textContent = 'New Colors';
}
