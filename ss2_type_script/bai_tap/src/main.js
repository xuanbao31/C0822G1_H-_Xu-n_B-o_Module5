var num = 5;
var sum = 0;
function fn(num) {
    if (num <= 1) {
        return num;
    }
    return fn(num - 1) + fn(num - 2);
}
document.write("Fibonacci: ");
for (var i = 0; i < num; i++) {
    document.write(String(fn(i)));
    sum += fn(i);
    document.writeln();
}
alert("Tổng: " + sum);
