
const getUniversities = require('./university-list-api/get-universities');

module.exports = async function printUniNames(uniCountry){
    const result = await getUniversities(uniCountry);
    const nameOnlyRecords = result.map(record => record.name);
    console.log(nameOnlyRecords);
}
