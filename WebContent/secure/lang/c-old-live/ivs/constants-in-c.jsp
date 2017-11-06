<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><link rel="stylesheet" href="/css/bootstrap.min.css">
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
<script src="/secure/lang/c/js-min/conic.min.js"></script>
<title>constants in C</title>
</head>
<style>
.introjs-tooltiptext br {
	margin: 15px;
}

.introjs.tooltiptext > span {
	display: inline-block;
}

.introjs-tooltip {
	min-width: 280px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.ct-demo-heading {
	background: highlight none repeat scroll 0 0;
    border-radius: 10px;
    font-size: 18px;
    position: relative;
    z-index: 9999999;
}

.ct-code-b-red {
	font-family: monospace;/* border: 1px solid gray; */
	font-weight: bold;
	color: rgb(252, 66, 66);
}

.ct-code-b-yellow {
	font-family: monospace;
	font-weight: bold;
	color: yellow;
}

.ct-code-b-green {
	font-family: monospace;
	font-weight: bold;
	color: green;
}

#informationDiv {
	background-color: rgb(243, 235, 235);
    border-radius: 10px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    height: 40px;
    margin-top: 1%;
    padding-top: 10px;
}

.next-btn {
	border-radius: 3px !important;
    background-color:green !important;
    margin: 0 5px !important;
}

.next-btn-info {
	border-radius: 3px !important;
    background-color:skyblue !important;
    margin: 0 5px !important;
}

.margin10 {
	margin-top : 10px !important;
}

.border-css {
	border: 1px solid grey;
	border-radius: 4px;
	/* height: 410px; */
    border-radius: 4px;
    /* height: 45px; */
    padding: 5px 10px;
	padding: 5px 10px;
}

.monospace-css {
	font-family: monospace;
	font-size: 12px;
}

.btns-constants {
	border: 1px solid grey;
    border-radius: 4px;
    height: 45px;
    padding: 5px 10px;
}

.popover {
	width: 600px;
}
</style>
<body>
<div class="col-xs-12">
	<div class="margin-padding-css text-center">
		<div class="col-xs-1"></div>
		<div class="col-xs-offset-3 col-xs-3">
			<h3><span class="ct-demo-heading label label-default" id="titleName">Constants in C</span></h3>
		</div>
	</div>
</div>
<div class="col-xs-12">
	<div class=" col-xs-8 col-sm-offset-2 opacity00" id="informationDiv" >
		<span id="typingtext" class="opacity00"><span class="color-green">Constants</span> are the fixed values which remain unchanged during the execution of a program.<span id='nextBtn' class='introjs-button next-btn opacity00'>Next &#8594;</span></span>
	</div>
</div>
<div  class="col-xs-12 margin10">
	<div id="constantsBtnsDiv" class="btns-constants margin10 opacity00" >
		
		<div class='col-xs-3 text-center int-div'>
			<span class="btn btn-warning enter-block" id="intDiv">integer constant</span>
		</div>
		
		<div class='col-xs-3 text-center float-div'>
			<span class="btn btn-warning disabled enter-block" id="floatDiv">floating point constant</span>
		</div>
		
		<div class='col-xs-3 text-center char-div'>
			<span class="btn btn-warning disabled enter-block" id="charDiv">char constant</span>
		</div>
		
		<div class='col-xs-3 text-center string-div'>
			<span class="btn btn-warning disabled enter-block" id="stringDiv">string constant</span>
		</div>
	</div>
</div>
<div class="col-xs-12 margin10">
	<div class="col-xs-3">
		<div id="integerBox" class="border-css opacity00">
			<span id="intDefText"></span>
			<span><!-- An integer constant can be of three different types:  -->
				<ul>
					<li id="list1" class="opacity00"><b>decimal</b></li>
					<li id="list2" class="opacity00"><b>octal</b></li>
					<li id="list3" class="opacity00"><b>hexadecimal<span id="test1"></span></b></li>
				</ul>
			</span>
			<div>
				<div id="intExampleDiv" class="opacity00"><b>Few examples:</b><br/>
					<span id="intEx1" class="monospace-css opacity00">const int a = <span class='ct-code-b-green'>25</span>;<span id="intExBtn1"></span></span><br/>
					<span id="intEx2" class="monospace-css opacity00">const int marks = <span class='ct-code-b-red'>4, 3</span>;<span id="intExBtn2"></span></span><br/>
					<span id="intEx3" class="monospace-css opacity00">const int y = <span class='ct-code-b-green'>53UL</span>;<span id="intExBtn3"></span></span><br/>
					<span id="intEx4" class="monospace-css opacity00">const int x = <span class='ct-code-b-red'>64.5</span>;<span id="intExBtn4"></span></span><br/>
					<span id="intEx5" class="monospace-css opacity00">const int octalVal = <span class='ct-code-b-green'>023</span>;<span id="intExBtn5"></span></span><br/>
					<span id="intEx6" class="monospace-css opacity00">const int octal_a = <span class='ct-code-b-red'>028</span>;<span id="intExBtn6"></span></span><br/>
					<span id="intEx7" class="monospace-css opacity00">const int hexaVal = <span class='ct-code-b-green'>0X23</span>;<span id="intExBtn7"></span></span><br/>
					<span id="intEx8" class="monospace-css opacity00">const int b = <span class='ct-code-b-red'>0A8</span>;<span id="intExBtn8"></span></span><br/>
					<span id="intEx9" class="monospace-css opacity00">const int val = <span class='ct-code-b-green'>0XA57</span>;<span id="intExBtn9"></span></span><br/>
					<span id="intEx10" class="monospace-css opacity00">const int val = <span class='ct-code-b-red'>0xA.8,&</span>;<span id="intExBtn10"></span></span><br/>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-3">
		<div id="floatBox" class="border-css opacity00">
			<span id="floatDefText"></span>
			<!-- <span>Any number with a decimal point is called a floating point constant or a single-precision constant.</span><br/>
			<span>It can be written in the exponential form(<b>e</b> or <b>E</b> followed by positive or negative integer).</span> -->
			<div>
				<div id="floatExampleDiv" class="opacity00"><b>Few examples:</b><br/>
					<span id="floatEx1" class="monospace-css opacity00">const float float_a = <span class='ct-code-b-green'>.25</span>;<span id="floatExBtn1"></span></span><br/>
					<span id="floatEx2" class="monospace-css opacity00">const float a = <span class='ct-code-b-green'>527.415F</span>;<span id="floatExBtn2"></span></span><br/>
					<span id="floatEx3" class="monospace-css opacity00">const float marks = <span class='ct-code-b-red'>6.e3.5</span>;<span id="floatExBtn3"></span></span><br/>
					<span id="floatEx4" class="monospace-css opacity00">const float x = <span class='ct-code-b-green'>0.008e-4</span>;<span id="floatExBtn4"></span></span><br/>
					<span id="floatEx5" class="monospace-css opacity00">const float fVal = <span class='ct-code-b-red'>5,4 e5</span>;<span id="floatExBtn5"></span></span>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-3">
		<div id="charBox" class="border-css opacity00">
			<span id="charDefText"></span>
			<!-- <span>A character constant contains single character and it should be within single quotes.</span> -->
			<div>
				<div id="charExampleDiv" class="opacity00"><b>Few examples:</b><br/>
					<span id="charEx1" class="monospace-css opacity00">const char value = <span class='ct-code-b-green'>'C'</span>;<span id="charExBtn1"></span></span><br/>
					<span id="charEx2" class="monospace-css opacity00">const char a = <span class='ct-code-b-red'>'r</span>;<span id="charExBtn2"></span></span><br/>
					<span id="charEx3" class="monospace-css opacity00">const char marks = <span class='ct-code-b-green'>'+'</span>;<span id="charExBtn3"></span></span><br/>
					<span id="charEx4" class="monospace-css opacity00">const char p = <span class='ct-code-b-red'>"C"</span>;<span id="charExBtn4"></span></span><br/>
					<span id="charEx5" class="monospace-css opacity00">const char cVal = <span class='ct-code-b-green'>' '</span>;<span id="charExBtn5"></span></span>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-3">
		<div id="stringBox" class="border-css opacity00">
			<span id="stringDefText"></span>
			<!-- <span>A string constant is a sequence of zero or more characters enclosed within double quotes.</span><br/>
			<span>A string constant is also known as a string literal.</span> -->
			<div>
				<div id="stringExampleDiv" class="opacity00"><b>Few examples:</b><br/>
					<span id="stringEx1" class="monospace-css opacity00">const char text[] = <span class='ct-code-b-red'>'C'</span>;<span id="stringExBtn1"></span></span><br/>
					<span id="stringEx2" class="monospace-css opacity00">const char x[] = <span class='ct-code-b-green'>"ganga"</span>;<span id="stringExBtn2"></span></span><br/>
					<span id="stringEx3" class="monospace-css opacity00">const char marks[] = <span class='ct-code-b-red'>Program</span><span id="stringExBtn3"></span></span><br/>
					<span id="stringEx4" class="monospace-css opacity00">const char a[] = <span class='ct-code-b-green'>"12 2,4&f"</span><span id="stringExBtn4"></span></span><br/>
					<!-- <span id="stringEx5" class="monospace-css opacity00">const char value[] = <span class='ct-code-b-green'>"12 2,4&f"</span>;<span id="stringExBtn5"></span></span> -->
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-12 text-center"><span type="button" class="btn btn-warning opacity00" id="restartBtn" style="margin-top: 15px;">Restart </span></div>
</div>

<script type="text/javascript">
	$(document).ready(function() {
		constantsInCReady();
	});
</script>
</body>
</html>