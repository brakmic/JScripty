(function(global){
  var date = new Date();
  console.log(`Using a template string: ${date.toString()}`);

  const testfun = () => {
	  console.log('Arrow functions!');
  };

  testfun();

}(global));
