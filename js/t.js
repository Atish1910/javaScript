
// print Number 1 2 3  (4Rows , 5Col) => 114
iRow = 5;
iCol = 4;

function Display(iRow, iCol){
    for(i = 1; i <= iRow; i++){
        row = "";        
        for(j = 1; j <= iCol; j++){
            row = `${row} ${j} \t`;
        }
        console.log(row);
    }
}

Display(iRow, iCol);