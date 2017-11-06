<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
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
<script src="/js/bootstrap.min.js"></script>
<script src="/secure/lang/c/js-min/lotnp.min.js"></script>

<title>find-largest-of-three-numbers.jsp</title>
<style type="text/css">

.introjs-tooltiptext br {
	margin: 15px;
}

.introjs.tooltiptext > span{
	display: inline-block;
	position: relative;
	z-inline: 10000000000 !important;
}

.introjs-tooltip {
	min-width: 325px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
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

.margin-top {
    margin-top: 18px;
}

#condition {
	margin-bottom: 25px;
}

.padding0 {
    padding: 0px;
}

#codeDiv {
    height: 217px;
}

pre > span {
	position: static;
}

div, span {
	position: relative;
}

.buttons-div {
	margin-top: 20px;
	margin-bottom: 5px;
	text-align: center;
}

.position {
	display: inline-block;
	position: relative;
}

.workspace {
    -moz-tab-size: 2;
    tab-size: 2;
    background-color: #fffae6;
    border-radius: 9px;
    font-family: monospace;
    font-size: 13px;
    margin-top: 12px;
}

[contenteditable="true"] {
    outline: medium none;
}

#box {
    border: 2px solid gray;
    height: 24px;
    margin-top: 5px;
}

.margintop {
	margin-top: 5px;
}

.output-div {
	padding: 0px;
	margin-top: 12px;
}

.output {
    color: white;
    margin: 0 0 0 4px;
}

#outputText {
    margin-left: -22px;
}

.num {
    display: inline-block;
    position: relative;
    text-align: center;
    /* width: 65px; */
}

.max-div {
    padding: 0;
    text-align: right;
}

.panel-primary > .panel-heading {
    background-color: lightgray;
    border-color: lightgray;
    color: #000;
}

.blinking-red {
	animation-name: blink1;
	animation-duration: 1s;
	animation-iteration-count: infinite;
 }

@keyframes blink1 {
	50% {
		background: red;
	}
}

.blinking-green {
	animation-name: blink;
	animation-duration: 1s;
	animation-iteration-count: infinite;
 }

@keyframes blink {
	50% {
		background: green;
	}
}

.introjs-duplicate-nextbutton {
	background-color: green;
}

#conditionAimation {
	opacity: 0;
	height : 47px; 
	font-family: monospace;
}

#address {
    display: flex;
    align-items: center;
}

.panel-heading {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    padding: 2px;
}

.panel-body {
    min-height: 60px;
    padding: 15px 0 0;
}

.panel {
 	border-radius: 0px;
    background-color: #000;
    border: 1px solid transparent;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
}

.number-div > .number-div {
	background-color: #337ab7;
	color: white;
	font-width: bold;
	margin-top: 12px;
}

.number-div > .number-body {
	background-color: white;
	color: black;
	font-width: bold;
	border-color: lightgray;
	min-height: 45px;
}

.address-text {
	margin-top: -13px;
}

.ct-code-b-red {
	font-weight: bold;
	font-family: monospace;
	color: rgb(252, 66, 66);
}

.ct-code-b-blue {
	font-weight: bold;
	font-family: monospace;
	color: blue;
}

.ct-code-b-black {
	font-weight: bold;
	font-family: monospace;
	color: balck;
}

</style>
</head>
<body>
	<div class = "ct-box-main">
		 <div class = "text-center">
			<h1 class = "label ct-demo-heading text-center">Find the Largest of Three Numbers</h1>
		</div> 
		<div class = 'buttons-div'>
			<button type = "button" class = "btn btn-warning visibility-hidden" id = "restartBtn">Restart</button>
		</div> 
		<div class = "col-xs-12 padding0">
			<div id = "codeDiv" class = "col-xs-8 col-xs-offset-2 margin-top padding0">
				<pre id = "programForLargestNumber" class = "workspace"><span id = "headerFile">#include &lt;stdio.h&gt;</span>
	<span id="mainMethod">void main() {</span>
		<span id = "numberDeclaration1">int <span id = "declaration1">num1</span> = <div style="display:inline-block" class = "text-center element" id = "number1" contenteditable = "true" maxlength = "3" spellcheck = "false">56</div>;</span>
		<span id = "numberDeclaration2">int <span id = "declaration2">num2</span> = <div style="display:inline-block" class = "text-center element" id = "number2" contenteditable = "true" maxlength = "3" spellcheck = "false">26</div>;</span>
		<span id = "numberDeclaration3">int <span id = "declaration3">num3</span> = <div style="display:inline-block" class = "text-center element" id = "number3" contenteditable = "true" maxlength = "3" spellcheck = "false">55</div>;</span>
		<span id = "condition">int <span id = "declaration4">largestValue</span> = (((num1 &gt; num2) &amp;&amp; (num1 &gt; num3)) ? num1 : (num2 > num3) ? num2 : num3);</span>
		<span id="printStatement">printf("The largest number is: %d",largestValue);</span>
	<span id = "closeBrace">}</span>
				</pre>
			</div>
  			<div class = "col-xs-10 col-xs-offset-1 padding0">
    			<div id = "animationDiv" class = "margin-top">
    				<div class = "col-xs-10 col-xs-offset-1 padding0" id = "conditionAimation">
    					<div class = "margin-top padding0" id = "condition">
							<div class="col-xs-2 max-div">largestValue  = &nbsp;</div>
								<div class = "col-xs-10 max-value-div padding0">
									<span class="ct-code-b-black">(</span>
									<span id = "firstCondition">
										<span class="ct-code-b-black">(</span>
										<span id="firstStep">
										<span class="ct-code-b-black">(</span>
										<span class = "num" id ='num1'>num1</span>
										<span id = "gt">&gt;</span>
										<span class = "num" id = 'num2'>num2</span>
										<span class="ct-code-b-black">)</span></span>
										<span id = "and" class="ct-code-b-black">&&</span>
										<span id="secondStep">
										<span class="ct-code-b-black">(</span>
										<span class = "num" id = 'num3'>num1</span>
										<span id = "gt1">&gt;</span>
										<span class = "num" id = 'num4'>num3</span>
										<span class="ct-code-b-black">)</span></span>
										<span class="ct-code-b-black">)</span>
									</span>
									<span class="ct-code-b-blue">?</span>
									<span class = "num" id = "n1">num1</span>
									<span class="ct-code-b-blue">:</span>
									<span id = "innerCondition">
										<span id = "innerCon">
										<span id="thirdStep">
										<span class="ct-code-b-black">(</span>
										 <span class = "num" id = 'num5'>num2</span>
										<span>&gt;</span>
										<span class = "num" id = 'num6'>num3</span>
										<span class="ct-code-b-black">)</span></span></span>
										<span class="ct-code-b-blue">?</span>
										<span class = "num" id = "n2">num2</span>
										<span class="ct-code-b-blue">:</span>
										<span class = "num" id = "n3">num3</span>
									</span>
									<span class="ct-code-b-black">)</span>
								</div>	 	 
						</div>
    				</div>
				</div>
				<div class="col-xs-12">
					<div class="col-xs-3 col-xs-offset-4">
		  				<div class="panel-primary output-div margin-left" id="outputDiv">
	    					<div class="panel-heading text-center" id="outputDiv">Output</div>
	    					<div class="panel panel-body">
	    						<div class="output col-xs-12">
	    							<div class="col-xs-12">
	    								<span id="outputText" class=""></span>
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
		largestOfThreeNumbersProgramReady();
	});
	
</script>
</body>
</html>