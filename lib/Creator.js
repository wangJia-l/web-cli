const downloadGitRepo = require('download-git-repo');
const ora = require('ora');
const chalk = require('chalk');
const util = require('util');

class Creator {
    constructor(programName, targetDir) {
        this.name = programName;
        this.target = targetDir;
        this.downloadGitRepo = util.promisify(downloadGitRepo);
    }

    // 真实的开始创建模版
    async create() {
        // 3. 将模版下载下来 download-git-repo  采用远程拉取的方式 github
        const spinner = ora(`${chalk.cyan('downloading tempate.....')}`);
        spinner.start();
        const templateUrl = 'wangJia-l/react-template-single#main';

        this.downloadGitRepo(templateUrl, this.target, async err => {
            spinner.stop();
            if (err) {
                console.log(err);
                console.log(chalk.red(' \n\n 模版下载失败'));
                return;
            }

            console.log(chalk.cyan('\n\n 模版下载成功'));

            // 4. 根据用户的选择动态的生成内容 metalsmith
        })
    }
};

module.exports = Creator;