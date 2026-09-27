const VENTAS_BASE = 5; 

function calcularComision(numeroVentas, precioProducto){
    let comision =0 ;

    if(numeroVentas > VENTAS_BASE){
        let ventasExtras = numeroVentas - VENTAS_BASE;
        comision = ventasExtras * (precioProducto * 0,1);
    }

    return comision;
}

   function validarInput(idInput, idError) {
    const valor = document.getElementById(idInput).value.trim();
    const error = document.getElementById(idError);

    if (valor === "") {
        error.textContent = "Este campo no puede estar vacío.";
    } else if (!/^\d+$/.test(valor)) {
        error.textContent = "Ingresa solo números.";
    } else if (valor.length > 5) {
        error.textContent = "Máximo 5 dígitos.";
    } else {
        error.textContent = "";
    }

    return error.textContent === "";
}


    function calcular(){
        // recuperamos propiedades de las cajas de texto
        //let componenteSueldoBase = document.getElementById("txtSueldoBase");
        //let componenteVentas = document.getElementById("txtVentas");
        //let componentePrecio = document.getElementById("txtPrecio");
        
        // recuperamos el valor de las cajas de texto 
        //let SueldoBaseStr = componenteSueldoBase.value;
        
    const sueldoValido = validarInput("txtSueldoBase", "errorSueldoBase");
    const ventasValidas = validarInput("txtVentas", "errorVentas");
    const precioValido = validarInput("txtPrecio", "errorPrecio");

    if (!sueldoValido || !ventasValidas || !precioValido) {
    return;
    }
        let sueldoBase = recuperarFloat("txtSueldoBase")
        let numeroVentas = recuperarFloat("txtVentas")
        let precioProducto = recuperarFloat("txtPrecio")

        //let SueldoBaseStr = recuperarTexto("txtSueldoBase");
       // let VentasStr = recuperarTexto("txtVentas");
        //let precioProductoStr = recuperarTexto("txtPrecio");
        
        //let VentasStr = componenteVentas.value;
        //let precioProductoStr = componentePrecio.value;

        // convertimos el texto a número
        //let sueldoBase = parseFloat(SueldoBaseStr);
        //let numeroVentas = parseFloat(VentasStr);
        //let precioProducto = parseFloat(precioProductoStr);

        let comision = calcularComision(numeroVentas, precioProducto);

        let total = sueldoBase + comision;

        let spSueldoBase = document.getElementById("spSueldoBase");
        let spComision = document.getElementById("spComision");
        let spTotal = document.getElementById("spTotal");

        spSueldoBase.textContent = sueldoBase;
        spComision.textContent = comision;
        spTotal.textContent = total;

        mostrarEnSpan("spSueldoBase", sueldoBase);
        mostrarEnSpan("spComision", comision);
        mostrarEnSpan("spTotal", total);
}