//replace space with _;
iStr = "Atish Vinayak Kamble I wNt To Become Software Developer";

function strEdit(iStr){
    i = 0;
    iCnt = 0;
    iStrNew = "";
    while(iStr[i] != undefined){
        if(iStr[i] == " "){
            iStrNew = iStrNew + "_"; 
            iCnt++
        }
        else{
            iStrNew = iStrNew + iStr[i];
            i++;
        }
    }
    console.log(iStrNew);
}
strEdit(iStr);