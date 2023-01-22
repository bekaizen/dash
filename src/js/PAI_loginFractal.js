// BEGIN: LOGIN CONTROL
function enter(user,psw) {
    if(user=='') { 
       $("#user_name").focus();
    }
    else if(psw=='') {
       $("#psw").focus();
    }
    else {
        var parametros = {
            "user" : user,
            "psw" : psw, 
        };
        $.ajax({
            data: parametros,
            // url: 'https://'+UrlAPI+'/app_login',
            url: 'https://api.paiexchange.com',
            type: 'post',
            beforeSend: function () {
                $('#loadergif').show();
            },
            success: function (response) { 
                $("#loadergif").hide();
                if(response=='')
                { 
                    $("#notifigener").removeClass('w3-green').addClass('w3-red');
                    $("#notifigener").html("<p> Hay un problema con el servidor</p>");
                    $("#notifigener").show();
                    setTimeout(function(){ $("#notifigener").hide(); }, 6000);
                }
                else if(response=='ok2') {
                    $('#loginarea').hide();
                    $('#2farea').show();
                    $('#2fa').focus();
                }
                else if(response=='ok') {
                    localStorage.setItem("Sesion", "true");
                    window.location.href="panel.html";
                }
                else {
                    $("#notifigener").removeClass('w3-green').addClass('w3-red');
                    $("#notifigener").html("<p>"+response+"</p>");
                    $("#notifigener").show();
                    setTimeout(function(){ $("#notifigener").hide(); }, 6000);
                }
                
            },
            
            error: function (response)
            {
                $("#notifigener").removeClass('w3-green').addClass('w3-red');
                $("#notifigener").html("<p> Favor verifique su conexión a internet</p>");
                $("#notifigener").show();
                setTimeout(function(){ $("#notifigener").hide(); }, 6000);
                $("#loadergif").hide();
            }
            
        });
    }
}
// END: LOGIN CONTROL


// BEGIN: 2FA SESSION
function Twofactor(code)
{
  
var parametros = {
"code" : code,
};
$.ajax({
data: parametros,
url: 'https://'+UrlAPI+'/2fa_sesion',
type: 'post',
beforeSend: function () 
{
 $('#loadergif').show();
},
success: function (response)
{

  $("#loadergif").hide();
  if(response=='')
  { 
     $("#notifigener").removeClass('w3-green').addClass('w3-red');
     $("#notifigener").html("<p> Hay un problema con el servidor</p>");
     $("#notifigener").show();
     setTimeout(function(){ $("#notifigener").hide(); }, 6000);
  }
  else if(response=='ok')
  {
    localStorage.setItem("Sesion", "true");
    window.location.href="panel.html";
    
  } else
  {
     $("#notifigener").removeClass('w3-green').addClass('w3-red');
     $("#notifigener").html("<p>Error código incorrecto</p>");
     $("#notifigener").show();
     $('#2fa').val('');
     setTimeout(function(){ $("#notifigener").hide(); }, 6000);
  }
  
},

error: function (response)
{
     $("#notifigener").removeClass('w3-green').addClass('w3-red');
     $("#notifigener").html("<p> Favor verifique su conexión a internet</p>");
     $("#notifigener").show();
     setTimeout(function(){ $("#notifigener").hide(); }, 6000);
     $("#loadergif").hide();
}

});  
}
// END: 2FA SESSION


// BEGIN: ALERTAS
function NotifiAlert(mensaje,color,tiempo)
{
     if(color=='w3-green'){ remov='w3-red'; } else { remov='w3-green'; }
     
     $("#notifigener").removeClass(remov).addClass(color);
     $("#notifigener").html("<p>"+mensaje+"</p>");
     $("#notifigener").show();
     setTimeout(function(){ $("#notifigener").hide(); }, tiempo);
}     
// END: ALERTAS

