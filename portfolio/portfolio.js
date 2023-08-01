const logoList= document.getElementById("logo-list")
const flyerList = document.getElementById("flyer-list")
const illustrationsList=document.getElementById("illustration-list")
const socialmediaList = document.getElementById("socialmedia-list")
function copyClipboard()
{
    let phone =document.getElementById("phone")
    phone.textContent="Copied"
    navigator.clipboard.writeText("91762 66062")

        
           
}
let logos=[
    "images/logos/bslogo.png",
    "images/logos/Chischool.png",
    "images/logos/Gulfparlor.png" ,
    "images/logos/helthifemlogo.png",
    "images/logos/quest.png",
    "images/logos/TB.png",
]
let flyers=[
    "images/flyer/biriyani-tawfeeq.png",
    "images/flyer/d4u-poster.png",
    "images/flyer/pongal.png",
    "images/flyer/sandwich-flyer.png" 
]
let illustrations=[
    "images/illustrations/Avanzarlogo.png" ,
    "images/illustrations/eatandeat.png",
    "images/illustrations/oricopy.png"
]
let socialmedia=[
    "images/social-media/Eat&Eatposter10.png",
    "images/social-media/Eat&Eatposter5.png",
    "images/social-media/Eat&EatposterA1.png",
    "images/social-media/Eat&EatposterA3.png" ,
    "images/social-media/lpposter1.png",
    "images/social-media/poster1.png" ,
    "images/social-media/poster-1.png" ,
    "images/social-media/poster-4.png"
]
imagelooping(logos,"logoimg",logoList)
imagelooping(flyers,"flyerimg",flyerList)
imagelooping(illustrations,"illustrationimg",illustrationsList)
imagelooping(socialmedia,"socialmediaimg",socialmediaList)
function imagelooping(list,name,listVariable){
    for(let i=0;i<list.length;i++)
    {
        displayImage(list[i],name,listVariable)
    }
}


function displayImage(image,class_name,listVariable)
{
    let addImage = `<li class="image-hover-class"><img class=${class_name} src=${image}></li>`
    listVariable.innerHTML+=addImage

}