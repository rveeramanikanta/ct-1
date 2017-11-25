<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link rel="stylesheet" href="/css/bootstrap.min.css">
	<script src="/js/jquery-latest.js"></script>
	<script src="/js/bootstrap.js"></script>
	<link rel="stylesheet" href="/css/introjs.css">
	<link rel="stylesheet" href="/css/introjs-ct.css">
	<link rel="stylesheet" href="/css/animate.css"/>
	<link rel="stylesheet" href="/css/jquery-ui.css"/>
	<script src="/js/gs/TweenMax.min.js"></script>
	<script src='/js/intro.js'></script>
	<link rel="stylesheet" href="/css/font-awesome.min.css">
	<script src="/js/typewriting.min.js"></script>
	<script src="/js/jquery-ui-latest.js"></script>
	<!-- <script src="/secure/lang/c/js-min/etc.min.js"></script> -->
	<script src="../js/explicit-type-conversion.js" type="text/javascript"></script>
	
	<title>explicit type conversion</title>
</head>
<style>

#totaldiv {
	margin-top: 10px;
	margin-top: 25px;
}

.ct-demo-heading {
	background: highlight none repeat scroll 0.0;
	border-radius: 10px;
	font-size: 20px;
	position: relative;
	z-index: 9999999;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
	
}

#informationdiv {
	background-color: rgb(243, 235, 212);
    border-radius: 3px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    min-height: 60px;
    margin-top: 20px;
    
}

#calculationtable {
	font-family: monospace;
	border: 1px solid black;
	background-color: #ffffdc;
	border-radius: 10px;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
}

#calculationtable1 {
	border: 1px solid black;
	background-color: #ffffdc;
	border-radius: 10px;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
}

#intaEdit {
	background-color: ;
	width: 75px !important;
	border: 1px solid black;
	display: inline-block;
	border-radius: 3px;
	text-align: center;
	height: 25px;
}

#intbEdit {
	background-color: ;
	width: 75px !important;
	border: 1px solid black;
	display: inline-block;
	text-align: center;
	border-radius: 3px;
	margin-top: 5px;
	height: 25px;
}

.display-inlineblock {
	 display: inline-block; 
}

.color-darkgreen {
	color: #556b2f;
}

.color-rose {
	color: #8b008b;
}

.color-green {
	color: green;
}

.color-red {
	color: red;
}

.color-yellow {
	color: yellow;
}

.vertical-line {
	border: 1px solid grey;
    height: 338px;
    margin-left: 422px;
    width: 0;
}

.box {
	border: 1px solid black;
	height: 25px;
	width: 50px;
	background-color: white;
	display: inline-block;
}

#resultDiv > .col-sm-3 > table {
    margin: 0 auto !important;
}

.text-center {
    text-align: center;
}

#openParenthesis {
	width: 11px !important;
}
#divide {
	width: 214px !important;

}
#product {
	width: 148px !important;
	
}

#integervalueget {
	width: 148px !important;
}

.color-green {
	color: green;
}

.z-index {
	position: relative;
	z-index: 9999999;
	background-color: rgb(243, 235, 212);
}

.z-index1 {
	position: relative;
	z-index: 9999999;
	background-color: white;
}
.operator {
	background-color: #556b2f;
    border: 1px solid black;
    border-radius: 5px;
    color: white;
    font-weight: bold;
}

.padding0 {
	padding: 0;
}
.user-btn {
	background: green;
	margin: 0 !important;
	vertical-align: middle !important;
}

</style>

<script>

	$(document).ready(function() {
		explicitTypeConversion();
	}, 1000); 

</script>
<body>
<div id ='totaldiv' class='totaldivclass'>
	<div id='title' class='label ct-demo-heading col-xs-offset-4'>
		<span class=''>Explicit Type Conversion (or) Type Casting</span>
	</div>
</div>
	
<div class='col-xs-12'>
	<div id='informationdiv' class='col-xs-7 col-xs-offset-2'></div>
</div>
<div class='col-xs-12'>
	<div id='calculationtable' class='col-xs-8 col-xs-offset-2 visibility-hidden' style='margin-top: 15px;'>
		<div class='col-xs-12 container'>
			<div id='textInTable' style="min-height: 180px; margin-top: 5px;" class='row z-index'></div>
		</div>	
		<div id='enterAandBvalues' class='opacity00 text-center col-xs-12 z-index' style="margin-top: 15px;">
			<div class='row'>
				<span id='inta' class='' style='margin-top: 10px'><span class='color-rose'>int</span> &nbsp;x &nbsp;= &nbsp;<input id='intaEdit' class='display-inlineblock element	' type="text" placeholder="e.g.203" Maxlength='3'  onkeypress="return isNumberKey(event)"></span>
				<span id='intb' class='' style='margin-top: 10px;  margin-left: 50px;'><span class='color-rose'>int</span> &nbsp;y &nbsp;= &nbsp;<input id='intbEdit' class='display-inlineblock element' type="text" placeholder="e.g.457" Maxlength='3' contenteditable='true' onkeypress="return isNumberKey(event)"></span>		
				<span id='nextButton' class=''><a class='introjs-button user-btn btn disabled'>Next &#8594;</a></span>
			</div>
		</div>
		<div class='col-xs-12 padding0' id='box1'>
			<div class='col-xs-6'>
				<div id='withoutTypeCast' style="text-align: -moz-left; border: 1px solid black; border-radius: 5px; margin-top: 10px;" class='z-index1 opacity00'>
					<div  class='operator' style='text-align: center;'>without using type cast operator</div>
					<div id='valuestoreDiv' class='' style='margin-top: 20px;'>
						<span id='xstoresinFloat' class='opacity00' ><span id='float' class='color-green'>float&nbsp;</span>z&nbsp; = &nbsp;<span id='valueA' class='color-darkgreen'>x</span><b>&nbsp;<b class='color-red'>/</b>&nbsp;</b><span id='valueB' class='color-darkgreen'>y</span></span>
					</div>
					<div class='' style='margin-top: 10px'>
						<span id='fliptoValues' class='opacity00'><span id='float' class='color-green opacity00'>float&nbsp;</span><span class='opacity00'>z&nbsp;</span><span id='equal'> =&nbsp; </span><span id='valueaFlip' class='display-inlineblock' class='color-darkgreen'>x</span><b>&nbsp;<b class='color-red'>/</b>&nbsp;</b><span id='valuebFlip' class='display-inlineblock' class='color-darkgreen'> y </span></span>
					</div>
					<div class='' style='margin-top: 10px'>
						<span id='quotientResult1' class='opacity00'><span class='color-green'>float</span> z <span>&nbsp;= &nbsp;</span><span class='display-inlineblock position-relative' id='result1'></span></span>
					</div>
				</div>
			</div>
			<div  class='col-xs-6'>
				<div id='withTypeCast'style='text-align: -moz-left; margin-top: 10px; border: 1px solid black; border-radius: 5px;' class='z-index1 opacity00'>
					<div  class='operator' style='text-align: center;'>with using type cast operator</div>
					<div id='valuestoreDiv1' class='' style='margin-top: 10px'>
						<span id='xstoresinFloat1' class='opacity00'><span id='float' class='color-green'>float&nbsp;</span>z&nbsp; = &nbsp;<span id='floatOf' class='color-rose opacity00'>(float)&nbsp;</span><span id='valueA' class='color-darkgreen'>x</span><b>&nbsp;<b class='color-red'>/</b>&nbsp;</b><span id='valueB' class='color-darkgreen'>y </span></span>
					</div>
					<div class='' style='margin-top: 10px'>
						<span id='fliptoValues1' class='opacity00'><span id='float' class='color-green opacity00'>float&nbsp;</span><span class='opacity00'>z&nbsp;</span><span id='equal'> =&nbsp; </span><span id='floatOf1' class='color-rose '>(float)&nbsp;</span><span id='valueaFlip1' class='display-inlineblock' class='color-darkgreen'>x</span><b>&nbsp;<b class='color-red'>/</b>&nbsp;</b><span id='valuebFlip1' class='display-inlineblock' class='color-darkgreen'> y </span></span>
					</div>
					<div class='' style='margin-top: 10px'>
						<span id='quotientResult2' class=''><span id='floatequalconvert' class='opacity00'><span class='color-green '>float</span><span class=''> z </span><span>&nbsp;= &nbsp;</span><span id='floatOf1' class='color-rose '>(float)&nbsp;</span><span id='result2'></span><span id='valueaFlip2' class='display-inlineblock'></span><b>&nbsp;<b class='color-red'>/</b>&nbsp;</b></span><span id='valuebFlip2' class='display-inlineblock opacity00'></span><span id='closedParenthesis' class='opacity00'></span></span>
					</div>
					<div class='' style='margin-top: 10px'>
						<span id='quotientResult3' class='opacity00'><span class='color-green'>float</span> z <span>&nbsp;= &nbsp;</span><span class='opacity00' id='result3'></span></span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="button col-xs-12 text-center " id="button">
	<button class="btn btn-warning glyphicon glyphicon-refresh opacity00" type="button" id='restartBtn' style='margin-top:10px'>Restart</button></div>
</body>
