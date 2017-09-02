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
	<script src="/js/jquery-ui-latest.js"></script>
	<script src="/js/typewriting.min.js"></script>
	<script src="/secure/lang/c/js-min/fd.min.js"></script>
	
<title>Function Declaration</title>

<style>
.margin-top-20 {
	margin-top: 20px;
}

.color-rose {
	color: #8B008B;
}

#informationdiv {
	background-color: rgb(243, 235, 235);
    border-radius: 8px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    min-height: 136px;
    color: black;
    padding: 6px 2px;
    font-family: monospace;
}

.introjs-tooltip {
	min-width: 241px;
}

.color-green {
	color: green;
	font-weight: bold;
}

.zindex10 {
	background: white;
	z-index: 9999999;
	position: relative;
}
</style>
</head>
<body>
	<div class='text-center margin-top-20'><h1 class='label ct-demo-heading text-center'>Function Declaration</h1></div>
	<div class='col-xs-12'><div id='informationdiv' class='col-xs-8 col-xs-offset-2 opacity00 margin-top-20'></div></div>
	<div class='col-xs-12'>
		<div class='col-xs-offset-4 text-center	col-xs-4 ' id='declaration3'>
			<pre id='format' class='opacity00 margin-top-20'><span id='returnType3' class='color-rose'><b>return_type</b></span><span id='functionName3'> function_name</span><span id='argument3'>(<span class='color-rose'><b>parameter_types</b></span>)</span><span id='semicolon3'>;</span></pre>
		</div>
	</div> 
	<div class='col-xs-12' id='firstDeclarationdiv'>
		<div class='col-xs-offset-4 text-center	col-xs-4 visibility-hidden' id='declaration1'>
			<pre id='example1' style='margin-top: 25px'><span id='returnType' class='color-rose'><b>int </b></span><span id='functionName'> sum</span><span id='argument'> (<b class='color-rose'>int</b>, <b class='color-rose'>int</b>)</span><span id='semicolon'>;</span></pre>
			<pre id='example2' style='margin-top: 20px'><span id='returnType1'><b class='color-rose'>void </b></span><span id='functionName1'> display</span><span id='argument1'> (<b class='color-rose'>void</b>)</span><span id='semicolon1'>;</span></pre>	
			<pre id='example3' style='margin-top: 20px'><span id='returnType2'><b class='color-rose'>int </b></span><span id='functionName2'> gettime</span><span id='argument2'> (<b class='color-rose'>void</b>)</span><span id='semicolon2'>;</span></pre>
		</div>
	</div>
	<div class="col-xs-12 text-center" id="button">
		<button class="btn btn-warning opacity00 margin-top-20" id='restartBtn'>Restart</button>
	</div>
</body>
<script>
	$(document).ready(function() {
		functionDeclarationReady();
	});
</script>
</html>