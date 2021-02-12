function validate()
{
   var username=document.getElementById("username").value;
   var username=document.getElementById("password").value;
    if(username=="admin" && password=="1234")
   {
        alert("login succesfully");
        return false;
    }
    else{
       alert("login failed");
    } 

  /*  {
        var text = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        error_message.style.padding = "10px";

        if(text.length <3){
            text = "Please Enter Valid Name";
            error_message.innerHTML = text;
            return false;
        }

        if(password.length <6){
             text = "Please Enter Valid Password";
             error_message.innerHTML = text;
            return false;
        }
        alert("You're loged in!")
        return true;
    }*/
