<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Josephus problem</title>
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
<script src="/secure/lang/ds/js/josephus.js"></script>
<style type="text/css">
.padding0 {
	padding: 0px;	
}

.border-css {
	border: 1px solid gray;
	padding: 8px;
	min-height: 150px;
	border-radius: 8px;
}

.margin-top-25 {
	margin-top: 25px;
}

.margin-top-20 {
	margin-top: 20px;
}

.margin-top-10 {
	margin-top: 10px;
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

.user-btn {
	background-color: green;
}

y {
	color: yellow;
}

.err-msg, .red {
	color: red;
}


.green-color, .grn {
	color: green;
}

.blue-color {
	color: blue;
}

.brown-color {
	color: brown;
}

.ct-css, y, .kill-val, .err-msg, .green-color, .blue-color, .brown-color {
	font-weight: bold;
	font-family: monospace;
}

.kill-val {
	background-color: black;
	color: while;
	border: none;
	border-radius: 8px;
	text-align: center;
}

.blink {
	animation-name: blinking;
	animation-duration: 1s;
	animation-iteration-count: 2;
 }

@keyframes blinking {
	100% {color:  red;}
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
	width: 38px;
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

.output-console-title-bar {
	border-radius: 8px 8px 0px 0px;
	font-weight: bold; 
}

.output-console-body {
	height: 150px;
	border-radius: 0px 0px 8px 8px;
	padding: 10px;
	white-space: initial;
	font-size: 11.5px;
}

.pre-tab {
	-moz-tab-size: 4;
	tab-size: 4;
	margin-bottom: 6px;
	background-color: #fffae6;
	border-radius: 8px;
	font-size: 11.5px;
	font-family: monospace;
}

.background-yellow {
	background-color: yellow;
}

.btn-success {
	padding: 1px 7px;
	font-family: monospace;
	display: none;
	z-index: 99999999;
	position: relative;
}

.user-txt {
	background-color: black;
	color: yellow;
	font-family: monospace;
	font-weight:bold;
	border: none; 
}

.zindex-css {
	z-index: 9999999;
	background-color: white;
	position: relative;
}

polyline {
	fill: transparent;
}
</style>
</head>
<body>
<script type="text/javascript">
$(document).ready(function() {
	josephusProgramReady();
});
</script>
<div class="col-xs-12 padding0 margin-top-25">
	<div class="col-xs-12 text-center padding0">
		<h1 class="label ct-demo-heading text-center" id="headingSection">Josephus Problem</h1>
	</div>
	<div class="col-xs-12 margin-top-25">
		<div class="col-xs-6 border-css margin-top-25 padding0 opacity00" id="kingSoldierAnimDiv">
			<div class="col-xs-12 padding0" id="kingWithSoldiers" style="margin-top: 15px; margin-bottom: 15px;">
				<div class="col-xs-12 padding0">
					<div class="col-xs-4 col-xs-offset-4 padding0">
						<div class="col-xs-12">
							<div class="col-xs-2 text-center margin-top-20 soldiers" id="soldier10">
								<i class="fa fa-check" id="sym10"></i><i class="val" id="val10">10</i><i class="fa fa-user" id="user10"></i>
							</div>
							<div class="col-xs-2 col-xs-offset-3 text-center soldiers" id="soldier1">
								<i class="fa fa-check" id="sym01"></i><i class="val" id="val01">1</i><i class="fa fa-user" id="user01"></i>
							</div>
							<div class="col-xs-2 col-xs-offset-2 text-center margin-top-20 soldiers" id="soldier2">
								<i class="fa fa-check" id="sym02"></i><i class="val" id="val02">2</i><i class="fa fa-user" id="user02"></i>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xs-12 padding0">
					<div class="col-xs-6 col-xs-offset-3 padding0">
						<div class="col-xs-12">
							<div class="col-xs-2 text-center margin-top-20 padding0 soldiers" id="soldier9">
								<i class="fa fa-check" id="sym09"></i>&nbsp;<i class="val" id="val09">9</i>&nbsp;<i class="fa fa-user" id="user09"></i>
							</div>
							<div class="col-xs-2 col-xs-offset-8 text-center margin-top-20 padding0 soldiers" id="soldier3">
								<i class="fa fa-user" id="user03"></i>&nbsp;<i class="val" id="val03">3</i>&nbsp;<i class="fa fa-check" id="sym03"></i>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xs-12 padding0 text-center"><i class="fa fa-male fa-2x" style="color: blue;" id="king"></i></div>
				<div class="col-xs-12 padding0">
					<div class="col-xs-6 col-xs-offset-3 padding0">
						<div class="col-xs-12">
							<div class="col-xs-2 text-center margin-top-10 padding0 soldiers" id="soldier8">
								<i class="fa fa-check" id="sym08"></i>&nbsp;<i class="val" id="val08">8</i>&nbsp;<i class="fa fa-user" id="user08"></i>
							</div>
							<div class="col-xs-2 col-xs-offset-8 text-center margin-top-10 padding0 soldiers" id="soldier4">
								<i class="fa fa-user" id="user04"></i>&nbsp;<i class="val" id="val04">4</i>&nbsp;<i class="fa fa-check" id="sym04"></i>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xs-12 padding0 margin-top-20">
					<div class="col-xs-4 col-xs-offset-4 padding0">
						<div class="col-xs-12">
							<div class="col-xs-2 text-center soldiers" id="soldier7">
								<i class="fa fa-user" id="user07"></i><i class="val" id="val07">7</i><i class="fa fa-check" id="sym07"></i>
							</div>
							<div class="col-xs-2 col-xs-offset-3 text-center margin-top-20 soldiers" id="soldier6">
								<i class="fa fa-user" id="user06"></i><i class="val" id="val06">6</i><i class="fa fa-check" id="sym06"></i>
							</div>
							<div class="col-xs-2 col-xs-offset-2 text-center soldiers" id="soldier5">
								<i class="fa fa-user" id="user05"></i><i class="val" id="val05">5</i><i class="fa fa-check" id="sym05"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-4 border-css padding0 hide" id="codeDiv">
<div class="text-center" style="margin-bottom: 5px;"><span id="includeBtn" class="btn btn-success">Struct List</span></div>
<div><pre class="pre-tab opacity00" id="includePre"><span id="structDec">struct list {
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
	<div id="allocMemory"><span>temp = (node)malloc(sizeof(struct list));</span>
<span>strcpy(temp -> name, sName);</span>
<span>temp -> next = NULL;</span></div>
	<div id="ifFirstIsNull"><span>if (first == NULL) {</span>
	<span>first = temp;</span>
} else {
	<span>q -> next = temp;</span>
}</div>
	<div id="tempToQ">q = temp;
printf("Enter Name of the Soldier : ");
scanf("%s", sName);</div>
}</div>
	<div id="firstToQNext">q -> next = first;
printf("The Original Soldiers List is --> ");</div>
	<span id="callingPrintMethod">print(first);</span>
	<div id="printf4">printf("Enter a Value : ");
scanf("%d", &n);</div>
	<div id="whileCond"><span id="firstIsNotFirstNext">while(first != first -> next) {</span>
	<span id="forLoop">for(i = <span id="iInit">1</span>; <span id="iLessThanN">i < n</span>; <span id="iInc">i++</span>) {</span>
		<span id="firstToQ">q = first;</span>
		<span id="firstNextToFirst">first = first -> next;</span>
	}
	<span id="firstNextToQNext">q -> next = first -> next;</span>
	<span id="printf5">printf("The Eliminated Soldier is --> %s\n", first -> name);</span>
	<span id="free">free(first);</span>
	<span id="qNextToFirst">first = q -> next;</span>
}</div>
	<span id="printf6">printf("The Escaped Soldier is  -->  %s\n",
					 first -> name);</span>
}</pre>
		</div>
		<div class="col-xs-7 col-xs-offset-1" style="padding-right: 0px">
			<div class="col-xs-12 padding0">
				<div class="col-xs-12 border-css opacity00" id="animationDiv" style='padding: 8px;'>
					<div class="col-xs-12" id="variablesDiv">
						<div class="col-xs-1 text-center padding0 opacity00" id="firstVarDecMain">
							<div class="col-xs-12 green-color padding0">first<sub>main</sub></div>
							<div class="col-xs-12 box"><span id="firstValMain" class="green-color opacity00 position-css">NULL</span></div>
						</div>
					</div>
					<div class="col-xs-12 margin-top-20" id="nodesDiv" style="font-size: 12px; padding-right: 0px;">
						<div class="col-xs-12 padding0" id="row1" style="min-height: 55px;"></div>
						<div class="col-xs-12 padding0" id="row2"></div>
					</div>
					<div class="col-xs-12 margin-top-25" id="variableNodesDiv"></div>
				</div>
				<div class="col-xs-12 margin-top-10">
					<div class="col-xs-10 col-xs-offset-1 console padding0 opacity00" id="outputDiv">
						<div class="output-console-title-bar">Output</div>
						<div class="output-console-body" id="output"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</body>
</html>