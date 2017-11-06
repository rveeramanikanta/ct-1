<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js"></script>	
<script src="/js/typewriting.min.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/secure/lang/c/js-min/nps.min.js"></script>

<title>printf.jsp</title>

<style type="text/css">

.introjs-tooltip {
	min-width: 245px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.introjs-duplicate-nextbutton {
	background-color: green;
}

.box-border {
	border-radius: 8px;
	border: 2px solid gray;
}

.buttons-div {
	margin-top: 20px;
	margin-bottom: 5px;
	text-align: center;
}

div, span {
	position: relative;
}

.creamPreTab4 {
	margin: 8px;
	tab-size: 2;
	padding: 10px;
	font-size: 13px;
	white-space: pre;
	-moz-tab-size: 6;
	border-radius: 8px;
	background-color: #fffae6;
}

#animationDiv {
    min-height: 85px;
    display: flex;
    align-items: center;
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

.panel-primary>.panel-heading {
	color: #000;
	border-color: lightgray;
	background-color: lightgray;
}

.number-div>.number-div {
	color: white;
	font-width: bold;
	margin-top: 12px;
	background-color: #337ab7;
}

.number-div>.number-body {
	color: #e60073;
	font-width: bold;
	min-height: 31px;
	background-color: white;
	border-color: lightgray;
}

.circle-css {
	border: 1px solid #ff66b3;
	border-radius: 50%;
	padding: 1px;
	position: relative;
	z-index: 9999999;
}

.output {
	color: white;
}

#outputDiv {
	margin-top: 12px;
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

@
keyframes blink { 50% {
	background: blue;
}
}

.outputAppendedDiv {
	color: #e60073;
	font-weight: bold;
}

.position {
	position: relative;
	display: inline-block;
}

.opacity00 {
	opacity: 0px;
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
</style>
</head>
<body>
	<div class="col-xs-12">
		<div class="ct-box-main">
			<div class="text-center">
				<h1 class="label ct-demo-heading text-center">Additional
					Features of printf()</h1>
			</div>
			<div class='buttons-div'>
				<button type="button" class="btn btn-warning visibility-hidden"
					id="restartBtn">Restart</button>
			</div>
			<div class="col-xs-12">
				<div class="col-xs-4 col-xs-offset-2">
					<div id="codeDiv" class="margin-top">
						<pre class='creamPreTab4' id="code">
<span id='VariableDeclararion1'>int <span id="value1">a</span> = <div style="display: inline-block" id='number1' contenteditable='true' , spellcheck='false', maxlength='3'>14</div>, b = <div style="display: inline-block" id='number2' contenteditable='true' , spellcheck='false', maxlength='3'>24</div>;</span>
<div style="display: inline-block" id="sopLine3">printf("<span id="persentageD3">%d</span>", <span id="innerPrintf3">printf("<span id="persentageD1">%d</span><span id="separateOperator">,</span><span id="persentageD2">%d</span>", <span id="aValue">a</span>, <span id="bValue">b</span>)</span>);</div>
<div style="display: inline-block" id="sopLine4">printf("<span id="persentageD4">%d</span>", <span style="display:inline-block" id="innerPrintf4">printf("<span id='number4' contenteditable='true' , spellcheck='false' , maxlength='10' arrayLength='0'>Codetantra</span>")</span>);</div>
						</pre>
					</div>
				</div>
				<div class="col-xs-4">
					<div class="col-xs-10 box-border margin-top padding00" id="animationDiv">
						<div class="col-xs-12 padding00" id="address">
							<div id="numberDiv1" class="col-xs-6 padding00">
					    		<div class="panel-primary number-div opacity00" id="addressDiv1">
	    							<div class="panel-heading text-center number-div">
	    								<span id="aValueAnimation">a</span>
	    							</div>
	    							<div class="panel panel-body number-body text-center">
	    								<span class="text-center" id="addressValue1"></span>
	    							</div>
					    		</div>
					    	</div>
					    	<div id="numberDiv2" class="col-xs-6 padding00">
					    		<div class="panel-primary number-div opacity00" id="addressDiv2">
	    							<div class="panel-heading text-center number-div">
	    								<span id="bValueAnimation">b</span>
	    							</div>
	    							<div class="panel panel-body number-body text-center">
	    								<span class="text-center" id="addressValue2"></span>
	    							</div>
					    		</div>
					    	</div>
						</div>
					</div>
				</div>
				<div class="col-xs-12">
					<div class="col-xs-12">
						<div class="col-xs-4 col-xs-offset-6">
							<div class="panel-primary output-div margin-left" id="outputDiv">
								<div class="panel-heading text-center" id="outputDiv">Output</div>
								<div class="panel panel-body">
									<div class="output col-xs-12">
										<span id="innerPrintfValue"><span id="outputAValue"></span>
										<div style="display:inline-block" id="outputComma"></div>
										<span id="outputBValue"></span></span>
										<span id="outputCountAandBValue"></span>
									</div>
									<div class="output col-xs-12">
										<span id="innerPrintfText"></span>&nbsp;
										<span id="totalCharacters"></span>
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
		nestedPrintfStatementsReady();
	});
</script>
</body>
</html>