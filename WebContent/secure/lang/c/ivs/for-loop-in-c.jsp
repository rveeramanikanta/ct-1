<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/secure/lang/c/js-min/flic.min.js"></script>

<title>for-loop Demo</title>

<style type="text/css">

body {
	-moz-tab-size: 4;
	tab-size: 4;
	margin-top: 10px;
}

.box-border {
	border-radius: 8px;
}

.output-console-title-bar {
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	font-size: 0.75em;
	margin-top: 14px;
}

.output-console-body {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    height: 132px;
    margin-bottom: 14px;
    padding: 10px;
}

.creamePreTab4 {
	background-color: #fffae6;
	margin-top: 12px;
	white-space: pre;
}

.title {
	font-size: 12px;
}

[contenteditable=true]:empty:before {
  content: attr(placeholder);
  color: #B8B8A0;
}

span[contenteditable=true] {
	display: inline-block;
	border: 0;
}

.forLoopDiv {
	padding: 4px 14px;
}

.pulse {
	animation: pulse 1s linear 1;
}

@-moz-keyframes pulse {
 0% {
   -moz-transform: scale(1);
   transform: scale(1);
 }

 100% {
   -moz-transform: scale(1);
   transform: scale(1);
   font-weight: bold;
   color: black;
 }
	
}

.cup-bg {
	background-color: #003399;
    border: 1px solid white;
    border-radius: 4px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.4);
    height: 38px;
    left: 202px;
    padding-bottom: 2px;
    position: absolute;
    top: 20px;
    transition: all 1.3s ease-out 0s;
    width: 57px;
    z-index: 1000004;
}

.cup {
	display: inline-block;
	left: 15px;
	position: relative;
	top: 2px;
	z-index: 1000000;
}

#cup_value {
	bottom: 53px;
	color: black;
	left: 9px;
	position: relative;
	z-index: 1000005 !important;
}

.i-position {
	bottom: 32px;
	color: white;
	font-family: monospace;
	font-size: 10px;
	position: relative;
	right: 11px;
}

.introjs-nextbutton, .initializeBtn, .continueBtn, .evaluateBtn, .incrementBtn, .updateBtn {
	background-color: green !important;
}

.introjs-skipbutton, .doneBtn, .doneBtn1, .testBtn {
	margin-right: 15px !important;
	background-color: orange !important;
}

.ct-demo-heading {
    background: highlight none repeat scroll 0 0;
    border-radius: 10px;
    font-size: 18px;
    position: relative;
    z-index: 1000000;
}

.fa-inverse {
	font-size: 30px;
}

.flip {
    animation: flip 1s linear 1;
}

@keyframes flip { 
	100% { 
	 	transform:rotateX(360deg);
	}
}

.initialization {
	position: relative;
}

.condition {
	position: relative;
}

.opacity00 {
	opacity: 0;
	pointer-events: none;
	cursor: default;
}

#condition_Text, #condition_Text_2 {
	position: relative;
	font-family: monospace;
}

.typingCursor::after {
	height: 0px !important;
}

#initialization_Value {
	position: relative;
}

#travelled_i {
	position: relative;
	font-family: monospace;
}

#inner_travelled_i {
	position: absolute;
	font-family: monospace;
}

#updated_value {
	position: relative !important;
}

#initialization_Text {
	color: orange;
}

.codeText {
	font-family: monospace;
}

.ct-code-b-yellow {
	color: yellow;
	font-weight: bold;
}

.display {
	display: inline-block;
}

.allowNumbers {
    outline: none;
}

.introjs-tooltip-min-width-custom {
	min-width: 110px;
}

.introjs-tooltiptext br {
	content: "";
	display: block;
	margin-top: 10px;
}

</style>

</head>
<body>
	<div class="col-xs-12">
		<div class="text-center">
			<h4>
				<span class="label label-default ct-demo-heading">for-loop in Action</span>
			</h4>
		</div>
		<div class="col-xs-offset-2 col-xs-4 box-border forLoopDiv">
			
			<div>
				<pre class="creamePreTab4">#include&lt;stdio.h&gt;<br>void main() {  
	<span id='main'>int i;</span>
	<div id='forloop' class='display'>for(<span class="initialization">i = <span
					id="initialization_Value" maxlength="1" contenteditable="false" placeholder=" " class="allowNumbers">0</span>;</span> <span
					class="condition"><span style="position: relative;">i < <span
						id="condition_Value" maxlength="1" contenteditable="true" placeholder=" " class="allowNumbers">3</span>;</span></span><span class="cup-bg"><span class="hide-sm cup"><i class="fa fa-coffee fa-inverse fa-2"></i><h5 class="i-position"><span id='cup_i'>i</span>= <h6 id="cup_value"></h6></h5></span></span><span> <span class="increment">i++</span>) {</span>
	<span class="body-Of-The-Loop">printf("i : %d\n",i);</span>
}</div>
}
</pre>
			</div>
		</div>
		<div class="col-xs-3 box-border outputDiv">
			<div class="output-console-title-bar">
				<span class="title">Output</span>
			</div>
			<div class="output-console-body"><span id="output"></span></div>
		</div>
	</div>
	
	<div class="text-center col-xs-12">
		<a class="btn btn-warning restart opacity00" id="restart"><i class="fa fa-refresh"></i>&nbsp;Restart</a>
	</div>
	
<script type="text/javascript">

$(document).ready(function() {
	forLoopInCReady();
});
	
</script>

</body>
</html>
