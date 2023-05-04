<?php

$stm="select distinct(typ) from go;";
$r=$db->query($stm);

$ar=array();

while($ro=$r->fetchArray()){
array_push($ar,$ro);
}
$cnt=count($ar);

sort($ar);
?>


