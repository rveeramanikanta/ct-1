<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> -->
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css" />
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/font-awesome.min.css" />
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css" />
<link rel="stylesheet" href="/css/animate.css" />
<link rel="stylesheet" href="/css/custom-styles.css" />
<script src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenLite.min.js" type="text/javascript"></script>
<script src="/js/gs/TimelineLite.min.js" type="text/javascript"></script>
<script src="/secure/lang/c/js-min/fltn.min.js" type="text/javascript"></script>
<title>Insert title here</title>
<style type="text/css">

.padding00 {
	padding: 0;
}

.borderToMainBox {
	border:2px solid gray;
	border-radius: 5px;
}

.div-margin-top-bottom {
	margin: 13px 0;
}

.oval {
	border: 2px solid gray;
	-moz-border-radius: 100px/35px;
	border-radius: 100px/35px;
	display: inline-block;
	height: 56px;
	width: 168px;
	background: rgba(0, 0, 0, 0) linear-gradient(0deg, rgba(0, 128, 0, 0.83) 12%, rgba(0, 128, 0, 0.34) 78%); 
	box-shadow: 0 1px 2px 0 gray;
}

.margin-top-bottom {
	margin: 15px 0;
	line-height: 56px;
}

.rectangle {
	border: 2px solid gray;
	height: 56px;
	width: 168px;
	display: inline-block;
	background: rgba(0, 0, 0, 0) linear-gradient(0deg, rgb(222, 222, 18) 12%, rgba(255, 255, 0, 0.23) 78%);
	box-shadow: 0 1px 2px 0 gray;
}

.rhombus {
    height: 70px;
    width: 70px;
    margin: 30px 0; 
    transform : rotate(45deg) skew(15deg, 15deg);
	display: inline-block;
	border: 2px solid gray;
	background: rgba(0, 0, 0, 0) linear-gradient(0deg, rgb(255, 192, 192) 12%, rgba(255, 192, 201, 0.66) 78%);
	box-shadow: 0 1px 2px 0 gray;
}

.rmbsText {
	display: inline-block;
	font-family: verdana;
	font-size: 10px;
	font-weight: bold;
	line-height: 70px;
	transform: rotate(-45deg);
}

.display-inline-block {
	display: inline-block;
	
}

.parallelogram {
	height: 56px;
	width: 164px;
	-webkit-transform: skew(-36deg);
	-moz-transform: skew(-36deg);
	transform: skew(-36deg);
	display: inline-block;
	border: 2px solid gray;
	background: rgba(0, 0, 0, 0) linear-gradient(0deg, rgba(0, 141, 255, 0.85) 12%, rgba(0, 115, 255, 0.21) 78%);
	box-shadow: 0 1px 2px 0 gray;
}

.transform-text {
    display: inline-block;
    transform: skew(28deg);
}

.svg-css {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 10000000;
}


.line {
	marker-end: url("#arrow");
	stroke: gray;
	stroke-width: 2;
}

.svg-text {
	font-size: 11px;
	font-weight: bold;
}


#flowChartBox {
	height: 1140px;
}

#description {
    line-height: 1.7;
    padding: 8px;
}

.step-arrow {
	background-color: #a1126c;
	height: 30px;
	line-height: 30px;
	display: table-row-group;
	border-bottom-left-radius: 8px;
	border-top-left-radius: 8px;
	color: white;
}

.step-arrow::after {
	color: #a1126c;
	border-left: 15px solid;
	border-top: 15px solid transparent;
	border-bottom: 15px solid transparent;
	content: ' ';
	position: absolute;
}

.step-explanation {
    background-color: #fffae6;
    border: 2px solid green;
    border-radius: 8px;
    line-height: 1.7;
}

.user-btn {
	background-color: green;
	margin-top: 4px !important;
}

.center {
	margin-left: auto;
	margin-right: auto;
	display: block;
}

.b-green {
	font-family: monospace;
	font-weight: bold;
	color: green;
}

.zIndex {
	z-index: 10000000;
}

#step9 {
	background: rgba(0, 0, 0, 0) linear-gradient(0deg, orange 12%, rgba(255, 165, 0, 0.29) 78%);
}

.step-padding {
    padding: 0 3px;
}

</style>

<script type="text/javascript">

$(document).ready(function() {
	largestThreeNumbers();
});

</script>
</head>
<body>

<div class="col-xs-12 div-margin-top-bottom padding00" >
	<div class="text-center">
		<h1 id="heading" class="label ct-demo-heading text-center">Largest of Three Numbers</h1>
	</div>
</div>

<div class="col-xs-12 padding00" style="margin-top: 10px;">
	<div id="description" class="col-xs-offset-3 col-xs-6 borderToMainBox padding00">
		<ul>
			<li id="desText1" class='opacity00'>Let us learn how to design a flowchart and the related algorithm for finding the <span class="b-green">largest</span> 
			of <span class="b-green">three numbers</span> form the  given inputs.</li>
			<li id="desText2" class='opacity00'>The <span class="b-green">flowchart</span> and the <span class="b-green">algorithm</span> will depict the various steps 
			involved in arriving at a required solution for finding the largest of three numbers. 
			<a class="introjs-button user-btn user-next" onclick="nextStep()">Next &#8594;</a></li>
		</ul>
	</div>
</div>

<div class="col-xs-12 div-margin-top-bottom padding00">

	<div id="flowChartBox" class="col-xs-offset-1 col-xs-10 padding00 borderToMainBox">
	
		<div class="col-xs-12 padding00">
			<div class="col-xs-4 padding00" style="margin-top: 16px;">
				<div class="col-xs-12">
					<div class="col-xs-3 step-padding">
					<span id="stepArrow1" class="step-arrow opacity00">&nbsp; &nbsp;Step 1 :</span>
					</div>
					
					<div id="algorithm1" class="step-explanation col-xs-8 col-xs-offset-1 opacity00"></div>
				</div>
				<div class="col-xs-12" style="margin-top: 55px;">
					<div class="col-xs-3 step-padding">
						<span id="stepArrow2" class="step-arrow opacity00">&nbsp; &nbsp;Step 2 :</span>
					</div>
					
					<div id="algorithm2" class="step-explanation col-xs-8 col-xs-offset-1 opacity00"></div>
				</div>
				<div class="col-xs-12" style="margin-top: 55px;">
					<div class="col-xs-3 step-padding">
						<span id="stepArrow3" class="step-arrow opacity00">&nbsp; &nbsp;Step 3 :</span>
					</div>
					
					<div id="algorithm3" class="step-explanation col-xs-8 col-xs-offset-1 opacity00"></div>
				</div>
				<div class="col-xs-12" style="margin-top: 55px;">
					<div class="col-xs-3 step-padding">
						<span id="stepArrow4" class="step-arrow opacity00">&nbsp; &nbsp;Step 4 :</span>
					</div>
					
					<div id="algorithm4" class="step-explanation col-xs-8 col-xs-offset-1 opacity00"></div>
				</div>
				<div class="col-xs-12" style="margin-top: 55px;">
					<div class="col-xs-3 step-padding">
						<span id="stepArrow5" class="step-arrow opacity00">&nbsp; &nbsp;Step 5 :</span>
					</div>
					<div id="algorithm5" class="step-explanation col-xs-8 col-xs-offset-1 opacity00"> </div>
				</div>
				
				<div class="col-xs-12" style="margin-top: 55px;">
					<div class="col-xs-3 step-padding">
						<span id="stepArrow6" class="step-arrow opacity00">&nbsp; &nbsp;Step 6 :</span>
					</div>
					<div id="algorithm6" class="step-explanation col-xs-8 col-xs-offset-1 opacity00"> </div>
				</div>
				
				<div class="col-xs-12" style="margin-top: 55px;">
					<div class="col-xs-3 step-padding">
						<span id="stepArrow7" class="step-arrow opacity00">&nbsp; &nbsp;Step 7 :</span>
					</div>
					<div id="algorithm7" class="step-explanation col-xs-8 col-xs-offset-1 opacity00"> </div>
				</div>
				
				<div class="col-xs-12" style="margin-top: 55px;">
					<div class="col-xs-3 step-padding">
						<span id="stepArrow8" class="step-arrow opacity00">&nbsp; &nbsp;Step 8 :</span>
					</div>
					<div id="algorithm8" class="step-explanation col-xs-8 col-xs-offset-1 opacity00"> </div>
				</div>
				
				<div class="col-xs-12" style="margin-top: 55px;">
					<div class="col-xs-3 step-padding">
						<span id="stepArrow9" class="step-arrow opacity00">&nbsp; &nbsp;Step 9 :</span>
					</div>
					<div id="algorithm9" class="step-explanation col-xs-8 col-xs-offset-1 opacity00"> </div>
				</div>
				
				<div class="col-xs-12" style="margin-top: 55px;">
					<div class="col-xs-3 step-padding">
						<span id="stepArrow10" class="step-arrow opacity00">&nbsp; &nbsp;Step 10 :</span>
					</div>
					<div id="algorithm10" class="step-explanation col-xs-8 col-xs-offset-1 opacity00"> </div>
				</div>
				
			</div>
			
			<div id="flowChartBoxChild" class="col-xs-8">
			
				<svg class="svg-css">
					<marker id="myMarker" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: gray;">
						<path d="M0,0 L5,2.5 L0,5 Z" class="arrow"/>
				    </marker>
			    
			    	<text id="text1" class="svg-text" fill="brown" x="44%" y="31%">YES</text>
			    	<text id="text2" class="svg-text" fill="brown" x="66%" y="31%">NO</text>
			    	<text id="text3" class="svg-text" fill="brown" x="30%" y="48%">YES</text>
			    	<text id="text4" class="svg-text" fill="brown" x="83%" y="48%">YES</text>
			    	<text id="text5" class="svg-text" fill="brown" x="47%" y="48%">NO</text>
			    	<text id="text6" class="svg-text" fill="brown" x="65%" y="48%">NO</text>
								    
					<!-- <line id="arrow1" class="line" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;)" y2="13.6%" y1="7.8%" x2="58%" x1="58%"/> -->
					<line id="arrow1" class="line" style="stroke: #556b2f;" y2="7.8%" y1="7.8%" x2="58%" x1="58%"/>
					
					<!-- <line id="arrow2" class="line" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;)" y2="25%" y1="20.6%" x2="58%" x1="58%"/> -->
					<line id="arrow2" class="line" style="stroke: #556b2f;" y2="20.6%" y1="20.6%" x2="58%" x1="58%"/>
					
					<!-- <line id="arrow3" class="line" style="stroke: #556b2f;" y2="32.5%" y1="32.5%" x2="39%" x1="53.5%"/> -->
					<line id="arrow3" class="line" style="stroke: #556b2f;" y2="32.5%" y1="32.5%" x2="53.5%" x1="53.5%"/>
					
					<!-- <line id="arrow4" class="line" x1="39%" x2="39%" y1="32.5%" y2="41.5%" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;)"/> -->
					<line id="arrow4" class="line" x1="39%" x2="39%" y1="32.5%" y2="32.5%" style="stroke: #556b2f;"/>
					
					<!-- <line id="arrow5" class="line" style="stroke: #556b2f;" y2="32.5%" y1="32.5%" x2="77%" x1="62.5%"/> -->
					<line id="arrow5" class="line" style="stroke: #556b2f;" y2="32.5%" y1="32.5%" x2="62.5%" x1="62.5%"/>
					
					<!-- <line id="arrow6" class="line" x1="77%" x2="77%" y1="32.5%" y2="41.5%" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;)"/> -->
					<line id="arrow6" class="line" x1="77%" x2="77%" y1="32.5%" y2="32.5%" style="stroke: #556b2f;"/>
					
					<!-- <line id="arrow7" class="line" style="stroke: #556b2f;" y2="49.5%" y1="49.5%" x2="28%" x1="34.5%"/> -->
					<line id="arrow7" class="line" style="stroke: #556b2f;" y2="49.5%" y1="49.5%" x2="34.5%" x1="34.5%"/>
					
					<!-- <line id="arrow8" class="line" x1="28%" x2="28%" y1="49.5%" y2="71.2%" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;)"/> -->
					<line id="arrow8" class="line" x1="28%" x2="28%" y1="49.5%" y2="49.5%" style="stroke: #556b2f;"/>
					
					<!-- <line id="arrow9" class="line" style="stroke: #556b2f;" y2="49.5%" y1="49.5%" x2="90%" x1="81.5%"/> -->
					<line id="arrow9" class="line" style="stroke: #556b2f;" y2="49.5%" y1="49.5%" x2="81.5%" x1="81.5%"/>
					
					<!-- <line id="arrow10" class="line" x1="90%" x2="90%" y1="49.5%" y2="71.2%" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;)"/> -->
					<line id="arrow10" class="line" x1="90%" x2="90%" y1="49.5%" y2="49.5%" style="stroke: #556b2f;"/>
					
					<!-- <line id="arrow11" class="line" style="stroke: #556b2f;" y2="49.5%" y1="49.5%" x2="57%" x1="43.5%"/> -->
					<line id="arrow11" class="line" style="stroke: #556b2f;" y2="49.5%" y1="49.5%" x2="43.5%" x1="43.5%"/>
					
					<!-- <line id="arrow12" class="line" x1="57%" x2="57%" y1="49.5%" y2="71.2%" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;)"/> -->
					<line id="arrow12" class="line" x1="57%" x2="57%" y1="49.5%" y2="49.5%" style="stroke: #556b2f;"/>
					
					<!-- <line id="arrow13" class="line" style="stroke: #556b2f;" y2="49.5%" y1="49.5%" x2="72.5%" x1="57%"/> -->
					<line id="arrow13" class="line" style="stroke: #556b2f;" y2="49.5%" y1="49.5%" x2="72.5%" x1="72.5%"/>
					
					<!-- <line id="arrow14" class="line" x1="57%" x2="57%" y1="49.5%" y2="71.2%" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;)"/> -->
					<line id="arrow14" class="line" x1="57%" x2="57%" y1="49.5%" y2="49.5%" style="stroke: #556b2f;"/>
								
					<!-- <line id="arrow15" class="line" x1="57%" x2="57%" y1="78.3%" y2="93%" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;)"/> -->
					<line id="arrow15" class="line" x1="57%" x2="57%" y1="78.3%" y2="78.3%" style="stroke: #556b2f;"/>
					
				</svg>
			
				<div class="col-xs-10 col-xs-offset-2 padding00">
				
					<div id="step1" class="center text-center oval opacity00"
					style="margin-top: 10px; line-height: 50px;">Start</div>
					
					<div id="step2" class="center text-center parallelogram opacity00"
						style="margin-top: 50px; line-height: 56px;">
						<span class="transform-text">Read A, B, C</span>
					</div>
					
					<div id="step3" class="col-xs-12 opacity00" style="margin-top: 50px;">
						<div id="flow3" style="display: inline;">
							<div class="center text-center rhombus"
									style="margin-top: 15px; line-height: 56px;"> 
									<span class="rmbsText">A &gt; B ?</span>
							</div>
						</div>
					</div>
			
					<div class="col-xs-12"
						style="margin-top: 10px; display: inline-flex;">
						<div id="step4" class="opacity00 col-xs-6">
							<div id="flow4" style="display: inline;">
								<div  class="center text-center rhombus"
								style="line-height: 56px;">
									<span class="rmbsText">A &gt; C ?</span>
								</div>
							</div>
						</div>
						
						<div id="step5" class="opacity00 col-xs-6">
							<div id="flow5" style="display: inline;">
								<div class="center text-center rhombus"
								style="line-height: 56px;">
									<span class="rmbsText"> B &gt; C ?</span>
								</div>
							</div>
						</div>
					</div>
			
					<div class="col-xs-12 center"
						style="margin-top: 120px; display: inline-flex; padding: 0;">
						<div id="flow6" class="col-xs-10">
							<div id="step6" class="center text-center parallelogram print-max opacity00"
							style="line-height: 45px; padding: 0;">
								<span class="transform-text">Max = A</span>
							</div>
						</div>
						
						<div id="flow8" class="col-xs-10">
							<div id="step8" class="center text-center parallelogram print-max opacity00"
							style="line-height: 45px;">
								<span class="transform-text">Max = C</span>
							</div>
						</div>
						
						<div id="flow7" class="col-xs-10">
							<div id="step7" class="center text-center parallelogram print-max opacity00"
							style="line-height: 45px;">
								<span class="transform-text">Max = B</span>
							</div>
						</div>
					</div>
			
					<div class="col-xs-12">
						<div id="step9" class="center text-center oval opacity00"
							style="margin-top: 125px; line-height: 50px;">Stop</div>
					</div>
					
				</div>	
				
			</div>	
			
		</div>
		
	</div>
	
</div>

	<div class="col-xs-12 text-center" style="margin-top: 20px;"><span id="restart" class="btn btn-warning opacity00">Restart</span></div>
	
</body>
</html>
