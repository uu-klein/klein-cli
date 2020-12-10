#!/usr/bin/env node
"use strict";
console.log('hello');
var program = require('commander');
program
    .version('0.1.0')
    .option('-C, --chdir <path>', 'change the working directory')
    .option('-c, --config <path>', 'set config path. defaults to ./deploy.conf')
    .option('-T, --no-tests', 'ignore test hook');
program
    .command('setup [env]')
    .description('run setup commands for all envs')
    .action(function (env, options) {
    var mode = options.setup_mode || "normal";
    env = env || 'all';
    console.log('setup for %s env(s) with %s mode', env, mode);
});
program.parse(process.argv);
