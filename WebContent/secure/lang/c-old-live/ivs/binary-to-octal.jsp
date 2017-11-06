<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src='/js/intro.js'></script>
<script src="/secure/lang/c/js-min/bto.min.js"></script>
<link rel="stylesheet" href="/css/font-awesome.min.css">
<title>Binary to Octal</title>
</head>

<style>
.index-textbox-size {
	width: 18%;
	height: 30px !important;
	border: 1px solid gold;
	display: inline !important;
	border-radius: 4px;
	padding: 6px 10px;
	text-align: center;
}

#heading {
	margin-top:10px;
}

.smallBox {
    border: 2px solid gray;
    padding: 4px;
    text-align: center;
    width: 40px;
}

#boxDiv {
	background-color: seashell;
	border: 1px solid grey;
	margin-top: 0.7%;
	margin-left: 20%;
	border-radius: 10px;
	font-family: monospace;
	
}

.square-Box {
	border-spacing: 10px;
	border-collapse: separate;
}

.binaryBox, .binaryBox1, .binaryBox2, .binaryBox3 {
	background-color: #afeeee;
	border-radius: 2px;
	box-shadow: 0 0 9px rgba(0, 0, 0, 0.3);
	display: inline-block;
	height: 30px;
	margin-left: 10px;
	margin-top: 0;
	padding: 7.2px;
	position: relative;
	width: 30px;
}

#infoDiv {
	padding: 9px 7px;
	background-color: rgb(243, 235, 235);
	border-radius: 10px;
	margin-left: 19.5%;
	margin-top: 1%;
}

.binaryBox1 {
	background-color: #93f063;
}

.binaryBox3 {
	background-color:#8AE7F6;
}

.plus {
	color: RGB(128,0,0); 
}

.z-index9999999 {
	z-index: 9999999;
}

.binaryBox2 {
	background-color: #E7E99D;
}

.margin-top-1 {
	margin-top:1%;
}

div, span, tr, td {
	position: relative;
}

.font-size {
	font-size: 17px;
}

#finalDiv {
	border: 1px solid grey;
	height: 30px;
	margin-top: 1%;
	border-radius: 6px;
	box-shadow: 2px 2px 2px  #888888;
}

.squaring {
	display: inline-block;
	width: 18px;
}

#restart {
	margin-top: 3%;
}

.ct-green-color {
	color: green;
}

.ct-Maroon-color {
	color: Maroon;
}

.opacity40 {
	opacity: 0.4;
}

.margin-top-1 {
	margin-top: 1%;
}
.ct-aqua-color {
	color: aqua;
}

.output {
	display:inline-block;
}

.introjs-tooltip {
	min-width: 260px;
}

#finalResult {
	font-size: 16px;
	margin-top: 2%;
}

.user-btn {
	background: green;
}

.convert {
	font-weight: bold;
	background-color: green;
	border-radius: 3px; 
	padding: 0 2px;
}

.backgroundColor {
	background-color: red;
}

.errorText {
	color: red;
}

.box5 {
    display: inline-block;
    margin-left: 10px;
    margin-top: 0;
    position: relative;
    width: 30px;
}

.ct-code-b-green {
	color: green;
}
</style>

<body>
<div class="main-div col-xs-12">
	<div class="text-center" id="heading">
		<h3 class='label ct-demo-heading margin-top-1'>
			<span>Binary<sub>(2)</sub> to Octal<sub>(<span id="radix">8</span>)</sub> Conversion</span>
		</h3>
	</div>
	<div id="infoDiv" class="col-xs-7 col-xs-offset-2 margin-top-1" >
		<ul>
			<li id='list1' class='opacity00'>In binary numbering system we use only <span class='ct-green-color'>0's</span> and 
				<span class='ct-green-color'>1's</span> to represent a value of any magnitude.</li>
			<li id='list2' class='opacity00'>The numbering system which uses base-<span class='ct-green-color'>8</span> 
				is called <span class='ct-Maroon-color'>octal system</span>.</li>
			<li id='list3' class='opacity00'>Only combinations of <span class='ct-Maroon-color'>0</span>,<span class='ct-Maroon-color'>1</span>, 
				<span class='ct-Maroon-color'>2</span>,<span class='ct-Maroon-color'>3</span>,<span class='ct-Maroon-color'>4</span>, 
				<span class='ct-Maroon-color'>5</span>,<span class='ct-Maroon-color'>6</span> and <span class='ct-Maroon-color'>7</span> 
				are used to represent a value of any magnitude in <span class='ct-Maroon-color'>octal system</span>.</li>
			<li id='list4' class='opacity00'>In binary to octal conversion we will first create groups of three binary digits each and convert 
				them to their equivalent octal digits to arrive at the final octal number.</li>
		</ul>	
	</div>
	<div id="informationDiv" class="col-xs-8 col-xs-offset-4 margin-top-1">
		<table id="table" class="opacity00" style="background: wheat">
			<tr>
				<td class="smallBox"><b>Binary:</b></td>
				<td class="smallBox">000</td>
				<td class="smallBox">001</td>
				<td class="smallBox">010</td>
				<td class="smallBox">011</td>
				<td class="smallBox">100</td>
				<td class="smallBox">101</td>
				<td class="smallBox">110</td>
				<td class="smallBox">111</td>
			</tr>
			<tr>
				<td class="smallBox"><b>Octal:</b></td>
				<td class="smallBox">0</td>
				<td class="smallBox">1</td>
				<td class="smallBox">2</td>
				<td class="smallBox">3</td>
				<td class="smallBox">4</td>
				<td class="smallBox">5</td>
				<td class="smallBox">6</td>
				<td class="smallBox">7</td>
			</tr>
		</table>
	</div>
	<div class="text-center">
		<div id="textDiv" class="col-xs-6 col-xs-offset-3 margin-top-1 opacity00" style="margin-top:1%">
			<span class='font-size-16'>Binary value:</span>&nbsp;&nbsp;&nbsp;
			<input class="index-textbox-size row text-center" type="text" name="binaryValue"
				id="binaryValue" placeholder="e.g.11100101" MaxLength="8" >&emsp;&emsp;
			<button type="text" class="btn btn-success disabled opacity40" id="convert">
				<i class="fa fa-arrow-right"></i> Convert to Octal 
			</button>
		</div>
	</div>
	<div id="boxDiv" class="col-xs-7 col-xs-offset-2 opacity00 text-center margin-top-1">
		<div id="binaryDiv" class="col-xs-12 opacity00">
			<table  class="square-Box" align="center">
				<tr id="givenBox"></tr>
			</table>
		</div>
		<div class="col-xs-12 opacity00" id="rowDiv">
			<div class="col-xs-4" id="row0">
				<table  class="square-Box" align="center">
					<tr id="columnDiv0" style="display: inline-block;"></tr>
				</table>
			</div>
			<div class="col-xs-4" id="row3">
				<table  class="square-Box" align="center">
					<tr id="columnDiv3" style="display: inline-block;"></tr>
				</table>
			</div>
			<div class="col-xs-4" id="row6">
				<table  class="square-Box" align="center">
					<tr id="columnDiv6" style="display: inline-block;"></tr>
				</table>
			</div>
		</div>
		<div id="positionDiv" class="col-xs-12 opacity00">
			<div class="col-xs-4" id="positionSpan0">
			</div>
			<div class="col-xs-4" id="positionSpan3">
			</div>
			<div class="col-xs-4" id="positionSpan6">
			</div>
		</div>
		<div class="col-xs-12 opacity00" id="squareDiv">
			<div class="col-xs-4 " id="square0">
				<table  class="square-Box" align="center">
					<tr id="squareDiv0"></tr>
				</table></div>
			<div class="col-xs-4" id="square3">
				<table  class="square-Box" align="center">
					<tr id="squareDiv3"></tr>
				</table>
			</div>
			<div class="col-xs-4" id="square6">
				<table  class="square-Box" align="center">
					<tr id="squareDiv6"></tr>
				</table>
			</div>
		</div>
		<div class="col-xs-12" id="calculationIntroDiv">
			<div class="col-xs-12 opacity00 font-size margin-top-1" id="calculationDiv">
				<div class="col-xs-4" id="calculation0">
					<span id="equalId1"></span>
					<span id="calculationDiv0"></span>
				</div>
				<div class="col-xs-4" id="calculation3">
					<span id="calculationDiv3"></span>
				</div>
				<div class="col-xs-4" id="calculation6">
					<span id="calculationDiv6"></span>
				</div>
			</div>
			<div class="col-xs-12 opacity00 font-size margin-top-1" id="multiplicationDiv">
				<div class="col-xs-4" id="multiply0">
					<span id="equalId4"></span>
					<span id="multiplicationDiv0"></span>
				</div>
				<div class="col-xs-4" id="multiply3">
					<span id="multiplicationDiv3"></span>
				</div>
				<div class="col-xs-4" id="multiply6">
					<span id="multiplicationDiv6"></span>
				</div>
			</div>
			<div class="col-xs-12 opacity00 font-size margin-top-1" id="additionDiv">
				<div class="col-xs-4" id="addition0">
					<span id="equalId7"></span>
					<span id="additionDiv0"></span>
				</div>
				<div class="col-xs-4" id="addition3">
					<span id="additionDiv3"></span>
				</div>
				<div class="col-xs-4" id="addition6">
					<span id="additionDiv6"></span>
				</div>
			</div>
			<div class="col-xs-12 opacity00 font-size margin-top-1" id="resultDiv">
				<div class="col-xs-4" id="result0">
					<span id="equalId10"></span>
					<span id="resultDiv0"></span>
				</div>
				<div class="col-xs-4" id="result3">
					<span id="resultDiv3"></span>
				</div>
				<div class="col-xs-4" id="result6">
					<span id="resultDiv6"></span>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-6 col-xs-offset-3 margin-top-1 opacity00 text-center" id="finalDiv">
			<span id="finalResult"></span>
	</div>
	<div class="col-xs-5 col-xs-offset-5 " id="restartDiv">
		<a class="btn btn-warning opacity00" id="restart"><i class="fa fa-refresh"></i>&nbsp;Restart</a>
	</div>
</div>
</body>

<script>
	$(document).ready(function() {
		$("#restart").click(function() {
			$("#binaryValue").val("");
			location.reload();
		});
		binaryToOctalReady();
	});
</script>

</html>
