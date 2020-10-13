//module.export = require('./lib/gather.js')

const GatherCall = require('../lib/gather.js');
console.log('GatherCallSecond: ', GatherCall);

let payload = {
    name : "morpheus",
    job : "leader"
}
const  gatherUser = new GatherCall('GET', 'https://reqres.in/api/users');
const  gatherPostUser = new GatherCall('POST', 'https://reqres.in/api/users', payload);
const  gatherPoke = new GatherCall('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');

gatherUser.getCall.then((res) => console.log('resUser ',res))
gatherPostUser.getCall.then((res) => console.log('resPOSTUser ',res))
gatherPoke.getCall.then((res) => console.log('resPoke ',res))

console.log('Hello world')

//gather();