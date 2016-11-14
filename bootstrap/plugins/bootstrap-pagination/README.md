# bootstrap-pagination
Bootstrap pagination function make its posibule to type fast pagination if you using Bootstrap.

Sample code:

	$('.pagination').pagination({
		total: 25, // max pagenumber
		current: 3, // current page
		view : {
			max : 5, // view max butten to left and right after current button
			next : true, // view next button
			previous : true // view previous button
		},
		url : {
			link : 'callback' // callback({pagenumber}) function you want to call
		}
	});
