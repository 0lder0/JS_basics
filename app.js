let val

//number -> String
val = String(555)
val = String(4+4)
val = String(5.8)

// boolean -> String
val = String(true)
val = String(new Date())

//null -> String
val = String(null)

//array -> String
val = String([1, 2, 3, 4, 5])

//undefined
val = String(undefined)

// toString()
val = (true).toString()
//string -> number
val = Number("5")
//boolean -> number
val = Number(true)
val = Number(false)
//null -> number
val = Number(null)
//string -> number
val = Number("test")
//array -> number
val = Number([1, 2, 3, 4, 5])

//toString()
val = (true).toString()
//str -> int
val = parseInt("100.3")
// str -> float
val = parseInt("100.40")

console.log(val)