const tics = document.querySelectorAll(".tic"); //each img element in a list
const segments = document.querySelectorAll(".position"); //each img container in a list
const btn = document.getElementById("btn");// btn element


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

const turnHandler2 = (e) =>{ 

    tics[2].classList.remove("start");

   if(game_state[2] == -1){
       
       game_state[2] = 1;

       if(is_playing == 0){ 
           is_playing = 1;
           tics[2].src = "Assets\\red.png";
       }else{
           is_playing = 0;
           tics[2].src = "Assets\\yellow.png";
       }
       
   }
}

const turnHandler3 = (e) =>{ 

    tics[3].classList.remove("start");

   if(game_state[3] == -1){
       
       game_state[3] = 1;

       if(is_playing == 0){ 
           is_playing = 1;
           tics[3].src = "Assets\\red.png";
       }else{
           is_playing = 0;
           tics[3].src = "Assets\\yellow.png";
       }
       
   }
}

const turnHandler4 = (e) =>{ 

    tics[4].classList.remove("start");

   if(game_state[4] == -1){
       
       game_state[4] = 1;

       if(is_playing == 0){ 
           is_playing = 1;
           tics[4].src = "Assets\\red.png";
       }else{
           is_playing = 0;
           tics[4].src = "Assets\\yellow.png";
       }
       
   }
}
const turnHandler5 = (e) =>{ 

    tics[5].classList.remove("start");

   if(game_state[5] == -1){
       
       game_state[5] = 1;

       if(is_playing == 0){ 
           is_playing = 1;
           tics[5].src = "Assets\\red.png";
       }else{
           is_playing = 0;
           tics[5].src = "Assets\\yellow.png";
       }
       
   }
}

const turnHandler6 = (e) =>{ 

    tics[6].classList.remove("start");

   if(game_state[6] == -1){
       
       game_state[6] = 1;

       if(is_playing == 0){ 
           is_playing = 1;
           tics[6].src = "Assets\\red.png";
       }else{
           is_playing = 0;
           tics[6].src = "Assets\\yellow.png";
       }
       
   }
}
const turnHandler7 = (e) =>{ 

    tics[7].classList.remove("start");

   if(game_state[7] == -1){
       
       game_state[7] = 1;

       if(is_playing == 0){ 
           is_playing = 1;
           tics[7].src = "Assets\\red.png";
       }else{
           is_playing = 0;
           tics[7].src = "Assets\\yellow.png";
       }
       
   }
}
const turnHandler8 = (e) =>{ 

    tics[8].classList.remove("start");

   if(game_state[8] == -1){
       
       game_state[8] = 1;

       if(is_playing == 0){ 
           is_playing = 1;
           tics[8].src = "Assets\\red.png";
       }else{
           is_playing = 0;
           tics[8].src = "Assets\\yellow.png";
       }
       
   }
}

const starthandler = (e) => {
    
    tics.forEach(t => t.classList.add("start"));
    btn.innerText = "Reset"

}



btn.addEventListener("click",starthandler);

segments[0].addEventListener("click",turnHandler0);
segments[1].addEventListener("click",turnHandler1);
segments[2].addEventListener("click",turnHandler2);
segments[3].addEventListener("click",turnHandler3);
segments[4].addEventListener("click",turnHandler4);
segments[5].addEventListener("click",turnHandler5);
segments[6].addEventListener("click",turnHandler6);
segments[7].addEventListener("click",turnHandler7);
segments[8].addEventListener("click",turnHandler8);





