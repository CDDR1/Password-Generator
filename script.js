// These arrays have the purpose of being used to generate the password
const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const caps = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ",", ".", "?", "<", ">", "/", "-", "_", "+", "=", "`", "~"];

const generatePasswordBtn = document.querySelector('.generate-password');
const passwordField = document.querySelector('.password-result');

// Checkboxes
const capsBox = document.getElementById('caps');
const numbersBox = document.getElementById('numbers');
const symbolsBox = document.getElementById('symbols');

// Get random element from array
const GetRandomElement = array => {
    const randomElement = array[Math.floor(Math.random() * array.length)];
    return randomElement;
}

// Function that generates the password
const GeneratePassword = (lowercase, caps, numbers, symbols) => {
    // Ill use a fixed number of characters just for now...
    const passwordLength = 10;
    const password = [];

    for (let i = 0; i < passwordLength; i++) {
        const character = GetRandomElement(lowercase);
        password.push(character);
    }

    return password.join('');
}

generatePasswordBtn.addEventListener('click', () => {
//    if (document.querySelector('#caps:checked') !== null) {

//    } 
    const password = GeneratePassword(lowercase);
    passwordField.textContent = password;
});
