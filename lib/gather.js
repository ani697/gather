function GatherCall(type, url, payload, headers){
    this.type = type;
    this.url = url;
    this.payload = payload;
    this.headers = headers ? headers : payload

    Object.defineProperty(this, 'getCall', {
        get : function(){
            return new Promise((resolve, reject)=>{
                const xhr = new XMLHttpRequest();
                xhr.open(this.type, this.url);
                for(let key in this.headers){
                    xhr.setRequestHeader(key, this.headers[key]) 
                }
                
                xhr.send();
                xhr.onload = function(){
                    resolve(xhr.response)
                }            
            })
        }
    });
    Object.defineProperty(this, 'postCall', {
        get : function(){
            return new Promise((resolve, reject)=>{
                const xhr = new XMLHttpRequest();
                xhr.open(this.type, this.url);
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