// 15 take a base number & power calculte power 5^3 ? 625 (2 Approches)-> 32, 33, 34, 35

iVal1 = 9

function calcPower(iBase){
    iMult = 1;
    for(i = 1; i<= iBase; i++){
        
        iMult = iMult *i;
        console.log(iMult);
    }
}
calcPower(iVal1);
