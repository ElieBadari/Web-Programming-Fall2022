window.onload = () =>{

    const startButton = document.getElementById("start");
    const walls = document.getElementsByClassName("boundary");
    const boundary = document.getElementById("game");
    const endButton = document.getElementById("end");
    
   
    
    
    console.log(walls);
    console.log(walls[5]);

    const storage = window.localStorage;
    const currentUser = JSON.parse(storage.getItem("currentUser"));

    

    //this makes walls red on redirection
    for(let i = 0; i < walls.length-1; i++){
        walls[i].style.background = "red";
    }

    
    
    //loads the walls with eventlistners 
    for(let i = 0; i< walls.length; i++){
        walls[i].addEventListener("mouseenter", () =>{

            for(let i = 0; i < walls.length-1; i++){

                 walls[i].style.background = "red";
                 updateScore(-10);
             }

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

            boundary.addEventListener("mouseleave", () =>{
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
                updatee.score = 0;
                storage.setItem(currentUser.username,JSON.stringify(updatee));
            }else{
             new_score += point;
             updatee.score = new_score;
             storage.setItem(currentUser.username,JSON.stringify(updatee));
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


        
    });

    //creatingmakeshitresetbutton
   
    const reset = getReset();

    reset.innerHTML = "Reset";
    reset.style.background = "gold";
    reset.addEventListener("click", () =>{

        updateScore(-99)


    });
   
   



}