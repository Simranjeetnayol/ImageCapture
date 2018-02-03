var objImage= null;
function init(){
    objImage=document.getElementById("image1");             
    objImage.style.position='relative';
    objImage.style.left='0px';
    objImage.style.top='0px';
}
function getKeyAndMove(e){              
    var key_code=e.which||e.keyCode;
    switch(key_code){
        case 37: //left arrow key
            moveLeft();
            break;
        case 38: //Up arrow key
            moveUp();
            break;
        case 39: //right arrow key
            moveRight();
            break;
        case 40: //down arrow key
            moveDown();
			break;    
		case 107:
			ZoomIn();
			break;
		case 109:
			ZoomOut();
			break;                  
    }
}
function moveLeft(){
    objImage.style.left=parseInt(objImage.style.left)-5 +'px';
    
}
function moveUp(){
    objImage.style.top=parseInt(objImage.style.top)-5 +'px';
   
}
function moveRight(){
    objImage.style.left=parseInt(objImage.style.left)+5 +'px';
    
}
function moveDown(){
    objImage.style.top=parseInt(objImage.style.top)+5 +'px';
    
}
function ZoomIn(){
	var myImg = document.getElementById("image1");
	var currWidth = myImg.clientWidth;
	if(currWidth == 500){
		alert("Maximum zoom-in level reached.");
	} else{
		myImg.style.width = (currWidth + 50) + "px";
	} 
}
function ZoomOut(){
	var myImg = document.getElementById("image1");
        var currWidth = myImg.clientWidth;
        if(currWidth == 50){
            alert("Maximum zoom-out level reached.");
        } else{
            myImg.style.width = (currWidth - 50) + "px";
        }
}

window.onload=init;


function captureImage() {
		html2canvas(document.body).then(function(canvas) {
		$('#box').append(canvas);
		console.log(canvas);
	});
}










































// function convertCanvasToImage(canvas) {
// 	console.log("hello");
// 	var image = new Image();
// 	image.src = canvas.toDataURL();
// 	return image.src;
// }

// function downloadImage() {
// var link = document.createElement('a');
// link.href = img;
// link.download = 'image.png';
// document.body.appendChild(link);
// link.click();
// }

// var canvas2 = $("<canvas>");
// var context = canvas2.get(0).getContext("2d");

// context.save();
// context.fillRect(50, 50, 100, 100);

// context.fillStyle = "rgb(255, 0, 0)";
// context.fillRect(100, 100, 100, 100);

// context.restore();
// context.fillRect(150, 150, 100, 100);

// var dataURL = canvas2.get(0).toDataURL();
//  img = $("<img></img>");
// img.attr("src", dataURL);

// canvas2.replaceWith(img);