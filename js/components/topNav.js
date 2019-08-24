class TopNav extends HTMLElement {
    async connectedCallback() {
        this.innerHTML = `
<style>
top-nav {
    background: #fff;
    display: grid;
    text-align: center;
    grid-template-columns: repeat(5, 1fr);
}
top-nav .active {
    font-weight:bold;
}
top-nav > div {
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 10px;
    -webkit-box-shadow: inset 0px 0px 33px -1px rgba(238, 238, 238, 0.47);
    -moz-box-shadow: inset 0px 0px 33px -1px rgba(238, 238, 238, 0.47);
    box-shadow: inset 0px 0px 33px -1px rgba(238, 238, 238, 0.47);
}
top-nav a {
    cursor: pointer;
    color: #848484;
    display: block;
    line-height: 27px;
    font-size: 12px;
}

.hiddenItem{
display:none;
}
#login {
display:none;
}
</style>
                <div><a href="#/about">ABOUT</a></div>
                <div><a class="hiddenItem" href="#/activity">ACTIVITY</a></div>
                <div><a class="hiddenItem" href="#/photos">PHOTOS</a></div>
                <div><a class="hiddenItem" href="#/friends">FRIENDS</a></div>
                <div>
                    <button class="top-nav-login btn btn-red">LOGIN</button>
                </div>

    <div id="login">
        <h4 style="text-align: center">LOGIN</h4>
        <div class="form-group">
            <label for="">User name:</label>
            <input type="text" class="form-control username" value="GuestUser">
        </div>
        <div class="form-group">
            <label for="">Password:</label>
            <input type="password" class="form-control password" value="password">
        </div>
        <button class="btn btn-red login">LOGIN</button>
        <button class="btn btn-blue register">REGISTER</button>
        <button class="btn btn-green clear">CLEAR</button>
    </div>

`;

        var gun = Gun();
        var user = gun.user();

        /*
        try to automatically log user back in
        user.recall({
            sessionStorage: true
        });
        */

        /* check to see if user is logged in on page load */
        if (sessionStorage.getItem('alias') != null) {
            $('.hiddenItem').show();
            $('.top-nav-login').html("LOGOUT");
            $('.top-nav-login').addClass("loggedIn");
        } else {
            $('.hiddenItem').hide();
            $('.top-nav-login').html("LOGIN");
            $('.top-nav-login').removeClass("loggedIn");
        }

        /* if user if not logged in, display dialog box */
        $('.top-nav-login').on('click', function () {
            if (!$(this).hasClass("loggedIn")) {
                $('#login').dialog({
                    title: "Login",
                    draggable: true,
                    width: 400
                });
            } else {
                user.leave(); // log user out 
                $('.top-nav-login').html("LOGIN");
                $('.top-nav-login').removeClass("loggedIn");
                $('.hiddenItem').hide();
            }
        });

        /* this applies to login button within the dialog */
        $('.login').on('click', function () {
            user.auth($('.username').val(), $('.password').val(), function (res) {
                if (!res.err) {
                    $('.hiddenItem').show();
                    $('.top-nav-login').addClass("loggedIn");
                    $('.top-nav-login').html("LOGOUT");
                    $('#login').dialog('close');
                }
            });
        });

        $('.register').on('click', function () {
            user.create($('.username').val(), $('.password').val(), function () {
                const endpoint = 'https://www.jsonstore.io/4e7bbaac137475d331cec016651ebd4d1488e9e062fa674d04307d331447f0b3/users/1';
                $.getJSON('sampleData/profile.json', function (res) {
                    $.ajax({
                        type: 'PUT',
                        url: endpoint,
                        data: JSON.stringify(res),
                        error: function (e) {
                            console.log(e);
                        },
                        dataType: "json",
                        contentType: "application/json"
                    });
                });
            });
        });

        $('.clear').on("click", function () {
            localStorage.clear();
            sessionStorage.clear();
        });
    }
}

customElements.define('top-nav', TopNav);
