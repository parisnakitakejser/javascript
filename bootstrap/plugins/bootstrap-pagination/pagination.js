/*!
 * Bootstrap Pagination v1 (http://parisnakitakejser.com)
 * Copyright 2015 - Paris Nakita Kejser.
 */
(function( $ ){
	
	$.fn.pagination = function(options)
	{
		var settings = $.extend({
			total : null,
			current : null,
			url : {
				link : null
			},
			view : {
				next : true,
				previous : true,
				max : 0
			}
		}, options );
		
		$(this).empty();
		
		if ( settings.total != null && settings.current != null )
		{
			if ( settings.view.next == true && settings.current != null && settings.current > 1 )
			{
				$( document.createElement('li') )
				.append(
					$( document.createElement('a') )
					.attr('style', 'cursor: pointer;')
					.attr('onclick', settings.url.link +'('+ ( parseInt(settings.current) - 1 ) +')')
					.html('&laquo;')
				)
				.appendTo( $(this) );
			}
			
			if ( settings.view.max == 0 )
			{
				for( i = 1; i <= settings.total; i++ )
				{
					$( document.createElement('li') )
					.addClass( ( settings.current == i ? 'active' : '' ))
					.append(
						$( document.createElement('a') )
						.attr('style', 'cursor: pointer;')
						.attr('onclick', settings.url.link +'('+ i +')')
						.html( i )
					)
					.appendTo( $( this ) );
				}
			}
			else
			{
				var minList = parseInt(settings.current) - parseInt(settings.view.max);
				var maxList = parseInt(settings.view.max) + parseInt(settings.current);
				
				if ( minList > -(settings.view.max) )
				{
					for(i=minList; i < settings.current; i++)
					{
						if (i > 0 )
						{
							$( document.createElement('li') )
							.append(
								$( document.createElement('a') )
								.attr('style', 'cursor: pointer;')
								.attr('onclick', settings.url.link +'('+ i +')')
								.html( i )
							)
							.appendTo( $(this) );
						}
					}
				}
				
				$( document.createElement('li') )
				.addClass('active')
				.append(
					$( document.createElement('a') )
					.html(settings.current)
				)
				.appendTo( $(this) );
				
				if ( maxList < ( parseInt(settings.total) + parseInt(settings.view.max) ) )
				{
					for(i=1; i <= settings.view.max; i++)
					{
						if ( (parseInt(settings.current)+i) <= settings.total )
						{
							$( document.createElement('li') )
							.append(
								$( document.createElement('a') )
								.attr('style', 'cursor: pointer;')
								.attr('onclick', settings.url.link +'('+ ( parseInt(settings.current) + i ) +')')
								.html( ( parseInt(settings.current) + i ) )
							)
							.appendTo( $(this) );
						}
					}
				}
			}
			
			if ( settings.view.previous == true && settings.current != null && settings.current < settings.total  )
			{
				$( document.createElement('li') )
				.append(
					$( document.createElement('a') )
					.attr('style', 'cursor: pointer;')
					.attr('onclick', settings.url.link +'('+ ( parseInt(settings.current) + 1 ) +')')
					.html('&raquo;')
				)
				.appendTo( $(this) );
			}
		}
		else
		{
			$( document.createElement('li') )
			.html('You need to defined total or current settings')
			.appendTo( $(this) );
		}
		
		return this;
	};
	
}(jQuery));
