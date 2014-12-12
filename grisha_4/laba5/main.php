<?php
if ($_POST['radius'] < 0){
	echo "r";
}
else if ($_POST['height'] < 0){
	echo "h";
}
else if ($_POST['length']< 0){
	echo "l";
}
 else {
	if( $_POST['select'] == 's' ) {
	$s = $_POST['radius'] * $_POST['length'] * pi();
	echo "Площадь= ".$s;
} else if( $_POST['select'] == 'v' ) {
	$v =  1/3 * pow($_POST['radius'],2) * $_POST['height'] * pi();
	echo "Обьем= ".$v;
}
}

