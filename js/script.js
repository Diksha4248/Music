const sr = ScrollReveal ({
	distance: '60px',
	duration: 2500,
	reset: true
});

sr.reveal('.home-text',{delay:200, origin:'left'});
sr.reveal('.home-img',{delay:200, origin:'right'});

sr.reveal('.container',{delay:200, origin:'bottom'});