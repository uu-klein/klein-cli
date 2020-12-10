import {CommanderStatic} from 'commander';

import {AbstractAction} from "./action";

export abstract class AbstractCommand {
    constructor(protected action: AbstractAction) {
    }

    public abstract load(program: CommanderStatic): void
}

