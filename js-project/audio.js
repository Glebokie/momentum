import playList from './playList.js';
function audioPlayer() {
const playBtn = document.querySelector('.play');
const prevBtn = document.querySelector('.play-prev');
const nextBtn = document.querySelector('.play-next');
const audioPlayer = document.querySelector(".player");
let playNum = 0;
let isPlay = false;
const audio = new Audio();
let playNumPrev = 0;

function playAudio() {
  audio.src = playList[playNum].src;
  audio.currentTime = 0;
  if(!isPlay) {
    audio.play();
    isPlay = true;
    playBtn.classList.add('pause')
     let listEl = document.querySelectorAll('.play-item')[playNum]
    listEl.classList.add('item-active')
    createText()
    
    
  }
  else {
    pauseAudio() 
    playBtn.classList.remove('pause')
    
    
  }
}

function pauseAudio() {
  audio.pause();
  isPlay = false;
  
  
}
playBtn.addEventListener('click', playAudio);

function playNext(){
  playNumPrev = playNum;
  ++playNum
  if (playNum > playList.length - 1) 
  { 
    playNum = 0
  }
  isPlay = false;
    createText()
    playAudio()
    audio.play();
    let listEl = document.querySelectorAll('.play-item')[playNum]
    let listElPrev = document.querySelectorAll('.play-item')[playNumPrev]
    listEl.classList.add('item-active')
    listElPrev.classList.remove('item-active')
    
    
}
function playPrev(){
  playNumPrev = playNum;
  --playNum
  if (playNum < 0) {
    playNum = playList.length - 1
  }
    isPlay = false;
    createText()
    playAudio()
    audio.play();
    let listEl = document.querySelectorAll('.play-item')[playNum]
    let listElPrev = document.querySelectorAll('.play-item')[playNumPrev]
    listEl.classList.add('item-active')
    listElPrev.classList.remove('item-active')
    
    
}

prevBtn.addEventListener('click', playPrev);
nextBtn.addEventListener('click', playNext);


function getLi() {
  
  for(let i = 0; i < playList.length; i++) {
    const playListContainer = document.querySelector('.play-list') 
    const li = document.createElement('li');
    li.classList.add('play-item')
    playListContainer.append(li)
    li.textContent = playList[i].title
    
  }

 
}
getLi()

function createDiv() {
  
  const playerContainer = document.querySelector('.player')
  const title = document.createElement('div');
  title.classList.add('play-div')
  playerContainer.prepend(title)
  title.textContent = 'Music Player by Glebokie'
}
createDiv()

function createText() {
  const title = document.querySelector('.play-div')
  let listEl = document.querySelectorAll('.play-item')[playNum]
  title.textContent = listEl.textContent
  
}


audio.onended = function() {
  playNext();
};

audio.addEventListener(
  "loadeddata",
  () => {
    audioPlayer.querySelector(".timeplay .length").textContent = getTimeCodeFromNum(
      audio.duration
    );
    audio.volume = .75;
  },
  false
);

setInterval(() => {
  const progressBar = audioPlayer.querySelector(".player-progress");
  progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
  audioPlayer.querySelector(".timeplay .current").textContent = getTimeCodeFromNum(
    audio.currentTime
  );
}, 500);

function getTimeCodeFromNum(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;

  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(
    seconds % 60
  ).padStart(2, 0)}`;
}

const timeline = audioPlayer.querySelector(".player-timeline");
timeline.addEventListener("click", e => {
  const timelineWidth = window.getComputedStyle(timeline).width;
  const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
  audio.currentTime = timeToSeek;
}, false);

const volumeSlider = audioPlayer.querySelector(".volume-slider");
volumeSlider.addEventListener('click', e => {
  const sliderWidth = window.getComputedStyle(volumeSlider).width;
  const newVolume = e.offsetX / parseInt(sliderWidth);
  audio.volume = newVolume;
  audioPlayer.querySelector(".volume-percentage").style.width = newVolume * 100 + '%';
}, false)

audioPlayer.querySelector(".volume-button").addEventListener("click", () => {
  const volumeEl = audioPlayer.querySelector(".volume-container .volume");
  audio.muted = !audio.muted;
  if (audio.muted) {
    volumeEl.classList.remove("icono-volumeMedium");
    volumeEl.classList.add("icono-volumeMute");
  } else {
    volumeEl.classList.add("icono-volumeMedium");
    volumeEl.classList.remove("icono-volumeMute");
  }
});

}

export default audioPlayer;