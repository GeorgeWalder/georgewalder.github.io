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


//hides and shows markers
  const button = document.getElementById("toggleOffsets"); 
const boxes = document.getElementsByClassName("Hotspot");
const buttonPressed = () => {
  for(const box of boxes) {
    box.classList.toggle("HotspotHide");
  }
}
button.addEventListener("click", buttonPressed);

//if anyone sees this shit before i get around to fixing it i know its super dumb amd am still just throwing stuff together fast till i can do it properly... it does look really funny tho ngl. Will prob make this all into a toggle and will set atribute to autoplay or pause/reset the animations when not visable idk yet
function swapOffset() {
  document.getElementById('offset').classList.add('selected');
  document.getElementById('offset').classList.remove('hidden');
  document.getElementById('rom').classList.add('hidden');
  document.getElementById('rom').classList.remove('selected');
  document.getElementById('default').classList.add('hidden');
  document.getElementById('default').classList.remove('selected');
  document.getElementById('markers').classList.add('hidden');
  document.getElementById('markers').classList.remove('selected');
}

function swapRom() {
  document.getElementById('rom').classList.add('selected');
  document.getElementById('rom').classList.remove('hidden');
  document.getElementById('offset').classList.add('hidden');
  document.getElementById('offset').classList.remove('selected');
  document.getElementById('default').classList.add('hidden');
  document.getElementById('default').classList.remove('selected');
  document.getElementById('markers').classList.add('hidden');
  document.getElementById('markers').classList.remove('selected');
  
}

function swapMarkers() {
  document.getElementById('markers').classList.add('selected');
  document.getElementById('markers').classList.remove('hidden');
  document.getElementById('offset').classList.add('hidden');
  document.getElementById('offset').classList.remove('selected');
  document.getElementById('rom').classList.add('hidden');
  document.getElementById('rom').classList.remove('selected');
  document.getElementById('default').classList.add('hidden');
  document.getElementById('default').classList.remove('selected');
  
}
