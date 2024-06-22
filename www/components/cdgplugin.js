// This is a JavaScript file

$(document).on("click", "#camera", function(){
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI,
    
    crossOriginIsolated: true,
    saveToPhotoAlbum: true
     });

function onSuccess(imageURI) {
    var image = document.getElementById('myImage');
    image.src = imageURI;
}

function onFail(message) {
    alert('Failed because: ' + message);
}
});

$(document).on("click", "#alerta", function(){
    function retorno(){
    }
    navigator.notification.alert("minha mensagem", retorno ,"aviso!", "aceito");
    
});

$(document).on("click", "#confirm", function(){
    function confirmar(buttonIndex){
        if(buttonIndex == "1"){
    navigator.notification.alert("Escolheu a opção A");
    }else{
    navigator.notification.alert("Escolheu a opção B");   
    }
    }
    navigator.notification.confirm("escolha a ou b", confirmar ,"escolha", ['A', 'B']);
});

$(document).on("click", "#beep", function(){
    navigator.notification.beep(5);
});

$(document).on("click", "#vibrar", function(){
    navigator.vibrate(3000);
});
