var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTransalationURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    document.querySelector(".error").innerText = "Limit exceeded try again later";
    // alert("error occured", error)

}
function clickHandler(){
    var inputText = txtInput.value;

    fetch(getTransalationURL(inputText))
        .then(response => response.json())
        .then(json => {
            document.querySelector(".error").innerText = "";
            var transalatedText = json.contents.translated;
            outputDiv.innerText = transalatedText;
        })
        .catch(errorHandler)
};

 
btnTranslate.addEventListener("click", clickHandler);

