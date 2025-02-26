// check it is digit or not => 156
iChar = 6;

function dsiplayASCI(iChar){
    asciNum = iChar.charCodeAt(0);

    if(asciNum >= 0 && asciNum <= 9){
        return true;
    }
    else{
        return false;
    }
}
iRet = dsiplayASCI(iChar);

if(iRet){
    console.log("Its Number");
}
else{
    console.log("No Its Not Number");
}

