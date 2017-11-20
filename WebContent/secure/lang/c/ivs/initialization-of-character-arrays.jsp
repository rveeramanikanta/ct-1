<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src='/js/intro.js'></script>
<script src="/js/jquery.scrollTo.js"></script>
<!-- <script src='/secure/lang/c/js-min/ioca.min.js'></script> -->
<script src='/secure/lang/c/js/initialization-of-character-arrays.js'></script>
<title>Initialization of character arrays</title>
<style type="text/css">

.info-div {
	background-color: rgb(243, 235, 235);
	border-radius: 10px;
	font-size: 14px;
	padding: 11px 12px;
	font-family: monospace;
}

.border {
	border-radius: 8px;
	border: 1px solid burlywood;
    padding: 20px;
}

.margin-top-1 {
	margin-top: 1%;
}

.margin-top-2 {
	margin-top: 2%;
}

.margin-top-3 {
	margin-top: 3%;
}

.margin-top-10 {
	margin-top: 10%;
}

.small-box, .small-box-green, .small-box-royalblue, 
.small-box-firebrick, .small-box-blueviolet {
	border: 1px solid;
	padding: 1px;
	text-align: center;
	width: 55px;
    height: 23px;
	visibility: ;
}

.small-box {
	border-color: dodgerblue;
}

.small-box-green {
	border-color: green;
}

.small-box-royalblue {
	border-color: royalblue;
}

.small-box-firebrick {
	border-color: firebrick;
}

.small-box-blueviolet {
	border-color: blueviolet;
}

.addressBox, .elementBox {
	padding: 4px;
	text-align: center;
	width: 55px;
	color: gray;
}

.rowtdClass {
	padding: 4px;
	text-align: center;
	width: 55px;
}

.navy {
	color: navy;
}

div, span {
	position: relative;
}

.circle-css {
	border: 1px solid;
	border-radius: 50%;
	padding: 1px;
	position: relative;
	z-index: 9999999;
}

.output-value-circle {
	background: white;
	color: black;
}

.introjs-tooltip {
	min-width: 320px;
}

.user-btn {
	background-color: green;
	margin: 0 !important;
}

.ui-effects-transfer {
	border: 1px solid green;
	 z-index: 9999999 !important;
}

.font-monospace {
	font-family: monospace;
}

.blinking-once {
	animation-name: blinking;
	animation-duration: 1s;
	animation-iteration-count: 1;
 }

@keyframes blinking {
	50% {
		background: orange;
	}
}
.back-button {
    background-color: #5bc0de !important;
	display: inline-block;
    border-radius: 3px !important;
}

</style>
</head>

<body>
<div class="main-div col-xs-12">
	<div class="text-center heading-css margin-top-2" id="heading">
		<h3 class='label ct-demo-heading'>
			<span>Initialization of Character Arrays</span>
		</h3>
	</div>
	<div class="col-xs-8 col-xs-offset-2 margin-top-2 info-div" id="infoDiv">
		<ul>
			<li id="list1" class="opacity00">C provides different ways for initializing a character array.</li>
			<li id="list2" class="opacity00">Let us now learn different ways of initializing character arrays including multi dimensional 
				character arrays.<span id='nextButton' class='opacity00'><a class='introjs-button user-btn'>Next &#8594;</a></span></li>
		</ul>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-4 col-xs-offset-1 margin-top-2 border opacity00" id="exampleDiv1">
			<div class="col-xs-12">
				<span id="firstExample" class="margin-top-2 font-monospace">
					char ch[] = {'<span class="inputChar1" id='char1'>c</span>',
								'<span class="inputChar1" id='char2'>o</span>',
								'<span class="inputChar1" id='char3'>d</span>',
								'<span class="inputChar1" id='char4'>e</span>',
								'<span class="inputChar1" id='char5'>\0</span>'};
				</span>
				<div id="tableDiv1" class="opacity00 margin-top-3">
					<table align="center">
						<tr>
							<td class="elementBox"><span class="" id="element1">ch[0]</span></td>
							<td class="elementBox"><span class="" id="element2">ch[1]</span></td>
							<td class="elementBox"><span class="" id="element3">ch[2]</span></td>
							<td class="elementBox"><span class="" id="element4">ch[3]</span></td>
							<td class="elementBox"><span class="" id="element5">ch[4]</span></td>
						</tr>
						<tr class="" id="smallBox1">
							<td class="small-box"><span class="displayChar1 opacity00" id="value1">c</span></td>
							<td class="small-box"><span class="displayChar1 opacity00" id="value2">o</span></td>
							<td class="small-box"><span class="displayChar1 opacity00" id="value3">d</span></td>
							<td class="small-box"><span class="displayChar1 opacity00" id="value4">e</span></td>
							<td class="small-box"><span class="displayChar1 opacity00" id="value5">\0</span></td>
						</tr>
					</table>
				</div>
			</div>
		</div>
		<div class="col-xs-4 col-xs-offset-1 margin-top-2 border opacity00" id="exampleDiv2">
			<div class="col-xs-12">
				<span id="secondExample" class="margin-top-2 opacity00 font-monospace">
					char ch[] = "<span class="inputChar2" id="stringChar1">c</span><span class="inputChar2" id="stringChar2">o</span><span class="inputChar2" id="stringChar3">d</span><span class="inputChar2" id="stringChar4">e</span>";
				</span>
				<div id="tableDiv2" class="margin-top-3 opacity00">
					<table align="center">
						<tr>
							<td class="elementBox"><span class="" id="element1">ch[0]</span></td>
							<td class="elementBox"><span class="" id="element2">ch[1]</span></td>
							<td class="elementBox"><span class="" id="element3">ch[2]</span></td>
							<td class="elementBox"><span class="" id="element4">ch[3]</span></td>
							<td class="elementBox"><span class="" id="element5">ch[4]</span></td>
						</tr>
						<tr class="" id="smallBox2">
							<td class="small-box"><span class="displayChar2 opacity00" id="stringValue1">c</span></td>
							<td class="small-box"><span class="displayChar2 opacity00" id="stringValue2">o</span></td>
							<td class="small-box"><span class="displayChar2 opacity00" id="stringValue3">d</span></td>
							<td class="small-box"><span class="displayChar2 opacity00" id="stringValue4">e</span></td>
							<td class="small-box"><span class="displayChar2 opacity00" id="stringValue5">\0</span></td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-4 col-xs-offset-1 margin-top-3 border opacity00" id="exampleDiv3">
			<div class="col-xs-12">
				<span id="thirdExample" class="margin-top-2 opacity00 font-monospace">
					char ch[6] = "<span class="inputString3" id="inputString3">CodeTantra</span>";
				</span>
				<div id="tableDiv3" class="margin-top-3 opacity00">
					<table align="center">
						<tr>
							<td class="elementBox"><span class="" id="element1">ch[0]</span></td>
							<td class="elementBox"><span class="" id="element2">ch[1]</span></td>
							<td class="elementBox"><span class="" id="element3">ch[2]</span></td>
							<td class="elementBox"><span class="" id="element4">ch[3]</span></td>
							<td class="elementBox"><span class="" id="element5">ch[4]</span></td>
							<td class="elementBox"><span class="" id="element6">ch[5]</span></td>
						</tr>
						<tr class="" id="smallBox3" style="font-size: 12px;">
							<td class="small-box"><span class="displayChar3 opacity00" id="">C</span></td>
							<td class="small-box"><span class="displayChar3 opacity00" id="">o</span></td>
							<td class="small-box"><span class="displayChar3 opacity00" id="">d</span></td>
							<td class="small-box"><span class="displayChar3 opacity00" id="">e</span></td>
							<td class="small-box"><span class="displayChar3 opacity00" id="">T</span></td>
							<td class="small-box"><span class="displayChar3 opacity00" id="">a</span></td>
						</tr>
					</table>
				</div>
			</div>
		</div>
		<div class="col-xs-6 col-xs-offset-1 margin-top-3 border opacity00" id="exampleDiv4">
			<div class="col-xs-12">
				<span id="fourthExample" class="margin-top-2 opacity00 font-monospace">
					char a[2][7] = {"<span class="fourthIndex1">MAY</span>", "<span class="fourthIndex2">JUNE</span>"};
				</span>
				<div id="tableDiv4" class="margin-top-3 opacity00">
					<table align="center">
						<tr style="font-size: 11px;">
							<td class="elementBox"><span class="" id="element1">a[0][0]</span></td>
							<td class="elementBox"><span class="" id="element2">a[0][1]</span></td>
							<td class="elementBox"><span class="" id="element3">a[0][2]</span></td>
							<td class="elementBox"><span class="" id="element4">a[0][3]</span></td>
							<td class="elementBox"><span class="" id="element5">a[0][4]</span></td>
							<td class="elementBox"><span class="" id="element6">a[0][5]</span></td>
							<td class="elementBox"><span class="" id="element7">a[0][6]</span></td>
							<td class="elementBox"><span class="" id="element8">a[1][0]</span></td>
							<td class="elementBox"><span class="" id="element9">a[1][1]</span></td>
							<td class="elementBox"><span class="" id="element10">a[1][2]</span></td>
							<td class="elementBox"><span class="" id="element11">a[1][3]</span></td>
							<td class="elementBox"><span class="" id="element12">a[1][4]</span></td>
							<td class="elementBox"><span class="" id="element12">a[1][5]</span></td>
							<td class="elementBox"><span class="" id="element12">a[1][6]</span></td>
						</tr>
						<tr class="" id="smallBox4" style="font-size: 12px;">
							<td class="small-box-green"><span class="char-visible-one opacity00" id="">M</span></td>
							<td class="small-box-green"><span class="char-visible-one opacity00" id="">A</span></td>
							<td class="small-box-green"><span class="char-visible-one opacity00" id="">Y</span></td>
							<td class="small-box-green"><span class="char-visible-one-zero opacity00" id="">\0</span></td>
							<td class="small-box-green char-invisible "><span class="opacity00" id="">0</span></td>
							<td class="small-box-green char-invisible"><span class="opacity00" id="">0</span></td>
							<td class="small-box-green char-invisible"><span class="opacity00" id="">0</span></td>
							<td class="small-box-royalblue"><span class="char-visible-two opacity00" id="">J</span></td>
							<td class="small-box-royalblue"><span class="char-visible-two opacity00" id="">U</span></td>
							<td class="small-box-royalblue"><span class="char-visible-two opacity00" id="">N</span></td>
							<td class="small-box-royalblue"><span class="char-visible-two opacity00" id="">E</span></td>
							<td class="small-box-royalblue"><span class="char-visible-two-zero opacity00" id="">\0</span></td>
							<td class="small-box-royalblue char-invisible"><span class="opacity00" id="">0</span></td>
							<td class="small-box-royalblue char-invisible"><span class="opacity00" id="">0</span></td>
						</tr>
						<tr class="" id="rowSpan1">
							<td colspan="7" class="rowtdClass" id="rowTwoId1" style="color: green;">0<sup><b>th</b></sup> row</td>
							<td colspan="7" class="rowtdClass" id="rowTwoId2" style="color: royalblue;">1<sup><b>st</b></sup> row</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-8 col-xs-offset-1 margin-top-3 border opacity00" id="exampleDiv5">
			<div class="col-xs-12">
				<span id="fifthExample" class="margin-top-2 opacity00 font-monospace">
					char a[][4] = {{'<span class="inputChar5" id="character1">t</span>'},
					{'<span class="inputChar5" id="character2">e</span>'},
					{'<span class="inputChar5" id="character3">n</span>'}};
				</span>
				<div id="tableDiv5" class="margin-top-3 opacity00">
					<table align="center">
						<tr>
							<td class="elementBox"><span class="" id="element1">a[0][0]</span></td>
							<td class="elementBox"><span class="" id="element2">a[0][1]</span></td>
							<td class="elementBox"><span class="" id="element3">a[0][2]</span></td>
							<td class="elementBox"><span class="" id="element4">a[0][3]</span></td>
							<td class="elementBox"><span class="" id="element5">a[1][0]</span></td>
							<td class="elementBox"><span class="" id="element6">a[1][1]</span></td>
							<td class="elementBox"><span class="" id="element7">a[1][2]</span></td>
							<td class="elementBox"><span class="" id="element8">a[1][3]</span></td>
							<td class="elementBox"><span class="" id="element9">a[2][0]</span></td>
							<td class="elementBox"><span class="" id="element10">a[2][1]</span></td>
							<td class="elementBox"><span class="" id="element11">a[2][2]</span></td>
							<td class="elementBox"><span class="" id="element12">a[2][3]</span></td>
						</tr>
						<tr class="" id="smallBox5">
							<td class="small-box-green"><span class="displayChar5 opacity00" id="displayValue1">t</span></td>
							<td class="small-box-green"><span class="appendZero opacity00" id="">\0</span></td>
							<td class="small-box-green char-invisible-two"><span class="opacity00" id="">0</span></td>
							<td class="small-box-green char-invisible-two"><span class="opacity00" id="">0</span></td>
							<td class="small-box-firebrick"><span class="displayChar5 opacity00" id="displayValue2">e</span></td>
							<td class="small-box-firebrick"><span class="appendZero opacity00" id="">\0</span></td>
							<td class="small-box-firebrick char-invisible-two"><span class="opacity00" id="">0</span></td>
							<td class="small-box-firebrick char-invisible-two"><span class="opacity00" id="">0</span></td>
							<td class="small-box-royalblue"><span class="displayChar5 opacity00" id="displayValue3">n</span></td>
							<td class="small-box-royalblue"><span class="appendZero opacity00" id="">\0</span></td>
							<td class="small-box-royalblue char-invisible-two"><span class="opacity00" id="">0</span></td>
							<td class="small-box-royalblue char-invisible-two"><span class="opacity00" id="">0</span></td>
						</tr>
						<tr class="" id="rowSpan2">
							<td colspan="4" class="rowtdClass" id="rowTwoId1" style="color: green;">0<sup><b>th</b></sup> row</td>
							<td colspan="4" class="rowtdClass" id="rowTwoId2" style="color: firebrick;">1<sup><b>st</b></sup> row</td>
							<td colspan="4" class="rowtdClass" id="rowTwoId3" style="color: royalblue;">2<sup><b>nd</b></sup> row</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-12">
		<div class="text-center margin-top-2" id="restartDiv">
			<a class="btn btn-warning opacity00" id="restart"><i class="fa fa-refresh"></i>&nbsp;Restart</a>
		</div>
	</div>
</div>

</body>
<script type="text/javascript">

	$(document).ready(function() {
		initializationOfCharacterArrays();
	});
	
</script>
</html>