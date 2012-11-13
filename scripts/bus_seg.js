jQuery(function($){
	
	
	$.address.strict(0).history(false).init(function(event) { 
		
		var start = 1;
 		switch(event.value)
 		{
	 		case 'covering-solutions':
	 			start = 1;
	 		break;
	 		
	 		case 'graphic-design':
	 			start = 2;
	 		break;
	 		
	 		case 'luxury-packaging':
	 			start = 3;
	 		break;
	 		
	 		case 'performance-boards':
	 			start = 4;
	 		break;
	 		
	 		case 'print-media':
	 			start = 5;
	 		break;
	 		
	 		case 'security':
	 			start = 6;
	 		break;
	 		
	 		case 'technical-specialties':
	 			start = 7;
	 		break;
 		
	 		case 'technical-textiles':
	 			start = 8;
	 		break;
 		
 		}
 		/*
		var start = 1;
		
		if(event.value != "")
		{
			var whichSlideArray = event.value.split('-');
	    	var start = parseInt(whichSlideArray[1]) + 1;
		}
		*/
		$.supersized({
			
			slideshow               :   1,			// Slideshow on/off
			autoplay				:	0,		
			start_slide				:	start,
			stop_loop				:	0,			// Pauses slideshow on last slide
			random					: 	0,			// Randomize slide order (Ignores start slide)
			slide_interval          :   3000,		// Length between transitions
			transition              :   7, 			// 0-None, 1-Fade
			transition_speed		:	750,		// Speed of transition
			new_window				:	0,			// Image links open in new window/tab
			pause_hover             :   0,			// Pause slideshow on hover
			keyboard_nav            :   1,			// Keyboard navigation on/off
			performance				:	1,			// 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
			image_protect			:	1,
			
			// Size & Position						   
			min_width		        :   0,			// Min width allowed (in pixels)
			min_height		        :   0,			// Min height allowed (in pixels)
			vertical_center         :   1,			// Vertically center background
			horizontal_center       :   1,			// Horizontally center background
			fit_always				:	0,			// Image will never exceed browser width or height (Ignores min. dimensions)
			fit_portrait         	:   1,			// Portrait images will not exceed browser height
			fit_landscape			:   0,			// Landscape images will not exceed browser width
			
			thumb_links				:	0,			// Individual thumb links for each slide
			thumbnail_navigation    :   0,			// Thumbnail navigation
			// Components							
			slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
			slides 					:  	[			// Slideshow Images
												{image : 'images/slide-0.jpg', title : 'Image Credit: Maria Kazvan'},
												{image : 'images/slide-1.jpg', title : 'Image Credit: Maria Kazvan'},  
												{image : 'images/slide-2.jpg', title : 'Image Credit: Maria Kazvan'},
												{image : 'images/slide-3.jpg', title : 'Image Credit: Colin Wojno'},
												{image : 'images/slide-4.jpg', title : 'Image Credit: Colin Wojno'},
												{image : 'images/slide-5.jpg', title : 'Image Credit: Colin Wojno'},
												{image : 'images/slide-6.jpg', title : 'Image Credit: Brooke Shaden'},
												{image : 'images/slide-7.jpg', title : 'Image Credit: Brooke Shaden'}
										]
			
		});
		
		
	});
	
});