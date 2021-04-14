import "./regSw.js";
import "/lib/movil.js";
import "/lib/campo-dinamico.js";
class MiNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<a href="index.html">
        <span class="material-icons">
        Aod
      </span>
        Control IoT
      </a>
  <a href="historial.html">
      <span class="material-icons">
      Watch_Later
      </span>
        Historial
      </a>
      <a href="dispositivo.html">
       <span class="material-icons">
        Aod
      </span>
        Simulación de Dispositivo IoT
      </a>`;
  }
}
customElements.define(
  "mi-nav", MiNav);
