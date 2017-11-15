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
<!-- <script src='/secure/lang/c/js-min/dma.min.js'></script> -->
<script src='/secure/lang/c/js/dynamic-memory-allocation.js'></script>
<title>Dynamic memory allocation</title>

<style>
.margin-top-2 {
	margin-top: 2%;
}

.heading-css {
    margin: 20px 0 10px;
}

.border {
	border: 1px solid;
	border-radius: 8px;
	padding: 10px;
}

.Vertical-text-center  {
	text-align: right; 
}

.Vertical-text-left {
	text-align: left;
}

.Vertical-text-right {
	text-align: right;
}

.Vertical-variable-text-center  {
	height: 62px;
	line-height: 74px;
	text-align: right;
	padding: 0;
}

.memory-box {
	height: 22px;
	border: 1px solid;
	text-align: center;	
}

.margin-top-7 {
	margin-top: 7%;
}

 .margin-top-2 {
 	margin-top: 2%;
 }
 
 .margin-top-1 {
 	margin-top: 1%;
 }
 
.introjs-tooltip {
	min-width: 280px;
}

.ct-color-lime {
	color: lime;
	font-weight: bold;
	
}

.introjs-duplicate-nextbutton, .user-btn {
	background-color: green;
}

.output-console-body {
	background-color: black;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #f0f0f0;
	font-family: monospace;
	font-size: 14px;
	margin-bottom: 14px;
	height: 60px;
	overflow: auto;
	padding: 10px;
	white-space: nowrap;
}

.creamPreTab4 {
	-moz-tab-size: 3;
	tab-size: 3;
	background-color: #fffae6;
	border-radius: 8px;
	font-size: 13px;
	margin: 5px;
	padding: 10px;
	white-space: pre;
}

div, span {
	position: relative;
}

.address-box, .element-box {
	padding: 4px;
	text-align: center;
	width: 55px;
	font-size: 12px;
}

.element-box {
	color: lightslategrey;
}

.ct-color-red {
	color:red;
}

.small-box {
	border: 1px solid gray;
	padding: 1px;
	text-align: center;
	width: 55px;
	visibility: hidden;
}

.ui-effects-transfer {
	border: 1px solid green;
	 z-index: 9999999 !important;
}

.final-div {
	margin-top: 3%;
	padding: 10px 30px;
	border-radius: 20px;
	font-family: monospace;
}

.z-index9999999 {
	z-index: 9999999;
	background-color: white;
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
	marker-end: url("#arrowEnd");
	position: relative;
	stroke: gray;
	stroke-width: 2; 
}

.value-css {
	color: blue;
	font-family: monospace;
	border-color: gray;
}

.address-css {
	color: green;
	font-family: monospace;
}

.color-gray {
	color: gray;
}

.margin-top-5 {
	margin-top: 5%;
}

.ct-green-color {
	color: green;
}
.circle-css {
	border: 1px solid;
	border-radius: 50%;
	padding: 2px;
	position: relative;
	z-index: 9999999;
	background: white;
}
</style>

</head>
<body>

<div class="main-div col-xs-12">
	<div class="text-center heading-css" id="heading"><h3 class='label ct-demo-heading margin-top-2'><span>Why DMA?</span></h3></div>
	<div class="text-center margin-top-2" id="restartDiv"><a class="btn btn-warning opacity00" id="restart">Restart</a></div>
	<div class="col-xs-12">
		<div class="col-xs-10 col-xs-offset-1">
			<div class="col-xs-12 margin-top-7">
				<div class="col-xs-3 border" id="example">
<pre class="creamPreTab4 opacity00" id="preCode">
<span id="line1">int c = <span id="cInputValue">10</span>;</span>
<span id="line2">int *k;</span>
<span id="line3">k = &c;</span>
<span id="line4">*k = <span id="kInputValue">50</span>;</span>
</pre>
				</div>
				<div class="col-xs-7 col-xs-offset-1 border margin-top-2" id="memoryDiv">
					<div class="col-xs-12">
						<div class="col-xs-6 text-center">
							<div class="col-xs-12 opacity00" id="cBox" style="padding: 4%;">
								<div class="col-xs-5 Vertical-text-right">int c</div>
								<div class="col-xs-6">
									<div class="memory-box value-css" id="memoryBox1"><span class="opacity00" id="cValue">10</span></div>
									<div><span id="cBoxAddress" class="address-css">2048</span></div>
								</div>
							</div>
						</div>
						<div class="col-xs-6">
							<div class="col-xs-12 opacity00" id="kBox" style="padding: 4%;">
								<div class="col-xs-6 text-center">
									<div class=" memory-box" id="memoryBox2"><span class="opacity00 value-css" id="kValue">2048</span></div>
									<div class="address-css">2054</div>
								</div>
								<div class="col-xs-4 Vertical-text-left">int k</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-10 col-xs-offset-1">
			<div class="col-xs-12 margin-top-7">
				<div class="col-xs-3 border opacity00" id="exampleTwo">
<pre class="creamPreTab4" id="preCodeTwo">
<span id="secondExLine1">int a[5] = <span id="inputArray">{10,20,30}</span>;</span>
<span id="secondExLine2">int *p;</span>
<span id="secondExLine3">p = &a;</span>
<span id="secondExLine4" class="opacity00">int a[10];</span>
</pre>
				</div>
				<div class="col-xs-7 col-xs-offset-1 border opacity00" id="secondExDiv">
					<div class="col-xs-12">
						<div class="col-xs-5 margin-top-5">
							<div class="col-xs-12 opacity00" id="pBox" style="padding: 6px;">
								<div class="col-xs-5 Vertical-text-center">int p</div>
								<div class="col-xs-7 text-center">
									<div class="memory-box" id="memoryBox3" style="border: 1px solid gray;">
										<span class="opacity00 value-css" id="pValue" style="font-size: 13px;">1112</span>
									</div>
									<div style="font-size: 13px; margin-top: 3px;" class="address-css">1044</div>
								</div>
							</div>
						</div>
						<div class="col-xs-7 opacity00 margin-top-1" id="arrayDiv">
							<div class="col-xs-12">
							<div class="col-xs-2 Vertical-variable-text-center"><span id="variableA" style="padding: 6px;">int a</span></div>
							<div class="col-xs-8">
								<table align="center">
									<tr class="opacity00" id="elementId">
										<%for (int i = 1; i <= 5; i++) {%>
											<td class="element-box"><span id="element<%=i%>">a[<%=(i - 1)%>]</span></td>
										<%}%>
									</tr>
									<tr class="opacity00" id="smallBox">
										<td class="small-box"><span class="opacity00 value-css" id="valuesId1">10</span></td>
										<td class="small-box"><span class="opacity00 value-css" id="valuesId2">20</span></td>
										<td class="small-box"><span class="opacity00 value-css" id="valuesId3">30</span></td>
										<td class="small-box"><span class="opacity00 value-css" id="valuesId4">0</span></td>
										<td class="small-box"><span class="opacity00 value-css" id="valuesId5">0</span></td>
									</tr>
									<tr class="opacity00" id="addressId">
										<td class="address-box address-css"><span id="firstAddressId">1112</span></td>
										<td class="address-box address-css">1114</td>
										<td class="address-box address-css">1116</td>
										<td class="address-box address-css">1118</td>
										<td class="address-box address-css">1120</td>
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
		<div class="col-xs-8 col-xs-offset-2 final-div opacity00" id="finalDiv">
			<span id="finalLine1" class="opacity00">The problems we encountered are :</span>
			<ul>
				<li id="list1" class="opacity00">A <b class='ct-green-color'>variable's value</b> can be accessed or changed by another <b class='ct-green-color'>pointer variable</b> 
					and the actual variable has no knowledge about the change. </li>
				<li id="list2" class="opacity00">If an array is declared once with some size, it cannot be modified anywhere else in the program.The 
					 memory can be <b class='ct-green-color'>allocated only once</b> at compile time or run time.</li>
			</ul><br>
			<span id="finalLine2" class="opacity00"> The above problems can be solved by <span class='ct-green-color'><b>DMA</b> 
				(Dynamic memory allocation)</span> using the <span class='ct-green-color'>heap memory</span>.
			</span>
		</div>
	</div>
</div>
</body>
<script type="text/javascript">
$(document).ready(function() {
	dynamicMemoryAllocationReady();
});
</script>
</html>