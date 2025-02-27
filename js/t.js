// take a string and count its smallcase letter from string AtiSH : 2 small letter => 162 

iStr = "AtiShKaMbLE";

function strlen(iStr){
    i = 0;
    iSmall = 0;
    iCap = 0;
    while(iStr[i] != undefined){
        console.log(iStr[i]);
        i++;
        if( iStr[i] > "A" && iStr[i] < "Z"){
            iCap++;
        }else if(iStr[i] > "a" && iStr[i] < "z"){
            iSmall++;
        }
    }
    console.log(`${iSmall} Small Letter & ${iCap} Capital Letters`);
}
strlen(iStr);