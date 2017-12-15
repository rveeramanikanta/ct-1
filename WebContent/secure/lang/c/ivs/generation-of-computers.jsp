<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Generations of Computers</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<script src="/secure/lang/cpp/js/generation-of-computers.js" type="text/javascript"></script>
<script src="/js/jquery.scrollTo.js" type="text/javascript"></script>
<script src="/secure/lang/c/js-min/goc.min.js" type="text/javascript"></script>


<style>
.margin-top-20 {
	margin-top : 20px;
}
#informationDiv {
    border-radius: 5px;
    margin-top: 5px;
    max-height: 254px;
    background-color: linen;
    font-size: 13.5px;
    padding-bottom: 5px;
}
.rect-css {
	stroke-width: 1;
	stroke: black;
}
.circle-css {
	stroke-width: 8;
	stroke: orange;
}
.line-css {
	stroke-width: 4;
	stroke: orange;
}

.text-css {
color: green;
}
.popover {
	max-width : 220px;
}
.popover.right {
    margin-left: 14px;
}
.ct-code-b-green {
color: green;
}
.popover.bottom>.arrow {
    margin-left: -13px;
}
.popover-content {
	color: black;
	background-color: #f9e7c5;
	font-size: 13px;
	margin: 1px;
}
#customPopover {
	font-size: 14px;
}
.popover282274 {
	width : 78px;
}
#pop1 {
     width: 70px;
 }
.btn {
    display: inline-block;
    padding: 4px 9px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    background-color: green;
    color: antiquewhite;
    border: 1px solid transparent;
    width: 60px;
    height: 30px;
}

.bgColor-lightgray {
	background-color: #E9E9E9;
}


.introjs-button {
    cursor: pointer;
    background-color: green !important;
    
}
</style>

<script type="text/javascript">
$(document).ready(function() {
	generationComputer();
});
</script>
</head>
<body>
<div id="title" class="text-center margin-top-20">
	<h3><span  class="label ct-demo-heading text-center">Generations of Computers</span>
	</h3>
</div>
<div class="button col-xs-12 text-center">
<span class="btn btn-warning" id="restartBtn"  style='margin : 1px; padding-right : 52px; opacity: 0;'>Restart</span>
</div>
<div class="margin-top-2">
	<div class="col-xs-8 col-xs-offset-2" id="informationDiv" style= "border: 1px solid gray;" >
		<div class="col-xs-12 margin-top-2">
		<ul>
			<li style= 'margin-top:7px;'><span>A <b class="ct-code-b-green">
				<a href='https://en.wikipedia.org/wiki/Computer' target='_blank'>computer</a></b> is an 
				<b>electronic device</b> that follows a 
				<b>set of instructions</b> to complete a specific task.</span></li>
			<li style= 'margin-top:7px;'><span>The first computer was designed by the British mathematician 
				<b class="ct-code-b-green"><a href='https://en.wikipedia.org/wiki/Charles_Babbage' target='_blank'>
					Charles Babbage</a></b> in the year <b>1822</b></span>.</li>
			<li style= 'margin-top:7px;'><span>One can also expand the acronym 
				<b class="ct-code-b-green">COMPUTER</b> as :  
				<b class="ct-code-b-green">C</b>ommon <b class="ct-code-b-green">O</b>perating 
				<b class="ct-code-b-green">M</b>achine <b class="ct-code-b-green">P</b>articularly  
				<b class="ct-code-b-green">U</b>sed for 
				<b class="ct-code-b-green">T</b>rade, <b class="ct-code-b-green">E</b>ducation and  
				<b class="ct-code-b-green">R</b>esearch.</span></li>
			<li style= 'margin-top:7px;'>Based on the <b>technology development</b>
				, generations of computers are divided into <b>five</b> stages.
				 They are :</li>
			<ul>
				<li>First Generation</li>
				<li>Second Generation</li>
				<li>Third Generation</li>
				<li>Fourth Generation</li>
				<li>Fifth Generation<a class="introjs-button user-button" id="nextButton">Next&rarr;</a></li>
			</ul>
		</ul>
		</div>
	</div>
</div>
<div id="totalDiv">
<svg width='100%'  height="500px">
<g>
	<circle class="circle-css " id="circle1" fill="white" r="1%" cx="10%" cy="50%" ></circle>
	<line class="line-css " id="line1" x1="10%" x2="10%" y1="42%" y2="48%"> 
</g>
 <g id="simulaGroup1">
   	<rect class="rect-css " id="rect1" x="5%" y="55%" rx="5px" ry="5px" width="10%" height="5%" fill="lemonchiffon"/>
	 
	<text text-anchor="middle" id="text1" class="text-css " y="58%" x="10%">First Generation</text>
	<text text-anchor="middle" class="text-css " x="10%" y="41%" id="year1">1940-1956</text>
	<text text-anchor="middle" class="text-css " x="10%" y="37%" id="gen1">Vacuum Tubes</text>
	<image width='15%' height='27%' x='3%' y='7%' id='img1' xlink:href='../images/firstgeneration.jpg'></image> 
</g>
<g>
	<circle class="circle-css " id="circle2" fill="white" r="1%"  cx="30%" cy="50%"></circle>
	<line class="line-css " id="line2" x1="30%" x2="30%" y1="42%" y2="48%"> 
</g>
 <g id="simulaGroup2">
	<rect class="rect-css" id="rect2" x="25%" y="55%" rx="5px" ry="5px" width="10%" height="5%" fill="lemonchiffon"/>
	<text text-anchor="middle" id="text2" class="text-css " y="58%" x="30%">Second Generation</text>
	<text  text-anchor="middle" class="text-css " x="30%" y="41%" id="year2">1956-1963</text>
	<text  text-anchor="middle" class="text-css " x="30%" y="37%" id="gen2">Transistors</text>
	<image  width='15%' height='28%' x='22.5%' y='6%' id='img2' xlink:href='../images/secondgeneration.jpg'></image>
</g>
<g>
<circle class="circle-css" id="circle3" fill="white" r="1%" cx = "50%" cy="50%">
</circle>
<line class="line-css " id="line1" y2="48%" y1="42%" x2="50%" x1="50%">
</g>
 <g id="simulaGroup3">
	<rect class="rect-css " id="rect3" x="45%" y="55%" rx="5px" ry="5px" width="10%" height="5%" fill="lemonchiffon"/>
	<text text-anchor="middle" id="text3" class="text-css " y="58%" x="50%">Third Generation</text>
	<text text-anchor="middle" class="text-css " x="50%" y="41%" id="year3">1964-1971</text>
	<text  text-anchor="middle" class="text-css " x="50%" y="37%" id="gen3"> Integrated Circuits</text>
	<image  width='15%' height='30%' x='43%' y='4%' id='img3' xlink:href='../images/thirdgeneration.jpg'></image>
</g>

<g>
<circle class="circle-css" id="circle4" fill="white" r="1%" cx = "70%" cy="50%">
</circle>
<line class="line-css " id="line1" y2="48%" y1="42%" x2="70%" x1="70%">
</g>
 <g id="simulaGroup4">
	<rect class="rect-css " id="rect4" x="65%" y="55%" rx="5px" ry="5px" width="10%" height="5%" fill="lemonchiffon"/>
	<text text-anchor="middle"id="text4" class="text-css " y="58%" x="70%">Fourth Generation</text>
	<text text-anchor="middle"  class="text-css " x="70%" y="41%" id="year4">1971-1980</text>
	<text text-anchor="middle" class="text-css " x="70%" y="37%" id="gen4">Microprocessors</text>
	<image  width='15%' height='29%' x='62.7%' y='5%' id='img4' xlink:href='../images/fourthgeneration.jpg'></image>
</g>
<g>
<circle class="circle-css" id="circle5" fill="white" r="1%" cx = "90%" cy="50%">
</circle>
<line class="line-css " id="line1" y2="48%" y1="42%" x2="90%" x1="90%">
</g>
<g id="simulaGroup5">
	<rect class="rect-css " id="rect5" x="85%" y="55%" rx="5px" ry="5px" width="10%" height="5%" fill="lemonchiffon"/>
	<text text-anchor="middle" id="text5" class="text-css " y="58%" x="90%">Fifth Generation</text>
	<text text-anchor="middle" class="text-css " x="90%" y="41%" id="year5">1980 till now</text>
	<text text-anchor="middle" class="text-css " x="90%" y="37%" id="gen5">Artificial Intelligence</text>
	<image  width='15%' height='29%' x='82.6%' y='5%' id='img5' xlink:href='../images/fifthgeneration.jpg'></image>
</g>

<line id="line6" class="line-css" x1="10.5%" x2="29.5%" y1="50%" y2="50%"></line>
<line id="line7" class="line-css" x1="30.5%" x2="49.5%" y1="50%" y2="50%"></line>
<line id="line8" class="line-css" x1="50.5%" x2="69.5%" y1="50%" y2="50%"></line>
<line id="line9" class="line-css" x1="70.5%" x2="89.5%" y1="50%" y2="50%"></line>
</svg>
</div>

</body>
</html>