import {AbstractAction, Inputs} from "../abstract/action";

import {_inquirer, answersProps} from "../inquirers";

import {_download} from "../download";

// interface CreateArrayFunc<T> {
//     (length: number, value: T): Array<T>;
// }
//
// let createArray: CreateArrayFunc<any>;
//
// createArray = function<T>(length: number, value: T): Array<T> {
//     let result: T[] = [];
//     for (let i = 0; i < length; i++) {
//         result[i] = value;
//     }
//     return result;
// }
//
// createArray(3, 'x'); // ['x', 'x', 'x']

interface urlProps {
    url: string,
}

const urlList: Array<urlProps> = [
    {
        url: 'github:uu-klein/scaffold',
    },
    {
        url: 'github:uu-klein/scaffold',
    },
    {
        url: 'github:uu-klein/scaffold',
    },
]

export class CreateAction extends AbstractAction {
    public async handle(inputs: Inputs[]) {
        _inquirer().then((result: answersProps) => {
            console.log('result', result)
            //result {
            //   author: 'Klein',
            //   isRoot: true,
            //   projectName: 'Template',
            //   language: 'React',
            //   isTs: true
            // }
            _download(urlList[0].url, `${result.projectName}/${result.projectName}`)
        });
    }
}
