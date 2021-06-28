const http = require('http');
let data = "";
http.get("http://jsonplaceholder.typicode.com/users",(res)=>{
    res.on('data',(fidel) => {
        data += fidel;
    });
    res.on('end', () => {
         data = JSON.parse(data)
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].name);   
        }
    })
})