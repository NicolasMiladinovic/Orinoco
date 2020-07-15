const app = document.getElementById('root')
const p1 = document.getElementById('p1')

const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container)


let request = new XMLHttpRequest()
request.open('GET', 'http://localhost:3000/api/teddies/5beaa8bf1c9d440000a57d94', true)
request.onload = function () {
    // Begin accessing JSON data here
    let data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
        // VERSION QUAND APPEL RETOURNE PLUSIEURS OBJ
        // data.forEach((teddy) => {
        //     const card = document.createElement('div')
        //     card.setAttribute('class', 'card')

        //     const h1 = document.createElement('h1')
        //     h1.textContent = teddy.name

        //     const p = document.createElement('p')
        //     teddy.description = teddy.description.substring(0, 300)
        //     p.textContent = ${teddy.description}...

        //     container.appendChild(card)
        //     card.appendChild(h1)
        //     card.appendChild(p)
        // })

        // VERSION QUAND APPEL RETOURNE 1 OBJ
        const card = document.createElement('div')
        card.setAttribute('class', 'card')

        const name = document.createElement('h1')
        name.textContent = data.name

        const id = document.createElement('h2')
        id.textContent = data._id

        const price = document.createElement('h2')
        price.textContent = data.price

        container.appendChild(card)
        card.appendChild(name)
        card.appendChild(id)
        card.appendChild(price)




    } else {
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = "Gah, it's not working!"
        app.appendChild(errorMessage)
    }
}

request.send()