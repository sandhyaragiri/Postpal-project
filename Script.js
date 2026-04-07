function checkText(){
    let text = document.getElementById("message").value;
    if(text.trim() === ""){
        document.getElementById("text").innerText = "Bro write something first 😅";
    }

    else {
        document.getElementById("text").innerText = text;
    }

}