<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/animate.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/jquery.scrollTo.js"></script>
<script src="js-min/polyull.min.js"></script>


<title>Polynomial-Using-Linked-List</title>

<style type="text/css">

.introjs-tooltip {
	min-width: 350px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.user-btn {
	margin: 0px !important;
	background-color: green;
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

.padding00 {
	padding: 0;
}

.padding6 {
	padding: 6px;
}

.creamPreTab {
	tab-size: 2;
	-moz-tab-size: 2;
	margin: 2px;
	padding: 5px;
	border-radius: 8px;
	font-family: monospace;
	background-color: #fffae6;
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

.position {
	position: relative;
	display: inline-block;
}

.margin-top15 {
	margin-top: 15px;
}

.margin-btm8 {
	margin-bottom: 8px;
}

.output-console-title-bar {
	border-radius: 8px 8px 0 0;
}

.output-console-body {
	height: 150px;
	padding: 10px;
	font-size: 14px;
	margin-bottom: 14px;
	white-space: pre-line;
	border-radius: 0 0 8px 8px;
}

.extraNode {
    margin-right: 25px;
}

.list1, .list2 {
	margin-top: 25px;
}

.list2 {
	margin-bottom: 25px;
}

.box {
	min-height: 24px;
	text-align: center;
	border-radius: 6px;
	border: 1px solid green;
}

.div-border {
	margin: 0;
	padding: 0;
	width: 40px;
	min-height: 24px;
	text-align: center;
	display: inline-block;
	border: 2px solid gray;
}


.left-radius {
	border-right: none;
	border-color: green;
	border-radius: 6px 0 0 6px;
}

.no-radius {
	border-color: blue;
}

.right-radius {
	border-color: green;
	border-radius: 0 6px 6px 0;
	border-left: none;
}

.inline-css {
	margin: 0 10px;
	position: relative;
	display: inline-block;
}

.buttons {
	color: black;
	letter-spacing: 1px;
	font-family: monospace;
	box-shadow: 1px 2px 4px 0;
}

.user-text {
	width: 82px;
	height: 27px;
	border: none;
	background: black;
}

.btn:hover {
	color: white;
	background-color: #4CAF50 !important;
}

.btn:active{
	color: white;
	background-color: #2E8B57 !important;
}

.disabled {
	pointer-events: none;
}

.margin-left30 {
	margin-left: 30px;
}

.margin-7 {
	margin-top: 9px;
	margin-bottom: 12px;
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
	z-index: 10000000 !important;
	marker-end: url("#arrowEnd"); 
}

.ct-fonts {
	font-weight: bold;
	font-family: monospace;
}

.ct-code-b-red {
	color: rgb(252, 66, 66);
}

.ct-lime-color {
	color: lime;
}

.ct-green-color {
	color: green;
}

.ct-brown-color {
	color: brown;
}

.ct-code-b-black {
	color: white;
	padding: 1px;
	font-size: 12px;
	border-radius: 4px;
	background-color: black;
}

.ct-code-b-green {
	color: #42f44e;
}

.error-text {
	color :red;
}

.popover-content {
	font-size: 14px;
}

.popover {
	width: 200px;
	font-size: 15px !important;
}

.srt-css {
	margin-left: 25px;
}

.introjs-duplicate-skipbutton {
	background-color: orange;
	margin: 0.5px !important;
}

y {
	font-weight: bold;
	color: yellow;
}

r {
	font-weight: bold;
	color: red;
}

.background-color-yellow {
	background-color: yellow;
}

.ct-blue-color {
	font-weight: bold;
	font-family: monospace;
	color: blue;
}

.ct-brown-color {
	color: brown;
	font-weight: bold;
	font-family: monospace;
}

.error-text {
	color :red;
	font-weight: bold;
}

.true {
    color: white;
    font-weight: bold;
    border-radius: 3px;
	background: green none repeat scroll 0 0;
}

.false {
    color: white;
    font-weight: bold;
    border-radius: 3px;
	background: red none repeat scroll 0 0;
}

.red-color {
	color: red;
}

.green-color {
	color: green;
}

.blue {
    color: blue;
}

.box-border1 {
	border-radius: 12px;
	border: 2px solid white;
}
.input {
	font-weight: normal;
	outline: medium none;
	border: none;
	background-color: black;
}
#row2 > .nodes {
	float: right;
}

</style>
</head>
<body>

<script type="text/javascript">

$(document).ready(function() {
	//$(".opacity00").removeClass("opacity00");
	polyAnimationFunction();
	//documentCallFunctin();
});

</script>

	<div class="col-xs-12 padding00">
		<div class="ct-box-main">
			<div class="text-center">
				<h1 class="label ct-demo-heading text-center" id="headdingSection">Polynomial Using Linked List</h1>
			</div> 
		</div>
		<div class="col-xs-12 opacity00" id="explanationDiv">
			<div class="col-xs-4 padding00">
				<pre class="creamPreTab opacity00" id="structTypelist"></pre>
				<pre class="creamPreTab opacity00" id="inMain"></pre>
				<pre class="creamPreTab opacity00" id="polyOperationsPre"></pre>
				<pre class="creamPreTab opacity00" id="polyOperationsDivPre"></pre>
			</div>
			<div class="col-xs-8"> 
				<div class="col-xs-12 padding00">
					<div class="col-xs-12 margin-top15">
						<div class="col-xs-12 box-border text-center opacity00" id="buttonsDiv"></div>
						<div class="margin-top15 col-xs-12 opacity00 padding00" id="animationParent">
							<div class="col-xs-12 margin-7 padding00" id="animationDiv">
								<div class="col-xs-12 animationDiv box-border padding00">
									<div class="col-xs-12 padding00 margin-top15" id="variablesDec">
										<div class="col-xs-2 text-center padding00 opacity00 intVariables" id="chValeDec">
											<div class="margin-top-15" id="decChVal"><b>ch = 
												<span class="box-border padding6"><span class="opacity00 intValues position" id="chVal">y</span></span></b>
											</div>
										</div>
										<div class="col-xs-2 text-center padding00 opacity00 intVariables" id="coeffValeDec">
											<div class="margin-top-15" id="decCoeffVal"><b>coeff = 
												<span class="box-border padding6"><span class="opacity00 intValues position" id="coeffVal">12</span></span></b>
											</div>
										</div>
										<div class="col-xs-2 text-center padding00 opacity00 intVariables" id="expValeDec">
											<div class="margin-top-15" id="decChVal"><b>exp = 
												<span class="box-border padding6"><span class="opacity00 intValues position" id="expVal">5</span></span></b>
											</div>
										</div>
									</div>
									<!-- <div class="col-xs-12 padding00 margin-top15 box-border1" id="NoOfListsInPoly"></div> -->
									<div class="col-xs-12 padding00 list1" id="firstListParentDiv">
										<div class="col-xs-2">
											<div id="head1" class="col-xs-8 extraNode padding00 opacity00">
												<div class="text-center col-xs-12 padding00 opacity00">head1</div>
												<div class="col-xs-12 box padding00" id="head1Div">
													<span id="head1Val" class="extrNodeVal position ct-brown-color ct-fonts inline-style"></span>
												</div>
												<div class="text-center col-xs-12 padding00" id="head1InList1">head1</div>
											</div>
										</div>
										<div class="col-xs-10 padding00" id="firstList"></div>
									</div>
									<div class="col-xs-12 padding00" id="commaonNodeForList1AndList2">
										<div class="col-xs-12">
											<div id="head" class="col-xs-1 col-xs-offset-1 extraNode padding00 opacity00">
												<div class="text-center col-xs-12 padding00 opacity00">head</div>
												<div class="col-xs-12 box padding00" id="headDiv">
													<span id="headVal" class="extrNodeVal position ct-brown-color ct-fonts inline-style"></span>
												</div>
												<div class="text-center col-xs-12 padding00" id="headNode">head</div>
											</div>
											<div id="temp" class="col-xs-1 extraNode padding00 opacity00">
												<div class="text-center col-xs-12 padding00 opacity00">temp</div>
												<div class="col-xs-12 box padding00" id="tempDiv">
													<span id="tempVal" class="extrNodeVal position ct-brown-color ct-fonts inline-style"></span>
												</div>
												<div class="text-center col-xs-12 padding00" id="tempNode">temp</div>
											</div>
											<div class="col-xs-3" id="temparyPolyNode"></div>
											<div id="p1" class="col-xs-1 extraNode padding00 opacity00">
												<div class="text-center col-xs-12 padding00 opacity00">p1</div>
												<div class="col-xs-12 box padding00" id="p1Div">
													<span id="p1Val" class="extrNodeVal position ct-brown-color ct-fonts inline-style"></span>
												</div>
												<div class="text-center col-xs-12 padding00" id="p1Node">p1</div>
											</div>
											<div id="p2" class="col-xs-1 extraNode padding00 opacity00">
												<div class="text-center col-xs-12 padding00 opacity00">p2</div>
												<div class="col-xs-12 box padding00" id="p2Div">
													<span id="p2Val" class="extrNodeVal position ct-brown-color ct-fonts inline-style"></span>
												</div>
												<div class="text-center col-xs-12 padding00" id="p2Node">p2</div>
											</div>
										</div>
									</div>
									<div class="col-xs-12 padding00" id="secondListParentDiv">
										<div class="col-xs-2">
											<div id="head2" class="col-xs-8 extraNode padding00 opacity00">
												<div class="text-center col-xs-12 padding00 opacity00">head2</div>
												<div class="col-xs-12 box padding00" id="head2Div">
													<span id="head2Val" class="extrNodeVal position ct-brown-color ct-fonts inline-style"></span>
												</div>
												<div class="text-center col-xs-12 padding00" id="head2InList2">head2</div>
											</div>
										</div>
										<div class="col-xs-10 padding00" id="secondList"></div>
									</div>
									<div class="col-xs-12 padding00" id="nodeAddress2">
										<div class="col-xs-12">
											<div id="t3" class="col-xs-1 col-xs-offset-1 extraNode padding00 opacity00">
												<div class="text-center col-xs-12 padding00 opacity00">t3</div>
												<div class="col-xs-12 box padding00" id="t3Div">
													<span id="t3Val" class="extrNodeVal position ct-brown-color ct-fonts inline-style"></span>
												</div>
												<div class="text-center col-xs-12 padding00" id="t3Node">t3</div>
											</div>
											<div class="col-xs-3" id="temparyPolyNodeForPloy"></div>
											<div id="headOp" class="col-xs-1 extraNode padding00 opacity00">
												<div class="text-center col-xs-12 padding00 opacity00">head</div>
												<div class="col-xs-12 box padding00" id="headInOP">
													<span id="headOpVal" class="extrNodeVal position ct-brown-color ct-fonts inline-style"></span>
												</div>
												<div class="text-center col-xs-12 padding00" id="headOpNode">head</div>
											</div>
											<div id="sum" class="col-xs-1 extraNode padding00 opacity00">
												<div class="text-center col-xs-12 padding00 opacity00">sum</div>
												<div class="col-xs-12 box padding00" id="sumDiv">
													<span id="sumVal" class="extrNodeVal position ct-brown-color ct-fonts inline-style"></span>
												</div>
												<div class="text-center col-xs-12 padding00" id="sumNode">sum</div>
											</div>
											<div id="headD1" class="col-xs-1 extraNode padding00 opacity00">
												<div class="text-center col-xs-12 padding00 opacity00">head</div>
												<div class="col-xs-12 box padding00" id="headDiv1">
													<span id="headVal1" class="extrNodeVal position ct-brown-color ct-fonts inline-style"></span>
												</div>
												<div class="text-center col-xs-12 padding00" id="headNode1">head</div>
											</div>
											<div id="temp1" class="col-xs-1 extraNode padding00 opacity00">
												<div class="text-center col-xs-12 padding00 opacity00">temp</div>
												<div class="col-xs-12 box padding00" id="tempDiv1">
													<span id="tempVal1" class="extrNodeVal position ct-brown-color ct-fonts inline-style"></span>
												</div>
												<div class="text-center col-xs-12 padding00" id="tempNode1">temp</div>
											</div>	
										</div>
									</div>
									<div class="col-xs-12 padding00 list3 margin-btm8" id="thirdListParentDiv">
										<div class="col-xs-2">
											<div id="result" class="col-xs-8 extraNode padding00 opacity00">
												<div class="text-center col-xs-12 padding00 opacity00">result</div>
												<div class="col-xs-12 box padding00" id="resultDiv">
													<span id="resultVal" class="extrNodeVal position ct-brown-color ct-fonts inline-style"></span>
												</div>
												<div class="text-center col-xs-12 padding00" id="resultName">result</div>
											</div>
										</div>
										<div class="col-xs-10 padding00" id="thirdList">
											<!-- <div id="row1" class="col-xs-12 padding00"></div>
											<div id="row2" class="col-xs-12 padding00"></div> -->
										</div>
									</div>
									<div class="col-xs-12 padding00" id="nodeAddress3"></div>
								</div>
							</div>
						</div>
					</div>
					<!-- <div class="col-xs-12 padding00">
						<div class="col-xs-12" id="polyOperationsDiv">
							<div class="col-xs-12">
								<pre class="creamPreTab opacity00" id="polyOperationsDivPre"></pre>
							</div>
						</div>
					</div> -->
					<div class="col-xs-12 padding00 margin-top15">
						<div class="col-xs-12 padding00">
							<div class="col-xs-12 margin-top" id="outputDiv">
								<div id="consoleId" class="center opacity00">
									<div class="output-console-title-bar">
										<span class="title"><b>Console</b></span>
									</div>
									<div class="output-console-body" id="consoleBodyDiv"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>	