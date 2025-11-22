const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let targetNumber = 21;
let currentSum = 0;
let acceptedNumbers = [];
let rejections = 3;
let round = 1;
let strategy = '';
let record = null;

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateByStrategy(strat) {
  switch(strat) {
    case '1':
      return generateRandomNumber(1, 5);
    case '2':
      return generateRandomNumber(1, 10);
    case '3':
      return generateRandomNumber(5, 15);
    default:
      return generateRandomNumber(1, 10);
  }
}

function validateGameState() {
  if (currentSum === targetNumber) {
    return 'win';
  } else if (currentSum > targetNumber) {
    return 'lose';
  } else {
    return 'continue';
  }
}

function displayGameState() {
  console.log(`\n${'='.repeat(50)}`);
  console.log(`Ronda ${round} | Suma Actual: ${currentSum}/${targetNumber} | Rechazos: ${rejections}`);
  console.log(`Histórico: [${acceptedNumbers.join(', ')}]`);
  console.log(`${'='.repeat(50)}\n`);
}

function displayMenu() {
  console.clear();
  console.log('╔════════════════════════════════════════════╗');
  console.log('║           🎲 JUEGO DEL 21 🎲               ║');
  console.log('╚════════════════════════════════════════════╝\n');
  console.log('📋 REGLAS:');
  console.log('   • Objetivo: Llegar exactamente a 21');
  console.log('   • Se generan números aleatorios cada ronda');
  console.log('   • Puedes ACEPTAR o RECHAZAR cada número');
  console.log('   • Tienes 3 rechazos disponibles');
  console.log('   • Si te pasas de 21, pierdes');
  console.log('   • Ganas si llegas exactamente a 21\n');
  console.log('🎯 ESTRATEGIAS:\n');
  console.log('   1️⃣  Conservadora (números 1-5)');
  console.log('   2️⃣  Balanceada (números 1-10)');
  console.log('   3️⃣  Arriesgada (números 5-15)\n');
  if (record) {
    console.log(`🏆 RÉCORD ACTUAL: ${record.rounds} rondas con ${record.acceptedCount} números\n`);
  }
  console.log(`${'='.repeat(50)}\n`);
}

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function playRound() {
  while (true) {
    displayGameState();
    
    const generatedNumber = generateByStrategy(strategy);
    console.log(`🎲 Número generado: ${generatedNumber}`);
    
    const wouldExceed = (currentSum + generatedNumber) > targetNumber;
    
    if (wouldExceed) {
      console.log(`⚠️  Este número te haría pasar de 21 (${currentSum + generatedNumber})`);
    }
    
    let action = '';
    let validInput = false;
    
    while (!validInput) {
      action = await askQuestion(`\n¿Qué deseas hacer? (a=aceptar / r=rechazar): `);
      action = action.toLowerCase().trim();
      
      if (action === 'a' || action === 'r') {
        validInput = true;
      } else {
        console.log('❌ Opción inválida. Usa "a" para aceptar o "r" para rechazar.');
      }
    }
    
    if (action === 'a') {
      currentSum += generatedNumber;
      acceptedNumbers.push(generatedNumber);
      console.log(`✅ Número aceptado! Nueva suma: ${currentSum}`);
      
      const gameState = validateGameState();
      
      if (gameState === 'win') {
        return 'win';
      } else if (gameState === 'lose') {
        return 'lose';
      }
      
      round++;
      
    } else if (action === 'r') {
      if (rejections > 0) {
        rejections--;
        console.log(`❌ Número rechazado. Rechazos restantes: ${rejections}`);
      } else {
        console.log('⚠️  No tienes más rechazos disponibles. Debes aceptar.');
        continue;
      }
    }
    
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}

async function selectStrategy() {
  let selectedStrategy = '';
  let validStrategy = false;
  
  while (!validStrategy) {
    selectedStrategy = await askQuestion('Elige tu estrategia (1/2/3): ');
    
    switch(selectedStrategy) {
      case '1':
      case '2':
      case '3':
        validStrategy = true;
        break;
      default:
        console.log('❌ Opción inválida. Elige 1, 2 o 3.\n');
    }
  }
  
  return selectedStrategy;
}

async function showResults(result) {
  console.log('\n' + '='.repeat(50));
  console.log('              🏁 FIN DEL JUEGO 🏁');
  console.log('='.repeat(50) + '\n');
  
  if (result === 'win') {
    console.log('🎉 ¡FELICIDADES! ¡HAS GANADO! 🎉\n');
    console.log(`✨ Llegaste exactamente a ${targetNumber}`);
    console.log(`📊 Rondas jugadas: ${round}`);
    console.log(`🔢 Números aceptados: ${acceptedNumbers.length}`);
    console.log(`📜 Secuencia: [${acceptedNumbers.join(', ')}]`);
    console.log(`🚫 Rechazos usados: ${3 - rejections}\n`);
    
    if (!record || round < record.rounds || (round === record.rounds && acceptedNumbers.length < record.acceptedCount)) {
      console.log('🏆 ¡NUEVO RÉCORD! 🏆\n');
      record = {
        rounds: round,
        acceptedCount: acceptedNumbers.length,
        sequence: [...acceptedNumbers]
      };
    }
  } else {
    console.log('😔 ¡Oh no! Has perdido\n');
    console.log(`❌ Te pasaste de ${targetNumber}. Suma final: ${currentSum}`);
    console.log(`📊 Rondas jugadas: ${round}`);
    console.log(`📜 Secuencia: [${acceptedNumbers.join(', ')}]\n`);
  }
}

function resetGame() {
  currentSum = 0;
  acceptedNumbers = [];
  rejections = 3;
  round = 1;
  strategy = '';
}

async function playGame() {
  let playAgain = false;
  
  do {
    resetGame();
    displayMenu();
    
    strategy = await selectStrategy();
    
    console.log('\n🎮 ¡Comienza el juego!\n');
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const result = await playRound();
    await showResults(result);
    
    let validAnswer = false;
    let answer = '';
    
    while (!validAnswer) {
      answer = await askQuestion('¿Quieres jugar otra vez? (s/n): ');
      answer = answer.toLowerCase().trim();
      
      if (answer === 's' || answer === 'si' || answer === 'n' || answer === 'no') {
        validAnswer = true;
      } else {
        console.log('❌ Respuesta inválida. Usa "s" o "n".\n');
      }
    }
    
    playAgain = (answer === 's' || answer === 'si');
    
  } while (playAgain);
  
  console.log('\n👋 ¡Gracias por jugar! ¡Hasta pronto!\n');
  rl.close();
}

playGame();