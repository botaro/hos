<?php
define("rt",dirname(__FILE__));
$pos="/mnt/home/.config/composer/vendor/autoload.php";

$son=file_get_contents("./.env.json");
$ar=json_decode($son);

define("nam",$ar->nam);
define("pss",$ar->pss);

?>
