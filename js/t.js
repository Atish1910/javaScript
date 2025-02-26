// check it is digit or not => 156 (48 to 57)

iNo = "5";

function Display(iNo){
    asciNum = iNo.charCodeAt(0);
    if(asciNum >= 48 && asciNum <= 57){
        return true;
    }
    else{
        return false;
    }
}

iRet = Display(iNo);
if(iRet){
    console.log("Its Number");
}
else{
    console.log("Its Not Number");
}