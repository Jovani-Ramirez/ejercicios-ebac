"use strict";
function calcularEdad(fechaNacimiento) {
    const fechaNac = new Date(fechaNacimiento);
    if (isNaN(fechaNac.getTime())) {
        return "Fecha inválida. Usa el formato YYYY-MM-DD.";
    }
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    const mes = hoy.getMonth() - fechaNac.getMonth();
    const dia = hoy.getDate() - fechaNac.getDate();
    if (mes < 0 || (mes === 0 && dia < 0)) {
        edad--;
    }
    return edad;
}
// Pruebas
const fechas = ["1997-06-05", "2000-10-25", "2025-01-01", "abc-12-34"];
fechas.forEach(fecha => {
    console.log(`Edad para la fecha ${fecha}: ${calcularEdad(fecha)}`);
});
