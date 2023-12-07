import * as fs from "fs";
import * as path from "path";

let inputStr: string = fs.readFileSync(path.join(__dirname, `../input/${path.basename(__filename).split("-")[0]}.txt`)).toString();
// let inputStr: string = fs.readFileSync(path.join(__dirname, `../input/test.txt`)).toString();

// Might need to split on other things here
let input: string[] = inputStr?.split("\n");

// Setup vars
let total = 0;
const isNumber = new RegExp("^[0-9]$");
const digitMap: Record<string, string> = {
    "one": "1",
    "two": "2",
    "three": "3",
    "four": "4",
    "five": "5",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "nine": "9",
};

// Compute
for (const line of input)
{
    let diggy = "";
    for (let idx = 0; idx < line.length; idx++)
    {
        const char = line[idx];
        if (isNumber.test(char))
        {
            diggy = diggy.concat(char);
        }
        else
        {
            for (const digit in digitMap)
            {
                if (line.slice(idx, idx + digit.length) === digit)
                {
                    diggy = diggy.concat(digitMap[digit]);
                    break;
                }
            }
        }
    }
    const number = parseInt(diggy[0].concat(diggy[diggy.length - 1]));
    total += number;
}

console.log(total);