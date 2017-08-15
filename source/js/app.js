/**
 * @file app.js
 * @author zhangzhiqiang(zhiqiangzhang37@gmail.com)
 */

define(function (require) {

    var Vue = require('./lib/vue.min');
    var VueRouter = require('./lib/vue-router.min');
    var App = require('./components/app');
    var router = require('./router');

    Vue.use(VueRouter);

    function init(opt) {

        // 如果是从非首页进入的要将hash定位到对应页面
        if (location.pathname !== '/') {
            location.href = '#' + location.pathname;
        }

        var options = $.extend({
            router: router({
                needPageTransition: opt.needPageTransition
            })
        }, App);
        new Vue(options).$mount('#container');
    }

    return init;

});
