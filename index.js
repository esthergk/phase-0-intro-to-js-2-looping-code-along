// Code your solutions in this file
function writeCards(names, event) {
    const arrayForMessages = []
    for (let i = 0; i < names.length; i++) {
        arrayForMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return arrayForMessages
}

function countDown() {
    let i = 10
    while (i >= 0) {
        console.log(i--)
    }
}