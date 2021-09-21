const input = document.querySelector("#input-text");
const output = document.querySelector("#output-text");
const translateBtn = document.querySelector("#translate-btn");
let errorText = document.querySelector("#error-text");

var serverUrl = "https://api.funtranslations.com/translate/ferb-latin.json";


const handleError = (error) => {
    errorText.innerText = "We are sorry. You can only use this for 5 times per hour. Please try again later.";
}

translateBtn.addEventListener("click", () => {
  let textToTranslate = input.value ;
  if (textToTranslate === ""){
      errorText.innerText = "Please Enter Some Text";
  } 
  else{
      errorText.innerText = "";
      fetch( serverUrl + "?text=" + textToTranslate)
      .then( response => response.json())
      .then( json => output.value = json.contents.translated)
      .catch(handleError);
  }
});
