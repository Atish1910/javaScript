// what will be the op of below function

function test(){
    console.log(test.abc);
}

test();

test.abc = 400;
test.abc = 600;
test();


// op 
// undefined
// 600