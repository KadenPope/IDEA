(function(d){
	
	// d = document
	
	const $nav = d.querySelector('.nav-list');
	const $btn = d.querySelector('#menu-button');
	
	$btn.addEventListener('click', function(){
		
        $nav.classList.toggle('nav-show');
        console.log("im here")
		
	});
	
	
})(document);