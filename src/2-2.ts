import * as fs from "fs";
import * as path from "path";

let inputStr: string = fs.readFileSync(path.join(__dirname, `../input/${path.basename(__filename).split("-")[0]}.txt`)).toString();
// let inputStr: string = fs.readFileSync(path.join(__dirname, `../input/test.txt`)).toString();

// Might need to split on other things here
const input: string[] = inputStr?.split("\n");

// Setup vars
let sum = 0;

// Compute
for (let i in input)
{
    const gameId = parseInt(i) + 1;
    const game = input[i].split(":")[1].trim();
    const rounds = game.split(";").map(round => round.trim());
    console.log("\n\n" + "=== " + game + " ===");
    let redMax = 0;
    let greenMax = 0;
    let blueMax = 0;
    for (const round of rounds)
    {
        console.log("  " + round);
        const draws = round.split(",").map(draw => draw.trim());
        for (const draw of draws)
        {
            console.log("    " + draw);
            const num = parseInt(draw.split(" ")[0]);
            const color = draw.split(" ")[1];
            switch (color)
            {
                case "red":
                    redMax = Math.max(redMax, num);
                    break;
                case "green":
                    greenMax = Math.max(greenMax, num);
                    break;
                case "blue":
                    blueMax = Math.max(blueMax, num);
                    break;
            }
        }
        console.log("  " + redMax + " " + greenMax + " " + blueMax);
    }
    sum += (redMax*greenMax*blueMax);
}

console.log(sum);