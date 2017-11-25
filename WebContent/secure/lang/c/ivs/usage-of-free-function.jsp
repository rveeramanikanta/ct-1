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
<script src='/secure/lang/c/js-min/uoff.min.js'></script>
<title>Usage of Free() function</title>

<style type="text/css">

.info-div {
	background-color: rgb(243, 235, 235);
	border-radius: 10px;
	font-size: 14px;
	padding: 11px 12px;
	font-family: monospace;
}

.border {
	border: 1px solid;
	border-radius: 8px;
	padding: 8px;
}

.margin-top-1 {
	margin-top: 1%;
}

.margin-top-2 {
	margin-top: 2%;
}

.margin-top-4 {
	margin-top: 4%;
}

.introjs-tooltip {
	min-width: 280px;
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
	font-family: monospace;
}

.memory-box {
	height: 22px;
	border: 1px solid;
	text-align: center;
	padding: 1px;
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

.small-box {
	border: 1px solid gray;
	padding: 1px;
	text-align: center;
	visibility: ;
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

.ct-color-maroon {
	color: maroon;
}

.ct-color-springgreen {
	color: springgreen;
}

.ct-color-teal {
	color: teal;
}

.ct-color-lime {
	color: lime;
	font-weight: bold;
}

.box {
	border: 1px solid;
	height: 20px;
	width: 20px;
}

.z-index9999999 {
	z-index: 9999999;
	background-color: white;
}

div, span {
	position: relative;
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

.output-console-body {
	background-color: black;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #f0f0f0;
	font-family: monospace;
	font-size: 11px;
	margin-bottom: 14px;
	height: 80px;
	overflow: auto;
	padding: 10px;
	white-space: nowrap;
}

.user-btn {
	background-color: green;
}

.ct-code-b-red {
	font-family: monospace;
	font-weight: bold;
	color: rgb(252, 66, 66);
}

.console-input-line {
	font-weight: normal;
	outline: medium none;
}

.console-input-line:empty::before {
	color: lightblue !important;
	content: attr(placeholder);
}

.animated-border {
	border-color: rgba(255, 255, 255, 0);
    animation: 2s ease 0s normal none 1 running animated-border;
}

@keyframes animated-border {  
  100% { border-color: gray; }
}

.blinking {
	animation-name: blink;
	animation-duration: 1s;
	animation-iteration-count: 2;
}

@keyframes blink {
	50% {
		background:  red;
	}
}

.circle-css {
	border: 1px solid;
	border-radius: 50%;
	padding: 2px;
	position: relative;
	z-index: 9999999;
}

.output-value-circle {
	background: white;
	color: black;
}

.font-size {
	font-size: 13px;
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
	<div class="text-center margin-top-1"><h3 class='label ct-demo-heading' id="heading"><span>Usage of free()</span></h3></div>
	<div class="col-xs-8 col-xs-offset-2 margin-top-2 info-div" id="infoDiv">
		<ul>
			<li id="list1" class="opacity00">The memory allocated by using <span class='ct-code-b-green'>malloc()</span>, 
				<span class='ct-code-b-green'>calloc()</span>, <span class='ct-code-b-green'>realloc()</span> functions can be freed by calling 
				 the <span class='ct-code-b-green'>free()</span> function.</li>
			<li id="list2" class="opacity00">The <span class='ct-code-b-green'>free()</span> function releases the memory pointed by the 
				pointer variable.</li>
			<li id="list3" class="opacity00">After freeing the memory,a <b>NULL</b> value is stored in the pointer.</li></ul>
			<span id="list4" class="opacity00"> &emsp;  &emsp; Syntax : <span class="ct-code-b-green">free(pointerVariable);</span>
				<span id='nextButton' class='opacity00'><a class='introjs-button user-btn'>Next &#8594;</a></span></span>
	</div>
	<div class="col-xs-12 margin-top-2">
		<div class="col-xs-11">
			<div class="col-xs-12 margin-top-7"  id="firstDivExample">
				<div class="col-xs-4 border opacity00" id="exampleOne">
<pre class="creamPreTab4 opacity00" id="preCode">
<span id="firstExLine1">int *p;</span>
<span id="firstExLine2">P = (int*)<span class='ct-code-b-green'>malloc(5*sizeof(int))</span>;</span>
<span id="firstExLine3" class="ct-code-b-green">free(p);</span>
</pre>
				</div>
				<div class="col-xs-7 col-xs-offset-1" id="totalfirstExDiv">
					<div class="col-xs-12 border opacity00" id="firstExDiv">
						<div class="col-xs-5 text-center">
							<div class="col-xs-12 margin-top-4 opacity00" id="pBox">
								<div class="col-xs-4 Vertical-text-center">p</div>
								<div class="col-xs-6">
									<div style="color: lightslategrey;">2 bytes</div>
									<div class="memory-box" id="memoryBox1"><span class="opacity00 font-size value-css" id="pValue">1924</span></div>
									<div><span id="pBoxAddress" class="address-css">1258</span></div>
								</div>
							</div>
						</div>
						<div class="col-xs-7" id="arrayDiv">
							<div class="col-xs-12">
								<div class="col-xs-1 Vertical-variable-text-center"></div>
								<div class="col-xs-10 opacity00" id="firstMemoryAllocation">
									<table align="center">
										<tr id="elementId">
											<%for (int i = 1; i <= 5; i++) {%>
												<td class="element-box"><span id="element<%=i%>"><%=(i - 1)%></span></td>
											<%}%>
										</tr>
										<tr id="trBox1">
											<%for (int i = 1; i <= 4; i++) {%>
												<td class="small-box" id="smallBox<%=i%>"><span class="opacity00 value-css" id="valuesId<%=i%>">0</span>
												</td>
											<%}%>
											<td class="small-box" id="smallBox5"><span class="opacity00 value-css" id="valuesId5">0</span></td>
										</tr>
										<tr id="addressId">
											<td class="address-box address-css" id="addressBox1"><span id="firstAddressId">1924</span></td>
											<td class="address-box address-css" id="addressBox2">1926</td>
											<td class="address-box address-css" id="addressBox3">1928</td>
											<td class="address-box address-css" id="addressBox4">1930</td>
											<td class="address-box address-css" id="addressBox5">1932</td>
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
		<div class="col-xs-4">
			<div class="col-xs-12 margin-top-4 border opacity00"  id="secondDivExample">
<pre class="creamPreTab4 opacity00" id="preCodeTwo">
void main() {
	<span id="codeLine1">int *p,*q;</span>
	<span id="codeLine2">p = (int*)<span class='ct-code-b-green'>malloc(sizeof(int))</span>;</span>
	<span id="codeLine3">q = (int*)<span class='ct-code-b-green'>malloc(sizeof(int))</span>;</span>
	<span id="codeLine4">printf("Enter two integer values : \n");</span>
	<span id="codeLine5">scanf("%d %d", p, q);</span>
	<span id="codeLine6">printf("Sum is : %d", <span id="sumCondition">*p + *q</span>);</span>
	<span id="codeLine7" class="ct-code-b-green">free(p);</span>
	<span id="codeLine8" class="ct-code-b-green">free(q);</span>
}
</pre>
				</div>
			</div>
			<div class="col-xs-4 border opacity00" id="secondExMemory" style="margin-top: 3%; margin-left: 3%;">
				<div class="col-xs-12" id="secondEx1">
					<div class="col-xs-6 text-center">
						<div class="col-xs-12 margin-top-4 opacity00" id="pBox2">
							<div class="col-xs-4 Vertical-text-center">p</div>
							<div class="col-xs-8">
								<div style="color: lightslategrey;">2 bytes</div>
								<div class="memory-box" id="memoryBox2">
									<span class="opacity00 font-size value-css" id="pSecondExValue">1038</span>
								</div>
								<div><span id="pBoxAddress2" class="address-css">2058</span></div>
							</div>
						</div>
					</div>
					<div class="col-xs-6 text-center">
						<div class="col-xs-12 margin-top-4 opacity00" id="heapMemoryBox1">
							<div class="col-xs-4 Vertical-text-center"></div>
							<div class="col-xs-8" id="dynamicDiv1">
								<div class="" style="color: lightslategrey;">2 bytes</div>
								<div class="memory-box" id="memoryBox3"><span class="heap-value font-size value-css" id="pHeapValue"></span></div>
								<div><span id="pHeapAddress" class="address-css">1038</span></div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xs-12 margin-top-2" id="secondEx2">
					<div class="col-xs-6 text-center">
						<div class="col-xs-12 margin-top-4 opacity00" id="qBox">
							<div class="col-xs-4 Vertical-text-center">q</div>
							<div class="col-xs-8">
								<div style="color: lightslategrey;">2 bytes</div>
								<div class="memory-box" id="memoryBox4"><span class="opacity00 font-size value-css" id="qValue">1992</span></div>
								<div><span id="qBoxAddress" class="address-css">2085</span></div>
							</div>
						</div>
					</div>
					<div class="col-xs-6 text-center">
						<div class="col-xs-12 margin-top-4 opacity00" id="heapMemoryBox2">
							<div class="col-xs-4 Vertical-text-center"></div>
							<div class="col-xs-8" id="dynamicDiv2">
								<div class="" style="color: lightslategrey;">2 bytes</div>
								<div class="memory-box" id="memoryBox5"><span class="heap-value font-size value-css" id="qHeapValue"></span></div>
								<div><span id="qHeapAddress" class="address-css">1992</span></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xs-3 col-xs-offset-1" style="margin-left: 4%; margin-top: 4%;">
				<div class="col-xs-12">
					<div id="consoleId" class="center opacity00">
						<div class="output-console-title-bar"><span class="title"><b>Console</b></span></div>
						<div class="output-console-body" id="consoleBodyDiv">
							<div class='visibility-hidden' id="printText1">Enter two integer values :</div>
							<span class="console-input-line" id="consoleInputLine"></span>
							<div class='visibility-hidden' id="printText2">Sum is : <span id="result" class="ct-code-b-yellow"></span></div>
						</div>
					</div>
				</div>
			</div>
	</div>
	<div class="col-xs-12">
		<div class="text-center margin-top-2" id="restartDiv"><a class="btn btn-warning opacity00" id="restart">Restart</a></div>
	</div>
</div>
</body>
<script type="text/javascript">
$(document).ready(function() {
	usageOfFreeFunctionReady();
});
</script>
</html>
