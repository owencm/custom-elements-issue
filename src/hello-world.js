class HelloWorld extends HTMLElement {
  connectedCallback() {
    this.innerHTML = "Hello world";
  }
}

customElements.define('hello-world', HelloWorld)
