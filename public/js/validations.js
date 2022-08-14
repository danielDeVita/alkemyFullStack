window.onload = function () {
    let concepto = document.getElementById("concepto"); console.log(concepto)
    let monto = document.getElementById("monto"); console.log(monto)
    let fecha = document.getElementById("fecha"); console.log(fecha)
    let tipo = document.getElementById("tipo"); console.log(tipo)
    let form = document.querySelector("form"); console.log(form)

    let errors;

    concepto.addEventListener("blur", e => {
        if (!concepto.value || concepto.value == "") {
            errors++;
            concepto.nextElementSibling.classList.add("invalid");
            concepto.nextElementSibling.classList.remove("valid");
            concepto.nextElementSibling.innerHTML = "Ingrese un concepto por favor";
        } else {
            concepto.nextElementSibling.classList.replace("invalid", "valid")
        }
    })

    monto.addEventListener("blur", e => {
        if (!monto.value || monto.value == "") {
            errors++;
            monto.nextElementSibling.classList.add("invalid");
            monto.nextElementSibling.classList.remove("valid");
            monto.nextElementSibling.innerHTML = "Ingrese un monto numérico por favor";
        } else {
            monto.nextElementSibling.classList.replace("invalid", "valid")
        }
    })

    fecha.addEventListener("blur", e => {
        if (!fecha.value || fecha.value == "") {
            errors++;
            fecha.nextElementSibling.classList.add("invalid");
            fecha.nextElementSibling.classList.remove("valid");
            fecha.nextElementSibling.innerHTML = "Ingrese una fecha por favor";
        } else {
            fecha.nextElementSibling.classList.replace("invalid", "valid")
        }
    })

    form.addEventListener("submit", e =>
        errors > 0 ? e.preventDefault() : ""
    )
}