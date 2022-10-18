const delay = (time) => {
    return new Promise((resolve, reject) => {
        if (!time || typeof (time) !== 'number') return reject()
        else return resolve(setTimeout(() => {
            console.log(`Fire`)
        }, time))
    })
}

delay(3000)
    .then(() => console.log('Fire after 3 sec'))
    .catch(() => console.log('Error!'));
delay("o")
    .then(() => console.log('Fire after 3 sec'))
    .catch(() => console.log('Error!'));
