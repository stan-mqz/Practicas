import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let secretSequence = [];
let attempts = 0;
const MAX_ATTEMPTS = 10;
let startTime;
let gameWon = false;

function generateSecretSequence() {
  const sequence = [];
  for (let i = 0; i < 4; i++) {
    sequence.push(Math.floor(Math.random() * 9) + 1);
  }
  return sequence;
}

function validateInput(input) {
  input = input.trim().replace(/\s+/g, '');
  
  if (input.length !== 4) {
    return { valid: false, message: '❌ Debes ingresar exactamente 4 números' };
  }
  
  for (let char of input) {
    const num = parseInt(char);
    if (isNaN(num) || num < 1 || num > 9) {
      return { valid: false, message: '❌ Solo números del 1 al 9 son válidos' };
    }
  }
  
  const guessArray = [];
  for (let char of input) {
    guessArray.push(parseInt(char));
  }
  
  return { valid: true, guess: guessArray };
}

function compareSequences(guess, secret) {
  const hints = {
    correct: 0,      
    misplaced: 0,    
    wrong: 0         
  };
  
  const secretCopy = [...secret];
  const guessCopy = [...guess];
  
  for (let i = 0; i < 4; i++) {
    if (guessCopy[i] === secretCopy[i]) {
      hints.correct++;
      secretCopy[i] = null;  
      guessCopy[i] = null;   
    }
  }
  
  for (let i = 0; i < 4; i++) {
    if (guessCopy[i] !== null) {
      const foundIndex = secretCopy.indexOf(guessCopy[i]);
      if (foundIndex !== -1) {
        hints.misplaced++;
        secretCopy[foundIndex] = null;  
      } else {
        hints.wrong++;
      }
    }
  }
  
  return hints;
}

function displayHints(hints) {
  let display = '  Pistas: ';
  
  for (let i = 0; i < hints.correct; i++) {
    display += '✓ ';
  }
  
  for (let i = 0; i < hints.misplaced; i++) {
    display += '○ ';
  }
  
  for (let i = 0; i < hints.wrong; i++) {
    display += '✗ ';
  }
  
  console.log(display);
  console.log(`  (✓ = Correcto | ○ = Mal ubicado | ✗ = No está)\n`);
}

function checkWin(hints) {
  return hints.correct === 4;
}

function getElapsedTime() {
  const endTime = Date.now();
  const seconds = Math.floor((endTime - startTime) / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  
  if (minutes > 0) {
    return `${minutes} minuto(s) y ${remainingSeconds} segundo(s)`;
  }
  return `${seconds} segundo(s)`;
}

function displayHeader() {
  console.clear();
  console.log('╔════════════════════════════════════════════╗');
  console.log('║        🎯 MASTERMIND - ADIVINA LA          ║');
  console.log('║              SECUENCIA SECRETA             ║');
  console.log('╚════════════════════════════════════════════╝\n');
}

function displayInstructions() {
  console.log('📋 INSTRUCCIONES:');
  console.log('   - Adivina una secuencia de 4 números (1-9)');
  console.log('   - Los números pueden repetirse');
  console.log('   - Tienes 10 intentos máximo');
  console.log('   - Después de cada intento recibirás pistas:\n');
  console.log('     ✓ = Número correcto en posición correcta');
  console.log('     ○ = Número correcto en posición incorrecta');
  console.log('     ✗ = Número no está en la secuencia\n');
  console.log('   - Ingresa los 4 números juntos (ej: 1234)\n');
  console.log('═══════════════════════════════════════════════\n');
}


function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function playGame() {
  displayHeader();
  displayInstructions();
  
  secretSequence = generateSecretSequence();
  startTime = Date.now();
  attempts = 0;
  gameWon = false;
  
  console.log('🎮 ¡El juego ha comenzado! Buena suerte.\n');
  console.log('🔢 Secuencia secreta generada (4 números del 1 al 9)\n');
  
  while (attempts < MAX_ATTEMPTS && !gameWon) {
    console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    console.log(`Intento ${attempts + 1} de ${MAX_ATTEMPTS}`);
    console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);
    
    const input = await askQuestion('Ingresa tu secuencia (4 números del 1-9): ');
    
    const validation = validateInput(input);
    
    if (!validation.valid) {
      console.log(`\n${validation.message}\n`);
      continue;  
    }
    
    attempts++;
    
    const guess = validation.guess;
    console.log(`\n  Tu intento: ${guess.join(' ')}`);
    
    const hints = compareSequences(guess, secretSequence);
    
    displayHints(hints);
    
    if (checkWin(hints)) {
      gameWon = true;
    }
  }
  
  console.log('═══════════════════════════════════════════════');
  console.log('          🏁 FIN DEL JUEGO 🏁');
  console.log('═══════════════════════════════════════════════\n');
  
  if (gameWon) {
    console.log('🎉 ¡FELICIDADES! ¡HAS GANADO! 🎉\n');
    console.log(`✨ Secuencia correcta: ${secretSequence.join(' ')}`);
    console.log(`📊 Intentos utilizados: ${attempts} de ${MAX_ATTEMPTS}`);
    console.log(`⏱️  Tiempo total: ${getElapsedTime()}\n`);
  } else {
    console.log('😔 ¡Oh no! Te quedaste sin intentos\n');
    console.log(`🔍 La secuencia secreta era: ${secretSequence.join(' ')}\n`);
    console.log('💡 ¡Inténtalo de nuevo!\n');
  }
  
  const playAgain = await askQuestion('¿Quieres jugar otra vez? (s/n): ');
  
  if (playAgain.toLowerCase() === 's' || playAgain.toLowerCase() === 'si') {
    await playGame();  
  } else {
    console.log('\n👋 ¡Gracias por jugar! ¡Hasta pronto!\n');
    rl.close();
  }
}

playGame()