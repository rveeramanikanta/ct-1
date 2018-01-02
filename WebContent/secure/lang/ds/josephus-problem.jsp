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
<script src="/secure/lang/ds/js/josephus-problem.js"></script>
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
	margin: 0 !important;
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
	margin-bottom: 5px;
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

.ui-effects-transfer {
	z-index: 9999999;
	border: 1px solid #003399;
	border-radius: 5px;
}

p {
	margin: 0;
}

.explain-div {
	font-family: monospace;
	font-size: 12px;
	border: 1px solid gray;
	padding: 8px;
	border-radius: 8px;
	letter-spacing: 0.2px;
	z-index: 9999999;
}
</style>
</head>
<body>
<script type="text/javascript">
$(document).ready(function() {
	josephusProgramReady();
});
</script>
<div class="col-xs-12 padding0 margin-top-20">
	<div class="col-xs-12 text-center padding0">
		<h1 class="label ct-demo-heading text-center" id="headingSection">Josephus Problem</h1>
	</div>
	<div class="col-xs-12 margin-top-20"><div class="col-xs-8 col-xs-offset-2 explain-div bg-info" id="explanationDiv">
		<ul><li>According to <span class="grn">Josephus</span> account of the <span class="grn">siege of Yodfat</span>, he and his
				 40 soldiers were trapped in a <span class="grn">cave</span> by <span class="grn">Roman</span> soldiers.</li>
		 <li>They choose suicide over capture, and settled on a serial method of committing suicide by drawing lots.</li>
		 <li><span class="grn">Josephus</span> states that by luck or possibly by the hand of God,
				 he and another man remained until the end and surrendered to the Romans rather than killing themselves.</li></ul>
	</div></div>
	<div class="col-xs-12 margin-top-10">
		<div class="col-xs-6 border-css padding0 opacity00" id="kingSoldierAnimDiv">
			<div class="col-xs-12 padding0" id="kingWithSoldiers" style="margin-bottom: 15px;">
    			<div class="col-xs-2 margin-top-25">
			    	<div><i class="fa fa-male ct-blue-color"></i> - King </div>
			    	<div><i class="fa fa-user"></i> - Soldier </div>
				</div>
    			<div class="col-xs-10">
					<div class="col-xs-12 padding0">
						<div class="col-xs-6 col-xs-offset-3 padding0">
							<div class="col-xs-12">
								<div class="col-xs-2 text-center margin-top-20 soldiers" id="soldier10">
									<p class="fa fa-check opacity00" id="sym10"></p> <p><i class="val opacity00" id="val10">10</i></p> 
									<p class="fa fa-user" id="user10"></p> <p class="pos">10</p>
								</div>
								<div class="col-xs-2 col-xs-offset-2 text-center soldiers" id="soldier1">
									<p class="fa fa-check opacity00" id="sym01"></p> <p><i class="val opacity00" id="val01">1</i></p> 
									<p class="fa fa-user" id="user01"></p><p class="pos">1</p>
								</div>
								<div class="col-xs-2 col-xs-offset-2 text-center margin-top-20 soldiers" id="soldier2">
									<p class="fa fa-check opacity00" id="sym02"></p> <p><i class="val opacity00" id="val02">2</i></p> 
									<p class="fa fa-user" id="user02"></p><p class="pos">2</p>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xs-12 padding0">
						<div class="col-xs-8 col-xs-offset-2 padding0">
							<div class="col-xs-12 padding0">
								<div class="col-xs-3 text-center margin-top-20 padding0 soldiers" id="soldier9">
									<i class="fa fa-check opacity00" id="sym09"></i>&nbsp; <i class="val opacity00" id="val09">9</i>&nbsp;
									<i class="fa fa-user" id="user09"></i> <i class="pos">9</i>
								</div>
								<div class="col-xs-3 col-xs-offset-5 text-center margin-top-20 padding0 soldiers" id="soldier3">
									<i class="pos">3</i> <i class="fa fa-user" id="user03"></i>&nbsp; <i class="val opacity00" id="val03">3</i>&nbsp;
									<i class="fa fa-check opacity00" id="sym03"></i>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xs-12 padding0 text-center">
						<i class="fa fa-male fa-2x col-xs-1 col-xs-offset-5" style="color: blue;" id="king"></i>
					</div>
					<div class="col-xs-12 padding0">
						<div class="col-xs-8 col-xs-offset-2 padding0">
							<div class="col-xs-12 padding0" style="margin-top: 3px;">
								<div class="col-xs-3 text-center padding0 soldiers" id="soldier8">
									<i class="fa fa-check opacity00" id="sym08"></i>&nbsp; <i class="val opacity00" id="val08">8</i>&nbsp;
									<i class="fa fa-user" id="user08"></i> <i class="pos">8</i>
								</div>
								<div class="col-xs-3 col-xs-offset-5 text-center padding0 soldiers" id="soldier4">
									<i class="pos">4</i> <i class="fa fa-user" id="user04"></i>&nbsp; <i class="val opacity00" id="val04">4</i>&nbsp;
									<i class="fa fa-check opacity00" id="sym04"></i>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xs-12 padding0 margin-top-20">
						<div class="col-xs-6 col-xs-offset-3 padding0">
							<div class="col-xs-12" style="margin-top: 3px;">
								<div class="col-xs-2 text-center soldiers" id="soldier7">
									<p class="pos">7</p> <p class="fa fa-user" id="user07"></p> <p><i class="val opacity00" id="val07">7</i></p> 
									<p class="fa fa-check opacity00" id="sym07"></p>
								</div>
								<div class="col-xs-2 col-xs-offset-2 text-center margin-top-20 soldiers" id="soldier6">
									<p class="pos">6</p> <p class="fa fa-user" id="user06"></p> <p><i class="val opacity00" id="val06">6</i></p> 
									<p class="fa fa-check opacity00" id="sym06"></p>
								</div>
								<div class="col-xs-2 col-xs-offset-2 text-center soldiers" id="soldier5">
									<p class="pos">5</p> <p class="fa fa-user" id="user05"></p> <p><i class="val opacity00" id="val05">5</i></p> 
									<p class="fa fa-check opacity00" id="sym05"></p>
								</div>
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
<span id="typeDefDec">typedef struct list *node;</span>
<span id="globalfirstDec">node first = NULL;</span></pre></div>
<pre class="pre-tab" id="mainPre">int main() {
	<div class="position-css" id="decSNamelast"><span id="globallastDec">node last = first;</span>
<span>char sName[10];</span></div>
	<div id="printf1">printf("Enter name of the soldier : ");
scanf("%s", sName);</div>
	<span id="strCmpCond">while(strcmp(sName, "end") != 0) {</span>
		<span id="addNodeMethod">last = addNode(last, sName);</span>
		<div id="printf2">printf("Enter name of the soldier : ");
scanf("%s", sName);</div>
	}
	<span id="displayMethod">display();</span>
	<span id="deleteMethod">delete(last);</span>
}</pre>
<div><pre class="pre-tab hide" id="createNodePre">node createNode() {
    node temp;
    <span id="mallocMethod">temp = (node) malloc(sizeof(struct list));</span>
    temp -> next = NULL;
    return temp;
}</pre></div>
		</div>
		<div class="col-xs-7 col-xs-offset-1 hide animation-div" style="padding-right: 0px">
			<div class="col-xs-12 padding0">
				<div class="col-xs-12 border-css opacity00" id="animationDiv" style='padding: 8px;'>
					<div class="col-xs-12" id="variablesDiv">
						<div class="col-xs-1 text-center padding0 opacity00" id="firstVarDecMain">
							<div class="col-xs-12 green-color padding0">first<sub>main</sub></div>
							<div class="col-xs-12 box"><span id="firstValMain" class="green-color opacity00 position-css">NULL</span></div>
						</div>
						<div class="col-xs-1 col-xs-offset-1 text-center padding0 opacity00" id="lastVarDecMain">
							<div class="col-xs-12 green-color padding0">last<sub>main</sub></div>
							<div class="col-xs-12 box"><span id="lastValMain" class="green-color opacity00 position-css">NULL</span></div>
						</div>
					</div>
					<div class="col-xs-12 margin-top-20" id="nodesDiv" style="font-size: 12px; padding-right: 0px;">
						<div class="col-xs-12 padding0" id="row1" style="min-height: 55px;"></div>
						<div class="col-xs-12 padding0" id="row2"></div>
					</div>
					<div class="col-xs-12 margin-top-25" id="variableNodesDiv"></div>
				</div>
				<div class="col-xs-12 padding0">
<pre class="pre-tab hide margin-top-10" id="printPre"></pre>
			</div>
				<div class="col-xs-12 margin-top-10">
					<div class="col-xs-10 col-xs-offset-1 console padding0 opacity00" id="outputDiv">
						<div class="output-console-title-bar">Output</div>
						<div class="output-console-body" id="output"></div>
					</div>
				</div>
				<div class="col-xs-12 margin-top-20 text-center"><span class="btn btn-warning opacity00" id="restartBtn">Restart</span></div>
			</div>
		</div>
	</div>
</div>
</body>
</html>