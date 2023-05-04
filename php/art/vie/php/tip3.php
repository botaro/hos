<?php
if($met=="POST"){
$pos=$_POST["tip"];
$tit="select tit from go where typ=:typ";
$cid="select rowid from go where tit=:tit";
$ter="select ter from go where typ=:typ";

$stm=$db->prepare($tit);
$stm->bindValue(":typ",$pos);
$r=$stm->execute();

while($ro=$r->fetchArray(SQLITE3_NUM)){
array_push($ar1,$ro[0]);
}

$stm2=$db->prepare($ter);
$stm2->bindValue(":typ",$pos);
$r2=$stm2->execute();

while($ro=$r2->fetchArray(SQLITE3_NUM)){
array_push($ar2,$ro[0]);
}

$stm3=$db->prepare($ter);
$stm3->bindValue(":tit",$pos);
$r3=$stm3->execute();

while($ro=$r3->fetchArray(SQLITE3_NUM)){
array_push($ar3,$ro[0]);
}


$cnt=count($ar1);
$cn2=count($ar2);

echo "<table table-striped>";
for($j=0;$j<$cnt;$j++){

echo "<tr>";
echo "<td class='p-2 text-white bg-bl1'>";
echo $ar1[$j];
echo "</td><td class='p-2 text-white bg-bl2'>";
echo $ar2[$j];
echo "</td>";
echo "</tr>";
}
echo "</table>";

}


?>


