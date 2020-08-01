const chalk = require('chalk');



/**
 * end application
 * @type {Object}
 */
module.exports = {
    end() {
        this.log(chalk.yellow.bold('Usage:'));
        this.log(chalk.yellow.bold(`1. ${chalk.white('npm run serve:dev')} - build and preview application for development`));
        this.log(chalk.yellow.bold(`2. ${chalk.white('npm run serve:prod')} - build and preview application for production\n`));
        this.log(chalk.yellow.bold(`3. ${chalk.white('npm run build:dev')} - build application for development`));
        this.log(chalk.yellow.bold(`4. ${chalk.white('npm run build:prod')} - build application for production`));
        this.log(chalk.yellow.bold(`5. ${chalk.white('npm run build:show')} - build and preview application  chunk  analysis for production\n`));
        this.log(chalk.yellow.bold(`6. ${chalk.white('npm run eslint:fix')} - check JavaScript according to eslint\n`));
    }
};
