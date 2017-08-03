define(function (require) {

    var Vue = require('./lib/vue.min');
    var VueRouter = require('./lib/vue-router.min');
    var Page = require('./component/page');

    Vue.use(VueRouter);
    var router = new VueRouter({
        routes: [
            {
                path: '*',
                name: 'page',
                component: Page
            }
        ]
    });
    new Vue({
        router: router,
        template: $('body').html()
    }).$mount('#container');

    $(document.body).on('click', 'a', function (e) {
        if (this.origin === location.origin) {
            location.href = '#' + this.href.replace(location.origin, '');
            return false;
        }
    });

});
