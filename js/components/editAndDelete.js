class EditAndDelete extends HTMLElement {
    async connectedCallback() {
        this.innerHTML = `
                <i data-type="" class="fa fa-close delete-icon"></i>
                <i data-type="" class="fa fa-pencil edit-icon"></i>`;

        $('.edit-icon').on('click', async function () {

            if ($(this).hasClass('fa-pencil')) {
                $(this).removeClass('fa-pencil').addClass('fa-floppy-o');

                let editable = $(this).parent().parent();
                editable.attr('contenteditable', 'true');
                editable.css({
                    border: "1px solid #dd4b39"
                });

            } else {

                $(this).removeClass('fa-floppy-o').addClass('fa-pencil');
                editable.attr('contenteditable', 'false');
                editable.css({
                    border: "none"
                });
            }
        });
    }
}

customElements.define('edit-delete', EditAndDelete);
