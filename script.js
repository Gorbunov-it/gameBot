let number = 0;
const min = 1;
const max = 100;

// Функция получения числа от компьютера
function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

// Функция проверки значения на число
const isFiniteOrNull = function (num) {
  if (num && num.trim() !== "") {
    return !!isFinite(num.trim().replace(",", ".").trim());
  } else {
    return false;
  }
};

// Функция получения числа от пользователя
function getNumberForUser() {
  let variable = prompt("Введите число от 1 до 100");
  if (isFiniteOrNull(variable)) {
    return parseFloat(variable.replace(",", ".").trim());
  } else {
    getNumberForUser();
  }
}

function guessNumber(randomInt) {
  let numberForUser = getNumberForUser();
  if (number === 0) {
    randomInt = getRandomInt(min, max);
    number += 1;
  }
  console.log(`Пользователь: ${numberForUser} Компьютер: ${randomInt}`);
  checkingNumber(numberForUser, randomInt);
}

function checkingNumber(user, computer) {
  if (user === computer) {
    alert(`"Поздравляю, Вы угадали!!!".`);
  } else if (user > computer) {
    alert(`"Загаданное число меньше"`);
    guessNumber(computer);
  } else {
    alert(`"Загаданное число больше"`);
    guessNumber(computer);
  }
}

// — спрашивает пользователя: "Угадай число от 1 до 100".
// — если пользователь нажимает "Отмена", то игра заканчивается и выводится сообщение "Игра окончена".
function start() {
  if (confirm(`"Угадай число от 1 до 100"`)) {
    const randomInt = getRandomInt(min, max);
    guessNumber(randomInt);
  } else {
    alert(`"Игра окончена".`);
  }
}

let resualt = start();
