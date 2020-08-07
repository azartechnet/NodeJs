var i=1;
setTimeout(function(){//function does not execute first
    console.log("Finished")
    i++;
});
if(i==1)//condition is checked before function is run i=0
{
    console.log('Waiting');
}
else{
    console.log("i value did not change");//output
}