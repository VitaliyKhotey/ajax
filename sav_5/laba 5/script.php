<?php

$first = $_POST['first'];
$second = $_POST['second'];
$option = $_POST['operation'];

if ($option == "plus") {
	$a = decbin($first);
	$b = decbin($second);

	$anwser =$first+$second;

	$arr = array('a'=>$a,'b'=>$b,'anwser'=>$anwser);
	echo json_encode($arr);

} else if ($option == "minus") {
	$a = decbin($first);
	$b = decbin($second);

	$anwser = $first - $second;

	$arr = array('a'=>$a,'b'=>$b,'anwser'=>$anwser);
	echo json_encode($arr);
}


