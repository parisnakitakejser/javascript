(function( $ ){
	
	var method =
	{
		name : '',
		selected : null,
		handleTreeNodes : function(object, settings, level)
		{
			level = typeof level !== 'undefined' ? level : 0;
			
			$( object.children( "li" ) ).each(function( index )
			{
				if ( $(this).attr('data-value') == method.selected[level] )
					$(this).addClass('text-success');
				else
					$(this).addClass('text-muted');
				
				if ( settings.expandAll == true )
				{
					$(this).children('ol').show();
					
					$( document.createElement('i') )
					.addClass('fa fa-caret-down')
					.prependTo( $(this) );
				}
				else
				{
					if ( $(this).attr('data-value') == method.selected[level] )
					{
						$(this).children('ol').show();
						$(this).addClass('text-success');
						
						$( document.createElement('i') )
						.addClass('fa fa-caret-down')
						.prependTo( $(this) );
					}
					else
					{
						$(this).children('ol').hide();
						$(this).addClass('text-muted');
						
						$( document.createElement('i') )
						.addClass('fa fa-caret-right')
						.prependTo( $(this) );
					}
				}
				
				if ( settings.method != null )
				{
					if ( $(this).attr('data-value') == method.selected[level] && (method.selected.length-1) == level )
						var selected = true;
					else
						var selected = false;
					
					// if method is radio
					if ( settings.method == 'radio' )
					{
						$( document.createElement('input') )
						.attr('type', 'radio')
						.attr('name', method.name )
						.attr('value', $(this).attr('data-value'))
						.attr('checked', selected)
						.prependTo( $(this) );
					}
				}
				
				// If ol child are found
				if ( $(this).children('ol').length )
				{
					method.handleTreeNodes($(this).children('ol'),settings,(level+1 ));
				}
			});
		}
	};
	
	$.fn.treelist = function(options)
	{
		var settings = $.extend({
			expandAll : false,
			method : null,
			selected : null
		}, options );
		
		method.name = $(this).attr('data-name');
		method.selected = settings.selected.split(',');
		method.handleTreeNodes($(this), settings);
		
		return this;
	};
	
}(jQuery));