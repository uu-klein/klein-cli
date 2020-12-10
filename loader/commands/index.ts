import {CommanderStatic} from 'commander';

import {InitAction, CreateAction} from "../../actions";

import {InitCommand, CreateCommand} from "../../commands";

export class CommandLoader {
    public static load(name: string, program: CommanderStatic): void {
        switch (name) {
            case 'init':
                new InitCommand(new InitAction()).load(program)
                break;
            case 'create':
                new CreateCommand(new CreateAction()).load(program)
                break;
            default:
                break;
        }
    }
}