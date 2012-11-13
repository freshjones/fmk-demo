/*

	Supersized - Fullscreen Slideshow jQuery Plugin
	Version : 3.2.7
	Theme 	: Shutter 1.1
	
	Site	: www.buildinternet.com/project/supersized
	Author	: Sam Dunn
	Company : One Mighty Roar (www.onemightyroar.com)
	License : MIT License / GPL License

*/

(function($){
	
	theme = {
	 	
	 	
	 	/* Initial Placement
		----------------------------*/
	 	_init : function(){
	 		
			/* Navigation Items
			----------------------------*/
		    $(vars.next_slide).click(function() {
		    	api.nextSlide();
		    });
		    
		    $(vars.prev_slide).click(function() {
		    	api.prevSlide();
		    });
		    
		    $(vars.tabitem).click(function(){
		    	
		    	var whichSlideArray = $(this).attr('title').split('-');
		    	
		    	var whichSlide = whichSlideArray[1];
		    	
		    	api.goTo(whichSlide);
		    	
		    	return false;
		    	
		    });
		    
	    	// Full Opacity on Hover
	    	if(jQuery.support.opacity){
		    	$(vars.prev_slide +','+vars.next_slide).mouseover(function() {
				   $(this).stop().animate({opacity:1},100);
				}).mouseout(function(){
				   $(this).stop().animate({opacity:0.6},100);
				});
			}
	    	
	 	},
	 	
	 	
	 	/* Go To Slide
		----------------------------*/
	 	goTo : function(){
	 		
		},
	 	
	 	/* Before Slide Transition
		----------------------------*/
	 	beforeAnimation : function(direction){

	 		var url = '';
	 		switch(vars.current_slide)
	 		{
		 		case 0:
		 			url = 'covering-solutions';
		 		break;
		 		
		 		case 1:
		 			url = 'graphic-design';
		 		break;
		 		
		 		case 2:
		 			url = 'luxury-packaging';
		 		break;
		 		
		 		case 3:
		 			url = 'performance-boards';
		 		break;
		 		
		 		case 4:
		 			url = 'print-media';
		 		break;
		 		
		 		case 5:
		 			url = 'security';
		 		break;
		 		
		 		case 6:
		 			url = 'technical-specialties';
		 		break;
	 		
		 		case 7:
		 			url = 'technical-textiles';
		 		break;
	 		
	 		}
	 		
	 		
	 		$.address.value( url );  
	 		
	 		$('.featured-wrapper-inner, .control-titles, .spotlights').fadeOut('500', function(){
	 			
	 			
	 			$('.controls')
				.find('.feature:visible, .control-title:visible, .spotlight-group:visible').hide();
	 		
		 		$('.controls')
		 			.find('.feature-' + vars.current_slide + ', .control-title-' + vars.current_slide + ', .spotlight-group-' + vars.current_slide).show();
		 		
		 		$('.slide-tab').removeClass('active');
		 		
		 		$('.slide-tab-' + vars.current_slide).addClass('active');
		 		
		 		$('body').removeClass().addClass('tab-theme-' + vars.current_slide  );
		 		
		 		$('.featured-wrapper-inner, .control-titles, .spotlights').fadeIn('500');
	 			
	 		});
	 		
	 		
	 		
	 	},
	 	
	 	
	 	/* After Slide Transition
		----------------------------*/
	 	afterAnimation : function(){
	 		
	 		
	 	}
	 	
	 };
	 
	 
	 /* Theme Specific Variables
	 ----------------------------*/
	 $.supersized.themeVars = {
	 	
	 	// Internal Variables
		progress_delay		:	false,				// Delay after resize before resuming slideshow
		thumb_page 			: 	false,				// Thumbnail page
		thumb_interval 		: 	false,				// Thumbnail interval
		image_path			:	'images/',			// Default image path
													
		// General Elements							
		next_slide			:	'#nextslide',		// Next slide button
		prev_slide			:	'#prevslide',		// Prev slide button
		
		tabitem				: 	'.slide-control'
		
	 };												
	
	
	
})(jQuery);