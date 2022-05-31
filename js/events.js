import {
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff,
} from "./elements.js";

export default function Events({ timer, sound, controls }) {
  buttonPlay.addEventListener("click", function () {
    sound.pressSound();
    controls.play();
    timer.countDown();
  });

  buttonPause.addEventListener("click", function () {
    sound.pressSound();
    controls.pause();
    timer.hold();
  });

  buttonSet.addEventListener("click", function () {
    sound.pressSound();
    let newMinutes = controls.getMinutes();
    if (!newMinutes) {
      timer.reset();
      return;
    }

    timer.updateDisplay(newMinutes, 0);
    timer.updateMinutes(newMinutes);
  });

  buttonStop.addEventListener("click", function () {
    sound.pressSound();
    controls.reset();
    timer.reset();
  });

  buttonSoundOn.addEventListener("click", function () {
    buttonSoundOn.classList.add("hiden");
    buttonSoundOff.classList.remove("hiden");
    sound.bgAudio.pause();
  });

  buttonSoundOff.addEventListener("click", function () {
    buttonSoundOff.classList.add("hiden");
    buttonSoundOn.classList.remove("hiden");
    sound.bgAudio.play();
  });
}
