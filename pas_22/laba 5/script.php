<?php

$d = $x1 = $x2 = 0;

$d = pow($_POST['b'],2) - 4*$_POST['a']*$_POST['c'];
if($d < 0) 
{
	$arr = array('x1'=>'no anwser', 'x2'=>'no anwser');

	echo json_encode($arr);
} else 
{
	$x1 = ((0-$_POST['b']) + sqrt($d))/2*$_POST['a'];
	$x2 = ((0-$_POST['b']) - sqrt($d))/2*$_POST['a'];

	$arr = array('x1'=>$x1, 'x2'=>$x2);
	echo json_encode($arr);
}
