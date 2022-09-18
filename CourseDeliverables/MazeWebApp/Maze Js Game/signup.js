window.onload = () =>{

    const usernameField = document.getElementById("user");
    const passwordField = document.getElementById("pass");
    const loginButton = document.getElementById("btn");

    const storage = window.localStorage;

    loginButton.addEventListener("click", () => {

        const username = usernameField.value;
        const password = passwordField.value;
        

        const newUser = {
            "username": username,
            "password": password,
            "score": null
        }

        const user = JSON.parse(storage.getItem(newUser));

        if(user == null){
            //create user
            storage.setItem(username, JSON.stringify(newUser));
            alert("User Created, You will be redirected to Log In");
            location.assign("index.html");
        }else{
            alert("User already exists!");
        }
        
        

    });











}
