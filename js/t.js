// print char from a to k with char increment  =>102

// print A 5 times with for loop => 94
// ASCII Value A TO Z : 65 to 90
// ASCII Value a TO z : 97 to 112

let charFrequency = 8;

function DisplayChar(charCount){

    for(i = 0; i< charCount; i++){
        let char = String.fromCharCode(97 + i);
        console.log(char);
    }

}
DisplayChar(charFrequency);