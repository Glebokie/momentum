function saveName() {
    const nameEl = document.querySelector('.name');
    function setLocalStorage() {
        localStorage.setItem('name', nameEl.value);
      }
      window.addEventListener('beforeunload', setLocalStorage)
    
      function getLocalStorage() {
        if(localStorage.getItem('name')) {
          nameEl.value = localStorage.getItem('name');
        }
      }
      window.addEventListener('load', getLocalStorage)
    }

    export default saveName;