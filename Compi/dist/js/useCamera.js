const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const capturedImage = document.getElementById('capturedImage');
const cameraArea = document.getElementById('cameraArea');
const imageArea = document.getElementById('imageArea');
const imgTest = document.getElementById('img-primera')


function captureImage() {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
  const imageSrc = canvas.toDataURL('image/png');
  capturedImage.src = imageSrc;
  cameraArea.style.display = 'none';
  imageArea.style.display = 'block';
}

function retakeImage() {
  capturedImage.src = '';
  cameraArea.style.display = 'block';
  imageArea.style.display = 'none';
}

function deleteImage() {
  capturedImage.src = '';
  cameraArea.style.display = 'block';
  imageArea.style.display = 'none';
}

const capturedImagePreview = document.querySelector('.preview')
const idFormUpload = document.querySelector('#uploadImage')
const inputFile = document.querySelector('#uploadFile')
function deletePreview() {
  console.log(uploadFile.files[0]);
  capturedImagePreview.children[0].src = '';
  capturedImagePreview.children[0].style.display = 'none';
  idFormUpload.reset()
  console.log(uploadFile.files[0]);
}