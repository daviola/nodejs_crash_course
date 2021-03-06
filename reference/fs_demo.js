const fs = require('fs')
const path = require('path')

// Create folder
// one way to do
// fs.mkdir(path.join(__dirname, '/test'), {}, function(err) {
// another way to do
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if(err) throw err;
//     console.log("folder created")
// });

// Create, write to file and append on callback
// fs.writeFile(
//     path.join(__dirname, '/test', 'hello.txt'), 
//     'Hello World!', err => {
//         if(err) throw err;
//         console.log("File written to...");
    
//         // file append
//         fs.appendFile(
//             path.join(__dirname, '/test', 'hello.txt'), 
//             ' I love Node.js', err => {
//                 if(err) throw err;
//                 console.log("File written to...");
//         }
//         );
// }
// );

// Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data)
// });
// Rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), (err) => {
    if(err) throw err;
    console.log("file renamed")
});

