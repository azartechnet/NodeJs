var i=1
setTimeout(function(){
    console.log("Finished");
    i++;
},0);
if(i==1)
{
    console.log("Waiting");
}
else
{
    console.log("i value did not change");
}