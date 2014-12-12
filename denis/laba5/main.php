<?php


$mass = array() ;
foreach( $_POST as $value) {
	$mass[] = $value;
}


$weight = 0;
$price = 0;
for ($i=0; $i < count($mass); $i++) { 
	if ($i%2 == 0) {
		$weight = $weight + $mass[$i];
	} else {
		$price = $price + $mass[$i];
	}
}

echo "Общая вес: ". $weight;
echo "Общая ценность: ". $price;