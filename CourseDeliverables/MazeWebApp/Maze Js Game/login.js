window.onload = () =>{

    const usernameField = document.getElementById("user");
    const passwordField = document.getElementById("pass");
    const loginButton = document.getElementById("btn");

    const storage = window.localStorage;



    loginButton.addEventListener("click", () =>{


        const username = usernameField.value;
        const password = passwordField.value;


        const user = JSON.parse(storage.getItem(username));
        





    });








}



