<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Circular Queue using Array</title>

<link rel="stylesheet" href="/css/bootstrap.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-all.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<script type="text/javascript" src="/js/jquery.scrollTo.js"></script>

<script type="text/javascript" src="js/circular-queue-using-array.js"></script>


<!-- Javascript for the actual visualization code -->
<script type="text/javascript" src="js-min/an-li/custom-events.js"></script>
<script type="text/javascript" src="js-min/an-li/undo-functions.js"></script>
<script type="text/javascript" src="js-min/an-li/animated-object.js"></script>
<script type="text/javascript" src="js-min/an-li/animated-label.js"></script>
<script type="text/javascript" src="js-min/an-li/animated-circle.js"></script>
<script type="text/javascript" src="js-min/an-li/animated-rectangle.js"></script>
<script type="text/javascript" src="js-min/an-li/animated-linked-list.js"></script>
<script type="text/javascript" src="js-min/an-li/highlight-circle.js"></script>
<script type="text/javascript" src="js-min/an-li/line.js"></script>
<script type="text/javascript" src="js-min/an-li/draw-line.js"></script>
<script type="text/javascript" src="js-min/an-li/object-manager.js"></script>
<script type="text/javascript" src="js-min/an-li/animation-main.js"></script>
<script type="text/javascript" src="js-min/al-li/algorithm.js"></script>

<script type="text/javascript" src="js/al-li/circular-queue-using-array.js"></script>

<style type="text/css">
.padding0 {
	padding: 0;
}

.margin-top-20 {
	margin-top: 20px;
}

.box-border {
	border: 2px solid gray;
	border-radius: 8px;
	padding: 0 10px;
}

.creampretab4 {
	-moz-tab-size: 2;
	tab-size: 2;
	background-color: lavender !important;
	font-size: 10.8px;
	font-style: inherit;
	padding: 5px;
	overflow-y: auto;
	white-space: pre;
	word-spacing: -3px;
	font-family: monospace;
}

.introjs-tooltip {
	min-width: 270px;
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
	font-weight: bold;
}

#outputDiv {
	position: relative;
	z-index: 9999999;
}

.input-group-addon {
	padding: 4px 6px;
}

.btn-sm, .btn-group-sm > .btn {
	padding: 0 6px;
	font-family: monospace;
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

.introjs-tooltiptext > ul > li {
	font-family: monospace;
}

.position-css {
	display: inline-block;
	position: relative;
}

</style>

<script type="text/javascript">

 $(document).ready(function() {
	circularQueueArrayReady();
});
</script>
</head>
<body onload="init();" class="VisualizationMainPage">
	<div id="container">
		<div class='col-xs-12 text-center' style="margin-top: 20px;">
			<h1 class='label label-default ct-demo-heading' id="heading">Circular Queue using Arrays</h1>
		</div>

		<div id="mainContent" class='col-xs-12 margin-top-20 padding0'>
			<div class='col-xs-3'>
				<div class='col-xs-12 box-border'>
					<pre class='creampretab4' id='queueInit' style="margin-top: 10px;"><span id="headerFiles">#include&lt;stdio.h&gt;</span>
#include &lt;stdlib.h&gt;

#define MAX 10
int queue[MAX];
int front = -1, rear = -1;</pre>
					<pre class='creampretab4 hide' id="queueMain">void main() {
	<div id="mainCallMethod" class="position-css"></div>		
}</pre>
					<pre class='creampretab4 hide' id="enqueuMethod">
<div class="position-css">void enqueue(<span id="enqueueXDec">int x</span>) {
	<div class="position-css" id="enqueIfCond">if (((<span id="rearIsMaxMinusOne">rear == MAX - 1</span>) && (<span id="frontIsZero">front == 0</span>))
		|| (<span id="rearPlusOneIsFront">rear + 1 == front</span>)) {</div>
		<span id="enqueIfPrintf">printf("Circular Queue is overflow\n");</span>
	} else {
		<span id="ifRearIsMaxMinusOne">if (rear == MAX - 1) {</span>
			<span id="asnRearIsMinusOne">rear = -1;</span>
		<span id="ifFrontIsMinusOne">} else if (front == -1) {</span>
			<span id="asnFrontIsZero">front = 0;</span>
		}
		<span id="rearInc">rear++;</span>
		<span id="asnArrayVal">queue[rear] = x;</span>
		<span id="enqueElsePrintf">printf("Successfully inserted.\n");</span>
	}
}</div></pre>
					<pre class='creampretab4 hide' id="dequeuMethod">
<div class="position-css" id="dequeDiv">void dequeue() {
	<span id="frontIsMinusOne">if (front == -1) {</span>
		<span id="dequeIfPrintf">printf("Circular Queue is underflow\n");</span>
	} else {
		<div id="dequeElsePrintf" class="position-css">printf("Deleted element = %d\n",
				queue[front]);</div>
		<span id="ifRearIsFront">if (rear == front) {</span>
			<span id="rearNFrontMinusOne">rear = front = -1;</span>
		<span id="frontIsMaxMinusOne">} else if (front == MAX - 1) {</span>
			<span id="asignFrontIsZero">front = 0;</span>
		} else {
			<span id="frontInc">front++;</span>
		}
	}
}</div></pre>
					<pre class='creampretab4 hide' id="displayMethod">
<div class="position-css" id="displayDiv">void display() {
	int i;
	<span id="ifFrontNRearIsMinusOne">if (front == -1 && rear == -1) {</span>
		<span id="displayIfPrintf">printf("Circular Queue is empty.\n");</span>
	} else {
		<span id="displayElsePrintf">printf("Elements in the circular queue : \n");</span>
		<span id="ifFrontLesThanRear">if (front &lt;= rear) {</span>
			<div id="frontLesRearForLoop" class="position-css">for (i = front; i <= rear; i++) {
	<span id="printf1">printf("%d", queue[i]);</span>
}</div>
		} else {
			<div id="elseFrLoop1" class="position-css">for (i = front; i <= MAX - 1; i++) {
	<span id="printf2">printf("%d", queue[i]);</span>
}</div>
			<div id="elseFrLoop2" class="position-css">for (i = 0; i <= rear; i++) {
	<span id="printf3">printf("%d", queue[i]);</span>
}</div>
		}
		<span id="displayNewLinePrintf">printf("\n");</span>
	}
}</div></pre>

				</div>
				<div id="outputDiv" class='opacity00 col-xs-12 padding0 margin-top-20'>
					<div class="output-console-title-bar">
						<span class="title">Output</span>
					</div><div class="output-console-body"><span id="output"></span>
					</div>
				</div>

			</div>
			<div class='col-xs-9'>
				<div class='col-xs-12 padding0 box-border text-center opacity00' id='animationDiv'>
					<div class='col-xs-12 padding0 margin-top-20 text-center'>
						<div class='col-xs-12 padding0 margin-top-20 text-center'>
							<div class='col-xs-offset-2 col-xs-8 padding0' id='btnsDiv'>
								<div class='col-sm-3'>
									<div class='col-sm-12 padding-col0' id='enqueueDiv'>
										<div class="input-group">
											<input class="form-control input-sm" id="enqueueText"
												name="enqueue" type="text" /> <span
												class="input-group-addon"> <span id="enqueueBtn"
												class="btn btn-sm btn-success">EnQueue</span>
											</span>
										</div>
									</div>
								</div>
	
								<div class="col-sm-offset-1 col-sm-1 padding0">
									<div class='col-sm-12' id='popDiv'>
										<div class="input-group">
											<span class="input-group-addon input-group-addon-border">
												<span id="dequeueBtn" class="btn btn-sm btn-success">DeQueue</span>
											</span>
										</div>
									</div>
								</div>
								
								<div class="col-sm-offset-2 col-sm-1 padding0">
									<div class='col-sm-12' id='displayQueueDiv'>
										<div class="input-group">
											<span class="input-group-addon input-group-addon-border">
												<span id="displayBtn" class="btn btn-sm btn-success">Display</span>
											</span>
										</div>
									</div>
								</div>
								
								<div class="col-sm-offset-2 col-sm-1 padding0">
									<div class='col-sm-12 padding0' id='clearQueueDiv'>
										<div class="input-group">
											<span class="input-group-addon input-group-addon-border">
												<span id="clearBtn" class="btn btn-sm btn-success">Clear Queue</span>
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<canvas id="canvas" width="700" height="500"></canvas>
				</div>
			</div>
			<div id="generalAnimationControlSection">
				<table id="GeneralAnimationControls" class='hide'></table>
			</div>
		</div>
	</div>
</body>
</html>