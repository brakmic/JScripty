(function(global) {

 const date = new Date();

 console.log(`Using template strings: ${date.toString()}`);

 const testfun = () => {
   console.log('Using arrow functions!');
 };


 const testfun2 = (...splat) => {
   console.log(...splat);
 }

 testfun();

 testfun2('1','2', '3', '4', '5', '6', 'boo!');

}(global));
