

// const http = require("http");
// const port = 5000;

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Home Page is always open");
//   } else if (req.url === "/about") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("About Page");
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Error Page");
//   }
// });

// server.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// const {readFile} = require('fs')

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path,'utf8',(err,data) => {
//             if(err){
//                 reject(err);
//             }else{
//                 resolve(data)
//             }

//         })
//     })
// }

// getText('./content/first.txt').then(result => console.log(result))
// .catch(err => console.log(err))

