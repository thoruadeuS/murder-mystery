const cases = [
  {
    id: 1,
    title: "El Asesinato en la Mansión",
    difficulty: "Media",
    description:
      "El millonario Richard Blackwood fue encontrado muerto en su estudio a las 10 PM. La puerta estaba cerrada desde dentro y la ventana estaba abierta. Había una copa de vino a medio beber en su escritorio.",
    clues: [
      { title: "Copa de Vino", text: "Contenía veneno de acción rápida" },
      { title: "Ventana Abierta", text: "Abierta desde dentro, sin señales de entrada forzada" },
      { title: "Testamento", text: "Modificado esa misma tarde" },
      { title: "Llamada Telefónica", text: "Recibió una llamada a las 9:45 PM" },
    ],
    suspects: [
      { name: "Margaret", icon: "👩", role: "Esposa", alibi: "Estaba en su habitación" },
      { name: "James", icon: "👨", role: "Hijo", alibi: "En el jardín fumando" },
      { name: "Sarah", icon: "👩‍💼", role: "Secretaria", alibi: "Había salido a las 9 PM" },
      { name: "Thomas", icon: "👨‍💼", role: "Socio", alibi: "En una reunión" },
    ],
    correctAnswer: "Margaret",
    explanation:
      "Margaret es la culpable. Ella envenenó el vino antes de que Richard lo bebiera. La ventana abierta fue una distracción para simular una entrada externa. El testamento modificado esa tarde la dejaba sin herencia, lo que fue su motivo.",
  },
  {
    id: 2,
    title: "Muerte en el Tren Nocturno",
    difficulty: "Difícil",
    description:
      "El famoso detective privado Marcus Stone fue encontrado muerto en su compartimento del tren expreso a medianoche. La puerta estaba cerrada con llave desde dentro. Tenía una herida de bala en el pecho.",
    clues: [
      { title: "Arma del Crimen", text: "Pistola silenciada encontrada en el baño" },
      { title: "Nota Cifrada", text: "Mensaje en código en su bolsillo" },
      { title: "Billete de Tren", text: "Comprado a última hora" },
      { title: "Maletín", text: "Contenía documentos comprometedores" },
    ],
    suspects: [
      { name: "Elena", icon: "👩‍🦰", role: "Periodista", alibi: "En el vagón restaurante" },
      { name: "Victor", icon: "👨‍💼", role: "Empresario", alibi: "Dormido en su compartimento" },
      { name: "Clara", icon: "👩‍⚕️", role: "Doctora", alibi: "Atendiendo a un pasajero" },
      { name: "Robert", icon: "👨‍✈️", role: "Piloto retirado", alibi: "Jugando cartas" },
    ],
    correctAnswer: "Victor",
    explanation:
      "Victor es el asesino. Los documentos en el maletín revelaban su fraude empresarial que Marcus estaba investigando. Usó una llave maestra para entrar, disparó con silenciador, y volvió a cerrar desde fuera usando un truco con alambre.",
  },
  {
    id: 3,
    title: "El Enigma del Teatro",
    difficulty: "Fácil",
    description:
      "La actriz principal, Isabella Rossi, fue encontrada muerta en su camerino después de la función. Había señales de lucha y su collar de diamantes había desaparecido.",
    clues: [
      { title: "Collar Desaparecido", text: "Valorado en 500,000 dólares" },
      { title: "Maquillaje Corrido", text: "Señales de lágrimas recientes" },
      { title: "Carta Anónima", text: "Amenaza recibida esa mañana" },
      { title: "Puerta Trasera", text: "Encontrada entreabierta" },
    ],
    suspects: [
      { name: "Antonio", icon: "👨‍🎤", role: "Actor rival", alibi: "En el escenario" },
      { name: "Lucia", icon: "👩‍🎨", role: "Maquilladora", alibi: "Limpiando el área" },
      { name: "Marco", icon: "👨‍💼", role: "Manager", alibi: "En su oficina" },
      { name: "Sofia", icon: "👩", role: "Asistente", alibi: "Fue a comprar café" },
    ],
    correctAnswer: "Sofia",
    explanation:
      "Sofia es la culpable. Tenía deudas de juego y sabía del collar. Aprovechó que fue a 'comprar café' para regresar por la puerta trasera, confrontar a Isabella, y en la lucha, la mató accidentalmente. Robó el collar para pagar sus deudas.",
  },
  {
    id: 4,
    title: "Asesinato en la Biblioteca",
    difficulty: "Media",
    description:
      "El profesor Whitmore fue encontrado muerto entre las estanterías de libros antiguos. Tenía un libro abierto en sus manos y una expresión de sorpresa en su rostro. No había señales de violencia física.",
    clues: [
      { title: "Libro Antiguo", text: "Páginas impregnadas con sustancia tóxica" },
      { title: "Guantes Desechables", text: "Encontrados en la papelera" },
      { title: "Registro de Entrada", text: "Tres personas entraron esa noche" },
      { title: "Cámara de Seguridad", text: "Desconectada durante 15 minutos" },
    ],
    suspects: [
      { name: "Dr. Chen", icon: "👨‍🔬", role: "Químico", alibi: "En el laboratorio" },
      { name: "Patricia", icon: "👩‍💼", role: "Bibliotecaria", alibi: "Catalogando libros" },
      { name: "Edward", icon: "👨‍🎓", role: "Estudiante", alibi: "Estudiando en sala de lectura" },
      { name: "Helen", icon: "👩‍🏫", role: "Profesora", alibi: "Dando clase nocturna" },
    ],
    correctAnswer: "Dr. Chen",
    explanation:
      "El Dr. Chen es el asesino. Tenía conocimientos de química para crear el veneno de contacto. Desconectó las cámaras, impregnó las páginas del libro que sabía que el profesor consultaría, y usó guantes para no contaminarse. El motivo: el profesor iba a denunciar su plagio académico.",
  },
  {
    id: 5,
    title: "El Misterio del Yate",
    difficulty: "Difícil",
    description:
      "Durante una fiesta exclusiva en un yate, el anfitrión, el magnate David Sterling, desapareció. Horas después, su cuerpo fue encontrado en el agua. La autopsia reveló que murió antes de caer al mar.",
    clues: [
      { title: "Marca de Inyección", text: "En el cuello, sustancia paralizante" },
      { title: "Cóctel Derramado", text: "En la cubierta superior" },
      { title: "Mensaje de Texto", text: "Citaba a alguien en cubierta a las 11 PM" },
      { title: "Salvavidas Cortado", text: "Deliberadamente saboteado" },
    ],
    suspects: [
      { name: "Natasha", icon: "👩‍🦱", role: "Ex-esposa", alibi: "En el salón principal" },
      { name: "Gregory", icon: "👨‍⚖️", role: "Abogado", alibi: "Hablando por teléfono" },
      { name: "Diana", icon: "👩‍⚕️", role: "Médica personal", alibi: "Atendiendo a un invitado mareado" },
      { name: "Charles", icon: "👨‍✈️", role: "Capitán", alibi: "En el puente de mando" },
    ],
    correctAnswer: "Diana",
    explanation:
      "Diana es la asesina. Como médica personal, tenía acceso a sustancias paralizantes. Envió el mensaje haciéndose pasar por otra persona, lo inyectó en cubierta, y lo arrojó al mar. Su motivo: David descubrió que ella desviaba fondos de su fundación médica.",
  },
]

let currentCaseIndex = 0
let solvedCases = 0

const intro = document.getElementById("intro")
const caseContainer = document.getElementById("case-container")
const startBtn = document.getElementById("start-btn")
const nextCaseBtn = document.getElementById("next-case-btn")
const solvedCount = document.getElementById("solved-count")

startBtn.addEventListener("click", startGame)
nextCaseBtn.addEventListener("click", loadNextCase)

function createParticles() {
  const particlesContainer = document.getElementById("particles")
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div")
    particle.className = "particle"
    particle.style.left = Math.random() * 100 + "%"
    particle.style.top = Math.random() * 100 + "%"
    particle.style.animationDelay = Math.random() * 20 + "s"
    particle.style.animationDuration = Math.random() * 10 + 15 + "s"
    particlesContainer.appendChild(particle)
  }
}

function startGame() {
  intro.classList.add("hidden")
  caseContainer.classList.remove("hidden")
  loadCase(currentCaseIndex)
}

function loadCase(index) {
  const currentCase = cases[index]

  document.getElementById("case-number").textContent = `Caso #${currentCase.id}`
  document.getElementById("difficulty").textContent = `Dificultad: ${currentCase.difficulty}`
  document.getElementById("case-title").textContent = currentCase.title
  document.getElementById("case-description").textContent = currentCase.description

  const cluesGrid = document.getElementById("clues-grid")
  cluesGrid.innerHTML = ""
  currentCase.clues.forEach((clue) => {
    const clueCard = document.createElement("div")
    clueCard.className = "clue-card"
    clueCard.innerHTML = `
            <h4>${clue.title}</h4>
            <p>${clue.text}</p>
        `
    cluesGrid.appendChild(clueCard)
  })

  const suspectsGrid = document.getElementById("suspects-grid")
  suspectsGrid.innerHTML = ""
  currentCase.suspects.forEach((suspect) => {
    const suspectCard = document.createElement("div")
    suspectCard.className = "suspect-card"
    suspectCard.innerHTML = `
            <div class="suspect-icon">${suspect.icon}</div>
            <h4>${suspect.name}</h4>
            <p>${suspect.role}</p>
            <p style="font-size: 0.85rem; margin-top: 0.5rem;">${suspect.alibi}</p>
        `
    suspectsGrid.appendChild(suspectCard)
  })

  const answerOptions = document.getElementById("answer-options")
  answerOptions.innerHTML = ""
  currentCase.suspects.forEach((suspect) => {
    const answerBtn = document.createElement("button")
    answerBtn.className = "answer-btn"
    answerBtn.textContent = `Acusar a ${suspect.name} (${suspect.role})`
    answerBtn.addEventListener("click", () => checkAnswer(suspect.name, currentCase))
    answerOptions.appendChild(answerBtn)
  })

  document.getElementById("result").classList.add("hidden")
}

function checkAnswer(selectedAnswer, currentCase) {
  const answerButtons = document.querySelectorAll(".answer-btn")
  const resultDiv = document.getElementById("result")
  const resultTitle = document.getElementById("result-title")
  const resultExplanation = document.getElementById("result-explanation")

  answerButtons.forEach((btn) => {
    btn.disabled = true
    if (btn.textContent.includes(currentCase.correctAnswer)) {
      btn.classList.add("correct")
    } else if (btn.textContent.includes(selectedAnswer)) {
      btn.classList.add("incorrect")
    }
  })

  if (selectedAnswer === currentCase.correctAnswer) {
    resultTitle.textContent = "🎉 ¡Caso Resuelto!"
    resultTitle.style.color = "var(--success)"
    solvedCases++
    solvedCount.textContent = solvedCases
  } else {
    resultTitle.textContent = "❌ Caso No Resuelto"
    resultTitle.style.color = "var(--error)"
  }

  resultExplanation.textContent = currentCase.explanation
  resultDiv.classList.remove("hidden")

  resultDiv.scrollIntoView({ behavior: "smooth", block: "nearest" })
}

function loadNextCase() {
  currentCaseIndex++

  if (currentCaseIndex >= cases.length) {
    caseContainer.innerHTML = `
            <div class="result-content" style="text-align: center; padding: 3rem;">
                <h2 style="font-size: 2.5rem; color: var(--accent-primary); margin-bottom: 1rem;">
                    🏆 ¡Felicidades, Detective!
                </h2>
                <p style="font-size: 1.3rem; color: var(--text-secondary); margin-bottom: 1rem;">
                    Has completado todos los casos disponibles
                </p>
                <p style="font-size: 1.5rem; color: var(--accent-primary); margin-bottom: 2rem;">
                    Casos Resueltos: ${solvedCases} de ${cases.length}
                </p>
                <button class="btn-primary" onclick="location.reload()">
                    Jugar de Nuevo
                </button>
            </div>
        `
  } else {
    loadCase(currentCaseIndex)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
}

createParticles()
