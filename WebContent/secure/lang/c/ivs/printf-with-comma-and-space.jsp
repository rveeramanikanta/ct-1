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
<script src="/secure/lang/c/js/printf-with-comma-and-space.js"></script>

<title>printf.jsp</title>

<style type="text/css">
.introjs-tooltiptext br {
	margin: 15px;
}

.introjs-tooltip {
	min-width: 300px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.introjs-duplicate-nextbutton {
	background-color: green;
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
    height: 132px;
}

#address {
    margin-top: 12px;
}

#printfDefinition {
	height: 65px;
	margin-bottom: 12px;
}

[contenteditable="true"] {
    outline: medium none;
}

.panel-heading {
    padding: 2px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
}

.panel-body {
    min-height: 90px;
    padding: 4px 0 0;
}

.panel {
 	border-radius: 0px;
    background-color: #000;
    border: 1px solid transparent;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
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
}
 
 .output {
    color: white;
}

#outputDiv {
    margin-top: 12px;
}

.address-text {
	margin-top: -13px;
}

.ui-effects-transfer {
    border: 1px solid blue;
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

.ct-code-b-red {
	font-weight: bold;
	font-family: monospace;
	color: rgb(252, 66, 66);
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

#aValueAnimation, #bValueAnimation {
    left: 54px;
    top: 22px;
    z-index: 1000000;
    color: red;
}
</style>
</head>
<body>
	<div class = "col-xs-12">
		<div class = "ct-box-main">
			<div class = "text-center">
				<h1 class = "label ct-demo-heading text-center">Additional Features of  printf()</h1>
			</div> 
			<div class = 'buttons-div'>
				<button type = "button" class = "btn btn-warning visibility-hidden" id = "restartBtn">Restart</button>
			</div> 
			<div class="col-xs-12">
				<div id="printfDefinition" class="col-xs-6 col-xs-offset-3 box-border"></div>
			</div>
			<div class = "col-xs-12 margin-top">
				<div class = "col-xs-4 col-xs-offset-1">
					<div id = "codeDiv"  class = "box-border opacity00">
						<pre class = 'creamPreTab4'>
<span id = 'VariableDeclararion1'>int <span id = "value1">aValue</span> = <span id='number1' contenteditable='true', spellcheck='false', maxlength='3'>14</span>;</span>
<span id = 'VariableDeclararion2'>int <span id = "value2">bValue</span> = <span id='number2' contenteditable='true', spellcheck='false', maxlength='3'>24</span>;</span>
<span id = "sopLine3">printf("<span id = "outputText">print aValue and bValue</span>);</span>
<span id = "sopLine4">printf("\n<span id = "persentage4" >%d</span><span id = "persentageD4" >%d</span>", <span id = "aValue4">aValue</span>, <span id = "bValue4">bValue</span>);</span>
<span id = "sopLine5">printf("\n<span id = "persentage5">%d</span><span id = "comma5">,</span><span id = "persentageD5" >%d</span>", <span id = "aValue5">aValue</span>, <span id = "bValue5">bValue</span>);</span>
<span id = "sopLine6">printf("\n<span id = "persentage6" >%d</span><span id = "blankSpace6"> </span><span id = "persentageD6" >%d</span>", <span id = "aValue6">aValue</span>, <span id = "bValue6">bValue</span>);</span>

						</pre>
					</div>
				</div>
				<div class = "col-xs-5">
					<div class = "col-xs-12 box-border opacity00" id = "animationDiv">
						<div class = "col-xs-8 col-xs-offset-2">
							<div class = "col-xs-12" id = "address">
								<div id="numberDiv1" class="col-xs-6" style="opacity: 0">
									<span id="aValueAnimation" class = "visibility-hidden">aValue</span>
					    			<div class="panel-primary number-div" id = "addressDiv1">
	    								<div class="panel-heading text-center number-div">aValue</div>
	    								<div class="panel panel-body number-body text-center">
	    									<span class="text-center" id="addressValue1"></span>
	    								</div>
					    			</div>
					    			<div id="address1" class="address-text text-center"></div>
					    		</div>
					    		<div id="numberDiv2" class="col-xs-6" style="opacity: 0"> 
					    		<span id="bValueAnimation" class = "visibility-hidden">bValue</span>
					    			<div class="panel-primary number-div" id = "addressDiv2">
	    								<div class="panel-heading text-center number-div">bValue</div>
	    								<div class="panel panel-body number-body text-center">
	    									<span class="text-center" id="addressValue2"></span>
	    								</div>
					    			</div>
					    			<div id="address2" class="address-text text-center"></div>
					    		</div>
							</div>
						</div>
					</div>
					<div class = "col-xs-12">
						<div class="col-xs-12">
				  			<div class="panel-primary output-div margin-left opacity00" id="outputDiv">
			    				<div class="panel-heading text-center" id="outputDiv">Output</div>
			    				<div class="panel panel-body">
			    					<div class="output col-xs-12">
			    						<div id = "appendDiv3" class = "visibility-hidden"><span id = "outputAValue0"></span></div>
				    						<div id = "appendDiv4"><span id = "outputAValue1"></span><span id = "outputBValue1"></span></div>
				    						<div id = "appendDiv5"><span id = "outputAValue2"></span><span id = "comma"></span><span id = "outputBValue2"></span></div>
				    						<div id = "appendDiv6"><span id = "outputAValue3"></span> <span id = "blankSpace"> </span><span id = "outputBValue3"></span></div>
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
		printfWithCommaAndSpaceReady();
	});
</script>
</body>
</html>