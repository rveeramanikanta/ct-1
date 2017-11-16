<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
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
<!-- <script src="/secure/lang/c/js-min/blso.min.js"></script> -->
<script src="../js/bitwise-left-shift-operator.js" type="text/javascript"></script>
<title>Left shift</title>
<style>

.input-text {
	border: 2px solid gold;
	text-align: center;
	border-radius: 5px;
	width: 10%;
}

.syntax-box-css {
	background-color: black;
	border: 1px solid black;
	border-radius: 6px;
	color: white;
	padding: 2px;
}

.information-div {
	min-height: 70px;
	border-radius: 10px;
}

.animation-div {
	min-height: 300px;
}

.margin-top20 {
	margin-top: 20px;
}

.z-index {
	z-index: 9999999;
	position:relative;
	background-color: white;
}

.binary-value-div {
	font-family: monospace;
}

.td-border {
	border: 2px solid gray !important;
}

td {
	text-align: center;
	padding: 2px 6px !important;
}

.indexRow {
	border: none;
}

.table {
	margin-top: 70px;	
	width: 70%;
	padding: 0 !important;
}

span {
	position: relative;
}

.nextButton {
	background-color: green;
}

.ct-code-b-green {
	color:green;
}

.ct-code-b-blue {
	color: blue;
}

.ui-effects-transfer {
	border: 1px solid black; 
	border-radius: 15px;
	z-index: 999999999;
 }
 
.index {
	border-top: 2px solid transparent !important;
}

.line-div {
	border: 1px solid gray;
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

.result-div {
	min-height: 25px;
}

.blinking {
	animation-name: blink;
	animation-duration: 0.1s;
	animation-iteration-count: 1;
	animation-direction: alternate;
}

@keyframes blink {
	50% {
		background: red;
	}
}

.red {
	color: red;
}

.padding0 {
	padding: 0 !important;
}

.line {
	border: 1px solid gray;
}

.no-border {
	border: 2px solid transparent !important;
}

table {
	padding: 0 !important;
}


</style>
</head>
<body>
<script>
	$(document).ready(function() {
		$("#restart").click(function(){
			$('#firstNum').val('');
			$('#shiftNum').val('');
			location.reload(); 
		});
		bitwiseLeftShiftOperatorReady();
	});
</script>
	<h2 class="text-center">
		<span class="label label-default ct-demo-heading">Left
			shift operator</span>
	</h2>
	<div class="margin-top20 text-center">
		<span class="btn btn-warning opacity00" id="restart">Restart</span>
	</div>
	<div id="informationDiv"
		class="col-xs-offset-2 col-xs-8 information-div margin-top20">
		<ul>
			<li id="li1" class="opacity00">The <b>bitwise</b> <span class="ct-code-b-green">left shift</span> operator (<span class="ct-code-b-green"><<</span>) is used to shift the bits to the left by the given positions.</li>
			<li id="li2" class="opacity00">The syntax for the <b>bitwise</b> <span class="ct-code-b-green">left
				shift</span> operator is: <div class="col-xs-offset-2" style="font-family: monospace;"><span class="syntax-box-css">int x = y <span class="ct-code-b-yellow"><b><<</b></span>
				position;</span></div>
			</li>
		</ul>
	</div>
	<div class="col-xs-12 margin-top20" style="text-align: center;">
		<div id="inputDiv" class="col-xs-offset-2 col-xs-8 opacity00">
			<span>Qualifier : </span>
			<select id="typeQualifiers" style="margin-left: 20px;">
				<option value="unsigned">unsigned</option>
				<option value="signed">signed</option>
			</select>
			<span>&emsp;DataType : </span>
			<select id="type" style="margin-left: 20px;">
				<option value="short int">short int</option>
				<option value="int">int</option>
				<option value="long int">long int</option>
			</select> 
			<span id="number" style="margin-left: 20px;">x = </span>
				<input type="text" id="firstNum" class="input-text opacity00" contenteditable="true" maxlength="3" placeholder="eg: 34"
				style="margin-left: 20px;"/>
				 <span id="shift1">&emsp; << &emsp;</span> 
				<input type="text" id="shiftNum" class="input-text opacity00" contenteditable="true" 
				maxlength="2" placeholder="eg: 0 to 7"><span id="shiftSpan"></span>
			</input> (position)
		</div>
	</div>
	<div class="col-xs-offset-3 col-xs-6 binary-value-div margin-top20" id="binaryValueDiv">
		<div class="col-xs-2 padding0" id ="values">
			<span id="aSpan" class="opacity00">x = </span><span id="binaryNum" class="binary-num"></span>
		</div>
		<div class="col-xs-9 padding0" style="width:-moz-fit-content;width:initial;" id="">
			<div id="originalValue"></div>
			<div id="complementValue" class="margin-top20"></div>
			<div id="addOne" style="float:right;" class="opacity00">1&nbsp;</div>
			<div id="line" class="col-xs-12 line padding0 opacity00"></div>
			<div id="twosComplementResult"></div>
		</div>
	</div>
	<div id="animationDiv"
		class="col-xs-offset-2 col-xs-8 animation-div margin-top20">
		<div id="valueDiv" class="col-xs-offset-4 col-xs-7 value-div margin-top20"></div>
		<div class="table-div margin-top20" id="tableDiv">
			<table id="table" align="center" class="table">
				<tr></tr>
				<tr></tr>
				<tr></tr>
			</table>
		</div>
		<div id="resultDiv" class="col-xs-offset-3 col-xs-6 result-div margin-top20">
			<span id="resultText"></span>	
		</div>
	</div>
</body>
</html>