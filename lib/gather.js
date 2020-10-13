function GatherCall(type, url, payload){
    console.log('type, url, payload: ', type, url, payload);
    this.type = type;
    this.url = url;
    this.payload = payload;
    Object.defineProperty(this, 'getCall', {
        get : function(){
            console.log('IN fun')
            return new Promise((resolve, reject)=>{
                const xhr = new XMLHttpRequest();
                xhr.open(this.type, this.url);
                xhr.send();
                xhr.onload = function(){
                    //console.log('xhr ',xhr.response)
                    resolve(xhr.response)
                }            
            })
        }
    });
    Object.defineProperty(this, 'postCall', {
        get : function(){
            console.log('IN fun')
            return new Promise((resolve, reject)=>{
                const xhr = new XMLHttpRequest();
                xhr.open(this.type, this.url);
                xhr.send(this.payload);
                xhr.onload = function(){
                    //console.log('xhr ',xhr.response)
                    resolve(xhr.response)
                }            
            })
        }
    });
}


// const gather = (url) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://reqres.in/api/users');
//     xhr.send();
// }

// console.log('in GATHER')


//export default gather     ::- It's an ES6 way to export the module

module.exports = GatherCall