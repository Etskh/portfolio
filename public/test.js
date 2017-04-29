


$(document).ready(function() {

	var titles = [
		'Prior experience',
		'Intermediate',
		'Very Proficient',
		'Expert',
	];
    var titleDescription = [
        'I\'ve used it in the past, and feel comfortable developing in it',
        'I\'ve used it quite a bit and I can easily jump into large projects',
        'I know the ins-and-outs of this language and its gotchas and new features',
        'I know how the language works under the hood, and have tought others about it',
    ];
	$('.skill').hover(function() {
		var index = Math.floor(parseFloat(this.dataset.points)*titles.length);
		$('#skill-title').text(titles[index]);
        $('#skill-title-description').text(titleDescription[index]);
		$('#skill-information').text(this.dataset.content);
		var position = $(this).position();
		$('#skill-cursor').css({top: position.top});
		$('#skill-cursor').show('fast');
	});


	//
	// Smooth-scroll polyfill
	//

	const scrollSpeed = 500;
	const scrollOffset = -64;
	$('a[href*="#"]:not([href="#"])').click(function() {
		event.preventDefault();
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top + scrollOffset,
				}, scrollSpeed);
				return false;
			}
		}
	});

	//
	// Skill bars
	//
	(function(){
		function lerp(v0, v1, t) {
			return v0 + t * (v1 - v0);
		}
		function toHex(val) {
			val = parseInt(val).toString(16);
			if( val.length === 1 ) {
				val = '0' + val;
			}
			return val;
		}
		function lerpToHex(val) {
			return toHex(lerp(180, 90, val));
		}

		$('.skill').each(function() {
			var points = parseFloat(this.dataset.points);
			$(this).css({
				width: lerp(30, 100, points) + '%',
				background: '#'+ lerpToHex(points) + 'b632',
			});
		});
	})();
});
