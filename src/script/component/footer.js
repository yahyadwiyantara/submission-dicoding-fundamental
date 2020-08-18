class FootBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="container text-center">
            <small>Copyright &copy; Muhammad Yahya Dwiyantara</small>
        </div>
        `;
    }
}

customElements.define("foot-bar", FootBar);