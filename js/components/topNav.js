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
</style>
                <div><a href="#/about">ABOUT</a></div>
                <div><a href="#/activity">ACTIVITY</a></div>
                <div><a href="#/photos">PHOTOS</a></div>
                <div><a href="#/friends">FRIENDS</a></div>
                <div>
                    <button class="logout btn btn-red">LOGOUT</button>
                </div>`;
    }
}

customElements.define('top-nav', TopNav);
