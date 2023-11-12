import Player from '@vimeo/player';
import Throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCAL_KEY = 'videoplayer-current-time';

player.on('timeupdate', Throttle(onPlay, 1000));

function onPlay(e) {
    localStorage.setItem(LOCAL_KEY, e.seconds);
}

setCurrentTime();

function setCurrentTime() {
    const localTime = localStorage.getItem(LOCAL_KEY);
    if (localTime) {
        player.setCurrentTime(localTime);
    }
}
