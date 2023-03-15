var count=0;



//slider going forward and backward function
function slide(n)
{
    if(count==0 && n==-1)
    {
        document.querySelector(".slider-img").style.transitionDuration="2s";
    }
    else if(count==24 && n==1)
    {
        document.querySelector(".slider-img").style.transitionDuration="2s";
    }
    else
    {
        document.querySelector(".slider-img").style.transitionDuration="0.6s";
    }

    count=count+n;

    if(count<0)
    {
        count=24;
    }
    
    
    document.querySelector(".slider-img").style.left=`-${((count%25))*65}vw`;
    document.querySelector("#slide-number").innerHTML=`${(count%25)+1}/25`;
}