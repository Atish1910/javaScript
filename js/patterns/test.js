iStr = "Geeks";

function strReverse(iStr) {
    i = iStr.length-1;
    iDigit = "";
    while (i >= 0 ) {
        iDigit = iDigit + iStr[i];
        i--;
    }
    console.log(iDigit);
}

strReverse(iStr);