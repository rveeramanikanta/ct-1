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
<link rel="stylesheet" href="/css/font-awesome.min.css">
<script src="/secure/lang/c/js-min/bth.min.js"></script>
<title>Binary to hexaDecimal</title>

<style>
.binaryBox, .supBox, .squareDivBox {
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
	
.binaryBox {
	background-color: lightblue;
}

.supBox {
	background-color: #F4A460;
}

.squareDivBox {
	background-color: #93F063;
}

#infoDiv {
	background-color: rgb(243, 235, 235);
	border-radius: 10px;
	margin-left: 19.5%;
	margin-top: 1%;
	font-family: monospace;
}

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

.z-index9999999 {
	z-index: 9999999;
}

.ct-green-color {
	color: green;
}
.smallBox {
	border: 1px solid gray;
	width: 500px;
	height: 35px;
	text-align:center;
	padding: 5px;
}

#boxDiv {
	background-color: seashell;
	border: 1px solid grey;
	margin-top: 0.7%;
	border-radius: 10px;
	box-shadow: 5px 5px 5px  #888888;
}

ul {
	margin-left: -17px;
	margin-top: 0.7%;
}

#calculation {
	font-size: 18px;
}

#calculationDiv {
	margin-top: 8%;
}

.plus1, .plus2 {
	color: RGB(128,0,0); 
}

#binaryDiv {
	margin-top: 3%;
}

.square-Box {
	border-spacing: 8px;
	border-collapse: separate;
}

.square {
	text-align: center;
}

#calculationPart {
	font-family: monospace;
	font-size: 15px;
}

.position-relative {
	position: relative;
}

#finalDiv {
	border: 1px solid grey;
	height: 30px;
	margin-top: 1%;
	border-radius: 6px;
	box-shadow: 2px 2px 2px  #888888;
}

.margin-top-1 {
	margin-top: 1%;
}

#finalResult {
	font-size: 16px;
	margin-top: 2%;
}

#result1, #result2 {
	display: inline-block;
	position: relative;
}

.opacity00 {
	opacity: 0;
	pointer-events: none;
	cursor: default;
}

#restart {
	margin-top: 3%;
} 

div, span, tr, td {
	position: relative;
}

.twoHalf, .firstHalf {
	display: inline-block;
	width: 18px;
}

.ct-Maroon-color {
	color: Maroon;
}

.ct-aqua-color {
	color: aqua;
}

.errorText {
	color: red;
}

.backgroundColor {
	background-color: red;
}

.margin-top-1 {
	margin-top: 1%;
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

.convert {
	font-weight: bold;
	background-color: green;
	border-radius: 3px; 
	padding: 0 2px;
}

.introjs-tooltip {
	min-width: 225px;
}

.display-none {
	display: none;
}

</style>
</head>
<body>
<div class="main-div col-xs-12">
	<div class="text-center" id="heading">
		<h3 class='label ct-demo-heading margin-top-1'>
			<span>Binary<sub>(2)</sub> to Hexadecimal<sub>(<span id="radix">16</span>)</sub> Conversion</span>
		</h3>
	</div>
	<div class="" id="informationDiv" >
		<div id="infoDiv" class="col-xs-7 col-xs-offset-2 margin-top-1" >
			<ul><li id='list1' class='opacity00'>In binary numbering system we use only <span class='ct-green-color'>0's</span> 
					and <span class='ct-green-color'>1's</span> to represent a value of any magnitude.</li>
				<li id='list2' class='opacity00'>The numbering system which uses base-<span class='ct-green-color'>16</span>
					is called <span class='ct-green-color'>hexadecimal system</span>.</li>
				<li id='list3' class='opacity00'>Only combinations of <span class='ct-Maroon-color'>0</span>,
					 <span class='ct-Maroon-color'>1</span>, <span class='ct-Maroon-color'>2</span>, <span class='ct-Maroon-color'>3</span>,
					 <span class='ct-Maroon-color'>4</span>, <span class='ct-Maroon-color'>5</span>, <span class='ct-Maroon-color'>6</span>,
					 <span class='ct-Maroon-color'>7</span>, <span class='ct-Maroon-color'>8</span>, <span class='ct-Maroon-color'>9</span>,
					 <span class='ct-Maroon-color'>A</span>, <span class='ct-Maroon-color'>B</span>, <span class='ct-Maroon-color'>C</span>,
					 <span class='ct-Maroon-color'>D</span>, <span class='ct-Maroon-color'>E</span> and <span class='ct-Maroon-color'>F</span> are
						used to represent a value of any magnitude in <span class='ct-green-color'>hexadecimal system</span>.</li>
				<li id='list4' class='opacity00'>In the <span class='ct-green-color'>hexadecimal system</span> the values
						<span class='ct-green-color'>10</span>, <span class='ct-green-color'>11</span>, <span class='ct-green-color'>12</span>,
						<span class='ct-green-color'>13</span>,	<span class='ct-green-color'>14</span> and <span class='ct-green-color'>15</span>
						 are represented as	<span class='ct-green-color'>A</span>, <span class='ct-green-color'>B</span>,
						 <span class='ct-green-color'>C</span>, <span class='ct-green-color'>D</span>, <span class='ct-green-color'>E</span>
						  and <span class='ct-green-color'>F</span>.
				</li>
				<li id='list5' class='opacity00'>In binary to hexadecimal conversion we will first create groups of four binary digits each
						and convert them to their equivalent hexadecimal digits to arrive at the final hexadecimal number.
				</li>
			</ul>
		</div>
	</div>
	<div id="inputDiv" class="col-xs-8 col-xs-offset-2 margin-top-1 ">
		<table id="table" class="visibility-hidden">
			<tr>
				<td class="smallBox" style="color: seagreen"><b>Binary:</b></td>
				<td class="smallBox">0000</td>
				<td class="smallBox">0001</td>
				<td class="smallBox">0010</td>
				<td class="smallBox">0011</td>
				<td class="smallBox">0100</td>
				<td class="smallBox">0101</td>
				<td class="smallBox">0110</td>
				<td class="smallBox">0111</td>
				<td class="smallBox">1000</td>
				<td class="smallBox">1001</td>
				<td class="smallBox">1010</td>
				<td class="smallBox">1011</td>
				<td class="smallBox">1100</td>
				<td class="smallBox">1101</td>
				<td class="smallBox">1110</td>
				<td class="smallBox">1111</td>
			</tr>
			<tr>
				<td class="smallBox" style="color: seagreen"><b>Hexadecimal:</b></td>
				<td class="smallBox">0</td>
				<td class="smallBox">1</td>
				<td class="smallBox">2</td>
				<td class="smallBox">3</td>
				<td class="smallBox">4</td>
				<td class="smallBox">5</td>
				<td class="smallBox">6</td>
				<td class="smallBox">7</td>
				<td class="smallBox">8</td>
				<td class="smallBox">9</td>
				<td class="smallBox">A</td>
				<td class="smallBox">B</td>
				<td class="smallBox">C</td>
				<td class="smallBox">D</td>
				<td class="smallBox">E</td>
				<td class="smallBox">F</td>
			</tr>
		</table>
	</div>
	<div class="text-center">
		<div id="input" class="col-xs-6 col-xs-offset-3 margin-top-1 visibility-hidden" style="margin-top:1%">
			<span class='font-size-16'>Binary value:</span>&nbsp;&nbsp;&nbsp;
			<input class="index-textbox-size" type="text" name="binaryValue"
				id="binaryValue" placeholder="e.g.11001010" MaxLength="8" >&emsp;&emsp;
			<button type="text" class="btn btn-success disabled " id="convert">
				<i class="fa fa-arrow-right"></i> Convert to Hexadecimal 
			</button>
		</div>
	</div>
	<div class="col-xs-12" >
		<div id="boxDiv" class="col-xs-8 col-xs-offset-2 margin-top-1 visibility-hidden">
			<!-- <div id="binaryDiv" class="col-xs-12"></div> -->
			<div id="getValues" class="col-xs-12">
				<table  class="square-Box" id="tableDiv" align="center">
					<tr id="numberBox" class="visibility-hidden"></tr>
				</table>
			</div>
			<div id="supPart" class="col-xs-12">
			 <div class="col-xs-6" id="getDiv1">
					<table class="square-Box visibility-hidden" id="tableDiv1" align="center">
						<tr id="numberBox2" style="display: inline-block;"></tr>
					</table>
				</div> 
				<div class="col-xs-6" id="getDiv">
					<table class="square-Box visibility-hidden" id="tableDiv2" align="center">
						<tr id="numberBox1" style="display: inline-block;"></tr>
					</table>
				</div>
			</div>
			<div id="positionDiv" class="col-xs-12 opacity00 text-center">
				<div class="col-xs-6" id="positionSpan1">
				</div>
				<div class="col-xs-6" id="positionSpan2">
				</div>
			</div>
			<div class="col-xs-12 visibility-hidden" id="squareDiv">
				<div class="col-xs-6" id="firstPart">
					<table class="square-Box" id="tableDiv" align="center">
						<tr id="twoPowerDiv1"></tr>
					</table>
				</div>
				<div class="col-xs-6" id="square">
					<table class="square-Box" id="tableDiv" align="center">
						<tr id="twoPowerDiv2"></tr>
					</table>
				</div>
			</div>
			<div class="col-xs-12 text-center" id="calculationPart">
				<div class="col-xs-12 margin-top-1 opacity00" id="calculationPartDiv1">
					<div class="col-xs-6 opacity00" id="multiplyDiv2">
						<span id='equalSpan' class="opacity00">=</span>
						<span id="multiplySpan"></span>
					</div>
					<div class="col-xs-6 opacity00" id="multiplyDiv1">
					</div>
				</div>
				<div class="col-xs-12 margin-top-1" id="calculationPartDiv2">
					<div class="col-xs-6 opacity00" id="multiplicationDiv1">
						<span id='equalSpan1' class="opacity00">=</span>
						<span id="multiDiv1"></span>
					</div>
					<div class="col-xs-6 opacity00" id="multiplicationDiv2">
						<span id='equalSpan2' class='opacity00'>=</span>
						<span id="multiDiv2"></span>
					</div>
				</div>
				<div class="col-xs-12 margin-top-1" id="calculationPartDiv3">
					<div class="col-xs-6 opacity00" id="additionDiv1">
						<span id='equalSpan3' class='opacity00'>=</span>
						<span id="addition1"></span>
					</div>
					<div class="col-xs-6 opacity00" id="additionDiv2">
						<span id='equalSpan4' class='opacity00'>=</span>
						<span id="addition2"></span>
					</div>
				</div>
				<div class="col-xs-12 margin-top-1" id="calculationPartDiv4">
					<div class="col-xs-6 opacity00" id="total1">
						<span id='equalSpan5' class='opacity00'>=</span>
						<span id="result1"></span>
					</div>
					<div class="col-xs-6 opacity00" id="total2">
						<span id='equalSpan6' class='opacity00'>=</span>
						<span id="result2"></span>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-6 col-xs-offset-3 text-center margin-top-1 visibility-hidden" id="finalDiv">
		<span id="finalResult"></span>
	</div>
	<div class="col-xs-5 col-xs-offset-5" id="restartDiv">
		<a class="btn btn-warning opacity00" id="restart"><i class="fa fa-refresh"></i>&nbsp;Restart</a>
	</div>
</div>
</body>

<script type="text/javascript">
	$(document).ready(function() {
		$("#restart").click(function(){
			$("#binaryValue").val("");
			location.reload();
		});
		binaryToHexaReady();
	});
</script>
</html>