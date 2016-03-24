async function go(...args){
  console.log(...args);
}

module.exports = (function(){
    let url = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';
		//go('hello','welt');
    (async() => {
       try {
             let response = await fetch(url);
             let data = await response.json();
             console.log(data);
       } catch (e) {
          console.log(`${e}`);
       }
    })();


	go('hello','world');

                }());
