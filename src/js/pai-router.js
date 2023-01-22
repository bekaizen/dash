document.addEventListener('click', (event) => {
    const {target} = event;
    if ( !target.matches("ul li a") ) {
        return;
    }
    event.preventDefault();
    urlRoute();
})

const urlRoutes = {
    404: {
        template: './templates/404.html',
        title: "Nothing here",
        description: "Nothing brah"
    },
    "/": {
        template: './templates/index.html',
        title: "Nothing here",
        description: "Nothing brah"
    },
    "/transferir": {
        template: './templates/menu.html',
        title: "Nothing here",
        description: "Nothing brah"
    }
}

const urlRoute = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    urlLocationHandler();
}

const urlLocationHandler = async () => {
    const location = window.location.pathname;
    if (location.length == 0) {
        location = "/";
    }

    const route = urlRoutes[location] || urlRoutes[404];
    const html = await fetch(route.template).then((response) => response.text());
    const title = await fetch(route.title).then((response) => response.text());
    document.getElementById("container-folk").innerHTML = html;
    document.title = title;
}

window.onpopstate = urlLocationHandler;
window.route = urlRoute;
urlLocationHandler();