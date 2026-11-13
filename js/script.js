const baseEjercicios = {
    Piernas: [
    "Sentadilla búlgara con mancuerna",
    "Peso muerto rumano con doble mancuerna",
    "Sentadilla goblet con Kettlebell",
    "Zancadas hacia atrás con mancuernas",
    "Puente de glúteos a una pierna con banda elástica de látex",
    "Hip thrust unipodal apoyado en la banca",
    "Sentadilla sumo con Kettlebell",
    "Curl femoral deslizante en colchoneta",
    "Sentadilla sumo con salto en escalera de coordinación",
    "Elevación de talones de pie a una pierna con mancuerna",
    "Elevación de talones sentado con mancuernas sobre los muslos",
    "Caminata lateral (Monster walks) con cinta elástica de látex en tobillos",
    "Sentadilla pistola asistida con TRX",
    "Subidas a la banca (Step-ups) con mancuernas",
    "Abducción de cadera tumbado de lado con banda elástica de látex",
    "Aducción de cadera en el suelo con resistencia de banda elástica",
    "Buenos días con banda elástica pesada bajo los pies",
    "Sentadillas cosacas con Kettlebell",
    "Saltos con soga",
    "Zancadas laterales con mancuerna",
    "Sentadilla búlgara con pie trasero en TRX",
    "Sentadilla con pausa isométrica de 3 segundos con kettlebell",
    "Sentadilla con tempo lento (4 segundos de bajada) con mancuerna",
    "Sentadilla con banda elástica de látex sobre las rodillas",
    "Peso muerto a una pierna con kettlebell",
    "Swing de kettlebell",
    "Sentadilla isométrica contra la pared (Wall sit)",
    "Saltos laterales (Skater jumps) sobre conos tortuga",
    "Zancadas caminando con mancuernas",
    "Patada de glúteo en cuadrupedia con banda elástica",
    "Puente de glúteos con banda sobre las rodillas y pausa arriba",
    "Sentadilla con salto (Jump squat) en colchoneta",
    "Carrera de rodillas altas en escalera de coordinación",
    "Zancada reversa con rodilla al pecho y mancuerna"
    ],
    Brazos: [
    "Curl de bíceps alterno con supinación con mancuernas",
    "Curl martillo con mancuernas",
    "Curl concentrado con mancuerna",
    "Curl de bíceps en suspensión con TRX",
    "Curl Zottman con mancuernas",
    "Press francés tumbado en banca con mancuernas",
    "Extensión de tríceps tras nuca a una mano con mancuerna o kettlebell",
    "Fondos de tríceps en paralelas",
    "Extensión de tríceps en suspensión con TRX",
    "Patada de tríceps con mancuerna o kettlebell",
    "Press militar de pie con mancuernas",
    "Elevaciones laterales con mancuernas",
    "Elevaciones frontales con kettlebell o mancuerna",
    "Pájaros (elevaciones posteriores) inclinado con mancuernas",
    "Face pull con banda elástica anclada",
    "Press Arnold con mancuernas",
    "Curl de bíceps con banda elástica pisada",
    "Press cerrado en el suelo con mancuernas",
    "Curl de bíceps en banca inclinada con mancuernas",
    "Curl de bíceps tipo 21s con mancuernas",
    "Curl araña apoyando el pecho en la banca inclinada",
    "Curl inverso con mancuernas",
    "Curl de bíceps con banda elástica pisada y pausa isométrica",
    "Extensión de tríceps sobre la cabeza con banda elástica anclada",
    "Extensión de tríceps con banda anclada en altura (empuje hacia abajo)",
    "Fondos de tríceps con manos en la banca y pies en el suelo",
    "Press de hombros con banda elástica pisada",
    "Press de hombros a una mano con kettlebell",
    "Elevaciones laterales con banda elástica pisada",
    "Halo con kettlebell",
    "Rotación externa de hombro con banda elástica",
    "Curl de muñeca con mancuerna",
    "Elevación lateral tumbado de lado en la banca con mancuerna"
    ],
    Abdomen: [
    "Extensión con rueda abdominal (Ab wheel rollout) desde las rodillas",
    "Plancha abdominal con toque de hombros en colchoneta",
    "Elevación de piernas colgado de las paralelas",
    "Encogimientos abdominales en colchoneta",
    "Plancha abdominal en antebrazos con resistencia de banda elástica",
    "Giros rusos (Russian twists) con Kettlebell",
    "Escaladores (Mountain climbers) en escalera de coordinación",
    "Elevación de rodillas al pecho en paralelas",
    "Bicho muerto (Dead bug) con tensión de banda elástica",
    "Posición de bote isométrica (Hollow body hold) en colchoneta",
    "Plancha lateral con elevación de pierna en colchoneta",
    "Abdominales bicicleta en colchoneta",
    "Abdominales en V (V-ups) en colchoneta",
    "Press Pallof anti-rotación con banda elástica",
    "Extensión parcial con rueda abdominal en plano inclinado",
    "Elevación de piernas acostado con retención isométrica abajo",
    "Toques de talón alternos en colchoneta",
    "Plancha abdominal con pies suspendidos en TRX",
    "Encogimientos invertidos en colchoneta",
    "Escuadra isométrica (L-sit) asistida en paralelas",
    "Leñador (Woodchop) con kettlebell",
    "Leñador (Woodchop) con banda elástica anclada",
    "Plancha alta con toque de rodillas alternado",
    "Plancha con arrastre de kettlebell (Pull-through)",
    "Pike en TRX (cadera hacia arriba con pies suspendidos)",
    "Rodillas al pecho en TRX desde posición de plancha",
    "Caminata del granjero a una mano (Suitcase carry) con kettlebell",
    "Press Pallof con rotación y banda elástica",
    "Abdominales con kettlebell sostenida contra el pecho",
    "Patadas alternas (Flutter kicks) en colchoneta",
    "Balanceo en posición de bote (Hollow rock) en colchoneta",
    "Plancha en antebrazos con arrastre de colchoneta o paso lateral"
    ],
    Pectorales: [
    "Press de banca plano con mancuernas",
    "Press de banca inclinado con mancuernas",
    "Aperturas planas en banca con mancuernas",
    "Aperturas inclinadas en banca con mancuernas",
    "Fondos de pecho en paralelas con torso inclinado",
    "Flexiones de brazos tradicionales en colchoneta",
    "Flexiones declinadas con pies elevados en la banca",
    "Flexiones con agarre diamante en colchoneta",
    "Cruces de pecho con bandas elásticas ancladas",
    "Press de pecho en el suelo con puente de glúteos y mancuernas",
    "Flexiones pliométricas explosivas en colchoneta",
    "Press unilateral alterno en banca con mancuernas",
    "Pullover en banca con mancuerna o kettlebell",
    "Flexiones en suspensión con TRX",
    "Press con mancuernas en agarre neutro juntas (Squeeze press)",
    "Flexiones con resistencia de banda elástica en la espalda",
    "Aperturas de pecho en el suelo con mancuernas",
    "Flexiones arquero en colchoneta",
    "Press cerrado sujeto a los cuernos de la kettlebell",
    "Flexiones declinadas con pausa isométrica abajo",
    "Flexiones con manos elevadas en la banca (regresión)",
    "Aperturas de pecho (Chest fly) en suspensión con TRX",
    "Flexiones con toque de hombro alternado",
    "Flexiones con manos desfasadas (Staggered)",
    "Flexiones con rotación en T",
    "Flexiones con tempo lento (4 segundos de bajada) en colchoneta",
    "Press de pecho a una mano en el suelo con mancuerna",
    "Press de banca con mancuernas con pausa de 2 segundos abajo",
    "Aperturas con banda elástica tumbado en el suelo",
    "Press de pecho con banda elástica anclada, de pie en posición de zancada",
    "Fondos de pecho en banca con pies elevados"
    ],
    Espalda: [
    "Remo a una mano con mancuerna apoyado en la banca",
    "Remo inclinado con doble mancuerna",
    "Remo invertido en suspensión con TRX",
    "Remo horizontal sentado o de pie con banda elástica pesada",
    "Jalón al pecho con banda elástica anclada en altura",
    "Remo al mentón con banda elástica o kettlebell",
    "Encogimientos de hombros con doble mancuerna",
    "Encogimientos de hombros con kettlebells",
    "Extensiones lumbares (Superman) en colchoneta",
    "Remo alterno estilo Gorilla Row con kettlebells",
    "Pullover en suspensión con TRX",
    "Elevaciones escapulares en Y-W-T boca abajo en colchoneta",
    "Remo invertido en TRX con agarre supino",
    "Hiperextensiones inversas de cadera en el borde de la banca",
    "Remo unilateral de pie con banda elástica",
    "Peso muerto rumano con kettlebells",
    "Remo renegado en posición de plancha con mancuernas",
    "Puente de glúteo con empuje isométrico de brazos contra el suelo",
    "Remo sentado en el suelo con banda elástica y piernas extendidas",
    "Pull-apart con banda elástica (apertura horizontal)",
    "Remo a una mano con kettlebell apoyado en la banca",
    "Remo invertido en TRX con pies elevados",
    "Remo a una mano en suspensión con TRX",
    "Peso muerto a una pierna con mancuerna",
    "Peso muerto con banda elástica pesada bajo los pies",
    "Pullover de pie con banda elástica anclada en altura",
    "Isométrico de Superman con pausa de 5 segundos en colchoneta",
    "Remo con pausa isométrica de 3 segundos con doble mancuerna",
    "Remo en plancha con banda elástica y rotación (Renegade con banda)"
    ]
};

const selectNumBloques = document.getElementById('numBloques');
const bloquesConfigDiv = document.getElementById('bloquesConfig');
const btnGenerar = document.getElementById('btnGenerar');
const resultadoDiv = document.getElementById('resultado');

function mezclar(array) {
    const copia = [...array];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}

function renderizarConfiguracionBloques() {
    const cantidad = parseInt(selectNumBloques.value);
    bloquesConfigDiv.innerHTML = '';

    for (let i = 1; i <= cantidad; i++) {
        const card = document.createElement('div');
        card.className = 'config-card';
        card.innerHTML = `
        <label for="ejerciciosBloque${i}">Bloque ${i}:</label>
        <select id="ejerciciosBloque${i}">
            <option value="3">3 ejercicios</option>
            <option value="4" selected>4 ejercicios</option>
            <option value="5">5 ejercicios</option>
            <option value="6">6 ejercicios</option>
        </select>
        `;
        bloquesConfigDiv.appendChild(card);
    }
}

function generarRutina() {
    const cantidadBloques = parseInt(selectNumBloques.value);
    const gruposDisponibles = Object.keys(baseEjercicios);
    const ejerciciosUsados = new Set();
    resultadoDiv.innerHTML = '';

for (let b = 1; b <= cantidadBloques; b++) {
        const cantEjercicios = parseInt(document.getElementById(`ejerciciosBloque${b}`).value);
        
        const maxGruposPosibles = Math.min(cantEjercicios, gruposDisponibles.length);
        const cantGruposEnBloque = Math.floor(Math.random() * (maxGruposPosibles - 3 + 1)) + 3;

        const gruposSeleccionados = mezclar(gruposDisponibles).slice(0, cantGruposEnBloque);

        let asignacionGrupos = [...gruposSeleccionados];
        while (asignacionGrupos.length < cantEjercicios) {
        const grupoExtra = gruposSeleccionados[Math.floor(Math.random() * gruposSeleccionados.length)];
        asignacionGrupos.push(grupoExtra);
        }
        asignacionGrupos = mezclar(asignacionGrupos);

        const ejerciciosDelBloque = asignacionGrupos.map(grupo => {
        const disponibles = baseEjercicios[grupo].filter(ej => !ejerciciosUsados.has(ej));
        const pool = disponibles.length > 0 ? disponibles : baseEjercicios[grupo];
        const elegido = pool[Math.floor(Math.random() * pool.length)];
        ejerciciosUsados.add(elegido);
        return { nombre: elegido, grupo };
        });

        const bloqueCard = document.createElement('div');
        bloqueCard.className = 'bloque-card';

        const listaHTML = ejerciciosDelBloque.map((item, idx) => `
        <li class="ejercicio-item">
            <span class="ejercicio-nombre"><strong>${idx + 1}.</strong> ${item.nombre}</span>
            <span class="grupo-tag tag-${item.grupo}">${item.grupo}</span>
        </li>
        `).join('');

        bloqueCard.innerHTML = `
        <div class="bloque-header">
            <span class="bloque-title">Bloque ${b}</span>
            <span class="bloque-badge">${cantEjercicios} ejercicios · ${cantGruposEnBloque} grupos</span>
        </div>
        <ul class="ejercicio-list">
            ${listaHTML}
        </ul>
        `;

        resultadoDiv.appendChild(bloqueCard);
    }
}

selectNumBloques.addEventListener('change', renderizarConfiguracionBloques);
btnGenerar.addEventListener('click', generarRutina);

renderizarConfiguracionBloques();
generarRutina();