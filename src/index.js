import './style.css';

// Define character set
const lowerCase = 'abcdefghijklmnopqrstuvxyz';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVXYZ';
const numbers = '0123456789';
const symbols = '£$&()*+[]@#^-_!?';

let password = '';

const createBtn = document.querySelector('.create-btn');

const passwordLengthCtrl = document.getElementById('range-slider');
const passwordLength = document.getElementById('passwordLength');

const numOfPasswordsCtrl = document.getElementById('range-slider-1');
const numOfPasswords = document.getElementById('numOfPasswords');

const passwordsBody = document.querySelector('.passwords-body');

const uppercaseCtrl = document.getElementById('uppercase');
const lowercaseCtrl = document.getElementById('lowercase');
const numbersCtrl = document.getElementById('numbers');
const symbolsCtrl = document.getElementById('symbols');

let uppercaseSelected = true;
let lowercaseSelected = true;
let numbersSelected = true;
let symbolsSelected = true;

let checkBoxChecked = 4;
const minimumChecked = 2;

/* eslint-disable */
function testPasswordStrength(password){
  let hasLower = false;
  let hasUpper = false;
  let hasNumber = false;
  let hasSymbol = false;
  let wordLength = password.length;
  let strength = '';

  for (let i = 0; i < wordLength; i++){
    if(/[a-z]/.test(password[i])){
      hasLower = true;
    } else if (/[A-Z]/.test(password[i])){
      hasUpper = true;
    } else if (/[0-9]/.test(password[i])){
      hasNumber = true;
    } else if (/[£\$&\(\)\*\+\[\]@#\^-_!\?]/.test(password[i])){
      hasSymbol = true;
    }
  }

  if (hasLower && hasUpper && hasNumber && 
    hasSymbol && wordLength >= 12){
    strength = "Strong";
  } else if ((hasLower || hasUpper) && 
    hasSymbol && wordLength >= 6 ){
    strength = "Medium";
  } else {
    strength = "Weak";
  }

  return strength;
}

/* eslint-disable */
function all(password, passwordLength, categories) {
  for (let i = 0; i < passwordLength; i++) {
    const charType = Math.round(Math.abs((Math.random() * categories - 1)));

    let index = 0;

    switch (charType) {
      case 0:
        index = Math.round(Math.abs((Math.random() * lowerCase.length - 1)));
        password += lowerCase[index];
        break;
      case 1:
        index = Math.round(Math.abs((Math.random() * upperCase.length - 1)));
        password += upperCase[index];
        break;
      case 2:
        index = Math.round(Math.abs((Math.random() * numbers.length - 1)));
        password += numbers[index];
        break;
      default:
        index = Math.round(Math.abs((Math.random() * symbols.length - 1)));
        password += symbols[index];
        break;
    }
  }

  return password;
}

function upperLowerNumbers(password, passwordLength, categories) {
  for (let i = 0; i < passwordLength; i++) {
    const charType = Math.round(Math.abs((Math.random() * categories - 1)));

    let index = 0;

    switch (charType) {
      case 0:
        index = Math.round(Math.abs((Math.random() * lowerCase.length - 1)));
        password += lowerCase[index];
        break;
      case 1:
        index = Math.round(Math.abs((Math.random() * upperCase.length - 1)));
        password += upperCase[index];
        break;
      default:
        index = Math.round(Math.abs((Math.random() * numbers.length - 1)));
        password += numbers[index];
        break;
    }
  }

  return password;
}

function upperLowerSymbols(password, passwordLength, categories) {
  for (let i = 0; i < passwordLength; i++) {
    const charType = Math.round(Math.abs((Math.random() * categories - 1)));

    let index = 0;

    switch (charType) {
      case 0:
        index = Math.round(Math.abs((Math.random() * lowerCase.length - 1)));
        password += lowerCase[index];
        break;
      case 1:
        index = Math.round(Math.abs((Math.random() * upperCase.length - 1)));
        password += upperCase[index];
        break;
      default:
        index = Math.round(Math.abs((Math.random() * symbols.length - 1)));
        password += symbols[index];
        break;
    }
  }

  return password;
}

function lowerNumbersSymbols(password, passwordLength, categories) {
  for (let i = 0; i < passwordLength; i++) {
    const charType = Math.round(Math.abs((Math.random() * categories - 1)));

    let index = 0;

    switch (charType) {
      case 0:
        index = Math.round(Math.abs((Math.random() * lowerCase.length - 1)));
        password += lowerCase[index];
        break;
      case 1:
        index = Math.round(Math.abs((Math.random() * numbers.length - 1)));
        password += numbers[index];
        break;
      default:
        index = Math.round(Math.abs((Math.random() * symbols.length - 1)));
        password += symbols[index];
        break;
    }
  }

  return password;
}

function upperNumbersSymbols(password, passwordLength, categories) {
  for (let i = 0; i < passwordLength; i++) {
    const charType = Math.round(Math.abs((Math.random() * categories - 1)));

    let index = 0;

    switch (charType) {
      case 0:
        index = Math.round(Math.abs((Math.random() * upperCase.length - 1)));
        password += upperCase[index];
        break;
      case 1:
        index = Math.round(Math.abs((Math.random() * numbers.length - 1)));
        password += numbers[index];
        break;
      default:
        index = Math.round(Math.abs((Math.random() * symbols.length - 1)));
        password += symbols[index];
        break;
    }
  }

  return password;
}

function upperLower(password, passwordLength, categories) {
  for (let i = 0; i < passwordLength; i++) {
    const charType = Math.round(Math.abs((Math.random() * categories - 1)));

    let index = 0;

    switch (charType) {
      case 0:
        index = Math.round(Math.abs((Math.random() * lowerCase.length - 1)));
        password += lowerCase[index];
        break;
      default:
        index = Math.round(Math.abs((Math.random() * upperCase.length - 1)));
        password += upperCase[index];
        break;
    }
  }

  return password;
}

function upperNumbers(password, passwordLength, categories) {
  for (let i = 0; i < passwordLength; i++) {
    const charType = Math.round(Math.abs((Math.random() * categories - 1)));

    let index = 0;

    switch (charType) {
      case 0:
        index = Math.round(Math.abs((Math.random() * numbers.length - 1)));
        password += numbers[index];
        break;
      default:
        index = Math.round(Math.abs((Math.random() * upperCase.length - 1)));
        password += upperCase[index];
        break;
    }
  }

  return password;
}

function upperSymbols(password, passwordLength, categories) {
  for (let i = 0; i < passwordLength; i++) {
    const charType = Math.round(Math.abs((Math.random() * categories - 1)));

    let index = 0;

    switch (charType) {
      case 0:
        index = Math.round(Math.abs((Math.random() * symbols.length - 1)));
        password += symbols[index];
        break;
      default:
        index = Math.round(Math.abs((Math.random() * upperCase.length - 1)));
        password += upperCase[index];
        break;
    }
  }

  return password;
}

function lowerNumbers(password, passwordLength, categories) {
  for (let i = 0; i < passwordLength; i++) {
    const charType = Math.round(Math.abs((Math.random() * categories - 1)));

    let index = 0;

    switch (charType) {
      case 0:
        index = Math.round(Math.abs((Math.random() * lowerCase.length - 1)));
        password += lowerCase[index];
        break;
      default:
        index = Math.round(Math.abs((Math.random() * numbers.length - 1)));
        password += numbers[index];
        break;
    }
  }

  return password;
}

function lowerSymbols(password, passwordLength, categories) {
  for (let i = 0; i < passwordLength; i++) {
    const charType = Math.round(Math.abs((Math.random() * categories - 1)));

    let index = 0;

    switch (charType) {
      case 0:
        index = Math.round(Math.abs((Math.random() * lowerCase.length - 1)));
        password += lowerCase[index];
        break;
      default:
        index = Math.round(Math.abs((Math.random() * symbols.length - 1)));
        password += symbols[index];
        break;
    }
  }

  return password;
}

function numbersSymbols(password, passwordLength, categories) {
  for (let i = 0; i < passwordLength; i++) {
    const charType = Math.round(Math.abs((Math.random() * categories - 1)));

    let index = 0;

    switch (charType) {
      case 0:
        index = Math.round(Math.abs((Math.random() * numbers.length - 1)));
        password += numbers[index];
        break;
      default:
        index = Math.round(Math.abs((Math.random() * symbols.length - 1)));
        password += symbols[index];
        break;
    }
  }

  return password;
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

function renderPasswords(passwords){
  removeAllChildNodes(passwordsBody);

  for (let i = 0; i < passwords.length; i++){
    const row = document.createElement('div');
    row.classList.add("px-2", "py-1");

    const passwordCreated = document.createElement('p');
    passwordCreated.textContent = passwords[i].password;
    passwordCreated.classList.add("text-center", "fs-4");
    
    row.appendChild(passwordCreated);
    passwordsBody.appendChild(row);
  }
}

function generate() {
  password = '';

  const passwordLength = passwordLengthCtrl.value;

  if (uppercaseSelected && lowercaseSelected && symbolsSelected && numbersSelected) {
    password = all('', passwordLength, 4);
  } else if (uppercaseSelected && lowercaseSelected && numbersSelected) {
    password = upperLowerNumbers('', passwordLength, 3);
  } else if (uppercaseSelected && lowercaseSelected && symbolsSelected) {
    password = upperLowerSymbols('', passwordLength, 3);
  } else if (lowercaseSelected && numbersSelected && symbolsSelected) {
    password = lowerNumbersSymbols('', passwordLength, 3);
  } else if (uppercaseSelected && numbersSelected && symbolsSelected) {
    password = upperNumbersSymbols('', passwordLength, 3);
  } else if (uppercaseSelected && lowercaseSelected) {
    password = upperLower('', passwordLength, 2);
  } else if (uppercaseSelected && numbersSelected) {
    password = upperNumbers('', passwordLength, 2);
  } else if (uppercaseSelected && symbolsSelected) {
    password = upperSymbols('', passwordLength, 2);
  } else if (lowercaseSelected && numbersSelected) {
    password = lowerNumbers('', passwordLength, 2);
  } else if (lowercaseSelected && symbolsSelected) {
    password = lowerSymbols('', passwordLength, 2);
  } else if (numbersSelected && symbolsSelected) {
    password = numbersSymbols('', passwordLength, 2);
  }

  return password;
}

function generateMultiple() {
  let maxNum = numOfPasswordsCtrl.value;
  
  let newPassword = '';
  let newPasswordStrength = '';
  let multiplePasswords = [];
  let i = 0;

  do {
    newPassword = generate();
      
    newPasswordStrength = testPasswordStrength(newPassword);

    multiplePasswords.push({
      password: newPassword,
      strength: newPasswordStrength
    });

    i += 1;
  } while (i < maxNum);

  renderPasswords(multiplePasswords);
}

passwordLengthCtrl.addEventListener('input', (e) => {
  passwordLength.textContent = e.target.value;
});

numOfPasswordsCtrl.addEventListener('input', (e) => {
  numOfPasswords.textContent = e.target.value;
});

uppercaseCtrl.addEventListener('change', (e) => {
  if (e.target.checked) {
    checkBoxChecked += 1;
    uppercaseSelected = true;
  } else if (checkBoxChecked === minimumChecked) {
    uppercaseCtrl.checked = true;
  } else {
    checkBoxChecked -= 1;
    uppercaseSelected = false;
  }
});

lowercaseCtrl.addEventListener('change', (e) => {
  if (e.target.checked) {
    checkBoxChecked += 1;
    lowercaseSelected = true;
  } else if (checkBoxChecked === minimumChecked) {
    lowercaseCtrl.checked = true;
  } else {
    checkBoxChecked -= 1;
    lowercaseSelected = false;
  }
});

numbersCtrl.addEventListener('change', (e) => {
  if (e.target.checked) {
    checkBoxChecked += 1;
    numbersSelected = true;
  } else if (checkBoxChecked === minimumChecked) {
    numbersCtrl.checked = true;
  } else {
    checkBoxChecked -= 1;
    numbersSelected = false;
  }
});

symbolsCtrl.addEventListener('change', (e) => {
  if (e.target.checked) {
    checkBoxChecked += 1;
    symbolsSelected = true;
  } else if (checkBoxChecked === minimumChecked) {
    symbolsCtrl.checked = true;
  } else {
    checkBoxChecked -= 1;
    symbolsSelected = false;
  }
});

// For all screens
createBtn.addEventListener('click', () => {
  generateMultiple();
});