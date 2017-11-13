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
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/animate.css">
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src='/js/intro.js'></script>
<link rel="stylesheet" href="/css/font-awesome.min.css">
<!-- <script src='/secure/lang/c/js-min/iotda.min.js'></script> -->
<script src='/secure/lang/c/js/initialization-of-two-dimensional-arrays.js'></script>

<title>two dimensional array</title>
</head>

<style>

#infoDiv {
	background-color: rgb(243, 235, 235);
	border-radius: 10px;
	font-size: 15px;
	padding: 11px 12px;
	font-family: monospace;
}


.smallBox1, .smallBox2, .smallBox3, .smallBox4, .smallBox5 {
	border: 1px solid white;
	border-style: solid;
	padding: 4px;
	text-align: center;
	width: 66px;
}
.second-box-1, .second-box-2, .second-box-3, .three-box-1, 
.three-box-2, .three-box-3, .four-box-1, .four-box-2, .four-box-3 {
	border: 1px solid white;
	/* border-style: solid; */
	padding: 4px;
	text-align: center;
	width: 66px;
}

.fifth-box-1, .fifth-box-2 {
	border: 1px solid white;
	/* border-width: 2px;
	border-style: solid; */
	padding: 4px;
	text-align: center;
	width: 66px;
}
/* .smallBox1 {
	border-color: green;
}

.smallBox2 {
	border-color: firebrick;
}

.smallBox3 {
	border-color: royalblue;
} */

.elementBox, .addressBox {
	padding: 4px;
	text-align: center;
	width: 55px;
	font-size: 12px;
}

.rowtdClass {
	padding: 4px;
	text-align: center;
	width: 55px;
}

.margin-top-1 {
	margin-top: 1%;
}

.margin-top-3 {
	margin-top: 3%;
}

.margin-top-2 {
	margin-top: 2%;
}

.border {
	border: 1px solid bisque;
	border-radius: 6px;
}

.user-btn {
	background-color: green;
}

.introjs-tooltip {
	min-width: 280px;
	overflow-y: auto; 
}

.z-index9999999 {
	z-index: 9999999;
}

.animated-border {
	border-color: rgba(255, 255, 255, 0);
    animation: 1s ease 0s normal none 1 running animated-border;
}

.ct-color-red {
	color: red;
}

span, div {
	position: relative;
}

@keyframes animated-border {  
  100% { border-color: gray; }
}

.font-family {
	font-family: monospace;
}

.append-zero, .zero-class {
	opacity: 0;
}

.ct-color-num {
	color: #0ad785;
}


</style>

<body>

<div class="main-div col-xs-12">
	<div class="text-center margin-top-1">
		<h3 class='label ct-demo-heading' id="heading">
			<span>Initialization of Two Dimensional Array</span>
		</h3>
	</div>
	<div class="col-xs-8 col-xs-offset-2 margin-top-2 infoDiv" id="infoDiv">
		<ul>
			<li id="list1" class="opacity00">C allows us to create two dimensional arrays. For example in the statement 
				<span class='font-family'>int arr[3][2]</span>, 3 represents the number of <b>rows</b> and 2 represents the number of <b>columns</b>.</li>
			<li id="list2" class="opacity00">While declaring two dimensional arrays the count of <b>rows</b> can be omitted however the size of the 
				<b>columns</b> must be specified.<span id='nextButton' class='opacity00'><a class='introjs-button user-btn'>Next &#8594;</a></span></li>
		</ul>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-4 col-xs-offset-1 margin-top-2 border opacity00" id="exampleDiv1">
			<span id="firstExample" class="margin-top-2 opacity00 font-family">
				int <span id="rowColumnSyntax">arr[3][2]</span> = {<span id="input1">10</span>,<span id="input2">20</span>,<span id="input3">30</span>,<span id="input4">40</span>,<span id="input5">50</span>,<span id="input6">60</span>}; 
			</span>
			<div id="tableDiv1">
				<table align="center" class="margin-top-2">
					<tr>
						<td class="elementBox"><span class="opacity00" id="element1">arr[0][0]</span></td>
						<td class="elementBox"><span class="opacity00" id="element2">arr[0][1]</span></td>
						<td class="elementBox"><span class="opacity00" id="element3">arr[1][0]</span></td>
						<td class="elementBox"><span class="opacity00" id="element4">arr[1][1]</span></td>
						<td class="elementBox"><span class="opacity00" id="element5">arr[2][0]</span></td>
						<td class="elementBox"><span class="opacity00" id="element6">arr[2][1]</span></td>
					</tr>
					<tr class="visibility-hidden" id="smallBox1">
						<td class="smallBox1"><span class="opacity00" id="value1">10</span></td>
						<td class="smallBox1"><span class="opacity00" id="value2">20</span></td>
						<td class="smallBox2"><span class="opacity00" id="value3">30</span></td>
						<td class="smallBox2"><span class="opacity00" id="value4">40</span></td>
						<td class="smallBox3"><span class="opacity00" id="value5">50</span></td>
						<td class="smallBox3"><span class="opacity00" id="value6">60</span></td>
					</tr>
					<tr class="opacity00" id="address1">
						<td class="addressBox">1023</td>
						<td class="addressBox">1025</td>
						<td class="addressBox">1027</td>
						<td class="addressBox">1029</td>
						<td class="addressBox">1031</td>
						<td class="addressBox">1033</td>
					</tr>
					<tr class="" id="rowSpan1">
						<td colspan="2" class="rowtdClass opacity00" id="rowOneId1" style="color: green;">0<sup><b>th</b></sup> row</td>
						<td colspan="2" class="rowtdClass opacity00" id="rowOneId2" style="color: firebrick;">1<sup><b>st</b></sup> row</td>
						<td colspan="2" class="rowtdClass opacity00" id="rowOneId3" style="color: royalblue;">2<sup><b>nd</b></sup> row</td>
					</tr>
				</table>
			</div>
		</div>
		<div class="col-xs-4 col-xs-offset-2 margin-top-2 border opacity00" id="exampleDiv2">
			<div id="secondExample" class=" margin-top-2 font-family">
				int arr[3][2] = {<span id="innerArray1">{<span id="inputTwo1">1</span>,<span id="inputTwos1">2</span>}</span>,
							<span id="innerArray2">{<span id="inputTwo2">3</span>,<span id="inputTwos2">4</span>}</span>,
							<span id="innerArray3">{<span id="inputTwo3">5</span>,<span id="inputTwos3">6</span>}</span>}; 
			</div>
			<div id="tableDiv2">
				<table align="center" class="margin-top-2">
					<tr>
						<td class="elementBox"><span class="opacity00" id="elementTwo1">arr[0][0]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementTwo2">arr[0][1]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementTwo3">arr[1][0]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementTwo4">arr[1][1]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementTwo5">arr[2][0]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementTwo6">arr[2][1]</span></td>
					</tr>
					<tr class="visibility-hidden" id="smallBox2">
						<td class="second-box-1"><span class="opacity00" id="valueTwo1">1</span></td>
						<td class="second-box-1"><span class="opacity00" id="valueTwos1">2</span></td>
						<td class="second-box-2"><span class="opacity00" id="valueTwo2">3</span></td>
						<td class="second-box-2"><span class="opacity00" id="valueTwos2">4</span></td>
						<td class="second-box-3"><span class="opacity00" id="valueTwo3">5</span></td>
						<td class="second-box-3"><span class="opacity00" id="valueTwos3">6</span></td>
					</tr>
					<tr class="opacity00" id="address2">
						<td class="addressBox">1021</td>
						<td class="addressBox">1023</td>
						<td class="addressBox">1025</td>
						<td class="addressBox">1027</td>
						<td class="addressBox">1029</td>
						<td class="addressBox">1031</td>
					</tr>
					<tr class="" id="rowSpan2">
						<td colspan="2" class="rowtdClass opacity00" id="rowTwoId1" style="color: green;">0<sup><b>th</b></sup> row</td>
						<td colspan="2" class="rowtdClass opacity00" id="rowTwoId2" style="color: firebrick;">1<sup><b>st</b></sup> row</td>
						<td colspan="2" class="rowtdClass opacity00" id="rowTwoId3" style="color: royalblue;">2<sup><b>nd</b></sup> row</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-6 margin-top-2 border opacity00" id="exampleDiv3">
			<div id="thirdExample" class="margin-top-2 font-family">
				int arr[3][4] = {<span id="inputThree1">1</span>,<span id="inputThree2">2</span>,<span id="inputThree3">3</span>,<span id="inputThree4">4</span>,<span id="inputThree5">5</span>}; 
			</div>
			<div id="tableDiv3">
				<table align="center" class="margin-top-2">
					<tr>
						<td class="elementBox"><span class="opacity00" id="elementThree1">arr[0][0]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementThree2">arr[0][1]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementThree3">arr[0][2]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementThree4">arr[0][3]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementThree5">arr[1][0]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementThree6">arr[1][1]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementThree7">arr[1][2]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementThree8">arr[1][3]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementThree9">arr[2][0]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementThree10">arr[2][1]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementThree11">arr[2][2]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementThree12">arr[2][3]</span></td>
					</tr>
					<tr class="visibility-hidden" id="smallBox3">
						<td class="three-box-1"><span class="opacity00" id="valueThree1">1</span></td>
						<td class="three-box-1"><span class="opacity00" id="valueThree2">2</span></td>
						<td class="three-box-1"><span class="opacity00" id="valueThree3">3</span></td>
						<td class="three-box-1"><span class="opacity00" id="valueThree4">4</span></td>
						<td class="three-box-2"><span class="opacity00" id="valueThree5">5</span></td>
						<td class="three-box-2"><span class="append-zero" id="valueThree6">0</span></td>
						<td class="three-box-2"><span class="append-zero" id="valueThree7">0</span></td>
						<td class="three-box-2"><span class="append-zero" id="valueThree8">0</span></td>
						<td class="three-box-3"><span class="append-zero" id="valueThree9">0</span></td>
						<td class="three-box-3"><span class="append-zero" id="valueThree10">0</span></td>
						<td class="three-box-3"><span class="append-zero" id="valueThree11">0</span></td>
						<td class="three-box-3"><span class="append-zero" id="valueThree12">0</span></td>
					</tr>
					<tr class="opacity00" id="address3">
						<td class="addressBox">1015</td>
						<td class="addressBox">1017</td>
						<td class="addressBox">1019</td>
						<td class="addressBox">1021</td>
						<td class="addressBox">1023</td>
						<td class="addressBox">1025</td>
						<td class="addressBox">1027</td>
						<td class="addressBox">1029</td>
						<td class="addressBox">1031</td>
						<td class="addressBox">1033</td>
						<td class="addressBox">1035</td>
						<td class="addressBox">1037</td>
					</tr>
					<tr id="rowSpan3">
						<td colspan="4" class="rowtdClass opacity00" id="rowThreeId1" style="color: green;">0<sup><b>th</b></sup> row</td>
						<td colspan="4" class="rowtdClass opacity00" id="rowThreeId2" style="color: firebrick;">1<sup><b>st</b></sup> row</td>
						<td colspan="4" class="rowtdClass opacity00" id="rowThreeId3" style="color: royalblue;">2<sup><b>nd</b></sup> row</td>
					</tr>
				</table>
			</div>
		</div>
		<div class="col-xs-4 col-xs-offset-1 margin-top-2 border opacity00" id="exampleDiv5">
			<div id="fifthExample" class="margin-top-2 font-family">
				int arr[<span id="emptyRowArray"> </span>][<span id="fifthColumn">2</span>] = {<span id="inputFifth1">1</span>,<span id="inputFifth2">2</span>,<span id="inputFifth3">3</span>,<span id="inputFifth4">4</span>};
			</div>
			<div id="tableDiv5">
				<table align="center" class="margin-top-2">
					<tr>
						<td class="elementBox"><span class="opacity00" id="elementFifth1">arr[0][0]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementFifth2">arr[0][1]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementFifth3">arr[1][0]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementFifth4">arr[1][1]</span></td>
					</tr>
					<tr class="visibility-hidden" id="smallBox5">
						<td class="fifth-box-1"><span class="opacity00" id="valueFifth1">1</span></td>
						<td class="fifth-box-1"><span class="opacity00" id="valueFifth2">2</span></td>
						<td class="fifth-box-2"><span class="opacity00" id="valueFifth3">3</span></td>
						<td class="fifth-box-2"><span class="opacity00" id="valueFifth4">4</span></td>
					</tr>
					<tr class="opacity00" id="address5">
						<td class="addressBox">1031</td>
						<td class="addressBox">1033</td>
						<td class="addressBox">1035</td>
						<td class="addressBox">1037</td>
					</tr>
					<tr id="rowSpan5">
						<td colspan="2" class="rowtdClass opacity00" id="rowFifthId1" style="color: green;">0<sup><b>th</b></sup> row</td>
						<td colspan="2" class="rowtdClass opacity00" id="rowFifthId2" style="color: firebrick;">1<sup><b>st</b></sup> row</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-6 col-xs-offset-0 margin-top-2 border opacity00" id="exampleDiv4">
			<div id="fourthExample" class="margin-top-2 font-family">
				int arr[3][4] = {<span id="arrayBrace1">{<span id="inputFourth1">1</span>,<span id="inputFourths1">2</span>}</span>,
					<span id="arrayBrace2">{<span id="inputFourth3">3</span>,<span id="inputFourth4">4</span>,<span id="inputFourth5">5</span>}</span>}; 
			</div>
			<div id="tableDiv4">
				<table align="center" class="margin-top-2">
					<tr>
						<td class="elementBox"><span class="opacity00" id="elementFourth1">arr[0][0]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementFourth2">arr[0][1]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementFourth3">arr[0][2]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementFourth4">arr[0][3]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementFourth5">arr[1][0]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementFourth6">arr[1][1]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementFourth7">arr[1][2]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementFourth8">arr[1][3]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementFourth9">arr[2][0]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementFourth10">arr[2][1]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementFourth11">arr[2][2]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementFourth12">arr[2][3]</span></td>
					</tr>
					<tr class="visibility-hidden" id="smallBox4">
						<td class="four-box-1"><span class="opacity00" id="valueFourth1">1</span></td>
						<td class="four-box-1"><span class="opacity00" id="valueFourth2">2</span></td>
						<td class="four-box-1"><span class="zero-class">0</span></td>
						<td class="four-box-1"><span class="zero-class">0</span></td>
						<td class="four-box-2"><span class="opacity00" id="valueFourth3">3</span></td>
						<td class="four-box-2"><span class="opacity00" id="valueFourth4">4</span></td>
						<td class="four-box-2"><span class="opacity00" id="valueFourth5">5</span></td>
						<td class="four-box-2"><span class="zero-class">0</span></td>
						<td class="four-box-3"><span class="zero-class">0</span></td>
						<td class="four-box-3"><span class="zero-class">0</span></td>
						<td class="four-box-3"><span class="zero-class">0</span></td>
						<td class="four-box-3"><span class="zero-class">0</span></td>
					</tr>
					<tr class="opacity00" id="address4">
						<td class="addressBox">1183</td>
						<td class="addressBox">1185</td>
						<td class="addressBox">1187</td>
						<td class="addressBox">1189</td>
						<td class="addressBox">1191</td>
						<td class="addressBox">1193</td>
						<td class="addressBox">1195</td>
						<td class="addressBox">1197</td>
						<td class="addressBox">1199</td>
						<td class="addressBox">1201</td>
						<td class="addressBox">1203</td>
						<td class="addressBox">1205</td>
					</tr>
					<tr id="rowSpan4">
						<td colspan="4" class="rowtdClass opacity00" id="rowFourthId1" style="color: green;">0<sup><b>th</b></sup> row</td>
						<td colspan="4" class="rowtdClass opacity00" id="rowFourthId2" style="color: firebrick;">1<sup><b>st</b></sup> row</td>
						<td colspan="4" class="rowtdClass opacity00" id="rowFourthId3" style="color: royalblue;">2<sup><b>nd</b></sup> row</td>
					</tr>
				</table>
			</div>
		</div>
		<!-- <div class="col-xs-4 col-xs-offset-2" id="exampleDiv6" style="margin-top: 7%">
			<div id="">
				<span id="sixthExample" class="opacity00 font-family">int arr[<span id="emptySixRow"> </span>][<span id="emptySixColumn"> </span>] = {1,2,3,4};</span>
			</div>
		</div> -->
	</div>
	<div class="col-xs-7 col-xs-offset-5" id="restartDiv">
		<a class="btn btn-warning opacity00 margin-top-2" id="restart"><i class="fa fa-refresh"></i>&nbsp;Restart</a>
	</div>
</div>

</body>

<script type="text/javascript">
	$(document).ready(function() {
		intializationOfTwoDimensionalArraysReady();
	});
</script>
</html>