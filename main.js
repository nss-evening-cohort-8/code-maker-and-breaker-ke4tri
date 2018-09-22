
const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

const arrayString = (arrayHere) => {
    let stringEncoded = arrayHere.toString();
    printToDom(stringEncoded, 'printEncode');
} ;


const decodeThis = () => {
    let stringInput = document.getElementById("inputValue2").value;
    let newStringInput = stringInput.split(",");
    let decodeString = [];
     for(i=0;i<newStringInput.length;i++){
         decodeString.push(String.fromCharCode(newStringInput[i]));
    };
   let goToDomString = decodeString.join('')
   printToDom(goToDomString, 'printDecode')
 }; 

const encodeThis = () => {
    let encodeWord = [];
    let word = document.getElementById("inputValue").value;
    for(i=0;i<word.length;i++){
        encodeWord.push(word.charCodeAt([i]));
    };
    arrayString(encodeWord );
};

document.getElementById("button-addon1").addEventListener("click", function()
{encodeThis()});

document.getElementById("button-addon2").addEventListener("click", function()
{decodeThis()});