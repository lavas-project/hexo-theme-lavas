define(function () {
    return {
        template: '<div v-html="html"></div>',
        data: function () {
            return {
                html: ''
            };
        },
        created: function () {
            var me = this;

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
                var mainOuter = $body.find('.main-outer')[0];
                mainOuter.style.display = '';
                me.html = mainOuter.outerHTML;
            });

        }
    };
});
