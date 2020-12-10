import chalk from "chalk";

import figlet from "figlet";

import {props, statusProps} from "../types";

const logo = () => console.log(chalk.green(figlet.textSync("Klein-Cli", {
    font: "Ghost",
    horizontalLayout: "default",
    verticalLayout: "default"
})))

export function _console<T extends props<T>>(status: statusProps, info?: T): void {
    switch (status) {
        case "logo":
            break;
        case "error":
            info === undefined ?
                console.log(chalk.red('error')) : console.log(chalk.red(info));
            break;
        case "fail":
            info === undefined ?
                console.log(chalk.red('fail')) : console.log(chalk.red(info));
            break;
        case "success":
            info === undefined ?
                console.log(chalk.green('success')) : console.log(chalk.green(info));
            break;
        default:
            break;
    }

    logo();
}
