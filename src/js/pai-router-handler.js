/**
 * Namespace para el manejo de las funciones
 */
const PAI = {
  version: "1.0.0",
};

(function () {
    /**
     * Captura un archivo que contenga la url especificada y retorna una promesa
     * @param {*string} url la url del archivo que se optiene.
     * @returns La promesa que contiene los datos del archivo
     */
    PAI.get = function get(url) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.response);
                } else if ( xhr.status >= 404 ) {
                    window.location.href = "#404"
                } else {
                    reject(xhr.statusText);
                }
            };
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send();
        });
    };

  /**
   * Maneja un esquema que contenga multiples paginas.
   */
  PAI.Layout = class Layout {
      constructor(...pages) {
          this.pages = pages;
      }

      load() {
          return Promise.all(this.pages.map((page) => page.load()));
      }

      show(el) {
          for (let page of this.pages) {
              const div = document.createElement("div");
              page.show(div);
              el.appendChild(div);
          }
      }
    };

    /**
     * Se despliega contenido dinamicamente de una paginas html.
     */
    PAI.Page = class Page {
        constructor(url) {
            this.url = "./views/" + url;
        }

        load() {
            return PAI.get(this.url).then((res) => (this.html = res));
        }

        show(el) {
            el.innerHTML = this.html;
        }
    };

    /**
     * El enrutador dinamicamente cambia las vistas de pagina.
     */
    PAI.Router = class Router {
        constructor(routes, el) {
            this.routes = routes;
            this.el = el;
            window.onhashchange = this.hashChanged.bind(this);
            this.hashChanged();
        }

        async hashChanged(ev) {
            if (window.location.hash.length > 0) {
                const pageName = window.location.hash.substr(1);
                this.show(pageName);
            } else if (this.routes["/"]) {
                this.show("/");
            }
        }

        async show(pageName) {
            const page = this.routes[pageName];
            await page.load();
            this.el.innerHTML = "";
            page.show(this.el);
        }
    };
})();
