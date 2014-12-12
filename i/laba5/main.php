<?php
if( $_POST['select'] == 's' ) {
	$s = 4 * pow($_POST['radius'],2) * pi();
	echo "Площадь= ".$s;
} else if( $_POST['select'] == 'v' ) {
	$v =  4/3 * pow($_POST['radius'],3) * pi();
	echo "Обьем= ".$v;
}