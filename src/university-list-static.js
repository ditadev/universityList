const fetch = require('node-fetch');

async function fetchUniRecords(country) {
    const response = await fetch('http://universities.hipolabs.com/search?name=&country=nigeria');
    const records = await response.json();
    
    return records;
}


async function printUniNammes() {
    const records = await fetchUniRecords();
    const nameOnlyRecords = records.map(record => record.name);

    console.log("nameOnlyRecords =", nameOnlyRecords);
}

async function main () {
    await printUniNammes();
}

main();

