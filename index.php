<?php
	if(!isset($_COOKIE["view"])){
		setcookie("view",1);
		echo "第一次访问<br/>";
		require("index.html");
	}else if($_COOKIE["view"]==1){
		echo "不是第一次访问<br/>";
		require("index.html");	
	}else{
		echo "这里不是访问页面";
	}
?>