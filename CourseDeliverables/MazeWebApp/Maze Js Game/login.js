window.onload = () =>{

    const usernameField = document.getElementById("user");
    const passwordField = document.getElementById("pass");
    const loginButton = document.getElementById("btn");

    const storage = window.localStorage;



    loginButton.addEventListener("click", () =>{


        const username = usernameField.value;
        const password = passwordField.value;

        const user = JSON.parse(storage.getItem(username));

        if(user == null){
            //user doesnt exist
            alert("User does not exist");

        }else if (user["password"] == password){
            //login
            storage.setItem("currentUser",username);
            location.assign("game.html")
        }else{
            //wrong password
            alert("Log in credentials are incorrect");
        }





    });








}



