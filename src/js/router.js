/**
 * | MODELO DE RUTAS SPA (Single Page Application)
 * |
 * |
 * 
 * */
const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
}


/*
 |
 | Crear libro de rutas
 |
 */
const routes = {
    // MENU PRINCIPAL
    404: "../../404.html",
    "/": "../../index.html",
    "/ventas": "../../ventas.html",
    "/transferir": "../../transferir.html",
    "/cartera": "../../cartera.html",

    // SUB MENU
    
}

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById('main-page').innerHTML = html;
}   


window.onpopstate = handleLocation;
window.route = route;

handleLocation();