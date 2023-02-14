function bodySlider() {
    const bodyEl = document.querySelector('body')
    let randomNum ;
    let bgNum;
    const slideNextEl = document.querySelector('.slide-next')
    const slidePrevEl = document.querySelector('.slide-prev')
    function getRandomNum (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNum
      }
   
    let setBg = () => {  
        bgNum = getRandomNum(1, 20)
        bgNum = String(bgNum);
        bgNum = bgNum.padStart(2,'0')
        let greetingEl = document.querySelector('.greeting')
        let timeOfDay = greetingEl.textContent.split(' ').splice(1,1).join(' ');
        const img = new Image();
        img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
        img.onload = () => {      
          bodyEl.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`
        }; 
        }
        setBg()

        function getSlideNext() {
            randomNum++
            if(randomNum > 20) {
            randomNum = 1
            }
            setBg()
        }
        function getSlidePrev() {
            randomNum--
            if(randomNum < 1) {
            randomNum = 20
            }
            setBg()
        }
        slideNextEl.addEventListener('click', getSlideNext)
        slidePrevEl.addEventListener('click', getSlidePrev)
}

export default bodySlider;