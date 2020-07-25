var pms=require('promise')
var promise=new Promise(function(resolve,reject){
    setTimeout(resolve,20000)
})
promise.then(function(){
  console.log('Done');
});