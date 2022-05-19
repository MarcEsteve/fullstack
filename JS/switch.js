const a = 5;
console.log('Esta parte esta antes del switch');
switch (a) {
    case 1:
        console.log('El valor de a es 1');
    break;
    case 2:
        console.log('El valor de a es 2');
    break;
    case 3:
        console.log('El valor de a es 3');
    break;
    case 4:
        console.log('El valor de a es 4');
    break;
    default:
        console.log('El valor de a es diferente de 1, 2, 3 o 4');
}
console.log('Esta parte esta después del switch');