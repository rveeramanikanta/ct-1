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
<script src="/js/jquery.scrollTo.js"></script>
<script src="/secure/lang/c/js-min/tc.min.js"></script>
<title>Two's complement</title>
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
.prevButton {
	 background-color: #5bc0de !important;
    border-radius: 3px !important;
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
	position: relative;
	background-color: white;
}

.z-index-carry-css {
	z-index: 9999999;
	position:relative;
	background-color: white;
	border-radius: 12px;
	padding: 3px 9px;
}

.binary-value-div {
	font-family: monospace;
	min-height: 200px;
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
	color: green;
}

.ui-effects-transfer {
	border: 1px solid black;
	border-radius: 15px;
	z-index: 999999999;
}

.result-div {
	min-height: 25px;
}

.red {
	color: red;
}

.padding0 {
	padding: 0 !important;
}

.table-border {
	border: 2px solid lightgray;
	text-align: center;
}

.table-border-css {
	background-color: gray;
	color: white;
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

.ct-code-b-red {
	color: red;
}

.introjs-tooltiptext {
	size: auto;
}

.green-color-css {
	background-color: lightgreen;
}

.restartBtn {
	padding: 3px 3px;
}

</style>
</head>
<body>

	<script>
		$(document).ready(function() {
			twosComplementReady();
		});
	</script>

	<h2 class="text-center">
		<span class="label label-default ct-demo-heading">Two's Complement</span>
	</h2>
	<div id="informationDiv" class="col-xs-offset-2 col-xs-9 information-div margin-top20" style="font-family: monospace;">
		<div class="col-xs-8 margin-top20" id="text">
			<ul>
				<li class="opacity00" id ="li1"><b>Two's complement</b> form can be performed on both <span
					class='ct-code-b-green'><b>negative</b></span> and <span class='ct-code-b-green'><b>positive</b></span> numbers.
					However, since <b>two's complement</b> form on a positive number does not alter the value of the number, 
					let us consider performing <b>two's complement</b> form on a negative number.
				</li>
				<li class="opacity00" id ="li2">The below sequence of steps are followed to arrive at a <b>two's complement</b> of a given value :</li>
				
				
				<ol>
					<li class="opacity00" id ="li3">The given number has to be converted into its binary form.</li>
					<li class="opacity00" id ="li4"><b>One's complement</b> will be applied on the binary 
						digits arrived in step 1.<br> (i.e, <span class='ct-code-b-green'><b>0's</b></span> are flipped to 
						<span class='ct-code-b-green'><b>1's</b></span> and <span class='ct-code-b-green'><b>1's</b>
						</span> are flipped to <span class='ct-code-b-green'><b>0's</b></span>)
					</li>
					<li class="opacity00" id ="li5">Finally, <b>1</b> will be added to <b>one's complement</b> value to get
						<b>two's complement</b> value.<br>
						Note: Whenever <b>1</b> and <b>1</b> bits are added, it will result in <b>0</b> with <b>1</b> being carried-on as shown in the table.</li>
				</ol>
			</ul>
		</div>
		<div class="col-xs-3">
			<table id="table" class="table table-border opacity00" style="margin: 20px 0;">
				<tr>
					<th class="table-border table-border-css">a</th>
					<th class="table-border table-border-css">b</th>
					<th class="table-border table-border-css">a + b</th>
				</tr>
				<tr>
					<td class="table-border">0</td>
					<td class="table-border">0</td>
					<td class="table-border">0</td>
				</tr>
				<tr>
					<td class="table-border">0</td>
					<td class="table-border">1</td>
					<td class="table-border">1</td>
				</tr>
				<tr>
					<td class="table-border">1</td>
					<td class="table-border">0</td>
					<td class="table-border">1</td>
				</tr>
				<tr>
					<td class="table-border">1</td>
					<td class="table-border">1</td>
					<td class="table-border">0<br><span class="ct-code-b-green">(1 carry)</span></td>
				</tr>
			</table>
		</div>
	</div>
	<div id="inputDiv" class="col-xs-offset-4 col-xs-4 margin-top20 opacity00">
		Data type : <select id="type" style="margin-left: 20px;">
			<option value="int">int</option>
			<option value="short int">short int</option>
			<option value="long int">long int</option>
		</select> 
		<span id="number" style="margin-left: 20px;">Number : </span> 
		<input type="text" id="firstNum" class="input-text opacity00" maxlength="3" placeholder="eg: -67" style="margin-left: 20px;" />
	</div>

	<div class="col-xs-offset-1 col-xs-10 binary-value-div margin-top20" id="animationDiv1">
		<div class="col-xs-12 padding0 margin-top20" id ="values"></div>
		<div class="col-xs-12 padding0 margin-top20" id="onesComplementValue"></div>
		<div class="col-xs-12 padding0" id="addOne" style="margin-top:5px;"></div>
		<div class="col-xs-12 padding0" id="twosComplementValue" style="margin-top:5px;"></div>
	</div>
	<div class="col-xs-offset-6 col-xs-2 margin-top20 opacity00" id="carryBit">
		<span style="float: right;" id ="carrySpan"><span id="carryDisplay" class="box-yellow text-center ct-code-b-black green-color-css" >
			<span style="display:inline-block;" id="carryDisplaySpan">1</span>
      </span> is the carry-on bit</span>
	</div>
	<div class="col-xs-offset-1 col-xs-10 binary-value-div" id="animationDiv2">
		<div class="col-xs-12 padding0 margin-top20" id ="secondBinaryValue"></div>
		<div class="col-xs-12 padding0 margin-top20" id="secondOnesComplementValue"></div>
		<div class="col-xs-12 padding0" id="secondAddOne" style="margin-top:5px;"></div>
		<div class="col-xs-12 padding0" id="result" style="margin-top:5px;"></div>
	</div>
	<div class="col-xs-offset-5 col-xs-4 opacity00" id="decimalValue"><span id = "displayText"> The decimal value is : </span></div>
	<div style="min-height:200px;" id="extraDiv"></div>
</body>
</html>