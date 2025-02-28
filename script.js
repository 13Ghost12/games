const questions = [
    {
        question: "¿Cuanto tiempo llevamos juntos hoy?",
        options: [
            { text: "9 años y 6 meses", points: -10 },
            { text: "9 años y 2 meses", points: -10 },
            { text: "9 años y 4 meses", points: 20 }
        ]
    },
    {
        question: "¿Cuál es mi color favorito?",
        options: [
            { text: "Rojo", points: 10 },
            { text: "Verde", points: -10 },
            { text: "Negro", points: 20 }
        ]
    },
    {
        question: "¿Donde te lleve de improvisto una vez?",
        options: [
            { text: "7 colinas", points: 20 },
            { text: "Filippo", points: -10 },
            { text: "El Arca", points: -10 }
        ]
    },
    {
        question: "¿Que apodo me gusta más?",
        options: [
            { text: "Gordi", points: 5 },
            { text: "Chuli", points: 10 },
            { text: "Pupi", points: 20 }
        ]
    },
    {
        question: "¿Que peinado me gusta más de vos?",
        options: [
            { text: "Colita", points: 5 },
            { text: "Planchita", points: 10 },
            { text: "2 Trenzas", points: 20 }
        ]
    },
    {
        question: "¿Cual me gusta más?",
        options: [
            { text: "Mila a la Napolitana", points: 10 },
            { text: "Sanguchito de Migas", points: 5 },
            { text: "Empanada de Pollo", points: 20 }
        ]
    },
    {
        question: "¿Personaje favorito de One Piece?",
        options: [
            { text: "Luffy", points: 5 },
            { text: "Zoro", points: 20 },
            { text: "Asce", points: 15 }
        ]
    },
    {
        question: "¿Que peliculas miraria 1000 veces?",
        options: [
            { text: "Piratas del Caribe", points: 20 },
            { text: "Rapidos y Furiosos", points: 15 },
            { text: "Marvel", points: -20 }
        ]
    },
    {
        question: "¿Serie favorita?",
        options: [
            { text: "Peaky Blinders", points: 15 },
            { text: "Vikingos", points: 20 },
            { text: "Los 100", points: 10 }
        ]
    },
    {
        question: "¿Si pudiera viajar a cualquier lugar, a donde iria?",
        options: [
            { text: "Japón", points: 25 },
            { text: "Irlanda/Noruega", points: 5 },
            { text: "Italia", points: 10 }
        ]
    },
    {
        question: "¿De las siguientes canciones, cual me gusta más?",
        options: [
            { text: "Troya - Duki", points: 10 },
            { text: "So fresh - Paulo Londra", points: 5 },
            { text: "Carencias de Cordura - Milo J, Yami Safdie", points: 20 }
        ]
    },
    {
        question: "¿Soy mas de dulce o salado?",
        options: [
            { text: "Dulce", points: 5 },
            { text: "Salado", points: 5 },
            { text: "Lo justo de ambos", points: 20 }
        ]
    },
    {
        question: "¿Cuantos tatuajes tengo?",
        options: [
            { text: "19", points: -10 },
            { text: "21", points: 20 },
            { text: "25", points: -20 }
        ]
    },
    {
        question: "¿Anime que me gusta más?",
        options: [
            { text: "Dragon Ball", points: 25 },
            { text: "One Piece", points: 10 },
            { text: "Naruto", points: 5 }
        ]
    },
    {
        question: "¿Cual es el credo de los Asesinos?",
        options: [
            { text: "La libertad es nuestra arma, la verdad nuestro escudo", points: -10 },
            { text: "Nada es verdad, todo esta permitido", points: 20 },
            { text: "Solo en la oscuridad encontramos la luz de la justicia", points: -20 }
        ]
    },
    {
        question: "¿Como se llamaba mi cibulette?",
        options: [
            { text: "Akabane", points: -10 },
            { text: "Akatsuki", points: -10 },
            { text: "Akamaru", points: 20 }
        ]
    },
    {
        question: "La gorra gris que me olvide en el colectivo¿Que decia?",
        options: [
            { text: "Miami", points: -10 },
            { text: "NY", points: -10 },
            { text: "Boston", points: 20 }
        ]
    },
    {
        question: "¿Como es la marca del TV que te di?",
        options: [
            { text: "Telefusion", points: -10 },
            { text: "TCL", points: -10 },
            { text: "Telefunken", points: 20 }
        ]
    },
    {
        question: "¿Cual es el lenguaje global de programacion?",
        options: [
            { text: "HTML", points: -10 },
            { text: "Python", points: 20 },
            { text: "Java", points: -10 }
        ]
    },
    {
        question: "¿Pokemon favorito?",
        options: [
            { text: "Charmander", points: 15 },
            { text: "Gengar", points: 20 },
            { text: "Evee", points: -30 }
        ]
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const option1Btn = document.getElementById("option1");
const option2Btn = document.getElementById("option2");
const option3Btn = document.getElementById("option3");
const startBtn = document.getElementById("start-btn");
const scoreEl = document.getElementById("score");

function startGame() {
    startBtn.classList.add("hidden");
    scoreEl.classList.add("hidden"); // Ocultar puntaje al comenzar
    option1Btn.classList.remove("hidden");
    option2Btn.classList.remove("hidden");
    option3Btn.classList.remove("hidden");
    score = 0;
    currentQuestionIndex = 0;
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showFinalScore();
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    questionEl.innerText = currentQuestion.question;

    const buttons = [option1Btn, option2Btn, option3Btn];

    buttons.forEach((btn, index) => {
        btn.innerText = currentQuestion.options[index].text;
        btn.classList.remove("correct", "incorrect"); // Reiniciar estilos
        btn.disabled = false; // Reactivar botones
        btn.onclick = () => selectAnswer(btn, currentQuestion.options[index].points);
    });
}

function selectAnswer(button, points) {
    const buttons = [option1Btn, option2Btn, option3Btn];

    // Deshabilitar botones después de elegir una opción
    buttons.forEach(btn => btn.disabled = true);

    // Efecto visual de respuesta correcta o incorrecta
    button.classList.add(points > 0 ? "correct" : "incorrect");

    // Sumar puntos
    score += points;

    // Pasar a la siguiente pregunta después de un breve retraso
    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 1000);
}

function showFinalScore() {
    questionEl.innerText = "¡Juego terminado! 🎉";

    option1Btn.classList.add("hidden");
    option2Btn.classList.add("hidden");
    option3Btn.classList.add("hidden");

    let message = "¡Me decepcionas!";
    if (score > 350) message = "¡Si que me conoces! 😍";
    else if (score > 170) message = "¡Mas o menos! 😊";

    scoreEl.innerHTML = `<h2>${message}</h2><h1>Puntaje final: ${score}</h1>`;
    scoreEl.classList.remove("hidden");
    scoreEl.classList.add("final-score"); // Clase para darle estilo

    startBtn.innerText = "Reiniciar";
    startBtn.classList.remove("hidden");
}

startBtn.addEventListener("click", startGame);