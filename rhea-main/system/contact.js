function submit(){
    let inputfirstName = document.getElementById("firstname").value;
    let inputlastName = document.getElementById("lastname").value;
    let inputEmail = document.getElementById("email").value;
    let inputReason = document.getElementById("contact-reason").value;

    if(!inputfirstName || !inputlastName || !inputEmail || !inputReason){
        alert("Invalid Credentials");
        document.getElementById("firstname").value = "";
        document.getElementById("lastname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("contact-reason").value = "";
    }
    else if(inputfirstName && inputlastName && inputEmail && inputReason){
        alert("Submit Successfully");
        document.getElementById("firstname").value = "";
        document.getElementById("lastname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("contact-reason").value = "";
    }
    else{
        alert("Error");
        document.getElementById("firstname").value = "";
        document.getElementById("lastname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("contact-reason").value = "";
    }
}