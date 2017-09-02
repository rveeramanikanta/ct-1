
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
<script src="/secure/lang/c/js-min/fiop.min.js"></script>
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

.panel-heading {
	background-color: #337ab7;
	letter-spacing: 1px;
	font-family: monospace;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	padding: 3px;
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

.introjs-tooltip {
	min-width: 300px;
}

.ct-green-color {
	color: green;
	font-family: monospace;
	font-weight: bold;
}

.style-css {
	background: black;
	color: white;
	border-radius: 4px;
}

.usr-text {
	border: medium none;
	background: none;
}

.ct-pink-color {
	color: #a1126c;
	font-weight: bold;
	font-family: monospace;
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
				<ul>
					<li id="line1" class="opacity00"><b class='ct-green-color'>fopen()</b> function is used to <b class="ct-blue-color">open</b> an 
						existing/new file.
						<br> &emsp; Syntax : <span class="ct-green-color">FILE *<span id='openFile'>fopen(<span	id='path'>char *filename</span>, 
						<span id='mode'>char *mode</span>)</span>;</span></li>
					 <li id="line2" class="opacity00"><b class='ct-green-color'>fclose()</b> function is used to <b class="ct-blue-color">close</b>
					  a file.<br> &emsp; Syntax : <span class="ct-green-color">int <span id='closeFile'>fclose(FILE *fp)</span>;</span>
				</ul>
			</div>
		</div>
		<div class="col-xs-12 margin-top-40">
			<div class="col-xs-4 col-xs-offset-1">
<pre id="readEditor" class="opacity00 margin-top-20">
<span id="fileOperation" class="opacity00"><span id="fileRd">FILE</span> *<span	id="fpRd">fp</span>;</span>
<span id="writeOpen" class="opacity00">fp = <span class="ct-pink-color">fopen(</span><span	id="usrFile" class="ct-blue-color">"codetantra.txt"</span>, <span id="writeMode" class="ct-blue-color">"w"</span><span class="ct-pink-color">)</span>;</span>
<span id="writeClose" class="opacity00 ct-pink-color">fclose(fp);</span>
<span id="readOpen" class="opacity00">fp = <span class="ct-pink-color">fopen(</span><span class="ct-blue-color">"codetantra.txt"</span>, <span id="readMode" class="ct-blue-color">"r"</span><span class="ct-pink-color">)</span>;</span>
<span id="readClose" class="opacity00 ct-pink-color">fclose(fp);</span>
<span id="appendOpen" class="opacity00">fp = <span class="ct-pink-color">fopen(</span><span class="ct-blue-color">"codetantra.txt"</span>, <span id="appendMode" class="ct-blue-color">"a"</span><span class="ct-pink-color">)</span>;</span>
<span id="appendClose" class="opacity00 ct-pink-color">fclose(fp);</span>
</pre>
			</div>
			<div class="col-xs-7">
				<div id="fpDiv" class="col-xs-2 col-xs-offset-1 panel-primary opacity00 margin-top-40 padding0">
					<div class="file-name panel-heading text-center">fp</div>
					<div class="panel panel-body text-center"><div class="fp-address"></div></div>
				</div>
				<div class="col-xs-6 col-xs-offset-1 opacity00 padding0" id="txtFile">
					<div class="text-center usr-file-name">codetantra.txt</div>
					<div class="ct-file">
						<div id="writeText" class="write-text">
							<input id="wModeText" spellcheck="false" maxlength="1" class="usr-text" style="width: 20px;">
						</div>
						<div class="fa fa-arrow-up hide"></div><div><span class="address hide">1024</span></div>
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