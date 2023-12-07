import * as fs from "fs";
import * as path from "path";

let inputStr: string = fs.readFileSync(path.join(__dirname, `../input/${path.basename(__filename).split("-")[0]}.txt`)).toString();
//let inputStr: string = fs.readFileSync(path.join(__dirname, `../input/test.txt`)).toString();

// Might need to split on other things here
const input: string[] = inputStr?.split("\n");

// Setup vars


// Compute
for (const line of input)
{
    console.log(line);
}