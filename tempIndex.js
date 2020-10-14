const gather = require('./src/index.js')
console.log('inMainPage')

let payload = {
    name : "morpheus",
    job : "leader"
}

//gather('post', 'https://reqres.in/api/users', payload).then(val => console.log('val ',val))

//gather('get','https://pokeapi.co/api/v2/pokemon/ditto').then(val => console.log('val ',val))