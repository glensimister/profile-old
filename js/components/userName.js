import {readProfile} from '../api.js';

class UserName extends HTMLElement {
    async connectedCallback() {

        function splitString(name) {
            let res = name.split(" ");
            if (res[1])
                return "<b>" + res[0] + "</b> " + res[1];
            else return name;
        }

        let res = await readProfile();
        let name = splitString(res.name);
        this.innerHTML = `<a href="#/">${name}</a>`;
    }
}

customElements.define('user-name', UserName);
