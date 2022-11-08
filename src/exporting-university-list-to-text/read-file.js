
var fs = require('fs');

try {  
    const data = fs.readFileSync('ListofNigeriaUniversities.txt', 'utf8');
    screen=JSON.parse(data);
    console.log("Data:",screen);

} catch(e) {
    console.log('Error:', e.stack);
}