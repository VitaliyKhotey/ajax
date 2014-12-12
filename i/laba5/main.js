$(document).ready(function() {
	$('#form').find("input[type='submit']").on('click', function(){
		event.preventDefault();
		$('body').find('div').remove();
		$.ajax({
			url: 'main.php',
			type: 'POST',
			data: {
				'radius':$('#radius').val(),
				'select':$('select').val()
				},
			success: function (data) {
				console.log(data);
				var $a = $('<div>');
				$('body').append($a.text(data));
				$('body').find('div').hide();
				$('body').find('div').fadeIn(2000);
				}
			});
	});
});