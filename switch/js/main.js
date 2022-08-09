function educationLevel(age) {

    switch (true) {
        case age <= 1:
                    console.log("No escolarizable");
                    break;
        case age > 1 && age < 4:
                    console.log("Guardería");
                    break;
        case age >= 4 && age <= 5:
                    console.log("Educación Infantil");
                    break;
        case age > 5 && age < 13:
                    console.log("Educación Primaria");
                    break;
        case age >= 13 && age <= 16:
                    console.log("Educación Secundaria Obligatoria");
                    break;
        case age > 16 && age < 19:
                    console.log("Bachillerato");
                    break;
        case age >= 19 && age <= 22:
                    console.log("Grado Universitario");
                    break;
        case age > 22 && age < 25:
                    console.log("Máster Universitario");
                    break;
        case age >= 25 && age <= 27:
                    console.log("Doctorado");
                    break;

        default:
                    console.log("En condiciones ordinarias, a la edad de " + age + " se ha debido finalizar con el ciclo completo de estudios.");
    }

}

educationLevel(24);

/* IMPRIME: "Máster Universitario" */