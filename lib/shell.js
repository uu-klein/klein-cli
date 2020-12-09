const shell = require('shelljs');

const ora = require('ora');

const {_status} = require("./prompt");

const remote = 'https://github.com/uu-klein/_react-ts-cli.git';

const _shell = () => {
    const spinner = ora('正在创建模板').start();

    shell.exec(`git clone ${remote} --depth=1`, (error, stdout, stderr) => {
        if (error) {
            spinner.stop()
            _status('shell-error', error);
            return
        }
        // console.log(`${stdout}`)
        // console.log(`${stderr}`)
        spinner.stop()
        _status('shell-success', '项目已经构建完成');
    });
};

module.exports = {
    _shell,
}
