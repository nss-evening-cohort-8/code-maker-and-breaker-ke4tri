

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};


//let word = 'Hello!';
// let encodeWord = [];
// for(i=0;i<word.length;i++){
//     encodeWord.push(word.charCodeAt([i]));
// };
const arrayString = (arrayHere) => {
    let stringEncoded = arrayHere.toString();
    printToDom(stringEncoded, 'printEncode');
} ;

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