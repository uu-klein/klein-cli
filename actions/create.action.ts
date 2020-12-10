import {AbstractAction} from "../abstract/action";

import {_inquirer} from "../inquirers";

import {_download} from "../download";

import {answersProps, props} from "../types";

const urlList: Array<props<string>> = [
    'github:uu-klein/scaffold',
    'github:uu-klein/scaffold',
    'github:uu-klein/scaffold',
]

export class CreateAction extends AbstractAction {
    public async handle(inputs: string[]) {
        _inquirer().then((result: answersProps) => {
            console.log('result', result)
            //result {
            //   author: 'Klein',
            //   isRoot: true,
            //   projectName: 'Template',
            //   language: 'React',
            //   isTs: true
            // }
            _download<string>(urlList[0], `${result.projectName}/${result.projectName}`)
        });
    }
}
