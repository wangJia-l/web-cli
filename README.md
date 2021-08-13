# web-cli
前端脚手架

### 步骤
1. 配置可执行命令 commander
2. 要实现脚手架，需要做一个命令行交互功能 inquirer
3. 将模版下载下来 download-git-repo
4. 根据用户的选择动态的生成内容 metalsmith

### 将包变成全局的
1. 先创建可执行的脚本 #! /usr/bin/env node
2. 配置package.json 中的bin字段
3. npm link 链接到本地环境（以 package.json 中的 name 为基准）
    > link 相当于将当前本地模块链接到npm 目录下，这个npm 目录可以直接访问，所以当前包就可以直接当问了