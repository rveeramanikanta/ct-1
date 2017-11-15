<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/animate.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">
<link href="/css/font-awesome-animation.min.css" rel="stylesheet">
<script src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/gs/TimelineLite.min.js"></script>
<script src="/secure/lang/c/js/structure-initialization.js"></script>
<!-- <script src="/secure/lang/c/js/structure-initialization123.js"></script> -->
<title>Structure Initialization</title>
<style type="text/css">
.padding0 {
	padding: 0px;
}

.opacity00 {
	opacity: 0;
}

.margin-top30 {
	margin-top: 30px;
}

.color-rose {
	color: #8B008B;
}

.introjs-tooltip {
	min-width: 300px;
}

pre {
	background-color: lavender;
	color: black;
	height: 200px;
}

#parentDiv {
	border-radius: 3px;
	display: inline-block;
	height: 350px;
}

.next-button {
	background-color: green !important; 
	border: 1px solid #d4d4d4;
    border-radius: 0.2em;
    display: inline-block;
    font: 11px sans-serif;
    padding: 3px;
}

.table-border {
	border: 2px solid gray;
	text-align: center;
	width: 111px;
	height: 26px;
}

.memory {
	border: 2px solid gray;
	border-radius: 9px;
}

.output-console-title-bar {
	border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}

.output-console-body {
	height: 75px;
}

.display-none {
	display: none;
}

 @keyframes blink {
    50% { background-color: yellow; }
    99% { background-color: yellow; }
  }
 
.flash {
 	animation: blink 1s 1;
 	/* background: white; */
 	z-index: 9999999 !important;
 	position: relative;
 }
 
 .zIndex {
 	z-index: 9999999 !important;
 	background-color: white;
 	position: relative;
 }
 
.output-console-body {
    color: #f0f0f0;
    font-family: monospace;
    font-size: 10px;
    white-space: normal;
} 

.discard-red {
	background-color: red;
}

pre {
	-moz-tab-size: 3;
	tab-size: 3;
	font-family: monospace;
}
</style>
<script type="text/javascript">
	$(document).ready(function() {
		structureIntializationReady();
	});
</script>
</head>
<body>
<div class="col-xs-12 padding0">
	<h2 class="text-center">
		<span id="heading" class="label label-default ct-demo-heading">Structure Initialization</span>
	</h2>
</div>
<div class="col-xs-12 margin-top10 text-center">
		<span class="btn btn-warning opacity00" id="restart"><i class="fa fa-refresh"></i> Restart</span>
</div>
<div class="col-xs-12 padding0 margin-top30">
<div id="parentDiv" class="padding0 col-xs-offset-2 col-xs-9">
	<div class="col-xs-12 padding0 margin-top0">
		<div class="col-xs-5 padding0">
<pre class="opacity00" id="firstPre">
<div style="margin-top: 21px;"><span id='structDeclaration'>struct <span class="color-rose">Book</span> {
	<span class="color-rose">char</span> <span id='span1'>letter</span>;
	<span class="color-rose">int</span> <span id='span2'>pages</span>;
	<span id='decl'><span class="color-rose">float</span> <span id='span3'>price</span>;</span>
};</span>
<span id='structInitialization'>struct <span class="color-rose">Book</span> b = {<span id='arrVal'>'<span id="charVal">M</span>', <span id="intVal">999</span>, <span id="floatVal">11.007</span></span>};</span>
<span id="printMethod"><span class="color-rose">printf</span>("<span class='char'>%c</span> <span class='decimal'>%d</span> <span class='float'>%f</span>", <span class='char'>b.letter</span>, <span class='decimal'>b.pages</span>, <span class='float'>b.price</span>);</span>
</div></pre>
	</div>
	<div class="col-xs-offset-1 col-xs-5 padding0" style="margin-top: 55px;">
		<div class="col-xs-12 padding0 opacity00" id="memoryArea">
			<div class="col-xs-12 text-center padding0 color-rose">b</div>
				<div class="col-xs-12 padding0 memory">
					<table align="center">
							<tr><td class="text-center">letter</td><td class="text-center">pages</td><td class="text-center">price</td></tr>
							<tr>
								<td class="table-border"><span class ="display-none" id="bLetter"></span></td>
								<td class="table-border"><span class="display-none" id="bPages"></span></td>
								<td class="table-border"><span class="display-none" id="bPrice"></span></td>
							</tr>
							<tr>
								<td style="text-align: center; color: midnightblue">1014</td>
								<td style="text-align: center; color: midnightblue;">1015</td>
								<td style="text-align: center; color: midnightblue;">1017</td>
							</tr>

						</table>
				</div>
		</div>
	
	</div>
	</div>
	<div class="col-xs-offset-3 col-xs-6" style="margin-top:25px">
		<div id="outputDiv" class="opacity00">
			<div class="output-console-title-bar"><span class="title">Output</span></div>
			<div class="output-console-body"><span class="output" id="output"></span></div>
		</div>
	</div>
</div>
</div>
</body>
</html>
