<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link href="/css/font-awesome.min.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script  src="/secure/lang/c/js-min/fdty.min.js" type="text/javascript"></script>
<title>DataTypes</title>
<style type="text/css">
#rightDecimalExp {
	z-index: 10000000;
	position: relative;
	background-color : #fffae6;
	font-size: 13px;
	padding: 7px 11px;
	opacity:0;
}

#exp > div {
	font-size: 14px;
}

.squareBraces  div::before {
	content: '[';
	color:	blue;
}

.squareBraces  div::after {
	content: ']';
	color: blue;	
} 

#pdiv > pre {
	background-color: #ffffff;
	border: 0;
}

pre {
	height : 300px;
}

.method-style {
	border: 1px solid gray;
	border-radius : 10px;
	height : 292px;
}

.introjs-nextbutton, .nextBtn, .restart, #divisionBtn, .fadeBtn {
	background-color : green !important;
}

 .introjs-fixParent {
	opacity : 1 !important;
	position : relative !important;
	transform : none !important;
	z-index : auto !important;
}
 
.ui-effects-transfer {
	border: 1px solid green;
    position: relative;
    z-index: 10000001;
}
 
.typingCursor::after {
	width: 0 !important; 
}

.fraction-binary {
	background-color: gray;
	border-radius: 38px;
	color: yellow;
	padding: 0 4px;
}

.box {
	margin : 1%;
	padding : 0px;
	font-size: 13px;
}

.margin-top {
	margin-top: 1%;
}

.text-center {
	text-align: center !important;
}

.heading-height {
	height: 250px;
	overflow:auto;
	background-color: #fffae6;
}

.Z-Index {
	z-index: 9999999;
	position: relative;
}

.circle {
	border: 2px solid red;
	padding: 1px 6px;
	border-radius:50%;
	margin-left: -51%
}

.dot-circle {
	border: 2px solid red;
    border-radius: 84%;
    display: inline-block;
    height: 10px;
    margin-bottom: -4px;
    margin-left: -50%;
    margin-top: -63px;
    padding: 0 2px;
    animation:changeColor 1s infinite, changeSize 1s ease-in 1s infinite
}



#spanBits > span{
	background-color: #d9ffcc;
	z-index:9999999;
}

#signColor {
	background-color: #ff0000;
	padding:2px;
	border-radius:2px;
	color: black;
}

#exponentColor {
	background-color: pink;
	padding:2px;
	border-radius:2px;
	color: black;
}

#mantisaColor {
	background-color: #d9ffcc;
	padding:2px;
	border-radius:2px;
	color: black;
}

div[id^="divisor"] > span {
    padding: 0px 3px;
}

tr > td {
    padding: 0 4px;
}

#clickBtn {
	background-color: green;
	padding: 2px 3px 3px 3px;
	color: white;
	border-radius: 4px;
	float: right;
}

#binaryValue > span, #FractionalBinaryValue > span {
    border: 1px solid blue;
    float: right;
  /*   padding: 0px 3px; */
    padding: 8px 6px;
}

.text-color {
	color : blue;
}

.span-box {
	/* padding:3px 8px; */
	padding:1px 5px;
	border: 1px solid black;
	position: relative;
	border-radius:4px;
	margin-left:2px;
}
.span-final {
	border: 1px solid black;
    margin-left: 2px;
    padding: 0 1px;
    position: relative;
}

@keyframes changeColor {
	0% {
		background-color: red;
		border-color: black;
	}
	100% {
		background-color: green;
		border-color: yellow;
	}
}

@keyframes changeSize {
	0% {transform: scale(1)}
	65% {transform: scale(1.2)}
	100% {transform: scale(1.4)}
}

@keyframes roll {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

.blink {
	animation:changeSize 1s infinite;	
}

.border-box {
	border:2px solid green;
	border-radius:2px;
	height:26%;
	width:26%;
}

.element {
	animation: roll 3s infinite;
  transform: rotate(30deg);
}

.discription-border {
	border: 1px solid gray;
	border-radius: 2px;
	height: 350px;
	
}

.block-border-color {
	border: 1px solid black;
	border-radius: 4px;
	display: inline-block;
	height: 21px;
	width: 21px;
}

.common-span {
	display: inline-block;
	height: 21px;
	width: 21px;
}

.block-border-no-color {
	border-radius: 4px;
	display: inline-block;
	height: 21px;
	width: 21px;
}

.padding00 {
	padding: 0;
}

.color-pink {
    background-color: pink;
}

.color-blue {
    background-color: #d9ffcc;
}
ul {
	margin-top: 2px;
}

.display-inline-block {
	display: inline-block;
}

.one-line {
	font-size: 15px;
	margin-top: 15px;
}

.valBox {
	border: 2px solid gray;
    border-radius: 3px;
    display: inline-block;
    height: 25px;
    line-height: 22px;
    text-align: center;
    width: 30px;
}

.visibility-hidden {
	visibility: hidden;
}

.ct-code-b-blue {
    color: blue;
}

.display-none {
	display: none;
}
</style>
</head>
<body>
<h3 class="text-center"><span class="label label-warning Z-Index">Floating-Point Binary</span></h3>
	<div class = "col-xs-12">
		<div class = " col-xs-offset-1 col-xs-12 col-xs-10">
			<div class='margin-top discription-border' style='position:relative;'>
				<div id="discription" class="display-none">
					<ul>
						<li>A <b>float</b> data represents real numbers with a decimal point.</li>
						<li>A <b>float</b> value occupies 4 bytes(32 bits) in the memory.</li>
						<li>A <b>float</b> is stored in <a href="https://en.wikipedia.org/wiki/IEEE_754" target="_blank">IEEE 754 standard</a> format.</li>
						<ul>
							<li>The bits in an IEEE 754 standard format are arranged as follows </li>
						</ul>
					</ul>
				</div>
				<div class="col-xs-12 text-center " id="blocks" style="margin-top: 15px;">
					<div id="sign" class="display-inline-block opacity00">
						<div style="margin-bottom:9%;">
							<span class="block-border-color " style="background-color: red;"></span>
							<!-- <span class="block-border-no-color"></span> -->
						</div>
						<div><div>sign bit</div><div>1 bit</div></div>	
					</div>
				<div id="eightBits" class="display-inline-block opacity00">
					<div>
						<span class="common-span"></span> 
						<span class="block-border-color color-pink"></span>
						<span class="block-border-color color-pink"></span>
						<span class="block-border-color color-pink"></span>
						<span class="block-border-color color-pink"></span>
						<span class="block-border-color color-pink"></span>
						<span class="block-border-color color-pink"></span>
						<span class="block-border-color color-pink"></span>
						<span class="block-border-color color-pink"></span>
						<span class="common-span"></span>
						<!-- <span class="block-border-no-color"></span> -->
					</div>
					<div><div>exponent bit</div><div>8 bits</div></div>
				</div>
				<div id="mantissa" class="display-inline-block opacity00">
					<div>	
						<span class="block-border-color color-blue"></span>
						<span class="block-border-color color-blue"></span>
						<span class="block-border-color color-blue"></span>
						<span class="block-border-color color-blue"></span>
						<span class="block-border-color color-blue"></span>
						<span class="block-border-color color-blue"></span>
						<span class="block-border-color color-blue"></span>
						<span class="block-border-color color-blue"></span>
						<span class="block-border-color color-blue"></span>
						<span class="block-border-color color-blue"></span>
						<span class="block-border-color color-blue"></span>
						<span class="block-border-color color-blue"></span>
						<span class="block-border-color color-blue"></span>
						<span class="block-border-color color-blue"></span>
						<span class="block-border-color color-blue"></span>
						<span class="block-border-color color-blue"></span>
						<span class="block-border-color color-blue"></span>
						<span class="block-border-color color-blue"></span>
						<span class="block-border-color color-blue"></span>
						<span class="block-border-color color-blue"></span>
						<span class="block-border-color color-blue"></span>
						<span class="block-border-color color-blue"></span>
						<span class="block-border-color color-blue"></span>
					</div>
					<div><div>mantissa</div><div>23 bits</div></div>
				</div>	
				</div>
				<div class="col-xs-12 display-none">
					<div class="col-xs-12"><div class="one-line">A float is declared and initialized as</div></div>
					<div class="col-xs-12">
						<div class="col-xs-offset-2 col-xs-4" style="font-size: 15px;">
							<div><span>float&emsp;</span><span>f</span>&emsp; = &emsp;<span>2.5</span>;</div><br/>
							<div><span class="opacity00">2</span><span>f</span>&nbsp;<span class="fa fa-arrow-right"></span>&nbsp;<span>variable</span></div>
							<div><div class="valBox">2.5</div>&nbsp;<span class="fa fa-arrow-right"></span>&nbsp;<span>4 bytes</span></div>
							<div><span>1525</span>&nbsp;<span class="fa fa-arrow-right"></span>&nbsp;<span>address</span></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div id="spanBits" class="col-sm-10"></div>
		<div id = 'exp' class="col-xs-12 col-sm-5 method-style box" style="text-align: center;opacity: 1">
			<div id='expDivStep7' style='height:160px'>
				<div id='expDivStep6' style='height:130px'>
					<div id='expDivStep5' style='height:110px'>
						<div id='expDivStep4' style='height:80px'>
							<div id='expDivStep3' style='height:65px'>
								<div id='expDivStep2' style='height:45px'>
									<div id="expDivStep1" style='height: 33px'>
										<div id="pdiv" style='height: 17px'></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
			<div id = 'rightDecimalExp' class="col-xs-12 col-sm-3 box method-style">
			</div>
			<div class="panel panel-default col-xs-3 box Z-Index panel-Div">
    			<div class="panel-heading text-center"><b>Binary Steps</b></b></div>
    			<div class="panel-body heading-height"></div>
  			</div>
  			
	</div>
	<div class="col-xs-6 col-xs-offset-6">
		<button type="button" class="btn btn-warning visibility-hidden" id="restartBtn">Restart</button>
	</div>
<script type="text/javascript">
	
	$('window').ready(function() {
		floatDataType();
	})
	
</script>
</body>
</html>