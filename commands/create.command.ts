import {CommanderStatic} from 'commander';

import {AbstractCommand} from "../abstract/command";

export class CreateCommand extends AbstractCommand {
    public load(program: CommanderStatic) {
        program
            .command('create')
            .alias('c')
            .description('create')
            .action(async (name: string[]) => {
                await this.action.handle<string[]>(name)
            })
    }
}