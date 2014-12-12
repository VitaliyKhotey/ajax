$(document).ready(function() {
	var i = 0;
	// добавление 
	$('#form').find("#add").on('click', function(){
		i++;
		var $a = $("<input>").attr("name","weight" + i);
		var $b = $("<input>").attr("name","price" + i);
		$('#form').find('fieldset').append($a);
		$('#form').find('fieldset').append($b);
		$('#form').find('fieldset').append("<br />");
	});


	// отправка на сервер
	$('#form').find("input[type='submit']").on('click', function(){
		event.preventDefault();
		$('div').remove();
		$.ajax({
			url: 'main.php',
			type: 'POST',
			data:$('#form').serialize(),
			success: function(data) {
				console.log(data);
				$div = $('<div>');
				$('body').append($div.text(data));
			}
		});
	});
});