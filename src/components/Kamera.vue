<script setup>
     const video = document.getElementById('videoElement');
        const canvas = document.getElementById('canvasElement');
        const captureButton = document.getElementById('captureButton');

        // Zugriff auf die Kamera des Geräts erhalten
        async function getCameraStream() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                video.srcObject = stream;
            } catch (err) {
                console.error('Error accessing the camera: ' + err);
            }
        }

        getCameraStream();

        // Bild aufnehmen, wenn der "Foto aufnehmen" Button geklickt wird
        captureButton.addEventListener('click', function() {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
            
            // Aufgenommenes Bild anzeigen
            const imageDataURL = canvas.toDataURL('image/png');
            const image = new Image();
            image.src = imageDataURL;
            document.body.appendChild(image);
        });
</script>

<template>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kamera-App</title>
  </head>
  <body>
    <video id="videoElement" autoplay></video>
    <button id="captureButton">Foto aufnehmen</button>
    <canvas id="canvasElement"></canvas>
  </body>
 
</template>

<style scoped>

</style>