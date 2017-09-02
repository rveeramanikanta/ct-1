<!DOCTYPE html>
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
<script src="/secure/lang/c/js-min/dieassic.min.js"></script>

<title>diff-if-else-switch-statement</title>

<style>

.box-border {
	border : 1px solid;
}

.position {
	position : relative;
	display : inline-block;
}

.padding0 {
	padding : 0px;
}

.margin10 {
	margin-top : 10px;
}

.margin20 {
	margin-top : 20px;
}

.creamPreTab4 {
    padding: 5px;
    font-size: 13px;
    white-space: pre;
	-moz-tab-size: 6;
	tab-size: 6;
	margin : 5px;
    border-radius: 8px;
    background-color: #fffae6;
    overflow: -moz-hidden-unscrollable;
    overflow-x: hidden;
}

#consoleDiv {
	height : 220px;
 	margin-top : 10px;
}

#output {
	height : 150px;
}

.panel-heading {
    padding: 2px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
}

.panel-body {
    padding: 4px 0 0;
}

.panel {
 	border-radius: 0px;
    background-color: #000;
    border: 1px solid lightgray;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    margin-bottom: 0;
}

.panel-primary > .panel-heading {
    color: #000;
    border-color: lightgray;
    background-color: lightgray;
}
 
.panel-head {
  	background-color: skyblue;
}

#firstNum, #firstNum1 {
    border: none transparent;
    width : 20px!important;
    outline : medium none;
}

#consoleDiv {
	color: white;
}

#firstexp {
	position : relative;
}

.color-yellow {
	color : yellow;
}

.color-green {
	color : green;
	font-weight: bold;
}

.display {
	display : inline-block;
}

.buttons-div {
	margin-top: 20px;
	margin-bottom: 5px;
	text-align: center;
}

.mleft {
	margin-left : 20px !important;
}

td,th {
	text-align : center;
}

#memoryDiv {
	height : 100px;
	border : 1px solid;
}

.number-body {
	height : 50px !important;
	background-color : white;
}

.introjs-tooltip-min-width-custom {
	min-width: 110px !important;
}

</style>
</head>

<body>
<div class='ct-box-main'>
	<div class="text-center margin10">
		<h1 class="label ct-demo-heading text-center">Difference between if-else-if and switch-statement</h1>
	</div> 
	
	<div class='typing-box col-xs-offset-2 col-xs-8 margin20' id="typingBox">
		<div id="typingBox1" class=opacity00>Let us consider a sample problem which reads 
		<span class="color-green">country_id</span> and prints the <span class="color-green">country_name.</span>
		</div>
		<div id="typingBox2" class='col-xs-12 opacity00'>
		<table id=table1 class='col-xs-offset-2 col-xs-6 padding0'>
			<tr>
				<th id='heading' class="color-green">country_id</th>
				<th id='heading1' class="color-green">country_name</th>
			</tr>
			<tr>
				<td id='heading2'>1</td>
				<td id='heading3'>United States</td>
			</tr>
			<tr>
				<td id='heading2'>2</td>
				<td id='heading3'>Spain</td>
			</tr>
			<tr>
				<td id='heading2'>3</td>
				<td id='heading3'>India</td>
			</tr>
		</table>
		</div>
		<br>
		<div id="typingBox3" class='opacity00 padding0'>This problem can be solved by using either of <span class=color-green>if-else-if</span> or <span class=color-green>switch-statement</span>.
		<span id=button1><a style="background-color:green" class="introjs-button animation-nextbtn" onclick="animate3()">Next &#8594;</a></span></div>
		<div id="typingBox4" class='opacity00 padding0'>Now let us consider how the same problem can be solved using <span class="color-green">switch-statement</span>.
		<span id=button2><a style="background-color:green" class="introjs-button animation-nextbtn1" onclick="animate4()">Next &#8594;</a></span></div>
	</div> 
<div class="col-xs-12" id=mainDiv>
		<div class="col-xs-4 mleft opacity00 padding0" id=ifelseDiv>
		<pre id=pre1 class='creamPreTab4'>
<span id='dirDeclaration'>#include&ltstdio.h&gt</span>						
<span id="mainDeclaration">void main()</span> <span id="openBrace">{</span>					
   <span id='variableDeclaration1'>int <span id="number1">country_id</span>;</span>
   <span id="enterLine1">printf("Enter a country_id\n");</span>
   <span id="enterLine2">scanf("%d",&country_id);</span>
   <div id="ifelseblock" class="display"><span id="elseifline1">if (country_id == 1)</span> <span id="openBrace1">{</span>
    <span id="sopLine1">printf("United States\n");</span>
<span id="closeBrace1">}</span> <span id="elseifline2">else if (country_id == 2)</span> <span id="openBrace2">{</span>
    <span id="sopLine2">printf("Spain\n");</span>
<span id="closeBrace2">}</span> <span id="elseifline3">else if (country_id == 3)</span> <span id="openBrace3">{</span>
    <span id="sopLine3">printf("India\n");</span>
<span id="closeBrace3">}</span> <span id="elseifline4">else</span> <span id="openBrace4">{</span>
    <span id="sopLine4">printf("Wrong Entry\n");</span>
<span id="closeBrace4">}</span></div>
<span id="closeBrace">}</span></pre>
		</div>
		<div class="col-xs-3 mleft margin10" id='middle'>
			<div class='col-xs-12 middle-panel margin10' id='middlePanel'>
				<div class="col-xs-5" id="ifPanel">
					<div class="panel-primary number-div visibility-hidden" id="panelBoxA">
						<div class="panel-heading text-center number-div"><span id="aheading">country_id</span></div>
						<div class="panel panel-body number-body text-center">
							<span class="text-center" id="addressValue3"></span>
						</div>
					</div>
					<div id="address3" class="address-text text-center visibility-hidden">2398</div>
				</div>
				<div class=" col-xs-offset-1 col-xs-5 switch-panel" id="switchPanel">
					<div class="panel-primary number-div visibility-hidden" id="panelBoxB">
						<div class="panel-heading text-center number-div"><span id="aheading">country_id</span></div>
						<div class="panel panel-body number-body text-center">
							<span class="text-center" id="addressValue4"></span>
						</div>
					</div>
					<div id="address4" class="address-text text-center visibility-hidden">1238</div>
				</div>
			</div>
			<div class=" col-xs-12 margin10 opacity00" id = consoleDiv>
				 <div class="panel-primary output-div padding0" id="outputDiv">
					<div class="panel-heading text-center" id="outputDiv">console</div>
					<div class="panel panel-body" id='output'>
						<div class="output col-xs-12">
							<div id="appendDiv1"><div id="outputAValue1" class="opacity00">Enter a country_id : <span spellcheck="false" id="firstNum" class="first-Num entered-element" maxlength="2" contentEditable="true">&nbsp;</span></span></div>
							<div id="appendDiv2"><span id="outputAValue2"></span></div>
							<div id="appendDiv3"><span id="outputAValue3" class="opacity00">Enter a country_id : <span spellcheck="false" id="firstNum1" class="first-Num entered-element" maxlength="2" contentEditable="true">&nbsp;</span></span></div>
							<div id="appendDiv4"><span id="outputAValue4"></span></div>
						</div>
					</div>
				</div>
			</div>
	</div>
</div>
		<div class="col-xs-4 opacity00 mleft position-fixed" id=switchcaseDiv>
		<pre id=pre2 class='creamPreTab4'>
<span id='sdirDeclaration'>#include&ltstdio.h&gt</span>						
<span id="smainDeclaration">void main()</span><span id="sopenBrace"> {</span>						
   <span id='svariableDeclaration1'>int<span id="number1"> country_id</span>;</span>
   <span id="senterLine1">printf("Enter a country_id\n");</span>
   <span id="senterLine2">scanf("%d",&country_id);</span>
   <div id="switchline1" class='display'>switch(<span id="switchnum">country_id</span>) <span id="sopenBrace1">{</span></div> 
	<div id="cas1" class='display'><span id="caseline1">case <span id='n1'>1</span>:</span>
    <span id="ssopLine1">printf("United States\n");</span>
    <span id="breakline1">break;</span></div>
	<div id="cas2" class='display'><span id="caseline2">case <span id='n2'>2</span>:</span>
    <span id="ssopLine2">printf("Spain\n");</span>
    <span id="breakline2">break;</span></div>
	<div id="cas3" class = 'display'><span id="caseline3">case <span id='n3'>3</span>:</span>
    <span id="ssopLine3">printf("India\n");</span>
    <span id="breakline3">break;</span></div>
	<div id="cas4" class='display'><span id="defaultline"><span id='n4'>default</span>:</span>
    <span id="ssopLine4">printf("Wrong Entry\n");</span></div>
   <span id="scloseBrace1">}</span>
<span id="scloseBrace">}</span></pre>
		</div>
</div>
<div class='col-xs-12 buttons-div'>
	<button type="button" class="btn btn-warning visibility-hidden text-center" id="restartBtn">Restart</button>
</div> 
</div>
<script>
$(document).ready(function() {
	diffIfElseAndSwitchStatementInCReady();	
});
</script>
</body>
</html>