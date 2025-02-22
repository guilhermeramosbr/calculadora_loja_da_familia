document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calcular").addEventListener("click", function () {
        const cargaHorariaHoras = parseInt(document.getElementById("carga_horaria").value) || 0;
        const horaExtraHoras = parseInt(document.getElementById("hora_extra").value) || 0;
        const horaExtraMinutos = parseInt(document.getElementById("hora_extra_min").value) || 0;

        const resultado = document.getElementById("resultado");

        if (isNaN(cargaHorariaHoras) || isNaN(horaExtraHoras) || isNaN(horaExtraMinutos) || cargaHorariaHoras <= 0) {
            resultado.textContent = "Por favor, preencha todos os campos corretamente!";
            resultado.style.color = "red";
            return;
        }

        
        const totalMinutosExtras = (horaExtraHoras * 60) + horaExtraMinutos;

        
        const dias = Math.floor(totalMinutosExtras / (cargaHorariaHoras * 60)); // Divide pelo total de minutos de um dia
        const minutosRestantes = totalMinutosExtras % (cargaHorariaHoras * 60);
        const horasRestantes = Math.floor(minutosRestantes / 60); // Converte os minutos restantes para horas

        let textoResultado = "";
        if (dias > 0) {
            textoResultado += `${dias} dia(s)`;
        }
        if (horasRestantes > 0 || dias === 0) {
            textoResultado += ` ${horasRestantes} hora(s)`;
        }
        if (minutosRestantes % 60 > 0) {
            textoResultado += ` ${minutosRestantes % 60} minuto(s)` ;
        }

      
        resultado.textContent = textoResultado;
        resultado.style.color = "green";
    });
});
