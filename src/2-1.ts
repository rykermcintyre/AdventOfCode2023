import * as fs from "fs";
import * as path from "path";

let inputStr: string = fs.readFileSync(path.join(__dirname, `../input/${path.basename(__filename).split("-")[0]}.txt`)).toString();
// let inputStr: string = fs.readFileSync(path.join(__dirname, `../input/test.txt`)).toString();

// Might need to split on other things here
const input: string[] = inputStr?.split("\n");

// Setup vars
const impossibleGames: Set<number> = new Set();

// Compute
for (let i in input)
{
    const gameId = parseInt(i) + 1;
    const game = input[i].split(":")[1].trim();
    const rounds = game.split(";").map(round => round.trim());
    console.log("\n\n" + "=== " + game + " ===");
    for (const round of rounds)
    {
        console.log("  " + round);
        const draws = round.split(",").map(draw => draw.trim());
        let redTotal = 0;
        let greenTotal = 0;
        let blueTotal = 0;
        for (const draw of draws)
        {
            console.log("    " + draw);
            const num = parseInt(draw.split(" ")[0]);
            const color = draw.split(" ")[1];
            switch (color)
            {
                case "red":
                    redTotal += num;
                    break;
                case "green":
                    greenTotal += num;
                    break;
                case "blue":
                    blueTotal += num;
                    break;
            }
        }
        console.log("  " + redTotal + " " + greenTotal + " " + blueTotal);

        if (redTotal > 12 || greenTotal > 13 || blueTotal > 14)
        {
            console.log("*** IMPOSSIBLE ***");
            impossibleGames.add(gameId);
            break;
        }
    }
}

let total = 0;
for (const gameId of impossibleGames)
{
    total += gameId;
}
console.log(5050 - total);