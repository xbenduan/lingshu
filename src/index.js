#!/usr/bin/env node
const { program } = require('commander');
const { test } = require('./temp/index');

program
  .version('0.0.1', '-v,--version', '查看当前cli版本')
  .helpOption('-h,--help', '显示帮助信息')
  .description('欢迎使用lgs, 期望与您共建');

program
  .command('test')
  .option('-u --update', '更新模板项目状态', false)
  .option('-i --init', '添加更新目录', false)
  .option('-o --other', '添加更新目录', false)
  .description('测试命令')
  .action(test);

program.parse(process.argv);

/**
 * @typedef {Object} RParam
 * @property {Number} e
 * @property {Number} a
 */
