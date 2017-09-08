<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/animate.css">

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<script type="text/javascript" src="/js/jquery.scrollTo.js"></script>

<script src="/secure/lang/ds/js-min/ms.min.js"></script>
<title>Merge Sort</title>
<style type="text/css">
.margin-top-20 {
	margin-top: 20px;
}

.padding0 {
	padding: 0;
}

.creampretab4 {
	/* -moz-tab-size: 2;
	tab-size: 2;
	background-color: lavender !important;
	font-style: inherit;
	margin-bottom: 0;
	padding: 5px;
	overflow-y: auto; */
	-moz-tab-size: 2;
	background-color: lavender !important;
	border-radius: 8px !important;
	font-size: 10px;
	font-style: inherit;
	margin-bottom: 0;
	padding: 5px;
	/* overflow-y: auto; */
}

#animationDiv .panel-body, #invisibleDiv .panel-body {
	font-family: monospace;
	font-size: 10px;
	padding: 5px;
}

#mainStack {
	border: 2px solid;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	border-top: none;
	height: 450px;
	overflow: auto;
}

#invisibleDiv {
	height: 200px;
	border: 2px solid rgba(255, 255, 255, 0);
}

.panel-heading {
	padding: 3px 0;
}

.panel {
	margin-bottom: 5px;
	position: relative;
}

.ui-effects-transfer {
	border: 2px solid #003399;
	border-radius: 6px;
	position: relative;
	z-index: 9999999;
}

#informationDiv {
	letter-spacing: 0.5px;
	min-height: 155px;
	padding: 15px 0;
	z-index: 9999999;
}

/* #animationDiv {
	height: 480px;
} */
.errMsg {
	font-family: monospace;
	font-weight: bold;
	color: red;
}

.flip-css {
	position: relative;
	display: inline-block;
}

#arrow1, #arrow2, #arrow3 {
	marker-end: url('#myMarker');
}

.arrow-display-none {
	display: none;
}

.user-btn {
	background-color: green;
}

.ct-code-b-green {
	color: green;
	font-family: monospace;
	font-weight: bold;
}

.introjs-button {
	margin: 0 !important;
}

.svg-css {
	top: 0;
	left: 0;
	height: 100%;
	position: absolute;
	width: 100%;
}

.svg-line {
	position: relative;
	stroke-width: 3;
	stroke: "orange";
}

#mainStackArrDec>div {
	display: inline-block;
}

.split-and-merge-div {
	background-color: #fffae6;
	border: 1px solid gray;
	border-radius: 8px;
	height: 200px;
	overflow: auto;
}

.opacity25 {
	opacity: 0.25;
}

.display-inline-block {
	display: inline-block;
}

.arr-width {
	width: 60px;
}

.arr-border {
	border: 2px solid gray;
}

.td-border {
	border: 2px solid gray;
}

.dynamic-popover {
	color: yellow;
	font-family: monospace;
	font-weight: bold;
}

.introjs-fixParent {
	position: relative !important;
}

.panel {
	position: relative;
}

.zIndex {
	z-index: 10000001;
	
}

.fa {
	color: blue;
}

.position-relative {
	position: relative;
	display: inline-block;
}

.user-btn {
	background-color: green;
	 margin-top: 4px !important;
}

pre {
	height: 690px;
	/* height: 620px; */
	overflow: initial;
}
/* .opacity00 {
	opacity: 1;
} */

.background-color-lightgreen {
	background-color: lightgreen;
}


.introjs-tooltip {
	min-width: 250px !important;
}

.font-monospace {
	font-family: monospace;
}

[contenteditable=true] {
	outline: none;
	font-family: monospace;
}

@keyframes argh-my-eyes {
    0%   { background-color: #fff; }
    49% { background-color: blue; }
    50% { background-color: green; }
    99% { background-color: blue; }
    100% { background-color: green; }
  }
  
.current-check {
	 animation: argh-my-eyes 1s infinite;
}

.introjs-tooltip {
	min-width: 290px !important;
}

.ct-code-b-red {
	color: red;
	font-family: monospace;
	font-weight: bold;
}

/* hr {
	border-color: green;
    border-style: solid none none;
    border-width: 2px 0 0;
    margin-bottom: 0px;
    margin-top: 0px;
} */

in {
	color: rgb(62, 50, 173);
}

ink {
	color: 	rgb(255, 0, 191)
}

go {
	color: rgb(134, 19, 19);
}

g {
	color: 	rgb(0, 204, 51);
}

y {
	color: yellow;
}
</style>

<script type="text/javascript">




$(document).ready(function() {
	mergesortReadyFun();
});



</script>

</head>
<body>
	<div class='text-center margin-top-20'>
		<h4  id="head" class='label ct-demo-heading'>Merge Sort</h4>
	</div>
	<div class='col-xs-12 margin-top-20'>
		<div class='col-xs-offset-1 col-xs-4'>
			<pre class='creampretab4 opacity0' id='codeDiv'>
			
<span id="includeTitle"><in>#include</in> <ink>&lt;stdio.h&gt;</ink></span>

<span id="global"><span><g>void</g> merge(<g>int</g> arr[], <g>int</g> low, <g>int</g> mid, <g>int</g> high);</span>
<span><g>void</g> splitAndMerge(<g>int</g> arr[], <g>int</g> low, <g>int</g> high);</span>
</span>
<span id='mainBlk'><span id='mainReturn'><g>void</g></span> <span id='main'>main() {</span>
`	<g>int</g> arr[] = {<ink>15</ink>, <ink>6</ink>, <ink>9</ink>, <ink>12</ink>, <ink>16</ink>, <ink>7</ink>};
	<g>int</g> n = <ink>6</ink>;
	splitAndMerge(arr, 0, n - <ink>1</ink>);
}</span>
		
<span id="splitAndMergeFun"><span id='mergeSorting'><g>void</g> splitAndMerge(<span
							id='arrId'><g>int</g> arr[<ink>6</ink>]</span>, <g>int</g> <span id='lowId'>low</span>, <g>int</g> <span
							id='highId'>high</span>)</span> {
	<span id='mSortCondition'><go>if</go> (low < high)</span> {
		<span id='midean'><g>int</g> mid = (low + high) / <ink>2</ink>;</span>
		<span id='mergeSorting1'>splitAndMerge(arr, low, mid);</span>
		<span id='mergeSorting2'>splitAndMerge(arr, mid + <ink>1</ink>, high);</span>
		<span id='merge'>merge(arr, low, mid, high);</span>
	<span>}</span>
<span>}</span></span>
	
<span id="mergeFun"><span id='vMerge'><g>void</g> merge(<g>int</g> arr[<ink>6</ink>], <g>int</g> low, <g>int</g> mid, <g>int</g> high)</span> {
	<g>int</g> i = low, h = low, j = mid + <ink>1</ink>, k, temp[<ink>6</ink>];
	<span id='while'><span><go>while</go> (<span id='whileCndtn'>h <= mid && j <= high</span>)</span> {
		<span><span id='whileIf'><go>if</go> (<span id='ifCndtn'>arr[h] <= arr[j]</span>)</span> {
			<span id=''><span id='firstTemp'>temp[i] = arr[h];</span>
			<span>h++;</span></span>
		<span id='endWhileIf'>}</span></span> <go>else</go> {
			<span id=''><span id='secondTemp'>temp[i] = arr[j];</span>
			<span>j++;</span></span>
		<span>}</span>
		<span id='IncOfI'>i++;</span>
	<span>}</span></span>
	
	<span id='secondIf'><span><go>if</go> (<span id='secondIfPre'>h > mid</span>)</span> {
		<span id='firstFor'><span><go>for</go> (k = j; k <= high; k++)</span> {
			<span id='thirdTemp'>temp[i] = arr[k];</span>
			<span>i++;</span>
		<span>}</span></span>
	}</span><span> <go>else</go> {
		<span id='secondFor'><span><go>for</go> (k = h; k <= mid; k++)</span> {
			<span id=''><span id='fourthTemp'>temp[i] = arr[k];</span>
			<span>i++;</span></span>
		<span>}</span></span>
	<span>}</span></span>
}
</span>			
</pre>
		</div>
		<div class='col-xs-5 col-xs-offset-1'>
			<div class='col-xs-12  box-border opacity00' id='animationDiv'>
				<div class='col-xs-12'>
					<div class='col-xs-12 padding0'>
						<div class='col-xs-12 padding0 split-and-merge-div opacity25'>
							<table class='opacity00'
								style="width: 70%; margin-left: 15%; text-align: center; table-layout: fixed; margin-top: 20px;"
								id='myTable'>
								<tr>
									<td>0</td>
									<td>1</td>
									<td>2</td>
									<td>3</td>
									<td>4</td>
									<td>5</td>
								</tr>
								<tr>
									<td class='td-border td02'>15</td>
									<td class='td-border'>6</td>
									<td class='td-border'>9</td>
									<td class='td-border'>12</td>
									<td class='td-border'>16</td>
									<td class='td-border'>7</td>
								</tr>
							</table>
							<div class="col-xs-6 split-part-1 padding0">
								<div class="col-xs-12 padding0 opacity00 split1-02 split-02">
									<table
										style="table-layout: fixed; text-align: center; margin-top: 15px; width: 70%; margin-left: 15%;"
										parent='table:eq(0) tr:eq(1) td:eq(0)'>
										<tbody>
											<tr>
												<td class="td-border">15</td>
												<td class="td-border">6</td>
												<td class="td-border">9</td>
											</tr>
										</tbody>
									</table>
								</div>

								<div class="col-xs-12">
									<div class="col-xs-7 padding0 opacity00 split1-01 split-01">
										<table
											style="table-layout: fixed; text-align: center; margin-top: 15px; width: 93%;"
											parent='table:eq(1) tr td:eq(0)'>
											<tbody>
												<tr>
													<td class="td-border">15</td>
													<td class="td-border">6</td>
												</tr>
											</tbody>
										</table>
									</div>

									<div
										class="col-xs-offset-2 col-xs-3 padding0 opacity00 split1-22 split-22">
										<table
											style="table-layout: fixed; text-align: center; margin-top: 15px; width: 108%; margin-left: 15%;"
											parent='table:eq(1) tr td:eq(2)'>
											<tbody>
												<tr>
													<td class="td-border">9</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>



								<div class="col-xs-12 padding0">
									<div class="col-xs-4 padding0 opacity00 split1-00 split-00">
										<table
											style="table-layout: fixed; text-align: center; margin-top: 15px; width: 70%; margin-left: 15%;"
											parent='table:eq(2) tr td:eq(0)'>
											<tbody>
												<tr>
													<td class="td-border">15</td>
												</tr>
											</tbody>
										</table>
									</div>
									<div class="col-xs-4 padding0 opacity00 split1-11 split-11">
										<table
											style="table-layout: fixed; text-align: center; margin-top: 15px; width: 70%; margin-left: 15%;"
											parent='table:eq(2) tr td:eq(1)'>
											<tbody>
												<tr>
													<td class="td-border"></td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>

								<div class="col-xs-12">
									<div class="col-xs-7 padding0 hide merge001 split-01">
										<table
											style="table-layout: fixed; text-align: center; margin-top: 15px; width: 93%;">
											<tbody>
												<tr>
													<td class="td-border"></td>
													<td class="td-border"></td>
												</tr>
											</tbody>
										</table>
									</div>

									<!--<div class="col-xs-offset-2 col-xs-3 padding0 opacity00 split1-22">
							<table style="table-layout: fixed; text-align: center; margin-top: 15px; width: 108%; margin-left: 15%;" parent='table:eq(1) tr td:eq(2)'>
								<tbody>
									<tr>
										<td class="td-border">9</td>
									</tr>
								</tbody>
							</table>
						</div> -->

								</div>


								<div class="col-xs-12 padding0 hide merge012 split-02">
									<table
										style="table-layout: fixed; text-align: center; margin-top: 15px; width: 70%; margin-left: 15%;">
										<tbody>
											<tr>
												<td class="td-border"></td>
												<td class="td-border"></td>
												<td class="td-border"></td>
											</tr>
										</tbody>
									</table>
								</div>

							</div>
							<div class='col-xs-6 split-part-2'>
								<div class="col-xs-12 padding0 opacity00 split2-35 split-35">
									<table
										style="table-layout: fixed; text-align: center; margin-top: 15px; width: 81%; margin-left: 15%;"
										parent='table:eq(0) tr:eq(1) td:eq(3)'>
										<tbody>
											<tr>
												<td class="td-border">12</td>
												<td class="td-border">16</td>
												<td class="td-border">7</td>
											</tr>
										</tbody>
									</table>
								</div>
								
								<div class="col-xs-12">

									<div class="col-xs-7 padding0 opacity00 split2-34 split-34">
										<table
											style="table-layout: fixed; text-align: center; margin-top: 15px; width: 109%;"
											parent='table:eq(8) tr td:eq(0)'>
											<tbody>
												<tr>
													<td class="td-border">12</td>
													<td class="td-border">16</td>
												</tr>
											</tbody>
										</table>
									</div>

									<div
										class="col-xs-offset-2 col-xs-3 padding0 opacity00 split2-55 split-55">
										<table
											style="table-layout: fixed; text-align: center; margin-top: 15px; width: 124%; margin-left: 15%;"
											parent='table:eq(8) tr td:eq(2)'>
											<tbody>
												<tr>
													<td class="td-border">7</td>
												</tr>
											</tbody>
										</table>
									</div>

								</div>


								<div class="col-xs-12 padding0">

									<div class="col-xs-4 padding0 opacity00 split2-33 split-33">
										<table
											style="table-layout: fixed; text-align: center; margin-top: 15px; width: 81%; margin-left: 15%;"
											parent='table:eq(9) tr td:eq(0)'>
											<tbody>
												<tr>
													<td class="td-border">12</td>
												</tr>
											</tbody>
										</table>
									</div>

									<div class="col-xs-4 padding0 opacity00 split2-44 split-44">
										<table
											style="table-layout: fixed; text-align: center; margin-top: 15px; width: 83%; margin-left: 15%;"
											parent='table:eq(9) tr td:eq(1)'>
											<tbody>
												<tr>
													<td class="td-border">16</td>
												</tr>
											</tbody>
										</table>
									</div>

								</div>
								<div class="col-xs-7 col-xs-offset-1 padding0 hide merge334 split-34">
									<table style="table-layout: fixed; text-align: center; margin-top: 15px; width: 93%;">
										<tbody>
											<tr>
												<td class="td-border"></td>
												<td class="td-border"></td>
											</tr>
										</tbody>
									</table>
								</div>

								<div class="col-xs-12 padding0 hide merge345 split-35">
									<table
										style="table-layout: fixed; text-align: center; margin-top: 15px; width: 81%; margin-left: 15%;">
										<tbody>
											<tr>
												<td class="td-border"></td>
												<td class="td-border"></td>
												<td class="td-border"></td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<!-- <div class="col-xs-12 text-center">
  									<span>Divide</span>
									<hr>
							</div> -->
							<div class="col-xs-12 padding0 hide merge025 split-05">
								<table
									style="table-layout: fixed; text-align: center; margin-top: 15px; width: 74%; margin-left: 15%;">
									<tbody>
										<tr>
											<td class="td-border"></td>
											<td class="td-border"></td>
											<td class="td-border"></td>
											<td class="td-border"></td>
											<td class="td-border"></td>
											<td class="td-border"></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div id='invisibleDiv' class='col-xs-12 padding0'
							style="position: absolute;"></div>
					</div>
					<div id='mainStack' class='col-xs-12 padding0'>
						<div class='col-xs-offset-1 col-xs-11 padding0'>
							<div class='col-xs-12 padding0'>
								<div id='stackBody' class='col-xs-10 padding0'></div>
								<svg class="svg-css" id="stackSvg">
					               <marker style="fill: gray;" orient="auto" markerHeight="5" markerWidth="5" refY="2.5" refX="4" id="grayMarker">
					                              <path class="arrow"
										d="M0,0 L5,2.5 L0,5 Z" />
					               </marker>
					               <marker style="fill: blue;" orient="auto"
										markerHeight="5" markerWidth="5" refY="2.5" refX="4"
										id="blueMarker">
					                              <path class="arrow"
										d="M0,0 L5,2.5 L0,5 Z" />
					               </marker>
					               <line class="svg-line" id="arrow2" y2="0%" x2="0%"
										y1="0%" x1="0%"
										style="display: none; marker-end: url('#grayMarker')" />
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="text-center margin-top-20 col-xs-12">
		<a class="btn btn-warning opacity00 restart" id="restart">Restart</a>
	</div>
</body>
</html>