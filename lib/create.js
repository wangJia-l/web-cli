const path = require('path');
const fs = require('fs-extra');
const Inquirer = require('inquirer');
const chalk = require('chalk');
const Creator = require('./Creator');

// 2. 要实现脚手架，需要做一个命令行交互功能 inquirer
module.exports = async function (programName, options) {
    const cwd = process.cwd(); // 获取当前命令执行时的工作目录
    const targetDir = path.join(cwd, programName); // 目标目录

    if (fs.existsSync(targetDir)) { // 判断当前文件是否被占用
        if (options.force) { // 如果强制创建，删除已有的
            await fs.remove(targetDir);

        } else { // 提示用户是否确定要覆盖
            const { action } = await Inquirer.prompt([  // 配置询问的方式
                {
                    name: 'action',
                    type: 'list',
                    message: '当前目录已存在，请选择',
                    choices: [
                        {
                            name: '覆盖',
                            value: true
                        },
                        {
                            name: '取消',
                            value: false
                        }
                    ]
                }
            ])

            if (!action) {
                return;
            }
            console.log(`${chalk.redBright(`${programName}文件正在删除中...`)}`)
            await fs.remove(targetDir);
            console.log(`${chalk.redBright(`${programName}文件已删除!`)}`)
        }
    }

    // 创建项目
    const creator = new Creator(programName, targetDir);
    creator.create();
}