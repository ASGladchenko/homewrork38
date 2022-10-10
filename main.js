let httpGet = ({method = "", url = "", requestHeaders = {name: '', value: ''}, body = { }}) => {
    let request = new XMLHttpRequest()
    request.open(method.toUpperCase(), url)
    if (method.toUpperCase() !== "GET") {
        request.setRequestHeader(requestHeaders.name, requestHeaders.value)
        request.send(JSON.stringify(body))
    } else {
        request.send()
    }
    return new Promise((resolve, reject) => {
        request.onload = () => {
            if (request.status < 200 || request.status > 299) {
                return console.log('Some problem you status - ' + request.status)
            }
            resolve(request.response)
        }
        request.onerror = () => reject(`Error-status : ${request.status}`)

    })
}

httpGet({
    method: "post",
    url: "https://jsonplaceholder.typicode.com/posts",
    requestHeaders: {
        name: 'Content-type',
        value: "application/json; charset=UTF-8",
    },
    body: {
        title: 'dfghj',
        body: 'jhjhjfkjf',
        userId: '1',
    },
}).then((resolve) => JSON.parse(resolve)).then(result => console.log(result)).catch(reject => console.log(reject))


