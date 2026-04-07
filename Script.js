function checkText(){
    let text = document.getElementById("message").value.toLowerCase();
    if(text.trim() === ""){
        document.getElementById("text").innerText = "Bro write something first 😅";
    }

    else if(text.trim() === "hi"){
        document.getElementById("text").innerText = "Hi! How you doing bro";
    }

    else if(text.trim() === "how are you"){
        document.getElementById("text").innerText = "I'm great bro";
    }

    else if(text.trim() === "bye"){
        document.getElementById("text").innerText = "bye! see you around";
    }

    else if(text.trim() === "hello"){
        document.getElementById("text").innerText = "Hello! Bro😃 wassup";
    }

    else if(text.trim() === "nothing"){
        document.getElementById("text").innerText = "Then type something dudu!😃";
    }

    else {
        document.getElementById("text").innerText = text;
    }

}