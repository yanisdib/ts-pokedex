export const playConfirmSound = () => {
    const audioFile = require('../../assets/sounds/select-sound.mp3');
    const audio: HTMLAudioElement = new Audio(audioFile);

    audio.play();
}