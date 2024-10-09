const passBox = document.querySelector("#password");
const lenght = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

const allChars = upperCase + lowerCase + number + symbol;


function createPassword(){
    let password = "";
    password = password + upperCase[Math.floor(Math.random() * upperCase.length)];
    password = password + lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password = password + number[Math.floor(Math.random() * number.length)];
    password = password + symbol[Math.floor(Math.random() * symbol.length)];

    while(lenght > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passBox.value = password;
};

function copyPass(){
    passBox.select();
    document.execCommand("copy");
    passBox.value = "";
}