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
<script src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenLite.min.js" type="text/javascript"></script>
<script src="/js/gs/TimelineLite.min.js" type="text/javascript"></script>
<script src="/secure/lang/c/js-min/ff.min.js" type="text/javascript"></script>


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
	border: 1px solid gray;
	-moz-border-radius: 100px/35px;
	border-radius: 100px/35px;
	display:-moz-stack;
	height: 56px;
	width: 168px;
}

.margin-top-bottom {
	margin: 15px 0;
	line-height: 56px;
}

.rectangle {
	border: 1px solid gray;
	height: 56px;
	width: 168px;
	display:-moz-stack;
}

.rhombus {
	border : 1px solid gray;
    height: 70px;
    width: 70px;
    margin: 30px 0; 
   /*  margin: 31px 0 28px 4px; */
    transform : rotate(45deg) skew(15deg, 15deg);
}

.rhombus-boolean {
	border : 2px solid gray;
    height: 70px;
    width: 70px;
    margin: 30px 0;
    /* transform : rotate(45deg) skew(15deg, 15deg); */
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
	-moz-transform: skew(-36deg);
	display:-moz-stack;
	border: 1px solid gray;
}

.transform-text {
    display: inline-block;
    transform: skew(28deg);
}

.flow-chart-text {
	font-size: 11px;
	font-weight: bold;
}

.margin-top-bottom-rectangle {
	margin: 15px 0;
}

.svg-css {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
}

.svg-line {
	display: none;
	marker-end: url("#arrowEnd");
	position: relative;
	stroke: gray;
	stroke-width: 2; 
}

#algorithmBox {
	height: 400px;
}

#flowChartBox {
	min-height: 550px;
}

#description {
	height: 100px;
}
</style>
<script type="text/javascript">

	$(document).ready(function() {
		flowchartFactorialReady();
	});

</script>
</head>
<body>
<div class="col-xs-12 div-margin-top-bottom padding00" >
	<div class="text-center">
		<h1 id="heading" class="label ct-demo-heading text-center">Factorial</h1>
	</div>
</div>
<div class="col-xs-12 text-center div-margin-top-bottom padding00"><span class="btn btn-warning opacity00" id="restart">Restart</span></div>
<div class="col-xs-12 text-center padding00"><div id="description" class="col-xs-offset-3 col-xs-6 borderToMainBox padding00"></div></div>
<div class="col-xs-12 div-margin-top-bottom padding00">
	<div id="algorithmBox" class="col-xs-offset-1 col-xs-3 borderToMainBox padding00 opacity00">
		<div class="col-xs-12 text-center div-margin-top-bottom padding00"><h1 class="label ct-demo-heading text-center">Algorithm</h1></div>
		<div  id="algSteps" class="col-xs-12" style="line-height:2.0;">
			<div class="opacity00">Step 1 : START</div>
			<div class="opacity00">Step 2 : Initialize variables <ul><ul><li>fact = 1</li><li>i = 1</li></ul></ul></div>
			<div class="opacity00">Step 3 : Read value of n</div>
			<div class="opacity00">Step 4 : If i < n Then</div>
			<div class="opacity00">Step 5 : fact = fact * i <ul><ul><li>i = i + 1</li></ul></ul> </div>
			<!-- <div class="opacity00">Step 4 : Repeat the steps until i = n <ul><li>fact = fact * i</li><li>i = i + 1</li></ul></div> -->
			<div class="opacity00">Step 6 : Repeat the steps until i = n</div>
			<div class="opacity00">Step 7 : Else Print "fact"</div>
			<div class="opacity00">Step 8: STOP</div>
		</div>
	</div>
	<div id="flowChartBox" class="col-xs-offset-1 col-xs-6  text-center borderToMainBox padding00  opacity00">
		<div class="col-xs-12 div-margin-top-bottom padding00"><h1 class="label ct-demo-heading">FlowChart</h1></div>
		<div class="col-xs-12 padding00  margin-top-bottom">
			<div id="step1" class="oval opacity00"><span class="flow-chart-text">START</span></div>
		</div>
		<div class="col-xs-12 padding00">
			<div id="step2" class="rectangle display-inline-block margin-top-bottom-rectangle opacity00">
				<div class="flow-chart-text" style="top: 15px; position: relative;">
					<div>Initialize fact = 1,</div>
					<div>i = 1</div>
				</div>
			</div>
		</div>
		<div class="col-xs-12 padding00">
			<div id="step3" class="parallelogram margin-top-bottom opacity00"><span class="flow-chart-text transform-text">Read n</span></div>
		</div>
		<div class="col-xs-12 padding00 text-center margin-top-bottom">
			<div class="col-xs-offset-4 col-xs-4 padding00">
				<div id="rhmbsParent" style= "display:inline-block;" class="opacity00">
					<div id="step4" class="rhombus display-inline-block " ><span class="rmbsText"><span class="flow-chart-text">i <= n</span></span></div>
					<!-- <div><span id="true" style="line-height: 1; position: absolute;" class="opacity00"><b>True</b></span></div> -->
				</div>
			</div>
			<!-- <div style="position:relative;"><span id="false" style="line-height: 1; position: absolute;" class="opacity00"><b>False</b></span></div> -->
			<div class="col-xs-4 padding00 margin-top-bottom">
				<div style="margin:30px 0;"></div>
				<div   id="step7" class="center parallelogram opacity00"><span id="parallelogram" class="flow-chart-text transform-text">print fact</span></div>
			</div>
		</div>
		<div class="col-xs-12 padding00">
			<div class="col-xs-offset-4 col-xs-4 padding00">
				<div id="step5" class="rectangle display-inline-block margin-top-bottom-rectangle opacity00 step5" >
					<div class="flow-chart-text" style="top: 15px; position: relative;">
						<div>fact = fact * i</div>
						<div>i = i + 1</div>
					</div>	
				</div>
			</div>
			<div class="col-xs-4 padding00" >
				<div  id="step8"class="center oval margin-top-bottom opacity00">
					<span class="flow-chart-text">STOP</span>
				</div>
			</div>
		</div>
	</div>
</div>
</body>
</html>