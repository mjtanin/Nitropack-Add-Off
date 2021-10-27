addEventListener('load', nitroOff)
function nitroOff() {
  const nitroOffscreen = Array.from(document.querySelectorAll('.nitro-offscreen'));

  if(nitroOffscreen.length !== 0) {
    nitroOffscreen[nitroOffscreen.length-1].style.marginBottom = '-35px';
  }
}