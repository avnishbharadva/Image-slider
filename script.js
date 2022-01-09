setInterval(n,4000);
var arr = ['./images/ipl','./images/msd3','./images/oneday'];
var i = 0;

function p(){
    if(i==0)
    {
        i = arr.length - 1;
    }
    else{
        i--;
    }
    document.querySelector('.pic').style.backgroundImage = `url('${arr[i]}.jpg')`;
}
function n(){
    if(i==(arr.length - 1))
    {
        i = 0;
    }
    else
    {
        i++;
    }
    document.querySelector('.pic').style.backgroundImage = `url('${arr[i]}.jpg')`;
}