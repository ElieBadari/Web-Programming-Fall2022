window.onload = () =>{

    const usernameField = document.getElementById("user");
    const passwordField = document.getElementById("pass");
    const loginButton = document.getElementById("btn");

    const storage = window.localStorage;



    loginButton.addEventListener("click", () =>{


        const username = usernameField.value;
        const password = passwordField.value;


        const existingUser = JSON.parse(storage.getItem(username));

        if(existingUser == null){
            alert("Provided Username is incorrect or does not exist");
        }else if(existingUser["password"] == password){

            storage.setItem("currentUser",JSON.stringify(existingUser));//for existing user might be redundant well see
            alert("You have been succesfully logged in, play on!");
            location.assign("game.html");

        }

        





    });








}



