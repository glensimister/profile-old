import {readProfile} from '../api.js';

class SideMenu extends HTMLElement {
    async connectedCallback() {

        let res = await readProfile();
        this.innerHTML = `
<style>
.grid > side-menu {
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 0;
}

side-menu i {
width:20px; 
color:#dd4b39;
}

side-menu p {
padding:0 20px;
}

.sidebar-header {
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    -webkit-box-shadow: inset 0px 0px 33px -1px rgba(238, 238, 238, 0.47);
    -moz-box-shadow: inset 0px 0px 33px -1px rgba(238, 238, 238, 0.47);
    box-shadow: inset 0px 0px 33px -1px rgba(238, 238, 238, 0.47);
    text-transform:uppercase;
    font-size: 13px;
    text-align: center;
    margin:20px 0;
    padding:10px;
}

side-menu {
font-size: 13px;
}

side-menu ul li {
    border-bottom: 1px solid #eee;
    line-height: 30px;
    padding: 0 15px;
    display: block;
    text-decoration: none;
}
</style>

            <div class="sidebar-header">${res.jobTitle}</div>
                <ul>
                    <li><i class="fa fa-at"></i> <span>${res.email}</span></li>
                    <li><i class="fa fa-phone"></i> <span>${res.phone}</span></li>
                    <li><i class="fa fa-external-link"></i> <span>${res.website}</span></li>
                </ul><br />
                    <p>I currently work for a company called Lepide.com where I write articles about data security. In the limited spare time that I have I mess around with open-source projects, such as the one featured on this site.</p>`;
    }
}

customElements.define('side-menu', SideMenu);
