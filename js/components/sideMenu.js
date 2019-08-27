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
color:#b1b0b0;
}

.sidebar-header {
    background-color: #3f4d54;
    text-transform:uppercase;
    font-size: 14px;
    text-align: center;
    color: #c5c5c5;
    margin:20px 0;
    padding:10px;
}

side-menu {
font-size: 13px;
}

@media screen and (min-width: 600px) {}
side-menu ul li {
    border-bottom: 1px solid #334046;
    line-height: 30px;
    padding: 0 15px;
    display: block;
    text-decoration: none;
    color: #fff;
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
