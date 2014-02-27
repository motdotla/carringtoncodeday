var countDown = function(callback){
  var count = 5;
  var counter = setInterval(function() {
    console.log(count);

    count = count - 1;
    if (count < 0) {
      clearInterval(counter);
      callback("LIFT OFF!");
    }
  }, 1000);
}

countDown(function(resp) {

  console.log(resp);
});
