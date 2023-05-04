<?php

$ver=SQLite3::version();
$ve2=$ver["versionString"];

$dbn=rt."/vie/db/php.db";

$db=new SQLite3($dbn);
$q="select * from php";
$r=$db->query($q);
?>

<table class=table>
<?php
while($row=$r->fetchArray()){

$ty=$row["typ"];
$ti=$row["tit"];
$te=$row["ter"];
echo "<tr><td>".$ty;
echo "</td><td>".$ti;
echo "</td><td>".$te;
echo "</td></tr>";

}
?>
</table>
