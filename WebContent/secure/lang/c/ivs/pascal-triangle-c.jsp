 <%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>pascal old</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link href="/css/font-awesome-animation.min.css" rel="stylesheet">

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<script type="text/javascript" src="/secure/lang/c/js-min/ptc.min.js"></script>
<style type="text/css">

.margin-top-20 {
	margin-top: 20px;
}

.margin-top-40 {
	margin-top: 40px;
}

#topDiv {
	border: 1px solid gray;
	border-radius: 6px;
	height: 250px;
	padding: 10px;
}

.position-relative {
	position: relative;
}

.user-btn {
	background-color: green;
}

.box {
	border: 1px solid gray;
	height: 20px;
}

.vertical-align-middle {
	vertical-align: middle;
}


.display-inline-block {
	position: relative;
	display: inline-block;
}

.svg-css {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
}

.line {
	marker-end: url(#arrow);
	stroke: gray;
	stroke-width: 2;
}

.border {
	border : 1px solid red;
}

.background-color-yellow {
	background-color: yellow;
}

.background-color-green {
	background-color: #90EE90;
}

.background-color-blue {
	background-color: #87CEFA;
}

pre {
	border:medium none;
	font-size: 12px;
}

#codeDiv pre {
	tab-size: 4;
	-moz-tab-size: 4;
}

.output-console-body {
    background-color: black;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    color: #f0f0f0;
    font-family: monospace;
    font-size: 14px;
    height: 310px;
    overflow: unset;
    padding: 10px;
    white-space: nowrap;
}


.z-index {
	background-color: white;
	position: relative;
	z-index: 10000000 !important;
}

.outline-none {
	outline:none;
}

.error-msg {
	color: red;
	font-weight: bold;
}

[contenteditable=true]:empty:before {
  content: attr(placeholder);
  color: gray;
}

.display-inline-block {
	display: inline-block;
}

.ct-code-b-red {
	color: #ff0000;
}

.color-white {
	color: white;
	font-weight: bold;
}

.user-btn {
	background-color: green;
}


.blinking {
	animation-name: blinking;
	animation-duration: 0.5s;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
}

@keyframes blinking { 
	50% {
		background-color: lightblue;
	}
}

.space {
	color : yellow;
	
}

in {
	color: rgb(62, 50, 173);
	font-weight: bold;
}

ink {
	color: 	rgb(255, 0, 191);
}

go {
	color: rgb(134, 19, 19);
	font-weight: bold;
}

g {
	color: 	rgb(64, 130, 65);
	font-weight: bold;
}

r {
	color: red;
}

</style>
</head>
<body>
<script type="text/javascript">


$(document).ready(function() {
	pascalTriangleCReady();
});


</script>
	<div class='text-center margin-top-20'>
		<h4 class='label ct-demo-heading' id='demoTitle'>Pascal's Triangle</h4>
	</div>
	<div class="col-xs-offset-1 col-xs-10 margin-top-20">
		<div id="topDiv">
			<div id="typingDiv1" style="font-family: monospace;">
				<ul>
					<li id="li1" class="opacity00">In mathematics, Pascal's triangle is a triangular array of
						the binomial coefficients.</li>
					<li id="li2" class="opacity00">
						Here the pascal's triangle can be represented as
						&emsp; <span class='user-btn introjs-button' onclick='revealArrow()'>Next &#8594;</span><br>
					</li>
				</ul>
			</div>
			<div class="col-xs-12 text-center">
				<svg class="svg-css">
						<marker style="fill: gray;" orient="auto" markerHeight="5" markerWidth="5" refY="2.5" refX="4" id="arrow">
		               		<path class="arrow-svg" d="M0,0 L5,2.5 L0,5 Z"/>
		           		</marker>
						<line class="line" id="arrow1" x1="28%" y1="50%" x2="28%" y2="50%"/>
						<line class="line" id="arrow2" x1="57%" y1="50%" x2="57%" y2="50%"/>
				</svg>
				<div class="col-xs-offset-0 col-xs-4 opacity00 margin-top-40 display-inline-block" id="firstDiv">
					<div>
						<sup>0</sup>C<sub>0</sub>
					</div>
					<div>
						<sup>1</sup>C<sub>0</sub>&ensp;&ensp;&ensp;<sup>1</sup>C<sub>1</sub>
					</div>
					<div>
						<sup>2</sup>C<sub>0</sub>&ensp;&ensp;&ensp;<sup>2</sup>C<sub>1</sub>&ensp;&ensp;&ensp;<sup>2</sup>C<sub>2</sub>
					</div>
					<div>
						<sup>3</sup>C<sub>0</sub>&ensp;&ensp;&ensp;<sup>3</sup>C<sub>1</sub>&ensp;&ensp;&ensp;<sup>3</sup>C<sub>2</sub>&ensp;&ensp;&ensp;<sup>3</sup>C<sub>3</sub>
					</div>
					<div>
						<sup>4</sup>C<sub>0</sub>&ensp;&ensp;&ensp;<sup>4</sup>C<sub>1</sub>&ensp;&ensp;&ensp;<sup>4</sup>C<sub>2</sub>&ensp;&ensp;&ensp;<sup>4</sup>C<sub>3</sub>&ensp;&ensp;&ensp;<sup>4</sup>C<sub>4</sub>
					</div>
					<div><b>'</b></div>
					<div><b>'</b></div>
					<div><b>'</b></div>
				</div>
				<div class="col-xs-4 opacity00 margin-top-40 display-inline-block" id="secondDiv">
					<div>1</div>
					<div>
						<span>1</span>&ensp;&ensp;&ensp;<span>1</span>
					</div>
					<div>
						<span>1</span>&ensp;&ensp;&ensp;<span>2</span>&ensp;&ensp;&ensp;<span>1</span>
					</div>
					<div>
						<span>1</span>&ensp;&ensp;&ensp;<span>3</span>&ensp;&ensp;&ensp;<span>3</span>&ensp;&ensp;&ensp;<span>1</span>
					</div>
					<div>
						<span>1</span>&ensp;&ensp;&ensp;<span>4</span>&ensp;&ensp;&ensp;<span>6</span>&ensp;&ensp;&ensp;<span>4</span>&ensp;&ensp;&ensp;<span>1</span>
					</div>
					<div><b>'</b></div>
					<div><b>'</b></div>
					<div><b>'</b></div>
				</div>
				<div class="col-xs-4 opacity00 display-inline-block margin-top-40" id="thirdDiv">
					<div>
						<span class="circle" id="firstRowNo">1</span>
					</div>
					<div>
						<span class="circle display-inline-block"><span id="secondRowFirstNo" class="position-relative">1</span></span>&ensp;&ensp;&ensp;&ensp;
						<span class="circle display-inline-block"><span id="secondRowsecondNo" class="position-relative">1</span></span>
					</div>
					<div>
						<span class="circle display-inline-block"><span id="thirdRowFirstNo" class="position-relative">1</span></span>&ensp;&ensp;&ensp;&ensp;
						<span class="circle display-inline-block"><span id="thirdRowSecondNo" class="position-relative">2</span></span>&ensp;&ensp;&ensp;&ensp;
						<span class="circle display-inline-block"><span id="thirdRowThirdNo" class="position-relative">1</span></span>
					</div>
					<div>
						<span class="circle display-inline-block"><span id="fourthRowFirstVal" class="position-relative">1</span></span>&ensp;&ensp;&ensp;&ensp;
						<span class="circle display-inline-block"><span id="fourthRowSecondVal" class="position-relative">3</span></span>&ensp;&ensp;&ensp;&ensp;
						<span class="circle display-inline-block"><span id="fourthRowThirdVal" class="position-relative">3</span></span>&ensp;&ensp;&ensp;&ensp;
						<span class="circle display-inline-block"><span id="fourthRowFourthVal" class="position-relative">1</span></span>
					</div>
					<div>
						<span class="circle display-inline-block"><span id="fifthRowFirstVal" class="position-relative">1</span></span>&ensp;&ensp;&ensp;&ensp;
						<span class="circle display-inline-block"><span id="fifthRowSecondVal" class="position-relative">4</span></span>&ensp;&ensp;&ensp;&ensp;
						<span class="circle display-inline-block"><span id="fifthRowThirdVal" class="position-relative">6</span></span>&ensp;&ensp;&ensp;&ensp;
						<span class="circle display-inline-block"><span id="fifthRowfourthVal" class="position-relative">4</span></span>&ensp;&ensp;&ensp;&ensp;
						<span class="circle display-inline-block"><span id="fifthRowFifthVal" class="position-relative">1</span></span>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-12 center margin-top-20">
		<div class='col-xs-offset-1 col-xs-5' ><div id="codeDiv" class='opacity00'>
	<pre class='bg-info'>
<in>#include</in> <ink>&lt;stdio.h&gt;</ink>
<span id='mainMethod'><g>void</g> <span id='main'>main()</span> {
	<span id='variableDeclaration'><g>int</g> rows, index, spaces, col, number;</span>
	<span id='getPrintf'>printf(<ink>"Enter number of rows: "</ink>);</span>
	<span id='getScanf'>scanf(<ink>"<in>%d</in>"</ink>, &rows);</span>
	<span id="totalForLoop"><span class='outer'><go>for</go> (<span id='forLoopI'>index = <ink>0</ink></span>;<span id='iCondition'> index < rows</span>; <span id='iIncrements'>index++</span>) {</span>
		<span id='firstInnerForLoop'><span class='inner-one'><go>for</go> (<span id='forLoopJ'>spaces = rows</span>; <span id='jCondition'>spaces > index</span>; <span id='jIncrement'>spaces--</span>) {</span>
			<span class='inner-one' id='printfSpace'>printf(<ink>" "</ink>);</span>
		<span class='inner-one'>}</span></span>
		<span id="numberReset">number = <ink>1</ink>;</span>
		<span id='secondInnerForLoop'><span class='inner-two'><go>for</go> (<span id='forLoopK'>col = <ink>0</ink></span>; <span id='kCondition'>col <= index</span>; <span id='kIncrement'>col++</span>) {</span>
			<span id='codeStarPrint' class='inner-two'>printf(<ink>"<in>%d</in> "</ink>,number);</span>
			<span id="numberSet" class='inner-two'>number = number * (index - col) / (col + <ink>1</ink>);</span>
		<span class='inner-two'>}</span></span>
		<span id="codeNextLine" class='outer'>printf(<ink>"<in>\n</in>"</ink>);</span>
	<span class='outer'>}</span></span></span>
}</pre>
	</div></div>
		<div class='col-xs-5'>
			<div id="outputDiv">
				<div id="consoleId1" class="center opacity00">
					<div class="output-console-title-bar">
						<span class="title"><b>Console</b></span>
					</div>
					<div class="output-console-body" id="consoleBodyDiv1">
						<span id="animationDivText" class='opacity00'>Enter number
							of rows:&emsp;
							<div spellcheck="false"
								class="opacity00 empty matrix input-char outline-none" id="rowValue" placeholder="rows" maxlength="0"
								contenteditable="true"
								style='display: inline-block; font-family: monospace; font-weight: bold;'></div>
						</span>
					</div>
				</div>

			</div>
		</div>
	</div>
	<div class="col-xs-12 center margin-top-20 text-center">
		<span id='restart' class='btn btn-warning btn-sm opacity00'>Restart &nbsp;<i class='fa fa-refresh'></i></span>
	</div>
</body>
</html>
