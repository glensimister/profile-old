$(document).ready(async function () {
    function loadHomePage() {
        $('top-nav a.active').removeClass('active');
        $(".content").load("pages/home.html", function () {
            $('top-nav').find('a[href=""]').addClass('active');
        });
    }

    var app = $.sammy(function () {
        this.get('#/', function () {
            loadHomePage()
        });
        this.get('/index.html', function () {
            loadHomePage()
        });
        this.get('/', function () {
            loadHomePage()
        });
        this.get('#/:page', function () {
            $('top-nav a.active').removeClass('active');
            let page = `pages/${this.params['page']}.html`;
            let active = this.params['page'];
            $(".content").load(page, function () {
                $('top-nav').find('a[href="#/' + active + '"]').addClass('active');
            });
        });
    });

    $(function () {
        app.run()
    });
});
