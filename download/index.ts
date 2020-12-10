import {_console} from "../console";

import {props} from "../types";

const download = require('download-git-repo');

const ora = require('ora');

export function _download<T extends props<T>>(url: T, projectName: T): void {
    const spinner = ora('正在下载模板......').start();
    download(url, projectName, {clone: true}, function (err: any) {
        err ?
            _console<string>('error', '下载模板失败') :
            _console<string>('success', '成功下载模板');
        spinner.stop();
    })
}