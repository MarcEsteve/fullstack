const a = 3;
const b = 5;
if (a > b) {
    console.log(`a (${a}) es mayor que b (${b})`);
    document.write("condición 1 a>b");
} else if (a < b) {
    console.log(`b (${b}) es mayor que a (${a})`);
    document.write("a < b");
} else if (a === b) {
    console.log(`a (${a}) es igual y posee el mismo tipo que b (${b})`);
    document.write("a=b valor y tipo");
} else {
    console.log(`ELSE a (${a}) es igual en valor que b (${b})`);
    document.write("ELSE a=b solo en valor");
}