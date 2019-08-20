class UserName extends HTMLElement {
    async connectedCallback() {

        function getUserData() {
            return new Promise(resolve => {
                gun.get('user').once(function (res) {
                    resolve(res);
                });
            });
        }

        function splitString(name) {
            let res = name.split(" ");
            if (res[1])
                return "<b>" + res[0] + "</b> " + res[1];
            else return name;
        }

        let res = await getUserData();
        let name = splitString(res.name);
        this.innerHTML = `
<style>
.logo {
       background: #00acd6;
}
.logo a {
    text-align: center;
    line-height: 27px;
    color: #fff;
    text-transform: uppercase;
    display: block;
    font-size: 18px;
    padding:10px;
}
.logo span {
    color: #fff;
}
</style>
<a href="#/">${name}</a>`;
    }
}

customElements.define('user-name', UserName);
