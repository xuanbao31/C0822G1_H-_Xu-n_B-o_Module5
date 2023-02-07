let num: number = 9;

let sum: number = 0;

function fibonanci(num: number): number {
    if (num <= 1) {
        return num;
    }
    return fibonanci(num - 1) + fibonanci(num - 2);
}


document.write("Fibonacci: ");
for (let i = 0; i < num; i++) {
    document.write(String(fibonanci(i)));
    sum += fibonanci(i);
    document.writeln();
}

alert("Tổng: " + sum);