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
<script src="/secure/lang/ds/js/factorial-time-complexity.js"></script>
<script type="text/javascript" src="/secure/lang/ds/js-min/fatc.min.js"></script>

<title>Factorial Time Complexity</title>
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
    max-width: 600px;
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

.position {
	position: relative;
}

.popover-btn-css {
	text-align: right;
	padding: 0;
}

.user-back-btn {
	background: #5bc0de !important
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
			<span>Time Complexity of factorial( )</span>
		</h3>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-7 col-xs-offset-2">
			<div id="infoDiv" class="font-size-14 margin-top-2">
				<ul>
					<li id="line1" class="opacity00">The time complexity of an algorithm is the <span class="ct-color-green">total 
					amount of time</span> required by an algorithm to complete its execution.
					</li>
					<li id="line2" class="opacity00">The time complexity of an algorithm is commonly expressed using <span class="ct-color-green">Big O</span> notation, 
					which excludes coefficients and lower order terms.<br/>
					<span id='nextButton' class='opacity00'>
						<a class='introjs-button user-btn'>Next &#8594;</a></span></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="col-xs-12 margin-top-1">
		<div class="col-xs-6 col-xs-offset-3 opacity00" id="divTable" style="background: antiquewhite;">
			<table align="center">
				<tbody>
					<tr>
						<th class="steps-heading-css">Steps</th>
						<th class="code-heading-css">Code</th>
						<th class="units-heading-css">Units</th>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo1">1.</td>
						<td class="td-code-text" id="tdCodeLine1">&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine1"><span class="color-green">int</span> factorial(<span class="color-green">int</span> n) {</span>
						</td>
						<td class="opacity00" id="unitLine1">
							<span id="unitLineText1" style="padding: 2px 42px;">0</span>
						</td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo2">2.</td>
						<td class="td-code-text">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine2"><span class="color-green">int</span> i, fact <span id="operator1">=</span> 
							<span class="color-deeppink">1</span>;</span>
						</td>
						<td class="opacity00" id="unitLine2">
							<span id="unitLineText2" style="padding: 2px 42px;">1</span>
						</td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo3">3.</td>
						<td class="td-code-text">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine3">
							<span class="color-maroon">for</span> (<span id="forInit">i = <span class="color-deeppink">0</span>;
							</span> <span id="forCondition">i < n;</span> <span id="forIncrement">i++</span>) {</span>
						</td>
						<td class="opacity00" id="unitLine3">
							<span id="unitLineText3" style="padding: 2px 2px;"><span id="initUnitNo">1</span> + <span id="conditionUnitNo">(n + 1)</span> 
							+ <span id="incrementUnitNo">n</span></span></td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo4">4.</td>
						<td class="td-code-text">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine4">
								fact <span id="equalOperator">=</span> fact <span id="mulOperator">*</span> i;</span>
						</td>
						<td class="opacity00" id="unitLine4">
							<span id="unitLineText4" style="padding: 2px 32px;">2 * n</span></td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo5">5.</td>
						<td class="td-code-text">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine5">}</span>
						</td>
						<td class="opacity00" id="unitLine5">
							<span id="unitLineText5" style="padding: 2px 42px;">0</span></td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo6">6.</td>
						<td class="td-code-text">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine6"><span class="color-maroon" id="returnOperator">return</span> fact;</span>
						</td>
						<td class="opacity00" id="unitLine6">
							<span id="unitLineText6" style="padding: 2px 42px;">1</span></td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo7">7.</td>
						<td class="td-code-text">&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine7">}</span>
						</td>
						<td class="opacity00" id="unitLine7">
							<span id="unitLineText7" style="padding: 2px 42px;">0</span></td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo7">8.</td>
						<td class="td-code-text">
							<span class="opacity00" id="codeLine8" style="float: right;">Total = </span>
						</td>
						<td class="opacity00" id="unitLine8">
							<span id="unitLineText8" style="padding: 2px 42px; background: aquamarine">4n + 4</span></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	<div class="col-xs-12 margin-top-2">
		<div class="col-xs-5 col-xs-offset-4 opacity00" id="finalDiv">
			<span id="finalLine1" class="opacity00">&#10003;The total number of units taken for the factorial() = 
				<span id="conclusionId">4<span id="alphabetN1">n</span> + 4</span></span><br>
			<span id="finalLine2" class="opacity00">&#10003;The time complexity of factorial() = <span style="font-family: monospace; color: #0849a0;">
				Big O(<span id="alphabetN2" class="opacity00 position">n</span>)</span>.</span>
		</div>
	</div>
	<div class="button col-xs-12 text-center margin-top-1" id="button">
		<button class="btn btn-warning glyphicon glyphicon-refresh opacity00" type="button" id='restart' style='margin-top:4px'>Restart</button>
	</div>
</div>
</body>

<script type="text/javascript">
factorialTimeComplexityReady();
</script>
</html>