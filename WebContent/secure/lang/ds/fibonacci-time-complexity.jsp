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

<script type="text/javascript" src="/secure/lang/ds/js-min/fitc.min.js"></script>

<title>fibonacci time complexity</title>

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

.margin-top-5 {
	margin-top: 5%;
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
    max-width: 800px;
}

td, th {
   /*  border: 1px solid #dddddd; */
    /* text-align: left; */
    padding: 2px 8px;
}

.td-code-text {
	font-family: monospace;
	/* font-style: italic; */
	/* font-weight: bold; */
}

th, td:nth-child(1), td:nth-child(3) {
	text-align: center;
}

th:nth-child(3) {
	width: 30%;
}

td:nth-child(4) {
	text-align: center;
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

.step-color-css {
	color: #eac807;
	font-size: 14px;
	font-weight: bold;
}

.blinking {
	animation-name: blink;
	animation-duration: 0.8s;
	animation-iteration-count: 3;
}

@keyframes blink {
	50% {
		background: #da5805;
	}
}

.ui-effects-transfer {
	border: 1px solid green;
	 z-index: 9999999 !important;
}

/* .td-code-text {
	background: #c0e1fb;
} */

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
<div class="col-xs-12">
	<div class="text-center margin-top-1">
		<h3 class='label ct-demo-heading' id="heading">
			<span>Time Complexity of fibonacci( )</span>
		</h3>
	</div>
	<div class="col-xs-12 margin-top-5">
		<div class="col-xs-8 col-xs-offset-2 opacity00" id="divTable" style="background: antiquewhite;">
			<table align="center">
				<tbody>
					<tr>
						<th class="steps-heading-css">Steps</th>
						<th class="code-heading-css">Code</th>
						<th class="units-heading-css" style="text-align: end;">Units</th>
					</tr>
					<tr>
						<th class="steps-heading-css"></th>
						<th class="code-heading-css"></th>
						<th><span class="opacity00" id="unitsForLessThanOne">n <= 1</span></th>
						<th><span class="opacity00" id="unitsForGreaterThanOne">n > 1</span></th>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo1">1.</td>
						<td class="td-code-text" id="tdCodeLine1">&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine1"><span class="color-green">int</span> fibonacci(<span class="color-green">int</span> n) {</span>
						</td>
						<td class="opacity00" id="unitFirstLineTd1">
							<span id="unitFirstLineText1" style="padding: 2px 42px;">-</span>
						</td>
						<td class="opacity00" id="unitSecondLineTd1">
							<span id="unitSecondLineText1" style="padding: 2px 42px;">-</span>
						</td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo2">2.</td>
						<td class="td-code-text">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine2"><span class="color-green">int</span> f1 
							<span id="operator1">=</span> <span class="color-deeppink">1</span>,
							f2 <span id="operator2">=</span> <span class="color-deeppink">1</span>, f3;</span>
						</td>
						<td class="opacity00" id="unitFirstLineTd2">
							<span id="unitFirstLineText2" style="padding: 2px 42px;">2</span>
						</td>
						<td class="opacity00" id="unitSecondLineTd2">
							<span id="unitSecondLineText2" style="padding: 2px 42px;">2</span>
						</td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo3">3.</td>
						<td class="td-code-text">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine3"><span class="color-maroon">if</span> (
							<span id="ifCondition">n <= <span class="color-deeppink">1</span></span>) {</span> 
						</td>
						<td class="opacity00" id="unitFirstLineTd3">
							<span id="unitFirstLineText3" style="padding: 2px 42px;">1</span>
						</td>
						<td class="opacity00" id="unitSecondLineTd3">
							<span id="unitSecondLineText3" style="padding: 2px 42px;">1</span>
						</td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo4">4.</td>
						<td class="td-code-text">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine4"><span class="color-maroon">return</span> n;</span> 
						</td>
						<td class="opacity00" id="unitFirstLineTd4">
							<span id="unitFirstLineText4" style="padding: 2px 42px;">1</span>
						</td>
						<td class="opacity00" id="unitSecondLineTd4">
							<span id="unitSecondLineText4" style="padding: 2px 42px;">-</span>
						</td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo5">5.</td>
						<td class="td-code-text">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine5">} <span id="elseCondition" class="color-maroon">else</span> {</span> 
						</td>
						<td class="opacity00" id="unitFirstLineTd5">
							<span id="unitFirstLineText5" style="padding: 2px 42px;">-</span>
						</td>
						<td class="opacity00" id="unitSecondLineTd5">
							<span id="unitSecondLineText5" style="padding: 2px 42px;">-</span>
						</td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo6">6.</td>
						<td class="td-code-text">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine6">
							<span class="color-maroon">for</span
							>(<span id="forInit">i = <span class="color-deeppink">2</span>;</span> <span id="forCondition">i <= n;
							</span> <span id="forIncrement">i++</span>) {</span>
						</td>
						<td class="opacity00" id="unitFirstLineTd6">
							<span id="unitFirstLineText6" style="padding: 2px 42px;">-</span>
						</td>
						<td class="opacity00" id="unitSecondLineTd6">
							<span id="unitSecondLineText6" style="padding: 2px 2px;"><span id="initUnitNo">1</span> + <span id="conditionUnitNo">n - 1 + 1 </span> 
							+ <span id="incrementUnitNo">n - 1</span></span></td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo7">7.</td>
						<td class="td-code-text">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine7">
								f3 <span id="equalOperator">=</span> f1 <span id="plusOperator">+</span> f2;</span>
						</td>
						<td class="opacity00" id="unitFirstLineTd7">
							<span id="unitFirstLineText7" style="padding: 2px 42px;">-</span></td>
						<td class="opacity00" id="unitSecondLineTd7">
							<span id="unitSecondLineText7" style="padding: 2px 42px;">2n - 2</span></td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo8">8.</td>
						<td class="td-code-text">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine8">
								f1 <span id="equalOperator2">=</span> f2;</span>
						</td>
						<td class="opacity00" id="unitFirstLineTd8">
							<span id="unitFirstLineText8" style="padding: 2px 42px;">-</span></td>
						<td class="opacity00" id="unitSecondLineTd8">
							<span id="unitSecondLineText8" style="padding: 2px 42px;">n - 1</span></td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo9">9.</td>
						<td class="td-code-text">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine9">
								f2 <span id="equalOperator3">=</span> f3;</span>
						</td>
						<td class="opacity00" id="unitFirstLineTd9">
							<span id="unitFirstLineText9" style="padding: 2px 42px;">-</span></td>
						<td class="opacity00" id="unitSecondLineTd9">
							<span id="unitSecondLineText9" style="padding: 2px 42px;">n - 1</span></td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo10">10.</td>
						<td class="td-code-text">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine10">}</span>
						</td>
						<td class="opacity00" id="unitFirstLineTd10">
							<span id="unitFirstLineText10" style="padding: 2px 42px;">-</span></td>
						<td class="opacity00" id="unitSecondLineTd10">
							<span id="unitSecondLineText10" style="padding: 2px 42px;">-</span></td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo11">11.</td>
						<td class="td-code-text">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine11">
							<span id="returnOperator" class="color-maroon">return</span> f3;</span>
						</td>
						<td class="opacity00" id="unitFirstLineTd11">
							<span id="unitFirstLineText11" style="padding: 2px 42px;">1</span></td>
						<td class="opacity00" id="unitSecondLineTd11">
							<span id="unitSecondLineText11" style="padding: 2px 42px;">1</span></td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo12">12.</td>
						<td class="td-code-text">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine12">}</span>
						</td>
						<td class="opacity00" id="unitFirstLineTd12">
							<span id="unitFirstLineText12" style="padding: 2px 42px;">-</span></td>
						<td class="opacity00" id="unitSecondLineTd12">
							<span id="unitSecondLineText12" style="padding: 2px 42px;">-</span></td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo13">13.</td>
						<td class="td-code-text">&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine13">}</span>
						</td>
						<td class="opacity00" id="unitFirstLineTd13">
							<span id="unitFirstLineText13" style="padding: 2px 42px;">-</span></td>
						<td class="opacity00" id="unitSecondLineTd13">
							<span id="unitSecondLineText13" style="padding: 2px 42px;">-</span></td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo14"></td>
						<td class="td-code-text">
							<span class="opacity00" id="codeLine14" style="float: right;">Total = </span>
						</td>
						<td class="opacity00" id="unitFirstLineTd14">
							<span id="unitFirstLineText14" style="padding: 2px 42px; background: aquamarine">4</span></td>
						<td class="opacity00" id="unitSecondLineTd14">
							<span id="unitSecondLineText14" style="padding: 2px 42px; background: aquamarine">
							6<span id="alphabetN1">n</span></span></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	<div class="col-xs-12 margin-top-2">
		<div class="col-xs-5 col-xs-offset-4 opacity00" id="finalDiv">
<!-- 			<span id="finalLine1" class="opacity00">&#10003;The total number of units taken for the sum() = 
				<span id="conclusionId">4<span id="alphabetN1">n</span> + 4</span></span><br> -->
			<span id="finalLine1" class="opacity00">The time complexity of fibonacci() = <span style="font-family: monospace; color: #0849a0;">
				Big O(<span id="alphabetN2" class="opacity00 position">n</span>)</span>.</span>
		</div>
	</div>
	<div class="button col-xs-12 text-center margin-top-1" id="button">
		<button class="btn btn-warning glyphicon glyphicon-refresh opacity00" type="button" id='restart' style='margin-top:4px'>Restart</button>
	</div>
</div>
</body>
<script>
$(document).ready(function() {
	fibonacciTimeComplexityFunction();
});

</script>
</html>