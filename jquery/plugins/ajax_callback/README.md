# ajax_callback
Use this little plugin to jQuery and save you self for lots of time every time you try to make new ajax post from jQuery.

Sample code:

	function callback_success_function(data) {
	}

	function callback_error_function(data) {
	}

	$('#dialogToolbar').ajax_callback('/path/to/json',{
		'id' : $('#idInput').val()
	}, {
		alertToolbar: true,
		callback_success: callback_success_function,
		callback_error: callback_error_function
	});

Remember when you call a _callback\_success_ or _callback\_error_ in settings, you don't need to end on () its will be added inside the ajax\_callback plugin.
