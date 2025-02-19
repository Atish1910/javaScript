// 7 Write a program which checks whether number is divisible by 3 and 5

iNo = 50;

function isDivisble(num){
    if(num % 3 == 0 && num % 5 == 0){
        console.log("number is divisble by 3 & 5");
    }
    else{
        console.log("number not divisble by 3 & 5");

    }
}
isDivisble(iNo);