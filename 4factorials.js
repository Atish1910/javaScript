// factorials 

function factorials(){
    const iNo = 8;
    let iMult = 1;
    for(i = 1; i<= iNo; i++ ){
        iMult = iMult * i;
    }
    console.log(`factorails of ${iNo} is : ${iMult}`)
}
factorials()