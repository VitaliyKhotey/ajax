$(document).ready(function() {
	$('#sub').on('click', function() {
		event.preventDefault();
		$('ul').remove();
		console.log('click');
		$.ajax({
			url: 'script.php',
			type: 'post',
			data: {
				a: $('#a').val(),
				b: $('#b').val(),
				c: $('#c').val()
			},
			success: function(data) {
				var answer = JSON.parse(data);
				console.log(answer.x1,answer.x2);

				var $ul = $('<ul>');
				var $li = $('<li>');
				var $li2 = $('<li>');
					$li.text("x1= " + answer.x1);
					$li2.text("x2= " + answer.x2);
					$ul.append($li);
					$ul.append($li2);

				$('body').append($ul);
			} 

		});
	});
});