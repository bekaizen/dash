// <!---  BEGIN: Script para apertura de pestanas de menu  -->
function OpenOption(id) {
  if(localStorage.getItem("Sesion")!=='true') {
      window.location.href="login.html";
  }
  else {
    $("#contenido").load(id+".html", function(responseTxt, statusTxt, xhr) {     
      if(statusTxt == "success") {
        //Menu class control
        $('.blue-menu').addClass('w3-text-grey').removeClass('blue-menu');
        $('#'+id).removeClass('w3-text-grey').addClass('blue-menu');
        animateClick(id,'w3-small',50);
        $("#loadergif").hide();
        if(id=='Chat') {
          $('#menu').removeClass('w3-border-top w3-border-light-grey');
        }
        else {
          $('#menu').addClass('w3-border-top w3-border-light-grey');
        }
          
        $('#addcuenta').hide();
        
        if(id=='Intercambio' || id=='Compras' || id=='Transferir' || id=='Opciones' || verarea()=='2fa') {
          if(window.location.protocol.indexOf('http') =='-1') {
            $(document).ready(function () {
              StatusBar.backgroundColorByHexString("#ffffff");
              StatusBar.styleDefault();
            });
          }
          $('#barcolor').attr('content','#ffffff');
          $('#menusup').hide();
        }

        else if(id=='Vender') {
          if(window.location.protocol.indexOf('http') =='-1') {
            $(document).ready(function ()
            {
              StatusBar.backgroundColorByHexString("#595759");
              StatusBar.styleLightContent(); 
            });
          }
          $('#barcolor').attr('content','#595759');
          $('#menusup').show();
        }
        else {
          if(window.location.protocol.indexOf('http') =='-1') {      
            $(document).ready(function () {
              StatusBar.backgroundColorByHexString("#1565c0");
              StatusBar.styleLightContent();
            });
          }
          $('#barcolor').attr('content','#1565c0');
          $('#menusup').show();
        }
        
        $("#titname").html(id);
        history.pushState(id,id,id); 
        window.scrollTo(0, 0);      
      }
      else {
        // NotifiAlert('Verifique su conexión a internet','w3-red',6000);
        $("#loadergif").hide();
      }
    });
  }
}
// <!-- END: Apertura de pestanas de menu  -->



// <!--- BEGIN: apertura de opcion en menu -->
OpenOption('inicio');
// <!-- END: apertura de opcion en menu -->



// <!--- BEGIN: Script de evento para apertura de menu -->
window.onpopstate = function(event) {
    var tyy=window.location.pathname.split('/');
    if(tyy[(tyy.length)-1]!=='') {
      OpenOption(tyy[(tyy.length)-1]);
    } 
}
// <!--- END: Script de evento para apertura de menu --> */
