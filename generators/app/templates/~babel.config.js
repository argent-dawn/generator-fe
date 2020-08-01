module.exports = {
    presets: [
        ['@babel/preset-env',{
            modules: false,
            useBuiltIns: "usage"        // 按需加载 pollify，解决IE兼容问题
        }]
    ],
    plugins: [
        '@babel/plugin-transform-runtime',
        '@babel/plugin-syntax-dynamic-import',<% if (platform === 'mobile') { %>
        ['import',{
            libraryName: 'vant',
            libraryDirectory: 'es',
            style: true
        },'vant']<% } else if (platform === 'PC') { %>
        // iview 的按需引用，在IE浏览器存在兼容问题，暂时关闭按需引用
        // ['import',{
        //     libraryName: 'iview',
        //     libraryDirectory: 'src/components'
        // }]
        <% } %>
    ],
    comments: false
};
