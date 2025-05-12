iRow = 6;
iCol = 6;
function Display(iRow, iCol){
    i = 0;
    j = 0;
    // 6 > 1
    for(i = iRow; i >= 1; i--){
        for(j = 1; j < iCol; j++){
            if(i > j){
                document.writeln("# \t");
            }else{
                document.writeln("- \t");
            }
        }
        document.writeln("<br>"); 
    }
}
Display(iRow, iCol);