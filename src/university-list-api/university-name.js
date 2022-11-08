
const  printUniNames = require('./get-result');
const prompt = require('prompt-sync')();

const uniCountry=prompt("Enter country name ");

async function main(){
    await printUniNames(uniCountry);
}

main();
