const chalk = require("chalk");
let card = chalk.black(String.raw`
 __________________________________________________
|  ______________________________________________  |
| |                                              | |
| |            ${chalk.white.bold("Oscar Chavez / oschvr")}             | |
| |                                              | |
| |        ${chalk.white.underline("Cloud 🌥  & Software 🛠  Engineer")}       | |
| |                                              | |
| |   ${chalk.white.bold("Twitter 🐦")}:  ${chalk.blue.underline(
  "https://twitter.com/oschvr"
)}    | |
| |   ${chalk.white.bold("Github 🐙")}:   ${chalk.blue.underline(
  "https://github.com/oschvr"
)}     | |
| |   ${chalk.white.bold("Email 📧")}:    ${chalk.blue.underline(
  "oschvr@protonmail.com"
)}         | |
| |   ${chalk.white.bold("Web 💻")}:      ${chalk.blue.underline(
  "https://oschvr.com"
)}            | |
| |                                              | |
| |______________________________________________| |
|__________________________________________________|

`);

console.log(card);
