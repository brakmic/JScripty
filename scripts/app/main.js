async function go(...args){
  console.log(...args);
}

module.exports = (function(){
    let url = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';
		//go('hello','welt');
    
    
    //EC7 support (async/await)
    (async() => {
       try {
	     //supports fetch on node  
             let response = await fetch(url);
             let data = await response.json();
             console.log(data);
       } catch (e) {
          console.log(`${e}`);
       }
    })();


    go('hello','world');

    }());
