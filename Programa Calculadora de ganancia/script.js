document.addEventListener('DOMContentLoaded', function() {
    const calcularBtn = document.getElementById('calcularBtn');
    const resultadoDiv = document.getElementById('resultado');

    calcularBtn.addEventListener('click', function() {
        // Obtener los valores ingresados por el usuario
        let capital = parseFloat(document.getElementById('capital').value);
        let dias = parseInt(document.getElementById('dias').value, 10);

        // Validar que los valores sean numéricos y positivos
        if (isNaN(capital) || capital <= 0 || isNaN(dias) || dias <= 0) {
            alert('Por favor ingrese valores numéricos positivos.');
            return;
        }

        // Calcular la inversión total y la ganancia
        const tasa_diaria = 0.02;
        let total = capital;

        for (let i = 0; i < dias; i++) {
            total = total * (1 + tasa_diaria);
        }

        // Calcular la ganancia total
        let gananciaTotal = total - capital;

        // Mostrar el resultado en el div de resultado
        resultadoDiv.innerHTML = `
            <p>Capital inicial: ${capital.toFixed(2)} USDT</p>
            <p>Ganancia total después de ${dias} días:</p>
            <h3>${gananciaTotal.toFixed(2)} USDT</h3>
            <p>Monto total después de ${dias} días:</p>
            <h3>${total.toFixed(2)} USDT</h3>
        `;
    });
});

