#!/usr/bin/env node
const { program } = require('commander');

const test = (e) => {
  console.log('test', e);
};

program
  .version('0.0.1', '-v,--version', '查看当前cli版本')
  .helpOption('-h,--help', '显示帮助信息')
  .description('欢迎使用lgs, 期望与您共建');

program
  .command('test')
  .option('-u --update', '更新模板项目状态', false)
  .option('-a --add <env>', '添加更新目录', '')
  .description('测试命令')
  .action(test);

program.parse(process.argv);
