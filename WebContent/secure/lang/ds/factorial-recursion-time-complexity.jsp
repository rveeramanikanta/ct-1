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

<script type="text/javascript" src="/secure/lang/ds/js-min/frtc.min.js"></script>

<title>factorial recursion time complexity</title>

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
	font-weight: bold;
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

.display {
	display: inline-block;
}

span {
	position: relative;
	display: inline-block;
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
	background: #5bc0de !important
}

</style>
</head>
<body>

</head>
<body>
<div class="col-xs-12">
	<div class="text-center margin-top-1">
		<h3 class='label ct-demo-heading' id="heading">
			<span>Time Complexity of factorial( ) using recursion</span>
		</h3>
	</div>
	<div class="col-xs-12 margin-top-3">
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
						<td class="td-code-text" id="tdCodeLine1">
							&emsp;&emsp;&emsp;&emsp;&emsp;<span class="opacity00" id="codeLine1">int fact(int n) {</span>
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
						<td class="td-code-text">
							&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span class="opacity00" id="codeLine2">
							if (<span id="ifCondition">n <span id="operator1"><=</span> 1</span>) {</span>
						</td>
						<td class="opacity00" id="unitFirstLineTd2">
							<span id="unitFirstLineText2" style="padding: 2px 42px;">1</span>
						</td>
						<td class="opacity00" id="unitSecondLineTd2">
							<span id="unitSecondLineText2" style="padding: 2px 42px;">1</span>
						</td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo3">3.</td>
						<td class="td-code-text">
							&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine3">return 1;</span> 
						</td>
						<td class="opacity00" id="unitFirstLineTd3">
							<span id="unitFirstLineText3" style="padding: 2px 42px;">1</span>
						</td>
						<td class="opacity00" id="unitSecondLineTd3">
							<span id="unitSecondLineText3" style="padding: 2px 42px;">-</span>
						</td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo4">4.</td>
						<td class="td-code-text">
							&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine4">} <span id="elseCondition">else</span> {</span> 
						</td>
						<td class="opacity00" id="unitFirstLineTd4">
							<span id="unitFirstLineText4" style="padding: 2px 42px;">-</span>
						</td>
						<td class="opacity00" id="unitSecondLineTd4">
							<span id="unitSecondLineText4" style="padding: 2px 42px;">-</span>
						</td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo5">5.</td>
						<td class="td-code-text">
							&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine5">return (n <span id="asteriskOperator">*</span> <span id="factOperator">fact(n-1)
							</span>);</span>
						</td>
						<td class="opacity00" id="unitFirstLineTd5">
							<span id="unitFirstLineText5" style="padding: 2px 42px;">-</span>
						</td>
						<td class="opacity00" id="unitSecondLineTd5">
							<span id="unitSecondLineText5" style="padding: 2px 42px;">
							<span id="unitSecondLineTdText1">1</span> + <span id="unitSecondLineTdText2">fact(n-1)</span></span>
						</td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo6">6.</td>
						<td class="td-code-text">
							&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine6">}</span>
						</td>
						<td class="opacity00" id="unitFirstLineTd6">
							<span id="unitFirstLineText6" style="padding: 2px 42px;">-</span>
						</td>
						<td class="opacity00" id="unitSecondLineTd6">
							<span id="unitSecondLineText6" style="padding: 2px 2px;">-</span></td>
					</tr>
					
					<tr>
						<td class="opacity00" id="stepNo7">7.</td>
						<td class="td-code-text">
							&emsp;&emsp;&emsp;&emsp;&emsp;<span class="opacity00" id="codeLine7">}</span>
						</td>
						<td class="opacity00" id="unitFirstLineTd7">
							<span id="unitFirstLineText7" style="padding: 2px 42px;">-</span></td>
						<td class="opacity00" id="unitSecondLineTd7">
							<span id="unitSecondLineText7" style="padding: 2px 42px;">-</span></td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo8"></td>
						<td class="td-code-text">
							<span class="opacity00" id="codeLine8" style="float: right;">Total = </span>
						</td>
						<td class="opacity00" id="unitFirstLineTd8">
							<span id="unitFirstLineText8" style="padding: 2px 42px; background: aquamarine">2</span></td>
						<td class="opacity00" id="unitSecondLineTd8">
							<span id="unitSecondLineText8" style="padding: 2px 42px; background: aquamarine">
							2 + fact(n-1)</span></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	<div class="col-xs-12 margin-top-3">
		<div class="col-xs-6 col-xs-offset-3 explanation-div opacity00" id="explanationDiv">
			<div class="col-xs-offset-3">
				<span id="lessThanResult" class="color-darkgreen">
					<span id="lessThanResultSpan">fact(n) = 2</span>, if n <= 1
				</span><br>
				<span id="greaterThanResult" class="color-darkgreen">
					<span id="greaterThanResultSpan">fact(n) = <span id="mainResult" class="position">2 + fact(n-1)</span></span>, if n > 1
				</span><br>
				<span class="heading-css">Simplification :</span><br>
				<span id="line1" class="opacity00" style="padding-right: 68px;">
					fact(n) = <span id="line1Span">2 + fact(n-1)</span>
				</span><br>
				<span id="line2" class="opacity00"><span class="opacity00">fact(n)</span> = 
					<span id="line2Span" class="opacity00">2 + <span id="line2SpanFact">fact(n-1)</span></span>
				</span><br>
				<span id="line3" class="opacity00"><span class="opacity00">fact(n)</span> = 
					<span id="line3Span" class="opacity00"><span id="line3SpanNum">2 + 2</span> + <span id="line3SpanFact">fact(n-2)</span></span>
				</span><br>
				<span id="line4" class="opacity00"><span class="opacity00">fact(n)</span> = 
					<span id="line4Span" class="opacity00">2 + 2 + 2 + <span id="line4SpanFact">fact(n-3)</span></span>
				</span><br>
				<span id="line5" class="opacity00"><span class="opacity00">fact(n)</span> = 
					<span id="line5Span" class="opacity00">2 + 2 + 2 + 2 + 2 + <span id="line4SpanFact">fact(n-5)</span></span>
				</span><br>
				<span id="line6" class="opacity00 margin-left82">...</span><br>
				<span id="line7" class="opacity00 margin-left82">...</span><br>
				<span id="line8" class="opacity00 margin-left82">...</span><br>
				<span id="line9" class="opacity00 margin-left82">...</span><br>
				<span id="line10" class="opacity00"><span class="opacity00">fact(n)</span> = 
					<span id="line10Span" class="opacity00">n(2) + fact(n-n)</span>
				</span><br>
				<span id="line11" class="opacity00"><span class="opacity00">fact(n)</span> = 
					<span id="line11Span" class="opacity00">2n + fact(0)</span>
				</span><br>
				<span id="line12" class="opacity00"><span class="opacity00">fact(n)</span> = 
					<span id="line12Span" class="opacity00">2<span id="alphabetN1">n</span> + <span id="line12SpanFact">fact(0)</span></span>
				</span><br>
				<span id="finalLine" class="opacity00">The time complexity of factorial() = <span style="font-family: monospace; color: #0849a0;">
				Big O(<span id="alphabetN2" class="opacity00 position">n</span>)</span>.</span>
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
	factorialRecursionTimeComplexityFunction();
});

</script>
</html>