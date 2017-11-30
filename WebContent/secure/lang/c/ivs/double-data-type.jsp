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
<script src="/secure/lang/c/js-min/ddt.min.js"></script>

<title>double data-type</title>
<style>

.margin4 {
	margin-top : 5px;
}

.margin10 {
	margin-top : 10px;
}
.user-btn, .nextBtn2 {
	width : 46px;
	background-color:#5bc0de
}

 #firstDiv {
	margin-left : -15px !important;
}

.introjs-nextbutton, .nextBtn, .nextBtn1, .restart,#divisionBtn {
	background-color : green !important;
}

.Z-Index {
	z-index: 9999999;
	position: relative;
}

.margin20 {
	margin-top : 20px;
}

.padding10 {
	padding-top : 15px;
}

#mainDiv {
	min-height : 400px;
	position :absolute;
}

.floatsign-div ,.floatnum-div {
	font-size : 13px;
}

.border-box {
	border: 1px solid black;
    display: inline-block;
    margin-left: 1px;
    padding: 4px 4px;
}

.byte-div {
	margin-left : 2px;
}

#addDiv {
	margin-left : 18px;
}

#firstDiv {
	margin-left : 17px;
}

#secondDiv , #second2Div {
	margin-left : 18px;
}

#thirdDiv {
	margin-left : 180px !important;
}

#third3Div {
	margin-left : 230px !important;
}

.padding3 {
	padding : 2px;
}

.padding5 {
	padding : 3px 5px;
}

#spanDiv {
	margin-top : 6px;
}

#binaryValue > span {
    border: 1px solid blue;
    float: right;
    padding: 8px 6px;
}

#FractionalBinaryValue > span {
    border: 1px solid blue;
    padding: 0px 3px; 
}
.color-pink {
	background-color : pink;
}

.color-blue {
	background-color: #D9FFCC;
}

#box0 {
	background-color : red;
}

#boxDiv1 {
	text-align : center;
	color : red;
}

.box-border {
	border: 1px solid grey;
	border-radius: 8px;
	margin: 2px 0 0 5px;
}
 
#finalDivtext {
	height : 30px;
}

.color-yellow {
	color:yellow;
	font-weight: bold;
}

#numDiv {
	z-index : 9999999;
	position: relative;
	background-color: #fffae6;
}

.marginleft20 {
	margin-left : -10px;
}

#floatBox {
	height : 20px;
	width : 35px;
	border : 2px solid;
	border-radius : 3px;
	text-align: center;
	margin-left : 12px !important;
}
#floatDiv {
	height : 20px;
}

 #fdec {
	display : flex;
}

#floatVar {
	margin-left : 40px;
}

.marginleft4 {
	margin-left : 4px; 
}
.marginleft8 {
	margin-left : 8px; 
}

.color-green {
	color:green;
}

#fspan31 {
	margin-left : 50px;
} 

.buttons-div {
	margin-top: 20px;
	margin-bottom: 5px;
	text-align: center;
}

.introjs-tooltip-min-width-custom {
	min-width: 125px;
}
</style>
</head>
<body>

<script>
$(document).ready(function() {
	doubleDataTypeReady();
});
</script>

<div class = 'ct-box-main'>
	<div class = 'text-center'>
		<h1 class = 'label ct-demo-heading first-heading'>double data type</h1>	
	</div>
	<div class = 'buttons-div'>
		<button type = "button" class = "btn btn-warning visibility-hidden" id = "restartBtn">Restart</button>
	</div> 
		<div class = 'col-xs-offset-2 col-xs-8 main-div padding10' id = 'mainDiv' style="font-family: monospace;">
			<span id = 'typing1' class = 'padding10'></span>
			<div class = 'box-div col-xs-12 ' id = 'boxDiv'>
				<div class = "border-box opacity00 padding2" id = "box0"></div>
			</div>
			
			<div class = 'floatsign-div col-xs-12 opacity00 margin4' id = 'floatsignDiv'>
				<span id = 'firstDiv' class = 'opacity00 margin10'>sign bit</span><span id = 'secondDiv' class = 'opacity00 margin10'>exponent bits</span><span id = 'thirdDiv' class = 'opacity00 margin10'>mantissa</span>
			</div>
			<div class = 'floatnum-div col-xs-12 opacity00 margin4' id = 'floatnumDiv'>
				<span id = 'first1Div' class = 'opacity00 margin10'>1 bit</span><span id = 'second2Div' class = 'opacity00 margin10'>11 bits</span><span id = 'third3Div' class = 'opacity00 margin10'>52 bits</span>
			</div>
			<div class = "input-main-div col-xs-12" id = 'inputmainDiv'>
			 	<br><span id = 'floatdec' class = 'opacity00 margin10'>A <span class = color-green>double</span> is declared and initialised as</span>
				<br><div id="inputDiv" class="col-xs-offset-2 col-xs-7 opacity00 margin10">double&nbsp;&nbsp;&nbsp;&nbsp; d&nbsp;&nbsp;&nbsp;&nbsp; = &nbsp;&nbsp;&nbsp;&nbsp<b>2.54</b>;
						<br><br><span id = "floatVar" class = 'opacity00 margin10'> d <span class ="fa fa-arrow-right marginleft8"></span>&nbsp;&nbsp;&nbsp;variable</span>
						<br><div id = 'fdec'><div id = 'floatBox' class = 'opacity00 margin10'>2.54</div><span class = 'opacity00 byte-div margin4 marginleft8'><span class ="fa fa-arrow-right margin4 marginleft4"></span>&nbsp;&nbsp;&nbsp;8 bytes</span></div>
						<div id = 'addDiv' class = 'opacity00 margin10'>1289 <span class ="fa fa-arrow-right marginleft4"></span>&nbsp;&nbsp;&nbsp;address</div>
					</div>
			</div>
		</div>
</div> 

</body>
</html>