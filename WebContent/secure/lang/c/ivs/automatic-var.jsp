<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link href="/css/font-awesome.min.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/animate.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<!-- <script src="/secure/lang/c/js-min/av.min.js"></script> -->
<script src="/secure/lang/c/js/automatic-var.js"></script>
<title>Automatic Variables</title>

<style type="text/css">

.introjs-duplicate-nextbutton {
	background-color: green;
	margin: 0!important;
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

div,span {
	position: relative;
}

.creamPreTab4 {
    padding: 5px;
	tab-size: 4;
	-moz-tab-size: 4;
	margin : 5px;
    border-radius: 8px;
    background-color: #fffae6;
    font-family: monospace;
}

#animationDiv {
    min-height: 275px;
}

.panel-heading {
    padding: 2px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
}

.panel-body {
    min-height: 100px;
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
    font-family: monospace;
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

.circle-css {
	border: 1px solid #ff66b3;
	border-radius: 50%;
	padding: 1px;
	position: relative;
	z-index: 9999999;
}

#aValueAnimation, #bValueAnimation {
    left: 54px;
    top: 22px;
    z-index: 1000000;
    color: red;
}

#mainMemory {
	height: 100px;
}

#functionMemory {
	height: 100px;
}

.padding0 {
	padding: 0;
}

.ct-code-b-green {
	color: green;
	font-family: monospace;
	font-weight: bold;
}

.margin10 {
	margin-top: 10px!important;
}

.ct-blue-color {
	font-weight: bold;
}

.explanation {
	margin-bottom: 20px;
	margin-top:10px;
	padding: 8px;
	font-family: monospace;
}

.ct-green-color {
	color: green;
	font-weight: bold;
}

y {
	font-weight: bold;
	color: yellow;
}
</style>
</head>

<body>
	<div class="col-xs-12">
		<div class="ct-box-main">
			<div class="text-center"><h1 class="label ct-demo-heading text-center">Automatic Variables</h1></div> 
			<div class='buttons-div'><button type="button" class="btn btn-warning visibility-hidden" id="restartBtn">Restart</button></div> 
			<div id="printDefinition" class="col-xs-8 col-xs-offset-2 box-border visibility-hidden padding0 explanation">
				<ul>
					<li id=line1 class='opacity00'><span class='ct-code-b-green'>Automatic or local variables</span> are declared inside a function.</li>
					<li id=line2 class='opacity00'><span class='ct-code-b-green'>Automatic variables</span> are created when a call to the function
						 is made and <span class='ct-code-b-green'>destroyed</span> automatically when the function exists.</li>
					<li id=line3 class='opacity00'>The <span class='ct-code-b-green'>scope</span> of a local variable is only within the 
						<span class='ct-code-b-green'>function</span>.
						<span id=button1><a style="background-color:green" class="introjs-button introjs-duplicate-nextbutton" onclick="animate1()">
						Next &#8594;</a></span></li>
				</ul>
			</div>
		</div>
		<div class="col-xs-12">
			<div class="col-xs-6 padding0">
				<div id="codeDiv"  class="box-border margin-top">
					<pre class='creamPreTab4'>
	<span id='functionDeclaration'>void ganga();</span>						
	<span id="mainDeclaration">void <b class='ct-blue-color'>main()</b></span>	{
	    <span id="automainDeclaration"><span id="autoDeclaration" class='ct-green-color'>auto</span> <span id='autoDeclaration1'>int <span id="value1">a;</span></span></span>						
	    <span id='variableDeclaration1'>a = <span id="number1">10</span>;</span>
	    <span id='functionDeclaration1'>ganga();</span>
	    <span id="sopLine1">printf("The local variable value within main() = <span id="percentage1">%d</span>\n"<span id="comma1">, </span><span id="aValue1">a</span>);</span>
	<span id="closeBrace">}</span><br>
	<span id="mainfunctionDeclaration">void <b class='ct-blue-color'>ganga()</b></span> {
	    <span id='variableDeclaration2'>int a = <span id="number3">15</span>;</span>
	    <span id="sopLine2">printf("The local variable value within ganga() = <span id="percentage2">%d</span>\n"<span id="comma2">, </span><span id="aValue2">a</span>);</span>
	<span id="closeBrace1">}</span></pre>
					</div>
				</div>
				<div class="col-xs-3 col-xs-offset-1 box-border opacity00" id="animationDiv">
					<div class="col-xs-12 padding0">
						<div id="mainmemoryheading" class='text-center opacity00'>In main()</div>
						<div class="col-xs-12 padding0 visibility-hidden" id="mainMemory">
							<div id="numberDiv1" class="col-xs-offset-4 col-xs-4 margin10">
				    			<div class="panel-primary number-div opacity00"  id="addressDiv1">
    								<div class="panel-heading text-center number-div"><span id="aheading1">a</span></div>
    								<div class="panel panel-body number-body text-center">
    									<span class="text-center" id="addressValue1"></span>
    								</div>
				    			</div>
				    		</div>
				    		<!-- <div id="numberDiv2" class="col-xs-offset-2 col-xs-4 margin10"> 
				    		<span id="bValueAnimation" class=""></span>
				    			<div class="panel-primary number-div visibility-hidden" id="addressDiv2">
    								<div class="panel-heading text-center number-div">b</div>
    								<div class="panel panel-body number-body text-center">
    									<span class="text-center" id="addressValue2"></span>
    								</div>
				    			</div>
				    		</div> -->
				    	</div>
			
				    	<div class="col-xs-12 padding0 visibility-hidden" id="functionMemory">
				    	<div id="functionmemoryheading" class='margin10 text-center'>In ganga()</div>
				    		<div id="numberDiv3" class="col-xs-offset-4 col-xs-4"> 
				    		<span id="aValueAnimation" class="visibility-hidden"></span>
				    			<div class="panel-primary number-div visibility-hidden margin10" id="addressDiv3">
    								<div class="panel-heading text-center number-div"><span id="aheading">a</span></div>
    								<div class="panel panel-body number-body text-center">
    									<span class="text-center" id="addressValue3"></span>
    								</div>
				    			</div>
				    		</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xs-12">
				<div class="col-xs-offset-4 col-xs-4">
		  			<div class="panel-primary output-div margin-left opacity00" id="outputDiv">
	    				<div class="panel-heading text-center" id="outputDiv">Output</div>
	    				<div class="panel panel-body">
	    					<div class="output col-xs-12">
	    						<div id="appendDiv1"><span id="outputAValue1"></span></div>
	    						<div id="appendDiv2"><span id="outputAValue2"></span></div>
	    					</div>
	    				</div>
	  				</div>
	 			</div>
			</div>
		</div>
<script>
	$(document).ready(function() {
		automaticVarReady();
	});
</script>
</body>
</html>