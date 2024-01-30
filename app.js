// const http = require('http');

// const server = http.createServer((request,response) => {
//     if(request.url==='/'){
//         response.end("Heyyya to our Home");
//     }
//     if(request.url === '/about'){
//         response.end('This is the about page')
//     };
//     response.end(`
//     <h1>Oh Crap!</h1>
//     <p>There is some issue so please go back to home and figure it out</p>
//     <a href="/">Back Home</a>
    
    
//     `);

// })

// server.listen(5000);

const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end("Bro you got to the HomePage Spidey")
    }
    if (req.url === "/about") {
      res.end("Bro you got to the About Page Spidey");
    }
    res.end(`
    <h1>oops !</h1>
    <p>We can't see the page you are looking for .</p>
    <a href = "/">Back HomePage </a>`)
})

server.listen(5000)

const _ = require('lodash');
const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);

