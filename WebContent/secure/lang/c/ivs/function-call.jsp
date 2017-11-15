<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>function-sample-example</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<!-- <script src="/secure/lang/c/js-min/fc.min.js"></script> -->
<script src="/secure/lang/c/js/function-call.js"></script>

<style type="text/css">
.margin-top-20 {
	margin-top: 20px;
}

.margin-top-10 {
	margin-top: 10px;
}

#totalDiv {
	border: 1px solid gray;
	border-radius: 8px;
	min-height: 245px;
	padding: 10px;
	font-family: monospace;
}

.creampretab {
	background-color: #f5f5f5;
	border: 1px solid #ccc;
	border-radius: 4px;
	color: #333;
	margin-bottom: 0;
	padding: 7px;
	font-family: monospace;
	tab-size: 4;
	-moz-tab-size: 4
}

#outputDiv {
	margin-top: 18px;
	padding: 0;
	z-index: 9999999;
}

.output-console-title-bar {
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
}

.output-console-body {
	border-bottom-left-radius: 6px;
	border-bottom-right-radius: 6px;
	font-size: 13px;
	height: 148px;
	padding: 10px;
	white-space: inherit;
}

.val-color {
	color: #0f0;
}

.display-inline-block {
	display: inline-block;
}

.relative {
	position: relative;
}

.user-btn {
	background: green;
	margin: 0 !important;
}

.ct-green-color {
	color: green;
	font-weight: bold; 
}

.introjs-tooltip {
	min-width: 280px;
}

.zindex10 {
	background: white;
	z-index: 9999999;
	position: relative;
}
</style>
</head>
<body>
<script type="text/javascript">

	$(document).ready(function() {
		functionCallReady();
	});

</script>
	<div class='text-center margin-top-20'>
		<h4 class='label ct-demo-heading' id='demoTitle'>Function Call</h4>
	</div>
	<div class="col-xs-offset-1 col-xs-10">
		<div class="margin-top-20" id="totalDiv">
			<div id="typingDiv1" style="border-radius: 8px;">
				<ul>
					<li id='li1' class='opacity00'>Whenever a call to a function is made the control automatically is transferred from
						 the executing function to the called function.
					</li>
					<li id='li2' class='opacity00'>A call to the function must end with a <b class='ct-green-color'>semicolon (;)</b>.</li>
				</ul>
			</div>
				<div class="col-xs-offset-4 col-xs-4 opacity00" id="syntax">
					<div class="text-center"><b class="margin-top-10">Syntax</b><br><div>
							<pre><span id="funName">function_name </span><span id="parameters">(parameter_list);</span></pre>
						</div>
					</div>
				</div>
				<div class="col-xs-offset-4 col-xs-4 opacity00" id="example">
					<div class="text-center"><b class="margin-top-10">Example</b><br></div>
					<div class="text-center">
						<pre><span id="nameFun" class='ct-green-color'>printName();</span>
<span id="addFun">int sum = <span class='ct-blue-color'>addition(a, b)</span>;</span>
<span id="mulFun">int total = <span class='ct-blue-color'>mul(a, b, c)</span>;</span></pre>
					</div>
				</div>
		</div>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-offset-1 col-xs-5 margin-top-20">
			<div id="leftDiv" class="opacity00">
			<pre class="creampretab" id="code">#include&lt;stdio.h&gt;
<span id="funDec">void <span class='ct-blue-color'>printName()</span>;</span>
void <b class='ct-blue-color'>main()</b> {
	<span id="callingFun" class='ct-green-color'>printName();</span>
	<span id="printf2">printf("inside main(), after printName()");</span>
}
<span id="funDef">void <b class='ct-blue-color'>printName()</b> {
	<span id="printf1">printf("CodeTantra\n");</span>
<span id='endFunc'>}</span></span>	
</pre>
			</div>
		</div>
		<div class="col-xs-5">
			<div id="outputDiv" class="opacity00">
				<div class="output-console-title-bar">
					<span class="title">Output</span>
				</div>
				<div class="output-console-body" id="outputBody"></div>
			</div>
		</div>
	</div>
	<div class="col-xs-12 text-center margin-top-20">
		<span class="btn btn-warning btn-sm opacity00" id="restart">Restart</span>
	</div>
</body>
</html>