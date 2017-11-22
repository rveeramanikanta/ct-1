<!DOCTYPE html>
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
	 <script src="/secure/lang/c/js/octal-to-decimal-conversion.js"></script>  
	
	<title>Octal to Decimal Conversion</title>
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
    min-height: 100px;
    margin-top: 30px;
    color: black;
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
	color: brown;
}

.color-purple {
	color: purple;
}

.color-yellow {
	color: yellow;
}

#calculationTable {
	border: 1px solid black;
	min-height: 290px;
	margin-top: 30px;
	border-radius: 6px;
	background-color: #dcdcdc;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); 
}

.box {
	background-color: #FFC300;
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
	background-color: #DAF7A6;
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
}

.color-green {
	color: green;
}

.color-red {
	color: red;
}

.color-red {
	color: red;
}

.user-btn {
	background-color: green;
}

.convert {
	font-weight: bold;
	background-color: green;
}


.ct-code-b-green {
	color: green;
}

.box5 {
    display: inline-block;
    margin-left: 10px;
    margin-top: 0;
    position: relative;
    width: 30px;
}

.errorText {
	font-weight: bold;
	color: red;
}

.backgroundColor {
	background-color: red;
}

.introjs-tooltip {
	min-width: 250px;
}
</style>
</head>
<body>
<div id ='totaldiv' class='totaldivclass col-xs-12 text-center'>
	<span id='title' class='label ct-demo-heading'>Octal<sub>(<span id="radix8">8</span>)</sub> to Decimal<sub>(<span id="radix10">10</span>)</sub> Conversion</span>
</div>

<div class='col-xs-12'>
	<div id='informationdiv' class='col-xs-8 col-xs-offset-2 visibility-hidden'>
		<ul id='defination'></ul>
	</div>
</div>

<div class="col-xs-12 " id="totalbox">
	<table class='col-xs-6 col-xs-offset-3 visibility-hidden' id="numberconversion" style="border-top: medium none;">
		<tr> 
			<td class="numberconversiontitle" style="background-color: #8FBC8F; color: white;  border:1px solid black; text-align: center"><b>Octal</b></td>
			<td id="numberconversiontitle"><span class=''><b>7</b></span></td>
			<td id="numberconversiontitle"><span class=''><b>6</b></span></td>
			<td id="numberconversiontitle"><span class=''><b>5</b></span></td>
			<td id="numberconversiontitle"><span class=''><b>4</b></span></td>
			<td id="numberconversiontitle"><span class=''><b>3</b></span></td>
			<td id="numberconversiontitle"><span class=''><b>2</b></span></td>
			<td id="numberconversiontitle"><span class=''><b>1</b></span></td>
			<td id="numberconversiontitle"><span class=''><b>0</b></span></td>
		</tr>
		<tr >
			<td class="numberconversiontitle" style="background-color: #8FBC8F; color: white;  border:1px solid black; text-align: center"><b>Multiplying factors</b></td>
			<td id="numberconversiontitle">8<sup>7</sup></td>
			<td id="numberconversiontitle">8<sup>6</sup></td>
			<td id="numberconversiontitle">8<sup>5</sup></td>
			<td id="numberconversiontitle">8<sup>4</sup></td>
			<td id="numberconversiontitle">8<sup>3</sup></td>
			<td id="numberconversiontitle">8<sup>2</sup></td>
			<td id="numberconversiontitle">8<sup>1</sup></td>
			<td id="numberconversiontitle">8<sup>0</sup></td>
		</tr>
	</table>
</div>

<div id="conversiondiv" class="row text-center col-xs-12">
	<div id="inputDiv" class="col-sm-6 col-sm-offset-3 opacity00" style="margin-top: 25px">
		<span class='font-size-16'><span class='color-purple'>Octal value</span> <b>:</b></span>&nbsp;&nbsp;&nbsp;<input
			class="index-textbox-size text-center" type="text" name="binaryValue"
			id="octalValue" placeholder="e.g.0707" Maxlength='4'  >&nbsp;&nbsp;&nbsp;
			<button type="button" class="btn btn-success disabled opacity40" id="convert">
			<i class="fa fa-arrow-right"></i> Convert to Decimal </button>
	</div>
</div>
		
<div id='calculationTable' class='col-xs-12 col-xs-offset-4 col-xs-4 visibility-hidden'>
	<div  id='octalValuesDiv' class='col-xs-12 opacity00' style='margin-top: 25px;'>
		<span class='col-xs-5'  style='font-size: 15px;' id='octalValuesText'><span class='color-lightrose'>Octal Value</span> <b>:</b></span>
		<span class='col-xs-7' style='display: block; height: 32px;' id='octalValuesGet'></span>
	</div>
	<div id='positionsDiv' class='col-xs-12 opacity00' style='margin-top: 2px;'>
		<span class='col-xs-5' style='font-size: 15px;' id='powerValuesText'><span class='color-lightrose'>Positions</span> <b>:</b></span>
		<span class='col-xs-7'  id='positions'></span>
	</div>
	<div id='powerValuesDiv' class='col-xs-12 opacity00' style='margin-top: 20px;'>
		<span class='col-xs-5' style='font-size: 15px;' id='powerValuesText'><span class='color-lightrose'></span></span>
		<span class='col-xs-7'  id='powerValuesGet'></span>
	</div>
	
	<div id='multiplyPowerWithOctal' class='col-xs-12 ' style='margin-top: 20px'>
		<span style='font-size: 15px;' class='col-xs-5'></span>
		<span id='powerWithOctal' class='col-xs-7'></span>
	</div>
	
	<div id='multiplyGetDiv' class='col-xs-12 opacity00' style='margin-top: 16px'>
		<span class='col-xs-5'></span>
		<span id='multiplyResultGet' class='col-xs-7'></span>
	</div>
	
	<div id='multiplytoAddGetDiv' class='col-xs-12 opacity00' style='margin-top: 16px'>
		<span class='col-xs-6'></span>
		<span id='multiplytoAddResultGet' class='col-xs-6'></span>
	</div>
	
	<div id='resultDiv' class='col-xs-12 opacity00' style='margin-top: 16px'>
		<span class='col-xs-7 color-lightrose' style='font-size: 15px; padding: 0px;' >The resultant decimal number<b>:</b></span>
		<span id='addResultGet' class='col-xs-5'></span>
	</div>
</div>

<div class="button col-xs-12 text-center " id="button">
	<button class="btn btn-warning glyphicon glyphicon-refresh opacity00" type="button" id='restartBtn' style='margin-top:8px'>Restart</button>
</div>
<script>

$(document).ready(function() {
	octalToDecimalConversionReady();
});
	
</script>
</body>
</html>
