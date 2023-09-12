// console.log("lover");


// const fs = require("fs");

// fs.writeFileSync("hello.txt","moiz is mern developer with good knowledge");

const input = require("./users");
const http = require("http");
const fs = require("fs");
const path = require("path");

http.createServer((req, resp) => {

    // console.log(req.url,"i love u bastarfz");
    // if(req.url === "/about"){
    //     resp.end("about");
    // }else{
    //     resp.writeHead(200,{"content-type":"application\json"})
    //     resp.write(JSON.stringify(input));
    //     resp.end();
    // }



}).listen(4500);

// let data = process.argv;
// fs.writeFileSync(data[2],data[3]);

//  console.log(__dirname,"romeo loves juliet",__filename);

const dirpath = path.join(__dirname, "files")


// let i=0;
// while(i<5){
//     fs.writeFileSync(`${dirpath}/hello${i}.txt`,"")
//     i++;
// }

// while(i<5){
//     fs.unlinkSync(`${dirpath}/hello.txt`,"")
//     i++;
// }

// console.log(dirpath);
// fs.readdir(dirpath,(error,files)=>{
//     console.log(files)
//     files.map((item)=>{
//         console.log(item)
//     })
// })

// const ext = path.extname(`${dirpath}/hello.txt`);

// console.log(path.extname(__filename))

// let string = fs.readFileSync(`${dirpath}/hello0.txt`,'utf-8');

// fs.appendFileSync(`${dirpath}/hello0.txt`,"and shreef bacha");
// console.log(string);


// fs.rename(`${dirpath}/hello0.txt`,`${dirpath}/moiz.txt`,(error)=>{
//     console.log(error);
// });

// console.log("first");
// let result = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let a = 20;
//         resolve(a);

//     }, 3000)
// });

// let fun = async () => {
//     let data = await result;
//     console.log(data + 7);
// }


// fun();
// console.log("last ended")


