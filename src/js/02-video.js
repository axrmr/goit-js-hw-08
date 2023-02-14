import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
// Object with { save, get,remove} methods to manage LOCALSTORAGE data.
import $localStorage from './local-storage-api';

const VIMEO_LOCALSTORAGE_KEY = 'videoplayer-current-time';
const playerEl = document.querySelector('#vimeo-player');
const vimeoPlayer = new Player(playerEl);

vimeoPlayer.on('timeupdate', throttle(onPlay, 1000));

setPlaybackPosition();

function onPlay(data) {
  $localStorage.save(VIMEO_LOCALSTORAGE_KEY, { seconds: data.seconds });
}

function setPlaybackPosition() {
  if (!$localStorage.get(VIMEO_LOCALSTORAGE_KEY)) {
    return;
  }

  const { seconds: playedSeconds } = $localStorage.get(VIMEO_LOCALSTORAGE_KEY);

  vimeoPlayer.setCurrentTime(playedSeconds);
}
