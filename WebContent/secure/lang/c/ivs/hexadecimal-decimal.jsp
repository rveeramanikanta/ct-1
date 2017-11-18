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
<script src="/secure/lang/c/js/hexadecimal-decimal.js" type="text/javascript"></script>

<title>hex to dec</title>
</head>
<style>

.color-brown {
	color: #A0522D;
}

.color-purple {
	color: purple;
}
.z-index1000000 {
	position: relative;
	background-color: white;
	z-index: 1000000 !important;
}

.ct-green-color {
	color: green;
}

.ct-Maroon-color {
	color: Maroon;
}

.ct-aqua-color {
	color: aqua;
}

.introjs-tooltip {
	min-width: 210px;
}

.box,.box3 {
	background-color: #f9d3a2;
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
#BinaryDigitsResult0 {
    margin-left: 10px;
}
.box1 {
    width:35px;
	height:15px;
	position:relative;
    display:inline-block;
}

.box4 {
	background-color: #fff8dc; 
    border-radius: 5px;
    width : 35px;
	min-height : 20px;
	position:relative;
    display:inline-block;
	box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
    border-radius: 2px; 
	margin-left: 5px;
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
   	min-height:140px;
    margin-top: 20px;
    color: black;
    padding: 20px;
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

#tableheading {
	margin-top: 1%;
	margin-left: 19.5%;
	font-size: 16px;
}

.font-size-16 {
	font-size: 16px;
}

.index-textbox-size {
	width: 18%;
	min-height: 30px !important;
	border: 1px solid gold;
	display: inline !important;
	border-radius: 4px;
	padding: 6px 10px;
	text-align: center
}

#calculationTable {
	border : 1px solid black;
	min-height : 380px;
	margin-top : 10px;
	border-radius : 6px;
	background-color : #dcdcdc;
	box-shadow : 0 0 5px rgba(0, 0, 0, 0.3); 
}

#tablecal {
	color: green;
	font-size: 16px;
	text-decoration: underline;
	font-weight: bold;
	margin-bottom: 5%;
}

#power {
    bacground-color: blue;
}

.box2 {
   min-width:30px;
   min-height:30px;
   position:relative;
   display:inline-block;
   box-shadow: 0 0 9px rgba(0, 0, 0, 0.3);
   border-radius: 2px; 
   margin-left: 10px;
   padding: 5.2px;
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
.introjs-tooltip {
	min-width: 200px;
}

.margin10 {
	margin-top : 10px;
}

#numbersCombine {
	margin-left : 15px !important;
}

.introjs-tooltiptext {
	width: 212px;
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
</style>

<body>
<div id ='totaldiv' class='totaldivclass col-xs-12 text-center'>
	<span id='title' class='label ct-demo-heading'>Hexadecimal<sub>(<span id="radix16">16</span>)</sub> to Decimal<sub>(<span id="radix2">10</span>)</sub> Conversion</span>
</div>
<div class='col-xs-12'>
	<div id='informationdiv' class='col-xs-10 col-xs-offset-1'>
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
	<div id="conversiondiv" class="text-center col-xs-12">
			<div id="inputDiv" class="col-sm-6 col-sm-offset-3 opacity00" style="margin-top: 15px">
				<span class='font-size-16'><span>Hexadecimal value</span> <b>:</b></span>&nbsp;&nbsp;&nbsp;<input
					class="index-textbox-size text-center" type="text" name="binaryValue"
					id="octalValue" placeholder="e.g.0XF7D" Maxlength='5'  >&nbsp;&nbsp;&nbsp;
					<button type="button" class="btn btn-success disabled opacity40" id="convert">
					<i class="fa fa-arrow-right"></i> Convert to Decimal </button>
			</div>
		</div>
<div class = 'col-xs-12 padding0'>	
	<div id='calculationTable' class='col-xs-offset-2 col-xs-8  visibility-hidden'>
		<div  id='octalValuesDiv' class='col-xs-12 opacity00 margin10'>
			<span class='col-xs-5 padding0 color-lightrose font14' id='octalValuesText'><span>Hexadecimal Value</span> <b>:</b></span>
			<span class='col-xs-7 padding0' style='display: block; height: 32px;' id='octalValuesGet'></span>
		</div>
		
		<div id='binaryValuesDiv' class='col-xs-12 opacity00 margin10'>
			<span class="col-xs-5 padding0 color-lightrose font14" id='binaryValuesText'><span>Binary Digits</span> <b>:</b></span>
			<span class='col-xs-7 padding0'  id='binaryValuesGet'></span>
		</div>
		
		<div id='combineBinaryNumbers' class='col-xs-12 opacity00' style='margin-top: 20px'>
			<span class='col-xs-5 font14 padding0'><span class='color-lightrose'>Binary Result</span> <b>:</b></span>
			<span id='numbersCombine' class='col-xs-6 padding0  ct-demo-green'></span>
		</div>
		
		<div id='binaryResult' class='col-xs-12 opacity00' style='margin-top: 5px'>
			<span class='col-xs-3 font14 padding0'><span  class='color-lightrose'>Binary Result</span><b>:</b></span>
			<span id='binaryResultValue' class='col-xs-2 append padding0'></span>
		</div>
		
	 	<div class="visibility-hidden col-xs-12 margin10" id="firstbox">
			<span id="get"  class="col-xs-3 font14 padding0 color-lightrose">Binary Digits<b>:</b></span> 
			<span class='col-xs-8 padding0' ><span style='display: inline-block; position: relative;' id="binary"></span></span>
		</div>
		
		<div class="visibility-hidden col-xs-12 margin10" id="positionDiv">
			<span id="get2"  class="col-xs-3 color-lightrose padding0">Positions :</span>
			<span class='col-xs-9 padding0'><span style=' display: inline-block; position: relative;' id="position" ></span></span>
		</div>
		
		<div class="visibility-hidden col-xs-12 margin10" id="secondbox">
			<span id="get2"  class="col-xs-3 ct-code-b-green padding0"></span>
			<span class='col-xs-8 padding0'><span style='height: 31px; display: inline-block; position: relative;' id="power" ></span></span>
		</div>
		
		<div class="visibility-hidden col-xs-12 margin10" id="thirdbox">
			<span class='col-xs-12' id="powecalculation"></span>
		</div>
		
		<div class="col-xs-12 visibility-hidden margin10" id="fourthbox">
			<span class='col-xs-12'><span id="multiply"></span></span>
		</div>
		
		<div class="col-xs-12 visibility-hidden " style='margin-top: 5px;' id="fifthbox">
			<span class='col-xs-12'><span id="multiplytwonos"></span></span>
		</div>
		
		<div class="col-xs-12 visibility-hidden " style='margin-top: 5px;' id="sixthbox">
			<span id="get" class="col-xs-4 padding0 font14 color-lightrose">Result<b>:</b></span><span  class ='col-xs-8 padding0'><span id="adding"></span></span>
		</div>
	</div>
	
</div>
<div class="button col-xs-12 text-center " id="button">
	<button class="btn btn-success glyphicon glyphicon-refresh opacity00" type="button" id='restartBtn' style='margin-top:8px'>Restart</button>
</div>
</body>
<script>

	$(document).ready(function() {
		hexadecimalDecimalReady();
	}, 1000);  

</script>
</html>