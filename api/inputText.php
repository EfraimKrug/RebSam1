<!DOCTYPE html>
<html>
<body>
<?php

$hebrewText = "תִּקנְתָּ שַׁבָּת רָצִיתָ קָרְבְּנוֹתֶיהָ צִוִּיתָ פֵּרוּשֶׁיהָ עִם סִדּוּרֵי נְסָכֶיהָ מְעַנְּגֶיהָ לְעוֹלָם כָּבוֹד יִנְחָלוּ טוֹעֲמֶיהָ חַיִּים זָכוּ ";
$hebrewText .= "וְגַם הָאוֹהֲבִים דְּבָרֶיהָ גְּדֻלָּה בָּחָרוּ אָז מִסִּינַי נִצְטַוּוּ צִוּוּי פָּעֳלֶיהָ כָּרָאוּי";

$sql = array(
"INSERT INTO PCText

(PCTEXT,PCTRANSLATION,PCTRANSLITERATION, PCCITATION)
VALUES
('$hebrewText', 'Establishing Sabbath makes desireable your offerings, you have commanded the libation offerings in their order', 'TAKANTA SHABBOS ROTZE KARBONOSEHA TZIVUHA PERUSHEHA NESACHEHA SIDDUREHA', 'Shabbos Musaf');",
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