<?php
	// get the value from POST parameter
	$user = $_REQUEST["user"];
	$problem = $_REQUEST["problem"];
	$session = $_REQUEST["session"];
	$source_code = $_REQUEST["source"];
	$language = $_REQUEST["language"];
	
	// connect to database
	$con = mysql_connect("localhost","root","");
	if (!$con)
	  {
	  die('Could not connect: ' . mysql_error());
	  }

	// find out the global problem id
	chdir("/data/inout/" . $problem . "/");
	
	$submit_file = $user . "_" . $problem . ".cpp";
	
	
?>
