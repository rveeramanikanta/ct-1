<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link href="/css/font-awesome.min.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/secure/lang/c/js/hexadecimal-binary.js" type="text/javascript"></script>

<title>hexadecimal to binary</title>
</head>
<style>

#totaldiv {
	margin-top: 20px;
}

.padding5 {
 padding-left : 25px  !important; 
}

.ct-demo-heading {
	background: highlight none repeat scroll 0.0;
	border-radius: 10px;
	font-size: 20px;
	position: relative;
	z-index: 9999999;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
}

#informationdiv {
	background-color: rgb(243, 235, 212);
    border-radius: 0px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    min-height: 100px;
    margin-top: 15px;
    padding-top : 2px;
    color: black;
    font-family: monospace;
}

#numberconversion {
    border: 1px solid Black;
    margin-top: 10px;
    text-align: left;
}

.numberconversiontitle {
	border: 1px solid Black;
    font-size: 14px;
    text-align: center;
    margin-top: 10px;
}
.binvalue0 {
	font-size :14px;
}
.color-brown {
	color: #A0522D;
}

.color-purple {
	color: purple;
}
.z-index9999999 {
	z-index: 9999999;
}

.ct-green-color {
	color: green;
}

.ct-Maroon-color {
	color: Maroon;
}

.user-btn {
	background: green;
}

.ct-aqua-color {
	color: aqua;
}

#calculationTable {
	border: 1px solid black;
	height: 180px;
	margin-top: 10px;
	border-radius: 6px;
	background-color: #dcdcdc;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); 
}

.box {
	background-color: #4dff4d;
    border-radius: 5px;
    width:30px;
	height:30px;
	position:relative;
    display:inline-block;
	box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
    border-radius: 2px; 
	margin-left: 10px;
	line-height: 32px;
}

.box1 {
	background-color: #33ff99;
    border-radius: 5px;
    min-width:30px;
	height:30px;
	position:relative;
    display:inline-block;
	box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
    border-radius: 2px; 
	margin-left: 10px;
	line-height: 32px;
}

.color-lightrose {
	color: #990033;
}

.color-yellow {
	color: yellow;
	font-weight: bold;
	font-family: monospace;
}

.color-green {
	color: green;
}

.color-red {
	color: red;
}

.convert {
	font-weight: bold;
	background-color: green;
}

.backgroundColor {
	background-color: red;
}

.errorText {
	color: red;
}

div, span, tr, td {
	position: relative;
}

.introjs-tooltip {
	min-width: 210px;
}
</style>

<body>
<div id ='totaldiv' class='totaldivclass col-xs-12 text-center'>
	<span id='title' class='label ct-demo-heading'>Hexadecimal<sub>(<span id="radix16">16</span>)</sub> to Binary
		<sub>(<span id="radix2">2</span>)</sub> Conversion</span>
</div>
<div class='col-xs-12'>
	<div id='informationdiv' style = "font-size:14px;" class='col-xs-10 col-xs-offset-1'>
	</div>
</div>
	<div class="col-xs-12" id="totalbox">
		<table id="numberconversion" class='col-xs-offset-2 col-xs-8 visibility-hidden'>
			<tr>
				<td class="" style="background-color: #8FBC8F; color: white; border: 1px solid black; text-align: center"><b>Hexadecimal</b></td>
				<td id = hexvalue0 class="numberconversiontitle"><span class='ct-demo-number'><b>0</b></span></td>
				<td id = hexvalue1 class ="numberconversiontitle"><span class='ct-demo-number'><b>1</b></span></td>
				<td id = hexvalue2 class ="numberconversiontitle"><span class='ct-demo-number'><b>2</b></span></td>
				<td id = hexvalue3 class ="numberconversiontitle"><span class='ct-demo-number'><b>3</b></span></td>
				<td id = hexvalue4 class ="numberconversiontitle"><span class='ct-demo-number'><b>4</b></span></td>
				<td id = hexvalue5 class ="numberconversiontitle"><span class='ct-demo-number'><b>5</b></span></td>
				<td id = hexvalue6 class ="numberconversiontitle"><span class='ct-demo-number'><b>6</b></span></td>
				<td id = hexvalue7 class ="numberconversiontitle"><span class='ct-demo-number'><b>7</b></span></td>
				<td id = hexvalue8 class ="numberconversiontitle"><span class='ct-demo-number'><b>8</b></span></td>
				<td id = hexvalue9 class ="numberconversiontitle"><span class='ct-demo-number'><b>9</b></span></td>
				<td id = hexvalue10 class ="numberconversiontitle"><span class='ct-demo-number'><b>A</b></span></td>
				<td id = hexvalue11 class ="numberconversiontitle"><span class='ct-demo-number'><b>B</b></span></td>
				<td id = hexvalue12 class ="numberconversiontitle"><span class='ct-demo-number'><b>C</b></span></td>
				<td id = hexvalue13 class ="numberconversiontitle"><span class='ct-demo-number'><b>D</b></span></td>
				<td id = hexvalue14 class ="numberconversiontitle"><span class='ct-demo-number'><b>E</b></span></td>
				<td id = hexvalue15 class ="numberconversiontitle"><span class='ct-demo-number'><b>F</b></span></td>
			</tr>
			<tr>
			<td class="" style="background-color: #8FBC8F; color: white; border: 1px solid black; text-align: center"><b>Binary</b></td>
				<td class ='numberconversiontitle color-brown' id = 'binvalue0'><span>0000</span></td>
				<td class ='numberconversiontitle color-brown' id = 'binvalue1'><span>0001</span></td>
				<td class ='numberconversiontitle color-brown' id = 'binvalue2'><span>0010</span></td>
				<td class ='numberconversiontitle color-brown' id = 'binvalue3'><span>0011</span></td>
				<td class ='numberconversiontitle color-brown' id = 'binvalue4'><span>0100</span></td>
				<td class ='numberconversiontitle color-brown' id = 'binvalue5'><span>0101</span></td>
				<td class ='numberconversiontitle color-brown' id = 'binvalue6'><span>0110</span></td>
				<td class ='numberconversiontitle color-brown' id = 'binvalue7'><span>0111</span></td>
				<td class ='numberconversiontitle color-brown' id = 'binvalue8'><span>1000</span></td>
				<td class ='numberconversiontitle color-brown' id = 'binvalue9'><span>1001</span></td>
				<td class ='numberconversiontitle color-brown' id = 'binvalue10'><span>1010</span></td>
				<td class='numberconversiontitle color-brown' id = 'binvalue11'><span>1011</span></td>
				<td class='numberconversiontitle color-brown' id = 'binvalue12'><span>1100</span></td>
				<td class='numberconversiontitle color-brown' id = 'binvalue13'><span>1101</span></td>
				<td class='numberconversiontitle color-brown' id = 'binvalue14'><span>1110</span></td>
				<td class='numberconversiontitle color-brown' id = 'binvalue15'><span>1111</span></td>
			</tr>
		</table>
	</div>
	<div id="conversiondiv" class="row text-center col-xs-12">
			<div id="inputDiv" class="col-xs-6 col-xs-offset-3 opacity00" style="margin-top: 15px; font-size : 14px;">
				<span><span class='color-purple'>Hexadecimal value</span> <b>:</b></span>&nbsp;<input
					class="index-textbox-size text-center" type="text" name="binaryValue"
					id="octalValue" placeholder="e.g.0XAE5" Maxlength='5'  >&nbsp;
					<button type="button" class="btn btn-success disabled opacity40" id="convert">
					<i class="fa fa-arrow-right"></i> Convert to Binary </button>
			</div>
		</div>
		
<div id='calculationTable' class='col-xs-12 col-xs-offset-4 col-xs-4 visibility-hidden'>
	<div  id='octalValuesDiv' class='col-xs-12 opacity00 ' style='margin-top: 25px;'>
		<span class='col-xs-5 '  style='font-size: 14px;' id='octalValuesText'><span class='color-lightrose'>Hexadecimal value</span> <b>:</b></span>
		<span class='col-xs-7 ' style='display: block; height: 32px;' id='octalValuesGet'></span>
	</div>
	
	<div id='binaryValuesDiv' class='col-xs-12 opacity00' style='margin-top: 20px;'>
		<span class='col-xs-5 ' style='font-size: 14px;' id='binaryValuesText'><span class='color-lightrose'>Binary digits</span> <b>:</b></span>
		<span class='col-xs-7 '  id='binaryValuesGet'></span>
	</div>
	
	<div id='combineBinaryNumbers' class='col-xs-12 opacity00' style='margin-top: 20px'>
		<span style='font-size: 14px;' class='col-xs-5'><span class='color-lightrose'>Binary result</span> <b>:</b></span>
		<span id='numbersCombine' class='col-xs-7 opacity00 padding5'></span>
	</div>
</div>

<div class="button col-xs-12 text-center " id="button">
	<button class="btn btn-warning opacity00" type="button" id='restartBtn' style='margin-top:8px'>Restart</button>
</div>
</body>
<script>

	$(document).ready(function() {
		hexadecimalBinaryReady();
	});

</script>
</html>