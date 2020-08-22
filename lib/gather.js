const gather = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://reqres.in/api/users');
    xhr.send();
}

console.log('in GATHER')


//export default gather     ::- It's an ES6 way to export the module

module.exports = gather