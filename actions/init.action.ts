import {AbstractAction} from "../abstract/action";

import {_console} from "../console";

export class InitAction extends AbstractAction {
    public async handle() {
        _console<string>('logo');
    }
}