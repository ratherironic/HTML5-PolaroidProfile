//Define a namespace
var PL = PL || {};

var image = '',
		x = 0,
		y = 0,
		w = 0,
		h = 0;

PL.color = function(imgSrc, imgx, imgy, imgw, imgh){
	image = imgSrc;
	x = imgx;
	y = imgy;
	w = imgw;
	h = imgh;
}

PL.clear = function (){
	context.clearRect(x, y, w, h);
}

PL.saturation = function(r, g, b){
	context.drawImage(image, x, y, w, h);
	var radgrad = context.createRadialGradient( 0,0,0, 0,0,200);  
	radgrad.addColorStop(0, 'rgba(68,51,0, 0.8)');  
	radgrad.addColorStop(.6, 'rgba(187,153,0, 0.2)');  
	radgrad.addColorStop(1, 'rgba(136,85,0, 0)');
	context.fillStyle = radgrad;  
	context.fillRect(0,0,w,h);
	
	context.fillStyle = "rgba("+ r +", "+ g +", "+ b +", .2)";
	context.fillRect(x, y, w, h);
	
}
PL.setPixel = function(pX, pY, pr, pg, pb){
	context.fillStyle = "rgba("+ pr +", "+ pg +", "+ pb +", .2)";
	context.fillRect(pX, pY, 1, 1);
}
PL.noise = function(amt){
	for (var pxx = 0; pxx < w; pxx++){
		for (var pxy = 0; pxy < h; pxy++){
			if(Math.round(Math.random()*amt) == 1){
				var numr = Math.floor(Math.random()*255),
						numr1 = Math.floor(Math.random()*255),
						numr2 = Math.floor(Math.random()*255);
				PL.setPixel(pxx, pxy, numr, numr1, numr2);	
			}
		}
	}
}
