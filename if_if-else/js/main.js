function educationLevel(age) {

    if(age <= 1) {
        console.log("No escolarizable");
    } else if (age > 1 && age < 4) {
        console.log("Guardería");
    } else if (age >= 4 && age <= 5) {
        console.log("Educación Infanfil");
    } else if (age > 5 && age < 13) {
        console.log("Educación Primaria");
    } else if (age >= 13 && age <= 16) {
        console.log("Educación Secundaria Obligatoria");
    } else if (age > 16 && age < 19) {
        console.log("Bachilerato");
    } else if (age >= 19 && age <= 22) {
        console.log("Grado Universitario");
    } else if (age > 22 && age < 25) {
        console.log("Máster Universitario");
    } else if (age >= 25 && age <= 27) {
        console.log("Doctorado");
    } else {
        console.log("En condiciones ordinarias, a la edad de " + age + " se ha debido finalizar con el ciclo completo de estudios.")
    }

}

educationLevel(22);


/* IMPRIME: "Grado Universitario" */