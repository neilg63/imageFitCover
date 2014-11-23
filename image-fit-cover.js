(function($) {
	/*
	* @author: Neil Gardner neilgardner1963@gmail.com 14/11/2014
	 */

	$.fn.imageFitCover = function(){
		
		var container = this, imgs, numContainers=0, frameWidth = 0,frameHeight = 0, objectFitSupported=false;
		
		var resetSize = function(){
			var w=0, h=0,i=0, attrs={}, img, par,tar;
			if (imgs.length>0) {
				for (;i<numContainers;i++) {
					attrs={width:'auto',height:'auto', left:0,top:0};
					frameWidth = container.outerWidth();
					frameHeight = container.outerHeight();
					tar = frameWidth / frameHeight;
					img = imgs.eq(i);
					h = img.attr('height') - 0;
					if (h > 0) {
						w = img.attr('width') - 0;
						if (w > 0) {
							par = w / h;
							if (tar > par) {
								attrs.width = '100%';
								attrs.top = 0-Math.abs((frameHeight-(frameWidth/par))/2) + 'px';
							} else {
								attrs.height = '100%';
								attrs.left = 0-Math.abs((frameWidth-(frameHeight*par))/2) + 'px';
							}
							img.css(attrs);
						}
					}
				}
			}
		}
		
		var init = function() {
			numContainers = container.length;
			if (numContainers>0) {
				imgs = container.find('img');
				if (imgs.length>0) {
					var check = document.createElement('div');
					objectFitSupported = !!(0 + check.style['object-fit']);
					if (!objectFitSupported) {
						container.removeAttr('style').css({overflow:'hidden'});
						if ( imgs.eq(0).css('position')  == 'static') {
							imgs.css('position','relative');
						}
						resetSize();
						$(window).on('resize', function(e) {
							resetSize();
						});
					}
				}
			}
		}
		setTimeout(init,100);
		return this;
	}
	
})(jQuery);