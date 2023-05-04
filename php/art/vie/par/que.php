<?php

$ver=SQLite3::version();
echo $ver["versionString"];

$dbn=rt."/db/php.db";
echo $dbn;

$db=new SQLite3($dbn);
$q="select * from bib;"

?>
