if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  // La API está disponible
  navigator.mediaDevices.getUserMedia({ video: true })
  .then(function(stream) {
      // El usuario permitió el acceso a la cámara
      video.srcObject = stream;
      cameraArea.style.display = 'block';
      imageArea.style.display = 'none';
  })
  .catch(function(error) {
      if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
          // El usuario denegó el acceso a la cámara
          alert('Para usar esta función, por favor permite el acceso a la cámara.');
      // } else {
      //     // Ocurrió un error diferente
      //     alert('Se produjo un error al acceder a la cámara: ' + error.message);
      }
  });
} else {
  // La API no está disponible en este navegador
  alert('getUserMedia no está soportado en tu navegador');
}
