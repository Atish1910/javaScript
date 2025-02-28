// count Blank Spaces

iStr = "atish Jka aL  UE fgC y G d S e rrK yu";
iCntBlank = 0;
iCntSmall = 0;
iCntCapital = 0;

function strBlank(iStr){
    i = 0;
    while(iStr[i] != undefined){
        i++;
        if(iStr[i] == " "){
            iCntBlank++
        }else if(iStr[i] < 'a' || iStr[i] > 'z'){
            iCntSmall++;
        }else{
            iCntCapital++;
        }
    }
    console.log(` ${iCntBlank} Blank Spaces in STring`)
    console.log(` ${iCntSmall} Small Letters in STring`)
    console.log(` ${iCntCapital} Capital Letters in STring`)
}

strBlank(iStr);