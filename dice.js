var p=Math.floor(Math.random()*6)+1;

var image="d"+p+".png";

var source="1-6/"+image;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",source);

var p1=Math.floor(Math.random()*6)+1;

var image1="d"+p1+".png";

var source1="1-6/"+image1;

var image11=document.querySelectorAll("img")[1];

image11.setAttribute("src",source1);

if(p>p1){
  document.querySelector("h1").innerHTML="🥰🥰you win";
}
else if(p1>p){
  document.querySelector("h1").innerHTML="😡😡opponent wins";
}
else{
  document.querySelector("h1").innerHTML="🤮Try again";
}
