const inquirer = require('inquirer');

const _inquirer = async () => await inquirer.prompt([
    {
        type: 'input',
        name: 'author',
        message: () => '请输入作者名称',
        default: 'klein',
    },
    {
        type: 'confirm',
        name: 'isRoot',
        default: true,
        message: (answers) => `大神${answers.author}当前目录是根目录`,
    },
    {
        name: 'language',
        type: 'list',
        message: (answers) => `大神${answers.author}请选择使用的语言`,
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
        message: (answers) => `大神${answers.author}是否使用TypeScript`,
    },
]);

module.exports = {
    _inquirer
}