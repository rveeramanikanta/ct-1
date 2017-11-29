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
	<script src="/js/gs/TweenMax.min.js"></script>
	<script src='/js/intro.js'></script>
	<link rel="stylesheet" href="/css/font-awesome.min.css">
	<script src="/js/typewriting.min.js"></script>
	<script src="/js/jquery-ui-latest.js"></script>
	<link rel="/css/animate.css"/>
	<script src="/secure/lang/c/js-min/btdc.min.js"></script>
	<title>Binary to Decimal</title>
</head>

<style>
#totaldiv {
	margin-top: 25px;
}

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
.row {
	margin-right : 0px !important;
}

.position-relative {
	position: relative;
}

.z-index9999999 {
	z-index: 9999999;
}

#informationDiv {
	background-color: rgb(243, 235, 212);
    border-radius: 0px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    height: 120px;
    margin-top: 30px;
    color: black;
    font-family: monospace;
}


.bit {
	margin-left: 113px;
}

#tableheading {
	margin-top: 1%;
	margin-left: 19.5%;
	font-size: 16px;
}

#numberconversion {
    border: 1px solid Black;
    margin-top: 1%;
    text-align: left;
}

#numberconversiontitle {
	border: 1px solid Black;
    width: 50px;
    font-size: 15px;
    text-align: center;
    margin-top: 1%;
}

.font-size-16{
	font-size: 16px;
}

.index-textbox-size {
	width: 18%;
	height: 30px !important;
	border: 1px solid gold;
	display: inline !important;
	border-radius: 4px;
	padding: 6px 10px;
	text-align: center
}


#calculationtable {
    border-radius: 10px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    height: 315px;
    margin-top: 2%;
    border: 1px solid black;
}

#tablecal {
	color: green;
	font-size: 16px;
	text-decoration: underline;
	font-weight: bold;
	margin-bottom: 5%;
}

.box {
	background-color: #AFEEEE;
	width:30px;
    position:relative;
    display:inline-block;
    height:30px;
    box-shadow: 0 0 9px rgba(0, 0, 0, 0.3);
    border-radius: 2px; 
    margin-left: 10px;
    padding: 7.2px;
    margin-top: 0px;
}

#power {
    bacground-color: blue;
}

.box2 {
   width:30px;
   height:30px;
   position:relative;
   display:inline-block;
   box-shadow: 0 0 9px rgba(0, 0, 0, 0.3);
   border-radius: 2px; 
   margin-left: 10px;
   padding: 7.2px;
   margin-top: 0px;
   background-color: #F0E68C;
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

.ct-code-b-red {
	color: red;
	position: relative;
}

.ct-code-b-blue {
	color: blue;
}

.ct-code-b-yellow {
	color: yellow;
}

.ct-code-b-black {
	color:	black;
	position: relative;
}

.user-btn {
	background-color: green;
}

div, span {
	position: relative;
}

.form-group {
    margin-bottom: 10px;
}

#powervalues {
	background-color: white;
}

.ct-demo-number {
	color: brown;
}

.ct-demo-green {
	color: green;
}

.color-lightrose {
	color: #990033;
}

.color-red {
	color: red;
}

.z-index {
	z-index: 9999999;
	position: relative;
	background-color: white;
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

.convert {
	font-weight: bold;
	background-color: green;
}

.ct-code-b-green {
	color: green;
}
</style>
<body>
<div id ='totaldiv' class='totaldivclass col-xs-12 text-center'>
	<span id='title' class='label ct-demo-heading'>Binary<sub>(<span id="radix">2</span>)</sub> to Decimal<sub>(<span id="radix">10</span>)</sub> Conversion</span>
</div>

<div class='col-xs-12'>
	<div id="informationDiv" class='col-xs-8 col-xs-offset-2 bg-info'>
		<ul class='text' id='text'></ul>
	</div>
</div>
	
<div class="col-xs-12 visibility-hidden" id="totalbox">
	<table class='col-xs-6 col-xs-offset-3' id="numberconversion" style="border-top: medium none;">
			    <tr>
					<td class="numberconversiontitle" style="background-color: #2e8b57; color: white; border:1px solid black; text-align: center"><b>MSB</b></td>
					<td class="numberconversiontitle" colspan="6" style="border: white; color: white; text-align: center"><b></b></td>
					<td class="numberconversiontitle" style="background-color: #2e8b57; color: white;  border:1px solid black; text-align: center"><b>LSB</b></td>
				</tr>
				<tr >
					<td id="numberconversiontitle"><span class='ct-demo-number'><b>1</b></span></td>
					<td id="numberconversiontitle"><span class='ct-demo-number'><b>1</b></span></td>
					<td id="numberconversiontitle"><span class='ct-demo-number'><b>1</b></span></td>
					<td id="numberconversiontitle"><span class='ct-demo-number'><b>0</b></span></td>
					<td id="numberconversiontitle"><span class='ct-demo-number'><b>0</b></span></td>
					<td id="numberconversiontitle"><span class='ct-demo-number'><b>1</b></span></td>
					<td id="numberconversiontitle"><span class='ct-demo-number'><b>0</b></span></td>
					<td id="numberconversiontitle"><span class='ct-demo-number'><b>0</b></span></td>
				</tr>
			</table>
</div>

<div id="conversiondiv" class="col-xs-12 row text-center ">
			<div id="inputDiv" class="col-sm-6 col-sm-offset-3 visibility-hidden" style="margin-top: 1%">
				<span class='font-size-16' style='color: purple'>Binary Value:</span>&nbsp;&nbsp;&nbsp;<input
					class="index-textbox-size" type="text" name="binaryValue"
					id="binarylValue" placeholder="e.g.11100100" Maxlength='8'  >&nbsp;&nbsp;&nbsp;
					<button type="button" class="btn btn-success disabled opacity40" id="convert">
					<i class="fa fa-arrow-right"></i> Convert to Decimal </button>
			</div>
</div>
<div  class=" col-xs-12" >
	<div id="calculationtable" class='col-xs-offset-2 col-xs-8 opacity00'>
			<div class='col-xs-12'>
				<div id="tablecal" class="col-xs-offset-3 col-xs-6 text-center">Conversion of Binary to Decimal </div>
			</div>
   			<div class="visibility-hidden col-xs-12" id="firstbox">
				<span id="get"  class="col-xs-4  color-lightrose">Binary Digits<b>:</b></span> <span class='col-xs-8' ><span style='height: 31px; display: inline-block;position: relative;' id="binary"></span></span>
			</div>
			<div class="visibility-hidden col-xs-12" style='margin-top: 1px;' id="positionBox">
				<span id="get"  class="col-xs-4  color-lightrose">Positions <b>:</b></span><span id="" class='col-xs-8'><span style='display: inline-block;position: relative;' id="positionDiv" ></span></span>
			</div>
			<div class="visibility-hidden col-xs-12" style='margin-top: 15px;' id="secondbox">
				<span id="get"  class="col-xs-4  ct-code-b-green "></span><span class='col-xs-8'><span style='height: 31px; display: inline-block;position: relative;' id="power" ></span></span>
			</div>
			
			<div class="visibility-hidden col-xs-12" style='margin-top: 15px;' id="thirdbox">
				<span id="get" class="color-lightrose col-xs-4" >Conversion<b>:</b></span><span class='col-xs-8'><span id="powercalculation"></span></span>
			</div>
			
			<div class="col-xs-12 visibility-hidden" style='margin-top: 15px;'  id="fourthbox">
				<span id="get"  class="col-xs-4 color-lightrose"></span><span class='col-xs-8'><span id="multiply"></span></span>
			</div>
			
			<div class="col-xs-12 visibility-hidden" style='margin-top: 15px;' id="fifthbox">
				<span id="get" class="col-xs-4"></span><span class='col-xs-8'><span id="multiplytwonos"></span></span>
			</div>
			
			<div class="col-xs-12 visibility-hidden" style='margin-top: 10px;' id="sixthbox">
				<span id="get"   class=" col-xs-4 color-lightrose">Result<b>:</b></span><span  class ='col-xs-8'><span id="adding"></span></span>
			</div>
			
			<div class="button  col-xs-12 text-center" id="button">
				<button class="btn btn-warning opacity00" type="button" id='restartBtn' style='margin-top: 30px'>Restart</button>
			</div>
		</div>
	</div>
	</body>
<script>
	$(document).ready(function() {
		$('#restartBtn').click(function() {
			location.reload();
		});
		binaryToDecimalConvetionReady();
	});
</script>
</html>