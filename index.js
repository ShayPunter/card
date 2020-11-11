const chalk = require("chalk");
let card = chalk.black(String.raw`
 __________________________________________________
|  ______________________________________________  |
| |                                              | |
| |               ${chalk.white.bold("Shay Punter")}         | |
| |                                              | |
| |      ${chalk.white.underline("Business Owner & Software Engineer")}       | |
| |                                              | |
| |   ${chalk.white.bold("Github 🐙")}:   ${chalk.blue.underline(
  "https://github.com/ShayPunter"
)}     | |
| |   ${chalk.white.bold("Email 📧")}:    ${chalk.blue.underline(
  "shay@shaypunter.co.uk"
)}         | |
| |   ${chalk.white.bold("Web 💻")}:      ${chalk.blue.underline(
  "https://shaypunter.co.uk"
)}            | |
| |                                              | |
| |______________________________________________| |
|__________________________________________________|

`);

console.log(card);
