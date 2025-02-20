// : Take a number (12345) and returns its digits ->1 2 3 4 5 = 47

iValue = 12345;

function displayDigits(iNo){
    
    iDigit = 0;
    while(iNo != 0){
        iDigit = iNo % 10;
        console.log(iDigit);
        iNo = iNo / 10;
    }
}
displayDigits(iValue);