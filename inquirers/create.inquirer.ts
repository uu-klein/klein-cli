import inquirer from 'inquirer';

import {answersProps} from "../types";

export const _inquirer: () =>
    Promise<answersProps> = async () =>
    await inquirer.prompt([
        {
            type: 'input',
            name: 'author',
            message: () => '请输入作者名称',
            default: 'Klein',
        },
        {
            type: 'confirm',
            name: 'isRoot',
            default: true,
            message: (answers: answersProps) => `大神${answers.author}当前目录是根目录`,
        },
        {
            type: 'input',
            name: 'projectName',
            default: 'Template',
            message: (answers: answersProps) => `大神${answers.author}请输入项目名称`,
        },
        {
            name: 'language',
            type: 'list',
            message: (answers: answersProps) => `大神${answers.author}请选择使用的语言`,
            default: 'React',
            choices: [
                {
                    name: 'React',
                    value: 'React',
                },
                {
                    name: 'Vue',
                    value: 'Vue',
                },
                {
                    name: "Angular",
                    value: 'Angular',
                },
            ],
        },
        {
            type: 'confirm',
            name: 'isTs',
            default: true,
            message: (answers: answersProps) => `大神${answers.author}是否使用TypeScript`,
        },
    ]);
