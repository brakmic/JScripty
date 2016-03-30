let testAsync = () => {
  //alternative APIs:
  //let url = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';
  let url = 'https://randomuser.me/api/';

  //ES7 support (async/await)
    (async() => {
       try {
        //supports fetch on node
        let response = await fetch(url);
        let data = await response.json();
        console.log(JSON.stringify(data, null, 4));
       } catch (e) {
          console.error(`${e}`);
       }
    })();
}

async function saySomething(...args){
  console.log(...args);
}

export default {
  testAsync,
  saySomething
}