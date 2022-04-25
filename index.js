//ok so we need an array that holds all the characters
//make the button(function) generate 4 random passwords
//display each password in its respective input box
//set the password length(extra)
//1 click copy(think of copy this code sections)*extra

let characters = ["abcdefghijklmnopqrstuvwxyz{|}~"]
let password = document.getElementById("pass")

function generate(){
    
    
    
    for(let i = 0; i < length; i ++){
        characters = (Math.random().toString(16).substring(2,length))
        password.value = characters
    }
    
    
}

