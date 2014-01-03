<!DOCTYPE html>
<html>
<body>
<?php
$sql = array(
"DROP DATABASE pearl;",
"CREATE DATABASE pearl;",

"DROP TABLE PCText;",  
"DROP TABLE PCParush;",
"DROP TABLE PCAuthor;",
"DROP TABLE PCUser;",
"DROP TABLE PCEvent;",
"DROP TABLE PCSubEvent;",
"DROP TABLE PCEventSpeaker;",
"DROP TABLE PCSubEventSpeaker;",

"CREATE TABLE PCAuthor
(PCAUTHORID smallint NOT NULL AUTO_INCREMENT,
PCTITLE varchar(5),
PCFNAME varchar(15),
PCLNAME varchar(15),
PCEMAIL varchar(75),
PCPHONE varchar(10),
PRIMARY KEY(PCAUTHORID));",

"CREATE TABLE PCUser
(PCUSERID smallint NOT NULL AUTO_INCREMENT,
PCTITLE varchar(5),
PCFNAME varchar(15),
PCLNAME varchar(15),
PCEMAIL varchar(75),
PCPHONE varchar(10),
PRIMARY KEY(PCUSERID))",

"CREATE TABLE PCParush
(PCPARUSHID smallint NOT NULL AUTO_INCREMENT,
PCTEXTID smallint,
PCPARUSH varchar(1024),
PRIMARY KEY(PCPARUSHID))",

"CREATE TABLE PCEvent
(PCEVENTID smallint NOT NULL AUTO_INCREMENT,
PCSTARTDATE date,
PCENDDATE date,
PCSTARTTIME time,
PCENDTIME time,
PCTITLE varchar(64),
PCINSTITUTION varchar(64),
PCORGANIZINGUSER smallint,
PRIMARY KEY(PCEVENTID))",

"CREATE TABLE PCSubEvent
(PCSUBEVENTID smallint NOT NULL AUTO_INCREMENT,
PCSTARTDATE date,
PCENDDATE date,
PCSTARTTIME time,
PCENDTIME time,
PCTITLE varchar(64),
PCORGANIZINGUSER smallint,
PCINSTITUTION varchar(64),
PCEVENTID smallint NOT NULL,
PRIMARY KEY(PCSUBEVENTID))",

"CREATE TABLE PCEventSpeaker
(PCEVENTID smallint NOT NULL,
 PCSPEAKERID smallint NOT NULL,
 PRIMARY KEY(PCEVENTID, PCSPEAKERID))",

"CREATE TABLE PCSubEventSpeaker
(PCSUBEVENTID smallint NOT NULL,
 PCSPEAKERID smallint NOT NULL,
 PRIMARY KEY(PCSUBEVENTID, PCSPEAKERID))",
 
"CREATE TABLE PCText
(PCTEXTID smallint NOT NULL AUTO_INCREMENT,
PCTEXT varchar(1024),
PCTRANSLATION varchar(1024),
PCTRANSLITERATION varchar(1024),
PCCITATION varchar(24),
PCAUTHORID smallint,
PRIMARY KEY(PCTEXTID))",
);

include_once 'DB2.php';
include 'ENVIRONMENT.php';
#$dbObject = DBFactory::getFactory()->getDB(ENVIRONMENT);
#
#for($i=0;$i<2;$i++)
#{
#if ($dbObject->runRawSQL($sql[$i]))
#  {
#  echo "<br>" . stristr($sql[$i],"(", true) . " Successful<br>";
#  }
#else
#  {
#  echo "<br>Database Error: " . $dbObject->displayError();
#  echo "<br>{{ $sql[$i] }}";
#  }
#}
#exit;
#
#$dbObject = null;
$dbObject = DBFactory::getFactory()->getDB(ENVIRONMENT);

for($i=2;$i<count($sql);$i++)
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