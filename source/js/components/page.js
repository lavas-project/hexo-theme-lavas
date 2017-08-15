/**
 * @file page.js
 * @author zhangzhiqiang(zhiqiangzhang37@gmail.com)
 */

define(function (require) {
    var EventBus = require('../lib/event-bus');
    var pageScrollTop = {};
    var firstPaint = true;
    var registered;

    return {
        template: '<div v-html="html" class="page-component"></div>',
        data: function () {
            return {
                /* eslint-disable */
                html: ''
                /* eslint-enable */
            };
        },
        methods: {
            insertContent: function ($body) {
                var me = this;
                var mainOuter = $body.find('.main-outer')[0];
                mainOuter.style.display = '';
                me.html = mainOuter.outerHTML;
            }
        },
        created: function () {
            var me = this;

            if (firstPaint && me.$route.fullPath === '/') {
                me.insertContent($('body'));
                return;
            }

            $.ajax({
                url: this.$route.path
            })
            .then(function (html) {

                if (!html) {
                    return;
                }

                var body = /<body>(.|\n)*<\/body>/.exec(html)[0];

                if (!body) {
                    return;
                }

                body = body.replace(/<body>(\s|\n)*/, '<body>');
                body = body.replace(/(\s|\n)*<\/body>/, '</body>');
                var $body = $(body);

                me.insertContent($body);

            });

            if (!registered) {
                EventBus.$on('AFTER_ENTER', function () {
                    setTimeout(function () {
                        var scrollTop = pageScrollTop[me.$route.fullPath] || 0;
                        document.body.scrollTop = document.documentElement.scrollTop = scrollTop;
                    }, 0);
                });
                registered = true;
            }


        },
        beforeRouteUpdate: function (to, from, next) {
            var me = this;
            var curFullPath = me.$route.fullPath;
            var transitionEle = me.$el.parentNode.parentNode;
            firstPaint = false;
            pageScrollTop[curFullPath] = document.body.scrollTop || document.documentElement.scrollTop;

            if (transitionEle) {
                transitionEle.classList.add('enable-scroll');
                transitionEle.scrollTop = pageScrollTop[curFullPath];
            }
            next();

        }
    };
});
