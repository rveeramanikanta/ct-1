<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link href="/css/font-awesome.min.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/secure/lang/c/js-min/dic.min.js"></script>
<title>data type</title>
<style>
.box-border {
	border: 1px solid grey;
	border-radius: 8px;
	margin-top : 3px;	
}
.svg-css {
	top: 0;
	left: 0;
	position: absolute;
	height: 100%;
	width: 100%;
}

#typingbox {
	min-height : 145px;
	padding:5px;
	font-size : 14px;
}

#animationDiv {
	height : 400px;
}

#datatypeDiv {
	height : 20px;
	font-size : 14px;
	text-align : center;
	margin-top : 50px;
}

.sub-div {
	margin-top : 100px;
	color:blue;
}

.subsub {
	/* margin-left : 45px; */
	color:green;
}

.line {
	 stroke:black; 
	 stroke-width: 2;
}

.buttons-div {
	margin-top: 20px;
	margin-bottom: 5px;
	text-align: center;
}

.padding0 {
	padding : 0px;
}

#userDiv {
	text-align : center;
}

#datatypeDiv {
	text-align : center;
}

.introjs-tooltip {
	min-width: 140px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.color-green {
	color:green;
}
.color-yellow {
	color:yellow;
}
.margin20 {
	margin-top:20px;
}

.margin5 {
	margin-top:5px;
}
</style>
</head>

<body>
<script>
	$(document).ready(function(){
		introGuide();
	});
</script>
	<div class='text-center margin20'>
		<h1 class='label ct-demo-heading'>Data types</h1>
	</div>
	
	<div class = 'typing-box col-xs-offset-2 col-xs-8 box-border margin20' id = 'typingbox'>
	</div>
		
	<div class = 'box-border col-xs-offset-2 col-xs-8 padding0 animation-div opacity00 margin20' id = 'animationDiv'>
		<div class = 'svg-div col-xs-12 padding0 svg-css' id = 'svgDiv'>
		<svg id="arrowsvg" width="100%" height="500px">
			<marker id="arrow" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: black;">
				<path class="arrow" d="M0,0 L5,2.5 L0,5 Z">
			</marker>
			<line id="arrow1" class="line opacity00" style="marker-end: url(#arrow)" x1="49.5%" y1="15%" x2="49.5%" y2="15%"/>
			<line id="arrow2" class="line opacity00" y2="25.5%" x2="49.5%"  x1="49.5%" y1="25.5%"/>x1="36.5%" y1="25.5%" 
			<line id="arrow3" class="line opacity00" style = "marker-end:url(#arrow);" x2="11%" y2="25.5%" x1="11%" y1="25.5%"/>
			<line id="arrow4" class="line opacity00" style="marker-end: url(#arrow);"  x1="36.5%" y1="25.5%" y2="25.5%" x2="36.5%"/> 
			<line id="arrow5" class="line opacity00" y2="25.5%" x2="49.5%" y1="25.5%" x1="49.5%"/>
			<line id="arrow6" class="line opacity00" style="marker-end: url(#arrow);" y1="25.5%" x1="61.5%" x2="61.5%" y2="25.5%"/>
			<line id="arrow7" class="line opacity00" y2 = '25.5%' x2 = '61.5%' y1="25.5%" x1="61.5%"/>
			<line id="arrow8" class="line opacity00" style = "marker-end:url(#arrow);"  y1="25.5%" x1="85.5%" y2 ='25.5%' x2='85.5%'/>
			<line id="arrow9" class="line opacity00" x1="11%" y1="38.5%" x2="11%" y2="38.5%"/> 
			<line id="arrow10" class="line opacity00" y1="41%" x1="11%" y2 ='41%' x2='11%'/> 
			<line id="arrow12" class="line opacity00" y1="48.5%" x1="11%" y2 ='48.5%' x2='11%'/>
			<line id="arrow14" class="line opacity00" y1="56%" x1="11%" y2 ='56%' x2='11%'/>
			<line id="arrow16" class="line opacity00" y1="64%" x1="11%" y2 ='64%' x2='11%'/>
			<line id="arrow15" class="line opacity00" x1="36.5%" y1="38.5%" x2="36.5%" y2="38.5%"/>
			<line id="arrow17" class="line opacity00" y1="41%" x1="36.5%" y2 ='41%' x2='36.5%'/>
			<line id="arrow18" class="line opacity00" y1="48.5%" x1="36.5%" y2 ='48.5%' x2='36.5%'/>
			<line id="arrow19" class="line opacity00" y1="56%" x1="36.5%" y2 ='56%' x2='36.5%'/>
			<line id="arrow20" class="line opacity00" y1="64%" x1="36.5%" y2 ='64%' x2='36.5%'/>
			<line id="arrow21" class="line opacity00" x1="61.5%" y1="38.5%" x2="61.5%" y2="38.5%"/>
			<line id="arrow22" class="line opacity00" y1="41%" x1="61.5%" y2 ='41%' x2='61.5%'/>
			<line id="arrow23" class="line opacity00" y1="48.5%" x1="61.5%" y2 ='48.5%' x2='61.5%'/>
			<line id="arrow24" class="line opacity00" y1="38.5%" x1="85.5%" y2 ='38.5%' x2='85.5%'/>
			<line id="arrow25" class="line opacity00" y1="41%" x1="85.5%" y2 ='41%' x2='85.5%'/> 
		</svg>
	</div>
		<div class = 'col-xs-12 padding0'>
			<div class = 'col-xs-offset-5 col-xs-2 opacity00 padding0' id = 'datatypeDiv'><b>Data types</b></div>
		</div>
		
		<div class = 'col-xs-12 padding0 sub-div'>
			<div class = 'col-xs-offset-1 col-xs-2 scalar-div opacity00 padding0' id = 'scalarDiv'>Scalar</div>
			<div class = 'col-xs-offset-1 col-xs-2 derived-div opacity00 padding0' id = 'derivedDiv'>Derived</div>
			<div class = 'col-xs-3 user-div opacity00 padding0' id = 'userDiv'>User Defined</div>
			<div class = 'col-xs-offset-1 col-xs-2 empty-div padding0 opacity00' id = 'emptyDiv'>Empty</div>
		</div>
		<div class = 'col-xs-12 padding0 subsub-div '>
			<div class = 'col-xs-offset-1 col-xs-2 padding0 subscalar-div ' id = 'subscalarDiv'>
				<div id = "subChar" class = 'col-xs-offset-4 col-xs-6 padding0 subsub subscalar1 opacity00 margin5'>char</div>
				
				<br><br><div class = 'col-xs-offset-4 col-xs-6 padding0 subsub subscalar2 opacity00'>int</div>
				
				<br><br><div class = 'col-xs-offset-4 col-xs-6 padding0 subsub subscalar3 opacity00'>float</div>
				
				<br><br><div class = 'col-xs-offset-4 col-xs-6 padding0 subsub subscalar4 opacity00 '>double</div>
			</div>
			<div class = 'col-xs-offset-1 col-xs-2 padding0 subderived-div ' id = 'subderivedDiv'>
				<div class = 'col-xs-offset-4 col-xs-6 padding0 subsub subderived1 opacity00 margin5'>arrays</div>
				
				<br><br><div class = 'col-xs-offset-4 col-xs-6 padding0 subsub subderived2 opacity00'>functions</div>
				
				<br><br><div class = 'col-xs-offset-4 col-xs-6 padding0 subsub subderived3 opacity00'>structures</div>
				<br><br><div class = 'col-xs-offset-4 col-xs-6 padding0 subsub subderived4 opacity00'>pointers</div>
			</div>
			<div class = 'col-xs-offset-1 col-xs-2 padding0 subuser-div' id = 'subuserDiv'>
				<div class = 'col-xs-offset-4 col-xs-6 padding0 subsub subuser1 opacity00 margin5'>typedef</div>
				<br><br><div class = 'col-xs-offset-4 col-xs-6 padding0 subsub subuser2 opacity00'>enum</div>
			</div>
			<div class = 'col-xs-offset-1 col-xs-2 padding0 subempty-div' id = 'subemptyDiv'>
				<div class = 'col-xs-offset-4 col-xs-6 padding0 subsub subempty1 opacity00 margin5'>void</div>
			</div>
		</div>
	</div>
	
	<div class = 'buttons-div col-xs-12 margin20'>
		<button type = "button" class = "btn btn-warning visibility-hidden" id = "restartBtn">Restart</button>
	</div> 

</body>
</html>