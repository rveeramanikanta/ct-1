
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
<script src="/secure/lang/c/js-min/pwbs.min.js"></script>

<title>printf.jsp</title>

<style type="text/css">
.introjs-tooltiptext br {
	content: "";
    margin-top: 10px;
    display: block;
}

.introjs-tooltip {
	min-width: 300px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.introjs-duplicate-nextbutton {
	background-color: green;
	line-height: 1.5;
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

div,span {
	position: relative;
}

.margin-top {
    margin-top: 12px;
}

.creamPreTab4 {
    margin: 8px;
    padding: 10px;
    font-size: 13px;
    white-space: pre;
	-moz-tab-size: 6;
    border-radius: 8px;
    background-color: #fffae6;
}

#animationDiv {
    min-height: 162px;
    display: flex;
    align-items: center;
}

#printfDefinition {
	line-height: 1.5;
}

.panel-heading {
    padding: 2px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
}

.panel-body {
    min-height: 110px;
    padding: 4px 0 0;
}

.panel {
 	border-radius: 0px;
    background-color: #000;
    border: 1px solid transparent;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    margin-bottom: 0;
}

.panel-primary > .panel-heading {
    color: #000;
    border-color: lightgray;
    background-color: lightgray;
}

.number-div > .number-div {
	color: white;
	font-width: bold;
	background-color: #337ab7;
}

.number-div > .number-body {
	color: black;
	font-width: bold;
	min-height: 31px;
	background-color: white;
	border-color: lightgray;
	border-top: none;
}
 
 .output {
    color: white;
    font-family: monospace;
}

.address-text {
	margin-top: -13px;
}

.ui-effects-transfer {
    border: 1px solid red;
    z-index: 99999999 !important;
 }
 
 .blinking {
	animation-name: blink;
	animation-duration: 1s;
	animation-iteration-count: infinite;
 }

@keyframes blink {
	50% {
		background: blue;
	}
}

.position {
	position: relative;
	display: inline-block;
}

.z-index1000000 {
	position: relative;
	background-color: white;
	z-index: 1000000 !important;
}

.ct-code-b-green {
	font-weight: bold;
	font-family: monospace;
	color: green;
}

.circle-css {
	border: 1px solid #ff66b3;
	border-radius: 50%;
	padding: 1px;
	position: relative;
	z-index: 9999999;
}

.bottom-border {
    border-bottom: 1px solid green;
    margin: 0.6px;
}

.duplicate-value {
    left: 38px;
    top: 22px;
    z-index: 1000000;
    color: red;
}

.padding00 {
	padding: 0px;
}

.introjs-fixParent {
	position: relative !important;
}
</style>
</head>
<body>
	<div class="col-xs-12">
		<div class="ct-box-main">
			<div class="text-center">
				<h1 class="label ct-demo-heading text-center">Additional features of  printf()</h1>
			</div> 
			<div class='buttons-div'>
				<button type="button" class="btn btn-warning visibility-hidden" id="restartBtn">Restart</button>
			</div> 
			<div class="col-xs-12">
				<div id="printfDefinition" class="col-xs-6 col-xs-offset-3 box-border opacity00">
					Let us learn how to use <span class = "ct-code-b-green">comma</span> and 
							<span class = "ct-code-b-green">space </span>
							to separate the values while there are being printed using the
							 <span class = "ct-code-b-green">printf()</span> function.
							<a class="introjs-button introjs-duplicate-nextbutton opacity00">Next &#8594;</a>
				</div>
			</div>
			<div class="col-xs-12 margin-top">
				<div class="col-xs-4 col-xs-offset-1 padding00">
					<div id="codeDiv"  class="box-borde opacity00">
						<pre class='creamPreTab4' id="program">
<div id="variableDeclararionDiv" style=display: inline-block"><span id='VariableDeclararion1'>int <span id="value1">a</span> = <span id='number1'>14</span>;</span>
<span id='VariableDeclararion2'>int <span id="value2">b</span> = <span id='number2'>24</span>;</span>
<span id='VariableDeclararion3'>int <span id="value3">c</span> = <span id='number3'>34</span>;</span>
</div><div id="printfListDiv" style=display: inline-block"><span id="sopLine1">printf("<span id="outputText">Printing a, b and c: </span>");</span>
<span id="sopLine2">printf("\n<span id="persentage2" >%d</span><span id="persentageD2" >%d</span>", <span id="aValue2">a</span>, <span id="bValue2">b</span>);</span>
<span id="sopLine3">printf("\n<span id="persentage3" >%d</span><span id="blankSpace3"> </span><span id="persentageD3" >%d</span>\n", <span id="aValue3">a</span>, <span id="bValue3">b</span>);</span>
<span id="sopLine4">printf("<span id="persentage4">%d</span><span id="comma4">,</span><span id="persentageD4" >%d</span>\n", <span id = "aValue4">a</span>, <span id = "bValue4">b</span>);</span>
<span id="sopLine5">printf("<span id="persentage5">%d</span><span id="comma5">,</span><span id="persentageD5" >%d</span><span id = "blankSpace5"> </span><span id = "persentageDA5" >%d</span>", <span id = "aValue5">a</span>, <span id = "bValue5">b</span>  <span id = "cValue5">c</span>);</span>
</div></pre>
					</div>
				</div>
				<div class = "col-xs-5">
					<div class = "col-xs-12 margin-top">
						<div class = "col-xs-12 box-border opacity00" id = "animationDiv">
							<div class = "col-xs-12">
								<div class = "col-xs-12 " id = "address">
									<div id="numberDiv1" class="col-xs-4 opacity00">
						    			<div class="panel-primary number-div" id = "addressDiv1">
		    								<div class="panel-heading text-center number-div">
		    									<span id="aValueAnimation">a</span>
		    								</div>
		    								<div class="panel panel-body number-body text-center">
		    									<span class="text-center" id="addressValue1">14</span>
		    								</div>
						    			</div>
						    		</div>
						    		<div id="numberDiv2" class="col-xs-4 opacity00"> 
						    			<div class="panel-primary number-div" id = "addressDiv2">
		    								<div class="panel-heading text-center number-div"><span id="bValueAnimation">b</span></div>
		    								<div class="panel panel-body number-body text-center">
		    									<span class="text-center" id="addressValue2">24</span>
		    								</div>
						    			</div>
						    		</div>
						    		<div id="numberDiv3" class="col-xs-4 opacity00"> 
						    			<div class="panel-primary number-div" id = "addressDiv3">
		    								<div class="panel-heading text-center number-div"><span id="cValueAnimation">c</span></div>
		    								<div class="panel panel-body number-body text-center">
		    									<span class="text-center" id="addressValue3">34</span>
		    								</div>
						    			</div>
						    		</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class = "col-xs-12">
				<div class="col-xs-4 col-xs-offset-3">
					<div class="panel-primary output-div margin-left opacity00" id="outputDiv">
			    		<div class="panel-heading text-center margin-top" id="outputDiv">Output</div>
			    		<div class="panel panel-body">
			    			<div class="output col-xs-12">
			    				<div id = "appendDiv1" class = "visibility-hidden"><span id = "outputAValue0"></span></div>
				    			<div id = "appendDiv2"><span id = "outputAValue1"></span><span id = "outputBValue1"></span></div>
				    			<div id = "appendDiv3"><span id = "outputAValue2"></span><span id = "blankSpaceO2"></span><span id = "outputBValue2"></span></div>
				    			<div id = "appendDiv4"><span id = "outputAValue3"></span><span id = "commaO3"></span><span id = "outputBValue3"></span></div>
				    			<div id = "appendDiv5"><span id = "outputAValue4"></span><span id = "commaO4"></span><span id = "outputBValue4"></span><span id = "blankSpaceO4"></span><span id = "outputCValue4"></span></div>
			    			</div>
			    		</div>
			  		</div>
			 	</div>
		 	</div>
		</div>
	</div>

<script type="text/javascript">
	$(document).ready(function() {
		printfWithBlankSpaceReady();
	});
</script>
</body>
</html>