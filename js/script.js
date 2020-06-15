
	// $(document).ready(function()
	// {
	// 	$('.service_frontend').waypoint(function(direction){
	// 		$('.service_frontend').addClass('bounceInRight');
	// 	},{
	// 		offset:'50%'
	// 	});
	// });


	$(document).ready(function()
		{
			console.log('ready and loaded');
			
			$('.name_animate').addClass('display_pop');
			 // $(".name_animate").removeClass("name_animate");

		});



	$(document).ready(function()
	{
		$('.animate_title').addClass('display_pop_1');
	});


	$(document).ready(function()
	{
		$('.intro_button').addClass('animate_intro_button');
	});



	// $(document).ready(function()
	// {
	// 	$('.animate').waypoint(function(direction){
	// 		$('.animate').addClass('animated bounceInRight');
	// 		 $('.animate').addClass('slow');
	// 		 $('.animate').addClass('animate__repaet-3');
	// 		 // $('.animate').addClass('slow');
	// 	},{
	// 		offset:'50%'
	// 	});
	// });


	$(document).ready(function()
	{
		$('.animate').waypoint(function(direction){
			$('.animate_service_left').addClass('animated bounceInRight');
			 $('.animate_service_left').addClass('slow');
			 $('.animate_service_left').addClass('animate__repaet-3');
			 // $('.animate').addClass('slow');
		},{
			offset:'50%'
		});
	});

	$(document).ready(function()
	{
		$('.animate').waypoint(function(direction){
			$('.animate_service_right').addClass('animated bounceInLeft');
			 $('.animate_service_right').addClass('slow');
			 $('.animate_service_right').addClass('animate__repaet-3');
			 // $('.animate').addClass('slow');
		},{
			offset:'50%'
		});
	});

