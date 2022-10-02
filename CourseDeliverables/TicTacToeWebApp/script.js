const tics = document.querySelectorAll(".tic"); //each img element in a list
const segments = document.querySelectorAll(".position"); //each img container in a list
const reset_btn = document.getElementById("reset-btn");//reset buttn element


let is_playing = 0; //determines who is playing, 0 = red, 1 = yellow

let game_state = [-1,-1,-1,-1,-1,-1,-1,-1,-1]; //determines whether a tic has been played or not (inorder to not overrite a play)




const turnHandler0 = (e) =>{ 

    tics[0].classList.remove("start");

    if(game_state[0] == -1){

        game_state[0] = 1;

        if(is_playing == 0){ 
            is_playing = 1;
            tics[0].src = "Assets\\red.png";
        }else{
            is_playing = 0;
            tics[0].src = "Assets\\yellow.png";
        }
        
    }
}

const turnHandler1 = (e) =>{ 

     tics[1].classList.remove("start");

    if(game_state[1] == -1){
        
        game_state[1] = 1;

        if(is_playing == 0){ 
            is_playing = 1;
            tics[1].src = "Assets\\red.png";
        }else{
            is_playing = 0;
            tics[1].src = "Assets\\yellow.png";
        }
        
    }
}


tics.forEach(t => t.classList.add("start"));

segments[0].addEventListener("click",turnHandler0);

segments[1].addEventListener("click",turnHandler1);





