
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">	
<title>review</title>
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/animate.css">
<link href="/css/font-awesome.min.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<script src="/secure/lang/c/js-min/itc.min.js" type="text/javascript"></script>

<style>

.padding-col0 {
	padding: 0;
}

.popover-height {
    height: 20px;
}

.color-green {
	color : green;
}

#remaining {
	background: white !important;	
	width : 1px;
	padding:22px 0px 0px 0px;
}

.font-mono {
	font-family: monospace;
}

.z-index {
	position: relative;
	z-index: 9999999;
	background: white;
}

.eval-css {
    background: #556b2f none repeat scroll 0 0;
    border-radius: 5px;
    color: white;
    font-weight: bold;
}

.introjs-duplicate-nextbutton {
    background-color: green;
    margin: 0 5px !important;
    float : right;
}

.border {
	border: 2px solid black;
}

.margin-top {
	margin-top: 35px;
}

.margin-top25 {
	margin-top: 25px;
}

.margin-top50 {
	margin-top: 50px;
}

 .height {
	min-height: 630px;
}
 
.popover-content {
    font-size:14px !important;
}
.box-div {
	background-color: hsl(120, 100%, 31%) !important;
	background-image: linear-gradient(#F9DC00, #AE9C0E);
	background-repeat: repeat-x;
	border-color: #009e00 #009e00 hsl(120, 100%, 26.5%);
	border-radius: 6px;
	color: #fff !important;
	display: inline;
	padding: 10px;
	text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.29);
	font-size: 16px;
}

.row-div1 {
	margin: 10px 0;
	padding: 10px 0;
}

.user-btn {
	background-color: green;
}

.padding10 {
 	padding: 10px 0;
 }
 
 div, span {
    position: relative;
}

.row-div2, .row-div3 {
	margin-bottom: 15px;
	margin-top: 60px;
	padding: 10px 0;
}

.popover-content {
	min-width: 243px;
}

.svg-css {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}

.ct-bt-next-div {
    float: right;
    cursor: default;
}

.text-center {
	text-align: center;
}

[contenteditable=true]:empty:before {
	content: attr(placeholder);
	color: #B8B8A0;
}

.error-msg {
	color: red;
	font-weight: bold;
}

.int, .float {
	outline: none;
}


.display-inline-block {
	display: inline-block;
}

.font-weight-bold {
 	font-weight: bold;
}
 
 table, th, td {
    border: 1px solid black;
}

.custom-btn {
    background-color: green;
    float: right;
    margin: 0 !important;
}

.color-grey {
	background: grey;
}

</style>
</head>
<body>
<script>

	$(document).ready(function() {
		implicitTypeConversionReady();
	});


</script>


	<div class="ct-box-main">
		<div class='text-center'>
			<h1 class='label ct-demo-heading' id="heading">Type Conversion</h1>
		</div>
		<div class='col-xs-12 margin-top25 text-center'>
			<span id='restart' class='btn btn-warning btn-sm opacity00'><i
				class='fa fa-refresh'></i>&nbsp;Restart</span>
		</div>
		<div class='col-xs-12 margin-top'>
			<div id="conversionDiv"
				class='col-xs-offset-2 col-xs-8 height margin'>
				<div id='type-conversion-typing' class="hide">
					<div>
						<ul>
							<li><b>Type-conversion</b> is the process where the value of
								one type is converted into value of another type.</li>
							<li>There are two types of type-conversion.</li>

							<ol>
								<li><b>Implicit or Type Coercion</b></li>
								<li><b>Explicit or Type Casting.</b></li>
							</ol>
						</ul>
					</div>
					<div class="popover-height">
						<a
							class="introjs-button introjs-duplicate-nextbutton animated zoomIn"
							onclick='revealImplicitAndExplicit()'>Next →</a>
					</div>
				</div>

				<div id="implicitExampleType" class="hide">
					<span><ul>
							<li><b>Implicit</b> type-conversion means one data type
								value is converted into another data type value automatically by
								the system.</li>
							<li>There are two types of <b>Implicit type-conversions.</b></li>
						</ul></span>
					<div class="popover-height">
						<a
							class="introjs-button introjs-duplicate-nextbutton animated zoomIn"
							onclick='revealAutomaticAndAssignment()'>Next →</a>
					</div>
				</div>



				<div id='typeConversionDiv' class='col-xs-12'>
					<svg class="svg-css" id="svgId"> <marker refX="4" refY="2.5"
						markerWidth="5" markerHeight="5" orient="auto" style="fill: blue;"
						id="arrowOne"> <path d="M0,0 L5,2.5 L0,5 Z"
						class="arrow-one" /> </marker> <marker refX="4" refY="2.5" markerWidth="5"
						markerHeight="5" orient="auto" style="fill: gray;" id="arrow">
					<path d="M0,0 L5,2.5 L0,5 Z" class="arrow" /> </marker> <line
						id="arrowMark1" class="line" x1="49.10%" y1="13%" x2="49.10%"
						y2="13%" style="stroke: gray; stroke-width: 2; display: inline;" />
					<line id="arrowMark11" stroke-dasharray="5, 5" class="line"
						x1="58%" y1="9%" x2="60%" y2="9%"
						style="stroke: #8080ff; stroke-width: 2; display: inline;" /> <line
						id="arrowMark2" class="line" x1="49.10%" y1="26%" x2="49.10%"
						y2="26%" style="stroke: gray; stroke-width: 2; display: inline;" />
					<line id="arrowMark3" class="line" x1="49.10%" y1="26%" x2="49.10%"
						y2="26%" style="stroke: gray; stroke-width: 2; display: inline;" />
					<line id="arrowMark12" stroke-dasharray="5, 5" class="line"
						x1="18%" y1="45%" x2="18%" y2="45%"
						style="stroke: #8080ff; stroke-width: 2; display: inline;" /> <line
						id="arrowMark13" stroke-dasharray="5, 5" class="line" x1="10.1%"
						y1="86%" x2="10.1%" y2="86%"
						style="stroke: #8080ff; stroke-width: 2; display: inline;" /> <line
						id="arrowMark14" stroke-dasharray="5, 5" class="line" x1="66.10%"
						y1="86%" x2="66.10%" y2="86%"
						style="stroke: #8080ff; stroke-width: 2; display: inline;" /> <line
						id="arrowMark15" stroke-dasharray="5, 5" class="line" x1="82.10%"
						y1="86%" x2="82.10%" y2="86%"
						style="stroke: #8080ff; stroke-width: 2; display: inline;" /> <line
						id="arrowMark4" class="line" x1="29.10%" y1="26%" x2="29.10%"
						y2="26%" style="stroke: gray; stroke-width: 2; display: inline;" />
					<line id="arrowMark5" class="line" x1="69.10%" y1="26%" x2="69.10%"
						y2="26%" style=" stroke: gray; stroke-width: 2; display: inline;" />
					<line id="arrowMark6" class="line" x1="29.10%" y1="51%" x2="29.10%"
						y2="51%" style="stroke: gray; stroke-width: 2; display: inline;" />
					<line id="arrowMark7" class="line" x1="29.10%" y1="63%" x2="29.10%"
						y2="63%" style="stroke: gray; stroke-width: 2; display: inline;" />
					<line id="arrowMark8" class="line" x1="29.10%" y1="63%" x2="29.10%"
						y2="63%" style="stroke: gray; stroke-width: 2; display: inline;" />
					<line id="arrowMark9" class="line" x1="69.10%" y1="63%" x2="69.10%"
						y2="63%" style="stroke: gray; stroke-width: 2; display: inline;" />
					<line id="arrowMark10" class="line" x1="18.10%" y1="63%"
						x2="18.10%" y2="63%"
						style="stroke: gray; stroke-width: 2; display: inline;" /> </svg>
				</div>
				<div id="mainAnimationDiv" class="col-xs-12 float">
					<div class="col-xs-6">
						<div class="col-xs-12">
							<div id="automaticTypeAnimation"
								class="margin-top50 col-xs-12 padding-col0 opacity00">
								<div class="col-xs-12 text-center eval-css z-index">Expression
									evaluation</div>
								<div class="col-xs-12 z-index">In an expression whenever
									we find an operand with higher rank, the values of data types
									with lower rank are converted to the operand of highter rank.</div>
								<div id="automaticTypeValues"
									class="margin-top25 col-xs-12 padding-col0 font-mono">
									<div id="intDiv" class="col-xs-6 text-center padding-col0">
										int x = <span spellcheck="false" class="int" id="intEditor"
											placeholder="int" maxlength="2" contenteditable="true">12</span>
									</div>
									<div id="floatDiv" class="col-xs-6 text-center padding-col0">
										float y = <span spellcheck="false" class="float"
											id="floatEditor" placeholder="float" maxlength="4"
											contenteditable="true">12.34</span>
									</div>
								</div>
								<div id="sum"
									class="margin-top25 col-xs-12 opacity00 text-center font-mono">
									x + y = <span id="sumMain"><span id="intText"
										class="display-inline-block"><b></b></span> <span id="plus"
										class=""> + </span> <span id="floatText"
										class="display-inline-block"></span><b></b></span>
								</div>
								<div
									class="col-xs-12 margin-top25 opacity00 col-xs-offset-3 col-xs-9 font-mono"
									id="result">
									<Span>float total = </Span><span id="resultVal"
										class="display-inline-block"></span>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xs-6">
						<div class="col-xs-12">
							<div id='mainAssignmentAnimationDiv'
								class='border col-xs-12 margin-top50 opacity00'>
								<div class="col-xs-12 text-center eval-css z-index">During
									Assignment</div>
								<div id='intValType'
									class='col-xs-12 margin-top25 font-mono opacity00'>
									float f =<span id='intValDeclaration' class="red"> 37.5</span>
								</div>
								<div id="zValue"
									class="col-xs-12 font-mono margin-top25 opacity00">
									int z = f;&nbsp;<span class="color-green">// The
										fractional part of the float is auto truncated, when it is
										being assigned to integer data type.</span>
								</div>
								<div id='resultOfAssignmetnt'
									class='margin-top25 col-xs-12 opacity00 font-mono'>
									int z = <span id='assignmentFlip' class='display-inline-block'>37.5</span>;&nbsp;<span
										class="color-green">// Only 37 is stored beacuse z is
										int type.</span>
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