function interview(record){
    if(record == {age : 28}){
        console.log("You are an adult");
    }else if(record === { age : 28}){
        console.log("You Are Still Adult");
    }else{
        console.log("No FRecord");
    }
}

interview({age : 28});