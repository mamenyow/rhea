let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup");
}

function submit(){
    alert("Class Confirmed");
    popup.classList.remove("open-popup");
}