var arr = [
            {
                id: "ea",
                p1: "Visit EA App for pricing",
                p2: "EA APP ON PC"
            },
            {
                id: "steam",
                p1: "Visit Steam for pricing",
                p2: "STEAM ON PC"
            },
            {
                id: "ps",
                p1: "Visit the PlayStation®Store for pricing",
                p2: "PLAYSTATION 4"
            },
            {
                id: "xbox",
                p1: "Visit the Microsoft® Store for pricing",
                p2: "XBOX ONE"
            }
]

function changedesc(element)
{
    arr.forEach((e)=>{
        if(e.id==element.id)
        {
            document.querySelector("#p1").innerText=e.p1;
            document.querySelector("#p2").innerText=e.p2;
        }
    })
}


const stopVideos = (element) => {
    element.src = element.src ;
 };

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