(function($) {
	var	aux		= {
			// navigates left / right
			navigate	: function( dir, $el, $wrapper, opts, cache ) {
<<<<<<< HEAD

				var scroll		= opts.scroll,
					factor		= 1,
					idxClicked	= 0;

				if( cache.expanded ) {
					scroll		= 1; // scroll is always 1 in full mode
					factor		= 1; // the width of the expanded item will be 3 times bigger than 1 collapsed item
					idxClicked	= cache.idxClicked; // the index of the clicked item
				}

=======
				
				var scroll		= opts.scroll,
					factor		= 1,
					idxClicked	= 0;
					
				if( cache.expanded ) {
					scroll		= 1; // scroll is always 1 in full mode
					factor		= 3; // the width of the expanded item will be 3 times bigger than 1 collapsed item	
					idxClicked	= cache.idxClicked; // the index of the clicked item
				}
				
>>>>>>> c3078793348cba1b1b832ebd69dc858a37631589
				// clone the elements on the right / left and append / prepend them according to dir and scroll
				if( dir === 1 ) {
					$wrapper.find('div.ca-item:lt(' + scroll + ')').each(function(i) {
						$(this).clone(true).css( 'left', ( cache.totalItems - idxClicked + i ) * cache.itemW * factor + 'px' ).appendTo( $wrapper );
					});
				}
				else {
					var $first	= $wrapper.children().eq(0);
<<<<<<< HEAD

=======
					
>>>>>>> c3078793348cba1b1b832ebd69dc858a37631589
					$wrapper.find('div.ca-item:gt(' + ( cache.totalItems  - 1 - scroll ) + ')').each(function(i) {
						// insert before $first so they stay in the right order
						$(this).clone(true).css( 'left', - ( scroll - i + idxClicked ) * cache.itemW * factor + 'px' ).insertBefore( $first );
					});
				}
<<<<<<< HEAD

=======
				
>>>>>>> c3078793348cba1b1b832ebd69dc858a37631589
				// animate the left of each item
				// the calculations are dependent on dir and on the cache.expanded value
				$wrapper.find('div.ca-item').each(function(i) {
					var $item	= $(this);
					$item.stop().animate({
						left	:  ( dir === 1 ) ? '-=' + ( cache.itemW * factor * scroll ) + 'px' : '+=' + ( cache.itemW * factor * scroll ) + 'px'
					}, opts.sliderSpeed, opts.sliderEasing, function() {
						if( ( dir === 1 && $item.position().left < - idxClicked * cache.itemW * factor ) || ( dir === -1 && $item.position().left > ( ( cache.totalItems - 1 - idxClicked ) * cache.itemW * factor ) ) ) {
							// remove the item that was cloned
							$item.remove();
<<<<<<< HEAD
						}
						cache.isAnimating	= false;
					});
				});

=======
						}						
						cache.isAnimating	= false;
					});
				});
				
>>>>>>> c3078793348cba1b1b832ebd69dc858a37631589
			},
			// opens an item (animation) -> opens all the others
			openItem	: function( $wrapper, $item, opts, cache ) {
				cache.idxClicked	= $item.index();
<<<<<<< HEAD
				// the item's position (1, 2, or 3) on the viewport (the visible items)
				cache.winpos		= aux.getWinPos( $item.position().left, cache );
				$wrapper.find('div.ca-item').not( $item ).hide();
				$item.find('div.ca-content-wrapper').css( 'left', cache.itemW + 'px' ).stop().animate({
					width	: cache.itemW * 3 + 'px',
=======
				// the item's position (1, 2, or 3) on the viewport (the visible items) 
				cache.winpos		= aux.getWinPos( $item.position().left, cache );
				$wrapper.find('div.ca-item').not( $item ).hide();
				$item.find('div.book-product').css( 'left', cache.itemW + 'px' ).stop().animate({
					width	: cache.itemW * 2 + 'px',
>>>>>>> c3078793348cba1b1b832ebd69dc858a37631589
					left	: cache.itemW + 'px'
				}, opts.itemSpeed, opts.itemEasing)
				.end()
				.stop()
				.animate({
					left	: '0px'
				}, opts.itemSpeed, opts.itemEasing, function() {
					cache.isAnimating	= false;
					cache.expanded		= true;
<<<<<<< HEAD

					aux.openItems( $wrapper, $item, opts, cache );
				});

=======
					
					aux.openItems( $wrapper, $item, opts, cache );
				});
						
>>>>>>> c3078793348cba1b1b832ebd69dc858a37631589
			},
			// opens all the items
			openItems	: function( $wrapper, $openedItem, opts, cache ) {
				var openedIdx	= $openedItem.index();
<<<<<<< HEAD

				$wrapper.find('div.ca-item').each(function(i) {
					var $item	= $(this),
						idx		= $item.index();

					if( idx !== openedIdx ) {
						$item.css( 'left', - ( openedIdx - idx ) * ( cache.itemW * 4 ) + 'px' ).show().find('div.ca-content-wrapper').css({
							left	: cache.itemW + 'px',
							width	: cache.itemW * 3 + 'px'
						});

=======
				
				$wrapper.find('div.ca-item').each(function(i) {
					var $item	= $(this),
						idx		= $item.index();
					
					if( idx !== openedIdx ) {
						$item.css( 'left', - ( openedIdx - idx ) * ( cache.itemW * 3 ) + 'px' ).show().find('div.book-product').css({
							left	: cache.itemW + 'px',
							width	: cache.itemW * 2 + 'px'
						});
						
>>>>>>> c3078793348cba1b1b832ebd69dc858a37631589
						// hide more link
						aux.toggleMore( $item, false );
					}
				});
			},
			// show / hide the item's more button
			toggleMore	: function( $item, show ) {
<<<<<<< HEAD
				// ( show ) ? $item.find('a.ca-more').show() : $item.find('a.ca-more').hide();
=======
				( show ) ? $item.find('a.ca-more').show() : $item.find('a.ca-more').hide();	
>>>>>>> c3078793348cba1b1b832ebd69dc858a37631589
			},
			// close all the items
			// the current one is animated
			closeItems	: function( $wrapper, $openedItem, opts, cache ) {
				var openedIdx	= $openedItem.index();
<<<<<<< HEAD

				$openedItem.find('div.ca-content-wrapper').stop().animate({
=======
				
				$openedItem.find('div.book-product').stop().animate({
>>>>>>> c3078793348cba1b1b832ebd69dc858a37631589
					width	: '0px'
				}, opts.itemSpeed, opts.itemEasing)
				.end()
				.stop()
				.animate({
					left	: cache.itemW * ( cache.winpos - 1 ) + 'px'
				}, opts.itemSpeed, opts.itemEasing, function() {
					cache.isAnimating	= false;
					cache.expanded		= false;
				});
<<<<<<< HEAD

				// show more link
				aux.toggleMore( $openedItem, true );

				$wrapper.find('div.ca-item').each(function(i) {
					var $item	= $(this),
						idx		= $item.index();

					if( idx !== openedIdx ) {
						$item.find('div.ca-content-wrapper').css({
=======
				
				// show more link
				aux.toggleMore( $openedItem, true );
				
				$wrapper.find('div.ca-item').each(function(i) {
					var $item	= $(this),
						idx		= $item.index();
					
					if( idx !== openedIdx ) {
						$item.find('div.book-product').css({
>>>>>>> c3078793348cba1b1b832ebd69dc858a37631589
							width	: '0px'
						})
						.end()
						.css( 'left', ( ( cache.winpos - 1 ) - ( openedIdx - idx ) ) * cache.itemW + 'px' )
						.show();
<<<<<<< HEAD

=======
						
>>>>>>> c3078793348cba1b1b832ebd69dc858a37631589
						// show more link
						aux.toggleMore( $item, true );
					}
				});
			},
			// gets the item's position (1, 2, or 3) on the viewport (the visible items)
			// val is the left of the item
			getWinPos	: function( val, cache ) {
				switch( val ) {
					case 0 					: return 1; break;
					case cache.itemW 		: return 2; break;
<<<<<<< HEAD
					case cache.itemW * 2 	: return 5; break;
=======
					case cache.itemW * 2 	: return 3; break;
>>>>>>> c3078793348cba1b1b832ebd69dc858a37631589
				}
			}
		},
		methods = {
			init 		: function( options ) {
<<<<<<< HEAD

				if( this.length ) {

=======
				
				if( this.length ) {
					
>>>>>>> c3078793348cba1b1b832ebd69dc858a37631589
					var settings = {
						sliderSpeed		: 500,			// speed for the sliding animation
						sliderEasing	: 'easeOutExpo',// easing for the sliding animation
						itemSpeed		: 500,			// speed for the item animation (open / close)
						itemEasing		: 'easeOutExpo',// easing for the item animation (open / close)
						scroll			: 1				// number of items to scroll at a time
					};
<<<<<<< HEAD

					return this.each(function() {

=======
					
					return this.each(function() {
						
>>>>>>> c3078793348cba1b1b832ebd69dc858a37631589
						// if options exist, lets merge them with our default settings
						if ( options ) {
							$.extend( settings, options );
						}
<<<<<<< HEAD

=======
						
>>>>>>> c3078793348cba1b1b832ebd69dc858a37631589
						var $el 			= $(this),
							$wrapper		= $el.find('div.ca-wrapper'),
							$items			= $wrapper.children('div.ca-item'),
							cache			= {};
<<<<<<< HEAD

						// save the with of one item
						cache.itemW			= $items.width();
						// save the number of total items
						cache.totalItems	= $items.length;

						// add navigation buttons
						if( cache.totalItems > 4 )
							$el.prepend('<div class="ca-nav"><span class="ca-nav-prev">Previous</span><span class="ca-nav-next">Next</span></div>')

						// control the scroll value
						if( settings.scroll < 1 )
							settings.scroll = 1;
						else if( settings.scroll > 4 )
							settings.scroll = 4;

						var $navPrev		= $el.find('span.ca-nav-prev'),
							$navNext		= $el.find('span.ca-nav-next');

						// hide the items except the first 4
						$wrapper.css( 'overflow', 'hidden' );

						// the items will have position absolute
=======
						
						// save the with of one item	
						cache.itemW			= $items.width();
						// save the number of total items
						cache.totalItems	= $items.length;
						
						// add navigation buttons
						if( cache.totalItems > 3 )	
							$el.prepend('<div class="ca-nav"><span class="ca-nav-prev">Previous</span><span class="ca-nav-next">Next</span></div>')	
						
						// control the scroll value
						if( settings.scroll < 1 )
							settings.scroll = 1;
						else if( settings.scroll > 3 )
							settings.scroll = 3;	
						
						var $navPrev		= $el.find('span.ca-nav-prev'),
							$navNext		= $el.find('span.ca-nav-next');
						
						// hide the items except the first 3
						$wrapper.css( 'overflow', 'hidden' );
						
						// the items will have position absolute 
>>>>>>> c3078793348cba1b1b832ebd69dc858a37631589
						// calculate the left of each item
						$items.each(function(i) {
							$(this).css({
								position	: 'absolute',
								left		: i * cache.itemW + 'px'
							});
						});
<<<<<<< HEAD

=======
						
>>>>>>> c3078793348cba1b1b832ebd69dc858a37631589
						// click to open the item(s)
						$el.find('a.ca-more').live('click.contentcarousel', function( event ) {
							if( cache.isAnimating ) return false;
							cache.isAnimating	= true;
							$(this).hide();
							var $item	= $(this).closest('div.ca-item');
							aux.openItem( $wrapper, $item, settings, cache );
							return false;
						});
<<<<<<< HEAD

=======
						
>>>>>>> c3078793348cba1b1b832ebd69dc858a37631589
						// click to close the item(s)
						$el.find('a.ca-close').live('click.contentcarousel', function( event ) {
							if( cache.isAnimating ) return false;
							cache.isAnimating	= true;
							var $item	= $(this).closest('div.ca-item');
							aux.closeItems( $wrapper, $item, settings, cache );
							return false;
						});
<<<<<<< HEAD

=======
						
>>>>>>> c3078793348cba1b1b832ebd69dc858a37631589
						// navigate left
						$navPrev.bind('click.contentcarousel', function( event ) {
							if( cache.isAnimating ) return false;
							cache.isAnimating	= true;
							aux.navigate( -1, $el, $wrapper, settings, cache );
						});
<<<<<<< HEAD

=======
						
>>>>>>> c3078793348cba1b1b832ebd69dc858a37631589
						// navigate right
						$navNext.bind('click.contentcarousel', function( event ) {
							if( cache.isAnimating ) return false;
							cache.isAnimating	= true;
							aux.navigate( 1, $el, $wrapper, settings, cache );
						});
<<<<<<< HEAD

						// adds events to the mouse
						// $el.bind('mousewheel.contentcarousel', function(e, delta) {
						// 	if(delta > 0) {
						// 		if( cache.isAnimating ) return false;
						// 		cache.isAnimating	= true;
						// 		aux.navigate( -1, $el, $wrapper, settings, cache );
						// 	}
						// 	else {
						// 		if( cache.isAnimating ) return false;
						// 		cache.isAnimating	= true;
						// 		aux.navigate( 1, $el, $wrapper, settings, cache );
						// 	}
						// 	return false;
						// });

=======
						
						// adds events to the mouse
						$el.bind('mousewheel.contentcarousel', function(e, delta) {
							if(delta > 0) {
								if( cache.isAnimating ) return false;
								cache.isAnimating	= true;
								aux.navigate( -1, $el, $wrapper, settings, cache );
							}	
							else {
								if( cache.isAnimating ) return false;
								cache.isAnimating	= true;
								aux.navigate( 1, $el, $wrapper, settings, cache );
							}	
							return false;
						});
						
>>>>>>> c3078793348cba1b1b832ebd69dc858a37631589
					});
				}
			}
		};
<<<<<<< HEAD

=======
	
>>>>>>> c3078793348cba1b1b832ebd69dc858a37631589
	$.fn.contentcarousel = function(method) {
		if ( methods[method] ) {
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.contentcarousel' );
		}
	};
<<<<<<< HEAD

})(jQuery);

// I tried with 4 items and these are the lines I had to change.

// LINE 12

// factor	= 4;

// LINE 54

// width	: cache.itemW * 3 + ‘px’,

// LINE 78
// $item.css( ‘left’, – ( openedIdx – idx ) * ( cache.itemW * 4 ) + ‘px’ ).show().find(

// LINE 80
// width	: cache.itemW * 3 + ‘px’

// Add the below after LINE 135

// case cache.itemW * 3 : return 4; break;

// And then from LINE 170 to LINE 178

// change all 3’s to 4

// Finally modify

// .ca-container{
// width:980px;
// }
// .ca-item{
// width:245px;
// }
=======
	
})(jQuery);
>>>>>>> c3078793348cba1b1b832ebd69dc858a37631589
