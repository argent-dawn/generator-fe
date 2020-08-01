export default [{
    path: 'demo',
    name: '<%= mainModuleName %>__demo',
    component(resolve) {
        require.ensure([], () => {
            resolve(require('@src/<%= mainModuleName %>/views/demo/index.vue'));
        }, 'views/<%= mainModuleName %>/demo/index');
    },
    meta: {
        keepAlive: true,
        rank: 20
    }
}];

