const fetch = require('node-fetch');

module.exports = async function getUniversities(countryName){
    const url = 'http://universities.hipolabs.com/search?name=&country='+countryName;
    const response = await fetch(url);
    const result = await response.json();

    // console.log("url", url);

    return result;
}
