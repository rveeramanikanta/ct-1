<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src='/js/intro.js'></script>
<!-- <script src='/secure/lang/c/js-min/uocf.min.js'></script> -->
<script src='/secure/lang/c/js/usage-of-calloc-function.js'></script>
<title>Usage of Calloc() function</title>

<style>
.border {
	border: 1px solid;
	border-radius: 8px;
	padding: 8px;
}

.info-div {
	background-color: rgb(243, 235, 235);
	border-radius: 10px;
	font-size: 14px;
	padding: 11px 12px;
	font-family: monospace;
}

.margin-top-1 {
	margin-top: 1%;
}

.margin-top-2 {
	margin-top: 2%;
}

.margin-top-3 {
	margin-top: 3%;
}

.margin-top-5 {
	margin-top: 5%;
}

.creamPreTab4 {
	-moz-tab-size: 4;
	background-color: #fffae6;
	border-radius: 8px;
	font-size: 13px;
	margin: 5px;
	padding: 10px;
	white-space: pre;
	font-family: monospace;
}

.memory-box {
	height: 22px;
	border: 1px solid;
	text-align: center;	
}

.rowtdClass {
	padding: 4px;
	text-align: center;
	width: 55px;
}

.Vertical-text-center  {
	height: 62px;
	line-height: 62px;
	text-align: right; 
}

.Vertical-variable-text-center  {
	height: 62px;
	line-height: 74px;
	text-align: right; 
}

.address-box, .element-box {
	padding: 4px;
	text-align: center;
	width: 55px;
	font-size: 13px;
}

.element-box {
	color: lightslategrey;
}

.small-box, .small-box-royalblue, .small-box-bluevoilet, .small-box-firebrick {
	border: 1px solid;
	padding: 1px;
	text-align: center;
}

.small-box-royalblue {
	border-color: royalblue;
}

.small-box-bluevoilet {
	border-color: blueviolet;
}

.small-box-firebrick {
	border-color: firebrick;
}

.ct-color-springgreen {
	color: springgreen;
}

.user-btn {
	background-color: green;
	margin: 0!important;
}

.ui-effects-transfer {
	border: 1px solid green;
	 z-index: 9999999 !important;
}

.svg-css {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
}

.svg-line {
	display: none;
	position: relative;
	stroke: gray;
	stroke-width: 2; 
}

.z-index9999999 {
	z-index: 9999999;
	background-color: white;
}

.blinking {
	animation-name: blink;
	animation-duration: 1s;
	animation-iteration-count: 2;
}

@keyframes blink {
	50% {background:  turquoise;}
}

div, span {
	position: relative;
}

.introjs-tooltip {
	min-width: 280px;
}

.ct-color-lime {
	color: lime;
	font-weight: bold;
}

.ct-color-maroon {
	color: maroon;
	font-weight: bold;
}

.display-inline {
	display: inline-block;
}

.value-css {
	color: blue;
	font-family: monospace;
	font-weight: bold;
}

.address-css {
	color: green;
	font-family: monospace;
	font-weight: bold;
}

.ct-code-b-green {
	color: green;
	font-weight: bold;
}

</style>
</head>
<body>

<div class="main-div col-xs-12">
	<div class="text-center margin-top-1"><h3 class='label ct-demo-heading' id="heading"><span>Usage of calloc()</span></h3></div>
	<div class="col-xs-8 col-xs-offset-2 margin-top-2 info-div" id="infoDiv">
		<div id="list1" class="opacity00">The <span class='ct-code-b-green'>calloc()</span> function is used for memory allocation during 
			the time of execution.
		</div>
			<span id="list3" class="opacity00">  &emsp; Syntax : <span class="ct-code-b-green">(void*)calloc(numberofobjects, bytesofeachobject);</span>
			</span>
	</div>
	<div class="col-xs-12 margin-top-2">
		<div class="col-xs-10 col-xs-offset-1">
			<div class="col-xs-12 margin-top-5"  id="firstDivExample">
				<div class="col-xs-4 border opacity00" id="exampleOne">
<pre class="creamPreTab4 opacity00" id="preCode">
<span id='firstExLine1'><span id='dataTypeInt1'>int</span> *p;</span>
<div id='firstExLine2' class="display-inline">P = (<span id='dataTypeInt2'>int*</span>)<div id='callocFunction' class="display-inline"><span class="ct-code-b-green">calloc(<span id='memory'>5</span>, <span id='size'>sizeof(int)</span></div>)</span>;</div>
</pre>
				</div>
				<div class="col-xs-7 col-xs-offset-1">
					<div class="col-xs-12 border opacity00" id="firstExDiv">
						<div class="col-xs-5 text-center margin-top-1">
							<div class="col-xs-12 opacity00" id="pBox">
								<div class="col-xs-5 Vertical-text-center">p</div>
								<div class="col-xs-6">
									<div style="color: lightslategrey;">2 bytes</div>
									<div class="memory-box" id="memoryBox1">
										<span class="opacity00 value-css" id="baseAddress" style="font-size: 13px;">1056</span>
									</div>
									<div><span class="address-css" id="cBoxAddress">1112</span></div>
								</div>
							</div>
						</div>
						<div class="col-xs-7 opacity00" id="oneDArrayDiv" style="margin-top: -1%;">
							<div class="col-xs-12">
								<div class="col-xs-1 Vertical-variable-text-center"></div>
								<div class="col-xs-10">
									<table align="center">
										<tr class="opacity00" id="elementId">
											<%for (int i = 1; i <= 5; i++) {%>
												<td class="element-box"><span id="element<%=i%>"><%=(i - 1)%></span></td>
											<%}%>
										</tr>
										<tr id="smallBox">
											<%for (int i = 1; i <= 5; i++) {%>
												<td class="small-box"><span class="append-zero opacity00 value-css" id="valuesId<%=i%>">0</span></td>
											<%}%>
										</tr>
										<tr class="opacity00" id="addressId">
											<td class="address-box address-css"><span id="firstAddressId">1056</span></td>
											<td class="address-box address-css">1058</td><td class="address-box address-css">1060</td>
											<td class="address-box address-css">1062</td><td class="address-box address-css">1064</td>
										</tr>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-12 margin-top-2">
		<div class="col-xs-11 col-xs-offset-1">
			<div class="col-xs-12 margin-top-5">
				<div class="col-xs-4 border opacity00" id="exampleTwo">
<pre class="creamPreTab4 opacity00" id="preCodeTwo">
<span id="secondExLine1"><span id='dataTypeFloat1'>float</span> *q;</span>
<div id="secondExLine2" class="display-inline">q = <span id='dataTypeFloat2'>(float*)</span><span id='callocFor2D'><span class="ct-code-b-green">calloc(3*2, sizeof(float))</span></span>;</div>
</pre>
				</div>
				<div class="col-xs-7 col-xs-offset-1 border opacity00" id="secondExDiv" style="margin-left: 6%;">
					<div class="col-xs-12">
						<div class="col-xs-5 margin-top-2">
							<div class="col-xs-12 opacity00" id="qBox">
								<div class="col-xs-5 Vertical-text-center">q</div>
								<div class="col-xs-6 text-center">
									<div style="color: lightslategrey;">2 bytes</div>
									<div class="memory-box" style="border: 1px solid gray;" id="memoryBox2">
										<span class="opacity00 value-css" id="qValue" style="font-size: 13px;">1002</span>
									</div>
									<div style="font-size: 13px; margin-top: 3px;" class="address-css">1044</div>
								</div>
							</div>
						</div>
						<div class="col-xs-7 opacity00 " id="twoDArrayDiv">
							<div class="col-xs-12">
								<div class="col-xs-1 Vertical-variable-text-center"></div>
								<div class="col-xs-10">
									<table align="center">
										<tr id="elementId">
											<td class="element-box"><span id="element1">[0][0]</span></td>
											<td class="element-box"><span id="element2">[0][1]</span></td>
											<td class="element-box"><span id="element3">[1][0]</span></td>
											<td class="element-box"><span id="element4">[1][1]</span></td>
											<td class="element-box"><span id="element5">[2][0]</span></td>
											<td class="element-box"><span id="element6">[2][1]</span></td>
										</tr>
										<tr id="smallBoxTwoD">
											<%for (int i = 1; i <= 6; i++) {%>
												<td class="small-box-bluevoilet"><span class="zero-twoD opacity00" id="valuesId<%=i%>">0</span></td>
											<%}%>
										</tr>
										<tr class="opacity00" id="twoDAddressId">
											<td class="address-box address-css"><span id="twoDBaseAddress">1002</span></td>
											<td class="address-box address-css">1006</td>
											<td class="address-box address-css">1010</td>
											<td class="address-box address-css">1014</td>
											<td class="address-box address-css">1018</td>
											<td class="address-box address-css">1022</td>
										</tr>
										<tr id="rowSpan4">
											<td colspan="2" class="rowtdClass" id="rowId1" style="color: blueviolet;">0<sup><b>th</b></sup> row</td>
											<td colspan="2" class="rowtdClass" id="rowId2" style="color: firebrick;">1<sup><b>st</b></sup> row</td>
											<td colspan="2" class="rowtdClass" id="rowId3" style="color: royalblue;">2<sup><b>nd</b></sup> row</td>
										</tr>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-12">
		<div class="text-center margin-top-5" id="restartDiv"><a class="btn btn-warning opacity00" id="restart">Restart</a></div>
	</div>
</div>
</body>
<script>
$(document).ready(function() {
	usageOfcallocFunctionReady();
});
</script>
</html>
