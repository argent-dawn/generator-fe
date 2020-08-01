const generators = require('yeoman-generator');
const initializing = require('./groups/initializing');
const prompting = require('./groups/prompting');
const configuring = require('./groups/configuring');
const defaults = require('./groups/default');
const writing = require('./groups/writing');
const conflicts = require('./groups/conflicts');
const install = require('./groups/install');
const end = require('./groups/end');



module.exports = generators.extend({
    // Your initialization methods (checking current project state, getting configs, etc)
    // 你的初始化方法 (检查当前项目的状态，配置，等)
    initializing,

    // Where you prompt users for options (where you'd call this.prompt())
    // 用户提示选项 (在这你会使用 this.prompt())
    prompting,

    // Saving configurations and configure the project
    // (creating .editorconfig files and other metadata files)
    // 保存配置并配置项目 (创建 .editorconfig 文件和其他元数据文件)
    configuring,

    // If the method name doesn't match a priority, it will be pushed to this application.
    // 如果方法名称不匹配优先级，将被推到这个组
    default: defaults,

    // Where you write the generator specific files (routes, controllers, etc)
    // 这里是你写的 generator 特殊文件(路由，控制器，等)
    writing,

    // Where conflicts are handled (used internally)
    // 处理冲突的地方 (内部使用)
    conflicts,

    // Where installation are run (npm, bower)
    // 运行(npm, bower)时的安装
    install,

    // Called last, cleanup, say good bye, etc
    end
});
