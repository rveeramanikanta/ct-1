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

<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/data-structures-css.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<!-- <script src="/secure/lang/c/js-min/bxo.min.js"></script> -->
<script src="../js/bitwise-xor-operator.js" type="text/javascript"></script>
<title>Bitwise XOR</title>

<style>

[contenteditable=true]:empty:before {
	content: attr(placeholder);
	color: #B8B8A0;
}

.border {
	border: 2px solid gray;
	border-radius: 15px;
	min-height: 150px;
}

.animation-div-border {
	min-height: 200px;
	font-family: monospace;
}

.table-border {
	border: 2px solid gray;
	padding: 4px 6px;
}

.margin-top20 {
	margin-top: 20px;
}

.input-text {
	border: 2px solid gold;
	text-align: center;
	border-radius: 5px;
	width: 18%;
}

.line-div {
	border: 1px solid gray;
}

.nextButton {
	background-color: green;
}

.ct-code-b-green {
	color: green;
}

.ct-code-b-red {
	color: red;
}

.reveal-right {
	position: relative;
	overflow: hidden;
	-moz-animation: reveal-right 1s ease;
	-moz-animation-fill-mode: forwards; 
}

@-moz-keyframes reveal-right {
	0%   {width: 0%;}
	100% {width: 100%;}
}

.red-color-css {
	color: red;
}

.z-index-class {
	position: relative;
	z-index: 9999999;
	background-color: white;
}

.padding0 {
	padding: 0px;
}

.restart-tooltip-min-width {
	min-width: 110px;
}



</style>
</head>
<body>
<script>
$(document).ready(function() {
	bitwiseXorOperator();	
});
</script>
	<h2 class="text-center">
		<span class="label label-default ct-demo-heading">Bitwise XOR operator</span>
	</h2>
	<div class="margin-top20 text-center">
		<span class="btn btn-warning opacity00" id="restart">Restart</span>
	</div>
	<div id="informationDiv"
		class="col-xs-offset-2 col-xs-8 border margin-top20">
		<ul>
			<li class='opacity00' id='li1'><b>Bitwise</b> operators are used
				to perform operations at bit level (on binary data).</li>
			<li class='opacity00' id='li2'>In <span class='ct-code-b-green'><b>C</b></span> programming
				language we have six operators for bit manipulation
				<ul>
					<li>In this demo we will discuss about <b>bitwise</b> <span
						class='ct-code-b-green'>XOR</span> operator.
					</li>
				</ul></li>
			<li class='opacity00' id='li3'><b>Bitwise</b> <span
				class='ct-code-b-green'>XOR</span> operator is represented as: <span
				class='ct-code-b-green'>^</span>.</li>
			<li class='opacity00' id='li4'>When <b>bitwise</b> <span
				class='ct-code-b-green'>XOR</span> operator is performed on two bits
				the resultant value is <span class='ct-code-b-green'>0</span> when
				both the bits are either <span class='ct-code-b-green'>0</span> or <span class='ct-code-b-green'>1</span>. In all
				other cases the resultant value is <span class='ct-code-b-green'>1</span>.
			</li>
		</ul>

	</div>
	<div id="inputDiv"
		class="col-xs-offset-2 col-xs-8 margin-top20 opacity00">
		<div class="col-xs-offset-4">
			x = <input type="text" id="firstNum" class="input-text opacity00"
				contenteditable="true" maxlength="2" placeholder="eg: 45"></input>
			&emsp; y = <input type="text" id="secondNum"
				class="input-text opacity00" contenteditable="true" maxlength="2"
				placeholder="eg: 89"></input>
		</div>
	</div>
	<div id="animationDiv" class="col-xs-offset-2 col-xs-8 animation-div-border margin-top20">
		<div id="tableDiv" class="col-xs-4" style="padding: 11px;">
			<table class="table-border text-center margin-top20 opacity00"
				align="center" id="table1">
				<tr>
					<th class="table-border">operand1</th>
					<th class="table-border">operand2</th>
					<th class="table-border">operand1 ^ operand2</th>
				</tr>
				<tr id="row00">
					<td class="table-border">0</td>
					<td class="table-border">0</td>
					<td class="table-border"><span id="1">0</span></td>
				</tr>
				<tr id="row01">
					<td class="table-border">0</td>
					<td class="table-border">1</td>
					<td class="table-border"><span id="2">1</span></td>
				</tr>
				<tr id="row10">
					<td class="table-border">1</td>
					<td class="table-border">0</td>
					<td class="table-border"><span id="3">1</span></td>
				</tr>
				<tr id="row11">
					<td class="table-border">1</td>
					<td class="table-border">1</td>
					<td class="table-border"><span id="4">0</span></td>
				</tr>
			</table>
		</div>
		<div class="col-xs-8" id ="animationProcessDiv"></div>
	</div>
	<div class="col-xs-offset-5 col-xs-4 opacity00" id="display" style="display: block;"></div>
</body>
</html>
