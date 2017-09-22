<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>DeQueue using linked list</title>

<link rel="stylesheet" href="/css/bootstrap.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-all.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<script type="text/javascript" src="/js/jquery.scrollTo.js"></script>
<script type="text/javascript" src="js/dequeue-using-linked-list.js"></script>


<!-- Javascript for the actual visualization code -->
<script type="text/javascript" src="js/an-li/custom-events.js"></script>
<script type="text/javascript" src="js/an-li/undo-functions.js"></script>
<script type="text/javascript" src="js/an-li/animated-object.js"></script>
<script type="text/javascript" src="js/an-li/animated-label.js"></script>
<script type="text/javascript" src="js/an-li/animated-circle.js"></script>
<script type="text/javascript" src="js/an-li/animated-rectangle.js"></script>
<script type="text/javascript" src="js/an-li/animated-linked-list.js"></script>
<script type="text/javascript" src="js/an-li/highlight-circle.js"></script>
<script type="text/javascript" src="js/an-li/line.js"></script>
<script type="text/javascript" src="js/an-li/draw-line.js"></script>
<script type="text/javascript" src="js/an-li/object-manager.js"></script>
<script type="text/javascript" src="js/an-li/animation-main.js"></script>
<script type="text/javascript" src="js/al-li/algorithm.js"></script>
<!-- <script type="text/javascript" src="js/al-li/dequeue-dummy.js"></script> -->

<script type="text/javascript" src="js/al-li/dequeueLL.js"></script>

<style type="text/css">
.ct-demo-heading {
	background: highlight none repeat scroll 0 0;
	border-radius: 10px;
	font-size: 18px;
	position: relative;
	z-index: 9999999;
	position: relative;
}

.padding0 {
	padding: 0;
}

.margin-top-20 {
	margin-top: 20px;
}

.box-border {
	border: 2px solid gray;
	border-radius: 8px;
}

.creampretab4 {
	-moz-tab-size: 2;
	tab-size: 2;
	background-color: lavender !important;
	font-size: 10.8px;
	font-style: inherit;
	padding: 3px;
	overflow-y: auto;
	white-space: pre;
	word-spacing: -3px;
}

.introjs-tooltiptext {
	min-width: 250px;
}

.introjs-tooltiptext li span {
	display: inline-block;
}

.ct-code-b-red {
	color: red;
	font-weight: bold;
}

.background-color-yellow {
	background-color: yellow;
}

.output-console-body {
	border-bottom-left-radius: 6px;
	border-bottom-right-radius: 6px;
	height: 100px;
	padding: 10px;
}

.output-console-title-bar {
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
}

#outputDiv {
	position: relative;
	z-index: 9999999;
}

.input-group-addon {
	padding: 4px 6px;
}

.btn-sm, .btn-group-sm>.btn {
	padding: 0 6px;
}

.input-group-addon-border {
	border: 1px solid #ccc !important;
	border-radius: 4px !important;
}

.padding-col0 {
	padding: 0;
}

y, r {
	font-family: monospace;
	font-weight: bold;
}

y {
	color: yellow;
}

r {
	color: red;
}

.user-btn {
	background-color: green;
}

.introjs-tooltiptext>ul>li {
	font-family: monospace;
}

/* #mainCalls {
	 overflow-y: auto;
	 height: 80px;
} */
</style>

<script type="text/javascript">
	$(document).ready(function() { 
		dequeueLinkedListReady();
	});
</script>
</head>
<body onload ='init()' class="VisualizationMainPage">
	<div id="container">
		<div class='col-xs-12 text-center' style="margin-top: 20px;">
			<h1 class='label label-default ct-demo-heading'>Double Ended Queue using Linked List</h1>
		</div>

		<div id="mainContent" class='col-xs-12 margin-top-20 padding0'>
			<div class='col-xs-3'>
				<div class='col-xs-12 box-border'>
					<pre class='creampretab4' id='queueInit' style="margin-top: 10px;"><span id="strcutSpan">struct queue {
	int info;
	struct queue *next;
};</span>

<span id="typeDefDec">typedef struct queue *DeQueue;</span>
<span id="declareFirstAndRearNode">DeQueue front = NULL, rear = NULL;</span>
</pre>

					<pre class='creampretab4 hide' id='mainFun'>
void main() {<div id='mainCalls'></div>
}
</pre>

					<pre class='creampretab4 hide function' id='injectFun' style="margin-top: 10px;">
void inject(<span id='injectParameter'>int element</span>) {
	<span id='injectTempDef'>DeQueue temp = NULL;</span>
	<span id='injectinitTemp'>temp = (DeQueue)malloc(sizeof(struct queue));</span>
	<span id="injectBlk1"><span id='injectIf'>if(<span id='injectFirstIfCndtn'>temp == NULL</span>) {</span>
		<span id='injectIfPrintf'>printf("Queue is underflow.");</span>
	} else {
		<span id='injecttempInfoInit'>temp -> info = element;</span>
		<span id='injecttempNextInit'>temp -> next = NULL;</span>
		<span id='injectElseIfElseBlk'><span id='injectElseIf'>if(<span id='injectSecondIfCndtn'>front == NULL</span>) {</span>
			<span id='injectFrontInit'>front = temp;</span>
		} else {
			<span id='injectRearNextInit'>rear -> next = temp;</span>
		}</span>
		<span id='injectElsePrintfBlk'><span id='injectRearInit'>rear = temp;</span>
		<span id='injectElsePrintf'>printf("Successfully inserted.");</span></span>
	}</span>
}
</pre>

					<pre class='creampretab4 hide function' id='popFun' style="margin-top: 10px;">
void pop() {
	<span id='popTempDef'>Q temp = NULL;</span>
	<span id="popBlk1"><span id='popIf'>if(<span id='popIfCndtn'>front == NULL</span>) {</span>
		<span id='popIfPrintf'>printf("Queue is underflow.");</span>
	} else {
		<span id='popTempInit'>temp = front;</span>
		<span id='popElseIfElseBlk'><span id='popElseIf'>if (<span id='popElseIfCndtn'>front == rear</span>) {</span>
			<span id='popRearFrontInit'>front = rear = NULL;</span>
		} else {
			<span id='popFrontInit'>front = front -> next;</span>
		}</span>
		<span id='popElsePrintfBlk'><span id='popElsePrintf'>printf("Deleted value at front = "
		"%d.", temp -> info);</span>
		<span id='popRemoveTemp'>free(temp);</span></span>
	}</span>
}
</pre>
					
					<pre class='creampretab4 hide function' id='displayFun' style="margin-top: 10px;">
void display() {
	<span id='displayBlk1'><span id='displayIf'>if(<span id='displayIfCndtn'>front == NULL</span>) {</span>
		<span id='displayIfPrintf'>printf("Queue is empty.");</span> 
	} else {
		<span id='displayFrontToTemp'>DeQueue temp = front;</span>
		<span id='displayElsePrintf'>printf("Elements in the queue : ");</span>
		<span id='displayBlk2'><span id='displayWhile'>while(<span id='displayWhileCndtn'>temp != NULL</span>) { </span>
			<span id='displayWhilePrintf'>printf("%d ", temp -&gt; info);</span>
			<span id='displayTempNext'>temp = temp -&gt; next;</span>
		}</span>
	}</span>
}
</pre>
					
					<pre class='creampretab4 hide function' id='ejectFun' style="margin-top: 10px;">
void eject() {
	<span id='ejectTempDef'>DeQueue temp = NULL;</span>
	<span id="ejectBlk1"><span id='ejectIf'>if(<span id='ejectIfCndtn'>rear == NULL</span>) {</span>
		<span id='ejectIfPrintf'>printf("Queue is underflow.");</span>
	} else {
		<span id='ejectTempInit'>temp = front;</span>
		<span id='ejectElseIfElseBlk'><span id='ejectElseIf'>if (<span id='ejectElseIfCndtn'>front == rear</span>) {</span>
			<span id='ejectRearFrontInit'>front = rear = NULL;</span>
		} else {
			<span id='ejectBlk2'><span id='ejectWhile'>while(<span id='ejectWhileCndtn'>temp -> next != rear</span>) { </span>
				<span id='ejectTempNext'>temp = temp -&gt; next;</span>
			<span id='close'>}</span></span>
			<span id='ejectSetRearToNull'><span id='enjectrearToTmp'>rear=temp;</span>
			<span id='enjectTempToRerNxt'>temp = rear -> next;</span>
	       <span id='enjectRearNxtNull'>rear->next = NULL;</span></span>
		}</span>
		<span id='ejectElsePrintfBlk'><span id='ejectElsePrintf'>printf("Deleted value at rear = "
		"%d.", temp -> info);</span>
		<span id='ejectRemoveTemp'>free(temp);</span></span>
	}</span>
}</pre>
					<pre class='creampretab4 hide function' id='pushFun' style="margin-top: 10px;">
void push(<span id='pushParameter'>int element</span>) {
	<span id='pushTempDef'>DeQueue temp = NULL;</span>
	<span id='pushinitTemp'>temp = (DeQueue)malloc(sizeof(struct queue));</span>
	<span id="pushBlk1"><span id='pushIf'>if(<span id='pushFirstIfCndtn'>temp == NULL</span>) {</span>
		<span id='pushIfPrintf'>printf("Queue is underflow.");</span>
	} else {
		<span id='pushtempInfoInit'>temp -> info = element;</span>
		<span id='pushtempNextInit'>temp -> next = front;</span>
		<span id='pushElsePrintfBlk'><span id='pushFrontInit'>front = temp;</span>
		<span id='pushElsePrintf'>printf("Successfully inserted.");</span></span></span>
	}
}
</pre>

				</div>			
			<div id="outputDiv" class='opacity00 col-xs-12 padding0 margin-top-20'>
					<div class="output-console-title-bar">
						<span class="title">Output</span>
					</div><div class="output-console-body"><span id="output"></span>
					</div>
				</div>
			
			</div>
			<div class='col-xs-9'>
				<div class='col-xs-12 padding0 box-border text-center'
					id='animationDiv'>
					<div class='col-xs-12 padding0 margin-top-20 text-center'>
						<div class='col-xs-10 col-xs-offset-1 padding0' id='btnsDiv'>
						
							<div class='col-xs-2'>
								<div class='col-xs-12 padding-col0' id='injectDiv'>
									<div class="input-group">
										<input class="form-control input-sm" id="injectText"
											name="inject" type="text"/> <span
											class="input-group-addon"> <span id="injectBtn"
											class="btn btn-sm btn-success">Inject</span>
										</span>
									</div>
								</div>
							</div>
							
							<div class ='col-xs-2'>
								<div class='col-xs-10' id='popDiv'>
									<div class="input-group">
										<span class="input-group-addon input-group-addon-border">
											<span id="popBtn" class="btn btn-sm btn-success">Pop</span>
										</span>
									</div>
								</div>
							</div>
							
							<div class="col-xs-2">
								<div class='col-xs-12 padding-col0' id='pushDiv'>
									<div class="input-group">
										<input class="form-control input-sm" id="pushText"
											name="push" type="text"/> <span
											class="input-group-addon"> <span id="pushBtn"
											class="btn btn-sm btn-success">Push</span>
										</span>
									</div>
								</div>
							</div>
							
							<div class ='col-xs-2'>
								<div class='col-xs-10' id='ejectDiv'>
									<div class="input-group">
										<span class="input-group-addon input-group-addon-border">
											<span id="ejectBtn" class="btn btn-sm btn-success">Eject</span>
										</span>
									</div>
								</div>
							</div>
							
							<div class ='col-xs-2'>
								<div class='col-xs-12' id='displayDiv'>
									<div class="input-group">
										<span class="input-group-addon input-group-addon-border">
											<span id="displayBtn" class="btn btn-sm btn-success">Display</span>
										</span>
									</div>
								</div>
							</div>
							
							<div class ='col-xs-2'>
								<div class='col-xs-12' id='clearDiv'>
									<div class="input-group">
										<span class="input-group-addon input-group-addon-border">
											<span id="clearBtn" class="btn btn-sm btn-success">Clear Queue</span>
										</span>
									</div>
								</div>
							</div>
							
						</div>

					</div>
					<canvas id="canvas" width="800" height="500" class='opacity00'></canvas>
				</div>
			</div>
			<div id="generalAnimationControlSection">
				<table id="GeneralAnimationControls" class='hide'></table>
			</div>
		</div>
	</div>
</body>
</html>
