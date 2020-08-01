const chalk = require('chalk');



/**
 * initializing application
 * @type {Object}
 */
module.exports = {
    initializing() {
        this.log(chalk.white.bold(`\nWelcome to ${chalk.magenta('generator-fe')}!`));
        this.log(chalk.white.bold(`Yeoman generator for front-end application, based on ${chalk.magenta('Weire Front-end Integrated Solution')}\n`));
        this.log(chalk.white.bold('This generator is used to set up a new application, it will:'));
        this.log(chalk.white.bold('1. Prompt to configure your application'));
        this.log(chalk.white.bold('2. Generate all the boilerplate you need to get started'));
        this.log(chalk.white.bold('3. Install all applications\' dependencies\n'));
        this.log(chalk.yellow.bold('Usage:'));
        this.log(chalk.yellow.bold(`1. ${chalk.white('yo fe')} - set up a new application`));
        this.log(chalk.white.bold('For any additional details, refer to http://www.web30core.org/trac/web30core/wiki\n\n'));

        this.props = {};
    }
};
