<?php
session_start();
$code = rand(1000, 9999);
$_SESSION["captcha"] = $code;

header("Content-Type: image/png");
$image = imagecreate(100, 40);
$bg = imagecolorallocate($image, 255, 255, 255);
$text_color = imagecolorallocate($image, 0, 0, 0);
imagestring($image, 5, 25, 10, $code, $text_color);
imagepng($image);
imagedestroy($image);
?>