const symbols = require('log-symbols');

const chalk = require('chalk');

const figlet = require("figlet");

const _logo = () => console.log(chalk.green(figlet.textSync("Klein-Cli", {
    font: "Ghost",
    horizontalLayout: "default",
    verticalLayout: "default"
})));

const _status = (status, val) => {
    switch (status) {
        case 'exist':
            console.log(symbols.error, chalk.red(`${val}`));
            break;
        case 'shell-success':
            console.log(symbols.success, chalk.green(`${val}`));
            break;
        case 'shell-error':
            console.log(symbols.error, chalk.red(`exec error:${val}`));
            break;
        default:
            break;
    }
    _logo();
};

module.exports = {
    _status
}