// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
  } else {
    progressBar.classList.remove('hide');
    if (event.detail.totalProgress === 0) {
      event.target.querySelector('.center-pre-prompt').classList.add('hide');
    }
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);

// Okay i know this is incrediably dumb but i didnt want to put in the 5 mins research to do it properly because i dont know how to program...

function toggleOffsets() {
  document.getElementById('Hotspot').classList.toggle('none');
  document.getElementById('Hotspot').classList.toggle('Hotspot');
  document.getElementById('Hotspot1').classList.toggle('none');
  document.getElementById('Hotspot1').classList.toggle('Hotspot');
  document.getElementById('Hotspot2').classList.toggle('none');
  document.getElementById('Hotspot2').classList.toggle('Hotspot');
  document.getElementById('Hotspot3').classList.toggle('none');
  document.getElementById('Hotspot3').classList.toggle('Hotspot');
  document.getElementById('Hotspot4').classList.toggle('none');
  document.getElementById('Hotspot4').classList.toggle('Hotspot');
  document.getElementById('Hotspot5').classList.toggle('none');
  document.getElementById('Hotspot5').classList.toggle('Hotspot');
  document.getElementById('Hotspot6').classList.toggle('none');
  document.getElementById('Hotspot6').classList.toggle('Hotspot');
  document.getElementById('Hotspot7').classList.toggle('none');
  document.getElementById('Hotspot7').classList.toggle('Hotspot');
  document.getElementById('offsetInfo').classList.toggle('body');
  document.getElementById('offsetInfo').classList.toggle('Hotspot');
  }

