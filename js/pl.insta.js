//Define a namespace
var PL = PL || {};

PL.insta = PL.insta || {};

var img = new Image(),
		r = 212,
		g = 140,
		b = 46,
		h = 0,
		w = 0,
		s = .5,
		canvas = '',
		context,
		tool,
		color;

PL.setupCanvas = function(){
	canvas = document.getElementById('imageView');
	if (!canvas) {
		alert('Error: I cannot find the canvas element!');
		return;
	}
	if (!canvas.getContext) {
		alert('Error: no canvas.getContext!');
		return;
	}
	context = canvas.getContext('2d');
	if (!context) {
		alert('Error: failed to getContext!');
		return;
	}
	//PL.addImage("https://graph.facebook.com/"+ fbuid+"/picture?type=large");
	PL.addImage("images/flower-07.jpg");
	PL.takePhoto();
}
PL.takePhoto =  function(){
	$('section.canvas').animate({
		top:-30+'px'
	}, 1500);
}
PL.setupSliders = function(){
	$(".red").slider({
			value: r,
			min: 0,
			max: 255,
			step: 1,
			stop: function(event, ui) {
				r = ui.value;
				PL.clear();
				PL.saturation(r, g, b);
			}
	});
	$(".green").slider({
			value: g,
			min: 0,
			max: 255,
			step: 1,
			stop: function(event, ui) {
				g = ui.value;
				PL.clear();
				PL.saturation(r, g, b);
			}
	});
	$(".blue").slider({
			value: b,
			min: 0,
			max: 255,
			step: 1,
			stop: function(event, ui) {
				b = ui.value;
				PL.clear();
				PL.saturation(r, g, b);
			}
	});
	$(".noise").slider({
			value: s,
			min: 0,
			max: 1,
			step: .1,
			stop: function(event, ui) {
				PL.clear();
				PL.saturation(r, g, b);
				PL.noise(ui.value);
			}
	});
}
PL.addImage = function( imgurl ){
	img.addEventListener('load', function () {
		PL.color(this, 0, 0, this.width, this.height);
		PL.saturation(r, g, b);
		PL.noise();
	}, false);
	img.src = imgurl;
}

PL.insta.pageLoad = function(f) {
	this.queue = this.queue || [];
	if (arguments.length > 0) {
		var loaded = this.queue.length;
		for (var i = 0; i < arguments.length; i++) {
			this.queue[i+loaded] = arguments[i];
		}
	}	else if (this.queue.length > 0) {
		for (var i = 0; i < this.queue.length; i++) {
			this.queue[i]();
		}
	} else {
		return false;
	}	
};

PL.insta.pageLoad(PL.setupCanvas, PL.setupSliders);