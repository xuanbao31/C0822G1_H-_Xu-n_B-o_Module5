let num: number = 9;

let sum: number = 0;

function fibo(num: number): number {
    if (num <= 1) {
        return num;
    }
    return fibo(num - 1) + fibo(num - 2);
}


document.write("Fibonacci: ");
for (let i = 0; i < num; i++) {
    document.write(String(fibo(i)));
    sum += fibo(i);
    document.writeln();
}

alert("Tổng: " + sum);