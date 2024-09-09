
console.log("Archivo JavaScript cargado correctamente.")
document.addEventListener('DOMContentLoaded', () => {
    const formPersonas = document.getElementById('formPersonas');
    const formDatosPersonas = document.getElementById('formDatosPersonas');
    const formPesoPersonas = document.getElementById('formPesoPersonas');
    const resultadosDiv = document.getElementById('resultados');

    const btnIngresarPersonas = document.getElementById('btnIngresarPersonas');
    const btnIngresarPeso = document.getElementById('btnIngresarPeso');
    const btnCalcular = document.getElementById('btnCalcular');
    const btnReiniciar = document.getElementById('btnReiniciar');

    let personas = [];
    let totalPersonas = 0;

    // Validar e ingresar el número de personas
    btnIngresarPersonas.addEventListener('click', () => {
        totalPersonas = parseInt(document.getElementById('cantidadPersonas').value);
        if (isNaN(totalPersonas) || totalPersonas < 2) {
            alert('Por favor, ingrese una cantidad válida de personas (2 o más).');
            return;
        }

        formPersonas.classList.add('hidden');
        formDatosPersonas.classList.remove('hidden');
        crearFormularioPersonas(totalPersonas);
    });

    // Generar formulario dinámico para datos de personas
    function crearFormularioPersonas(cantidad) {
        const personasContainer = document.getElementById('personasContainer');
        personasContainer.innerHTML = ''; // Limpiar contenido previo

        for (let i = 0; i < cantidad; i++) {
            const div = document.createElement('div');
            div.classList.add('persona');

            div.innerHTML = `
                <h3>Persona ${i + 1}</h3>
                <label>Nombre: <input type="text" class="nombre" required></label>
                <label>Peso Actual (kg): <input type="number" class="pesoActual" required></label>
                <label>Gramos de Garbanzos por día (100 o más): <input type="number" class="gramosGarbanzos" min="100" required></label>
            `;

            personasContainer.appendChild(div);
        }
    }

    // Validar e ingresar pesos al final de la dieta
    btnIngresarPeso.addEventListener('click', () => {
        const nombres = document.querySelectorAll('.nombre');
        const pesosActuales = document.querySelectorAll('.pesoActual');
        const gramosGarbanzos = document.querySelectorAll('.gramosGarbanzos');

        personas = []; // Resetear el array de personas
        for (let i = 0; i < totalPersonas; i++) {
            const nombre = nombres[i].value;
            const peso = parseFloat(pesosActuales[i].value);
            const gramos = parseInt(gramosGarbanzos[i].value);

            if (!nombre || isNaN(peso) || isNaN(gramos) || gramos < 100) {
                alert('Por favor, ingrese todos los datos correctamente para cada persona.');
                return;
            }

            personas.push({ nombre, peso, gramos, pesoFinal: 0 });
        }

        formDatosPersonas.classList.add('hidden');
        formPesoPersonas.classList.remove('hidden');
        crearFormularioPesosFinales();
    });

    // Crear formulario para ingreso de peso final
    function crearFormularioPesosFinales() {
        const pesoContainer = document.getElementById('pesoContainer');
        pesoContainer.innerHTML = '';

        personas.forEach((persona, index) => {
            const div = document.createElement('div');
            div.innerHTML = `
                <label>Peso perdido por ${persona.nombre} (puede ser negativo): 
                <input type="number" class="pesoFinal" data-index="${index}" required></label>
            `;
            pesoContainer.appendChild(div);
        });
    }

    // Calcular resultados
    btnCalcular.addEventListener('click', () => {
        console.log("Botón Calcular Resultados presionado");
        const pesosFinales = document.querySelectorAll('.pesoFinal');

        let totalGarbanzos = 0;
        let totalAdelgazamiento = 0;
        let personasAumento = 0;
        let maxAdelgazamiento = { nombre: '', kilos: 0, pesoFinal: 0 };

        pesosFinales.forEach(input => {
            const index = input.getAttribute('data-index');
            const adelgazado = parseFloat(input.value);

            personas[index].pesoFinal = personas[index].peso - adelgazado;
            totalAdelgazamiento += adelgazado;
            totalGarbanzos += personas[index].gramos;

            if (adelgazado < 0) personasAumento++;
            if (adelgazado > maxAdelgazamiento.kilos) {
                maxAdelgazamiento = { nombre: personas[index].nombre, kilos: adelgazado, pesoFinal: personas[index].pesoFinal };
            }
        });

        // Mostrar resultados
        document.getElementById('totalGarbanzos').textContent = `Total de garbanzos consumidos por día: ${totalGarbanzos} gramos.`;
        document.getElementById('promedioAdelgazamiento').textContent = `Promedio de kilos adelgazados: ${(totalAdelgazamiento / totalPersonas).toFixed(2)} kg.`;
        document.getElementById('porcentajeAumento').textContent = `Porcentaje de personas que aumentaron de peso: ${(personasAumento / totalPersonas * 100).toFixed(2)}%.`;
        document.getElementById('personaMayorAdelgazamiento').textContent = `Persona que más adelgazó: ${maxAdelgazamiento.nombre}, peso final: ${maxAdelgazamiento.pesoFinal.toFixed(2)} kg.`;

        formPesoPersonas.classList.add('hidden');
        resultadosDiv.classList.remove('hidden');
    });

    // Reiniciar todo
    btnReiniciar.addEventListener('click', () => {
        document.getElementById('cantidadPersonas').value = '';
        formPersonas.classList.remove('hidden');
        formDatosPersonas.classList.add('hidden');
        formPesoPersonas.classList.add('hidden');
        resultadosDiv.classList.add('hidden');

        personas = [];
        totalPersonas = 0;
    });
});
