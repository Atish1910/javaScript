// num 1910 -> convert to Digits 
// 1
// 9
// 1
// 0

function displayDigits(iNo){
    iDigit = 1;
    while(iNo != 0){
        iDigit = iNo % 10;
        console.log(iDigit);
        iNo = iNo / 10 | 0; 
    }
}

displayDigits(1910);