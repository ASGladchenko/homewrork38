console.log('Homework 39')
const sumAllNumbers = (...rest) => {
    let result = 0;
    for (const restElement of rest) {
        if (typeof (restElement) !== 'number') return `Error! You can use only numbers.`
        result += restElement
    }
    return result
}

console.log(sumAllNumbers(1)) // 1
console.log(sumAllNumbers(1, 2, 3)) // 6
console.log(sumAllNumbers(1, 2, 3, 1, 2, 1, 10)) // 20
console.log(sumAllNumbers(1, '2', 3)) // Error! You can use only numbers.
console.log(sumAllNumbers([1, 2])) // Error! You can use only numbers.
console.log(sumAllNumbers({number: 1})) // Error! You can use only numbers.
console.log('End of homework 39')
console.log('Homework 40')
const userData = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
};

const renderUser = ({
                        id,
                        name,
                        username,
                        email,
                        address: {street, suite, city, zipcode, geo: {lat, lng}},
                        phone,
                        website,
                        company: {name: companyName, catchPhrase, bs}
                    }) => {
    let render = `
        <div>
            <h1>Homework 40</h1>
            <p> <span>Users ID : ${id}   </span><span>   Name : ${name} ,  NickName : ${username}  </span></p>
            <p>Email : ${email}, Phone number : ${phone}, Website : ${website}</p>
            <p>Work in ${companyName}, Business structure : ${bs}, Catch Phrase : ${catchPhrase} </p>
            <p>Lives in : ${city}, ${street}, ${suite}, Zipcode : ${zipcode}  </p>
            <p>Geolocation : lat :${lat} lng :${lng} </p>
        </div>
   `
    document.querySelector('.container').insertAdjacentHTML("afterbegin", render)
}

renderUser(userData);
console.log('<===== ')
console.log('End of homework 40');
console.log('Homework 41');
const myObjectAssign = (...rest) => {
    let result ={}
    rest.forEach((el) => {
        result =({
            ...result,
            ...el,
        })
    })
    return result
}

console.log(myObjectAssign({a: 1})); // { a: 1 }
console.log(myObjectAssign({a: 1}, {b: 2})); // { a: 1, b: 2 }
console.log(myObjectAssign({a: 1, b: 2}, {b: 3}, {a: 4, c: 5})); // { a: 4, b: 3, c: 5 }
console.log('End of homework 41');
console.log('Homework 42');

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

