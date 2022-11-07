(function(d){
	
	// d = document
	
		const $nav = d.querySelector('.nav-list');
		const $btn = d.querySelector('#menu-button');

			$btn.addEventListener('mouseenter', function(){
	
				$nav.classList.toggle('nav-show');
				
				$nav.addEventListener('mouseleave', function(){
					$nav.classList.toggle('nav-show');	
				});

			});

			$btn.addEventListener('touch', function(){
				$nav.classList.toggle('nav-show');
			});

})(document);

var shiftWindow = function() { scrollBy(0, -80) };
window.addEventListener("hashchange", shiftWindow);
function load() { if (window.location.hash) shiftWindow(); }