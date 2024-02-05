const { createReadStream } = require('fs')
const { writeFileSync } = require("fs");

for (let i = 0; i < 1000; i++) {
  writeFileSync('./content/first.txt', `This is ${i} th time reminding you that I'm tough\n`, { flag: "a" });
}


const stream = createReadStream("../content/first.txt");

stream.on('data',(chunk) => {
    console.log(`The size of the stream is ${chunk.length}`);
})

stream.on('end', () => {
    console.log('End of the data stream');
})

stream.on("error", () => {
  console.log("Error in the data stream");
});