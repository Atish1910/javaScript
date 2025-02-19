// find perfect numbers  28 

let iNo = 496;
iSum = 0;
function sumFactors(iValue){
    for(i = 0; i < iNo; i++){
        if([iValue % i] == 0){
            iSum = iSum + i;
        }
    }
    console.log(iSum);
}
sumFactors(iNo);

function isPerfect(iSum){
    return iSum == iNo;
}
isPerfect(iSum);


const perfect = isPerfect(iSum);

if(perfect){
    console.log(`  ${iNo} is perfect Number`)
}
else{
    console.log(`${iNo} is Not perfect Number`)
}
