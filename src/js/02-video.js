import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const feedbackVideo = 'videoplayer-current-time';
const player = new Player('vimeo-player');

player.on('play', function () {
  console.log('played the video!');
});

const onPlay = function (data) {
  localStorage.setItem(feedbackVideo, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const savedVideo = JSON.parse(localStorage.getItem(feedbackVideo));
if (savedVideo) {
  player.setCurrentTime(JSON.parse(localStorage.getItem(feedbackVideo)));
}
