const chalk = require('chalk');
const glob = require('glob');



/**
 * writing application
 * @method
 */
module.exports = function writing() {
    this.log(chalk.green.bold('Generating files...\n'));

    glob.sync('**/*.*', {
        cwd: this.sourceRoot()
    }).forEach((file) => {
        if (file.indexOf('~') === -1) {
            this.fs.copy(
                this.templatePath(file),
                this.destinationPath(file)
            );
        } else {
            this.fs.copyTpl(
                this.templatePath(file),
                this.destinationPath(file.replace(/~/g, '')),
                this.props
            );
        }
    });

    glob.sync('**/.*', {
        cwd: this.sourceRoot(),
        dot: true
    }).forEach((file) => {
        this.fs.copy(
            this.templatePath(file),
            this.destinationPath(file)
        );
    });
};
