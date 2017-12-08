<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Josephus Problem</title>
<link href="/css/bootstrap.min.css" rel="stylesheet" >
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/jquery-ui.css" rel="stylesheet" >
<link href="/css/animate.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/jquery.scrollTo.js"></script>
<script src="/secure/lang/ds/js/josephus-problem.js"></script>

<style type="text/css">
.margin-top25 {
	margin-top : 25px;
}

.margin-top15 {
	margin-top : 15px;
}

.border-css {
	border: 2px solid gray;
	border-radius: 8px;
	padding: 4px;
}

.pre-tab {
	-moz-tab-size: 4;
	tab-size: 4;
	margin: 6px;
	background-color: #fffae6;
	border-radius: 8px;
	font-size: 11.5px;
	font-family: monospace;
}

.ct-css, .green-color, .blue-color, .brown-color, y {
	font-family: monospace;
	font-weight: bold;
}

.padding0 {
	padding: 0;
}

.green-color {
	color: green;
}

.blue-color {
	color: blue;
}

.brown-color {
	color: brown;
}

y {
	color: yellow;
}

.box {
	text-align: center;
	border-radius: 6px;
	border: 1px solid green;
}

.margin-left {
	margin-left: 9%;
}

.div-border {
	margin: 0;
	padding: 0;
	width: 35px;
	min-height: 24px;
	text-align: center;
	display: inline-block;
	border: 2px solid gray;
	font-size: 10px;
}

.left-radius {
	border-right: none;
	border-color: blue;
	border-radius: 6px 0 0 6px;
	width: 65px;
}

.right-radius {
	border-color: green;
	border-radius: 0 6px 6px 0;
}

.position-css {
	display: inline-block;
	position: relative;
}

.btn-success {
	padding: 1px 7px;
	font-family: monospace;
	display: none;
	z-index: 99999999;
	position: relative;
}

.output-console-title-bar {
	border-radius: 8px 8px 0px 0px;
	font-weight: bold; 
}

.output-console-body {
	height: 200px;
	border-radius: 0px 0px 8px 8px;
	padding: 10px;
	white-space: initial;
	font-size: 11.5px;
}

.user-btn {
	background-color: green;
}

.introjs-tooltip {
	min-width: 300px;
}

.zindex-css {
	z-index: 9999999;
	background-color: white;
	position: relative;
}

.background-yellow {
	background-color: yellow;
}

.user-txt {
	background-color: black;
	color: yellow;
	font-family: monospace;
	font-weight:bold;
	border: none; 
}

.svg-css {
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	position: absolute;
}

.svg-line {
	stroke: gray;
	stroke-width: 2; 
	position: relative;
	marker-end: url("#arrowEnd"); 
}

polyline {
	fill: transparent;
}
</style>
</head>
<body>

<script type="text/javascript">
	$(document).ready(function() {
		josephusProblemReady();
	});
</script>

<div class="col-xs-12 margin-top15"> 
	<div class="col-xs-12 text-center">
		<h1 class="label ct-demo-heading" id="headingSection">Josephus Problem</h1>
	</div>
	<div class="col-xs-12 margin-top15 padding0">
		<div class="col-xs-4 border-css padding0 opacity00" id="codeDiv">
		<div class="text-center" style="margin-top: 5px;"><span id="includeBtn" class="btn btn-success">Struct List</span></div>
<div><pre class="pre-tab" id="includePre">#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;
<span id="structDec">struct list {
	char name[10];
	struct list *next;
};</span>
<span id="typeDefDec">typedef struct list *node;</span></pre></div>
<pre class="pre-tab hide" id="mainPre">int main() {
	<div id="nodesDecInMain"><span>node q, temp, first;</span>
<span>first = NULL;</span></div>
	<div id="endSNmeIAndNDec"><span>char sName[10];</span>
<span>int i, n;</span></div>
	<div id="printf1">printf("Enter Name of the Soldier : ");
scanf("%s", sName);</div>
	<div id="strCmpWhileLoop">while(<span id="strCmpCond">strcmp(sName, "end") != 0</span>) {
	<span id="allocMemory">temp = (node)malloc(sizeof(struct list));</span>
	<div id="assignNameNextVal"><span>strcpy(temp -> name, sName);</span>
<span>temp -> next = NULL;</span></div>
	<div id="ifFirstIsNull"><span>if (first == NULL) {</span>
	<span>first = temp;</span>
} else {
	<span>q -> next = temp;</span>
}</div>
	<span id="tempToQ">q = temp;</span>
	<div id="printf2">printf("Enter Name of the Soldier : ");
scanf("%s", sName);</div>
}</div>
	<span id="firstToQNext">q -> next = first;</span>
	<span id="printf3">printf("The Original Soldiers List is --> ");</span>
	<span id="callingPrintMethod">print(first);</span>
	<div id="">printf("Enter a Value : ");
scanf("%d", &n);</div>
	while(first != first -> next) {
		for(i = 1; i < n; i++) {
			q = first;
			first = first -> next;
		}
		q -> next = first -> next;
		printf("The Eliminated Soldier is --> %s\n", 
						first -> name);
		free(first);
		first = q -> next;
	}
	printf("The Escaped Soldier is  -->  %s\n",
					 first ->name);
}</pre>
		</div>
		<div class="col-xs-8" style="padding-right: 0px">
			<div class="col-xs-12 padding0">
				<div class="col-xs-12 border-css opacity00" id="animationDiv" style='padding: 8px;'>
					<div class="col-xs-12 margin-top15" id="variablesDiv">
						<div class="col-xs-1 text-center padding0 opacity00" id="firstVarDecMain">
							<div class="col-xs-12 green-color padding0">first<sub>main</sub></div>
							<div class="col-xs-12 box"><span id="firstValMain" class="green-color opacity00 position-css">NULL</span></div>
						</div>
					</div>
					<div class="col-xs-12 padding0 margin-top25" id="nodesDiv" style="font-size: 12px; padding-right: 0px;">
						<div class="col-xs-12 padding0" id="row1" style="min-height: 55px;"></div>
						<div class="col-xs-12 padding0" id="row2"></div>
					</div>
					<div class="col-xs-12 margin-top25" id="variableNodesDiv" style="margin-bottom: 10px;"></div>
				</div>
			</div>
			<div class="col-xs-12 padding0">
<pre class="pre-tab hide" id="printPre">void print(<span id="firstDecPrint">node first</span>) {
	<span id="qDecPrint">node q = first;</span>
	<span id="doWhileBlock">do {
		<span id="printf4">printf(" --> %s ", q -> name);</span>
		<span id="qNextToQ">q = q -> next;</span>
	<span id="qNotFirstWhile">} while(q != first);</span></span>
	<span id="printf5">printf("NULL\n");</span>
}</pre>
			</div>
			<div class="col-xs-12 console padding0 opacity00" id="outputDiv">
				<div class="output-console-title-bar">Output</div>
				<div class="output-console-body" id="output"></div>
			</div>
		</div>
	</div>
</div>
</body>
</html>