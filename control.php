<?php
	echo"<h1>这里是从后台传过来的数据哦！</h1><br/>";
	foreach ($_REQUEST as $key => $value) {
			echo $key."=>".$value."<br/>";
		}
?>