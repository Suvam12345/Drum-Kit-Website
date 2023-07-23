//Detecting Button Press
var numberOfDrumButtons=document.querySelectorAll(".drum").length; //7
for(var i=0;i<numberOfDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){ //anonymous function. If named function has to be used, we just have to call the function instead of writing anonymous function. For named function, we only have to write name of the function without '()'.
        //What to do when click detected.
        var buttonInnerHTML=this.innerHTML; //'console.log(this)' gives '<button class="w drum">w</button>' & so on. 'console.log(this.innerHTML)' gives 'w' & so on.
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

//Detecting Keyboard Press
document.addEventListener("keydown",function(event){ //"keydown" is used to detect a key-press. 'document' is used as we have to select whole web page to detect a key-press.
    makeSound(event.key); //'event' gives the event that is triggered by "keydown" (key-press). 'console.log(event)' gives 'KeyboardEvent {isTrusted: true, key: 'w', code: 'KeyW', location: 0, ctrlKey: false, …}' when 'w' key is pressed. 'key' is a property of 'event'.
    buttonAnimation(event.key); //'key' is a property of 'event'.
});

function makeSound(key){
    switch (key){
        case "w":
            var tom1=new Audio("sounds_Drum Kit/tom-1.mp3"); //'Audio' is a class in JS.
            tom1.play(); //'play()' ia a function of 'Audio'.
            break;
        case "a":
            var tom2=new Audio("sounds_Drum Kit/tom-2.mp3"); //'Audio' is a class in JS.
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("sounds_Drum Kit/tom-3.mp3"); //'Audio' is a class in JS.
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("sounds_Drum Kit/tom-4.mp3"); //'Audio' is a class in JS.
            tom4.play();
            break;
        case "j":
            var snare=new Audio("sounds_Drum Kit/snare.mp3"); //'Audio' is a class in JS.
            snare.play();
            break;
        case "k":
            var crash=new Audio("sounds_Drum Kit/crash.mp3"); //'Audio' is a class in JS.
            crash.play();
            break;
        case "l":
            var kick=new Audio("sounds_Drum Kit/kick-bass.mp3"); //'Audio' is a class in JS.
            kick.play();
            break;
        default: console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey){ //'currentKey' gives the key that is pressed (e.g. "w", "a" etc.).
    var activeButton=document.querySelector("."+currentKey); //'document.querySelector(".w")' gives '<button class="w drum">w</button>'.
    activeButton.classList.add("pressed"); //adding "pressed" class to 'activeButton'. 'classList' gives the classes applied to 'activeButton'.
    setTimeout(function(){
        activeButton.classList.remove("pressed"); //removing "pressed" class from 'activeButton' so that we get original 'activeButton' (before adding "pressed" class to it)
    },100); //After waiting for 100ms (0.1s), removing "pressed" class will be performed.
}