import "./regSw.js";
import "/lib/movil.js";
import "/lib/campo-dinamico.js";
class MiNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<a href="index.html">
        <span class="material-icons">
        smartphone
      </span>
        Control IoT
      </a>
  <a href="historial.html">
        <span class="material-icons">
        watch_later
        </span>
        Historial
      </a>
      <a href="dispositivo.html">
       <span class="material-icons">
       smartphone
      </span>
        Simulación de Dispositivo IoT
      </a>`;
  }
}
customElements.define(
  "mi-nav", MiNav);
