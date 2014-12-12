$(document).ready(function() {
	$('fieldset').find("input[type='submit']").on('click', function(){
		event.preventDefault();

		$('body').find('div').remove();
		$.ajax({
			url: 'main.php',
			type: 'POST',
			data: {
				'height':$('#height').val(),
				'length':$('#length').val(),
				'radius':$('#radius').val(),
				'select':$('select').val()
				},
			success: function (data) {
				var $a = $('<div>');
				var $span = $('<span>');
				$("span").remove();

				if( data == 'r') {
					
					
					$span.css("color","red");
					$("#r").append($span.text("радиус < 0"));
				}
				if( data == 'h') {
					
					$span.css("color","red");
					$('#h').append($span.text("высота < 0"));
				}
				if( data == 'l') {
					
					var $span = $('<span>');
					$span.css("color","red");
					$('#l').append($span.text("длинна < 0"));

				}

			}
				
			});
	});
});