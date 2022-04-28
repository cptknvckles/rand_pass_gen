//ok so we need an array that holds all the characters
//make the button(function) generate 4 random passwords
//display each password in its respective input box
//set the password length(extra)
//1 click copy(think of copy this code sections)*extra
//man this code is FUGLY
//////////////////////////////////
///////////////////////////////////
////////////
//PLEASE UPDATE WHEN YOU CAN FIGURE OUT IF ELSE ON BUTTON VALUES K THX


let password = document.getElementById("pass")
let password1 = document.getElementById("pass1")
let password2 = document.getElementById("pass2")
let password3 = document.getElementById("pass3")


function generate8(){
    let characters = "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~"
    let passw = ' '
    for(let i = 0; i <= 7; i ++){
        let char = Math.floor(Math.random() * characters.length)
        passw += characters.charAt(char)
    }
    return passw
    
}
function generate12(){
    let characters = "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~"
    let passw = ' '
    for(let i = 0; i <= 11; i ++){
        let char = Math.floor(Math.random() * characters.length)
        passw += characters.charAt(char)
    }
    return passw
    
}

function generate16(){
    let characters = "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~"
    let passw = ' '
    for(let i = 0; i <= 15; i ++){
        let char = Math.floor(Math.random() * characters.length)
        passw += characters.charAt(char)
    }
    return passw
    
}

function passRun8(){
     password.value = generate8()
     password1.value = generate8()
     password2.value = generate8()
     password3.value = generate8()
}

function passRun12(){
    password.value = generate12()
    password1.value = generate12()
    password2.value = generate12()
    password3.value = generate12()
}

function passRun16(){
    password.value = generate16()
    password1.value = generate16()
    password2.value = generate16()
    password3.value = generate16()
}
