// take a string and find Last Occurance of its Specific Letter (a) from string ztishVinayakKamble : 12th index (a) => 174

const ERR_NOTFOUND = -1;

function LastOccurance(str, cValue) {
    let iPos = ERR_NOTFOUND;
    let iCnt = 0; // To match 1-based indexing like C

    for (let i = 0; str[i] !== undefined; i++) {
        if (str[i] === cValue) {
            iPos = iCnt;
        }
        iCnt++;
    }
    return iPos;
}

// Hardcoded input string
let Arr = "hello world";  
let ch = 'o';

let iRet = LastOccurance(Arr, ch);

if (iRet === ERR_NOTFOUND) {
    console.log("There is no such character");
} else {
    console.log("Last occurrence of that character is at:", iRet);
}
