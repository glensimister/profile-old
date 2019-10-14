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
                </ul><div class="add-friend"><button class="btn btn-red" style="display:block; margin:auto;"><i class="fa fa-user-plus" style="margin-right:5px;"></i>ADD FRIEND</button></div>`;
    }
}

customElements.define('side-menu', SideMenu);
