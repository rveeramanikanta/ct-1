<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Binary Search</title>
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
<script src="/secure/lang/ds/js-min/bs.min.js"></script>

<style type="text/css">
.zIndex {
	position: relative;
	z-index: 10000001 !important;
}

span, div {
	position: relative;
}

.margin-top-20 {
	margin-top: 20px;
}

.padding0 {
	padding: 0;
}

.box-border {
	border: 1px solid gray;
	border-radius: 8px;
}

.creampretab4 {
	tab-size: 4;
	-moz-tab-size: 4;
	background-color: lavender !important;
	font-size: 10.8px;
	font-style: inherit;
	padding: 5px;
	overflow-y: auto;
	white-space: pre;
	word-spacing: -3px;
}

#outputDiv {
	padding: 0;
	z-index: 9999999;
}

.output-console-title-bar {
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
}

.output-console-body {
	border-bottom-left-radius: 6px;
	border-bottom-right-radius: 6px;
	height: 62px;
	padding: 10px;
}

[contenteditable=true] {
	outline: none;
	font-family: monospace;
}

.errMsg {
	color: red;
	font-family: monospace;
}

#arrName {
	font-size: 18px;
}

.table-border {
	border: 2px solid;
	padding: 5px;
	font-weight: bold;
}

td {
	width: 70px;
}

table {
	table-layout: fixed;
}

.ui-effects-transfer {
	border: 2px solid #003399;
	border-radius: 6px;
	position: relative;
	z-index: 9999999;
}


.cup-val {
	color: blue;
	font-size: 14px;
	font-weight: bold;
	position: relative;
	right: 3px;
	top: 29px;
}

.var-name {
	font-weight: bold;
}

.fa-coffee {
	color: #e1e1e1;
}

#flagDiv {
	font-weight: bold;
}

.margin-top-40 {
	margin-top: 40px;
}

#animationWhileLoop {
	-mob-tab-size: 4;
	font-size: 13px;
}

.background-color-yellow {
	background-color: yellow;
}

.display-inline-block {
	display: inline-block;
}

.introjs-tooltip {
	min-width: 250px;
}

.user-btn {
	background-color: green;
}

.ct-code-b-red {
	font-family: monospace;
	font-weight: bold;
	color: red;
}

#arrInit > div {
	display: inline-block;
}

.errorMsg {
	color: red;
	font-family: monospace;
	font-weight: bold;
}

.mid, .mid-arrow {
	color: red;
}

.low, .low-arrow {
	color: green;
}

.high, .high-arrow {
	color: orange;
}
</style>


<script type="text/javascript">
	$(document).ready(function() {
		introGuide();
	});
</script>
</head>
<body>
	<div class='text-center margin-top-20'>
		<h4 class='label ct-demo-heading' id='demoTitle'>Binary-Search</h4>
	</div>
	<div class="text-center margin-top-20 col-xs-12">
		<a class="btn btn-warning opacity00" id="restart">&nbsp;Restart</a>
	</div>
	<div class='col-xs-12 margin-top-20 padding0'>
		<div class='col-xs-6'>
			<pre class='box-border creampretab4' id='javaCode'><span id="preproceserDir"></span>
	<div id='arrInit' style="display: inline-block;">int arr[] = {<div contenteditable=true maxlength='1' id='val0'>10</div>, <div contenteditable=true maxlength='1' id='val1'>25</div>, <div contenteditable=true maxlength='1' id='val2'>80</div>, <div contenteditable=true maxlength='1' id='val3'>90</div>, <div contenteditable=true maxlength='1' id='val4'>26</div>, <div contenteditable=true maxlength='1' id='val5'>18</div>, <div contenteditable=true maxlength='1' id='val6'>60</div>, <div contenteditable=true maxlength='1' id='val7'>30</div>};</div>
	<span id='nValInit'>int len = 8;</span>
	<div id='searchElmtInit' style="display: inline-block;">int searchElement = <div id='searchElmt' contenteditable=true maxlength='1' style="display: inline-block;">60</div>;</div>

	<div id='binarySearchLogic' style="display: inline-block;"><span id='bubblesortLogic'>int temp, i, j;
	
for (i = 0; i < len - 1; i++) {
	for (j = 0; j < len - i - 1; j++) {
		if (arr[j] > arr[j + 1]) {
			temp = arr[j];
			arr[j] = arr[j + 1];
			arr[j + 1] = temp;
		}
	}
}</span>
	
<span id='varsInit'>int low = 0, high, mid, flag = 0;
high = len - 1;</span>
	
<span id='whileLoop'>while (low <= high) {
	mid = (low + high) / 2;
	if (searchElement == arr[mid]) {
		flag = 1;
		break;
	} else if (searchElement < arr[mid]) {
		high = mid - 1;
	} else {
		low = mid + 1;
	}
}</span></div>

	<div id='ifElseBlk' style="display: inline-block;">if (<span class='if-cndtn'>flag == 1</span>) {
	<span id='ifPrintfStmt'></span>
} else {
	<span id='elsePrintfStmt'></span>
}</div>
}</pre>
			<div id="outputDiv">
				<div class="output-console-title-bar">
					<span class="title">Output</span>
				</div><div class="output-console-body"><span id="output"></span>
				</div>
			</div>
		</div>
		<div class='col-xs-6' style="padding-left: 0;">
		<!-- <div id='animationDiv' class='box-border'> -->
			<div class="box-border col-xs-12 padding0" id="animationDiv" style="font-family: monospace;">
			<div class="col-xs-12 margin-top-20">
				<div class="display-inline-block opacity00" id="nValDiv" style="margin-left: 24px;">len = <span id="nVal">8</span></div>
				<div class="display-inline-block opacity00" id="searchElmtDiv" style="margin-left: 24px;">searchElement = <span id='searchVal'>9</span></div>
				<div class="display-inline-block opacity00" id="lowValDiv" style="margin-left: 24px;">low = <span id="lowVal">0</span></div>
				<div class="display-inline-block opacity00" id="highValDiv" style="margin-left: 24px;">high = <span id='highVal'>7</span></div>
				<div class="display-inline-block opacity00" id="midValDiv" style="margin-left: 24px;">mid <span class='opacity00'>=</span> <span id='midVal' class='opacity00'>3</span></div>
				<div class="display-inline-block opacity00" id="flagValDiv" style="margin-left: 24px;">flag = <span id='flagVal'>0</span></div>
			</div>
				<div class="col-xs-12 margin-top-40">
					<table align="center" class="text-center opacity00" id="arrTable">
						<tbody>
							<tr id='arrowsTr' class='hide' style="height: 80px;">
									<td></td>
									<td><div class='low opacity00'><span>low</span></div><i aria-hidden="true" class="fa fa-arrow-down low-arrow opacity00"></i></td>
									<td><i aria-hidden="true" class="fa fa-arrow-down opacity00"></i></td>
									<td><i aria-hidden="true" class="fa fa-arrow-down opacity00"></i></td>
									<td><i aria-hidden="true" class="fa fa-arrow-down opacity00"></i></td>
									<td><i aria-hidden="true" class="fa fa-arrow-down opacity00"></i></td>
									<td><i aria-hidden="true" class="fa fa-arrow-down opacity00"></i></td>
									<td><i aria-hidden="true" class="fa fa-arrow-down opacity00"></i></td>
									<td><div class='high opacity00'><span>high</span></div><i aria-hidden="true" class="fa fa-arrow-down high-arrow opacity00"></i></td>
								</tr>
								<tr>
									<td></td>
									<td id='index0'><span>0</span></td>
									<td id='index1'><span>1</span></td>
									<td id='index2'><span>2</span></td>
									<td id='index3'><span>3</span></td>
									<td id='index4'><span>4</span></td>
									<td id='index5'><span>5</span></td>
									<td id='index6'><span>6</span></td>
									<td id='index7'><span>7</span></td>
								</tr>
								<tr>
									<td id="arrName">arr :</td>
									<td class="table-border"><span>10</span></td>
									<td class="table-border"><span>30</span></td>
									<td class="table-border"><span>60</span></td>
									<td class="table-border"><span>80</span></td>
									<td class="table-border"><span>18</span></td>
									<td class="table-border"><span>25</span></td>
									<td class="table-border"><span>27</span></td>
									<td class="table-border"><span>30</span></td>
								</tr>
						</tbody>
						</table>
					</div>
					
					<div class='col-xs-12 margin-top-40'>
						<pre class='col-xs-offset-2 col-xs-8 creampretab4 opacity00' id='animationWhileLoop'>while (<span id='cndtn'>low <= high</span>) <span id="animationWhileBody">{
	<span id='midInit'>mid = (low + high) / 2;</span>
	if (<span id='ifCndtn'>searchElement == arr[mid]</span>) {
		<span id='flagInit'>flag = 1;</span>
		<span id='breakLine'>break;</span>
	} else if (<span id='elseIfCndtn2'>searchElement &lt; arr[mid]</span>) {
		<span id='highInit'>high = mid - 1;</span>
	} else {
		<span id='lowInit'>low = mid + 1;</span>
	}
}</span></pre>
					</div>
				</div>
			<!-- </div> -->
		</div>
		</div></body>
</html>
