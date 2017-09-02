<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<script src="/js/jquery-latest.js" type="text/javascript"></script>
<script src="/js/bootstrap.js" type="text/javascript"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/secure/lang/c/js-min/sopf.min.js" type="text/javascript"></script>

<title>sample program with printf</title>
</head>
<style>
#preBody, #typeWriteId {
	height: 150px;
	margin-left: 30px;
	margin-top: 110px;
	-moz-tab-size: 2;
	background-color: #fffae6;
	white-space: pre;
}

.introjs-tooltip {
	padding: 5px !important;
}

.introjs-tooltiptext {
	border-top-left-radius: 3px !important;
	border-top-right-radius: 3px !important;
}

.introjs-tooltipbuttons {
	border-bottom-left-radius: 3px !important;
	border-bottom-right-radius: 3px !important;
}

.introjs-tooltiptext, .introjs-tooltipbuttons {
	background-color: #003399;
	color: white;
	padding: 2px;
}

a:focus, a:hover {
	text-decoration: none !important;
}

.introjs-button {
	margin: 10px 2px 2px !important;
	padding: 3px !important;
	background-image: none !important;
	text-shadow: none !important;
	color: white !important;
}
.color-green {
	color : green;
}

.introjs-prevbutton, .introjs-nextbutton, .introjs-skipbutton {
	border-radius: 3px !important;
}

.introjs-prevbutton {
	background-color: #5bc0de !important;
}

.introjs-nextbutton {
	background-color: green !important;
}

.introjs-skipbutton {
	margin-right: 15px !important;
	background-color: orange !important;
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
	font-size: 10px;
	margin-bottom: 14px;
	height: 140px;
	overflow: auto;
	padding: 10px;
}

.opacity00 {
	opacity: 0.0;
	color : black;
}

#buttonDiv {
	height: 6px;
	margin-top : 30px;
}

body {
	margin-top: 10px;
}
.color-yellow {
	color : yellow;
}

.text-div {
	margin-top : 20px;
}

.padding0 {
	padding : 0;
}

#samelineDiv {
	white-space: nowrap;	
}

</style>

<body>
<script>
	$(document).ready(function() {
		sampleOfPrintfReady();
	})
</script>
	
<div class="col-xs-12 text-center" id="buttonDiv">
	<button type="button" class="btn btn-success btn-sm" id="startBtn">Start</button>
	<button type="button" class="btn btn-warning btn-sm hidden"	id="reStartBtn">Restart</button>
</div>

<div class="text-div col-xs-12 padding0">
	<div class="col-xs-offset-1 col-xs-5">
			<pre id="typeWriteId" class=""></pre>
<pre class="creamPreTab4 hidden" id="preBody">
<span id="line1">#include&lt;stdio.h&gt;</span>
void <span id="line2"><b>main()</b></span> {
	<span id="line3"><b>printf</b>(<span class = "color-green">"Hello World!\n"</span>);</span>
 	<span id="line4"><b>printf</b>(<span class = "color-green">"I am learning C programming\n"</span>);</span>
 	<span id="line5"><b>printf</b>(<span class = "color-green">"Bye!"</span>);</span>
<span id="line6">}</span>
</pre>
	</div>
		
	<div class="col-xs-5">
		<div class="col-xs-offset-1 col-xs-8">
			<div id="consoleId" >
				<div class="output-console-title-bar">
					<span class="title">Console</span>
				</div>
				<div class="output-console-body">
				    <span class="hidden" id="printlnId1"> Hello World!</span><br/>
				    <span class="hidden" id="printlnId2"> I am learning C programming</span><br/>
				    <span class="hidden" id="printlnId3"> Bye!</span>
					<span id="runEditor"></span>
				</div>
				</div>
			</div>
		</div>
	</div>

</body>
</html>
