export const generateEasyOperation = () => {
  const numberOne = (Math.floor(Math.random() * 5) + 1) * 2;
  const numberTwo = (Math.floor(Math.random() * 5) + 1) * 2;
  const operation = Math.floor(Math.random() * 4) + 1;
  let ecuation;
  let question;

  if (operation === 1) {
    ecuation = numberOne + numberTwo;
    question = `¿Cual es el resultado de ${numberOne} + ${numberTwo}? `;
  } else if (operation === 2) {
    ecuation = numberOne - numberTwo;
    question = `¿Cual es el resultado de ${numberOne} - ${numberTwo}? `;
  } else if (operation === 3) {
    ecuation = numberOne * numberTwo;
    question = `¿Cual es el resultado de ${numberOne} * ${numberTwo}? `;
  } else {
    if (numberTwo % numberOne === 0) {
      ecuation = numberTwo / numberOne;
      question = `¿Cual es el resultado de ${numberTwo} / ${numberOne}? `;
    } else if (numberOne % numberTwo === 0) {
      ecuation = numberOne / numberTwo;
      question = `¿Cual es el resultado de ${numberOne} / ${numberTwo}? `;
    } else {
      let divisor = (Math.floor(Math.random() * 5) + 1) * 2;
      let result = Math.floor(Math.random() * 5) + 1;
      let dividend = divisor * result;

      ecuation = result;
      question = `¿Cual es el resultado de ${dividend} / ${divisor}? `;
    }
  }

  return { question, result: ecuation };
};

export const generateMediumOperation = () => {
  const numberOne = Math.floor(Math.random() * 50) + 10; 
  const numberTwo = Math.floor(Math.random() * 50) + 10;
  const operation = Math.floor(Math.random() * 4) + 1;
  let ecuation;
  let question;

  if (operation === 1) {
    ecuation = numberOne + numberTwo;
    question = `¿Cual es el resultado de ${numberOne} + ${numberTwo}? `;
  } else if (operation === 2) {
    ecuation = numberOne - numberTwo;
    question = `¿Cual es el resultado de ${numberOne} - ${numberTwo}? `;
  } else if (operation === 3) {
    ecuation = numberOne * numberTwo;
    question = `¿Cual es el resultado de ${numberOne} * ${numberTwo}? `;
  } else {
    if (numberTwo % numberOne === 0) {
      ecuation = numberTwo / numberOne;
      question = `¿Cual es el resultado de ${numberTwo} / ${numberOne}? `;
    } else if (numberOne % numberTwo === 0) {
      ecuation = numberOne / numberTwo;
      question = `¿Cual es el resultado de ${numberOne} / ${numberTwo}? `;
    } else {
      let divisor = Math.floor(Math.random() * 10) + 2; 
      let result = Math.floor(Math.random() * 20) + 1; 
      let dividend = divisor * result;

      ecuation = result;
      question = `¿Cual es el resultado de ${dividend} / ${divisor}? `;
    }
  }

  return { question, result: ecuation };
};

export const generateHardOperation = () => {
  const numberOne = Math.floor(Math.random() * 500) + 100; 
  const numberTwo = Math.floor(Math.random() * 500) + 100;
  const operation = Math.floor(Math.random() * 4) + 1;
  let ecuation;
  let question;

  if (operation === 1) {
    ecuation = numberOne + numberTwo;
    question = `¿Cual es el resultado de ${numberOne} + ${numberTwo}? `;
  } else if (operation === 2) {
    ecuation = numberOne - numberTwo;
    question = `¿Cual es el resultado de ${numberOne} - ${numberTwo}? `;
  } else if (operation === 3) {
    ecuation = numberOne * numberTwo;
    question = `¿Cual es el resultado de ${numberOne} * ${numberTwo}? `;
  } else {
    if (numberTwo % numberOne === 0) {
      ecuation = numberTwo / numberOne;
      question = `¿Cual es el resultado de ${numberTwo} / ${numberOne}? `;
    } else if (numberOne % numberTwo === 0) {
      ecuation = numberOne / numberTwo;
      question = `¿Cual es el resultado de ${numberOne} / ${numberTwo}? `;
    } else {
      let divisor = Math.floor(Math.random() * 50) + 10; 
      let result = Math.floor(Math.random() * 50) + 1; 
      let dividend = divisor * result;

      ecuation = result;
      question = `¿Cual es el resultado de ${dividend} / ${divisor}? `;
    }
  }

  return { question, result: ecuation };
}