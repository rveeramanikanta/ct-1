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
<script src="/secure/lang/c/js-min/oc.min.js"></script>
<title>one's complement</title>
<style>
.input-text {
	border: 2px solid gold;
	text-align: center;
	border-radius: 5px;
	width: 18%;
}

.ct-code-b-black {
	color:	black;
	position: relative;
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

.ct-code-b-red {
	color: red;
}

.information-div {
	background-color: rgb(243, 235, 235);
	border-radius: 10px;
	z-index: 9999999;
}

.animation-div {
	min-height: 150px;
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

.line-div {
	border: 1px solid gray;
}

.result-div {
	min-height: 25px;
}

.blinking {
	animation-name: blink;
	animation-duration: 1s;
	animation-iteration-count: 2;
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
		onesComplementReady();
	});
</script>

	<h2 class="text-center">
		<span class="label label-default ct-demo-heading">One's Complement</span>
	</h2>
	<div id="informationDiv" class="col-xs-offset-2 col-xs-8 information-div margin-top20">
		<div class="col-xs-12 margin-top20" id="text" style="margin-bottom: 15px; font-family: monospace;">
			<ul>
				<li class="opacity00" id="li1"><b>One's complement</b> of a binary number is defined as a value
					obtained by inverting all the bits of that number which is represented in a binary form, i.e. flipping all <span
					class='ct-code-b-green'>1's</span> to <span class='ct-code-b-green'>0's</span> and all <span
					class='ct-code-b-green'>0's</span> to <span class='ct-code-b-green'>1's</span>.
				</li>
				<li class="opacity00" id="li2"><b>One's complement</b> form is used in <b>two's complement</b> form which we will learn later.</li>
			</ul>
		</div>
	</div>
	<div id="inputDiv" class="col-xs-offset-4 col-xs-4 margin-top20 opacity00">
		<span>Data type : </span>
		<select id="type" style="margin-left: 20px;">
			<option value="int">int</option>
			<option value="short int">short int</option>
			<option value="long int">long int</option>
		</select> 
		<span id="number" style="margin-left: 20px;">Number : </span>
		<input type="text" id="firstNum" class="input-text opacity00" contenteditable="true" maxlength="2" placeholder="eg: 34" style="margin-left: 20px;"/>
	</div>
	<div class="col-xs-offset-3 col-xs-7 binary-value-div margin-top20" id="binaryValueDiv" style="min-height: 200px;">
		<div class="col-xs-12 padding0 margin-top20" id ="values"></div>
		<div class="col-xs-12 padding0 margin-top20" id="onesComplementValue"></div>
	</div>
	<div class="col-xs-offset-4 col-xs-4 margin-top20 text-center">
		<span class="btn btn-warning opacity00" id="restart">Restart</span>
	</div>
</body>
</html>