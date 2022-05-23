const str1 ="En un lugar de la mancha";
const str2 ="En otro lugar";
const u1= str1.length-1; // Guarda 23
const u2= str2.length-1; // Guarda 12

if ((str1.charAt(0) == str2.charAt(0)) && (str1.charAt(u1) == str2.charAt(u2))) {
    document.write("Los dos strings tienen la primera letra y la última igual");
} else {
    document.write("Tienen la primera o la última letra diferente");
}