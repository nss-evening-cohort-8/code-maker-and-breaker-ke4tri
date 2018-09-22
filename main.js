
const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

const arrayString = (arrayHere) => {
    let stringEncoded = arrayHere.toString();
    printToDom(stringEncoded, 'printEncode');
} ;
// const decodeString = (arrayHere2) => {
//     let decodeString = newArrayToString.fromCharCode();
//     printToDom(decodeString, 'printDecode');
// };

const decodeThis = () => {
    let stringInput = document.getElementById("inputValue2").value;
    let newStringInput = stringInput.split(",");
   // let newArrayToString = newStringInput.toString();
    let newArrayToString = [];
    for(i=0;i<newStringInput;i++){
        newArrayToString.push(newStringInput[i]);
    };
    decodeString(newArrayToString);
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