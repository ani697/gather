function GatherCall(type, url, payload, headers){
    this.type = type;
    this.url = url;
    this.payload = payload;
    this.headers = headers

    Object.defineProperty(this, 'get', {
        get : function(){
            return new Promise((resolve, reject)=>{
                const xhr = new XMLHttpRequest();
                xhr.open(this.type, this.url);
                if(this.payload){
                    for(let key in this.payload){ //here payload work as keys
                        xhr.setRequestHeader(key, this.headers[key]) 
                    }
                }
                xhr.send();
                xhr.onload = function(){
                    resolve(xhr.response)
                }            
            })
        }
    });
    Object.defineProperty(this, 'post', {
        get : function(){
            return new Promise((resolve, reject)=>{
                const xhr = new XMLHttpRequest();
                xhr.open(this.type, this.url);
                if(this.headers){
                    for(let key in this.headers){ 
                        xhr.setRequestHeader(key, this.headers[key]) 
                    }
                }

                xhr.send(this.payload);
                xhr.onload = function(){
                    resolve(xhr.response)
                }            
            })
        }
    });
}




//export default gather     ::- It's an ES6 way to export the module

module.exports = GatherCall