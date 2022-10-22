const firstname = 'Lilii'
const surname = 'Older'

let val = firstname + ' ' + surname
val = 'lilii'
val += surname
val = firstname.toUpperCase()
val = surname.toLowerCase()
val = surname[0]
val = surname.indexOf('o')
val = surname.lastIndexOf('l')
val = surname.charAt(2)
val = surname.charAt(surname.length - 1)
val = surname.substring(0, 4)
val = surname.slice(0, 4)
val = surname.slice(-3)

const tags = 'JS, HTML, PY'
val = tags.split(',')



console.log(val[1].trim())