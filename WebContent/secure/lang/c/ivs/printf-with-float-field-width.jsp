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
<script src="/secure/lang/c/js-min/pwffw.min.js"></script>

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
	margin: 0 5px !important;
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

div, span {
	position: relative;
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
	min-height: 85px;
	display: flex;
	align-items: center;
}

#printfDefinition {
	margin-bottom: 12px;
}

.padding00 {
	padding: 0;
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
	background-color: #337ab7;
}

.number-div>.number-body {
	color: black;
	font-width: bold;
	min-height: 31px;
	background-color: white;
	border-color: lightgray;
}

.margin-top {
	margin-top: 12px;
}

.output {
	color: white;
	font-family: monospace;
}

#outputDiv {
	margin-top: 12px;
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

@
keyframes blink { 50% {
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

.ct-code-b-white {
	font-weight: bold;
	font-family: monospace;
	color: white;
}

.ct-code-b-green {
	font-weight: bold;
	font-family: monospace;
	color: green;
}

#example {
    border-radius: 4px;
    padding: 2px;
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
	margin: 0.9px;
}
</style>

</head>
<body>


<script type="text/javascript">
	$(document).ready(function() {
		printfWithFloatFieldWidthReady();
	});
</script>



	<div class="col-xs-12">
		<div class="ct-box-main">
			<div class="text-center">
				<h1 class="label ct-demo-heading text-center">Additional
					features of printf()</h1>
			</div>
			<div class='buttons-div'>
				<button type="button" class="btn btn-warning visibility-hidden"
					id="restartBtn">Restart</button>
			</div>
			<div class="col-xs-12">
				<div class="col-xs-6 col-xs-offset-3 margin-top" id="printfDefinition">
					
				
					<ul><li id="text1">The <span class="ct-code-b-green">printf()</span> function allows for printing a
							<span class="ct-code-b-green">float number</span> using the format character
							<span class="ct-code-b-green"> %f</span>.
							While printing a <span class="ct-code-b-green">float number</span>using the format character
							<span class="ct-code-b-green">%f</span> we can also specifier
							<span class="ct-code-b-green">field width</span> in between
							<span class="ct-code-b-green">%</span> and the <span class="ct-code-b-green">f</span> format character. 
							also specifier <span class="ct-code-b-green">field width</span>.</li>
						<li id="text2">For example, we are trying to 
						print <span class="ct-code-b-green">65.3536</span>, using a field width
						<span class="ct-code-b-green">8.3</span> specified by 
						<span class="ct-code-b-green">%8.3f</span>, we get the output as:<span class="ct-code-b-white">
						<span id="example" style="background: black">_ _65.354</span></span>
						<a class="introjs-button introjs-duplicate-nextbutton opacity00">Next &#8594;</a></li></ul>
				</div>
			</div>
			<div class="col-xs-12 opacity00" id="contentOfPage">
				<div class="col-xs-5 col-xs-offset-1">
					<div id="codeDiv" class="margin-top">
						<pre class='creamPreTab4'>
<span id='VariableDeclararion1'>float <span id="value1">a</span> = <span id='number1'>98.7654</span>f;</span>
<span id='VariableDeclararion2'>float <span id="value2">b</span> = <span id='number2'>198.7654</span>f;</span>
<span id="sopLine1">printf("<span id="persentageD1">%f</span>\n", <span id="aValue1">a</span>);</span>
<span id="sopLine2">printf("<span id="persentageD2">%<span id='number2'><span id="seven2">7</span>.4</span>f</span>\n",<span id="aValue2">a</span>);</span>
<span id="sopLine3">printf("<span id="persentageD3">%<span id='number3'><span id="seven3">7</span>.4</span>f</span>\n",<span id="aValue3">b</span>);</span>
<span id="sopLine4">printf("\n<span id="persentageD4">%<span id='number4'><span id="seven4">8</span>.2</span>f</span>",<span id="aValue4">a</span>);</span></pre>
<!-- <span id="sopLine4">printf("\n<span id="persentageD4">%<span id='number4'><span id="seven4">10</span>.2</span>e</span>",<span id="aValue4">a</span>);</span> -->
					</div>
				</div>
				<div class="col-xs-5">
					<div class="col-xs-10 box-border" id="animationDiv">
						<div class="col-xs-12 padding00">
							<div class="col-xs-12 padding00" id="address">
								<div id="numberDiv1" class="col-xs-5 opacity00 margin-top">
									<div class="panel-primary number-div" id="addressDiv1">
										<div class="panel-heading text-center number-div">
											<span id="aValueAnimation">a</span>
										</div>
										<div class="panel panel-body number-body text-center">
											<span class="text-center" id="addressValue1"> <span
												id="span1">9</span><span id="span2">8</span> <span
												id="span3">.</span><span id="span4">7</span><span id="span5">6</span><span
												id="span6">5</span><span id="span7">4</span>
											</span>
										</div>
									</div>
								</div>
								<div id="numberDiv2" class="col-xs-5 col-xs-offset-1 opacity00 margin-top">
									<div class="panel-primary number-div" id="addressDiv2">
										<div class="panel-heading text-center number-div">
											<span id="aValueAnimation">b</span>
										</div>
										<div class="panel panel-body number-body text-center">
											<span class="text-center" id="addressValue1">
											<span id="span1">1</span><span id="span2">9</span><span id="span3">8</span>
											<span id="span4">.</span><span id="span5">7</span><span id="span6">6</span><span 
											id="span7">5</span><span id="span8">4</span>
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xs-10">
						<div class="panel-primary output-div margin-left" id="outputDiv">
							<div class="panel-heading text-center" id="outputDiv">Output</div>
							<div class="panel panel-body">
								<div class="output col-xs-12">
									<div id="appendDiv1" class="visibility-hidden">
										<span id="outputAValue1"></span>
									</div>
									<div class="mardin-left">
										<div id="appendDiv2">
											<span class="opacity00" id="outputAValue2"></span>
										</div>
										<div id="appendDiv3"></div>
										<div id="appendDiv4"></div>
										<div id="appendDiv5"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>