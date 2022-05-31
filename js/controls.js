export default function Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
}) {
  function play() {
    buttonPlay.classList.add("hiden");
    buttonPause.classList.remove("hiden");
    buttonSet.classList.add("hiden");
    buttonStop.classList.remove("hiden");
  }

  function pause() {
    buttonPlay.classList.remove("hiden");
    buttonPause.classList.add("hiden");
  }

  function reset() {
    buttonPlay.classList.remove("hiden");
    buttonPause.classList.add("hiden");
    buttonStop.classList.add("hiden");
    buttonSet.classList.remove("hiden");
  }

  function getMinutes() {
    let newMinutes = prompt("Quantos minutos?");
    if (!newMinutes) {
      return false;
    }
    return newMinutes;
  }

  return {
    reset,
    play,
    pause,
    getMinutes,
  };
}
