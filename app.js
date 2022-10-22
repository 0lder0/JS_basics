const numbers1 = [43,54,78,23,77,15,2]
const numbers2 = new Array(22, 56, 87, 99)

let val
val = numbers1.length
val = numbers2.length

val = numbers1[3]
val = numbers1.indexOf(36)

val = Array.isArray(val)
numbers1.push(250)
numbers1.unshift(120)
numbers1.pop()
numbers1.shift()

val = numbers1.concat(numbers2)

const fruits = ['pineapple','banana','apple']
val = fruits.sort()

val = numbers1.sort(function (x, y) {
    return x + y
})
