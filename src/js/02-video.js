// import Player from '@vimeo/player';

// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);
// const LOCALSTORAGE_KEY = 'videoplayer-current-time';

// player.on('timeupdate', function (data) {
//   localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
// });

// const currentTime = Number(localStorage.getItem(LOCALSTORAGE_KEY));

// player
//   .setCurrentTime(currentTime)
//   .then(function (seconds) {
//     // seconds = the actual time that the player seeked to
//   })
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         // the time was less than 0 or greater than the video’s duration
//         break;

//       default:
//         // some other error occurred
//         break;
//     }
//   });
