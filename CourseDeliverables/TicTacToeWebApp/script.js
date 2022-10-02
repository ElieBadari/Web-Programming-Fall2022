const tics = document.querySelectorAll(".tic"); //each img element in a list
const segments = document.querySelectorAll(".position"); //each img container in a list
const btn = document.getElementById("btn");// btn element
const winning_status = document.getElementById("status"); //status h2 element

let move_counter = 0;//counts the moves to check if draw
let is_playing = 0; //determines who is playing, 0 = red, 1 = yellow
let game_state = [-1,-1,-1,-1,-1,-1,-1,-1,-1]; //determines whether a tic has been played or not (inorder to not overrite a play)
let game_active = 0;//0 = active 1 = inactive
let winning_states = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]]; //represents the winning states of tictactoe


const turnHandler0 = (e) =>{ 
    
    if(game_state[0] == -1 && game_active == 0){
        move_counter++;
        tics[0].classList.remove("start");
        game_state[0] = is_playing;
        if(is_playing == 0){ 
            tics[0].src = "Assets\\red.png";
            is_playing = 1;
        }else if(is_playing == 1){
            tics[0].src = "Assets\\yellow.png";
            is_playing = 0;
        }
        winHandler();
    }
    
};
const turnHandler1 = (e) =>{ 
     
    if(game_state[1] == -1 && game_active == 0){
        move_counter++;
        game_state[1] = is_playing;
        tics[1].classList.remove("start");
        if(is_playing == 0){ 
            tics[1].src = "Assets\\red.png";
            is_playing = 1;
        }else if(is_playing == 1){
            tics[1].src = "Assets\\yellow.png";
            is_playing = 0;
        }
        winHandler();      
    }
};
const turnHandler2 = (e) =>{ 
    
    if(game_state[2] == -1 && game_active == 0){
        move_counter++;
        tics[2].classList.remove("start");
        game_state[2] = is_playing;
        if(is_playing == 0){ 
            tics[2].src = "Assets\\red.png";
            is_playing = 1;
        }else if(is_playing == 1){
            tics[2].src = "Assets\\yellow.png";
            is_playing = 0;
       }
       winHandler();
   }
};
const turnHandler3 = (e) =>{ 
    
    if(game_state[3] == -1 && game_active == 0){  
        move_counter++;
        game_state[3] = is_playing;
        tics[3].classList.remove("start");
        if(is_playing == 0){ 
            tics[3].src = "Assets\\red.png";
            is_playing = 1;
        }else if(is_playing == 1){
            tics[3].src = "Assets\\yellow.png";
            is_playing = 0;
        }
        winHandler();
   }
};
const turnHandler4 = (e) =>{ 
    
    if(game_state[4] == -1 && game_active == 0){  
        move_counter++;
        game_state[4] = is_playing;
        tics[4].classList.remove("start");
        if(is_playing == 0){ 
           tics[4].src = "Assets\\red.png";
           is_playing = 1;
        }else if(is_playing == 1){
           tics[4].src = "Assets\\yellow.png";
           is_playing = 0;
        }
        winHandler();
   }
};
const turnHandler5 = (e) =>{ 
    
    if(game_state[5] == -1 && game_active == 0){
        move_counter++;
        tics[5].classList.remove("start");
        game_state[5] = is_playing;
        if(is_playing == 0){
           tics[5].src = "Assets\\red.png";
           is_playing = 1;
       }else if(is_playing == 1){
           tics[5].src = "Assets\\yellow.png";
           is_playing = 0;
       }
        winHandler();
   }
};
const turnHandler6 = (e) =>{ 
    
    if(game_state[6] == -1 && game_active == 0){
        move_counter++;
        tics[6].classList.remove("start");
        game_state[6] = is_playing;
        if(is_playing == 0){ 
            tics[6].src = "Assets\\red.png";  
            is_playing = 1;
       }else if(is_playing == 1){
            tics[6].src = "Assets\\yellow.png";
            is_playing = 0;
       }
        winHandler();
   }
};
const turnHandler7 = (e) =>{ 
    
    if(game_state[7] == -1 && game_active == 0){
        move_counter++;
        tics[7].classList.remove("start");
        game_state[7] = is_playing;
        if(is_playing == 0){ 
            tics[7].src = "Assets\\red.png"; 
            is_playing = 1;
        }else if(is_playing == 1){
            tics[7].src = "Assets\\yellow.png";
            is_playing = 0;
        }
        winHandler();
    }
};
const turnHandler8 = (e) =>{ 
    
    if(game_state[8] == -1 && game_active == 0){
        move_counter++;
        tics[8].classList.remove("start");
        game_state[8] = is_playing;
        if(is_playing == 0){ 
            tics[8].src = "Assets\\red.png";
            is_playing = 1;
        }else if(is_playing == 1){
            tics[8].src = "Assets\\yellow.png";
            is_playing = 0;
        }
        winHandler();
    }
};
const starthandler = (e) => {
    move_counter =0;
    game_active = 0; 
    winning_status.classList.add("start");
    tics.forEach(t => t.classList.add("start"));
    is_playing = 0; //by default red starts
    btn.innerText = "Reset"
    for(let i = 0; i < game_state.length; i++){
        game_state[i] = -1;
    }
};
const winHandler = (e) => {
    for(let i of winning_states){
        if(game_state[i[0]] == game_state[i[1]] && game_state[i[1]] == game_state[i[2]] && game_state[i[0]] != -1){
            game_active = 1;
            winning_status.classList.remove("start");   
            if(game_state[i[0]] == 1){
                winning_status.innerText = "Yellow has won!";  
            }else if(game_state[i[0]] == 0){       
                winning_status.innerText = "Red has won!";
            }
        }
    }
};


winning_status.classList.add("start");

segments[0].addEventListener("click",turnHandler0);
segments[1].addEventListener("click",turnHandler1);
segments[2].addEventListener("click",turnHandler2);
segments[3].addEventListener("click",turnHandler3);
segments[4].addEventListener("click",turnHandler4);
segments[5].addEventListener("click",turnHandler5);
segments[6].addEventListener("click",turnHandler6);
segments[7].addEventListener("click",turnHandler7);
segments[8].addEventListener("click",turnHandler8);

btn.addEventListener("click",starthandler);









