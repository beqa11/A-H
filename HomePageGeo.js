/* slaidebad gadasvlistvis */
var img = document.getElementById('img');

var slides=['/fotoebi/1.png','/fotoebi/2.png'
,'/fotoebi/3.png','/fotoebi/4.png'
,'/fotoebi/5.png','/fotoebi/6.png'];

var Start=0;

function slider(){
    if(Start<slides.length){
        Start=Start+1 ;
    }
    else{
        Start=1;
    }
    console.log(img);
    img.innerHTML = "<img src="+slides[Start-1]+">";
   
}
setInterval(slider,5000);

/* qvemot ramdenime gilakebistvis */
function imgshemc(filename){
    let img = document.querySelector("#firstimage");
    img.setAttribute("src" , filename)
}