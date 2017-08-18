/**
 * @file app.js
 * @author zhangzhiqiang(zhiqiangzhang37@gmail.com)
 */

define(function (require) {

    var EventBus = require('../lib/event-bus');

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
        created: function () {
            var me = this;

            EventBus.$on('SET_PAGE_TRANSITION_NAME', function (transitionName) {
                me.pageTransitionName = transitionName;
                me.mobileNavOn = false;
            });

        },
        methods: {
            handleBeforeEnter: function () {
                this.animationActive = true;
            },
            handleAfterEnter: function () {
                this.animationActive = false;
                EventBus.$emit('AFTER_ENTER');
            },
            showMainNav: function () {
                this.mobileNavOn = true;
            },
            hideNav: function () {
                this.mobileNavOn = false;
            }
        }
    };
});
