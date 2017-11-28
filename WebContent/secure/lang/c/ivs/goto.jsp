<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>goto statement</title>
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
<script type="text/javascript" src="/secure/lang/c/js-min/g.min.js"></script>

<style type="text/css">
.margin-top-20 {
	margin-top: 20px;
}

#totalDiv {
	border: 1px solid gray;
	border-radius: 8px;
	min-height: 303px;
	padding: 10px;
	font-family: monospace;
}

.creampretab {
	tab-size: 2;
	-moz-tab-size: 3;
	background-color: #f5f5f5;
	font-family: monospace;
	border: 1px solid #ccc;
	border-radius: 4px;
	color: #333;
	display: block;
	font-size: 12px;
	line-height: 1.42857;
	padding: 20px;
	word-break: break-all;
	word-wrap: break-word;
}

.color-red {
	color: red;
}

.errMsg {
	color: red;
	font-weight: bold;
	font-family: monospace;
}

[contenteditable=true] {
	outline: none;
	font-family: monospace;
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
	height: 190px;
	padding: 10px;
	white-space: inherit;
}

.input-char {
	background-color: #000;
	border: 1px solid black;
	border-radius: 4px;
	color: #0f0;
	width: 30px;
}

.char-color {
	color: #0f0;
}

.display-inline-block {
	display: inline-block;
}

.user-btn {
	background-color: green;
}

.relative {
	position: relative;
}

.background-color-yellow {
	background-color: yellow;
}

.background-color-red {
	background-color: red;
}

.margin-left {
	margin-left: 367px;
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


/* a:focus {
	outline: none;
} */


y {
	font-family: monospace;
	font-weight: bold;
	color: yellow;
}

</style>
</head>
<body>
<script type="text/javascript">

	$(document).ready(function() {
		gotoReady();
	});

</script>
	<div class='text-center margin-top-20'>
		<h4 class='label ct-demo-heading' id='demoTitle'>goto in Action</h4>
	</div>
	<div class="col-xs-offset-1 col-xs-10">
		<div id="totalDiv" class="margin-top-20">
			<div id="typingDiv1">
				<ul>
				<li id="li1" class="opacity00">
					The <b style='color:green'>goto</b> construct causes an unconditional transfer of execution (i.e. to jump from one section of code to 
					another section). We can use the <b style='color:green'>goto</b> in two ways : <b>to go forward</b> or <b>to go backward</b>.
				</li>
				<li id="li2" class="opacity00">
					Whenever we want use <b style='color:green'>goto</b>, we also need to declare a <b style='color:green'>label</b>.
					 A label is a syntax to mark a section of code. The syntax for using <b style='color:green'>goto</b> is <b style='color:green'>goto label;</b>. 
				</li>
				<li id="li3" class="opacity00">
					The <b style='color:green'>goto</b> command transfers the control to the section of code mark with that "<b style='color:green'>label</b>".
				</li>
				<li id="li4" class="opacity00">
					Syntax of <b>forward goto</b> and <b>backward goto</b>:
				</li>
			</ul>
			</div>
			<div class='col-xs-offset-4 col-xs-2 opacity00' id="exp1">
				<div class="text-center">
					<b>forward</b>
					<div id='forward'>
						<pre class="pre2"><span id="forwardGotoLabel">goto Label;</span>
<span id="forwardCode">------
------</span>
<span id="forwardLabel">Label:</span>
--- -----
</pre>
					</div>
				</div>
			</div>
			<div class='col-xs-2 opacity00' id="exp2">
				<div class="text-center">
					<b>backward</b>
					<div id='backward'>
						<pre class="pre2"><span id="backwardLabel">Label:</span>
<span id="backwardCode">------
------</span>
<span id="backwardGotoLabel">goto Label;</span>
--- -----
</pre>
					</div>
				</div>
			</div>
			<div id="typingDiv2" class="col-xs-12">
				<ul>
					<li id="li5" class="opacity00">
						The mentioned two disadvantages can be solved by using if-condition with <b style='color:green'>goto</b>.
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-offset-1 col-xs-5 margin-top-20">
			<div id="code" class="opacity00">
				<pre class="creampretab"><span id="link"><in>#include</in> <ink>&lt;stdio.h&gt;</ink></span>
<span id="main"><g>void</g> main() {</span>
 	<span id="char"><g>char</g> ch;</span>
 	<span id="label">start:</span>
		<span id="printf1">printf(<ink>"Enter a character : "</ink>);
		scanf (<ink>"<in>%c</in>"</ink>, &ch);</span>
  		<span id="ifCondition"><span id="ifCnd"><go>if</go> (ch != <ink>'#'</ink>)</span> {
			<span id="gotoL1"><go>goto</go> start;</span>
		}</span>
}</pre>
			</div>
		</div>
		<div class="col-xs-5">
			<div id="outputDiv" class="opacity00">
				<div class="output-console-title-bar">
					<span class="title">Output</span>
				</div>
				<div class="output-console-body" id="body"></div>
			</div>
		</div>
	</div>
	<div class="col-xs-12 text-center margin-top-20">
		<span class="btn btn-warning btn-sm opacity00" id="restart">Restart</span>
	</div>
</body>
</html>