iRow = 5;
iCol = 5;

function Display(iRow, iCol){

    for(i = 1; i<= iRow; i++){
        for(j = 1; j <= iCol; j++){
            if(i == j || i > j){
                document.write("Y\t");
            }else{
                document.write("-\t");
            }
        }
        document.write("<br>");

    }
}

Display(iRow, iCol);