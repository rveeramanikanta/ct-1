<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link rel="stylesheet" href="/css/bootstrap.min.css">
	<script src="/js/jquery-latest.js"></script>
	<script src="/js/bootstrap.js"></script>
	<link rel="stylesheet" href="/css/introjs.css">
	<link rel="stylesheet" href="/css/introjs-ct.css">
	<link rel="stylesheet" href="/css/animate.css"/>
	<link rel="stylesheet" href="/css/jquery-ui.css"/>
	<script src="/js/gs/TweenMax.min.js"></script>
	<script src='/js/intro.js'></script>
	<link rel="stylesheet" href="/css/font-awesome.min.css">
	<script src="/js/typewriting.min.js"></script>
	<script src="/js/jquery-ui-latest.js"></script>
	<script src="/secure/lang/c/js/octal-to-binary-conversion.js"></script>
	
    <title>octal to binary</title>
</head>
<style>
#totaldiv {
	margin-top: 25px;
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
    min-height: 60px;
    margin-top: 30px;
    color: black;
    font-family: monospace;
}

#numberconversion {
    border: 1px solid Black;
    margin-top: 25px;
    text-align: left;
}

#numberconversiontitle {
	border: 1px solid Black;
    font-size: 15px;
    text-align: center;
    margin-top: 25px;
}

.color-brown {
	color: #A0522D;
}

.color-purple {
	color: purple;
}

#calculationTable {
	border: 1px solid black;
	min-height: 210px;
	margin-top: 30px;
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
    width:30px;
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

.errorText {
	font-weight: bold;
	color: red;
}

.backgroundColor {
	background-color: red;
}

.user-btn {
	background: green; 
}

.text-align {
	text-align: -moz-center;
}

.introjs-tooltip {
	min-width: 250px;
}
</style>
<body>
<div id ='totaldiv' class='totaldivclass col-xs-12 text-center'>
	<span id='title' class='label ct-demo-heading'>Octal<sub>
	(<span id="radix8">8</span>)</sub> to Binary<sub>(<span id="radix2">2</span>)</sub> Conversion</span>
</div>
<div class='col-xs-12'>
	<div id='informationdiv' class='col-xs-8 col-xs-offset-2 visibility-hidden'>
	</div>
</div>
<div class="col-xs-12" id="totalbox">
	<table id="numberconversion" class='col-xs-offset-4 col-xs-4 visibility-hidden'>
		<tr>
			<td class="numberconversiontitle" style="background-color: #8FBC8F; color: white;  border:1px solid black; text-align: center"><b>Octal</b></td>
			<td id="numberconversiontitle"><span class='ct-demo-number'><b>0</b></span></td>
			<td id="numberconversiontitle"><span class='ct-demo-number'><b>1</b></span></td>
			<td id="numberconversiontitle"><span class='ct-demo-number'><b>2</b></span></td>
			<td id="numberconversiontitle"><span class='ct-demo-number'><b>3</b></span></td>
			<td id="numberconversiontitle"><span class='ct-demo-number'><b>4</b></span></td>
			<td id="numberconversiontitle"><span class='ct-demo-number'><b>5</b></span></td>
			<td id="numberconversiontitle"><span class='ct-demo-number'><b>6</b></span></td>
			<td id="numberconversiontitle"><span class='ct-demo-number'><b>7</b></span></td>
		</tr>
		<tr >
			<td class="numberconversiontitle" style="background-color: #8FBC8F; color: white;  border:1px solid black; text-align: center"><b>Binary</b></td>
			<td id="numberconversiontitle" class='color-brown'>000</td>
			<td id="numberconversiontitle" class='color-brown'>001</td>
			<td id="numberconversiontitle" class='color-brown'>010</td>
			<td id="numberconversiontitle" class='color-brown'>011</td>
			<td id="numberconversiontitle" class='color-brown'>100</td>
			<td id="numberconversiontitle" class='color-brown'>101</td>
			<td id="numberconversiontitle" class='color-brown'>110</td>
			<td id="numberconversiontitle" class='color-brown'>111</td>
		</tr>
	</table>
</div>
<div id="conversiondiv" class="row text-center col-xs-12">
	<div id="inputDiv" class="col-sm-6 col-sm-offset-3 opacity00" style="margin-top: 25px">
		<span class='font-size-16'><span class='color-purple'>Octal value</span> <b>:</b></span>&nbsp;&nbsp;&nbsp;<input
			class="index-textbox-size text-center" type="text" name="binaryValue"
			id="octalValue" placeholder="e.g.0370" Maxlength='4'  >&nbsp;&nbsp;&nbsp;
			<button type="button" class="btn btn-success disabled opacity40" id="convert">
			<i class="fa fa-arrow-right"></i> Convert to Binary </button>
	</div>
</div>
		
<div id='calculationTable' class='col-xs-12 col-xs-offset-4 col-xs-4 visibility-hidden'>
	<div  id='octalValuesDiv' class='col-xs-12 opacity00' style='margin-top: 25px;'>
		<span class='col-xs-7 text-align'  style='font-size: 15px;' id='octalValuesText'><span class='color-lightrose'>Octal value</span> <b>:</b></span>
		<span class='col-xs-5' style='display: block; height: 32px;' id='octalValuesGet'></span>
	</div>
	
	<div id='binaryValuesDiv' class='col-xs-12 opacity00' style='margin-top: 20px;'>
		<span class='col-xs-7 text-align' style='font-size: 15px;' id='binaryValuesText'><span class='color-lightrose'>Binary digits</span> <b>:</b></span>
		<span class='col-xs-5'  id='binaryValuesGet'></span>
	</div>
	
	<div id='combineBinaryNumbers' class='col-xs-12 opacity00' style='margin-top: 20px'>
		<span style='font-size: 15px;' class='col-xs-6 text-align'><span class='color-lightrose'>Combine binary digits</span> <b>:</b></span>
		<span  class='col-xs-6'>
		<span id='numbersCombine' class="col-xs-6 col-xs-offset-3 opacity00"></span></span>
	</div>
	
	<div id='binaryResult' class='col-xs-12 opacity00' style='margin-top: 20px'>
		<span class='col-xs-7'><span style="text-align: -moz-left;" class='color-lightrose'>The resultant binary number</span><b>:</b></span>
		<span class='col-xs-5'>
		<span id='binaryResultValue' class="col-xs-10 col-xs-offset-1 append"></span>
		</span>
	</div>
</div>

<div class="button col-xs-12 text-center " id="button">
	<button class="btn btn-warning opacity00" type="button" id='restartBtn' style='margin-top:8px'>Restart</button>
</div>
</body>
<script>
	$(document).ready(function() {
		octalToBinaryConversionReady();
	});
</script>
</html>