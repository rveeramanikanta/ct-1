<!DOCTYPE>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>continue</title>
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/secure/lang/c/js/cic.min.js"></script>
<style type="text/css">
body {
	-moz-tab-size: 4;
	tab-size: 4;
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
    height: 182px;
    margin-bottom: 14px;
    padding: 10px;
    font-weight: bold;
}

#outputDiv {
	position: relative;
	z-index: 1000000;
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

.flip-area {
	position: relative;
	font-family: monospace;
}

.display-inline-block {
	display: inline-block;
}

.color-red {
	color: red;
}

.allowNumbers {
    outline: none;
}

.errorText {
	color: red;
	font-weight: bold;
}

.flip-animation-btn {
	background-color: green !important;
}

.position-absolute {
	position: absolute;
	font-family: monspace;
}

.display {
	display: inline-block;
}

.introjs-tooltip-min-width-custom {
	min-width: 110px;
}

.introjs-tooltiptext br {
	content: "";
	display: block;
	margin-top: 10px;
}

pre {
	font-size: 12px;
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
				<span class="label ct-demo-heading">continue in Action</span>
			</h4>
		</div>
		<div class="col-xs-offset-1 col-xs-6">
			<div>
				<pre class="creamePreTab4"><in>#include</in> <ink>&lt;stdio.h&gt;</ink>
<g>void</g> main() {
	<g>int</g> i;
	<div id='continueLoop' class='display'><go>for</go> (<div id='initialization'
					class="position-relative display">i = <ink><span
						id="initializationValue" class="allowNumbers position-absolute"
						maxlength="1" contenteditable=false placeholder=" ">1</span></ink>&nbsp;;</div> <span
					id='condition'>i < <ink>10</ink>;</span> <span id='update'>i++</span>) {
	<div id='ifBlk' class='display'><go>if</go> (<span id='ifCondition'>i % <ink>2</ink> == <ink>0</ink></span>) {
	<span id='continueStmt'><go>continue;</go></span>
}</div>
	<span id='sop'>printf(<ink>"i : <in>%d\n</in>"</ink>,i);</span>
 }</div>
<span id='mainEnd'>}</span>
</pre></div>
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
		<a class="btn btn-warning opacity00" id="restart">Restart</a>
	</div>
	
<script type="text/javascript">
	$(document).ready(function() {
		continueInCReady();
	});
</script>
	
</body>
</html>