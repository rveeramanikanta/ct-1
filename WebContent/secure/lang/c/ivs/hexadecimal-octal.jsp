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
<script src="/secure/lang/c/js/hexadecimal-octal.js" type="text/javascript"></script>

<title>hexadecimal to octal</title>
</head>
<style>

.color-brown {
	color: #A0522D;
}

.color-purple {
	color: purple;
}
.z-index9999999 {
	z-index: 9999999;
}

.box,.box3 {
	background-color: #EFB6AF;
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
    width:20px;
	height:15px;
}

.box4 , .box1 {
    border-radius: 5px;
    width:35px;
	height:20px;
	position:relative;
    display:inline-block;
    border-radius: 2px; 
	margin-left: 10px;
	background-color: #FFD39B;
}

.color-lightrose {
	color: #990033;
}

.color-red {
	color: red;
}

.padding0 {
	padding : 0;
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
#informationdiv {
    border-radius: 0px;
    height:85px;
    margin-top: 20px;
    color: black;
}

#numberconversion {
    border: 1px solid Black;
    margin-top: 10px;
    text-align: left;
}

.numberconversiontitle {
	border: 1px solid Black;
    font-size: 15px;
    text-align: center;
    margin-top: 10px;
}

.font-size-16 {
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

#calculationTable {
	border: 1px solid black;
	/* height: 440px; */
	margin-top: 4px;
	border-radius: 6px;
	background-color: #dcdcdc;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); 
}

#tablecal {
	color: green;
	font-size: 14px;
	text-decoration: underline;
	font-weight: bold;
	margin-bottom: 5%;
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
#finalDiv {
	height: 30px;
	font-size : 16px;
}
.ct-code-b-yellow {
	color: yellow;
}

#powervalues {
	background-color: white;
}
.color-lightrose {
	color: #990033;
}

.square-Box {
	border-spacing: 10px 5px;
	border-collapse: separate;
}

.binaryBox, .binaryBox1, .binaryBox3 {
	background-color: #afeeee;
    border-radius: 2px;
    box-shadow: 0 0 9px rgba(0, 0, 0, 0.3);
    display: inline-block;
    height: 30px;
    margin-left: 10px;
    margin-top: 0;
    padding: 8px;
    position: relative;
    width: 30px;
}

.binaryBox2 {
	background-color: #96e483;
    border-radius: 2px;
    box-shadow: 0 0 9px rgba(0, 0, 0, 0.3);
    display: inline-block;
    height: 30px;
    margin-left: 10px;
    margin-top: 0;
    padding: 8px;
    position: relative;
    width: 30px;
}

.z-index1000000 {
	position: relative;
	background-color: white;
	z-index: 1000000 !important;
}

div, span, tr, td {
	position: relative;
}

.font-size {
	font-size: 14px;
}

.squaring {
	display: inline-block;
	width: 18px;
}

.smallBox {
    border: 2px solid gray;
    padding: 4px;
    text-align: center;
    width: 50px;
    font-weight : bold;
    font-size: 14px;
}

.ct-green-color {
	color: green;
}

.nextBtn1 {
	background-color : green !important;
}

.ct-Maroon-color {
	color: Maroon;
}

.opacity40 {
	opacity: 0.4;
}

.output {
	display:inline-block;
}
.introjs-tooltip {
	min-width: 180px;
}

.marginleft10 {
	margin-left : 10px !important;
}

.margin10 {
	margin-top : 10px;
}

.margin5 {
	margin-top : 5px;
}

/* #numbersCombine {
	margin-left : 15px !important;
} */

.convert {
	font-weight: bold;
	background-color: green;
}

.backgroundColor {
	background-color: red;
}

.user-btn {
	background: green;
}

.errorText {
	color: red;
}

.output {
	display:inline-block;
}

.box-position {
	display: inline-block;
    margin-left: 14px;
    margin-top: 0;
    position: relative;
    width: 30px;
}
</style>

<body>
<div id ='totaldiv' class='totaldivclass col-xs-12 text-center'>
	<span id='title' class='label ct-demo-heading'>Hexadecimal<sub>(<span id="radix16">16</span>)</sub> to Octal<sub>(<span id="radix2">8</span>)</sub> Conversion</span>
</div>

<div class='col-xs-12'>
	<div id='informationdiv' class='col-xs-10 col-xs-offset-1'>
	</div>
</div>
<div class="col-xs-12" id="totalbox">
		<table id="numberconversion" class='col-xs-offset-2 col-xs-8 visibility-hidden'>
			<tr>
				<td class="" style="background-color: #8FBC8F; border: 1px solid black; text-align: center"><b>Hexadecimal</b></td>
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
			<td class="" style="background-color: #8FBC8F; border: 1px solid black; text-align: center"><b>Binary</b></td>
				<td class ='numberconversiontitle color-brown' id = 'binvalue0'>0000</td>
				<td class ='numberconversiontitle color-brown' id = 'binvalue1'>0001</td>
				<td class ='numberconversiontitle color-brown' id = 'binvalue2'>0010</td>
				<td class ='numberconversiontitle color-brown' id = 'binvalue3'>0011</td>
				<td class ='numberconversiontitle color-brown' id = 'binvalue4'>0100</td>
				<td class ='numberconversiontitle color-brown' id = 'binvalue5'>0101</td>
				<td class ='numberconversiontitle color-brown' id = 'binvalue6'>0110</td>
				<td class ='numberconversiontitle color-brown' id = 'binvalue7'>0111</td>
				<td class ='numberconversiontitle color-brown' id = 'binvalue8'>1000</td>
				<td class ='numberconversiontitle color-brown' id = 'binvalue9'>1001</td>
				<td class ='numberconversiontitle color-brown' id = 'binvalue10'>1010</td>
				<td class='numberconversiontitle color-brown' id = 'binvalue11'>1011</td>
				<td class='numberconversiontitle color-brown' id = 'binvalue12' >1100</td>
				<td class='numberconversiontitle color-brown' id = 'binvalue13'>1101</td>
				<td class='numberconversiontitle color-brown' id = 'binvalue14'>1110</td>
				<td class='numberconversiontitle color-brown' id = 'binvalue15'>1111</td>
			</tr>
		</table>
	</div>
<div id="informDiv" class="col-xs-8 col-xs-offset-4 margin10">
	<table id="table" class="opacity00">
		<tr>
			<td class="smallBox" style="background-color: #8FBC8F;"><b>Binary:</b></td>
			<td class="smallBox" id = 'bin0'>000</td>
			<td class="smallBox" id = 'bin1'>001</td>
			<td class="smallBox" id = 'bin2'>010</td>
			<td class="smallBox" id = 'bin3'>011</td>
			<td class="smallBox" id = 'bin4'>100</td>
			<td class="smallBox" id = 'bin5'>101</td>
			<td class="smallBox" id = 'bin6'>110</td>
			<td class="smallBox" id = 'bin7'>111</td>
		</tr>
		<tr>
			<td class="smallBox" style="background-color: #8FBC8F;"><b>Octal:</b></td>
			<td class="smallBox color-brown" id = 'oct0'>0</td>
			<td class="smallBox color-brown" id = 'oct1'>1</td>
			<td class="smallBox color-brown" id = 'oct2'>2</td>
			<td class="smallBox color-brown" id = 'oct3'>3</td>
			<td class="smallBox color-brown" id = 'oct4'>4</td>
			<td class="smallBox color-brown" id = 'oct5'>5</td>
			<td class="smallBox color-brown" id = 'oct6'>6</td>
			<td class="smallBox color-brown" id = 'oct7'>7</td>
		</tr>
	</table>
</div>
<div id="conversiondiv" class="row text-center col-xs-12 padding0">
	<div id="inputDiv" class="col-xs-6 col-xs-offset-3 opacity00" style="margin-top: 15px">
		<span class='font-size-16'><span>Hexadecimal value</span> <b>:</b></span>&nbsp;&nbsp;&nbsp;<input
			class="index-textbox-size text-center" type="text" name="binaryValue"
			id="octalValue" placeholder="e.g.0XF7D" Maxlength='5'  >&nbsp;&nbsp;&nbsp;
			<button type="button" class="btn btn-success disabled opacity40" id="convert">
			<i class="fa fa-arrow-right"></i> Convert to Octal </button>
	</div>
</div>
		
<div id='calculationTable' class='col-xs-offset-2 col-xs-8 visibility-hidden'>
	<div  id='octalValuesDiv' class='col-xs-12 opacity00' style='margin-top: 5px;'>
		<span class='col-xs-2  font14'  style='font-size: 14px;' id='octalValuesText'><span class='color-lightrose'>Hexadecimal Value</span> <b>:</b></span>
		<span class='col-xs-10 text-center ' style='display: block;' id='octalValuesGet'></span>
	</div>
	
	<div id='binaryValuesDiv' class='col-xs-12 opacity00' style='margin-top: 5px;'>
		<span class='col-xs-2  font14' id='binaryValuesText'><span class='color-lightrose'>Binary Digits</span> <b>:</b></span>
		<span class='col-xs-10 text-center'  id='binaryValuesGet'></span>
	</div>
	
	<div id='combineBinaryNumbers' class='col-xs-12 opacity00' style='margin-top: 20px'>
		<span class='col-xs-2 font14'><span class='color-lightrose'>Binary Result</span> <b>:</b></span>
		<span id='numbersCombine' class='col-xs-10 text-center  opacity00 ct-demo-green'></span>
	</div>
	
	<div id='binaryResult' class='col-xs-12 opacity00'>
		<span class='col-xs-offset-3 col-xs-3 padding0' style='font-size: 14px;'><span  class='color-lightrose'>Binary Result</span><b>:</b></span>
		<span id='binaryResultValue' class='col-xs-6 col-xs-offset-2 append padding0 marginleft10'></span>
	</div>
		<div id="getValues" class="col-xs-12 opacity00">
			<span class='col-xs-offset-2 col-xs-1 padding0' style='font-size: 14px;'></span>
			<table  class="square-Box">
				<tr id="numberBox" style="display: inline-block;"></tr>
			</table>
		</div>
		<div class="col-xs-12 opacity00 padding0" id="rowDiv">
			<div class="col-xs-3" id="row0">
				<table  class="square-Box">
					<tr id="columnDiv0" style="display: inline-block;"></tr>
				</table></div>
			<div class="col-xs-3 padding0" id="row3">
				<table  class="square-Box">
					<tr id="columnDiv3" style="display: inline-block;"></tr>
				</table>
			</div>
			<div class="col-xs-3 padding0" id="row6">
				<table  class="square-Box">
					<tr id="columnDiv6" style="display: inline-block;"></tr>
				</table>
			</div>
			<div class="col-xs-3 padding0" id="row9">
				<table  class="square-Box">
					<tr id="columnDiv9" style="display: inline-block;"></tr>
				</table>
			</div>
		</div>
		<div class="col-xs-12 opacity00 padding0" id="positionDiv" style="margin-left: 12px;">
			<div class="col-xs-3 " id="position0">
				<table  class="position-Box" >
					<tr id="positionDiv0"></tr>
				</table></div>
			<div class="col-xs-3 padding0" id="position3">
				<table  class="position-Box" >
					<tr id="positionDiv3"></tr>
				</table>
			</div>
			<div class="col-xs-3 padding0" id="position6">
				<table  class="position-Box" >
					<tr id="positionDiv6"></tr>
				</table>
			</div>
			<div class="col-xs-3 padding0" id="position9">
				<table  class="position-Box" >
					<tr id="positionDiv9"></tr>
				</table>
			</div>
		</div>
		<div class="col-xs-12 opacity00 padding0" id="squareDiv">
			<div class="col-xs-3 " id="square0">
				<table  class="square-Box" >
					<tr id="squareDiv0"></tr>
				</table></div>
			<div class="col-xs-3 padding0" id="square3">
				<table  class="square-Box" >
					<tr id="squareDiv3"></tr>
				</table>
			</div>
			<div class="col-xs-3 padding0" id="square6">
				<table  class="square-Box" >
					<tr id="squareDiv6"></tr>
				</table>
			</div>
			<div class="col-xs-3 padding0" id="square9">
				<table  class="square-Box" >
					<tr id="squareDiv9"></tr>
				</table>
			</div>
		</div>
		<div class="col-xs-12" id="calculationIntroDiv">
			<div class="col-xs-12 opacity00 font-size" id="calculationDiv">
				<div class="col-xs-3" id="calculation0">
					<!-- <span id="equalId1">=</span> -->
					<span id="calculationDiv0"></span>
				</div>
				<div class="col-xs-3" id="calculation3">
					<!-- <span id="equalId2">=</span> -->
					<span id="calculationDiv3"></span>
				</div>
				<div class="col-xs-3" id="calculation6">
					<!-- <span id="equalId3">=</span> -->
					<span id="calculationDiv6"></span>
				</div>
				<div class="col-xs-3" id="calculation9">
					<!-- <span id="equalId4">=</span> -->
					<span id="calculationDiv9"></span>
				</div>
			</div>
			<div class="col-xs-12 opacity00 font-size" id="multiplicationDiv" style='margin-top: 10px'>
				<div class="col-xs-3" id="multiply0">
					<!-- <span id="equalId5">=</span> -->
					<span id="multiplicationDiv0"></span>
				</div>
				<div class="col-xs-3" id="multiply3">
					<!-- <span id="equalId6">=</span> -->
					<span id="multiplicationDiv3"></span>
				</div>
				<div class="col-xs-3" id="multiply6">
				<!-- <span id="equalId6">=</span> -->
					<span id="multiplicationDiv6"></span>
				</div>
				<div class="col-xs-3" id="multiply9">
				<!-- <span id="equalId8">=</span> -->
					<span id="multiplicationDiv9"></span>
				</div>
			</div>
			<div class="col-xs-12 opacity00 font-size" id="additionDiv" style='margin-top: 10px'>
				<div class="col-xs-3" id="addition0">
					<!-- <span id="equalId9">=</span> -->
					<span id="additionDiv0"></span>
				</div>
				<div class="col-xs-3" id="addition3">
					<!-- <span id="equalId10">=</span> -->
					<span id="additionDiv3"></span>
				</div>
				<div class="col-xs-3" id="addition6">
					<!-- <span id="equalId11">=</span> -->
					<span id="additionDiv6"></span>
				</div>
				<div class="col-xs-3" id="addition9">
					<!-- <span id="equalId12">=</span> -->
					<span id="additionDiv9"></span>
				</div>
				
			</div>
			<div class="col-xs-12 opacity00 font-size" id="resultDiv" style='margin-top: 10px'>
				<div class="col-xs-3" id="result0">
					<!-- <span id="equalId13">=</span> -->
					<span id="resultDiv0"></span>
				</div>
				<div class="col-xs-3" id="result3">
					<!-- <span id="equalId14">=</span> -->
					<span id="resultDiv3"></span>
				</div>
				<div class="col-xs-3" id="result6">
					<!-- <span id="equalId15">=</span> -->
					<span id="resultDiv6"></span>
				</div>
				<div class="col-xs-3" id="result9">
					<!-- <span id="equalId16">=</span> -->
					<span id="resultDiv9"></span>
				</div>
			</div>
			
			<div class="col-xs- 12"  style='margin-top: 10px'>
				<div class="col-xs-offset-4 col-xs-4 opacity00" id="finalDiv">
					<span id="finalResult"></span>
				</div>
			</div>
		</div>
	</div>
</div>


<div class="button col-xs-12 text-center " id="button">
	<button class="btn btn-warning opacity00" type="button" id='restartBtn' style='margin-top:8px'>Restart</button>
</div>
</body>
<script>

	$(document).ready(function() {
		hexadecimalOctalReady();
	});

</script>
</html>