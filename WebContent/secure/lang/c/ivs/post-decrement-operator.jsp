<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css" >
<link rel="stylesheet" href="/css/introjs-ct.css" >
<link rel="stylesheet" href="/css/animate.css">
<script src="/js/jquery-latest.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/bootstrap.min.js"></script>

<script src="/secure/lang/c/js-min/pdop.min.js"></script>

<title>post-decrement-operator.jsp</title>

<style type="text/css">

.introjs-tooltiptext br {
	margin: 15px;
}

.introjs-tooltip {
	min-width: 300px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.introjs-duplicate-nextbutton {
	background-color: green;
}

.box-border {
	border-radius: 12px;
	border: 1px solid gray;
}

.buttons-div {
	margin-top: 20px;
	margin-bottom: 5px;
	text-align: center;
}

.margin-top {
    margin-top: 25px;
}

.padding0 {
    padding: 0px;
}

#codeDiv {
 	height: 180px;
}

#animationDiv {
    height: 360px;
}

.animation-div1 {
	font-family: monospace;
	padding: 50px 0px 16px;
	opacity: 0;
	margin-top: 12px;
}

#animationDiv1 {
    margin-top: 12px;
}

.ui-effects-transfer {
    border: 1px solid blue;
    z-index: 99999999 !important;
  }
  
[contenteditable="true"] {
    outline: medium none;
}

.position {
	display: inline-block;
	position: relative;
}

#predecrementDefinition {
    height: 80px;
    margin-top: 20px;
}

.creamPreTab4 {
	-moz-tab-size: 6;
    background-color: #fffae6;
    border-radius: 8px;
    font-size: 12px;
    margin: 8px;
    padding: 10px;
    white-space: pre;
}

.svg-css {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
}

.box-padding {
	padding: 8px;
}

.panel-heading {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    padding: 2px;
}

.panel-body {
    min-height: 145px;
    padding: 15px 0 0;
}

.panel {
 	border-radius: 0px;
    background-color: #000;
    border: 1px solid transparent;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
}

.panel-primary > .panel-heading {
    background-color: lightgray;
    border-color: lightgray;
    color: #000;
}

#outputDiv {
	margin-top: 10px;
}

.fa {
	color: #b3e0ff;
}

.blinking {
	animation-name: blinkk;
	animation-duration: 1s;
	animation-iteration-count: infinite;
 }

@keyframes blinkk {
	50% {
		background:  blue;
	}
}

.svg-border {
    border: 2px solid gray;
    border-radius: 36%;
}

.cupvalue {
    color: #e60073;
    font-weight: bold;
    margin-left: -33px;
    margin-top: 8px;
    position: absolute;
}
.z-index1000000 {
	position: relative;
	background-color: white;
	z-index: 1000000 !important;
}

.circle {
	border: 2px solid blue;
	padding: 0px 1px ;
    border-radius: 50%;
}

.output {
    color: white;
    margin-top: -11px;
}

.ct-code-b-blue {
	font-weight: bold;
	font-family: monospace;
	color: blue;
}

.ct-code-b-red {
	font-weight: bold;
	font-family: monospace;
	color: rgb(252, 66, 66);
}

.ct-code-b-black {
	font-weight: bold;
	font-family: monospace;
	color: black;
}

.introcode-tooltip-min-width-custom {
	min-width: 125px;
}
</style>
</head>
<body>
<div class = "col-xs-12">
	<div class = "ct-box-main">
		 <div class = "text-center">
			<h1 class = "label ct-demo-heading text-center">Post decrement operator</h1>
		</div> 
		<div class = 'buttons-div col-xs-12'>
				<button type = "button" class = "btn btn-warning visibility-hidden" id = "restartBtn">Restart</button>
			</div> 
		<div class = "col-xs-10 col-xs-offset-2">
			<div class = "col-xs-4">
				<div id = "codeDiv"  class = "box-border margin-top">
					<pre class = 'creamPreTab4' id = "program">
<div id = 'xVariableDeclararionLine' style="display: inline-block;">int <span id = "xVariable">x</span> = <div style="display:inline-block" id='xvalue' contenteditable='true' spellcheck='false' maxlength='2'>14</div>;</div>
<span id = 'yVariableDeclararionLine'>int <span id = "yVariable">y</span> = x--;</span>
<span id = 'sopLine1'>printf("x value : %d", x);</span>
<span id = 'sopLine2'>printf("y value : %d", y);</span>
<span id = 'singleStatement'>x--;</span>
<span id = 'sopLine3'>printf("x value : %d", x);</span>
</pre>
				</div>
				<div class = "col-xs-10 col-xs-offset-1">
		  				<div class = "panel-primary output-div margin-left" id = "outputDiv">
	    					<div class = "panel-heading text-center">Output</div>
	    					<div class = "panel panel-body">
	    						<div class = "output col-xs-12">
	    						</div>
	    					</div>
	  					</div>
	 				</div>
			</div>
			<div id = "animationDiv"  class = "col-xs-5 box-border margin-top padding0">
				<div class = 'col-xs-12 padding0'>
					<div class = 'col-xs-8 col-xs-offset-2 padding0' id = "animationDiv1">
						<div class = 'col-xs-12 text-center animation-div1 padding0'>
							<span id = 'yVariableLine' class = "box-padding ">int y = <span class = "box-padding" id = "predecrement">x<span class="ct-code-b-blue">--</span></span></span>
							<svg class = 'svg-css'>
								<marker id = "arrowEnd" refX = "4" refY = "2.5" markerWidth = "5" markerHeight = "5" orient = "auto" style = "fill: gray;">
									<path d = "M0,0 L5,2.5 L0,5 Z"/>
								</marker>
								<text fill = "#333">
									<tspan x = "41%" y = "17%" fill = "white" class = 'svg-text'>post-decrement</tspan>
								</text>
								<line class = "svg-line" x1 = "62.5%" y1 = "51.3%" x2 = "62.5%" y2 = "39.2%" style = "marker-end: url(&quot;#arrowEnd&quot;); display: none;
									stroke-width: 2; stroke: gray; position: relative;"/>
							</svg>
						</div>
					<div class = "col-xs-12 padding0">
						<div class = "col-xs-12 text-center animation-div2 box-padding padding0 opacity00" id = "animationDiv2">
	  						<span class = "box-padding">y</span>
							<span>=</span>
							<span class = "box-padding" id = "assignment">x;</span>
						</div>
					</div>
					<div class = "col-xs-12 padding0">
						<div class = "col-xs-12 text-center animation-div3 box-padding padding0 opacity00" id = "animationDiv3">
	  						<span class="box-padding">x</span>
							<span>=</span>
							<span id  = "postdecrement">
							<span class = "box-padding">x</span>
							<span>-</span>
							<span class = "box-padding">1;</span>
							</span>
						</div>
					</div>
				</div>
				<div class = "col-xs-12 padding0">
				<div class = "col-xs-12 padding0" id = "expressionStatement">
				<div class="col-xs-12 padding0">
					<div class="col-xs-3 col-xs-offset-2 text-center visibility-hidden padding0" id="xCup">
	  					<i class="fa fa-coffee fa-3x x-cup"></i><span id="xCupValue" class="cupvalue visibility-hidden">8</span><br>
						<span id="xCupVariable" class = "ct-code-b-black">x</span>
	  				</div>
					<div class="col-xs-3 col-xs-offset-1 text-center visibility-hidden padding0" id="yCup">
	  					<i class="fa fa-coffee fa-3x y-cup"></i><span id="yCupValue" class="cupvalue visibility-hidden">8</span><br>
						<span id="yCupVariable" class = "ct-code-b-black">y</span>
	  				</div>
				</div>
				<div class = "col-xs-12 padding0">
					<div class = "col-xs-12 text-center box-padding animation-div5 padding0"  style = "opacity: 0;">
						<div id = "yvalueassignment" class = "box-padding">
		  					int<span class = "box-padding">y</span>
							<span class = "box-padding">=</span>
							<span>
							<span class = "box-padding" id  = "xValuedecrement">x--;</span>
							</span>
						</div>
					</div>
				</div>
				</div>
				<div class="col-xs-12 padding0">
					<div class = "col-xs-8 col-xs-offset-2 padding0"  id="animationDiv5">
						<div class="col-xs-12 text-center box-padding animation-div6 padding0" style = "opacity: 0;">
							<div id="singleStatementDiv">x--;</div>
						</div>
					</div>
				</div>
			</div>
				<div class = "col-xs-12"></div>
			</div>
			</div>	
		</div>
	</div>
		<div class = 'buttons-div col-xs-9'>
			<button type = "button" class = "btn btn-warning visibility-hidden" id = "restartBtn">Restart</button>
		</div> 
	</div>
	
	<script type="text/javascript">
	$(document).ready(function(){
		postDecrementOperatorReady();
	});
</script>
</body>
</html>