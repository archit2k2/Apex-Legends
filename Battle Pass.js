
//change the background image of the div based the requested reward
function imgchange(element)
{
    var span=document.querySelectorAll(".bar-opt");
    span.forEach((e) => {
        if(e.id===element.id)
        {
            e.style.backgroundColor="Black";
        }
        else
        {
            e.style.backgroundColor="transparent";
        }
    });

    var a=`url(Images/Battle-Pass/${element.id}.jpg)`;
    document.querySelector(".premium-reward-img").style.backgroundImage=a;
}