async function getQuotes() {  
    const quotes = './js-project/data.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    console.log(data);
  }
  export default getQuotes;