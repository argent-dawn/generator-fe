const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const rimraf = require('rimraf');



/**
 * install application
 * @type {Object}
 */
module.exports = {
    install() {
        this.log(chalk.green.bold('\nInstalling dependencies...'));

        // 移除 其他环境下的组件
        if (this.props.platform === 'PC') {
            const vantPath = path.join(process.cwd(), './src/common/widgets/$vant');

            rimraf(vantPath, () => {});
        } else if (this.props.platform === 'mobile') {
            const iviewPath = path.join(process.cwd(), './src/common/widgets/$iview');
            const iconsPath = path.join(process.cwd(), './src/common/widgets/$icons');
            const baseLoadingPath = path.join(process.cwd(), './src/common/widgets/base-loading');


            rimraf(iviewPath, () => {});
            rimraf(iconsPath, () => {});
            rimraf(baseLoadingPath, () => {});
        }

        if (!this.props.components.includes('mathjs')) {
            const mathPath = path.join(process.cwd(), './src/common/utils/$handler/assets/math-conf.js');

            rimraf(mathPath, () => {});
        }

        // 主模块 重命名
        const srcPath = path.join(process.cwd(), './src');

        fs.rename(path.join(srcPath, './main'), path.join(srcPath, `./${this.props.mainModuleName}`), () => {});
        fs.rename(path.join(srcPath, './common/utils/$router/modules/main.js'),
            path.join(srcPath, `./common/utils/$router/modules/${this.props.mainModuleName}.js`), () => {});


        this.installDependencies({
            bower: false
        });
    }
};
