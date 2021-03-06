#!/usr/bin/env node

import commander from "commander";

import {CommanderStatic} from 'commander';

import {CommandLoader} from "../loader/commands";

const bootStrap = () => {
    const program: CommanderStatic = commander;
    program.version('0.0.1');
    CommandLoader.load<string>('init', program);
    CommandLoader.load<string>('create', program);
    commander.parse(process.argv);
    if (!program.args.length) {
        program.outputHelp();
    }

};

bootStrap();