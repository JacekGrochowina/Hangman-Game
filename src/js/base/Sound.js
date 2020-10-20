class Sound {
    constructor(soundSrc, loop = false) {
        this.soundSrc = soundSrc;
        this.loop = loop;
        this.sound = new Audio(this.soundSrc);
    }

    play() {
        this.sound.play();
        this.sound.loop = this.loop;
        this.sound.autoplay = true;
    }

    stop() {
        this.sound.pause();
        this.sound.currentTime = 0;
    }

    pause() {
        this.sound.pause();
    }
}

export const gameSound = new Sound('./assets/sounds/game-sound.mp3', true);
export const loseSound = new Sound('./assets/sounds/lose.mp3');
export const winSound = new Sound('./assets/sounds/win.mp3');
