class NotifikasiBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="alert alert-primary animated fadeInRight" role="alert">
                <marquee behavior="" direction="left" class="berita">UB UNAIR ITS ITB UI UGM UNPAD</marquee>
            </div>
        `;
    }
}

customElements.define("notifikasi-bar", NotifikasiBar);