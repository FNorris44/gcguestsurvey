(function ($) {
	$.fn.starExplosion = function() {
		var canvas, context2D;
		var starField = this;

		// Array of particles (global variable)
		var particles = [];

		var randomFloat = function (min, max) {
			return min + Math.random()*(max-min);
		};

		var Particle = function () {
			var particle = this;
			particle.scale = 1.0;
			particle.x = 0;
			particle.y = 0;
			particle.radius = 20;
			particle.color = "#000";
			particle.velocityX = 0;
			particle.velocityY = 0;
			particle.scaleSpeed = 0.5;

			this.update = function(ms) {
				// shrinking
				particle.scale -= particle.scaleSpeed * ms / 1000.0;

				if (this.scale <= 0) {
					particle.scale = 0;
				}

				// moving away from explosion center
				particle.x += particle.velocityX * ms/1000.0;
				particle.y += particle.velocityY * ms/1000.0;
			};

			this.draw = function(context2D) {
				var spikes = 5;
				var rot = Math.PI / 2 * 3;
				var x = 0;
				var y = 0;
				var step = Math.PI / spikes;
				var outerRadius = 30;
				var innerRadius = 15;

				// translating the 2D context to the particle coordinates
				context2D.save();
				context2D.translate(particle.x, particle.y);
				context2D.scale(particle.scale, particle.scale);
	      context2D.beginPath();
	      context2D.moveTo(particle.x,particle.y - outerRadius)

	      for(var i = 0; i < spikes; i++) {
	        x = particle.x + Math.cos(rot) * outerRadius;
	        y = particle.y + Math.sin(rot) * outerRadius;
	        context2D.lineTo(x,y);
	        rot += step;

	        x = particle.x + Math.cos(rot) * innerRadius;
	        y = particle.y + Math.sin(rot) * innerRadius;
	        context2D.lineTo(x, y);
	        rot += step;
	      }

	      context2D.lineTo(particle.x, particle.y - outerRadius);
	      context2D.closePath();
	      context2D.lineWidth = 5;
	      context2D.strokeStyle = particle.color;
	      context2D.stroke();
	      context2D.fillStyle = particle.color;
	      context2D.fill();

				context2D.restore();
			};
		};

		var update = function (frameDelay) {
			// clear canvas
			context2D.clearRect(0, 0, canvas.width, canvas.height);

			// update and draw particles
			for (var i=0; i<particles.length; i++) {
				// var particle = particles[i];

				particles[i].update(frameDelay);
				particles[i].draw(context2D);
			}
		};

		var createExplosion = function (x, y, color) {
			var minSize = 10;
			var maxSize = 30;
			var count = 10;
			var minSpeed = 60.0;
			var maxSpeed = 200.0;
			var minScaleSpeed = 1.0;
			var maxScaleSpeed = 4.0;
			var speed = randomFloat(minSpeed, maxSpeed);

			for (var angle=0; angle < 360; angle += Math.round(360/count)) {
				var particle = new Particle();

				particle.x = x;
				particle.y = y;
				particle.radius = randomFloat(minSize, maxSize);
				particle.color = color;
				particle.scaleSpeed = randomFloat(minScaleSpeed, maxScaleSpeed);
				particle.velocityX = speed * Math.cos(angle * Math.PI / 180);
				particle.velocityY = speed * Math.sin(angle * Math.PI / 180);
				particles.push(particle);
			}
		};

		// canvas and 2D context initialization
		canvas = document.createElement('canvas');
		canvas.id = 'explosionField';
		canvas.width  = $(starField).width();
		canvas.height = $(starField).height();
		canvas.style.position = 'absolute';
		canvas.style.top = '0px';
		canvas.style.left = '0px';
		$(starField).append(canvas);
		context2D = canvas.getContext('2d');

		var causeExplosion = function() {
			var x = randomFloat(100, 400);
			var y = randomFloat(100, 400);

			createExplosion(x, y, '#'+(Math.random()*0xFFFFFF<<0).toString(16));
			createExplosion(x, y, '#'+(Math.random()*0xFFFFFF<<0).toString(16));
			createExplosion(x, y, '#'+(Math.random()*0xFFFFFF<<0).toString(16));
		};

		// starting the game loop at 30 frames per second
		var frameRate = 30.0;
		var frameDelay = 1000.0 / frameRate;

		setInterval(function(){
			var randomNumber = Math.floor( Math.random() * 101);

			if (randomNumber > 90) {
				causeExplosion();
			}

			update(frameDelay);
		}, frameDelay);

    return starField;
  };
}(jQuery));
