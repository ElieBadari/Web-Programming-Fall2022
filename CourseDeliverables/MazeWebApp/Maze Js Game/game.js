
window.onload = () =>{

    const startButton = document.getElementById("start");
    const walls = document.getElementsByClassName("boundary");
    const boundary = document.getElementById("game");
    const endButton = document.getElementById("end");
    const status = document.getElementById("status");
    
    //global counters
    let streak = 0;
    let losses = 0;
    let wins = 0;

    
    
   

    const storage = window.localStorage;
    const currentUser = JSON.parse(storage.getItem("currentUser"));
    const prevScore = currentUser.score;
    
   



    //this makes walls red on redirection
    for(let i = 0; i < walls.length-1; i++){
        walls[i].style.background = "red";
    }

    
    
    //loads the walls with eventlistners 
    for(let i = 0; i< walls.length; i++){
        walls[i].addEventListener("mouseenter", () =>{

            for(let i = 0; i < walls.length-1; i++){

                 walls[i].style.background = "red";
                
                 
             }
             updateScore(-10);
             streak=0;
             losses++;
             console.log(losses);
             armWalls();
             
             
             
    
             
        });
    
    }
    //start loaded with eventlistner 
    startButton.addEventListener("mouseenter", () =>{


        for(let i = 0; i < walls.length-1; i++){
             walls[i].style.background = "#eeeeee";
         }

    });
        //turns box red 
        const armWalls = function(){

            boundary.addEventListener("mouseenter", () =>{
                for(let i = 0; i < walls.length-1; i++){
        
                    walls[i].style.background = "red";
                }
            
            });

        }
        //turns box white
        const releaseWalls = function(){
            
            boundary.addEventListener("mouseenter", () =>{
                for(let i = 0; i < walls.length-1; i++){
        
                    walls[i].style.background = "#eeeeee";
                }
            
            });

        }
        //updates score
        const updateScore = function(point){
            const updatee =JSON.parse(storage.getItem(currentUser.username));
            let new_score = currentUser.score;
           
            if(point == -99){
                currentUser.score = 0;
                storage.setItem("currentUser",JSON.stringify(currentUser));
            }else{
             new_score += point;
             currentUser.score = new_score;
             storage.setItem("currentUser",JSON.stringify(currentUser));
            }
        }
        //returns the last boundary (reset button)
        const getReset= function(){
            let count = 0;
            for(let i = 0; i < walls.length; i++){
                count = i;
            }
            return walls[count];
        }

       
  
    //loads end with event listner
    endButton.addEventListener("mouseenter", () =>{

        releaseWalls();
        updateScore(5);
        wins++;
        streak++; 


        
    });

    //creatingmakeshitresetbutton
   
    const reset = getReset();

    reset.innerHTML = "Reset";
    reset.style.background = "gold";
    updateScore(-99);
    reset.addEventListener("click", () =>{

        updateScore(-99)
        


    });
   
    //score
    console.log(prevScore);
    console.log(currentUser.score);
    console.log(streak);
    console.log(wins);
    console.log(losses);

    setInterval(() => {
        status.innerHTML = "Welcome Back " + currentUser["username"]
        +"<br>"
        +"Your Previous Recorded Score: "+prevScore
        +"<br>"
        +"Current Score: "+ currentUser.score
        +"<br>"
        +"Current Win Streak: "+streak+"<br>"
        +"Total Wins: "+wins+ "<br>"
        +"Total Losses: "+losses;

        if(currentUser.score > prevScore){

            storage.setItem(currentUser.username,JSON.stringify(currentUser));

        }

    }, 500);
   
    

}