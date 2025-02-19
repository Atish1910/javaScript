// factorials  Approch 2

function factorials(iValue){
    let iMult = 1;
    for(i= 1; i <= iValue; i++){
        iMult = i * iMult;

    }
    return iMult;
}

const iNo = 5;
iRet = factorials(iNo);
console.log(`factorials of ${iNo} is : ${iRet}`);