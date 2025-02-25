/*
    Input : 146

    Row : 4
    Col : 4

    Output : 
    *   *   *   #
    *   *   #   $ 
    *   #   $   $
    #   $   $   $
            
*/  

iRow = 6, iCol = 6;


Display(iRow, iCol);
function Display(iRow, iCol) {
    for(i = iRow; i >= 1; i--){
        for(j = 1; j <= iCol; j++){
            if(i == j){
                document.write("X\t");
            }
            else if(i >= j){
                document.write("Y\t");
            }
            else{
                document.write("Z\t");
            }
        }
        document.write("<br>");

    }
}