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
<script src="/js/gs/TweenLite.min.js"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/secure/lang/c/js-min/spwif.min.js" type="text/javascript"></script>

<title>sample program of printf with %d</title>
</head>
<style>
#preBody {
	height: 180px;
	-moz-tab-size: 2;
	background-color: #fffae6;
	white-space: pre;
	overflow : aut0;
	font-size : 13px !important;
}

#buttonDiv {
	height: 6px;
	margin-top : 30px;
}

.z-index9999999 {
	z-index : 9999999 !important;
}
.margin20 {
	margin-top : 20px;
}

.padding0 {
	padding : 0px;
}

.introjs-tooltip {
	min-width: 150px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.textDiv {
	margin-top : 80px;
}

.buttons-div {
	margin-top : 30px;
}

 .output {
    color: white;
    font-size : 13px;
}

a:focus, a:hover {
	text-decoration: none !important;
}

.nextBtn1 {
	background-color : green !important;
}

.output-console-title-bar {
	background-image: -moz-linear-gradient(center top, #e8e8e8, #bcbbbc);
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	font-size: 0.75em;
	margin-top: 105px;
	padding: 2px 0;
	text-align: center;
}

.output-console-body {
	background-color: black;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #f0f0f0;
	font-family: monospace;
	font-size: 13px;
	margin-bottom: 14px;
	height: 150px;
}

.opacity00 {
	opacity: 0.0;
	color : black;
}
#blink1 {
	outline : none;
}
body {
	margin-top: 10px;
}

.color-yellow {
	color : yellow;
}

#mainDiv {
	padding:0px!important;
	height : 180px;
	font-size : 10px !important;
}

.panel-heading {
    padding: 2px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
}

.panel-body {
    min-height: 180px;
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
.position {
	position : relative;
}

.positionblock {
	position : relative;
	display : inline-block;
}

.color-green {
	color : green;
}

.textDiv {
	margin-left : 50px !important;
}

#outputDiv {
	z-index: 10000001 !important;
}

#per2 {
	position : relative;
}
</style>

<body>
<script>
	$(document).ready(function() {
		samplePrintfWithIntFloatReady();			
	});
</script>
	<div class="col-xs-offset-2 col-xs-8 text-center" id="buttonDiv">
		<button type="button" class="btn btn-success btn-sm" id="startBtn">Start</button>
		<button type="button" class="btn btn-warning btn-sm hidden"	id="reStartBtn">Restart</button>
	</div>
	<div class="col-sm-11 padding0 textDiv">
		<div class=" col-sm-12 padding0 opacity00" id = "mainDiv">
			<pre class="creamPreTab4 " id="preBody">
<span id="line1">#include &lt;stdio.h&gt;</span>
void <span id="line2"><b>main()</b></span> {
		<span id="line3" class = "position"><b>printf</b>("<span id = 'statement1' class = 'color-green'>Sum of two integers = <span id = 'percent1'>%d</span>\n</span>",<span class = "color-green">(<span id = "arg1">20+30</span>)</span>);</span>
	 	<span id="line4" class = "position"><b>printf</b>("<span id = 'statement2' class = 'color-green'>Product of two float values = <span id = 'percent2'>%f</span>\n</span>",<span class = "color-green">(<span id = "arg2">12.6*2.5</span>)</span>);</span>
	 	<span id="line5" class = "position"><b>printf</b>("<span id = 'statement3' class = 'color-green'>The given character = <span id = 'percent3'>%c</span>\n</span>",<span class = "color-green"><span id = "arg3">'A'</span></span>);</span>
	 	<span id="line7"><span id = newline class = "opacity00"><b>printf</b>("<span class = 'color-green'><span id = 'statement4'>Sum of two integers = <span id = 'percent4'>%d</span><span id =nextline>\n</span><span id = "statement5">Product of given two float values = </span><span id = 'percent5'>%f</span><span id = nextline1>\n</span><span id = statement6>The given character = </span><span id = 'percent6'>%c</span></span></span>",<span class = 'color-green'>(<span id = "arg4">20+30</span>),(<span id = "arg5">12.6*2.5</span>),<span id = "arg6">'A'</span></span>);</span></span>
<span id="line6">}</span>
</pre>
		</div>
		<div class="col-sm-offset-4 col-sm-4 margin20">
			<div class = "col-sm-12 padding0">
	  			<div class="panel-primary output-div margin-left opacity00" id="outputDiv">
	   				<div class="panel-heading text-center">Output</div>
	   				<div class="panel panel-body">
	   					<div class="output col-xs-12">
	   						<span id = "outputAValue1" class = "position"></span><br/>
	   						<span id = "outputAValue2" class = "position"></span><br/>
	   						<span id = "outputAValue3" class = "position"></span><br/>
	   						<span id = "outputAValue4" class = "position"></span><br/>
	   						<span id = "outputAValue5" class = "position"></span><br/>
	   						<span id = "outputAValue6" class = "position"></span>
	   					</div>
	   				</div>
	 			</div>
			</div>
		</div>
	</div>
</body>
</html>
