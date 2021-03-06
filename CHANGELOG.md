## v2.1.1
2019-11-05
#### 兼容处理
iview 的按需引用，在IE浏览器存在兼容问题，暂时关闭按需引用
#### 新功能
注册 全局过滤器（$handler 的API）

## v2.1.0
2019-10-23
#### 兼容处理
解决IE浏览器不支持 Object.assign 等API
解决IE浏览器不支持 URLSearchParams 问题
#### bug修复
解决本地打包文件，index.html 不能正常运行

## v2.0.1
2019-06-18
#### 错误修复
* 解决 本地启动 终端关于 browserslist 的警告

## v2.0.0
2019-05-06
#### 新功能（#27）
* 增加 vscode 插件列表、插件配置
* 增加 Jenkins 构建、部署 脚本
* 增加 终端指令，使用 eslint 校验JS
* 增加 可视化查看 生产模式打包文件体积
* 增加 `$dicts` 字典表
* 增加 `$handler` 常用方法集
* 增加 `base-chart` 组件（按需引入）
* PC端 增加 `base-loading` 组件 
* PC端 增加 `$icons` 组件（fontawesome）
* PC端 增加 `$iview` 配置文件（iview 组件库）
* mobile端 增加 `$vant` 配置文件（vant 组件库）

#### 功能调整（#27）
* 架构调整为 多模块 的 Vue单页应用
* 调整 移动端适配方案，采用 `rem` + `viewport` 适配方案
* 调整 UI 组件库引入方式，采用 按需引入 
* 更新 项目文档（命令列表、开发约束、代码校验）
* 更新 项目相关的 开发、生产依赖（包含 且 不限于如下）
    * webpack 版本更新到 `4.28.3`
* 优化打包机制（包含 且 不限于如下）
    * 更多的遵循 webpack 4 默认打包机制
    * 移除 常用库的 `dll` 打包机制
    * 分离 webpack `runtime` 代码
    * 生产模式下打包，分离CSS代码
    * 打包前 自动清空上一次 打包文件
* Ajax 请求库 由 JQuery 调整成 Axios，封装方法 `$http`
* 调整 mobile端 UI组件库，采用 `vant` 组件库
* 简化 项目构建路径，位于 `/configs`
* 简化 `generator-fe` 创建项目 指令
* 移除 normalizr、`$schemas` 配置
* 移除 路径别名 `@components`，增加 路径别名 `@src`


## v1.3.0
2018-03-20
#### 功能调整
* 更新 Gitlab 模板文件（#26）

## v1.2.0
2017-08-14
#### 新功能
* 在接口配置（$api-config）中增加对绝对路径的支持（#23）

#### 功能调整
* 调整 common 项目相关模块的 alias（#22）
* 调整 webpack 查询文件后缀的优先级（#21）
* 调整 gitlab 下的 issue 模板格式（#21）
* 将 PC 模式的默认组件库替换为 iview（#25）

#### 错误修复
* 修复 node 8.x 下调试模式热更新错误（#24）

## v1.1.1
2017-05-25
#### 功能调整
* 修改 `.yo-rc.json` 文件内容，移除以下字段（#20）
  * applications
  * components

#### 错误修复
* 在构建过程中移除 `extract-text-webpack-plugin`，以解决外部资源文件加载路径错误的问题（#19）

## v1.1.0
2017-05-18
#### 新功能
* 增加分布式部署的相关配置项（#16）
* 增加数据缓存机制（#11）
* 增加 vuex 状态树持久化机制（#15）

#### 功能调整
* 修改 $apis module 的返回数据格式（#11）
* 修改 $entities module，新增  $entitiesRemove 和 $entitiesClear action（#12）
* 调整 stylelint 校验规则（#14）
* 更新 vue 和 element、mintui 版本（#17）
* 更新示例代码，使用 async 替代 promise（#18）

#### 错误修复
* 修复 vue-loader 相关的配置错误（#10）
* 修复顶层容器（$app）样式错误（#13）

## v1.0.0
2017-04-24
* 增加对 jsx 语法的支持（#9）

## v1.0.0-rc1
2017-04-20
* 在生成的项目组中增加 gitlab description 模板和 generator 版本号记录（#8）
* 修复生成项目时无法自动安装依赖的错误（#7）

## v0.9.2
2017-04-19
* 修复在自定义项目下无法使用 `npm run build:prod` 命令进行构建的错误（#6）

## v0.9.1
2017-04-18
* 调整 dll 文件构建方式，解决当前 dll 文件在构建时无法正确处理外部资源文件的问题（#1）
* 调整项目构建方式，解决当前各项目在部署时无法正确加载外部资源文件的问题（#2）
* 重新设计 `widgets` 和 `views` 路径的功能及构建方式，解决当前 `widgets` 和 `views` 路径无法有效发挥其应有作用的问题（#2）
* 更新项目初始（示例）代码，增加对组件库的引用和移动端兼容性（#4）
* 补充相关设计和使用文档说明（#3）
* 修复在自定义项目下无法从 `node_modules` 路径正确加载未被包含进 dll 文件的第三方资源的错误（#5）

## v0.9.0
2017-04-10
* 将项目从 svn 迁移至 gitlab
* 将项目版本号降级至 0.9.0
* 修复 `.jsbeautifyrc` 文件中的一处语法错误
* 新增 `CHANGELOG.md` 文件用于追溯修改
