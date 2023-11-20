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
    alert("Введи число!");
    getNumberForUser();
  }
}

function guessNumber(randomInt, mumberOfAttempt) {
  mumberOfAttempt--;
  let numberForUser = getNumberForUser();
  if (number === 0) {
    randomInt = getRandomInt(min, max);
    number += 1;
  }
  if (mumberOfAttempt === 0) {
    if (confirm("Попытки закончились, хотите сыграть еще?")) {
      start();
    }
  } else {
    console.log(`Пользователь: ${numberForUser} Компьютер: ${randomInt} Попытки: ${mumberOfAttempt}`);
    checkingNumber(numberForUser, randomInt, mumberOfAttempt);
  }
}

function checkingNumber(user, computer, mumberOfAttempt) {
  if (user === computer) {
    if (confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?")) {
      start();
    }
  } else {
    if (user > computer) {
      alert(`"Загаданное число меньше, осталось попыток ${mumberOfAttempt}"`);
    } else {
      alert(`"Загаданное число больше, осталось попыток ${mumberOfAttempt}"`);
    }
    guessNumber(computer, mumberOfAttempt);
  }
}

// — спрашивает пользователя: "Угадай число от 1 до 100".
// — если пользователь нажимает "Отмена", то игра заканчивается и выводится сообщение "Игра окончена".
function start() {
  if (confirm("Угадай число от 1 до 100")) {
    const randomInt = getRandomInt(min, max);
    guessNumber(randomInt, 10);
  } else {
    alert("Игра окончена...");
  }
}

let resualt = start();
