<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link href="/css/font-awesome.min.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<!-- <script src="/secure/lang/c/js-min/rv.min.js" type="text/javascript"></script> -->
<script src="/secure/lang/jdbc/js/register-variable.js" type="text/javascript"></script>

<title>register variable</title>

<style type="text/css">

.introjs-duplicate-nextbutton {
	background-color: green;
	margin: 0!important;
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
    padding: 5px;
    font-size: 13px;
    white-space: pre;
	tab-size: 6;
    border-radius: 8px;
    background-color: #fffae6;
    overflow: hidden;
}

#animationDiv {
    height: 130px;
}

.panel-heading {
    padding: 2px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
}

.panel-body {
    min-height: 120px;
    padding: 4px 0 0;
}

.panel {
 	border-radius: 0px;
    background-color: #000;
    border: 1px solid transparent;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    margin: 0;
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

.circle-css {
	border: 1px solid #ff66b3;
	border-radius: 50%;
	padding: 1px;
	position: relative;
	z-index: 9999999;
}

#mainMemory {
	height : 100px;
}

.padding0 {
	padding : 0;
}

#numberDiv1 {
	margin-top : 19px;
}

.margin20 {
	margin-top : 20px;
}

.ct-code-b-green {
	color: green;
	font-family: monospace;
	font-weight: bold;
}

y {
	font-weight: bold;
	color: yellow;
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
				<h1 class="label ct-demo-heading text-center">Register variable</h1>
			</div> 
			<div class='buttons-div'>
				<button type="button" class="btn btn-warning visibility-hidden" id="restartBtn">Restart</button>
			</div> 
			<div class="col-xs-12">
				<div id="printDefinition" class="col-xs-8 col-xs-offset-2 box-border visibility-hidden padding0" 
					style='margin-bottom:20px; margin-top:10px; font-family: monospace; padding: 8px;'>
					<ul>
						<li id=line1 class='opacity00'><span class='ct-code-b-green'>The register variables</span> are stored in the 
							CPU registers for faster access and retrieval.</li>
						<li id=line2 class='opacity00'>The register variables follow the same rules of scope as <span class='ct-code-b-green'>automatic variables</span>.</li>
						<li id=line3 class='opacity00'>The register variables are marked with <span class='ct-code-b-green'>register</span> 
							 keyword. <span id=button1><a style="background-color:green" class="introjs-button introjs-duplicate-nextbutton"
								 onclick="animate1()">Next &#8594;</a></span></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="col-xs-12">
				<div class="col-xs-offset-1 col-xs-4 padding0">
					<div id="codeDiv"  class="box-border margin-top">
						<pre class='creamPreTab4'>
						
	<span id="mainDeclaration">void <b class='ct-blue-color'>main()</b></span> <span id="openBrace">{</span>
	    <span id="registermainDeclaration"><span class='ct-code-b-green'>register</span> int <span id="value1">i;</span></span>						
	    <div id='formainDeclaration' style="display: inline-block;"><span id='forDeclaration'>for (<span id='i1'>i = <span id='one'>1</span></span>; <span id='iCondition'>i <= 5</span>; <span id='iIncrement'>i++</span>)</span></div> <span id="openBrace1">{</span>
		 <span id="sopLine1" class=" introjs-showElement">printf("%d\n", i);</span>
	    <span id="closeBrace1">}</span>
	<span id="closeBrace">}</span><br>
</pre>
					</div>
					<div class=" col-xs-offset-1 col-xs-10  margin20" id="animationDiv">
						<div class="col-xs-12 padding0">
							<div id="mainmemoryheading" class='text-center opacity00'>In register</div>
							<div class="col-xs-offset-2 col-xs-8 padding0 visibility-hidden" id="mainMemory">
								<div id="numberDiv1" class="col-xs-offset-3 col-xs-6" >
					    			<div class="panel-primary number-div visibility-hidden"  id="addressDiv1">
	    								<div class="panel-heading text-center number-div"><span id="aheading1">i</span></div>
	    								<div class="panel panel-body number-body text-center">
	    									<span class="text-center" id="addressValue1"></span>
	    								</div>
					    			</div>
					    		</div>
					    	</div>
						</div>
					</div>	
				</div>
				<div class="col-xs-5">
					<div class="col-xs-12 padding0">
						<div class="col-xs-offset-2 col-xs-8">
				  		<div class="panel-primary output-div margin-left" id="outputDiv">
		    				<div class="panel-heading text-center" id="outputDiv">Output</div>
		    				<div class="panel panel-body">
			    					<div class="output col-xs-12 ct-code-b-yellow" style="font-weight: bold">
			    					</div>
			    				</div>
			  				</div>
			 			</div> 
					</div>
				</div>
			</div>
		</div>
	</div>

<script>
	$(document).ready(function() {
		registerVariableReady();
	});
</script>
</body>
</html>