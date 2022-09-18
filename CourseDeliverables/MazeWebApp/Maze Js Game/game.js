window.onload = () =>{

    const startButton = document.getElementById("start");
    const walls = document.getElementsByClassName("boundary");

    for(let i = 0; i < walls.length; i++){
       console.log(walls[i]);
        walls[i].style.background = "red";
    }

    startButton.addEventListener("mouseenter", () =>{


        for(let i = 0; i < walls.length; i++){
            console.log(walls[i]);
             walls[i].style.background = "#eeeeee";
         }

    });

    for(let i = 0; i< walls.length; i++){
        walls[i].addEventListener("mouseenter", () =>{

            for(let i = 0; i < walls.length; i++){
                console.log(walls[i]);
                 walls[i].style.background = "red";
             }
    
    
        });
    

    }
    




}