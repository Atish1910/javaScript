// factorials  Approch 2
// Factorial = 5 * 4 * 3 * 2 * 1   = 120


/////////////////////////////////////////////////////////////////////////
console.log("Same operation witn while loop reverse");
iNum = 7;
iMulti = 1;
function displayF(val){
    i = val;
    while(i > 0){
        iMulti = iMulti * i;
        i--
    }
    return iMulti;
}
iReturn = displayF(iNum); 
console.log(`factorials of ${iNum} is : ${iReturn} with while Loop`);