let A = [[1, 3], [1, 2]];
let B = [[2, 2], [0, 1]];
let C = [];

console.log("Matriz A:");
for (let i = 0; i < A.length; i++) {
    console.log(A[i]);
}

console.log("Matriz B:");
for (let i = 0; i < B.length; i++) {
    console.log(B[i]);
}

if (A[0].length !== B.length) {
    console.log("Não é possível calcular");
} else {
    for (let i = 0; i < A.length; i++) {
        let row = [];
        for (let j = 0; j < B[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < A[0].length; k++) {
                sum += A[i][k] * B[k][j];
            }
            row.push(sum);
        }
        C.push(row);
    }
    console.log("Matriz C:");
    for (let i = 0; i < C.length; i++) {
        console.log(C[i]);
    }
}