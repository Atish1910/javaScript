// print * in 1st row # in second row (Approch 2)  => 120
// # # # #
// * * * *
// # # # #
// * * * *
// # # # #
// * * * *
sRow = 6;
sCol = 5;

function Display(sRow, sCol){
    for(i = 1; i <= sRow; i++){
        for(j = 1; j<sCol; j++){
                document.write(i % 2 == 0 ? "* \t" : "# \t");                
            }
            document.write("<br>");
    }
}
Display(sRow, sCol);
