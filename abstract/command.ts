import {CommanderStatic} from 'commander';

import {AbstractAction} from "./action";

import {props} from "../types";

export abstract class AbstractCommand {
    constructor(protected action: AbstractAction) {
    }

    public abstract load<T extends props<T>>(program: CommanderStatic): void
}

