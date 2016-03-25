async function go(...args){
  console.log(...args);
}

module.exports = (function(){
    //alternative APIs: https://randomuser.me/api/
    let url = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';

    //ES7 support (async/await)
    (async() => {
       try {
	     //supports fetch on node  
             let response = await fetch(url);
             let data = await response.json();
             console.log(data);
       } catch (e) {
          console.error(`${e}`);
       }
    })();

}());
