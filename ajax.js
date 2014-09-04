var xmlhttp=new XMLHttpRequest();

function clicktest()
{
	//alert("hello");
	/*
readyState 	
存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。
    0: 请求未初始化
    1: 服务器连接已建立
    2: 请求已接收
    3: 请求处理中
    4: 请求已完成，且响应已就绪
status 	
	200: "OK"
	404: 未找到页面
	*/
	xmlhttp.onreadystatechange=function()
	{
		if(xmlhttp.readyState==4&&xmlhttp.status==200)
		{
			document.getElementById("ajaxrequest").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET","control.php?atest=thisone&otest=thistwo",true);
	//xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	//xmlhttp.send("fname=Bill&lname=Gates");
	xmlhttp.send();
}

