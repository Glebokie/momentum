function showTime() {
    const timeEl = document.querySelector('.time');
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    timeEl.textContent = currentTime;
    setTimeout(showTime, 1000);
        function showDate() {
            const dateEl = document.querySelector('.date')
            const date = new Date();
            const options = {weekday:'long', month: 'long', day: 'numeric', timeZone: 'UTC',};
            const currentDate = date.toLocaleDateString('en-Br', options);
            dateEl.textContent = currentDate;
        }
        showDate() 
    
        function showGreeting() {
            const greetingEl = document.querySelector('.greeting')
            const date = new Date();
            const hours = date.getHours();
            function getTimeOfDay() {
            if(hours >= 0) {
                greetingEl.textContent = 'Good night';
            } if(hours >= 6) {
                greetingEl.textContent = 'Good morning';
            } if(hours >= 12) {
                greetingEl.textContent = 'Good afternoon';
            } if(hours >= 18) {
                greetingEl.textContent = 'Good evening';
            }
            }
            getTimeOfDay()
        }
        showGreeting()

    }

    export default showTime;