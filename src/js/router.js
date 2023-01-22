const PAIRouter = new PAI.Router({
  
    // Primeo, se pasa la configuracion de la ruta
    // BEGIN: Rutas primarias
    "/":        new PAI.Layout(new PAI.Page('inicio.html')),
    home:       new PAI.Layout(new PAI.Page('inicio.html')),
    vender:     new PAI.Layout(new PAI.Page('vender.html')),
    transferir: new PAI.Layout(new PAI.Page('transferir.html')),
    cartera:    new PAI.Layout(new PAI.Page('cartera.html')),
    afiliados:  new PAI.Layout(new PAI.Page('afiliados.html')),
    inversiones:new PAI.Layout(new PAI.Page('inversiones.html')),
    inversionesnft: new PAI.Layout(new PAI.Page('inversiones-nft.html')),
    envios:         new PAI.Layout(new PAI.Page('envios.html')),
    cuenta:         new PAI.Layout(new PAI.Page('cuenta.html')),
    // END: Rutas primarias

    // BEGIN: submenu/config
    "validacion-2fa": new PAI.Layout(new PAI.Page('./submenu/config/2fa.html')),
    "validacion-2fa": new PAI.Layout(new PAI.Page('./submenu/config/2fa.html')),
    "validacion-2fa": new PAI.Layout(new PAI.Page('./submenu/config/2fa.html')),
    "validacion-2fa": new PAI.Layout(new PAI.Page('./submenu/config/2fa.html')),
    "validacion-2fa": new PAI.Layout(new PAI.Page('./submenu/config/2fa.html')),
    "validacion-2fa": new PAI.Layout(new PAI.Page('./submenu/config/2fa.html')),
    "validacion-2fa": new PAI.Layout(new PAI.Page('./submenu/config/2fa.html')),
    "validacion-2fa": new PAI.Layout(new PAI.Page('./submenu/config/2fa.html')),
    "validacion-2fa": new PAI.Layout(new PAI.Page('./submenu/config/2fa.html')),
    "validacion-2fa": new PAI.Layout(new PAI.Page('./submenu/config/2fa.html')),
    // END: submenu/config

    // BEGIN: submenu/cuentas
    "validacion-2fa": new PAI.Layout(new PAI.Page('./submenu/cuentas/bitcoin.html')),
    "validacion-2fa": new PAI.Layout(new PAI.Page('./submenu/cuentas/bitcoin.html')),
    "validacion-2fa": new PAI.Layout(new PAI.Page('./submenu/cuentas/bitcoin.html')),
    "validacion-2fa": new PAI.Layout(new PAI.Page('./submenu/cuentas/bitcoin.html')),
    "validacion-2fa": new PAI.Layout(new PAI.Page('./submenu/cuentas/bitcoin.html')),
    "validacion-2fa": new PAI.Layout(new PAI.Page('./submenu/cuentas/bitcoin.html')),
    "validacion-2fa": new PAI.Layout(new PAI.Page('./submenu/cuentas/bitcoin.html')),
    "validacion-2fa": new PAI.Layout(new PAI.Page('./submenu/cuentas/bitcoin.html')),
    "validacion-2fa": new PAI.Layout(new PAI.Page('./submenu/cuentas/bitcoin.html')),
    "validacion-2fa": new PAI.Layout(new PAI.Page('./submenu/cuentas/bitcoin.html')),
    "validacion-2fa": new PAI.Layout(new PAI.Page('./submenu/cuentas/bitcoin.html')),
    "validacion-2fa": new PAI.Layout(new PAI.Page('./submenu/cuentas/bitcoin.html')),
    "validacion-2fa": new PAI.Layout(new PAI.Page('./submenu/cuentas/bitcoin.html')),
    "validacion-2fa": new PAI.Layout(new PAI.Page('./submenu/cuentas/bitcoin.html')),
    "validacion-2fa": new PAI.Layout(new PAI.Page('./submenu/cuentas/bitcoin.html')),
    // END: submenu/cuentas
    
    404: new PAI.Layout(new PAI.Page('404.html')),
    // 404: new PAI.Layout(new PAI.Page('menu.html'), new PAI.Page('404.html')),
    '#default': new PAI.Page('home.html'),
  },

  // Luego, se pasa el elemento en donde la ruta se injectara
  document.getElementById('pai-spa-container')
);