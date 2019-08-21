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
width:30px; 
color:#dd4b39;
}

side-menu p {padding:15px;}

.sidebar-header {
    background-color: #2a363c;
    text-transform:uppercase;
    font-size: 14px;
    text-align: center;
    color: #c5c5c5;
    margin:20px 0;
    padding:10px;
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
                    <p><b>Address:</b><br />${res.address}, ${res.postalCode}, ${res.city}, ${res.region}, ${res.countryCode}</p>`;
    }
}

customElements.define('side-menu', SideMenu);
