<?php

$ver=SQLite3::version();
$ve2=$ver["versionString"];

$dbn=rt."/db/php.db";

$db=new SQLite3($dbn);
$q="select * from php";
$r=$db->query($q);
?>

<?php
while($row=$r->fetchArray()){
echo $row["typ"]."<br>";
echo $row["tit"]."<br>";
echo $row["ter"]."<br>";
echo $row["bod"];
echo "<br><br>";
}

