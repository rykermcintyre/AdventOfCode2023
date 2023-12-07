import * as fs from "fs";
import * as path from "path";

let inputStr: string = fs.readFileSync(path.join(__dirname, `../input/${path.basename(__filename).split("-")[0]}.txt`)).toString();

// Might need to split on other things here
let input: string[] = inputStr?.split("\n");

// Setup vars
let total = 0;
const isNumber = new RegExp("^[0-9]$");

// Compute
for (const line of input)
{
    let digit = "";
    for (const char of line)
    {
        if (isNumber.test(char))
        {
            digit = digit.concat(char);
        }
    }
    const number = parseInt(digit[0].concat(digit[digit.length - 1]));
    total += number;
}

console.log(total);