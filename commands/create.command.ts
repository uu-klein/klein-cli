import {CommanderStatic} from 'commander';

import {AbstractCommand} from "../abstract/command";

import {Inputs} from "../abstract/action";

export class CreateCommand extends AbstractCommand {
    public load(program: CommanderStatic) {
        program
            .command('create <name>')
            .alias('c')
            .description('create')
            .action(async (name: Inputs[]) => {
                await this.action.handle(name)
            })
    }
}