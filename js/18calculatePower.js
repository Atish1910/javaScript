// 15 take a base number & power calculte power 5^3 ? 625 (2 Approches)-> 32, 33, 34, 35
// With While Loop
//Approch 2/////////////////////////////////////////////////
let val1 = 7;
let val2 = 6;
let iResult = 1;

function calcPower(iBase, iPower){
    if(iBase < 0 || iPower < 0){
        iBase = -iBase;
        iPower = -iPower;
        console.log(`You have entered a negative values we converted into +ve `)
    }
    i = iPower;
    while(i > 0){
        iResult = iResult * iBase;
        i--;
    }
    console.log(iResult);
}
const iRet = calcPower(val1, val2);


