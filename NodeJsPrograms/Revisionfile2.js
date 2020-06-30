var inputfile=require('fs')
inputfile.readFileSync('f1.txt','utf-8',function(err,data){
    console.log(data)
});
console.log('sucess..')