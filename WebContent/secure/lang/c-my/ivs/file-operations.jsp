
<!DOCTYPE html PUBLIC>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>File Operations</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/animate.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/secure/lang/c/js/file-operations.js"></script>

<style>
.demo-heading {
	margin-top: 25px;
}

.margin-top-20 {
	margin-top: 20;
}

.margin-top-40 {
	margin-top: 40;
}

pre {
	tab-size: 4;
	-moz-tab-size: 4;
	margin: 0;
	font-family: monospace;
}

.ct-file {
	font-size: 15px;
	border-radius: 15px;
	padding: 15px;
	height: 163px;
	border: 1px solid grey;
}

.usr-file-name {
	letter-spacing: 1px;
	font-family: monospace;
	font-weight: bold;
}

.blink {
	animation-name: blinking;
	animation-duration: 1s;
	animation-iteration-count: infinite;
}

@keyframes blinking { 50% {
	background: yellow;
} }

.ui-effects-transfer {
	border: 1px solid #003399;
	border-radius: 6px;
	position: relative;
	z-index: 9999999;
}

.typing-div {
	border: 1px solid gray;
	border-radius: 11px;
	padding: 6px;
	font-family: monospace;
}

.ct-code-b-red {
	color: red;
	font-family: monospace;
}

[contenteditable=true]:empty:before {
	content: " ";
	color: #B8B8A0;
}

.panel-primary > .panel-heading {
	background-color: #337ab7;
	letter-spacing: 1px;
	font-family: monospace;
}

.panel-body {
	color: black;
	padding: 3px;
}

.panel {
	height: 31px;
	border-color: grey;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	margin: 0;
}

.panel-heading {
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	padding: 3px;
}

.write-text {
	height: 24px;
	padding-left: 5px;
}

.padding0 {
	padding: 0;
}

.introjs-fixParent {
	position: relative !important;
}

.z-index {
	position: relative;
	z-index: 99999999;
	background: white;
}

.user-text {
	outline: none;
}

.introjs-tooltip-min-width-custom {
	min-width: 110px;
}

</style>
</head>
<body>
	<div class="demo-heading text-center">
		<h4 class="label ct-demo-heading" id="heading">File Operations</h4>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-12 margin-top-20 padding0">
			<div class="col-xs-6 col-xs-offset-3 opacity00 typing-div" id="typingDiv">
				<span id="line1" class="opacity00">To open a file use <b class='ct-blue-color'>fopen()</b> method, the syntax for fopen()<br>
					&emsp;&emsp;FILE * <span id='openFile'>fopen(<span	id='path'>filename</span>, <span id='mode'>mode</span>)</span>;
				</span><br>
				 <span id="line2" class="opacity00">To close a file	use <b class='ct-blue-color'>fclose()</b> method, the syntax for fclose()<br>
					&emsp;&emsp;int <span id='closeFile'>fclose(FILE *fp)</span>;
				</span>
			</div>
		</div>
		<div class="col-xs-12 margin-top-40">
			<div class="col-xs-4 col-xs-offset-1">
<pre id="readEditor" class="opacity00 margin-top-20">
<span id="fileOperation" class="opacity00"><span id="fileRd">FILE</span> *<span	id="fpRd">fp</span>;</span>
<span id="writeOpen" class="opacity00">fp = fopen(<span	id="usrFile">"codetantra.txt"</span>, <span id="writeMode">"w"</span>);</span>
<span id="writeClose" class="opacity00">fclose(fp);</span>
<span id="readOpen" class="opacity00">fp = fopen("codetantra.txt", <span id="readMode">"r"</span>);</span>
<span id="readClose" class="opacity00">fclose(fp);</span>
<span id="appendOpen" class="opacity00">fp = fopen("codetantra.txt", <span id="appendMode">"a"</span>);</span>
<span id="appendClose" class="opacity00">fclose(fp);</span>
</pre>
			</div>
			<div class="col-xs-7">
				<div id="fpDiv" class="col-xs-2 col-xs-offset-1 panel-primary opacity00 margin-top-40 padding0">
					<div class="file-name panel-heading text-center">fp</div>
					<div class="panel panel-body text-center">
						<div class="fp-address"></div>
					</div>
				</div>
				<div class="col-xs-6 col-xs-offset-1 opacity00 padding0" id="txtFile">
					<div class="text-center usr-file-name">codetantra.txt</div>
					<div class="ct-file">
						<div id="writeText" class="write-text">
							<span id="wModeText" contenteditable="false" spellcheck="false"	maxlength="2" class="user-text">&nbsp;</span>
						</div>
						<div class="fa fa-arrow-up hide"></div>
						<div>
							<span class="address hide">1024</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-12 text-center margin-top-20">
			<span id="restart" class="opacity00 btn btn-warning">Restart</span>
		</div>
	</div>
<script>

$(document).ready(function() {
	fileOperations();
});

</script>
</body>
</html>