"use strict";
//window.onload = function ()
window.onload = function what ()
     {
        var fbest = {
                Comodatarios: "11,966",
                Consultorios: "6,171",
                Total: "7,593,323",
                Supervisores: "112",
                TotalMedicos: "12,078",
                MesPasado: "Junio"
                    };

        document.getElementById("comodatarios").innerHTML = fbest.Comodatarios;
        document.getElementById("consultorios").innerHTML = fbest.Consultorios;
        document.getElementById("total").innerHTML = fbest.Total;
        document.getElementById("supervisores").innerHTML = fbest.Supervisores;
        document.getElementById("medicostotal").innerHTML = fbest.TotalMedicos;
        document.getElementById("mespas").innerHTML = fbest.MesPasado;

    };