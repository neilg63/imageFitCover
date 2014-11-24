/* imageFitCover v0.1 | Author: Neil Gardner, 2014 | License: GPL */
(function($) {

	$.fn.imageFitCover = function(){
		
		var container = this, imgs, numContainers=0, objectFitSupported=false;
		
		var setNaturalSize = function(img) {
			// Use width and height attributes if available, these should match desired aspect ratio
			if (!img.attr('width') && !img.attr('height')) {
				var image = new Image();
				image.src = img.attr("src");
				$(image).on('load',function(){
					var im = $(this)[0];
					if (im.naturalWidth) {
						img.attr({width:im.naturalWidth,height:im.naturalHeight});
					} else {
						// Old IE < 9
						img.attr({width:im.width,height:im.height});
					}
				});
			}
		}
		
		var setNaturalSizes = function(imgs) {
			if (imgs.length>0) {
				for (var i=0;i<numContainers;i++) {
					setNaturalSize($(imgs[i]));
				}
			}
		}
		
		var resizeImg = function(index) {
			if (imgs.length > index) {
				var img = imgs.eq(index),w=0, h=0,i=0, fw=0, fh=0,attrs={width:'auto',height:'auto', left:0,top:0}, par,tar;
				fw = container.eq(index).width();
				fh = container.eq(index).height();
				tar = fw / fh;
				//img.attr({width:'auto',height:'auto'});
				//img.on('load',function(){
				
				h = img.attr('height') -0;
				w = img.attr('width') -0;
				if (h > 0 && w > 0) {
					par = w / h;
					if (tar > par) {
						attrs.width = '100%';
						attrs.top = 0-Math.abs((fh-(fw/par))/2) + 'px';
					} else {
						attrs.height = '100%';
						attrs.left = 0-Math.abs((fw-(fh*par))/2) + 'px';
					}
					img.css(attrs);
				}
			}
		}
		
		var resetSize = function(){
			if (imgs.length>0) {
				for (var i=0;i<numContainers;i++) {
					resizeImg(i);
				}
			}
		}
		
		var init = function() {
			numContainers = container.length;
			
			if (numContainers>0) {
				imgs = container.find('img');
				if (imgs.length>0) {
					// Check support for object-fit property
					var check = document.createElement('div');
					objectFitSupported = !!(0 + check.style['object-fit']);
					if (!objectFitSupported) {
						container.removeAttr('style').css({overflow:'hidden'});
						// images must have a non-static position
						if ( imgs.eq(0).css('position')  == 'static') {
							imgs.css('position','relative');
						}
						setNaturalSizes(imgs);
						imgs.on('load',function(){
							setTimeout(resetSize,10);
							$(window).on('resize', resetSize);
						});
					}
				}
			}
		}
		init();
		return this;
	}
	
})(jQuery);
