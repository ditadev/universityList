const fetch = require('node-fetch');
const fs = require ('fs');
const prompt = require('prompt-sync')();

let country=prompt('Enter name of country you wish to see it universities ');
async function getFile(){
const response = await fetch('http://universities.hipolabs.com/search?name=&country='+country);
const data = await response.json()
const show=JSON.stringify(data);
// console.log("Data:",show);
return show;
}

async function saveFile(){
    const display = await getFile();
// console.log("Data:", screen)
    fs.writeFile("ListofUniversities.txt",display,function(err){
        if(err){
            console.log(err);
        }
    })
 

}

saveFile();

