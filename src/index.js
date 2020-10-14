//module.export = require('./lib/gather.js')

const GatherCall = require('../lib/gather.js');

let payload = {
    name : "morpheus",
    job : "leader"
}


function gather(type, url, payload, headers){
    let gatherUser =  new GatherCall(type, url, payload, headers)
    return gatherUser[type]
}

//gather('post', 'https://reqres.in/api/users', payload).then(val => console.log('val ',val))

module.exports = gather


