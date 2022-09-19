window.onload = () =>{

    const startButton = document.getElementById("start");
    const walls = document.getElementsByClassName("boundary");
    const boundary = document.getElementById("game");
    const endButton = document.getElementById("end");
 



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

       
  
    //loads end with event listner
    endButton.addEventListener("mouseenter", () =>{

        releaseWalls();
        


        
    })




}