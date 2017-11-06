<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">
<link href="/css/tablesorter/jquery-ui.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">

<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/data-structures-css.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/alertify/alertify.js" type="text/javascript"></script>
<script src="/secure/lang/c/js-min/hclw.min.js" type="text/javascript"></script>

<title>Introduction</title>
<style>
.box-border {
	border: 2px solid gray;
	border-radius: 10px;
	height: 70px;
}
            
.border {
	border: 2px solid gray;
	border-radius: 10px;
	height: 575px;
}

.oval {
	border: 2px solid gray;
	border-radius: 50%;
	height: 70px;
	background-color: antiquewhite;
}

.text-middle {
	align-items: center;
	display: flex;
	justify-content: center;
	text-align: center;
}

.main-div {
	border: 2px soild transparent;
	border-radius: 10px;
}

.svg-css {
	top: 0;
	left: 0;
	position: absolute;
	height: 100%;
	width: 100%;
}

.margin-top30 {
	margin-top: 30px;
}

.margin-top20 {
	margin-top: 20px;
	margin-left: 20px;
}

.popover-content {
	background-color: lightgray;
	color: black;
	min-height: 50px;
}

.popover {
	z-index: 9999996;
	width: 215px;
}

.ct-btn-next {
	float: right;
	padding: 2px 5px;
	cursor: pointer;
}

.tooltip-height {
	height: 20px;
	/* margin-top: 5px; */
}

</style>
</head>
<body>
<script>
	
	$(document).ready(function() {
		howCLanguageWorksReady();
	});
	
</script>
	<h2 class="text-center">
		<span class="label label-default ct-demo-heading" id="heading">How the C language works?</span>
	</h2>
	<div class="margin-top20 text-center">
		<span class="btn btn-warning opacity00" id="restart">Restart</span>
	</div>
	<br>
	<div class=" col-xs-offset-1 col-xs-11 main-div" id="mainDiv">
		<div class="col-xs-9 border animation-div" id="animationDiv">
			<div class="col-xs-12" style="height: 575px;" id="svgDiv">
				<svg class="svg-css" id="svgId"> 
						<marker refX="4" refY="2.5" markerWidth="5" markerHeight="5"
						orient="auto" style="fill: gray;" id="arrow"> 
							<path d="M0,0 L5,2.5 L0,5 Z" class="arrow" /> 
						</marker> 
					<line id="arrowMark1" class="line" x1="34.10%" y1="11%"
						x2="34.10%" y2="11%"
						style="marker-end: url(#arrow); stroke: gray; stroke-width: 2; display: inline;" /> 
					<line id="arrowMark2" class="line" x1="57.5%" y1="11%"
						x2="57.5%" y2="11%"
						style="marker-end: url(#arrow); stroke: gray; stroke-width: 2; display: inline;" />
						
					<line id="arrowMark3" class="line" x1="50%" y1="23%" x2="50%"
						y2="23%"
						style="marker-end: url(#arrow); stroke: gray; stroke-width: 2; display: inline;" />
					<line id="arrowMark4" class="line" x1="50%" y1="23%" x2="50%"
						y2="23%"
						style="marker-end: url(#arrow); stroke: gray; stroke-width: 2; display: inline;" />
					<line
						style="marker-end: url(#arrow); stroke: gray; stroke-width: 2; display: inline;"
						y2="51.5%" x2="45%" y1="51.5%" x1="45%" class="line"
						id="arrowMark6" />
					<line id="arrowMark5" class="line" x1="23%" y1="51.5%" x2="23%"
						y2="51.5%"
						style="marker-end: url(#arrow); stroke: gray; stroke-width: 2; display: inline;" />
					<line id="arrowMark7" class="line" x1="79%" y1="51.5%" x2="79%"
						y2="51.5%"
						style="marker-end: url(#arrow); stroke: gray; stroke-width: 2; display: inline;" />
					<line id="arrowMark9" class="line" x1="47%" y1="79.5%" x2="47%"
						y2="79.5%"
						style="marker-end: url(#arrow); stroke: gray; stroke-width: 2; display: inline;" />
					<line id="arrowMark10" class="line" x1="23%" y1="78.5%" x2="23%"
						y2="78.5%"
						style="marker-end: url(#arrow); stroke: gray; stroke-width: 2; display: inline;" />
					
					<!-- retrive -->
					<line id="arrowMark11" class="line" x1="79%" y1="51.6%" x2="79%"
						y2="51.6%"
						style="marker-end: url(#arrow); stroke: gray; stroke-width: 2; display: inline;" />
					<line id="line17" class="line" x1="79%" y1="17.5%" x2="79%"
						y2="17.5%" style="stroke: gray; stroke-width: 2; display: inline;" />
					<line id="arrowMark12" class="line" x1="62%" y1="51.5%" x2="62%" y2="51.5%"
						style="marker-end: url(#arrow); stroke: gray; stroke-width: 2; display: inline;" />
					<line id="line18" class="line" x1="79%" y1="51.5%" x2="79%"
						y2="51.5%" style="stroke: gray; stroke-width: 2; display: inline;" />
					<line id="arrowMark13" class="line" style="marker-end: url(#arrow); stroke: gray; stroke-width: 2; display: inline;"
						y2="51.5%" x2="23%" y1="51.5%" x1="23%"/>
					<line id="line1" class="line" x1="50%" y1="17%" x2="50%"
						y2="17%" style="stroke: gray; stroke-width: 2; display: inline;" />
					<line id="line2" class="line" x1="35%" y1="44%" x2="35%"
						y2="44%" style="stroke: gray; stroke-width: 2; display: inline;" />
					<line id="line3" class="line" x1="65%" y1="44%" x2="65%"
						y2="44%" style="stroke: gray; stroke-width: 2; display: inline;" />
					<line id="arrowMark14" class="line" x1="64.6%" y1="51.6%"
						x2="64.6%" y2="51.6%"
						style="marker-end: url(#arrow); stroke: gray; stroke-width: 2; display: inline;" /> 
					<line id="arrowMark15" class="line" x1="23%" y1="78.7%"
						x2="23%" y2="78.7%"
						style="marker-end: url(#arrow); stroke: gray; stroke-width: 2; display: inline;" />
						
						<!-- explanitation -->
					<line id="line4" class="line" x1="76%" y1="51.5%" x2="76%"
						y2="51.5%" style="stroke: gray; stroke-width: 2; display: inline;" />
					<line id="line5" class="line" x1="23%" y1="17%" x2="23%" y2="17%"
						style="stroke: gray; stroke-width: 2; display: inline;" />
					<line id="line16" class="line" x1="23%" y1="17%" x2="23%" y2="17%"
						style="stroke: gray; stroke-width: 2; display: inline;" />
						
						<!-- type-1 example lines -->
					<line id="line6" class="line" x1="35%" y1="51.5%" x2="35%"
						y2="51.5%" style="stroke: gray; stroke-width: 2; display: inline;" />
					<line id="line7" class="line" x1="35%" y1="58.5%" x2="35%"
						y2="58.5%" style="stroke: gray; stroke-width: 2; display: inline;" />
					<line id="line8" class="line" x1="35%" y1="65.5%" x2="35%"
						y2="65.5%" style="stroke: gray; stroke-width: 2; display: inline;" />
					<line id="line9" class="line" x1="35%" y1="72.5%" x2="35%"
						y2="72.5%" style="stroke: gray; stroke-width: 2; display: inline;" />
					<line id="line10" class="line" x1="35%" y1="79%" x2="35%"
						y2="79%" style="stroke: gray; stroke-width: 2; display: inline;" />
						
						<!-- type-2 example lines -->
					<line id="line11" class="line" x1="65%" y1="51.5%" x2="65%"
						y2="51.5%" style="stroke: gray; stroke-width: 2; display: inline;" />
					<line id="line12" class="line" x1="65%" y1="58.5%" x2="65%"
						y2="58.5%" style="stroke: gray; stroke-width: 2; display: inline;" />
					<line id="line13" class="line" x1="65%" y1="65.5%" x2="65%"
						y2="65.5%" style="stroke: gray; stroke-width: 2; display: inline;" />
					<line id="line14" class="line" x1="65%" y1="72.5%" x2="65%"
						y2="72.5%" style="stroke: gray; stroke-width: 2; display: inline;" />
					<line id="line15" class="line" x1="65%" y1="79%" x2="65%"
						y2="79%" style="stroke: gray; stroke-width: 2; display: inline;" />	
						<line id="line19" class="line" style="stroke: gray; stroke-width: 2; display: inline;" y2="51.4%" x2="34.9%" y1="51.4%" x1="34.9%"/>
						<line id="line20" class="line" style="stroke: gray; stroke-width: 2; display: inline;" y2="78.9%" x2="34.9%" y1="78.9%" x1="34.9%"/>
						<line id="line21" class="line" x1="79%" y1="17.5%" x2="79%"
						y2="17.5%" style="stroke: gray; stroke-width: 2; display: inline;" />
				</svg>
				<div class="col-xs-12 margin-top30">
					<div class="col-xs-offset-2 col-xs-2 box-border text-middle opacity00" id="user" style="background-color: #fffac2;">User</div>
					<div class="col-xs-offset-1 col-xs-2 oval text-middle opacity00" id="os">Operating
						System</div>
					<div class="col-xs-offset-1 col-xs-2 box-border text-middle opacity00" id="hardware" style="background-color: #fffac2;">Hardware</div>
					<div class="col-xs-12" style="margin-top: 85px;">
						<div class="col-xs-offset-3 col-xs-2 box-border text-middle opacity00" id="ApplicationSoftware" style="background-color: rgba(249, 145, 145, 0.26)";>Application
							Software</div>
						<div class="col-xs-offset-2 col-xs-2 box-border text-middle opacity00" id="systemSoftware" style="background-color: rgba(249, 145, 145, 0.26);">System
							Software</div>
					</div>
				</div>
				<div class="col-xs-12 margin-top30">
					<div class="col-xs-offset-4 col-xs-3">
						<div class="opacity00" id="word" style="margin-left: 20px;">MS-word</div>
						<div class="margin-top20 opacity00" id="paint">paint</div>
						<div class="margin-top20 opacity00" id=games>Games</div>
						<div class="margin-top20 opacity00" id="ppt">power-point</div>
						<div class="margin-top20 opacity00" id="c">C language</div>
					</div>
					<div class="col-xs-offset-1 col-xs-3">
						<div class="opacity00" style="margin-left: 20px;" id="compiler">compiler</div>
						<div class="opacity00 margin-top20" id="assembler">Assembler</div>
						<div class="opacity00 margin-top20" id="linker">linker</div>
						<div class="opacity00 margin-top20" id="loader">loader</div>
						<div class="opacity00 margin-top20" id="interpreter">Interpreter</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>