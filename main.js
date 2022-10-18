

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
            <p> <span>Users ID : ${id}</span> <span>Name : ${name} ,  NickName : ${username}  </span></p>
            <p>Email : ${email}, Phone number : ${phone}, Website : ${website}</p>
            <p>Work in ${companyName}, Business structure : ${bs}, Catch Phrase : ${catchPhrase} </p>
            <p>Lives in : ${city}, ${street}, ${suite}, Zipcode : ${zipcode}  </p>
            <p>Geolocation : lat :${lat} lng :${lng} </p>
        </div>
   `
    document.querySelector('.container').insertAdjacentHTML("afterbegin", render)
}
renderUser(userData);