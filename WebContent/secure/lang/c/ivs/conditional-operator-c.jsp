<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">
<link href="/css/tablesorter/jquery-ui.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/animate.css" rel="stylesheet">
<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/secure/lang/c/js-min/coc.min.js"></script>
<title>conditional-operator</title>
<style type="text/css">

.introjs-tooltiptext br {
	content: "";
	display: block;
	margin-top: 10px;
}

.introjs-tooltip {
	min-width: 400px;
}

.introjs-tooltip-min-width-custom {
	min-width: 110px;
}

.introjs-duplicate-nextbutton {
	background-color: green;
}

.buttons-div {
	margin: 20px 0 10px;
	text-align: center;
}

.heading-css {
	margin: 20px 0 10px;
}

.box-border {
	border: 1px solid grey;
	border-radius: 8px;
	margin: 30px 10px 10px;
	padding: 10px;
}

.box-css {
	border-color: transparent;
    border-radius: 10px;
	border-style: solid;
    border-width: 2px;
}

.box-padding {
	padding: 10px;
}

.creamPreTab4 {
	-moz-tab-size: 6;
	tab-size: 6;
    background-color: #fffae6;
    border-radius: 8px;
    font-size: 11px;
    margin: 5px;
    padding: 10px;
    white-space: pre;
}

.output-console {
	margin: auto;
	width: 300px;
}

.animation-div1 {
	font-family: monospace;
	padding: 100px 0 40px;
	opacity: 0;
}

.animation-div2 {
	font-family: monospace;
	padding-bottom: 30px;
	opacity: 0;
}

.max-div {
	text-align: right;
	padding: 0px;
}

.num {
	display: inline-block;
	text-align: center;
	width: 32px;
	position: relative;
}

.svg-css {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
}

.duplicate-btn-sm-success {
	background-color: #5cb85c;
	border-color: #4cae4c;
	border-radius: 3px;
	display: inline-block;
	font-size: 12px;
	padding: 5px 10px;
}

[contenteditable="true"] {
	font-weight: normal;
	outline: medium none;
}

.ct-code-b-red {
	font-family: monospace;
	font-weight: bold;
	color: rgb(252, 66, 66);
}

.statement-css {
	position: absolute;
	top: 35px;
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

</style>
</head>
<body>

<div class='col-xs-12'>
	<div class='text-center heading-css'>
		<h1 class='label ct-demo-heading'>Conditional Operator</h1>
	</div>
	<div class='buttons-div'>
		<!-- <button type="button" class="btn btn-success" id="startBtn">Start</button> -->
		<button type="button" class="btn btn-warning visibility-hidden" id="restartBtn">Restart</button>
	</div>
	
	<div class='col-xs-offset-1 col-xs-11'>
		<div class='col-xs-5 box-border'>
<pre class='creamPreTab4'>
void main() {
	<span id='num1Line'>int num1 = <span id='num1value' contenteditable='true', spellcheck='false', maxlength='2'>14</span>;</span>
	<span id='num2Line'>int num2 = <span id='num2value' contenteditable='true', spellcheck='false', maxlength='2'>12</span>;</span>
	<span id='maxLine'>int max = (<span id="part1">num1 > num2</span>) <span id="part2">? num1 : num2;</span></span>
	<span id='printfLine'>printf("The max number is %d", max);</span>
}
</pre>
		</div>
		<div class='col-xs-5 box-border' id='animationBox'>
			<div class='col-xs-12'>
				<div class='col-xs-12 text-center animation-div1'>
					<span class='box-padding'>int max</span> = 
					<span id="box1" class='box-padding box-css'><span class='statement-css opacity00'>condition</span>num1 > num2</span> ? 
					<span id="box2" class='box-padding box-css'><span class='statement-css opacity00'>true</span>num1</span> : 
					<span id="box3" class='box-padding box-css'><span class='statement-css opacity00'>false</span>num2</span>;
				</div>
				<div class="col-xs-12 animation-div2 ">
					<div class="col-xs-4 max-div">int max =</div>
					<div class="col-xs-8 max-value-div">
						<span class="num" id='num1'>num1</span>
						<span>&gt;</span>
						<span class="num" id='num2'>num2</span>
						<span>?</span>
						<span class="num" id="n1">num1</span>
						<span>:</span>
						<span class="num" id="n2">num2</span>
					</div>
				</div>
			</div>
			<div class="output-console center" id='outputBox'>
				<div class="output-console-title-bar">
					<span>Output</span>
				</div>
				<div class="output-console-body">
<span></span>
				</div>
			</div>
		</div>
	</div>
</div>

<script>
	$(document).ready(function() {
		conditionalOperatorReady();
	});
</script>

</body>
</html>