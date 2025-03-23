const inputIdea = document.getElementById("inputIdea");
const generateBtn = document.getElementById("generateBtn");
const result = document.getElementById("result");
const error = document.getElementById("error");

let inputText = document.getElementById("inputIdea").value;


generateBtn.addEventListener("click", () => {
    if (inputText === ""){
        error.textContent = "Please enter a valid idea.";
    }
    else{

        console.log("inputText");
    }
});