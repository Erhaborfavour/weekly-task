const http = require('http');
let data = '';
http.get('http://jsonplaceholder.typicode.com/users',(request)=>{
    request.on('data',(nugget) => {

        data += nugget;
    });
    request.on('end', () => {
         data = JSON.parse(data)
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].name);   
        }
    })
})