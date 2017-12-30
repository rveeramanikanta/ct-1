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

<script type="text/javascript" src="/secure/lang/ds/js-min/lstc.min.js"></script>

<title>linear search time complexity</title>

<style type="text/css">
#infoDiv {
	background-color: rgb(243, 235, 235);
	border-radius: 10px;
	margin-left: 20.5%;
	margin-top: 2%;
}

.user-btn {
	background: green;
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

table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    /* max-width: 800px; */
}

td, th {
   /*  border: 1px solid #dddddd; */
    /* text-align: left; */
	padding: 2px 8px;
}

.td-code-text {
	/* font-family: monospace;
	font-weight: bold; */
}

th, td:nth-child(1), td:nth-child(3) {
	text-align: center;
}

td:nth-child(2) {
	font-family: monospace;
}

td:nth-child(4), td:nth-child(5) {
	text-align: center;
}

.popover {
	z-index: 9999999;
	width: 260px;
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

.step-color-css {
	color: #eac807;
	font-size: 14px;
	font-weight: bold;
}

.blinking {
	animation-name: blink;
	animation-duration: 0.4s;
	animation-iteration-count: 3;
}

@keyframes blink {
	50% {
		background: #da5805;
	}
}

.ui-effects-transfer {
	border: 1px solid #0bf30b;
	 z-index: 9999999 !important;
}

.ct-color-green {
	color: green;
	font-weight: bold;
}

.steps-heading-css {
	text-decoration: underline;
	color: #820202;
}

.code-heading-css {
	text-decoration: underline;
	color: #026302;
	width: 50%;
}

.units-heading-css {
	text-decoration: underline;
	color: darkmagenta;
}

.for-loop-li-css {
	color: #00ff8d;
	font-weight: bold;
	font-size: 14px;
}

.z-index9999999 {
	z-index: 9999999;
	background: white;
}

#finalDiv {
	border: 1px solid;
	border-radius: 6px;
	padding: 4px;
	margin-left: 29%;
}

.ct-code-teal {
	color: #54f309;
	font-weight: bold;
} 

.ct-color-boolean {
	color: #4ce8fb;
}

.ct-color-yellow {
	color: yellow;
}

.position {
	position: relative;
}

.popover-btn-css {
	text-align: right;
	padding: 0;
}

.display {
	display: inline-block;
}

span {
	position: relative;
	/* display: inline-block; */
}

.margin-left82 {
	margin-left: 82px;
}

.color-darkgreen {
	color: darkgreen;
	opacity: 0;
}

.heading-css {
	color: blue;
	text-decoration: underline;
	opacity: 0;
}

.explanation-div {
	border: 1px solid #3a15f7;
	border-radius: 10px;
	font-family: monospace;
	border: 1px solid;
}

.user-back-btn {
	background: #5bc0de !important;
}

th {
	font-weight: normal;
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

</style>
</head>
<body>

</head>
<body>
<div class="col-xs-12">
	<div class="text-center margin-top-1">
		<h3 class='label ct-demo-heading' id="heading">
			<span>Time Complexity of Linear Search</span>
		</h3>
	</div>
	<div class="col-xs-12 margin-top-3">
		<div class="col-xs-9 col-xs-offset-1 opacity00" id="divTable" style="background: antiquewhite;">
			<table align="center">
				<tbody>
					<tr>
						<th class="steps-heading-css">Steps</th>
						<th class="code-heading-css">Code</th>
						<th></th>
						<th class="units-heading-css" style="text-align: start;">Units</th>
					</tr>
					<tr>
						<th class="steps-heading-css"></th>
						<th class="code-heading-css"></th>
						<th><span class="opacity00" id="unitsForLeast">Scenario when the  key element itself<br>(Best case)</span></th>
						<th><span class="opacity00" id="unitsForMiddle">Scenario when the key element is at middle position<br>(Average case)</span></th>
						<th><span class="opacity00" id="unitsForHigher">Scenario when the key element is not found<br>(Worst case)</span></th>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo1">1.</td>
						<td class="td-code-text" id="tdCodeLine1">
							&emsp;&emsp;&emsp;&emsp;&emsp;<span class="opacity00" id="codeLine1"><span class="color-green">int</span>
							linear_search(<span class="color-green">int</span> a[], <span class="color-green">int</span> key, <span class="color-green">int</span> n) {</span>
						</td>
						<td class="opacity00" id="unitFirstLineTd1">
							<span id="unitFirstLineText1" style="padding: 2px 42px;">-</span>
						</td>
						<td class="opacity00" id="unitSecondLineTd1">
							<span id="unitSecondLineText1" style="padding: 2px 42px;">-</span>
						</td>
						<td class="opacity00" id="unitThirdLineTd1">
							<span id="unitThirdLineText1" style="padding: 2px 42px;">-</span>
						</td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo2">2.</td>
						<td class="td-code-text" id="tdCodeLine1">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine2"><span class="color-green">int</span> i, pos <span id="operator1">=</span> -1;</span>
						</td>
						<td class="opacity00" id="unitFirstLineTd2">
							<span id="unitFirstLineText2" style="padding: 2px 42px;">1</span>
						</td>
						<td class="opacity00" id="unitSecondLineTd2">
							<span id="unitSecondLineText2" style="padding: 2px 42px;">1</span>
						</td>
						<td class="opacity00" id="unitThirdLineTd2">
							<span id="unitThirdLineText2" style="padding: 2px 42px;">1</span>
						</td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo3">3.</td>
						<td class="td-code-text">
							&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span class="opacity00" id="codeLine3">
							<span class="color-maroon">for</span> (<span id="forInit">i = 0</span>; <span id="forCondition">i < n;
							</span> <span id="forIncrement">i++</span>) {</span> 
						</td>
						<td class="opacity00" id="unitFirstLineTd3">
							<span id="unitFirstLineText3" style="padding: 2px 17px;">
								<span id="initUnitNo1">1</span> + <span id="conditionUnitNo1">1</span> + <span id="incrementUnitNo1">0</span></span>
						</td>
						<td class="opacity00" id="unitSecondLineTd3">
							<span id="unitSecondLineText3">
								<span id="initUnitNo2">1</span> + <span id="conditionUnitNo2">(n / 2)</span> + <span id="incrementUnitNo2">(n / 2)</span>
							</span>
						</td>
						<td class="opacity00" id="unitThirdLineTd3">
							<span id="unitThirdLineText3">
								<span id="initUnitNo3">1</span> + <span id="conditionUnitNo3">n + 1</span> + <span id="incrementUnitNo3">n</span>
							</span>
						</td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo4">4.</td>
						<td class="td-code-text">
							&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine4"><span class="color-maroon">if</span> (key <span id="doubleEqualOperator">==
							</span> a[i]) {</span> 
						</td>
						<td class="opacity00" id="unitFirstLineTd4">
							<span id="unitFirstLineText4" style="padding: 2px 42px;">1</span>
						</td>
						<td class="opacity00" id="unitSecondLineTd4">
							<span id="unitSecondLineText4">(n / 2)</span>
						</td>
						<td class="opacity00" id="unitThirdLineTd4">
							<span id="unitThirdLineText4" style="padding: 2px 42px;">n</span>
						</td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo5">5.</td>
						<td class="td-code-text">
							&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine5">pos <span id="equalOperator">=</span> i;</span> 
						</td>
						<td class="opacity00" id="unitFirstLineTd5">
							<span id="unitFirstLineText5" style="padding: 2px 42px;">1</span>
						</td>
						<td class="opacity00" id="unitSecondLineTd5">
							<span id="unitSecondLineText5">(n / 2)</span>
						</td>
						<td class="opacity00" id="unitThirdLineTd5">
							<span id="unitThirdLineText5" style="padding: 2px 42px;">n</span>
						</td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo6">6.</td>
						<td class="td-code-text">
							&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine6"><span class="color-maroon">break;</span></span> 
						</td>
						<td class="opacity00" id="unitFirstLineTd6">
							<span id="unitFirstLineText6" style="padding: 2px 42px;">-</span>
						</td>
						<td class="opacity00" id="unitSecondLineTd6">
							<span id="unitSecondLineText6" style="padding: 2px 42px;">-</span>
						</td>
						<td class="opacity00" id="unitThirdLineTd6">
							<span id="unitThirdLineText6" style="padding: 2px 42px;">-</span>
						</td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo7">7.</td>
						<td class="td-code-text">
							&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine7">}</span>
						</td>
						<td class="opacity00" id="unitFirstLineTd7">
							<span id="unitFirstLineText7" style="padding: 2px 42px;">-</span>
						</td>
						<td class="opacity00" id="unitSecondLineTd7">
							<span id="unitSecondLineText7" style="padding: 2px 2px;">-</span>
						</td>
						<td class="opacity00" id="unitThirdLineTd7">
							<span id="unitThirdLineText7" style="padding: 2px 2px;">-</span>
						</td>
					</tr>
					
					<tr>
						<td class="opacity00" id="stepNo8">8.</td>
						<td class="td-code-text">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine8">}</span>
						</td>
						<td class="opacity00" id="unitFirstLineTd8">
							<span id="unitFirstLineText8" style="padding: 2px 42px;">-</span></td>
						<td class="opacity00" id="unitSecondLineTd8">
							<span id="unitSecondLineText8" style="padding: 2px 42px;">-</span>
						</td>
						<td class="opacity00" id="unitThirdLineTd8">
							<span id="unitThirdLineText8" style="padding: 2px 42px;">-</span>
						</td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo9">9.</td>
						<td class="td-code-text">&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine9">}</span>
						</td>
						<td class="opacity00" id="unitFirstLineTd9">
							<span id="unitFirstLineText9" style="padding: 2px 42px;">-</span></td>
						<td class="opacity00" id="unitSecondLineTd9">
							<span id="unitSecondLineText9" style="padding: 2px 42px;">-</span>
						</td>
						<td class="opacity00" id="unitThirdLineTd9">
							<span id="unitThirdLineText9" style="padding: 2px 42px;">-</span>
						</td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo10"></td>
						<td class="td-code-text">
							<span class="opacity00" id="codeLine10" style="float: right;">Total = </span>
						</td>
						<td class="opacity00" id="unitFirstLineTd10">
							<span id="unitFirstLineText10" style="padding: 2px 42px; background: aquamarine">5</span></td>
						<td class="opacity00" id="unitSecondLineTd10">
							<span id="unitSecondLineText10" style="/* padding: 2px 42px; */ background: aquamarine">
							2n + 2</span></td>
						<td class="opacity00" id="unitThirdLineTd10">
							<span id="unitThirdLineText10" style="/* padding: 2px 42px; */ background: aquamarine">
							4n + 3</span></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	<div class="col-xs-12 margin-top-3">
		<div class="col-xs-6 col-xs-offset-3 explanation-div opacity00" id="explanationDiv">
			<div class="col-xs-offset-">
				<span>We have  three cases to analyze an algorithm:</span>
				<ul>
					<li id="line1" class="opacity00">
						Best Case : <span id="firstCase" class="opacity00">5</span>
						<span id="firstCaseComplexity" class="opacity00"> - Time complexity is <b>Big O(<span id="result1" class="opacity00">1</span>)</b></span>
					</li>
					<li id="line2" class="opacity00">
						Average Case : <span id="secondCase" class="opacity00">2<span id="valueN1">n</span> + 2</span>
						<span id="secondCaseComplexity" class="opacity00"> - Time complexity is <b>Big O(<span id="result2" class="opacity00">n</span>)</b></span>
					</li>
					<li id="line3" class="opacity00">
						Worst Case : <span id="thirdCase" class="opacity00">4<span id="valueN2">n</span> + 3</span>
						<span id="thirdCaseComplexity" class="opacity00"> - Time complexity is <b>Big O(<span id="result3" class="opacity00">n</span>)</b></span>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="button col-xs-12 text-center margin-top-1" id="button">
		<button class="btn btn-warning glyphicon glyphicon-refresh opacity00" type="button" id='restart' style='margin-top:4px'>Restart</button>
	</div>
</div>
</body>
<script>
$(document).ready(function() {
	linearSearchTimeComplexityFunction();
});

</script>
</html>