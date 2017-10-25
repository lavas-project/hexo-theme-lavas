/**
 * @file app.js
 * @author zhangzhiqiang(zhiqiangzhang37@gmail.com)
 */

define(function (require) {

    return {
        template: $('body').html(),
        data: function () {
            return {
                pageTransitionName: '',
                animationActive: false,
                headerWidth: '',
                mobileNavOn: false
            };
        },
        methods: {
            showMainNav: function (e) {
                if (!this.mobileNavOn) {
                    e.stopPropagation();
                }
                this.mobileNavOn = true;
            },
            hideNav: function () {
                this.mobileNavOn = false;
            }
        }
    };
});
