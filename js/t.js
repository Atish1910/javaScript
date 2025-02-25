function Display(iRow, iCol) {
    for (let i = 1; i <= iRow; i++) {
        let row = ""; // Store row pattern
        for (let j = 1; j <= iCol; j++) {
            if (i == 1 || i == iRow || j == 1 || j == iCol) {
                row += "*\t"; // Border stars
            } else {
                row += " \t"; // Spaces for hollow part
            }
        }
        console.log(row); // Print each row
    }
}

// Hardcoded values
let iRow = 6, iCol = 6;
Display(iRow, iCol);
