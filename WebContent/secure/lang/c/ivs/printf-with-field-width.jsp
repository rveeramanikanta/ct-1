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
<script src="/secure/lang/c/js/printf-with-field-width.js""></script>

<title>printf.jsp</title>

<style type="text/css">

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

div,span {
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

[contenteditable="true"] {
    outline: medium none;
}

.outputAppendedDiv3 {
    margin-left: -13px;
}

.panel-heading {
    padding: 2px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
}

.panel-body {
    min-height: 90px;
    padding: 2px 0 0;
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
	min-height: 30px;
	background-color: white;
	border-color: lightgray;
}
 
 .output {
    color: white;
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

.margin-top {
	margin-top: 12px;
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

#printfDefinition {
	line-height: 1.5;
}

.ct-code-b-green {
	font-weight: bold;
	font-family: monospace;
	color: green;
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

.padding00 {
	padding: 0px;
}

.ct-code-b-white {
	font-weight: bold;
	font-family: monospace;
	color: white;
}

.bottom-border {
    border-bottom: 1px solid green;
    margin: 0.6px;
}

#example {
    border-radius: 4px;
    padding: 2px;
}

.introjs-fixParent {
	position: relative !important;
}
#printfDefinition{
    font-family:monospace;
}

.val-enter {
    min-width: 10px;
    text-align: center;
	display: inline-block;
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
				<div class="col-xs-8 col-xs-offset-2 margin-top" id="printfDefinition">
					<ul><li id="text1" class="opacity00">The <span class="ct-code-b-green">printf()</span> function allows for printing a 
						number with a specified <span class="ct-code-b-green">field width</span>. While printing a number 
						we have to include the <span class="ct-code-b-green">field width</span> in-between the
						<span class="ct-code-b-green">%</span> and the <span class="ct-code-b-green">d</span> format characters.</li>
					<li id="text2" class="opacity00">If the number of characters of the 
						 output data is <span class = "ct-code-b-green">less than</span>
						 the specified <span class = "ct-code-b-green">field width</span> then the output is
						  printed with leading <span class="ct-code-b-green">blank spaces</span> to fill the specified
						   <span class="ct-code-b-green">field width</span>.</li>
					<li id="text3" class="opacity00"><span class = "ct-code-b-green">For example</span>: If we are trying to print
						 <span class = "ct-code-b-green">23</span>, using a field width <span class = "ct-code-b-green">5</span>
						  specified by <span class = "ct-code-b-green">%5d</span>, finally we get the output as :<br>
						 <span class="ct-code-b-white"><span id="example" style="background: black"><span id="blankSpc">_ _ _</span>23</span></span>      
					<li id="text4" class="opacity00">If the number of characters of the output data is
						 <span class="ct-code-b-green">more than</span>
						 the <span class="ct-code-b-green">field width</span> then the output is printed as it is 
						 <span class="ct-code-b-green">without loss</span> of accuracy.
						 <a class="introjs-button introjs-duplicate-nextbutton opacity00">Next &#8594;</a></li></ul>
				</div>
			</div>
			<div class="col-xs-12 margin-top">
				<div class="col-xs-4 col-xs-offset-2 padding00">
					<div id="codeDiv"  class="box-borde opacity00">
						<pre class='creamPreTab4' id="program">
<span id='VariableDeclararion'>int <span id="value1">a</span> = <span id='number1'>14</span>;</span>
<span id="sopLine1">printf("<span id="persentageD1" >%d</span>", <span id="aValue1">a</span>);</span>
<span id="sopLine2">printf("\n<span id="persentageD2" >%2d</span>", <span id="aValue2">999</span>);</span>
<span id="sopLine3">printf("\n<span id="persentageD3" >%<div class="val-enter" id='number3' contenteditable='true', spellcheck='false', maxlength='1'>6</div>d</span>",<span id="aValue3">a</span>);</span></pre>
					</div>
				</div>
				<div class="col-xs-2 col-xs-offset-1">
					<div class="col-xs-10 box-border margin-top opacity00" id="animationDiv">
						<div class="col-xs-10 col-xs-offset-1 padding00">
							<div class="col-xs-12 padding00" id="address">
								<div id="numberDiv1" class="col-xs-12 padding00 opacity00">
					    			<div class="panel-primary number-div" id="addressDiv1">
	    								<div class="panel-heading text-center number-div">
	    									<span id="aValueAnimation">a</span>
	    								</div>
	    								<div class="panel panel-body number-body text-center">
	    									<span class="text-center" id="addressValue1">14</span>
	    								</div>
					    			</div>
					    		</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div class="col-xs-4 col-xs-offset-4">
			  		<div class="panel-primary output-div margin-left opacity00" id="outputDiv">
		    			<div class="panel-heading text-center" id="outputDiv">Output</div>
		    			<div class="panel panel-body">
		    				<div class="output col-xs-12">
		    					<div id="appendDiv1"><span id="outputAValue1"></span></div>
		    					<div id="appendDiv2"><span id="outputAValue2"></span></div>
			    				<div id="appendDiv3" class="col-xs-5 outputAppendedDiv3">
		    							<span id="outputAValue3"></span>
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
		printfWithFieldWidthReady();
	});
</script>
</body>
</html>