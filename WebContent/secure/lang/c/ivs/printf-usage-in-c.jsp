
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>review</title>
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/animate.css">
<link href="/css/font-awesome.min.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<!-- <script src="/secure/lang/c/js-min/puic.min.js" type="text/javascript"></script> -->
<script src="/secure/lang/c/js/printf-usage-in-c.js" type="text/javascript"></script>
<style>

.color-green {
	color: green;
}

.introjs-duplicate-nextbutton {
    background-color: green;
    margin: 0 5px !important;
}

.color-black {
	color: black;
}

.introjs-tooltip {
    min-width: 300px;
}

.margin-top20 {
	margin-top: 20px;
}

.ui-effects-transfer {
    border: 1px solid red;
    z-index: 99999999 !important;
 }
 
 pre {
 	overflow: auto;
 }

.consol-width {
	width: 50%;
}

#typingDiv {
	min-height: 110px;
}
 
.left-padding-120 {
	padding-left: 120px;
}

.left-padding-80 {
	padding-left: 80px;
}
.output-console-body {
	background-color: black;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #f0f0f0;
	font-family: monospace;
	font-size: 14px;
	margin-bottom: 14px;
	height: 100px;
	overflow:unset;
	padding: 10px;
	white-space: nowrap;
}

.padding-col0 {
	padding: 0;
}


.border-height-css {
	border: 1px solid;
	height: 22px;
}

.Vertical-text-center  {
	height: 62px;
	line-height: 62px;
	text-align: right; 
}


.display-inline-block {
	display: inline-block;
}

.height-124 {
    height: 124px;
}

.z-index {
	position: relative;
	z-index: 10000001 !important;
}

.user-btn {
	background-color: green;
}

.creamPreTab4 {
    margin: 8px;
    padding: 10px;
    font-size: 13px;
    white-space: nowrap;
	-moz-tab-size: 6;
    border-radius: 8px;
    background-color: #fffae6;
}

.outline-none {
	outline: none;
}
</style>
</head>
<body>
	<script>
	
	$(document).ready(function() {
		printfUsageInCReady();
	});
	
								
	
		
	</script>
	<div class="ct-box-main">
		<div class='text-center'>
			<h1 class='label ct-demo-heading' id="heading">Usage of printf(
				)</h1>
		</div>
		
		<div class='col-xs-12 text-center'>
			<span id='restart'
				class='btn btn-warning btn-sm opacity00 margin-top20'>Restart
				&nbsp;<i class='fa fa-refresh'></i>
			</span>
		</div>

		<div id="typingDiv"
			class='margin-top20 col-xs-offset-2 col-xs-8 col-xs-offset-2'>
			<ul id="htmlCode"><li>There is a function called <b class="ct-blue-color">printf()</b> in the standard input output library (<b class="ct-blue-color">stdio.h</b>) that is used to print text to the console.</li>
			<li>This function can be used to print any type of string that can be made up of numerical values, characters, alphabets and any other special characters.</li><!-- <li><b class="ct-blue-color">printf()</b> function moves data from the computer’s memory to the standard output device.</li> -->
			<li>The <b class="ct-blue-color">printf()</b> function can be used in the below two formats.<ol><li><b>printf("any string");</b> <span class="color-green">//The string inside the double quotes will be printed as it is.</span></li>
			<li><b>printf (“control_string”, argument_list);</b> <span class="color-green">//In this format the <b>control_string</b> is a sequence of characters with some special formating characters about which we will learn later sections.<a class="introjs-button introjs-duplicate-nextbutton opacity00">Next &#8594;</a></span></ol>
			 </li></ul>
		</div>

		<div id='TypesOfFormate' class='text-center margin-top20 col-xs-12'>
		</div>
		<div class='col-xs-offset-2 col-xs-8 margin-top20'>
			<div id='mainExampleDiv' class='col-xs-offset-2 col-xs-8'>
				<div id='exampleDiv' class='opacity00 height-124'>
					<pre class="creamPreTab4" id='codeOne'><span id='firstLine' class='opacity00'>printf("<span>I am learning C.</span><span>\n</span>");</span><br>
					<span id="secondLine" class='opacity00'>printf("<span>C programming language is \"easy\".</span><span>\n</span>");</span><br>
					<span id='thirdLine' class='opacity00'>printf("<span>Line one.</span>");</span><br>
					<span id='fourthLine' class='opacity00'>printf("<span>Line two.</span>");</span></pre>
				</div>
				<div id='outputDiv' class='margin-top20 opacity00'>
					<div id="consoleId1" class="center">
						<div class="output-console-title-bar">
							<span class="title"><b>Console</b></span>
						</div>
						<div class="output-console-body" id="consoleBodyDiv1">
							<span id="lineOne" class="opacity00">I am learning C.</span>
							<div id='lineTwo'><span id='line-two-cursor'></span></div>
							<div id='lineThree'><span></span></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>