<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link rel="stylesheet" href="/css/bootstrap.min.css">
	<script src="/js/jquery-latest.js"></script>
	<script src="/js/bootstrap.js"></script>
	<link rel="stylesheet" href="/css/introjs.css">
	<link rel="stylesheet" href="/css/introjs-ct.css">
	<link rel="stylesheet" href="/css/animate.css"/>
	<link rel="stylesheet" href="/css/jquery-ui.css"/>
	<script src="/js/gs/TweenMax.min.js"></script>
	<script src='/js/intro.js'></script>
	<link rel="stylesheet" href="/css/font-awesome.min.css">
	<script src="/js/typewriting.min.js"></script>
	<script src="/js/jquery-ui-latest.js"></script>
	<script src="/secure/lang/c/js-min/ieiic.min.js"></script>
	
	<title>if else if in C</title>
</head>

<style>

#totaldiv {
	margin-top: 20px;
}

.ct-demo-heading {
	background: highlight none repeat scroll 0.0;
	border-radius: 10px;
	font-size: 20px;
	position: relative;
	z-index: 9999999;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
}

.color-rose {
	color: #8B008B;
	font-size: bold;
}

.color-green {
	color: green;
}

.color-black {
	color: black;
}

.color-maroon {
	color: #8B0000;
}

.color-lightblue {
	color: #0A0381;
}

 .color-lightred {
	color: black;
}

.output-console-title-bar {
	background-image: -moz-linear-gradient(center top, #e8e8e8, #bcbbbc);
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	font-size: 0.75em;
	padding: 2px 0;
	text-align: center;
}

.output-console-body {
	background-color: black;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    color: #f0f0f0;
    font-family: monospace;
    font-size: 14px;
    height: 130px;
    margin-bottom: 14px;
    overflow: auto;
    padding: 17px;
    white-space: pre-line;
}

#charInput {
	background-color: black;
    border: medium none;
    color: #0f0;
}

.color-yellow {
	color: yellow;
	font-weight: bold;
	font-family: monospace;
}

.introjs-tooltip {
	max-width: 500px;
	min-width: 315px;
}

.errorText {
	color: red;
	font-weight: bold;
}

.bold {
	font-weight: bold;
}

#preBox {
	background-color: palegoldenrod;
    border-radius: 10px;
}

.color-red {
	color: red;
	font-weight: bold;
}

.introjs-tooltip-min-width-custom {
	min-width: 110px !important;
}

pre {
	width: auto !important;
}

.user-btn {
	background-color: green;
}
</style>

<body>
	<div id='totaldiv' class='totaldivclass col-xs-12 text-center'>
		<span id='title' class='label ct-demo-heading'>if-else-if in C</span>
	</div>
		<div class='col-xs-12' style='margin-top: 30px;'>
			<pre id='preBox' class='col-xs-offset-1 col-xs-6 opacity00'>
<span class='color-green'>#include&lt;stdio.h&gt;</span>
<span id='mainFunctions'>void main()</span> {
   <span id='charCh'><span class='color-rose'>char</span> ch;</span>
   <span id='enterCharSpan'><span class='color-maroon'>printf</span>(<span
					class='color-lightblue'>"Enter a character: "</span>);</span>
   <span id='getCh'>ch = <span class='color-lightred'>getchar()</span></span>;
   <span id='enteredCharSpan'><span class='color-maroon'>printf</span>(<span
					class='color-lightblue'>"The given character is: "</span>);</span>
   <span id='putChar'><span class='color-lightred'>putchar(<span
						class='color-black'>ch</span>)</span>;</span>
<span id='ifElseStatement'>   <span id='ifCondition'><span
						class='color-rose'>if</span> (<span id='ifConditionCheck'>(ch >= <span
							class='color-lightblue'>'A'</span> <span class='color-lightred'>&&</span> ch <= <span
							class='color-lightblue'>'Z'</span>) <span class='color-lightred'>||</span> (ch >= <span
							class='color-lightblue'>'a'</span> <span class='color-lightred'>&&</span> ch <= <span
							class='color-lightblue'>'z'</span>)</span>)</span> {
      <span id='ifConditionForLowerCase'><span class='color-rose'>if</span> (<span
						id='lowerLetterVowels'>ch == <span class='color-lightblue'>'a'</span> <span
							class='color-lightred'>||</span> ch == <span
							class='color-lightblue'>'e'</span> <span class='color-lightred'>||</span> ch == <span
							class='color-lightblue'>'i'</span> <span class='color-lightred'>||</span> ch == <span
							class='color-lightblue'>'o'</span> <span class='color-lightred'>||</span> ch == <span
							class='color-lightblue'>'u'</span></span>)</span> {
         <span id='printF1'><span class='color-maroon'>printf</span>(<span
						class='color-lightblue'>"%c is a letter and vowel\n"</span>, ch);</span>
      }<span id='ifConditionForUpperCase'> <span
						class='color-rose'>else if</span> (<span id='upperLetterVowels'>ch == <span
							class='color-lightblue'>'A'</span> <span class='color-lightred'>||</span> ch == <span
							class='color-lightblue'>'E'</span> <span class='color-lightred'>||</span> ch == <span
							class='color-lightblue'>'I'</span> <span class='color-lightred'>||</span> ch == <span
							class='color-lightblue'>'O'</span> <span class='color-lightred'>||</span> ch == <span
							class='color-lightblue'>'U'</span></span>)</span> {
         <span id='printF2'><span class='color-maroon'>printf</span>(<span
						class='color-lightblue'>"%c is a letter and vowel\n"</span>, ch);</span>
      }<span class='color-rose'> else </span>{
         <span id='printF3'><span class='color-maroon'>printf</span>(<span
						class='color-lightblue'>"%c is a letter and consonant\n"</span>, ch);</span>
      }
   } <span class='color-rose'>else</span> {
      <span id='printF4'><span class='color-maroon'>printf</span>(<span
						class='color-lightblue'>"%c is not a letter\n"</span>, ch);</span>
   }</span>  
</pre>
		<div class='col-xs-4' style='margin-top: 15px;'>
			<div id="consoleId" class="center opacity00" style="margin-top: 0px;">
				<div class="output-console-title-bar">
					<span class="title"><b>Console</b></span>
				</div>
				<div class="output-console-body" id="consoleBodyDiv"><div class='inputDiv' id='nameSpan'>Enter a character: <span id='nameEnterspan'><input
							class='index-textbox-size input' type='text' id='charInput'
							Maxlength='1'></span>
					</div><div><span id='enteredConsole'></span><span id='valGet'></span></div><div><span id='printInConsole'></span></div>
				</div>
			</div>
		</div>
	</div>
	<div class="button col-xs-12 text-center " id="button">
		<button class="btn btn-warning opacity00" type="button" id='restartBtn' style='margin-top: 4px'>Restart</button>
	</div>

<script>

	$(document).ready(function() {
		ifElseIfInCReady();
	});

</script>
</body>
</html>