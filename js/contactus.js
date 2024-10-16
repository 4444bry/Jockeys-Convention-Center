function emailVal(emailsuspect){
    var charAt = emailsuspect.indexOf("@");
    var charDot = emailsuspect.indexOf(".");
    var charSpace = emailsuspect.indexOf(" ");

    if((charAt != -1) && (charAt != 0) && (charDot != -1) && (charAt != 0)
        && (charDot > charAt +1) && (emailsuspect.length > charDot + 1) && (charSpace == -1)){
            return true;
        }
    else{
        return false;
    }

}

function validation(){
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let number = document.getElementById("number");
    let checkboxPref = document.getElementById("checkbox-pref");

    if(name.value.length == 0){
        alert("Name has to be filled.");
    }
    else if(email.value.length == 0){
        alert("Email has to be filled.")
    }
    else if(!emailVal(email.value)){
        alert("Please input valid email address.")
    }
    else if(isNaN(number.value)){
        alert("Phone number has to be numbers.")
    }
    else if(number.value.length != 11 && number.value.length != 12 &&number.value.length != 11){
        alert("Phone number has to be between 11-13 digits.")
    }
    else if(checkboxPref.checked == false){
        alert("Please choose at least one.")
    }
}
