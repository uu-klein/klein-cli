import {CommanderStatic} from 'commander';

import {AbstractCommand} from "../abstract/command";

export class InitCommand extends AbstractCommand {
    public load(program: CommanderStatic) {
        program
            .command('init')
            .alias('i')
            .description('init')
            .action(async () => {
                await this.action.handle()
            })
    }
}