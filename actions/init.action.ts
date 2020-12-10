import {AbstractAction} from "../abstract/action";

import figlet from 'figlet';

import chalk from 'chalk';

export class InitAction extends AbstractAction {
    public async handle() {
        console.log(chalk.green(figlet.textSync("Klein-Cli", {
            font: "Ghost",
            horizontalLayout: "default",
            verticalLayout: "default"
        })))
    }
}