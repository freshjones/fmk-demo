/*

	Supersized - Fullscreen Slideshow jQuery Plugin
	Version : 3.2.7
	Theme 	: Shutter 1.1
	
	Site	: www.buildinternet.com/project/supersized
	Author	: Sam Dunn
	Company : One Mighty Roar (www.onemightyroar.com)
	License : MIT License / GPL License

*/(function(e){theme={_init:function(){e(vars.next_slide).click(function(){api.nextSlide()});e(vars.prev_slide).click(function(){api.prevSlide()});e(vars.tabitem).click(function(){var t=e(this).attr("title").split("-"),n=t[1];api.goTo(n);return!1});jQuery.support.opacity&&e(vars.prev_slide+","+vars.next_slide).mouseover(function(){e(this).stop().animate({opacity:1},100)}).mouseout(function(){e(this).stop().animate({opacity:.6},100)})},goTo:function(){},beforeAnimation:function(t){e(".controls").find(".feature:visible, .control-title:visible, .spotlight-group:visible").hide();e(".controls").find(".feature-"+vars.current_slide+", .control-title-"+vars.current_slide+", .spotlight-group-"+vars.current_slide).show();e("body").removeClass().addClass("tab-theme-"+vars.current_slide)},afterAnimation:function(){}};e.supersized.themeVars={progress_delay:!1,thumb_page:!1,thumb_interval:!1,image_path:"images/",next_slide:"#nextslide",prev_slide:"#prevslide",tabitem:".slide-control"}})(jQuery);