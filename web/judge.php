<?php
	if (!(empty($_REQUEST["user"]) || empty($_REQUEST["problem"]) || empty($_REQUEST["session"]) || empty($_REQUEST["source"]) || empty($_REQUEST["language"])))
	{
		// get the value from POST parameter
		$user = $_REQUEST["user"];
		$problem = $_REQUEST["problem"];
		$session = $_REQUEST["session"];
		$source_code = $_REQUEST["source"];
		$language = $_REQUEST["language"];
		/*
		// for test only
		$user = 1234;
		$problem = 1;
		$session = 1;
		$source_code = "yyy";
		$language = "cpp";
		*/
		
		// connect to database
		$con = mysql_connect("localhost","root","");
		if (!$con)
		  {
		  die('Could not connect: ' . mysql_error());
		  }
		  
		// select database
		mysql_select_db("test_db", $con);
		
		// insert into submission
		$sql = "INSERT INTO submission(user_id,session_id,session_problem_id) VALUES (". $user ."," . $session . "," . $problem . ")";
		mysql_query($sql,$con);
		
		// find out the submission id
		$sql = "select last_insert_id() from submission";
		$result = mysql_query($sql);
		$row = mysql_fetch_array($result);
		$submission_id = $row[0];
		//echo $submission_id;
		
		// save source code
		mkdir("/data/submission/" . $submission_id);
		chdir("/data/submission/" . $submission_id);
		$source_code_file_name = $submission_id . "_" . $user . "_" . $session . "_" . $problem . $language;
		$file = fopen($source_code_file_name,"w");
		fwrite($file, $source_code);
		fclose($file);

		// find out the global problem id
		$sql = "select global_problem_id from session_problems where session_id=" . $session. " and session_problem_id=". $problem;
		$result = mysql_query($sql);
		$row = mysql_fetch_array($result);
		$global_problem = $row[0];
		//echo $global_problem;
		
		// copy test case input/output
		$testcase_dir = "data/testcase/". $global_problem. "/";
		copy($testcase_dir . "*", "./");
		
		// execute judge.py(compile and run in python)
		system("python judge.py " . $submission_id . " " . $language);	
	}
?>
