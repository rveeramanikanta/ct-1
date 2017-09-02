<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">
<link href="/css/tablesorter/jquery-ui.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/animate.css" rel="stylesheet">

<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/data-structures-css.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/secure/lang/c/js-min/bno.min.js"></script>
<title>NOT operator</title>
<style>

.input-text {
	border: 2px solid gold;
	text-align: center;
	border-radius: 5px;
	width: 18%;
}

.information-div {
	min-height: 70px;
	border-radius: 10px;
}

.animation-div {
	min-height: 200px;
}

.binary-value-div {
	font-family: monospace;
}

.binary-num {
	margin: 15px;
}

.margin-top20 {
	margin-top: 20px;
}

.nextButton {
	background-color:green;
}

.box {
	background-color: #afeeee;;
	border-radius: 2px;
	box-shadow: 0 0 9px rgba(0, 0, 0, 0.3);
	display: inline-block;
	height: 30px;
	margin: 6px;
	padding: 7.2px;
	position: relative;
	width: 30px;
}

.box-yellow {
	background-color: #f0e68c;
	border-radius: 2px;
	box-shadow: 0 0 9px rgba(0, 0, 0, 0.3);
	display: inline-block;
	height: 30px;
	margin: 6px;;
	padding: 7.2px;
	position: relative;
	width: 30px;
}

.ct-code-b-green {
	color: green;
}

.val {
	text-align: center;
}

span, div {
	position: relative;
}

.result-div span {
	display: inline-block;
}


</style>
</head>
<body>
<script>
	$(document).ready(function() {
		$("#restart").click(function(){
			$('#firstNum').val('');
			location.reload(); 
		});
		bitwiseNotOperatorReady();
	});
</script>
	<h2 class="text-center">
		<span class="label label-default ct-demo-heading">NOT
			Operator</span>
	</h2>
	<div class="margin-top20 text-center">
		<span class="btn btn-warning opacity00" id="restart">Restart</span>
	</div>
	<div id="informationDiv"
		class="col-xs-offset-2 col-xs-8 information-div margin-top20">
		<ul>
			<!-- <li class='opacity00' id='li1'><b>Bitwise</b> operators are used
				to perform operations at bit level (on binary data).</li>
			<li class='opacity00' id='li2'>In <span class='ct-code-b-green'><b>C</b></span>
				programming language we have six operators for bit manipulation
				<ul> -->
			<!-- <li>In this demo we will learn about <b>bitwise</b> <span
				class='ct-code-b-green'>NOT</span> operator.
			</li> -->
			<!-- </li> -->
			<li class='opacity00' id='li1'>The symbol used for <b>bitwise</b>
				<span class='ct-code-b-green'>NOT</span> operator (also called as <span
				class='ct-code-b-green'><b>complement</b></span> operator) is <span
				class='ct-code-b-green'>~</span> (negation).
			</li>
			<li id="li2" class="opacity00">The <b>bitwise</b> <span
				class='ct-code-b-green'><b>complement</b></span> operator is an <span
				class='ct-code-b-green'>unary</span> operator which works on a <b>single</b>
				operand. It works at the bit level. It flips all the <span
				class='ct-code-b-green'>1's</span> to <span class='ct-code-b-green'>0's</span>
				and <span class='ct-code-b-green'>0's</span> to <span
				class='ct-code-b-green'>1's</span>.
			</li>
		</ul>
	</div>
	<div id="inputDiv"
		class="col-xs-offset-3 col-xs-6 margin-top20 opacity00">
		<div class="col-xs-offset-4">
			int x = <input type="text" id="firstNum" class="input-text opacity00"
				contenteditable="true" maxlength="2" placeholder="eg: 3"/>;
		</div>
	</div>
	<div class="col-xs-offset-2 col-xs-8 binary-value-div margin-top20" id="binaryValueDiv" style="min-height: 200px;">
		<div class="col-xs-12 padding0 margin-top20" id ="values"></div>
		<div class="col-xs-12 padding0 margin-top20" id="onesComplementValue"></div>
	</div>
	<div class="col-xs-offset-4 col-xs-4 margin-top20 text-center">
		<span class="btn btn-warning opacity00" id="restart">Restart</span>
	</div>

</body>
</html>