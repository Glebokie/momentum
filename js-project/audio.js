import playList from './playList.js';
function audioPlayer() {
const playBtn = document.querySelector('.play');
const prevBtn = document.querySelector('.play-prev');
const nextBtn = document.querySelector('.play-next');
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

/*function choiceTrack() {
  if(isPlay === true) {
  let listEl = document.querySelectorAll('.play-item')[playNum]
  listEl.classList.toggle('item-active')
  }
}*/


audio.onended = function() {
  playNext();
};

}

export default audioPlayer;