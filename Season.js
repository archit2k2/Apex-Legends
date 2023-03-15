var count=0;


//stoping the running youtube video when we move on to the next video
const stopVideos = (element) => {
     element.src = element.src ;
  };
  
//using local storage to store the id of character whose info is requested by user
function char_info(element)
{
    localStorage.setItem('char', element.id);
}


//going forward for slider
function increment()
{
    count=count+1;
    var a=document.querySelector(".slider-video");

    if(count%4==0)
    {
        var v=document.querySelector('#v4');
        stopVideos(v);
        a.style.left="0vw";
    }
    else if(count%4==1)
    {
        var v=document.querySelector('#v1');
        stopVideos(v);
        a.style.left="-60vw";
    }
    else if(count%4==2)
    {
        var v=document.querySelector('#v2');
        stopVideos(v);
        a.style.left="-120vw";
    }
    else
    {
        var v=document.querySelector('#v3');
        stopVideos(v);
        a.style.left="-180vw";
    }

    document.querySelector("#slide-number").innerHTML=`${(count%4)+1}/4`;
}



//going backward in slider
function decrement()
{
    count=count-1;
    if(count<0)
    {
        count=3;
    }
    var a=document.querySelector(".slider-video");

    if(count%4==0)
    {
        var v=document.querySelector('#v2');
        stopVideos(v);
        a.style.left="0vw";
    }
    else if(count%4==1)
    {
        var v=document.querySelector('#v3');
        stopVideos(v);
        a.style.left="-60vw";
    }
    else if(count%4==2)
    {
        var v=document.querySelector('#v4');
        stopVideos(v);
        a.style.left="-120vw";
    }
    else
    {
        var v=document.querySelector('#v1');
        stopVideos(v);
        a.style.left="-180vw";
    }

    document.querySelector("#slide-number").innerHTML=`${(count%4)+1}/4`;
}



//open and close function of the popup for the video div
function openpopup()
{
    document.querySelector(".popup").style.display="flex";
    document.querySelector(".window").style.display="none";
}

function closepopup()
{
    var c=document.getElementById("popup-video");
    stopVideos(c);
    document.querySelector(".popup").style.display="none";
    document.querySelector(".window").style.display="block";
}