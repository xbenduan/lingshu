#!/usr/bin/env node
const comm = require("commander");

const program = comm.program;

program
    .option("-e --env [env]", "【选填】指定运行环境 默认：--env=uat")
    .option("-d --dir <dir>", "【必填】指定运行项目 示例：--dir=p099");

program.parse(process.argv);
