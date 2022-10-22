const firstname = 'Lilii'
const surname = 'Older'
const email = 'lilii-ann.older@voco.ee'
const dep = 'IKT'

let result = "<ul>"+
    "<li><b>Name:</b>" + firstname + "</li>"+
    "<li><b>Surname:</b>" + surname + "</li>"+
    "<li><b>Email:</b>" + email + "</li>"+
    "<li><b>Department:</b>" + dep + "</li>"+
    '</ul>'

result = `
    <ul>
        <li><b>Name:</b> ${firstname}</li>
        <li><b>Surname:</b> ${surname}</li>
        <li><b>Email:</b> ${email}</li>
        <li><b>Department:</b> ${dep}</li>
    </ul>`


console.log(result)
document.body.innerHTML = result
