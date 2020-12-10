import {AbstractAction, Inputs} from "../abstract/action";

import {_inquirer} from "../inquirers";

export class CreateAction extends AbstractAction {
    public async handle(inputs: Inputs[]) {
        _inquirer().then((result: any) => {
            console.log('inputs', inputs)
            console.log('result', result)
        });
    }
}