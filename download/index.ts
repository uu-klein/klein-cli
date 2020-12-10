import {_console} from "../console";

const download = require('download-git-repo');

const ora = require('ora');

export const _download = (url: string, projectName: string) => {
    const spinner = ora('正在下载模板......').start();
    download(url, projectName, {clone: true}, function (err: any) {
        err ?
            _console<string>('error', '下载模板失败') :
            _console<string>('success', '成功下载模板');
        spinner.stop();
    })
};
