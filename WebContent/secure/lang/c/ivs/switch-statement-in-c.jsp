<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>switch</title>
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">
<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/secure/lang/c/js-min/ssic.min.js"></script>

<style type="text/css">

.allowNumbers {
	background-color: transparent;
	border: none;
	width: 10px;
}

.allowNumbers:focus {
	outline: none;
}

.position-absolute {
	position: absolute;
	font-family: monospace;
}

body {
	-moz-tab-size: 4;
	tab-size: 4;
}

[contenteditable=true]:empty:before {
  content: attr(placeholder);
  color: #B8B8A0;
}

#outputDiv {
	position: relative;
	z-index: 1000000;
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
	height: 165px;
	margin-bottom: 14px;
	padding: 10px;
	font-weight: bold;
}

.title {
	font-size: 12px;
}

.creamePreTab4 {
	background-color: #fffae6;
	margin-top: 12px;
	white-space: pre;
}

.opacity00 {
	opacity: 0;
	pointer-events: none;
	cursor: default;
}

.introjs-nextbutton, .initializeBtn, .evaluateBtn,
.continueBtn, .tryNewValBtn {
	background-color: green !important;
}

.restartTutorialBtn {
	background-color: orange;
}

.errorText {
	color: red;
	font-weight: bold;
}

.color-blue {
	color: blue;
}

.introjs-tooltip-custom-width {
	min-width: -moz-fit-content;
	width: intrinsic; /* Safari/WebKit uses a non-standard name */
	width: -moz-max-content; /* Firefox/Gecko */
	width: -webkit-max-content;
}

.focus {
	background-color: rgba(255, 255, 255, 0.898);
	border: 1px solid rgba(0, 0, 0, 0.5);
	border-radius: 4px;
	box-shadow: 0 2px 15px rgba(0, 0, 0, 0.4);
	position: absolute;
	transition: all 1.3s ease-out 0s;
	z-index: 9999998;
	padding: 4px;
}

.introjs-arrow.left-bottom {
	bottom: 50% !important;
}

.introjs-tooltip-min-width-custom {
	min-width: 110px;
}

</style>

</head>
<body>
	<div class='col-xs-12'>
		<div class="text-center">
			<h4>
				<span class="label ct-demo-heading">switch-statement in Action</span>
			</h4>
		</div>
		<div class="col-xs-offset-1 col-xs-7">
			<div>
			<pre class="creamePreTab4">#include&lt;stdio.h&gt;
void main() {
   <span id='initialization'>int value = <input type="text" name="lname" id='initializationValue' class='allowNumbers'  maxlength="1" value='2'>;</span>
   <span id='switchBlock'><span id='switchKeyword'>switch (<span id='condition'>value</span>) </span><span id='openBrace'>{</span>
	 <span id='case1Blk'><span id='case1'>case 1:</span>
		<span id='case1Sop'>printf("One\n");</span>
		<span id='case1break'>break;</span></span>
	 <span id='case2Blk'><span id='case2'>case 2:</span>
		<span id='case2Sop'>printf("Two\n");</span>
		<span id='case2break'>break;</span></span>
	 <span id='case34Blk'><span id='case3Blk'><span id='case3'>case 3:</span>
		<span id='case3Sop'>printf("Three\n");</span></span>
	 <span id='case4Blk'><span id='case4'>case 4:</span>
		<span id='case4Sop'>printf("Four\n");</span>
		<span id='case4break'>break;</span></span></span>
	 <span id='case56Blk'><span id='case5'>case 5:</span>
	 <span id='case6'>case 6:</span>
	 	<span id='case56Sop'>printf("Five or Six\n");</span>
		<span id='case56break'>break;</span></span>
	 <span id='defaultBlk'><span id='casedefault'>default:</span>
		<span id='defaultSop'>printf("%d did not match any of the existing cases\n",value);</span></span>
   <span id='endBrace'>}</span></span>
<span id='mainEnd'>}</span>
</pre>
			</div>
		</div>
		<div class="col-xs-3" id="outputDiv">
			<div class="output-console-title-bar">
				<span class="title">Output</span>
			</div>
			<div class="output-console-body"><span id="output"></span>
			</div>
		</div>

<script type="text/javascript">
	$(document).ready(function() {
		switchStatementInCReady();
	});
</script>		

</div>
</body>
</html>