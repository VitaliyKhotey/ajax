$(document).ready(function() {
	$('#sub').on('click', function() {
		event.preventDefault();
		$('ul').remove();
		$.ajax({
			url: 'script.php',
			type: 'post',
			data: {
				first: $('#first').val(),
				second: $('#second').val(),
				operation: $('select').val()
			},
			success: function(data) {
				var answer = JSON.parse(data);
				

				var $ul = $('<ul>');
				var $li = $('<li>');
				var $li2 = $('<li>');
				var $li3 = $('<li>');
					$li.text("Певрое число= " + answer.a);
					$li2.text("Второе число= " + answer.b);
					$li3.text("Ответ= " + answer.anwser);
					$ul.append($li);
					$ul.append($li2);
					$ul.append($li3);

				$('body').append($ul);
			} 

		});
	});
});