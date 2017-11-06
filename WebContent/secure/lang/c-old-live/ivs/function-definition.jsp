<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link rel="stylesheet" href="/css/bootstrap.min.css">
	<link rel="stylesheet" href="/css/introjs.css">
	<link rel="stylesheet" href="/css/introjs-ct.css">
	<link rel="stylesheet" href="/css/animate.css"/>
	<link rel="stylesheet" href="/css/jquery-ui.css"/>
	<link rel="stylesheet" href="/css/font-awesome.min.css">
	
	<script src="/js/jquery-latest.js"></script>
	<script src="/js/bootstrap.js"></script>
	<script src="/js/gs/TweenMax.min.js"></script>
	<script src='/js/intro.js'></script>
	<script src="/js/typewriting.min.js"></script>
	<script src="/js/jquery-ui-latest.js"></script>
	<script src="/secure/lang/c/js-min/fdf.min.js"></script>
	
	<title>function definition</title>
<style>

.color-rose {
	color:#8B008B;
}

#informationdiv {
	background-color: rgb(243, 235, 235);
    border-radius: 8px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    min-height: 120px;
    margin-top: 20px;
    color: black;
    padding: 10px;
    font-family: monospace;
}

.introjs-tooltip {
    min-width: 241px;
}
 
.color-green {
 	color: green;
 	font-weight: bold;
}

.margin-top-20 {
	margin-top: 20px;
}

pre {
	tab-size: 4;
	-moz-tab-size: 4;
	font-family: monospace;
}


.zindex10 {
	background: white;
	z-index: 9999999;
	position: relative;
}
</style>
</head>
<body>
<div class='margin-top-20 text-center'>
	<h1><div id='title' class='label ct-demo-heading'>Function Definition</div></h1>
</div>
<div class='col-xs-12'>
	<div id='informationdiv' class='col-xs-8 col-xs-offset-2 opacity00'>
	</div>
</div>
<div class='col-xs-12' >
		<div class='col-xs-offset-4  col-xs-4 ' id='declaration2'>
<pre id='format' style='margin-top: 25px;' class='opacity00'><span id='returnType1' class='color-rose'> <b>return_type </b></span><span id='functionName1'> function_name</span><span id='argument1'> (<b class='color-rose'>parameters</b>)</span><span id='openbrace'> { </span>
	<span id='functionBody'><span>declaration part;</span> 
	<span id='functionBody1'>executable statements;</span></span>
	<span id='returnValue'>return value </span>;
}</pre>
	</div>
</div>
	<div class='col-xs-12' id='firstDeclarationdiv'>
		<div class='col-xs-offset-4  col-xs-4 opacity00' id='declaration1'>
<pre style='margin-top: 25px;'> <span id='functionDeclaration'><span id='returnType' class='color-rose'><b>int </b></span><span id='functionName'> sum</span><span id='argument'> (<b class='color-rose'>int </b>a, <b class='color-rose'> int </b>b)</span></span><span id='openbrace'> { </span>
	 <span id='functionBody3'><span><b class='color-rose'>int </b></span> s<span>;</span>
	 s = a + b;</span>
	 <span id='returnS'><b class='color-rose'>return </b> s;</span>
 }</pre>
		</div>
	</div>
<div class="button col-xs-12 text-center " id="button">
	<button class="btn btn-warning opacity00" type="button" id='restartBtn' style='margin-top:4px'>Restart</button>
</div>

</body>
<script>
	$(document).ready(function() {
		functionDefinitionReady();
	});
</script>
</html>