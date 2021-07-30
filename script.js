// These arrays have the purpose of being used to generate the password
const lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

const caps = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', ',', '.', '?', '<', '>', '/', '-', '_', '+', '=', '`', '~'];

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
const GeneratePassword = (length, array) => {
    const password = [];

    for (let i = 0; i < length; i++) {
        const character = GetRandomElement(array);
        password.push(character);
    }

    return password.join('');
}

generatePasswordBtn.addEventListener('click', () => {
    const passwordLengthInput = document.querySelector('.password-length');
    const passwordLength = passwordLengthInput.value;
    let password;

    if (document.getElementById('caps').checked === true && 
        document.getElementById('numbers').checked === false && 
        document.getElementById('symbols').checked === false) 
    {
        const charsArray = lowercase.concat(caps);
        
        password = GeneratePassword(passwordLength, charsArray);
    } 
    else if (document.getElementById('caps').checked === false && 
            document.getElementById('numbers').checked === true && 
            document.getElementById('symbols').checked === false)
    {
        const charsArray = lowercase.concat(numbers);

        password = GeneratePassword(passwordLength, charsArray);
    }
    else if (document.getElementById('caps').checked === false && 
            document.getElementById('numbers').checked === false && 
            document.getElementById('symbols').checked === true)
    {
        const charsArray = lowercase.concat(symbols);

        password = GeneratePassword(passwordLength, charsArray);
    }
    else if (document.getElementById('caps').checked === true && 
            document.getElementById('numbers').checked === true && 
            document.getElementById('symbols').checked === false)
    {
        const charsArray = lowercase.concat(caps).concat(numbers);

        password = GeneratePassword(passwordLength, charsArray);
    }
    else if (document.getElementById('caps').checked === true && 
            document.getElementById('numbers').checked === true && 
            document.getElementById('symbols').checked === true)
    {
        const charsArray = lowercase.concat(caps).concat(numbers).concat(symbols);

        password = GeneratePassword(passwordLength, charsArray);
    }
    else if (document.getElementById('caps').checked === false && 
            document.getElementById('numbers').checked === true && 
            document.getElementById('symbols').checked === true)
    {
        const charsArray = lowercase.concat(numbers).concat(symbols);

        password = GeneratePassword(passwordLength, charsArray);
    }
    else if (document.getElementById('caps').checked === true && 
            document.getElementById('numbers').checked === false && 
            document.getElementById('symbols').checked === true)
    {
        const charsArray = lowercase.concat(caps).concat(symbols);

        password = GeneratePassword(passwordLength, charsArray);
    }
    else if (document.getElementById('caps').checked === true && 
            document.getElementById('numbers').checked === true && 
            document.getElementById('symbols').checked === false)
    {
        const charsArray = lowercase.concat(caps);

        password = GeneratePassword(passwordLength, charsArray);
    }
    else {
        password = GeneratePassword(passwordLength, lowercase);
    }
    
    passwordField.textContent = password;

    // passwordLengthInput.value = "";
});


// Copy to clipboard button
const copyBtn = document.querySelector('.copy-password');

copyBtn.addEventListener('click', () => {
    passwordField.focus();
    passwordField.select();
    document.execCommand("copy");
});