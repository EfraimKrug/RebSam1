<!DOCTYPE html>
<html>
<body>
<?php
$sql = array(
"INSERT INTO PCParush
(PCTEXTID,PCPARUSH)
VALUES
(1, 'Look at the davining! We have to fix the Shabbos - how? G-d Wants us to be so close... Hashem is asking us to explain the siddur until the words slide off the page and into our hearts!');",

"INSERT INTO PCParush
(PCTEXTID,PCPARUSH)
VALUES
(2, 'If we just listen... awesome! If we can just listen to the mountains the way they are davining!');",


);

include_once 'DB2.php';
include 'ENVIRONMENT.php';
$dbObject = DBFactory::getFactory()->getDB(ENVIRONMENT);

for($i=0;$i<count($sql);$i++)
{
echo "&&$sql[$i]&&";
if ($dbObject->runRawSQL($sql[$i]))
  {
  echo "<br>" . stristr($sql[$i],"(", true) . " Successful<br>";
  }
else
  {
  echo "<br>Database Error: " . $dbObject->displayError();
  echo "<br>{{ $sql[$i] }}";
  }
}
$dbObject->DBClose();
?> 

</body>
</html>