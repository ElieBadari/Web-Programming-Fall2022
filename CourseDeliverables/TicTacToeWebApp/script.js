const tics = document.querySelectorAll(".tic"); //each img element in a list
const segments = document.querySelectorAll(".position"); //each img container in a list
const reset_btn = document.getElementById("reset-btn");//reset buttn element


let is_playing = 0; //determines who is playing, 0(false) = red, 1(true) = yellow

const game_state = [-1,-1,-1,-1,-1,-1,-1,-1,-1]; //determines whether a tic has been played or not (inorder to not overrite a play)









