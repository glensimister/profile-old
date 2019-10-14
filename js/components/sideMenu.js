import {readProfile} from '../api.js';

class SideMenu extends HTMLElement {
    async connectedCallback() {

        let res = await readProfile();
        this.innerHTML = `
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
