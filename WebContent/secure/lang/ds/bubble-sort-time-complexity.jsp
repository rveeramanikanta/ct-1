<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>

<script type="text/javascript" src="/secure/lang/ds/js-min/bustc.min.js"></script>

<title>Bubble sort time complexity</title>
<style type="text/css">

.margin-top-1 {
	margin-top: 1%;
}

.margin-top-2 {
	margin-top: 2%;
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
	overflow: initial;
}

td {
	padding: 3px 6px;
	border: 2px solid gray;
	min-width: 65px !important;
	min-height: 30px !important;
	/* text-align: center !important; */
}

#tableCode {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    max-width: 650px;
}

/* #tableCode > tbody > tr > td {
    padding: 2px 8px;
} */

.td-code-text {
	font-family: monospace;
	border : none;
}

.td-border {
	border : none;
	padding: 0;
}

.ifConditionFontSize, #outerArrow, #innerArrow {
	font-size: 12px;
}

.margin-top {
	margin-top: 20px;
}

div, span {
	position: relative;
}

#arrDec > div {
	display: inline-block;
}

[contenteditable="true"] {
	outline: medium none;
}

.user-btn {
	background: green;
}

.ct-code-b-red {
	font-weight: bold;
	font-family: monospace;
	color: rgb(252, 66, 66);
}

.arrTable {
	border: 1px solid;
	border-radius: 9px;
	background: #fefcd4;
}

.popover {
	z-index: 9999999;
	width: 400px;
}

.popover-content {
    background-color: #003399;
    color: white;
    min-height: 30px;
    letter-spacing: 1px;
}

.arrow {
	top: 20px !important;
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

.ui-effects-transfer {
	border: 1px solid #0bf30b;
	 z-index: 9999999 !important;
}

.for-loop-li-css {
	color: #00ff8d;
	font-weight: bold;
	font-size: 14px;
}

.ct-code-teal {
	color: #54f309;
	font-weight: bold;
} 

.ct-color-boolean {
	color: #4ce8fb;
}

#finalDiv {
	border: 1px solid;
	border-radius: 6px;
	padding: 4px;
	margin-left: 29%;
}

.color-green {
	color: green;
	font-weight: bold;
}

.color-maroon {
	color: maroon;
	font-weight: bold;
}

.color-deeppink {
	color: deeppink;
}

.inner-loop-color {
	font-weight: bold;
	color: green !important;
	font-family: monospace;
}

.outer-loop-color {
	font-weight: bold;
	color: #38e5d8 !important;
	font-family: monospace; 
}

.index-div {
	border: 1px solid;
	margin-top: 15px;
	padding: 6px;
	border-radius: 8px;
	background: papayawhip;
	font-size: 13px;
}

.ct-blue {
	color: blue;
}

a {
	color: #09ff4d;
	text-decoration: none;
}

.z-index {
	z-index: 9999999;
	position: relative;
	background-color: white;
}

.box-border {
	border-radius: 12px;
	border: 2px solid gray;
}

.eleAtInnerIdx {
	padding: 5px;
}

.eleAtInnerIdxDiv {
	margin-top: 12px;
}

.popover-btn-css {
	padding: 0;
}

</style>
</head>
<body>
<div class="col-xs-12">
	<div class="text-center margin-top-1">
		<h3 class='label ct-demo-heading' id="heading">
			<span>Time Complexity of Bubble Sort</span>
		</h3>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-8 col-xs-offset-2 index-div" id="indexDiv">
			<ul>
				<li id="listLine1" class="opacity00"><span class="ct-blue">Bubble sort</span> is an internal sorting technique in which <b>adjacent 
				elements</b> are compared and exchanged if necessary.</li>
				<li id="listLine2" class="opacity00">The working procedure for <span class="ct-blue">Bubble sort</span> is as follows:</li>
				<ol>
					<li id="listLine3" class="opacity00">Let us consider an array of <b>n</b> elements (i.e., <b>a[n]</b>) to be sorted.</li>
					<li id="listLine4" class="opacity00">Compare the first two elements in the array i.e., <b>a[0]</b> and <b>a[1]</b>, if <b>a[1]</b> is less than <b>a[0]</b> 
						then interchange the two values.</li>
					<li id="listLine5" class="opacity00">Next compare <b>a[1]</b> and <b>a[2]</b>, if <b>a[2]</b> is less than <b>a[1]</b> then interchange the values.</li>
					<li id="listLine6" class="opacity00">Continue this process till the last two elements are <b>compared</b> and <b>interchanged</b>.</li>
					<li id="listLine7" class="opacity00">Repeat the above steps for <b>n - 1</b> passes.</li>
				</ol>
			</ul>
		</div>
	</div>
	<div class="col-xs-12 margin-top-2">
		<div class="col-xs-6 hide" id="divTable" style="background: antiquewhite;">
			<table align="center" id="tableCode">
				<tbody>
					<tr>
						<th class="code-heading-css" style="text-align: center;">Code</th>
						<th class="units-heading-css">Units</th>
					</tr>
					<tr>
						<td class="td-code-text" id="tdCodeLine0">
							<span class="" id="codeLine0">
							<span class="color-green">void</span> bubbleSort(<span class="color-green">int</span> a[], <span class="color-green">int</span> n) {</span>
						</td>
						<td class="td-border" id="unitLine0">
							<span id="unitLineText0" style="padding: 1px 10px;"></span>
						</td>
					</tr>
					<tr>
						<td class="td-code-text" id="">&emsp;&emsp;
							<span class="color-green">int</span> i, j, temp;
						</td>
						<td class="td-border" id="">
							<span id="" style="padding: 1px 10px;"></span>
						</td>
					</tr>
					<tr>
						<td class="td-code-text" id="tdCodeLine1">&emsp;&emsp;
							<span class="" id="codeLine1">
							<span class="color-maroon">for</span> (<span class="color-green">int</span> <span id="initilizationId1">i <span id="equalOperator1">=</span> <span class="color-deeppink">0</span>;</span> 
							<span id="conditionId1">i <span id="lessOperator1"><</span> n - <span class="color-deeppink">1</span>;</span> 
							<span id="incrementId1">i<span id="incrementOperator1">++</span></span>) {</span>
						</td>
						<td class="td-border" id="unitLine1">
							<span id="unitLineText1" style="padding: 1px 10px;">
							<span class="opacity00" id="firstUnitValue1">1</span> <span id="plusOp1" class="opacity00">+</span> 
							<span class="opacity00" id="firstUnitValue2">(n - 1) + 1</span>
							 <span id="plusOp2" class="opacity00">+</span> <span class="opacity00" id="firstUnitValue3">(n - 1)</span></span>
						</td>
					</tr>
					<tr>
						<td class="td-code-text">&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="" id="codeLine2">
							<span class="color-maroon">for</span> (<span class="color-green">int</span> <span id="initilizationId2">j <span id="equalOperator2">=</span> <span class="color-deeppink">0</span>;</span> 
							<span id="conditionId2">j <span id="lessOperator2"><</span> n - i - <span class="color-deeppink">1</span>;</span> 
							<span id="incrementId2">j<span id="incrementOperator2">++</span></span>) {</span>
						</td>
						<td class="td-border" id="unitLine2">
								<span id="unitLineText2" style="padding: 1px 10px;">
								<span id="nMultiplyId1" class="opacity00">n * (</span>
								<span class="opacity00" id="secondUnitValue1">1</span> <span id="plusOp3" class="opacity00">+</span> 
								<span class="opacity00" id="secondUnitValue2">(n - i - 1) + 1</span>
								 <span id="plusOp4" class="opacity00">+</span> <span class="opacity00" id="secondUnitValue3">n - i - 1</span>
								 <span id="nMultiplyId2" class="opacity00">)</span>
							 </span>
						</td>
					</tr>
					<tr>
						<td class="td-code-text">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span id="ifSpan">	
								<span class="" id="codeLine3span1"><span class="color-maroon">if</span> (a[j] > a[j+<span class="color-deeppink">1</span>]) {</span><br>
								&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
								<span class="" id="codeLine3span2">temp = a[j];</span><br>
								&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
								<span class="" id="codeLine3span3" style="padding: 0px 34px 0px 0px;">a[j] = a[j+<span class="color-deeppink">1</span>];</span><br>
								&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
								<span class="" id="codeLine3span4">a[j+<span class="color-deeppink">1</span>] = temp;</span><br>
								&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
								<span class="" id="codeLine3span5">}</span>
							</span>
						</td>
						<td class="td-border" id="unitLine3">
							<span class="opacity00" id="unitLineText3" style="padding: 2px 12px;">n - i - 1</span>
						</td>
					</tr>
					<!-- <tr>
						<td class="td-code-text">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="" id="codeLine2">}</span>
						</td>
						<td class="opacity00 td-border" id="unitLine2">
							<span id="unitLineText2" style="padding: 2px 42px;">1</span>
						</td>
					</tr> -->
					<tr>
						<td class="td-code-text">&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="" id="codeLine4">}</span>
						</td>
						<td class="opacity00 td-border" id="unitLine4">
							<span id="unitLineText4" style="padding: 2px 42px;">1</span>
						</td>
					</tr>
					<tr>
						<td class="td-code-text">&emsp;&emsp;&emsp;
							<span class="" id="codeLine5">}</span>
						</td>
						<td class="opacity00 td-border" id="unitLine5">
							<span id="unitLineText5" style="padding: 2px 42px;">1</span>
						</td>
					</tr>
					<tr>
						<td class="td-code-text">
							<span class="" id="codeLine7">}</span>
						</td>
						<td class="opacity00 td-border" id="unitLine7">
							<span id="unitLineText7" style="padding: 2px 42px;">1</span>
						</td>
					</tr>
					<tr>
						<td class="td-code-text" style="text-align: right;">
							<span class="opacity00" id="codeLine6"><b>Total = </b></span>
						</td>
						<td class="td-border" id="unitLine6">
							<span id="unitLineText6" class="opacity00" style="padding: 2px 42px;">2<span id="nValue1">n<sup>2</sup></span> + 3n - 2ni - i + 1</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="col-xs-6" id="preCodeDiv">
			<pre class="creamPreTab4 opacity00" id="preCode1">
<span id="preCodeLine1"><span class="color-green">void</span> bubbleSort(<span class="color-green">int</span> a[], <span class="color-green">int</span> n) {</span>
	<span id="preCodeLine2"><span class="color-green">int</span> i, j, temp;</span>
	<span id="preCodeLine3"><span class="color-maroon">for</span> (i = <span class="color-deeppink">0</span>; i < n - <span class="color-deeppink">1</span>; i++) {</span>
		<span id="preCodeLine4"><span class="color-maroon">for</span> (j = <span class="color-deeppink">0</span>; j < n - i - <span class="color-deeppink">1</span>; j++) {</span>
			<span id="preCodeLine5"><span class="color-maroon">if</span> (a[j] > a[j+<span class="color-deeppink">1</span>]) {</span>
				temp = a[j];
				a[j] = a[j+<span class="color-deeppink">1</span>];
				a[j+<span class="color-deeppink">1</span>] = temp;
			}
		}
	}
}
			</pre>
		</div>
		<div class="col-xs-5">
			<div class="arrTable margin-top col-xs-12 opacity00" id="arrTable">
				<div class="col-xs-12 text-center"><div id="eleAtInnerText" class="opacity00">temp</div></div>
				<div class="col-xs-12 text-center eleAtInnerIdxDiv"><span class="box-border eleAtInnerIdx opacity00">
							<span id="eleAtInnerIdxVal">0</span>
						</span></div>
				<div class="col-xs-12" style="margin-top: 3%;">
					<table style="width:100%" class="opacity00" id="arrElements">
			  			<tbody>
			  				<tr id="outerArrow"></tr>
			  				<tr id="innerArrow"></tr>
				  			<tr border="2px" id="values">
						    	<td class="text-center"><span class="element" arrayvalue="0" id="sortEle0">56</span></td>
						   		<td class="text-center"><span class="element" arrayvalue="1" id="sortEle1">45</span></td>
						    	<td class="text-center"><span class="element" arrayvalue="2" id="sortEle2">5</span></td>
						    	<td class="text-center"><span class="element" arrayvalue="3" id="sortEle3">13</span></td>
						    	<td class="text-center"><span class="element" arrayvalue="4" id="sortEle4">12</span></td>
						    	<!-- <td class="text-center"><span class="element" arrayvalue="5" id="sortEle5">39</span></td> -->
						  		<!-- <td class="text-center"><span class="element" arrayvalue="6" id="sortEle6">33</span></td>
						    	<td class="text-center"><span class="element" arrayvalue="7" id="sortEle7">6</span></td> -->
						 	</tr>
						 	<tr id="arrayIndices"></tr>
						</tbody>
					</table>
				</div>
				<div class="col-xs-12" style="margin-top: 35px;">
					<span>
						<span id="arrDec" style="font-family: monospace;">
							int a[] = {<div class="arr-ele" id="number0" arrayvalue="0">56</div>,<div class="arr-ele" id="number1" arrayvalue="1">45</div>,<div class="arr-ele" id="number2" arrayvalue="2">5</div>,<div class="arr-ele" id="number3" arrayvalue="3">13</div>,<div class="arr-ele" id="number4" arrayvalue="4">12</div>};
						</span>
					</span>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-12 margin-top-2">
		<div id="finalDiv" class="col-xs-5 col-xs-offset-5 text-center opacity00">
			<span id="finalDivText" style="font-family: monospace;">The time complexity of bubble sort : Big O(<span class="opacity00" id="nValue2">n<sup>2</sup></span>)</span>
		</div>
	</div>
	<div class="button col-xs-12 text-center margin-top-1" id="button">
		<button class="btn btn-warning glyphicon glyphicon-refresh opacity00" type="button" id='restart' style='margin-top:4px'>Restart</button>
	</div>
</div>
</body>
<script type="text/javascript">
$(document).ready(function() {
	bubbleSortTimeComplexityFunction();
});

</script>
</html>