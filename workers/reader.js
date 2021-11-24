import fs from 'fs';
import readLine from 'readline';
import { formatEntry } from './format.js';


const readInterface = readLine.createInterface({
    input: fs.createReadStream('./samples/SE1.csv'),
});

readInterface.on('line', function(line) {
    let entry = formatEntry(line);
    console.log(entry);
    //database entry ?
});