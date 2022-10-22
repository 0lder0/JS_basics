/*function greeting(name){
    // console.log(`Hello, ${name}!`)
    return `Hello, ${name}!`
}

//let greet = greeting('Lilii')
//console.log(greet)

const square = function (number){
    return number * number
}

//let result = square(3)
//console.log(result)
/*

 */
(function (){
    console.log('Function is running')
})();

(function (name){
    console.log(`Hello, ${name}!`)
})('Lilii')

const todo = {
    add: function (){
        console.log('add to do...')
    },
    edit: function (){
        console.log('edit to do...')
    },
    delete:function (){
        console.log('delete to do...')
    }
}

todo.add()
todo.delete()
todo.edit()
