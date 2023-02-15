async function getQuotes() {  
    let bgNum;
    const quoteEl = document.querySelector('.quote')
    const authorEl = document.querySelector('.author')
    const changeQuoteEl = document.querySelector('.change-quote')
    const quotes = './js-project/data.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    
    function getRandomNum (min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
   
    function getRandomQuote() {
    bgNum = getRandomNum(0, data.length - 1)
    quoteEl.textContent = data[bgNum].text
    authorEl.textContent = data[bgNum].author
    }
    getRandomQuote()
    changeQuoteEl.addEventListener('click', getRandomQuote )

  }
  export default getQuotes;