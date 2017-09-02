<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link href="/css/font-awesome.min.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/secure/lang/c/js-min/ddwf.min.js"></script>

<title>diff-while-dowhile-for</title>
<style>
.mleft {
	margin-left : 10px;
}
.divheight {
	height : 230px;
}
.box-border {
	border : 1px solid;
}
#printDefinition {
	height : 250px;
}
.margin10 {
	margin-top : 10px;
}

.padding0 {
	padding : 0px;
}

.divhight {
	height : 210px;
}
 
.creamPreTab4 {
    margin: 5px;
    padding: 5px;
    font-size: 13px;
    white-space: pre;
	-moz-tab-size: 6;
    border-radius: 8px;
    background-color: #fffae6;
    overflow: -moz-hidden-unscrollable;
}

.color-yellow {
	color : yellow;
}
.color-red {
	color : red;
}

.buttons-div {
	margin-top: 20px;
	margin-bottom: 5px;
	text-align: center;
}

.z-index1000000 {
	position: relative;
	background-color: white;
	z-index: 1000000 !important;
}
</style>

</head>
<body>

<div class = "col-xs-12" id = 'mainDiv'>
	<div class = "text-center margin10">
		<h1 class = "label ct-demo-heading text-center">Difference b/w doWhile, While and for loop</h1>
	</div> 
	<div class = 'buttons-div'>
		<button type = "button" class = "btn btn-warning visibility-hidden" id = "restartBtn">Restart</button>
	</div> 
	<div class="col-xs-12">
		<div id="printDefinition" class="col-xs-offset-1 col-xs-9 margin10">
		<span id = 'typingbox1'></span><br>
		<span id = 'typingbox2'></span><br>
		<span id = 'typingbox3'></span><br>
		<span id = 'typingbox4'></span><br>
		</div>
	</div>
	
	<div id = 'whileMainDiv' class = 'col-xs-4 mleft divheight box-border margin10 padding0' >
	<pre id = pre1 class = 'creamPreTab4'>
<span id = 'dirDeclaration'>#include&ltstdio.h&gt</span>						
<span id = "mainDeclaration">void main()</span>						
<span id = "openBrace">{</span>
   <span id = 'whilevariableDeclaration1'>int i = 1;</span>
   <span id = "whileBlock"><span id = "whileLine1">while(i &lt= 10)</span>
   <span id = "openBrace1">{</span>
       <span id = "sopLine1">printf("Code Tantra");</span>
       <span id = "iwhileIncrement">i++;</span>
   <span id = "closeBrace1">}</span>
<span id = "closeBrace">}</span></span>
	</pre>
	</div>

	<div id = 'dowhileMainDiv' class = 'col-xs-3 mleft divheight box-border margin10 padding0'>
	<pre id = pre2 class = 'creamPreTab4'>
<span id = 'dirDeclaration'>#include&ltstdio.h&gt</span>						
<span id = "mainDeclaration">void main()</span>						
<span id = "openBrace">{</span>
   <span id = 'dovariableDeclaration1'>int i = 1;</span>
   <span id = 'dowhileBlock'><span id = 'doDeclaration'>do </span>
   <span id = "openBrace1">{</span>
       <span id = "sopLine1">printf("Code Tantra");</span>
       <span id = "idoIncrement">i++;</span>
   <span id = "closeBrace1">}</span><span id = "dowhileLine1"> while(i &lt= 10)</span></span>
<span id = "closeBrace">}</span>
	</pre>
	</div>
	<div id = 'forMainDiv' class = 'col-xs-4 mleft divhight box-border margin10 padding0'>
	<pre id = pre3 class = 'creamPreTab4'>
<span id = 'dirDeclaration'>#include&ltstdio.h&gt</span>
<div style="display: inline-block;"><span id = "mainDeclaration">void main()</span>						
<span id = "openBrace">{</span>
   <div id = "forvariableDeclaration" style="display: inline-block;">int i;</div>						
   <div id = 'forBlock' style="display: inline-block;"><span id = 'forDeclaration'>for(<span id = 'i1'>i = <span id = 'one'>1</span></span>;<span id ='iCondition'> i <= 10</span>;<span id = 'iIncrement'> i++</span>)</span></div>
   <span id = "openBrace1">{</span>
      <div style="display: inline-block;"><span id="sopLine1" class="introjs-showElement">printf("Code Tantra");</span></div>
   <span id = "closeBrace1">}</span>
<span id = "closeBrace">}</span></div>
	</pre>
	</div>
</div>

<script>
	$(document).ready(function() {
		diffDowhileWhileforReady();	
	});
</script>

</body>
</html>