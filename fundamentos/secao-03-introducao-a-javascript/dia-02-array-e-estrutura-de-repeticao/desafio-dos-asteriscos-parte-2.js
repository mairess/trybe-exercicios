let n = 5;
let symbol = '*';
let square = '';
let inputPosition = n -1;

for (var column = 0; column < n; column += 1) {
    for (var line = 0; line < n; line += 1) {
        if (line < inputPosition) {
            square = square + ' ';
        }  else {
            square = square + symbol;
        }
    }
        console.log(square);
        square = '';
        inputPosition -= 1; 
};