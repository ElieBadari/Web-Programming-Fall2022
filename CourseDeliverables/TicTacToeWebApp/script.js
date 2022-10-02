const tics = document.querySelectorAll(".tic"); //each img element in a list
const segments = document.querySelectorAll(".position"); //each img container in a list
const reset_btn = document.getElementById("reset-btn");//reset buttn element


let is_playing = 0; //determines who is playing, 0(false) = red, 1(true) = yellow

const game_state = [-1,-1,-1,-1,-1,-1,-1,-1,-1]; //determines whether a tic has been played or not (inorder to not overrite a play)


const turnHandler0 = (e) =>{ 

    if(!is_playing && game_state[0] == -1){ //if it is reds turn and the segment is empty

        is_playing = 0;
        tics[0].src = "Assets\\red.png";



    }else{
        is_playing = 1;
        tics[0].src = "Assets\\yellow.png";
    }




}






