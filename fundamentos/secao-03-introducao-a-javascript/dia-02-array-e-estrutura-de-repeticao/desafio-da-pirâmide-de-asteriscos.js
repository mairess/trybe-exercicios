let n = 5;
let square = '';

for (var column = 0; column < n; column += 1) {
    for (var line = 0; line < n; line += 1) {
        square += '*'
        console.log(square)   
    }
    break
}