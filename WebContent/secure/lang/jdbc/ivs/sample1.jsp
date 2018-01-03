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

<link rel="stylesheet" href="/css/alertify/alertify.core.css"/>
<link rel="stylesheet" href="/css/alertify/alertify.default.css"/>

<link href="/css/introjs-ct.css" rel="stylesheet">
<!-- <link href="/css/data-structures-css.css" rel="stylesheet"> -->

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/alertify/alertify.js" type="text/javascript"></script>
 <script src ="/secure/lang/jdbc/js/sample1.js"text/javascript"></script>
<title>get-connection</title>
<style type="text/css">

.main-box-border {
	border: 2px solid transparent;
	border-radius: 10px;
	height: 564px;
}
.animation-box {
	margin-top: 65px;
	position: relative;
	display: flex;
	align-items: center;
}

.box-border {
	align-items: center;
    border: 1px solid gray;
    border-radius: 8px;
    display: flex;
    height: 55px;
    justify-content: center;
    text-align: center;
}
.box {
	align-items: center;
    border: 1px solid gray;
    border-radius: 8px;
    display: flex;
    height: 32px;
    justify-content: center;
    text-align: center;
}
.box-border1 {
	align-items: center;
    border: 1px solid gray;
    border-radius: 8px;
    display: flex;
    height: 45px;
    justify-content: center;
    text-align: center;
    margin-top: 5px;
}


.invisable-div {
	
    border: 1px solid gray;
    border-radius: 15px;
   
     height: 220px;
    justify-content: center;
}

.invisable-div2 {
	
    border: 1px solid gray;
    border-radius: 15px;
    height: 220px;
    justify-content: center;
}

.padding-left0 {
	padding-left: 0;
}

.margin-top10 {
	margin-top: 10px;
}

.padding0 {
	padding: 0;
}

.text-font {
	font-size: 12px;
}
.text-font1 {
	font-size: 10px;
}
.text-center1 {
	/* display: flex; */
    /* height: 220px; */
    justify-content: center;
    align-items: center;
}

/* #animationDiv {
	margin-top: 10px;
} */

.popover-content {
	background-color: lightgray;
	color: black;
}

.popover {
	z-index: 99999999;
	width: 215px;
}

.ct-btn-next {
	float: right;
	padding: 2px 5px;
	cursor: pointer;
}

.tooltip-height {
	height: 20px;
	margin-top: 5px;
}

.ui-effects-transfer {
	border: 1px solid gray; 
	border-radius: 15px;
	z-index: 999999999;
 }

.green-color {
	color : green;
	font-weight: bold;
}
.green-color1 {
	color : green;
	font-weight: normal;
}
.border {
	border: 2px solid gray;
	border-radius: 6px;
	box-shadow: 0 1px 4px 1px gray;
	
}
.oval {
	border: 2px solid gray;
    border-radius: 50%;
    display: table-cell;
    height: 28px;
    position: absolute;
    width: 100%;
    margin-top: -9px;
	/* background-color: antiquewhite; */
}
.oval1 {
	border: 2px solid gray;
    border-radius: 50%;
    display: table-cell;
    height: 25px;
    position: absolute;
    width: 100%;
    margin-top: -9px;
	/* background-color: antiquewhite; */
}
.oval2 {
	border: 2px solid gray;
    border-radius: 50%;
    display: table-cell;
    height: 60px;
    position: absolute;
    width: 100%;
    margin-top: -9px;
	/* background-color: antiquewhite; */
}
.oval3 {
	border: 2px solid gray;
    border-radius: 50%;
    display: table-cell;
    height: 60px;
    position: absolute;
    width: 120%;
    margin-top: 15px;
	/* background-color: antiquewhite; */
}
/* .oval4 {
	border: 2px solid gray;
    border-radius: 50%;
   display: inline-flex;
    height: 45px;
    position: relative;
    width: 120%;
    margin-top: 2px;
	/* background-color: antiquewhite; */
} */
.database-box {
	border: 1px solid gray;
	border-radius: 8px;
	height: 80px;
	border-top:none;
	display: table;
	margin-bottom: 30px;
	padding:0;
	width:80px
}
.database-box1 {
	border: 1px solid gray;
	border-radius: 8px;
	height: 53px;
	border-top:none;
	display: table;
	margin-bottom: 30px;
	padding:0;
	width:86px
}
.database-box2 {
	border: 1px solid gray;
	border-radius: 8px;
	height: 53px;
	border-top:none;
	display: table;
	margin-bottom: 30px;
	padding:0;
	width:86px;
	margin-top: 35px;
}
.database-text-middle {
	vertical-align: middle;
	text-align: center;
	display: table-cell;
}
.circle {
    height: 100px;
    width: 100px;
   /* // background-color: gray; */
    border-radius: 50%;
    display: inline-block;
}
.circle2 {
    height: 76px;
    width: 98px;
   /* // background-color: gray; */
    border-radius: 50%;
    display: inline-block;
}
.svg-arrow-line1 {
	marker-end: url("#arrowEnd");
	display: none;
}
.svg-arrow-line2 {
	marker-end: url("#arrowEnd");
	display: none;
} 
.svg-css {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
}
.svg-line {
	stroke: gray;
	stroke-width: 2;
}
.svg-line1 {
	stroke: gray;
	stroke-width: 2;
}
.svg-line2 {
	stroke: gray;
	stroke-width: 2;
}
.svg-line3 {
	stroke: gray;
	stroke-width: 2;
}
.green-color {
	color : green;
	font-weight: lighter;
	font-size: 13px;
}
.border {
	border: 2px solid gray;
	border-radius: 6px;
	//box-shadow: 0 1px 4px 1px gray;
	
}
.blinking-border-background-green {
	animation: blink-border-background-green 3.10s linear 1;
}

@keyframes blink-border-background-green {
	
	25% {
		box-shadow:  0 2px 6px 2px green;
	}
	
	75% {
		box-shadow:  0 2px 6px 2px green;
	}
	
	100% {
		box-shadow:  0 2px 6px 2px gray;
	}
}
.oval4 {
	border: 2px solid gray;
    border-radius: 50%;
   display: inline-flex;
    height: 45px;
    position: relative;
  	 width:93px;
    margin-top: 2px;
	/* background-color: antiquewhite; */
} 
.context {
	/* background-color: rgba(255, 143, 11, 0.15);
    border: 2px dashed green; */
    border-radius: 0;
    height: 91px;
    width: 59.667%;
    margin-top:30px;
   /*  padding: 28px; */
    }
    .con {
	background-color: rgba(255, 143, 11, 0.15);
    border: 2px dashed green; 
    border-radius: 0;
    height: 50px;
    width: 65.667%;
    
   /*  padding: 28px; */
    }
    .display {
    display:none!important;
    }
    .ovel5 {
    border: 2px solid gray;
    border-radius: 50%;
    display: inline-flex;
    height: 35px;
    margin-left: 0;
    margin-top: 4px;
    position: relative;
    width: 83px;
    }
    .duplicate-backbutton {
	background-color:#41bbf4!important;
	float: right;
	padding: 1px 4px;
	cursor: pointer;
}
</style>
</head>
<body>
	<div>
		<h2 class="text-center">
			<span class="label label-default ct-demo-heading">Getting Connection to DB</span>
		</h2>
	</div>
		<div class="col-xs-10">
			<div class="main-box-border" id="mainBox">
			<svg class ="svg-css">
				 <marker id="flow4Marker" refX="3" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: gray;">
               			<path d="M0,0 L5,2.5 L0,5 Z"/>
           		</marker>
           	
				<line class="svg-line" id = "line1" x1="38%" y1="49%" x2="38%" y2="50%" style="marker-end: url(#flow4Marker);"/>
					<text y="314" x="300" font-size="15" id="query1" class="green-color ani">getConnection</text>
					<line class="svg-line" id = "line2" x1="37%" y1="68%" x2="37%" y2="67.9%" style="marker-end: url(#flow4Marker);"/>
					<text y="415" x="297" font-size="15" id="query2" class="green-color ani">connect to db</text>
					<line class="svg-line" id = "line3" x1="38%" y1="81%" x2="38%" y2="82%" style="marker-end: url(#flow4Marker);"/>
					<text y="429" x="396" font-size="15" id="query3" class="green-color ani">get the connection</text>
					<!-- <line class="svg-line " id = "line4" x1="25%" y1="68%" x2="25%" y2="67.9%"/> -->
					<line class="svg-line " id = "line5" x1="46%" y1="62%" x2="47%" y2="62%" style="marker-end: url(#flow4Marker);"/>
					 <text y="377" x="481" font-size="15" id="query4" class="green-color ani">data base(url)</text>
					 <line class="svg-line" id = "line6" x1="57%" y1="59%" x2="57%" y2="58.5%"/>
					 <line class="svg-line " id = "line7" x1="57%" y1="47%" x2="57%" y2="47%" style="marker-end: url(#flow4Marker);"/>
					 <!-- <line class="svg-line " id = "line8" x1="29%" y1="43%" x2="29%" y2="43%"/>
					  <line class="svg-line " id = "line9" x1="48%" y1="43%" x2="48%" y2="44%" style="marker-end: url(#flow4Marker);"/> -->
					  <!-- // up to 9 lines for animation 1 -->
					  <line class="svg-line1" id = "line10" x1="10%" y1="12%" x2="10%" y2="15%" style="marker-end: url(#flow4Marker);"/>
					  <text y="79" x="31" font-size="10"class="green-color1 ani2">getConnection</text>
					  <line class="svg-line1" id = "line11" x1="9%" y1="25%" x2="9%" y2="29%" style="marker-end: url(#flow4Marker);"/>
					  <text y="156" x="25" font-size="10" class="green-color1 ani2">connect to db</text>
					  <line class="svg-line1" id = "line12" x1="11%" y1="30%" x2="11%" y2="26%" style="marker-end: url(#flow4Marker);"/>
					  <text y="160" x="124" font-size="10"class="green-color1 ani2">get the connection</text>
					 <!--  <line class="svg-line1" id = "line13" x1="16%" y1="27%" x2="16%" y2="25%"/> -->
					  <line class="svg-line1" id = "line14" x1="14%" y1="20%" x2="18%" y2="20%" style="marker-end: url(#flow4Marker);"/>
					  <text y="134" x="151" font-size="10" class="green-color1 ani2">data base(url)</text>
					<!--  <line class="svg-line1" id = "line15" x1="10%" y1="9%" x2="31%" y2="9%"/>
					  <line class="svg-line1" id = "line16" x1="31%" y1="9%" x2="31%" y2="15%" style="marker-end: url(#flow4Marker);"/> -->
					   <line class="svg-line1" id = "line17" x1="23%" y1="5%" x2="23%" y2="15.5%"/>
					  <line class="svg-line1" id = "line18" x1="23%" y1="5%" x2="15%" y2="5%" style="marker-end: url(#flow4Marker);"/>
					<!--   // svg line s for invisible div 2 -->
					  <line class="svg-line2" id = "line19" x1="59%" y1="7%" x2="66%" y2="7%"/>
					  <line class="svg-line2" id = "line20" x1="66%" y1="7%" x2="66%" y2="11%" style="marker-end: url(#flow4Marker);"/>
					  <!-- <line class="svg-line2" id = "line21" x1="80%" y1="19%" x2="75%" y2="19%" style="marker-end: url(#flow4Marker);"/> -->
					<!--   <line class="svg-line2" id = "line22" x1="55%" y1="19%" x2="76%" y2="19%"/>
					  <line class="svg-line2" id = "line23" x1="55%" y1="19%" x2="55%" y2="13%" style="marker-end: url(#flow4Marker);"/> -->
					  <!-- <line class="svg-line2" id = "line24" x1="57%" y1="17%" x2="57%" y2="11%"/>
					  <line class="svg-line2" id = "line25" x1="57%" y1="17%" x2="62%" y2="17%" style="marker-end: url(#flow4Marker);"/> -->
					  <line class="svg-line2" id = "line26" x1="70%" y1="16%" x2="73%" y2="16%" style="marker-end: url(#flow4Marker);"/>
			     	<line class="svg-line2" id = "line27" x1="81%" y1="16%" x2="83%" y2="16%" style="marker-end: url(#flow4Marker);"/>
			        <line class="svg-line2" id = "line32" x1="67%" y1="21%" x2="67%" y2="25%"/> 
			        <line class="svg-line2" id = "line33" x1="67%" y1="25%" x2="60%" y2="25%" style="marker-end: url(#flow4Marker);"/>
			        <line class="svg-line2" id = "line34" x1="67%" y1="25%" x2="60%" y2="25%"/>
			        <line class="svg-line2" id = "l35" x1="67%" y1="25%" x2="67%" y2="21%" style="marker-end: url(#flow4Marker);"/> 
					<line class="svg-line2" id = "line28" x1="88%" y1="12%" x2="88%" y2="5%"/>
					<line class="svg-line2" id = "line29" x1="88%" y1="5%" x2="60%" y2="5%"style="marker-end: url(#flow4Marker);"/> 
					<line class="svg-line2" id = "line30" x1="53%" y1="27%" x2="53%" y2="30.3%" style="marker-end: url(#flow4Marker);"/>
					<line class="svg-line2" id = "line31" x1="53%" y1="31%" x2="53%" y2="26.8%" style="marker-end: url(#flow4Marker);"/> 
						<!-- 	//animation2 lines are start here -->
					<!-- <line class="svg-line3" id = "line33" x1="67%" y1="43%" x2="67%" y2="43%"/> 
					<line class="svg-line3" id = "line34" x1="86%" y1="43%" x2="86%" y2="44%" style="marker-end: url(#flow4Marker);"/>
					<text y="233" x="729" font-size="15" id="con" class="green-color ani">connection.getStatment()</text>
					<line class="svg-line3" id = "line35" x1="86%" y1="56%" x2="86%" y2="56%"/> 
					<line class="svg-line3" id = "line36" x1="86%" y1="61%" x2="85%" y2="61%" style="marker-end: url(#flow4Marker);"/>
					<line class="svg-line3" id = "line37" x1="68%" y1="60%" x2="68%" y2="60%"/> 
					<line class="svg-line3" id = "line38" x1="60%" y1="60%" x2="60%" y2="59%" style="marker-end: url(#flow4Marker);"/>	
					<line class="svg-line3" id = "line39" x1="58%" y1="48%" x2="58%" y2="48%"/> 
					<line class="svg-line3" id = "line40" x1="58%" y1="63%" x2="57%" y2="63%" style="marker-end: url(#flow4Marker);"/>
					<line class="svg-line3" id = "line41" x1="76%" y1="63%" x2="76%" y2="63%"/> 
					<line class="svg-line3" id = "line42" x1="87%" y1="63%" x2="87%" y2="62%" style="marker-end: url(#flow4Marker);"/>
					<line class="svg-line3" id = "line43" x1="88%" y1="56%" x2="88%" y2="57%" style="marker-end: url(#flow4Marker);"/>
					<line class="svg-line3" id = "line44" x1="88%" y1="75.5%" x2="88%" y2="77%" style="marker-end: url(#flow4Marker);"/>
					<line class="svg-line3" id = "line45" x1="90%" y1="94%" x2="90%" y2="85%" style="marker-end: url(#flow4Marker);"/>
					<line class="svg-line3" id = "line46" x1="90%" y1="68.5%" x2="90%" y2="67%" style="marker-end: url(#flow4Marker);"/>
					<line class="svg-line3" id = "line47" x1="72%" y1="65%" x2="72%" y2="64%" style="marker-end: url(#flow4Marker);"/>
					<line class="svg-line3" id = "line48" x1="72%" y1="73%" x2="71%" y2="73%" style="marker-end: url(#flow4Marker);"/>
					<line class="svg-line3" id = "line49" x1="56%" y1="69.5%" x2="56%" y2="69%" style="marker-end: url(#flow4Marker);"/>
					<line class="svg-line3" id = "line50" x1="86%" y1="61%" x2="85%" y2="61%" style="marker-end: url(#flow4Marker);"/>
					<line class="svg-line3" id = "line51" x1="68%" y1="60%" x2="68%" y2="60%"/>  -->
					<line class="svg-line3" id = "line35" x1="44%" y1="10%" x2="44%" y2="11%" style="marker-end: url(#flow4Marker);"/>
					<line class="svg-line3" id = "line36" x1="43%" y1="53%" x2="43%" y2="54%" style="marker-end: url(#flow4Marker);"/>
					<line class="svg-line3" id = "line37" x1="44%" y1="65%" x2="44%" y2="64%" style="marker-end: url(#flow4Marker);"/>
					<line class="svg-line3" id = "line38" x1="49.2%" y1="49%" x2="49.5%" y2="49%"/>
					<line class="svg-line3" id = "line39" x1="58.5%" y1="49%" x2="58.5%" y2="48%" style="marker-end: url(#flow4Marker);"/>	
					<line class="svg-line3" id = "line40" x1="59%" y1="11%" x2="59%" y2="16%"/>
					<line class="svg-line3" id = "line41" x1="59%" y1="6%" x2="58%" y2="6%" style="marker-end: url(#flow4Marker);"/>
					<line class="svg-line3" id = "line42" x1="50%" y1="4%" x2="50%" y2="4%"/>
					<line class="svg-line3" id = "line43" x1="60%" y1="4%" x2="60%" y2="5%" style="marker-end: url(#flow4Marker);"/>
					<line class="svg-line3" id = "line44" x1="62%" y1="24.5%" x2="64%" y2="24.5%" style="marker-end: url(#flow4Marker);"/>
					<line class="svg-line3" id = "line45" x1="70%" y1="16%" x2="70%" y2="16%"/>
					<line class="svg-line3" id = "line46" x1="70%" y1="6%" x2="70%" y2="6%" style="marker-end: url(#flow4Marker);"/>
					<line class="svg-line3" id = "line47" x1="50%" y1="4%" x2="50%" y2="4%"/>
					<line class="svg-line3" id = "line48" x1="72%" y1="4%" x2="72%" y2="5%" style="marker-end: url(#flow4Marker);"/>
					<line stroke-dasharray= "5"  class="svg-line3" id = "line49" x1="66%" y1="24.5%" x2="69%" y2="24.5%" style="marker-end: url(#flow4Marker);"/>
					<line stroke-dasharray= "5" class="svg-line3" id = "line50" x1="58%" y1="32%" x2="58%" y2="27%"/>
					<line stroke-dasharray= "5" class="svg-line3" id = "line51" x1="58%" y1="50%" x2="57%" y2="50%" style="marker-end: url(#flow4Marker);"/>
					<line stroke-dasharray= "5" class="svg-line3" id = "line52" x1="45%" y1="53%" x2="45%" y2="54%" style="marker-end: url(#flow4Marker);"/>
					<line class="svg-line3" id = "line53" x1="75%" y1="24.5%" x2="75%" y2="24.5%" style="marker-end: url(#flow4Marker);"/>
					<line class="svg-line3" id = "line54" x1="84%" y1="16%" x2="84%" y2="16%"/>
					<line class="svg-line3" id = "line55" x1="84%" y1="6%" x2="84%" y2="6%" style="marker-end: url(#flow4Marker);"/>
					<!-- <rect stroke-dasharray= "5" class = "blinking-border-background-green"  x= 682 y = 276 width="353" height="100" id = "rec" style="fill:blue;stroke: #83cef9  ;stroke-width:5;fill-opacity:0.1;stroke-opacity:0.9"
					<a data-toggle="popover" data-container="body" data-content="this is the connection object trough this connection object porocess flows" data-placement="bottom">
    						<circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"/> </a>
					/>  -->
																								
			<div class="col-xs-12 margin-top10 padding0">
				<div class="col-xs-4">
					<!-- <div class ="col-xs-12"> -->
						<div class="invisable-div col-xs-12 opacity00" id="invisableDiv1">
							<div class="col-xs-12">
								<div class="col-xs-offset-1 col-xs-4 box-border padding0"
								style="background-color: #fffac2;">
								<div class="text-font1">Java Application</div>
								</div>
							</div>
						<div class = "col-xs-12">
								<div class = "col-xs-8">
									<div class = "col-xs-12">
										<div style="background-color: rgba(249, 145, 145, 0.26);margin-top: 20px;width:80px;margin-left:-9px;"
											class="col-xs-8 box-border padding0 ">
												<div class="text-font1"><b>Driver Manager</b></div>
										</div>
									</div>
								</div>
								<div class = "col-xs-4">
									<div class = "col-xs-12">
										<div class="oval4 col-xs-4"style="background-color:#8ce884;width:92px;margin-top:21px;margin-left: -55px;">
											<span class = "database-text-middle" style = "line-height:37px;display:flex;font-size:12px" >Connection</span>
										</div>
									</div>
								</div>
						</div>
							<div class = "col-xs-12">
								<div class=" col-xs-12 text" style = "display:inline-block;position:relative;">
									<div class= "col-xs-offset-1 col-xs-4 database-box2"style="height:45px;width:68px;border-radius: 2px; margin-left: 10px;">
										<div class="oval1" style="background-color: thistle;height:17px; width:68px;"></div>
											<span class="text-font1 database-text-middle"
													style="background-color: thistle; border-radius: 1px"> <b>D/B</b>
											</span>
										</div>
								</div>
							</div>
							</div>
							<!-- </div> -->
					</div>
						<div  class = "col-xs-offset-1 col-xs-7">
						<div class="invisable-div2 col-xs-12 opacity00" id="invisableDiv2">
						<div class="col-xs-12" style = "height:220px;">
							<div class = "col-xs-12">
								<div class="col-xs-3 box-border padding0"
								style="background-color: #fffac2;">
								<div class="text-font">Java Application
								<div id="jdbcApiBox1" class="border shadow text-center" style="background-color: sandybrown;margin-top: 10px; width: 107px;"> JDBC API
									</div>
								</div>
								</div>
							</div>
							<div class = "col-xs-12 con" style = "margin-left:150px;"> 
								<div class = col-xs-4 style= "padding-right:0px;padding-left:0px;">
									<div class="ovel5  col-xs-3" id = "connection1"style="background-color:  #8ce884;position:realative;font-size: 12px;line-height: 2.5;">Connection
										<!-- <span class = "database-text-middle" style = "line-height: 2.5;font-size: 12px; ">Connection </span> -->
									</div> 
								</div>
								<div class = col-xs-4 style = "padding-right:0px;">
									<div class="ovel5  col-xs-3" id = "st1"style="background-color:  #8ce884;position:realative;">
										<span class = "database-text-middle" style = "line-height: 2.5;font-size: 12px; ">statment </span>
									</div> 
								</div>
							     <div class = col-xs-4 style = "padding-right:0px;">
									<div class="ovel5  col-xs-3" id = "rs1"style="background-color:  #8ce884;position:realative;">
										<span class = "database-text-middle" style = "line-height: 2.5;font-size: 12px; ">resultset </span>
									</div> 
								</div>
							</div>
							
							<div class = "col-xs-12">
								<div class="col-xs-3 box padding0"
										style="background-color:rgba(249, 145, 145, 0.26);">
										<div class="text-font">Driver manager</div>
									</div>
							</div>
						<div class = "col-xs-12">
							<div class=" col-xs-12 text" style = "display:inline-block;position:relative;">
								<div class= "col-xs-4 database-box1 " style = "margin-top: 33px; height:45px; width:77px;margin-bottom:0px; border-radius:2px;">
									<div class="oval1" style="background-color: thistle;height:17px;width:77px; "></div>
										<span class="text-font database-text-middle"
										style="background-color: thistle; border-radius: 2px"> <b>D/B</b>
										</span>
									</div>
							</div>
						</div>
					</div>
					</div>
					</div>
					<div class="col-xs-8" id="animation2">
					<div class = col-xs-12>
						<div class=" col-xs-3">
						<div class="border shadow text-center opacity00" id="JavaBox2"
						style="background-color: lightyellow;">
						<div>
						<b> Java Application</b>
						</div>
						<div class="border  shadow text-center margin-top20 opacity00" id="jdbcApiBox"
						style="background-color: sandybrown;">
						<b>JDBC API</b>
						</div>
						</div>
						</div>
				</div>
		<div class = col-xs-12">
		  	<div class = "col-xs-offset-3 col-xs-9 context opacity00" id = context >
		  	
				<div class = col-xs-3>
				<div class="oval4 opacity00 col-xs-3" id = "connection"style="background-color:  #8ce884;position:realative;
   																			 margin-top: 24px;">
					<span class = "database-text-middle" style = "line-height: 2.5;font-size: 15px; ">Connection </span>
				</div> 
				</div>
				
				<div class = col-xs-3 style = "margin-left:36px;">
					<div class="oval4 opacity00  col-xs-3" id = "statment"style="background-color:  #8ce884;position:realative;margin-top:24px; ">
					<span class = "database-text-middle" style = "line-height: 2.5;font-size: 15px; ">statment </span>
					</div>
				</div> 
				
				<div class = col-xs-3 style = "margin-left:45px;" >
					<div class="oval4 opacity00  col-xs-3" id = "resultset"style="background-color:  #8ce884;position:realative;margin-top: 24px; ">
						<span class = "database-text-middle" style = "line-height: 2.5;font-size: 15px; ">resultset </span>
					</div>
					</div> 
				</div>
				
		 </div>
		 
		<div class = col-xs-3>
		   		 <div style="background-color: rgba(249, 145, 145, 0.26);height:40px;margin-left:17px; margin-top:75px;"
					class=" box-border padding0 opacity00" id="driver2">
					<div class="text-font"><b>Driver Manager</b></div>
				</div>
		</div>
		 <div class = "col-xs-12"> 
		   	<div class= "col-xs-offset-1 col-xs-3 database-box2 opacity00" id = db2 style = "height:70px; margin-top:76px; margin-left:32px">
					<div class="oval1" style="background-color: thistle;"></div>
							<span class="text-font database-text-middle"
								style="background-color: thistle; border-radius: 8px"> <b>D/B</b>
							</span>
			</div>
		   
		   </div>
		
		</div>
					
			</div><!-- // first animation completed -->
	<div id="animationDiv" class="col-xs-12" style = " height: 344px;" >
		<div class="col-xs-12" id="animation1" >
		<div class = "col-xs-12" style = "height: 344px;">
		<div class = "col-xs-offset-2 col-xs-6" style = "height: 344px;">
			<div style="background-color: #fffac2;"
				class="col-xs-offset-3 col-xs-4 box-border padding0 opacity00" id="javaBox">
				<div class="text-font"><b>Java Application</b></div>
			</div>
					<div class = "col-xs-12" style = "margin-top: 40px;">
						<div class = "col-xs-8">
							<div class = "col-xs-12">
								<div style="background-color: rgba(249, 145, 145, 0.26);"
										class="col-xs-offset-4 col-xs-8 box-border padding0 opacity00" id="driver">
										<div class="text-font"><b>Driver Manager</b></div>
								</div>
							</div>
						</div>
						<div class = "col-xs-4">
							<div class = "col-xs-12">
								<div class="oval4 col-xs-9 col-xs-3 opacity00" id = "circle" style="background-color: #8ce884;line-height:12px;"> <center><br>Connection</br></center>
									<!-- <span class = "database-text-middle" style = "line-height:37px; display:flex;"><br>&nbsp;Connection</br> </span> -->
								</div>
							</div>
						</div>
					</div>
						
						<!-- <div class=" col-xs-12 text" style = "display:inline-block;position:relative;margin-top: 85px;">
							<div class= "col-xs-offset-4 col-xs-3 database-box opacity00" id="databaseBox1">
								<div class="oval1" style="background-color: thistle;"></div>
								<span class="text-font database-text-middle"
										style="background-color: thistle; border-radius: 8px"> <b>D/B</b>
									</span>
								</div>
						</div> -->
						<div class=" col-xs-12 text" style = "display:inline-block;position:relative;margin-top: 85px;">
							<div class= "col-xs-offset-3 col-xs-4 database-box opacity00" id="databaseBox1" style ="height:80px; width:130px;">
								<div class="oval1" style="background-color: thistle; width:81px;"></div>
									<span class="text-font database-text-middle"
										style="background-color: thistle; border-radius: 8px; height:80px; width: 80px" > <b>D/B</b>
									</span>
								</div>
						</div>
						
		</div>
		</div>
		</div>
		
		
		</div>
		
	</div>
	</svg>
	</div>
	</div>
<script>
		$(document).ready(function() {
			getconnectiondriver();
			$('[data-toggle="popover"]').popover(); 
		})
</script> 
	</body>
</html>