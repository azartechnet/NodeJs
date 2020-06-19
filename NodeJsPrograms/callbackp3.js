try{
     //var i=0;
     setTimeout(function(){
      console.log("Finished");
      i++;
      console.log("Normal Code..");
     });

}
catch(err)
{
    console.log("An error occurred",e)
}