//ok so we need an array that holds all the characters
//make the button(function) generate 4 random passwords
//display each password in its respective input box
//set the password length(extra)
//1 click copy(think of copy this code sections)*extra


let password = document.getElementById("pass")

function generateP(){
    let characters = "abcdefghijklmnopqrstuvwxyz{|}~" + "?0123456789"
    let passw = ' '
    for(let i = 0; i <= 8; i ++){
        let char = Math.floor(Math.random() * characters.length + 1)
        passw += characters.charAt(char)
    }
    return passw
}

function passRun(){
     password.value = generateP()
}