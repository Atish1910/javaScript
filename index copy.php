<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>

<style>
    
</style>
</head>
<body>

    
    <div class="container mt-5 pt-5">
        <div class="">Pattern Printing </div>
        <div class="row">
            <div class="col-md-4 border text-center">
                <h3 class="">Pattern1</h3>
                <script>
                    iRow = 3
                    iCol = 5;

                    function Display(iValue1, iValue2){
                        for(i = 1; i<= iValue1; i++){
                            
                            for(j = 1; j <= iValue2; j++){
                                
                                document.write(`${j}\t`);
                            }
                            document.write("<br>");
                        }
                    }
                    Display(iRow, iCol);
                </script>
            </div>
            <div class="col-lg-4">
                <h3 class="">Pattern 2</h3>
            <!-- print *  (4Rows , 5Col) => 113 -->
            
            <script>
                 iRow = 3;
                 iCol = 4;
                 
                 function Display2(iRow, iCol){
                    for(i = 1; i<= iRow; i++){
                        for(j = 1; j <= iCol; j++){
                            document.write(`* \t`);
                        }
                        document.write(`<br>`);
                    }
                 }
                 Display2(iRow, iCol);

             </script>
            </div>
        </div>
    </div>
    

</body>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>
</html>