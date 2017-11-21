<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>do-while</title>
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/secure/lang/c/js/do-while-loop-in-c.js"></script>

<style type="text/css">

body {
	-moz-tab-size: 4;
	tab-size: 4;
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

.cup-bg {
	background-color: #003399;
    border: 1px solid white;
    border-radius: 4px;
    top: 20px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.4);
    height: 35px;
    position: fixed;
    transition: all 1.3s ease-out 0s;
    width:85px;
    z-index: 9999998 !important;
    left: 200px;
}

.cup {
	display: inline-block;
    left: 46px;
    position: relative;
}

#cupValue {
	bottom: 59px;
	left: 11px;
	position: relative;
}

.num-position {
	bottom: 36px;
    color: white;
    font-family: monospace;
    font-size: 14px;
    position: relative;
    right: 45px;
}

.fa-inverse {
	font-size: 32px;
}

.position-absolute {
	position: absolute;
}

.position-relative { 
	position: relative;
}

.initializeBtn, .evaluateBtn, .continueBtn, .incrementBtn {
	background-color: green !important;
}

.FinishBtn {
	margin-right: 15px !important;
	background-color: orange !important;
}

.errorText {
	color: red;
	font-weight: bold;
}

#conditionTest {
	position: absolute;
	font-family: monospace;
}

.flip {
    animation: flip 1s linear 1;
}

@keyframes flip { 
	100% { 
	 	transform:rotateX(360deg);
	}
}

.typingCursor::after {
	height: 0px !important;
}

#travelledNum {
	position: relative;
	font-family: monospace;
}

#innerTravelledNum {
	position: absolute;
	font-family: monospace;
}

#updatedValue {
	position: relative !important;
	font-weight: bold;
}

.color-red {
	color: red;
}

.allowNumbers {
    outline: none;
}

.introjs-tooltip-min-width-custom {
	min-width: 110px;
}

.oneStepBackBtn {
	background-color: #5bc0de !important
}


in {
	color: rgb(62, 50, 173);
	font-weight: bold;
}

ink {
	color: 	rgb(255, 0, 191);
}

go {
	color: rgb(134, 19, 19);
	font-weight: bold;
}

g {
	color: 	rgb(64, 130, 65);
	font-weight: bold;
}

r {
	color: red;
}


</style>
</head>
<body>
<div class='col-xs-12'>
		<div class="text-center">
			<h4>
				<span class="label ct-demo-heading">do-while-loop in Action</span>
			</h4>
		</div>
		<div class="col-xs-offset-1 col-xs-6">
			<div>
				<pre class="creamePreTab4"><in>#include</in> <ink>&lt;stdio.h&gt;</ink>
<g>void</g> main() {
	<span id='initialization' class='position-relative'><g>int</g> value = <span id='initializationValue' class="allowNumbers position-absolute" maxlength="1" contenteditable=false placeholder=" ">1</span>&nbsp;;</span><span class="cup-bg position-absolute opacity00"><span class="hide-sm cup"><i class="fa fa-coffee fa-inverse fa-2"></i><h5 class="num-position"><span id='cup_num'><b>value</b></span>= <h6 id="cupValue"></h6></h5></span></span>
	<span id='doWhile'><span id ="docondition"><go>do</go> {</span>
		<span id='statement'>printf(<ink>"value : <in>%d\n</in>"</ink>,value);</span>
		<span id='update'>value++;</span>
	} <go>while</go> (<span id='condition'>value <= <span id="conditionValue" class="allowNumbers" maxlength="1" contenteditable="true" placeholder=" "><ink>5</ink></span></span>);</span>
<span id='mainEnd'>}</span>
</pre>
			</div>
		</div>
		<div class="col-xs-4" id="outputDiv">
			<div class="output-console-title-bar">
				<span class="title">Output</span>
			</div>
			<div class="output-console-body"><span id="output"></span>
			</div>
		</div>
</div>
	<div class="text-center col-xs-12">
		<a class="btn btn-warning opacity00" id="restart"><i class="fa fa-refresh"></i>&nbsp;Restart</a>
	</div>
	
<script type="text/javascript">
$(document).ready(function() {
	doWhileLoopInCReady();
});
</script>
</body>
</html>