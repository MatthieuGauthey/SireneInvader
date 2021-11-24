import * as fs from "fs";
import * as readLine from "readline";
import { formatEntry } from "./format.js";

const FILE_PATH = "./samples/bulk";

const timeStart = Date.now();

let i = 0;
let fileNumber = 0;
var writePath = FILE_PATH + fileNumber + ".csv";
var writeStream = fs.createWriteStream(writePath);
const reader = readLine.createInterface({
  input: fs.createReadStream("./samples/SE1.csv"),
});

var firstLine = "";

reader.on('line', function(line) {
    if (i == 0 && fileNumber == 0) {
        firstLine = line;
    }
    if (i < 10) {
        let entry = formatEntry(line);
        writeStream.write(line + '\n');
        i++;
    } else {
        fileNumber++;
        i = 0;
        writeStream.end();
        writePath = FILE_PATH + fileNumber + ".csv";
        writeStream = fs.createWriteStream(writePath);
        writeStream.write(firstLine + '\n');
    }
});

console.log("time :", Date.now() - timeStart);