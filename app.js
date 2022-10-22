console.log('For loop')
for (let i = 0; i < 10; i++) {
    if(i == 5){
        //break
        continue
    }
    console.log(i)
}

console.log('while loop')
let number1 = 0;
while (number1 < 10){
    //console.log(number1)
    //number1++
}

console.log('do-while loop')
let number2 = 11;
do {
    console.log(number2)
    number2++
} while(number2 < 10)

const cars = ['Audi', 'Tesla', 'BMW']
cars.forEach((car) => {
    console.log(car)
})