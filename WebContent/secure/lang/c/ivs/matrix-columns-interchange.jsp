<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css" >
<link rel="stylesheet" href="/css/introjs-ct.css" >
<link rel="stylesheet" href="/css/animate.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/secure/lang/c/js-min/mci.min.js"></script>

<title>matrix row inter change</title>

<style type="text/css">
.introjs-tooltip {
	min-width: 350px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.introjs-duplicate-nextbutton {
	background-color: green;
	margin: 0px !important;
}

.box-border {
	border-radius: 12px;
	border: 2px solid gray;
}

.buttons-div {
	margin-top: 20px;
	margin-bottom: 5px;
	text-align: center;
}

div, span {
	position: relative;
}

.creamPreTab, .creamPreTab5 {
	tab-size: 3;
	margin: 2px;
	padding: 12px;
	font-size: 12px;
	-moz-tab-size: 2;
	white-space: pre;
	border-radius: 8px;
	font-family: monospace;
	background-color: #fffae6;
}

.creamPreTab4 {
	tab-size: 5;
	font-size: 13px;
}

.output-console-body {
	background-color: black;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #f0f0f0;
	font-family: monospace;
	font-size: 14px;
	height: 200px;
	overflow:unset;
	padding: 10px;
	white-space: nowrap;
}

#consoleBodyDiv1 {
	overflow-y: auto;
}

.ui-effects-transfer {
	border: 1px solid blue;
	z-index: 99999999 !important;
}

.z-index1000000 {
	position: relative;
	background-color: white;
	z-index: 1000000 !important;
}

#arrDec > div {
	display: inline-block;
}

th {
	padding: 4px 6px;
	border: 2px solid gray;
	min-width: 65px !important;
	min-height: 30px !important;
	text-align: center !important;
}

[contenteditable="true"] {
	outline: medium none;
}

.padding00 {
	padding: 1px;
}

.margin-top {
	margin-top: 20px;
}

.position {
	display: inline-block;
	position: relative;
}

.red {
	font-weight: bold;
	border-color: red;
}
.green {
	font-weight: bold;
	border-color: green;
}

.blue {
	font-weight: bold;
	border-color: #6699ff;
}

.red-color {
	color: red;
}
.green-color {
	color: green;
}

.blue-color {
	color: #6699ff;
}

.outputDisplay {
	color: white;
	font-weight: bold;
	font-family: monospace;
}

.eleAtInnerIdxDiv {
	margin-top: 12px;
}

.eleAtInnerIdx {
	padding: 5px;
}

#explanationDiv1 {
    padding: 2px;
    background-color: #fffae6;
    font-family: monospace;
    font-size: 13px;
}

.popover-content {
	font-size: 14px;
}

.popover {
	width: 200px;
	font-size: 15px !important;
}

.input {
    background: black;
    border: medium none;
}

.input-char {
	outline:none;
    background-color: #000;
    border-width: 0;
    color: #0f0;
    width: 50px;
}

.input-char:empty::before {
	content: attr(placeholder);
	color: gray;
}

.input-all {
  width: 30%;
  border-width: 0px 0 0 0;
  background-color: #000;
  color: #0f0;
}

.ct-code-b-red {
	color: red;
	font-family: monospace;
	font-weight: bold;
}

.true {
	background: green none repeat scroll 0 0;
    border-radius: 3px;
    color: white;
    font-weight: bold;
}

.false {
	background: red none repeat scroll 0 0;
    border-radius: 3px;
    color: white;
    font-weight: bold;
}

</style>
</head>
<body>

<div class="col-xs-12 padding00">
	<div class="ct-box-main">
		<div class="text-center">
			<h1 class="label ct-demo-heading text-center" id="headdingSection">Matrix Column Interchange</h1>
		</div> 
	</div>
	<div class='buttons-div'>
		<button type="button" class="btn btn-warning opacity00" id="restartBtn">Restart</button>
	</div>
	<div class="col-xs-12 padding00">
		<div class="col-xs-12 opacity00" id="bodyContaint">
			<div class="col-xs-6 padding00">
			<pre class="creamPreTab" id="matrixRowInterChange">
#include &lt;stdio.h&gt;
void main() {
	<span id="arrDec">int arr[3][3], row, col, col1, col2, temp = 0;</span>
	<span id="forLoop1">for(row = 0; row < 3; row++) {
		for(col = 0; col < 3; col++) {
	    	printf("Enter the value a[%d][%d]: ", row, col);
	    	scanf("%d", &arr[row][col]);
		}
	}</span>
	<span id="printf1">printf("\nBefore interchange :\n");</span>
	<span id="forLoop2">for(row = 0; row < 3; row++) {
 		for(col = 0; col < 3; col++)
  			printf ("%d\t", arr[row][col]);
  		printf("\n");
 	}</span> 
	<span id="printf2">printf("Enter the numbers of two columns to be exchanged\n");</span>
	<span id="scanf2">scanf("%d %d", &col1, &col2);</span>
	<span id="forLoop3">if(col1 >= 0 && col2 >= 0 && col1 < 3 && col2 < 3) {
		for (col = 0; col < 3; col++) {
			temp = arr[col][col1];
			arr[col][col1] = arr[col][col2];
			arr[col][col2] = temp;
		}
	} else {
 		printf("\nNot possible\n");
	}</span>
	<span id="printf3">printf("The matix after interchanging the two columns(in the original matrix\n");</span>
	<span id="forLoop4">for(row = 0; row < 3; row++) {
		for(col = 0; col < 3; col++) {
			printf("%d\t", arr[row][col]);
		}</span>
		<span id="printf4">printf("\n");</span>
	}
}</pre>
			</div>
			<div class="col-xs-6 padding00">
				<div class="col-xs-12 box-border padding00" id="animationDiv">
					<div class="col-xs-12 padding00">
						<div class="col-xs-12">
							<div  id="outputDiv" class="center margin-top">
								<div class="output-console-title-bar">
									<span class="title"><b>Console</b></span>
								</div>
								<div class="output-console-body" id="consoleBodyDiv1"></div>
							</div>
				 		</div>
					
						<div class="col-xs-12 margin-top" id="explanationDiv">
							<div class="col-xs-12 text-center opacity00" id="eleAtInnerIdx">
								<div class="col-xs-12 text-center"><div id="eleAtInnerText">temp</div></div>
								<div class="col-xs-12 text-center eleAtInnerIdxDiv">
									<span class="box-border eleAtInnerIdx"><span id="tempVal">0</span></span>
								</div>
							</div>
							<div class="col-xs-12">
								<div class="arrTable margin-top">
									<table style="width:100%" class="margin-top opacity00" id="arrElements">
						  				<tbody>
						  					<tr id="outerArrow"></tr>
						  					<tr id="innerArrow"></tr>
							  				<tr border="2px" id="values">
									    		<th class="text-center blue"><span class="opacity00 sortEle00" id="sortEle0">21</span></th>
									   			<th class="text-center blue"><span class="opacity00 sortEle01" id="sortEle1">58</span></th>
									    		<th class="text-center blue"><span class="opacity00 sortEle02" id="sortEle2">41</span></th>
									    		<th class="text-center red"><span class="opacity00 sortEle10"  id="sortEle3">32</span></th>
									    		<th class="text-center red"><span class="opacity00 sortEle11"  id="sortEle4">9</span></th>
									    		<th class="text-center red"><span class="opacity00 sortEle12" id="sortEle5">18</span></th>
									  			<th class="text-center green"><span class="opacity00 sortEle20" id="sortEle6">94</span></th>
									    		<th class="text-center green"><span class="opacity00 sortEle21" id="sortEle7">16</span></th>
									    		<th class="text-center green"><span class="opacity00 sortEle22" id="sortEle8">16</span></th>
									 		</tr>
									 		<tr id="arrayIndices"></tr>
									 		<tr id="countRows" class="text-center">
												<td colspan="3"><div class="text-center arrayRow">first row</div></td>
												<td colspan="3"><div class="text-center arrayRow">second row</div></td>
												<td colspan="3"><div class="text-center arrayRow">third row</div></td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<div class="col-xs-12 margin-top padding00">
								<div class="col-xs-12 padding00">
									<pre class="creamPreTab5 opacity00" id="logicOfMatrixInterChange">
		<span id="ifCondition">if(<span class="position" id="firstCon"><span class="position" id="row1">col1</span> &gt;= 0</span> && <span class="position" id="secondCon"><span class="position" id="row2">col2</span> &gt;= 0</span> && <span class="position" id="thirdCon"><span class="position" id="row3">col1</span> &lt; 3</span> && <span class="position" id="fourthCon"><span class="position" id="row4">col2</span> &lt; 3</span>) {</span>&emsp;<span id="forTrueOrFalse"></span>
			<span id="forLoop">for (col = <span class="position" id="rowIni">0</span>; <span id="forRowCon"><span class="position" id="rowCon">col</span> < 3</span>; <span id="rowInc">col++</span>) {</span>&emsp;<span id="trueOrFalse"></span>
				<span id="tempValSpan">temp = arr[<span class="position" id="arrRow1">col</span>][<span class="position" id="arrRowIdx1">col1</span>];</span>
				<span id="row1MinVal">arr[<span class="position" id="arrRow11">col</span>][<span class="position" id="arrRowIdx3">col1</span>] = arr[<span class="position" id="arrRow2">col</span>][<span class="position" id="arrRowIdx2">col2</span>];</span>
				<span id="row2MinVal">arr[<span class="position" id="tRow2">col</span>][<span class="position" id="arrRowIdx4">col2</span>] = <span class="position" id="temp">temp</span>;</span>
			<span id="closeForLoop">}</span>
		<span id="elsePart">} else {</span>
	 		<span id="printf">printf("\nNot possible\n");</span>
		<span id="closeElse">}</span>
									</pre>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<script type="text/javascript">
	$(document).ready(function() {
		introFunction();
		appendArrayIndices();
	});

</script>

</body>
</html>
