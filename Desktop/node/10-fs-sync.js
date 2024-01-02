const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// console.log(first, second); // output: This is a first: Hello this is a first text value <br> This is a second: Hello this is a second text value

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`,{flag: 'a'});


