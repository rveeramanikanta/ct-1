
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
<script src="/secure/lang/ds/js-min/ssle.min.js"></script>

<title>live name</title>
<style type="text/css">

.introjs-tooltip {
	min-width: 350px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.introjs-duplicate-nextbutton {
	background-color: green;
	margin: 0px !important;
}

.introjs-duplicate-skipbutton {
	background-color: orange;
	margin: 0 5px !important;
}

.blinking {
	animation-name: blink;
	animation-duration: 1s;
	animation-iteration-count: 2;
 }

@keyframes blink {
	50% {
		background:  blue;
	}
}

.animated {
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.box-border {
	border-radius: 12px;
	border: 2px solid gray;
}

.buttons-div {
	margin-top: 20px;
	margin-bottom: 5px;
	text-align: center;
}

div, span {
	position: relative;
}

.creamPreTab, .creamPreTab4 {
	tab-size: 3;
	margin: 2px;
	padding: 12px;
	font-size: 12px;
	-moz-tab-size: 2;
	white-space: pre;
	border-radius: 8px;
	font-family: monospace;
	background-color: #fffae6;
}

.creamPreTab4 {
	tab-size: 3;
	font-size: 11px;
}

.panel-primary > .panel-heading {
	background-color: lightgray;
	border-color: lightgray;
	color: #000;
}

.panel-heading {
	padding: 2px;
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
}

.panel-body {
	min-height: 77px;
	padding: 15px 0 0;
}

.panel {
	border-radius: 0px;
	background-color: #000;
	border: 1px solid transparent;
	border-bottom-left-radius: 6px;
	border-bottom-right-radius: 6px;
}

.ifConditionFontSize, #outerArrow, #innerArrow {
	font-size: 12px;
}

.ui-effects-transfer {
	border: 1px solid blue;
	z-index: 99999999 !important;
}

.z-index1000000 {
	position: relative;
	background-color: white;
	z-index: 1000000 !important;
}

[contenteditable="true"] {
	outline: medium none;
}

.padding00 {
	padding: 1px;
}

.margin-top {
	margin-top: 20px;
}

.position {
	display: inline-block;
	position: relative;
}

.inner-loop-color {
	font-weight: bold;
	color: green !important;
	font-family: monospace;
}

.outer-loop-color {
	font-weight: bold;
	color: blue !important;
	font-family: monospace; 
}

.browen-color {
	font-weight: bold;
	color: #ff5500 !important;
	font-family: monospace; 
}

.position-color {
	font-weight: bold;
	color: #660000 !important;
	font-family: monospace; 
}

.ct-code-b-red {
	font-weight: bold;
	font-family: monospace;
	color: rgb(252, 66, 66);
}

.ct-code-b-green {
	font-weight: bold;
	font-family: monospace;
	color: #42f44e;
}

.ct-code-b-white {
	font-weight: bold;
	font-family: monospace;
	color: white;
}

.ct-code-b-blue {
	font-weight: bold;
	font-family: monospace;
	color: #6699ff;
}

#explanationDiv1 {
   /*  max-height : 200px; */
    padding: 2px;
    background-color: #fffae6;
    font-family: monospace;
    font-size: 13px;
}

#explanationDiv {
	height : 170px;
}

.ct-code-b-green {
	font-weight: bold;
	font-family: monospace;
	color: green;
}

.ct-code-b-red {
	font-weight: bold;
	font-family: monospace;
	color: red;
}

.ct-code-b-black {
	font-family: monospace;
	background-color: black;
	color: white;
	padding: 1px;
	border-radius: 4px;
	white-space: nowrap;
	font-size: 12px;
}

#arrDec > div {
	display: inline-block;
}

td {
	padding: 4px 6px;
	border: 2px solid gray;
	min-width: 65px !important;
	min-height: 30px !important;
	text-align: center !important;
}

.popover-content {
	font-size: 14px;
}

.popover {
	width: 200px;
	font-size: 15px !important;
}

.eleAtInnerIdx {
	padding: 5px;
}

.eleAtInnerIdxDiv {
	margin-top: 12px;
}


</style>

</head>
<body>

<script type="text/javascript">

$(document).ready(function() {
	selectionSortLargestElementCReady();
});

</script>

<div class="col-xs-12 padding00">
	<div class="ct-box-main">
		 <div class="text-center">
			<h1 class="label ct-demo-heading text-center" id="headdingSection">Selection Sort in Action</h1>
		</div> 
	</div>
	<div class='buttons-div'>
		<button type="button" class="btn btn-warning opacity00" id="restartBtn">Restart</button>
	</div>
	<div class="col-xs-12 margin-top padding00 " id="bubbleSortAnimationDiv">
		<div class="col-xs-5 padding00">
			<div class="col-xs-12 padding00" id="programDiv">
				<pre class="creamPreTab" id="bubbleSortProgram">
<span id="headerFile"></span>
int main() {
	<span id="arrDec">int arr[] = {<div class="arr-ele" id="number0" arrayvalue="0">21</div>,<div class="arr-ele" id="number1" arrayvalue="1">58</div>,<div class="arr-ele" id="number2" arrayvalue="2">41</div>,<div class="arr-ele" id="number3" arrayvalue="3">32</div>,<div class="arr-ele" id="number4" arrayvalue="4">9</div>,<div class="arr-ele" id="number5" arrayvalue="5">18</div>,<div class="arr-ele" id="number6" arrayvalue="6">94</div>,<div class="arr-ele" id="number7" arrayvalue="7">16</div>};</span>
	<span id="variableDec">int len = 8, <span class="outer-loop-color">outer</span>Idx, <span class="inner-loop-color">inner</span>Idx, elementAt<span class="outer-loop-color">Outer</span>Idx = 0, <span class="position-color">position</span>, i;</span>
	<span id="bubbleSortLogic">for (<span class="outer-loop-color">outer</span>Idx = len - 1; <span class="outer-loop-color">outer</span>Idx >= 1; <span class="outer-loop-color">outer</span>Idx--) {
		<span class="position-color">position</span> = <span class="outer-loop-color">outer</span>Idx;
		for (<span class="inner-loop-color">inner</span>Idx = <span class="outer-loop-color">outer</span>Idx; <span class="inner-loop-color">inner</span>Idx >= 0; <span class="inner-loop-color">inner</span>Idx--) {
			if(arr[<span class="inner-loop-color">inner</span>Idx] > arr[<span class="position-color">position</span>]) {
				 <span class="position-color">position</span> = <span class="inner-loop-color">inner</span>Idx;
			}
		}
		elementAt<span class="outer-loop-color">Outer</span>Idx = arr[<span class="position-color">position</span>];
		arr[<span class="position-color">position</span>] = arr[<span class="outer-loop-color">outer</span>Idx];
		arr[<span class="outer-loop-color">outer</span>Idx] = elementAt<span class="outer-loop-color">Outer</span>Idx;
	}</span>
	<span id="printArr">for(i = 0; i < len; i++) {
		<span id="printing"></span>
	}</span>
}</pre></div>
		</div>
		<div class="col-xs-7 padding00">
			<div class="col-xs-12 box-border padding00" id="animationDiv">
				<div class="col-xs-12 padding00">
					<div class="col-xs-12 text-center opacity00" id="eleAtInnerIdx">
						<div class="col-xs-12 text-center"><div id="eleAtInnerText">elementAt<span class="outer-loop-color">Outer</span>Idx</div></div>
						<div class="col-xs-12 text-center eleAtInnerIdxDiv"><span class="box-border eleAtInnerIdx">
							<span id="eleAtInnerIdxVal">0</span>
						</span></div>
					</div>
					<div class="col-xs-12">
						<div class="arrTable margin-top">
							<table style="width:100%" class="opacity00" id="arrElements">
					  			<tbody>
					  				<tr id="outerArrow"></tr>
					  				<tr id="innerArrow"></tr>
						  			<tr border="2px" id="values">
								    	<td class="text-center"><span class="element" arrayvalue="0" id="sortEle0">21</span></td>
								   		<td class="text-center"><span class="element" arrayvalue="1" id="sortEle1">58</span></td>
								    	<td class="text-center"><span class="element" arrayvalue="2" id="sortEle2">41</span></td>
								    	<td class="text-center"><span class="element" arrayvalue="3" id="sortEle3">32</span></td>
								    	<td class="text-center"><span class="element" arrayvalue="4" id="sortEle4">9</span></td>
								    	<td class="text-center"><span class="element" arrayvalue="5" id="sortEle5">18</span></td>
								  		<td class="text-center"><span class="element" arrayvalue="6" id="sortEle6">94</span></td>
								    	<td class="text-center"><span class="element" arrayvalue="7" id="sortEle7">16</span></td>
								 	</tr>
								 	<tr id="arrayIndices"></tr>
								 	<tr id="positionArrow"></tr>
								</tbody>
							</table>
						</div>
					</div>
				<div class="col-xs-12 margin-top padding00">
					<div class="col-xs-8 padding00">
					<pre class="creamPreTab4 opacity00" id="logicOfBubbleSort">
<span id="bubbleSortLogic">	<span id="outerForLoop">for(<span id="outerInti"><span class="outer-loop-color">outer</span>Idx = len - 1</span>; <span id="outerLoop"><span class="outer-loop-color">outer</span>Idx >= 1</span>; <span id="outerInc"><span class="outer-loop-color">outer</span>Idx--</span>) {</span>
		<span id="positionAtOuterIdx"><span class="position-color">position</span> = <span class="outer-loop-color">outer</span>Idx</span>;</span>
		<span id="innerForLoop">for(<span id="innerInti"><span class="inner-loop-color">inner</span>Idx = <span class="outer-loop-color">outer</span>Idx</span>; <span id="innerLoop"><span class="inner-loop-color">inner</span>Idx >= 0</span>; <span id="innerInc"><span class="inner-loop-color">inner</span>Idx--</span>) {</span>
			<span id="ifConditionCheck">if(<span id="ifCondition"><span id="ifInnerIdx">arr[<span class="inner-loop-color">inner</span>Idx]</span> > <span id="ifInnerIdxPlsOne">arr[<span class="position-color">position</span>]</span></span>) {</span>
				<span id="positionOfElement"><span class="position-color">position</span> = <span class="inner-loop-color">inner</span>Idx;</span>
			<span id="ifClose">}</span>
		<span id="innerLoopClose">}</span>
		<span id="swapValues"><span id="storeValueInOuterIdx"><span id="storeArrInnerIdxVal">elementAt<span class="outer-loop-color">Outer</span>Idx</span> = <span id="arrInnerIdxVal">arr[<span class="position-color">position</span>]</span>;</span>
		<span id="storeArrInnerIdxPlusVal">arr[<span class="position-color">position</span>] = <span id="arrInnerIdxPlusVal">arr[<span class="outer-loop-color">outer</span>Idx]</span>;</span>
		<span id="storeEleOuterIdxVal">arr[<span class="outer-loop-color">outer</span>Idx] = <span id="arrOuterIdxVal">elementAt<span class="outer-loop-color">Outer</span>Idx</span>;</span></span>
	<span id="outerLoopClose">}</span></span></pre></div>
	<div class="col-xs-4 box-border opacity00" id="explanationDiv1">
	<div id="explanationDiv"></div>
	<div id="autoCompleButtons"></div>
	
	</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-12">
			<div class="col-xs-6 col-xs-offset-3 margin-top">
	  			<div id="outputDiv" class="panel-primary output-div margin-left">
	    			<div id="outputdiv" class="panel-heading text-center">Output</div>
	    			<div class="panel panel-body"><div class="output "></div></div>
	  			</div>
	 		</div>
 		</div>
	</div>
</div>

</body>
</html>
