class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021
      Jazmin Gonzalez Cruz.`;
  }
}
customElements.define(
  "mi-footer", MiFooter);
