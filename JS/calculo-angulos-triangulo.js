let angulo1=40, angulo2=70, angulo3=70;
let triangulo = angulo1 + angulo2 + angulo3;
if (triangulo == 180) {
    document.write("Los ángulos forman 180º del triángulo");
    if (angulo1==angulo2 || angulo1==angulo3 || angulo3==angulo2 ) {
        document.write(" Además es triángulo isosceles");
    }  
} else {
    document.write("No es un triángulo");   
}