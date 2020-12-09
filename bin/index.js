#!/usr/bin/env node

const fs = require('fs');
const program = require('commander');
const {_status} = require("../lib/prompt");
const {_shell} = require("../lib/shell");
const {_inquirer} = require("../lib/inquirer");


program
    .version('1.0.0', '-v, --version')
    .description(`klein's`)
    .command('create <name>')
    .action((name) => {
        if (!fs.existsSync(name)) {
            (async () => {
                _inquirer().then((result) => {
                    console.log('answers', result);
                    _shell()
                })
            })();
        } else {
            _status('exist', '项目已经存在');
        }
    })


program.parse(process.argv)