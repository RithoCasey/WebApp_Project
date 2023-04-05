function validateSignup(){
    let x = document.forms["signup-form"]["username"].value;
    if (x == ""){
        alert("Username must be filled");
        return false
    }

    let password = document.forms["signup-form"]["password"].value;
    let confirm_password = document.forms["signup-form"]["confirm-password"].value;

    if (password.length < 8){
        alert("Password must be 8 characters and above");
        return false;
    }else if(confirm_password !== password){
        alert("Your passwords do not much")
        return false;
    }
}

function validateLogin(){
    let x = document.forms["login-form"]["username"].value;
    let password = document.forms["login-form"]["password"].value;
    if (x == "" || password == "" ){
        alert("username or password cannot be empty");
        return false;
    }else if (password.length < 8){
        alert("Your password maybe too short");
        return false;
    }
}

// logged_In = true;
// username = document.forms["login-form"]["username"].value;

// if(logged_In){
//     login_name = document.querySelector('.login-text');
//     login_name.text = "Welcome" + username;
// }