<?php require_once("constants_local.php"); ?>
<?php 
	$connection=mysql_connect(DB_SERVER, DB_USER, DB_PASS);
	if(!$connection)
	{
		die("Database connection failed: ".mysql_error());
	}

	$dbselect=mysql_select_db(DB_NAME,$connection);
	if(!$dbselect)
	{
		die("Database selection failed: ".mysql_error());
	}
	


?>