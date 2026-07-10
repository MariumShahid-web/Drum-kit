// // function handleClick(){

// // }
// // document.querySelector("button").addEventListner("click",function(){
// //     alert("I got clicked");
// // });

// let numberOfDrumButtons = document.querySelectorAll(".drum").length;
// for(let i=0; i< numberOfDrumButtons; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//         let buttonInnerHTML = this.innerHTML;
//         if(buttonInnerHTML==="w"){
//              let audio = new Audio("sounds/tom-1.mp3");
//             audio.play();
            
//         }else if(buttonInnerHTML==="a"){
//              let audio = new Audio("sounds/tom-2.mp3");
//             audio.play();
            
//         }else if(buttonInnerHTML==="s"){
//              let audio = new Audio("sounds/tom-3.mp3");
//             audio.play();
            
//         }else if(buttonInnerHTML==="d"){
//              let audio = new Audio("sounds/tom-4.mp3");
//             audio.play();
            
//         }else if(buttonInnerHTML==="j"){
//              let audio = new Audio("sounds/crash.mp3");
//             audio.play();
            
//         }else if(buttonInnerHTML==="k"){
//              let audio = new Audio("sounds/kick-bass.mp3");
//             audio.play();
            
//         }else if(buttonInnerHTML==="l"){
//              let audio = new Audio("sounds/snare.mp3");
//             audio.play();
            
//         }
   
//         //   let buttonInnerHTML = this.innerHTML;

//         // let sound;

//         // switch (buttonInnerHTML) {

//         //     case "w":
//         //         sound = new Audio("sounds/tom1.mp3");
//         //         break;

//         //     case "a":
//         //         sound = new Audio("sounds/tom2.mp3");
//         //         break;

//         //     case "s":
//         //         sound = new Audio("sounds/tom3.mp3");
//         //         break;

//         //     case "d":
//         //         sound = new Audio("sounds/tom4.mp3");
//         //         break;

//         //     case "j":
//         //         sound = new Audio("sounds/snare.mp3");
//         //         break;

//         //     case "k":
//         //         sound = new Audio("sounds/crash.mp3");
//         //         break;

//         //     case "l":
//         //         sound = new Audio("sounds/kick-bass.mp3");
//         //         break;

//         //     default:
//         //         console.log(buttonInnerHTML);
//         // }
//         // sound.play();
//     })
// }
// //Detecting Keyboard press
// document.addEventListener("keydown",function(event){
// makeSound(event.key);
// })

// function makeSound(key){
//      switch (buttonInnerHTML) {

//             case "w":
//                 sound = new Audio("sounds/tom1.mp3");
//                 break;

//             case "a":
//                 sound = new Audio("sounds/tom2.mp3");
//                 break;

//             case "s":
//                 sound = new Audio("sounds/tom3.mp3");
//                 break;

//             case "d":
//                 sound = new Audio("sounds/tom4.mp3");
//                 break;

//             case "j":
//                 sound = new Audio("sounds/snare.mp3");
//                 break;

//             case "k":
//                 sound = new Audio("sounds/crash.mp3");
//                 break;

//             case "l":
//                 sound = new Audio("sounds/kick-bass.mp3");
//                 break;

//             default:
//                 console.log(buttonInnerHTML);
//         }
//         sound.play();
// }
// //Adding Animation
// function buttonAnimation(currentKey){
//     let activeButton = document.querySelector("."+currentKey)
//     activeButton.classList.add("pressed");
// }

// function handleClick(){
//     alert("I got clicked!");
// }

// document.querySelector("button").addEventListener("click",function(){
//     alert("I got clicked");
// });

//Detecting Button Press
let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(let i = 0; i < numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       let buttonInnerHTML = this.innerHTML;
       buttonAnimation(buttonInnerHTML);

    })
}
//Detecting keyboard press
document.addEventListener("keydown",function(event){
   makeSound(event.key);
   buttonAnimation(event.key);
})
function makeSound(key){
          switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();            
            break;
         case "a":
            let tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();            
            break;
         case "s":
            let tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();            
            break;
         case "d":
            let tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();            
            break;
         case "j":
            let crash = new Audio("sounds/crash.mp3")
            crash.play();            
            break;
         case "k":
            let kick = new Audio("sounds/kick-bass.mp3")
            kick.play();            
            break;
         case "l":
            let snare = new Audio("sounds/snare.mp3")
            snare.play();            
            break;
       
        default:
            break;
       }
}

//  let sound = new Audio("sounds/snare.mp3");
//         sound.play();

//Adding Animation
//Adding Animation
function buttonAnimation(currentKey){
   let activeButton = document.querySelector("."+currentKey);
   activeButton.classList.add("pressed");
    let removeClass = function(){
      activeButton.classList.remove("pressed");
   }
   setTimeout(removeClass,300);
}
// setTimeout(function, time);
