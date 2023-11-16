import Player from '@vimeo/player';
import Throttle from 'lodash.throttle';
import { common } from '../common.js';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', Throttle(onPlay, 1000));

function onPlay(e) {
    localStorage.setItem(common.LS_KEY_VIDEOPLAYER, e.seconds);
}

setCurrentTime();

function setCurrentTime() {
    const localTime = localStorage.getItem(common.LS_KEY_VIDEOPLAYER);
    if (localTime) {
        player.setCurrentTime(localTime);
    }
}
