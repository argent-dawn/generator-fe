const chalk = require('chalk');



/**
 * conflicts application
 * @type {Object}
 */
module.exports = {
    conflicts() {
        this.log(chalk.green.bold('Processing conflicts...\n'));
    }
};
