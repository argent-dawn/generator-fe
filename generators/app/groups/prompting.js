const chalk = require('chalk');



/**
 * prompting application
 * @type {Object}
 */
module.exports = {
    prompting() {
        this.log(chalk.green.bold('Configuring new application...'));

        return this.prompt([{
            type: 'input',
            name: 'appName',
            message: chalk.white.bold('app name                   [1/6] '),
            default: this.appname  // Default to current folder name
        }, {
            type: 'input',
            name: 'mainModuleName',
            message: chalk.white.bold('main module name           [2/6] '),
            default: 'main'
        }, {
            type: 'input',
            name: 'version',
            message: chalk.white.bold('version                    [3/6] '),
            default: '1.0.0'
        }, {
            type: 'input',
            name: 'description',
            message: chalk.white.bold('description                [4/6] '),
            default: 'Weiresearch font-end application'
        }, {
            type: 'list',
            name: 'platform',
            message: chalk.white.bold('running platform           [5/6] '),
            choices: ['PC', 'mobile'],
            default: 'PC'
        }, {
            type: 'checkbox',
            name: 'components',
            message: chalk.white.bold('additional components      [6/6] '),
            choices: [{
                name: 'echarts',
                value: 'echarts',
                checked: true
            }, {
                name: 'lodash',
                value: 'lodash',
                checked: false
            }, {
                name: 'mathjs',
                value: 'mathjs',
                checked: false
            }]
        }]).then((answers) => {
            Object.assign(this.props, answers);
        });
    }
};

