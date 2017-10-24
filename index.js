$(".im1").addClass("animated bounce");
$( "#b" ).click(function() {
  $( "#b" ).addClass("animated hinge");
});


const canvas=document.getElementById("myCanvas");
const ctx=canvas.getContext("2d");
let myImg = new Image();
myImg.src="birdSpriteSheet2.png";
let spriteW = 100;
let spriteH = 90;
let spriteX = 1;
let spriteY = 2;
let dx = 500; //where
let dy = 60; //where
let dWidth = 110;
let dHeight = 90;



let draw = function(){
	ctx.clearRect(0,0, canvas.width,canvas.height);
	ctx.drawImage(myImg,spriteX,spriteY,spriteW,spriteH,dx,dy,dWidth,dHeight);
	spriteX+=100;
	dx-=60;
	
	if(spriteX>spriteW+80){
		spriteX = 1;
	}
if(dx<=1){
	dx = 500;
	dy = Math.floor(Math.random()*90);
	}
	}

setInterval(draw, 1000/3);
