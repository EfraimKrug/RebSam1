<?php
/**
 * Efraim Krug
 **/
$level = "Local";
$usage = $_GET['usage'];

if($usage == "PCUser"){
	$sql = "select * FROM PCUser ORDER BY PCLNAME";
} elseif ($usage == "PCAuthor"){
	$sql = "select * FROM PCAuthor ORDER BY PCLNAME";
} elseif ($usage == "PCText"){
	$sql = "select * FROM PCText T, PCParush P WHERE P.PCTEXTID = T.PCTEXTID";
} else {
	$sql = "select * FROM PCUser ORDER BY PCLNAME";
}

getMessages();
function getMessages() {
	$sql = $GLOBALS["sql"];
    try {
        $db = getConnection();
        $stmt = $db->query($sql);
        $messages = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;

        echo json_encode($messages);
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
}

function getConnection() {
	$level = $GLOBALS["level"];
	if($level == "Prod"){
		$dbhost="efraimmkrugcom.domaincommysql.com";
		$dbuser="pearl";     
		$dbpass="pray_613";      
		$dbname="pearl"; 
	}
	else	{
		$dbhost="localhost"; 
		$dbuser="root";     
		$dbpass="";      
		$dbname="pearl"; 
	}

    $dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $dbh;
}