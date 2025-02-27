// take array are return its Even Number : 76 // 
// return numbers array addition [3,5,71,8] => 87 //
// take array are return its addition : 83
// take array are return its Odd Number : 83 //
// take array are return its Maximum Number : 83
// take array are return its Smallest Number : 84
// take array are return its Smallest & highest Number : 86
// Take array and search digit is presnet in array or not  : 88
// Take array and search digit & its occurance is presnet in array or not  : 90
iArr = [10,12,7,31,123,51];

function arrDisplay(iArr){
    iMax = iArr[0];
    for(i = 0; i < iArr.length; i++){
        if(iMax > iArr[i]){
            iMax = iArr[i] ;
        }
    }
    console.log("max Num is : "+iMax);
}

arrDisplay(iArr);