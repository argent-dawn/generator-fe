const chalk = require('chalk');
const packageJson = require('../../../package.json');



/**
 * configuring application
 * @type {Object}
 */
module.exports = {
    configuring() {
        this.log(chalk.green.bold('\nSaving configurations...\n'));

        // .yo-rc.json
        this.config.set('generator-name', packageJson.name);
        this.config.set('generator-version', packageJson.version);
        this.config.set('appName', this.props.appName);
        this.config.set('mainModuleName', this.props.mainModuleName);
        this.config.set('version', this.props.version);
        this.config.set('description', this.props.description);
        this.config.set('platform', this.props.platform);
    }
};
