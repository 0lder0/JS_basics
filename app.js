/*
if(condition){
        if statements
} else {
        else statements
}

== equal -> ===
!= not equal -> !==
 */

/*let color = 'red';

if(color === 'red'){
    console.log('Stop!')
} else if(color === 'yellow'){
    console.log('Attention!')
} else if(color === 'green'){
    console.log("GO!")
} else{
    console.log("Error")
}
/*

 */
const name = 'Kadi'
const age = 40

if(age > 0 && age <= 12){
    console.log(`${name} on laps`)
} else if(age > 12 && age < 18){
    console.log(`${name} on noorem`)
} else {
    console.log(`${name} on täiskasvanu`)
}

let id = 5
if(id === 100){
    console.log("ok")
} else{
    console.log('no')
}

//? - ternary
console.log(id === 100 ? "ok":"no")

//switch
const color = 'red'

switch (color) {
    case "red":
        console.log('stop!')
        break;
    default:
        console.log('error!')
}
