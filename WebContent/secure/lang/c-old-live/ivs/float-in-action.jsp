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
<script src="/secure/lang/c/js-min/fina.min.js" type="text/javascript"></script>

<title>float data-type</title>
<style>
.td-border {
    border: 2px solid;
}
#signvalbit {
	text-align : right;
}
td {
    height: 20px !important;
    text-align: center;
    width: 25px !important;
}
.panel-body {
	padding : 7px !important;
}
.margin4 {
	margin-top : 5px;
}
.margin10 {
	margin-top : 10px;
}
#int2Div, #int4Div {
	position: relative;
	background-color : #fffae6;
	font-size: 13px;
	padding: 7px 11px;
	opacity:0;
}
#lastDiv {
	height : 25px;
}
#signval, #expval,#manval {
	border: 1px solid;
    height: 20px;
    text-align: center;
}
#biasDiv {
	margin-left : 4px !important;
}
 #firstDiv {
	margin-left : -15px !important;
}
.introjs-nextbutton, .nextBtn, .nextBtn1, .restart,#divisionBtn {
	background-color : green !important;
}
.panel2-text {
	min-height: 130px;
	background-color: #fffae6;
}

.panel-text {
	min-height: 145px;
	background-color: #fffae6;
}
.Z-Index {
	z-index: 9999999;
	position: relative;
}
#lef { 
	background-color : #33f3ff;
}
#fra {
	background-color : #33f3ff;
}
.margin20 {
	margin-top : 20px;
}
#finalDiv {
	height : 280px;
}

#shiftdotDiv {
	height :115px;
}
.padding10 {
	padding-top : 15px;
}
#typing5 {
	height : 80px;
}
#mainDiv {
	height : 350px;
	position :absolute;
}

#typingBox {
	height : 200px;
}
#FractionalBinaryValue {
	margin-left: 40px;
}
#floatText1 {
	margin-left : 5px!important;
}
#animationDiv {
	height : 550px ;
	position : relative;
}
.border-box {
	border: 1px solid black;
    display: inline-block;
  	padding: 4px 5px;
    margin-left: 2px;
}
.borderless-box {
    display: inline-block;
    margin-left: 3px;
    padding: 4px 5px;
}
.bord-box {
   display: inline-block;
   margin-left: 3px;
   padding: 4px 5px;
}
.byte-div {
	margin-left : 2px;
}
#addDiv {
	margin-left : 18px;
}
#firstDiv {
	margin-left : 17px;
}
#secondDiv, #second2Div {
	margin-left : 18px;
}

#thirdDiv {
	margin-left : 180px !important;
}

#third3Div {
	margin-left : 230px !important;
}
#power3 {
	margin-left : 3px;
}
.padding3 {
	padding : 2px;
}
.padding5 {
	padding : 3px 5px;
}
#spanDiv {
	margin-top : 6px;
}
#binaryValue > span {
    border: 1px solid blue;
    float: right;
    padding: 8px 6px;
}
#FractionalBinaryValue > span {
    border: 1px solid blue;
    padding: 0px 3px; 
}
.color-pink {
	background-color : pink;
}
.color-blue {
	background-color: #D9FFCC;
}
#box0 {
	background-color : red;
}
#boxDiv1 {
	text-align : center;
	color : red;
}
#exp3,#exp3Div {
	background-color : pink;
}
#exp3 {
	height : 5px; 
	}
.box-border {
	border: 1px solid grey;
	border-radius: 8px;
	margin: 2px 0 0 5px;
} 

#finalDivtext {
	min-height : 65px;
}
#numDiv{
	z-index : 9999999;
	position: relative;
	background-color: #fffae6;
}
#resultDiv {
	z-index : 9999999;
	position: relative;
	background-color: pink;
	}

.marginleft30 {
	margin-left : 30px;
}
#floatBox {
	height : 20px;
	width : 30px;
	border : 2px solid;
	border-radius : 3px;
	text-align: center;
	margin-left : 15px !important;
}
#floatDiv {
	height : 20px;
}
#int1Div, #int2Div {
	min-height: 170px;
    margin-left: 10px;
}

#int3Div ,#int4Div {
	height: 170px;
    margin-left: 10px;
}
 #fdec {
	display : flex;
}
#intpart {
	min-height : 180px;
}
#fractpart {
	min-height : 180px;
}
#floatVar {
	margin-left : 40px;
}

.padding0 {
	padding : 0;
}
#num1,#num2, #num3, #num4 {
	position : relative;
}
#tablechildDiv > td,th,#multiplier { 
	padding : 3px !important;
}
#remainder {
	padding-left : 8px;
}
.marginleft4 {
	margin-left : 4px; 
}
.box-color-blue {
	color : blue;
}
.color-green {
	color : green;
}
.sign-color-red {
	color : red;
}
.color-red {
	background-color : red;
}

.color-yellow {
	color : yellow;	
}

#fspan31 {
	margin-left : 50px;
}
 
.padding0 {
	padding : 0px;
}
</style>
</head>
<body>
<script>
	$(document).ready(function() {
		floatInActionReady();
	});
</script>
<div class = 'ct-box-main'>
	<div class = 'text-center'>
		<h1 class = 'label ct-demo-heading first-heading'>float data type</h1>	
	</div>
	<div class='buttons-div text-center margin10'>
		<button type="button" class="btn btn-warning visibility-hidden" id="restartBtn">Restart</button>
	</div>
		<div class = 'col-xs-offset-2 col-xs-8 main-div margin10 padding10' id = 'mainDiv'>
			<span id = 'typing1' class = 'padding10'></span>
			<div class = 'box-div col-xs-12 ' id = 'boxDiv'>
				<div class = "border-box opacity00 padding2" id = "box0"></div>
			</div>
			<div class = 'floatsign-div col-xs-12 opacity00 margin4' id = 'floatsignDiv'>
				<span id = 'firstDiv' class = 'opacity00 margin10'>sign bit</span><span id = 'secondDiv' class = 'opacity00 margin10'>exponent bits</span><span id = 'thirdDiv' class = 'opacity00 margin10'>mantissa</span>
			</div>
			<div class = 'floatnum-div col-xs-12 opacity00 margin4' id = 'floatnumDiv'>
				<span id = 'first1Div' class = 'opacity00 margin10'>1 bit</span><span id = 'second2Div' class = 'opacity00 margin10'>8 bits</span><span id = 'third3Div' class = 'opacity00 margin10'>23 bits</span>
			</div>
			<div class = "input-main-div col-xs-12" id = 'inputmainDiv'>
			 	<br><span id = 'floatdec' class = 'opacity00 margin10'>A <b>float</b> is declared and initialised as</span>
				<br><div id="inputDiv" class="col-xs-offset-2 col-xs-7 opacity00 margin10">float&nbsp;&nbsp;&nbsp;&nbsp; f&nbsp;&nbsp;&nbsp;&nbsp; = &nbsp;&nbsp;&nbsp;&nbsp<b>2.5</b>;
						<br><br><span id = "floatVar" class = 'opacity00 margin10'> f <span class ="fa fa-arrow-right marginleft4"></span>&nbsp;&nbsp;&nbsp;variable</span>
						<br><div id = 'fdec'><div id = 'floatBox' class = 'opacity00 margin10'>2.5</div><span class = 'opacity00 byte-div margin4 marginleft4'><span class ="fa fa-arrow-right margin4 marginleft4"></span>&nbsp;&nbsp;4 bytes</span></div>
						<div id = 'addDiv' class = 'opacity00 margin10'>1024 <span class ="fa fa-arrow-right marginleft4"></span>&nbsp;&nbsp;&nbsp;address</div>
					</div>
			</div>
		</div>
		<div class = 'col-xs-11 animation-div margin10' id = 'animationDiv'>
			<div class = 'row'>
				<div class = 'col-xs-offset-4 col-xs-6' id = 'mainnumDiv'><span id = 'numDiv' class = 'opacity00'>Consider a float <span id = 'intnumDiv'>12</span><span id = 'fractnumDiv'>.625</span> in which <b>12</b> is the integral part and <b>.625</b> is the fractional part.</span></div>
				<div class = 'row'>
				<div class = 'col-xs-6 int-part padding0' id = 'intpart' style = "font-size : 13px">
					<div class = 'col-xs-5 padding0'>
						<div class = 'panel panel-default opacity00' id = 'int1Div'>
			    			<div class="panel-heading text-center"><b>Decimal To Binary Steps</b></b></div>
			    			<div class="panel-body panel-text"></div>
						</div>
					</div>	
						<div class = 'col-xs-6 padding0 int-div box-border opacity00' id = 'int2Div'>
						</div>
				</div>
				<div class = 'col-xs-6 fract-part margin4 padding0' id = 'fractpart' style = "font-size : 13px">
					<div class = 'col-xs-6 padding0'>
						<div class = 'panel panel-default opacity00' id = 'int3Div'>
			    			<div class="panel-heading text-center"><b>Fraction To Binary Steps</b></b></div>
			    			<div class="panel-body panel2-text"></div>
						</div>
					</div>
					<div class = 'col-xs-5 padding0 int-div box-border opacity00' id = 'int4Div'>
					</div>
				</div>
				</div>
			
			<div class = 'col-xs-12 padding0'>
				<div class = 'col-xs-offset-3 col-xs-6  padding0 final-div opacity00 margin10' id = 'finalDiv'>
				<div id = 'finalDivtext' class= "marginleft5"></div>
					<div id = 'shiftdotDiv'></div>
					<br>
					<div id = 'lastbitDiv' class = 'padding0 opacity00 margin4'>
						<span id = 'signvalbit' class = 'col-xs-offset-1 col-xs-2'>1 bit</span>
						<span id = 'expvalbit' class = 'col-xs-2'>8 bits</span>
						<span id = 'manvalbit' class = 'col-xs-7'>23 bits</span>
					</div>
					<br>
					<div id = 'lastDiv' class = 'padding0 col-xs-offset-2 col-xs-8 opacity00'>
						<span id = 'signval' class = 'col-xs-1'></span>
						<span id = 'expval' class = 'col-xs-4'></span>
						<span id = 'manval' class = 'col-xs-2'></span>
					</div>
					<div id = 'lastvalDiv' class = 'opacity00 padding0'>
						<span id = 'signvalname' class = 'col-xs-offset-2 col-xs-1'>sign</span>
						<span id = 'expvalname' class = 'col-xs-2'>exponent</span>
						<span id = 'manvalname' class = 'col-xs-2'>mantissa</span>
					</div>
				</div>
			</div>
		</div>
	</div> 
</body>
</html>