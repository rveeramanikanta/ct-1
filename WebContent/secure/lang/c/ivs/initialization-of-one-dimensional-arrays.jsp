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
<!-- <script src="/secure/lang/c/js-min/iooda.min.js"></script> -->
<script src="/secure/lang/c/js/initialization-of-one-dimensional-arrays.js"></script>

<title>Initialization of arrays</title>
</head>
<style>

#infoDiv {
	background-color: rgb(243, 235, 235);
	border-radius: 10px;
	font-size: 15px;
	padding: 11px 12px;
}

.margin-top-1 {
	margin-top: 1%;
}

.smallBox1, .smallBox2, .smallBox3, .smallBox4, .smallBox5, .smallBox6 {
	border: 1px solid white;
	padding: 4px;
	text-align: center;
	width: 55px;
}

.addressBox, .elementBox {
	padding: 4px;
	text-align: center;
	width: 55px;
}

.addressBox {
	color: green;
}

.margin-top-3 {
	margin-top: 3%;
}

.margin-top-2 {
	margin-top: 2%;
}

.z-index9999999 {
	z-index: 9999999;
}

.border {
	border: 1px solid gray;
	border-radius: 6px;
}

span, div {
	position: relative;
}

.user-btn {
	background-color: green;
}

.introjs-tooltip {
	min-width: 280px;
}

.animated-border {
	border-color: rgba(255, 255, 255, 0);
    animation: 1s ease 0s normal none 1 running animated-border;
}

@keyframes animated-border {  
  100% { border-color: dodgerblue; }
}

.font-family {
	font-family: monospace;
}

pre {
	font-family: monospace;
}

.css-circle {
	border-radius: 9px;
	border : 1px solid;
	background-color: white;
	padding: 2px;
	z-index: 9999999;
	background-color: white;
}

.z-index9999999 {
	z-index: 9999999;
	background-color: white;
}

.ui-effects-transfer {
	border: 1px solid green;
	z-index: 9999999 !important;
}

.ct-color-lime {
	color: lime;
}


</style>
<body>
<div class="main-div col-xs-12">
	<div class="text-center margin-top-1" id="heading">
		<h3 class='label ct-demo-heading'>
			<span>Initialization of One Dimensional Array</span>
		</h3>
	</div>
	<div class="col-xs-8 col-xs-offset-2 margin-top-2 infoDiv" id="infoDiv">
		<ul>
			<li id='list1' class="opacity00">An array is a kind of data structure of a fixed size that is used to store elements of a same data type in sequential order.</li>
			<li id='list2' class="opacity00">An array can be visualized as a sequence of buckets in which the elements are stored. 
				These buckets are assigned positions starting from 0. These positions are also referred to as indices.</li>
			<li id='list3' class="opacity00">There are two ways for declaring an array.
				<ol>
					<li id='list4' class="opacity00">Array can be declared and  initialized in the same in a single statement.</li>
					<li id='list5' class="opacity00">Array can be declared and the elements of the array can be initialized subsequently.
					<span id='nextButton' class='opacity00'><a class='introjs-button user-btn'>Next &#8594;</a></span></li>
				</ol>
			</li>
		</ul>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-3 col-xs-offset-1 margin-top-2 border opacity00" id="exampleDiv1">
			<div id="firstExample" class="opacity00 margin-top-2 font-family">
				int arr[<span id="arraySize1">4</span>] = {<span id="input1">10</span>,<span id="input2">20</span>,<span id="input3">30</span>,<span id="input4">40</span>};
			</div>
			<div id="tableDiv1" class="margin-top-3">
				<table align="center">
					<tr>
						<td class="elementBox"><span class="opacity00" id="element1">arr[0]</span></td>
						<td class="elementBox"><span class="opacity00" id="element2">arr[1]</span></td>
						<td class="elementBox"><span class="opacity00" id="element3">arr[2]</span></td>
						<td class="elementBox"><span class="opacity00" id="element4">arr[3]</span></td>
					</tr>
					<tr class="visibility-hidden" id="smallBox1">
						<td class="smallBox1"><span class="opacity00" id="value1">10</span></td>
						<td class="smallBox1"><span class="opacity00" id="value2">20</span></td>
						<td class="smallBox1"><span class="opacity00" id="value3">30</span></td>
						<td class="smallBox1"><span class="opacity00" id="value4">40</span></td>
					</tr>
					<tr class="opacity00" id="address1">
						<td class="addressBox">1023</td>
						<td class="addressBox">1025</td>
						<td class="addressBox">1027</td>
						<td class="addressBox">1029</td>
					</tr>
				</table>
			</div>
		</div>
		<div class="col-xs-3 col-xs-offset-1 margin-top-2 border opacity00" id="exampleDiv2">
			<div id="secondExample" class="opacity00 margin-top-2 font-family">
				int arr[<span id="arraySize2">5</span>] = {<span id="inputValue1">10</span>,<span id="inputValue2">20</span>,<span id="inputValue3">30</span>};
			</div>
				<div id="tableDiv2" class="margin-top-3">
				<table align="center">
					<tr>
						<td class="elementBox"><span class="opacity00" id="element5">arr[0]</span></td>
						<td class="elementBox"><span class="opacity00" id="element6">arr[1]</span></td>
						<td class="elementBox"><span class="opacity00" id="element7">arr[2]</span></td>
						<td class="elementBox"><span class="opacity00" id="element8">arr[3]</span></td>
						<td class="elementBox"><span class="opacity00" id="element9">arr[4]</span></td>
					</tr>
					<tr class="visibility-hidden" id="smallBox2">
						<td class="smallBox2"><span class="opacity00" id="valueId1">10</span></td>
						<td class="smallBox2"><span class="opacity00" id="valueId2">20</span></td>
						<td class="smallBox2"><span class="opacity00" id="valueId3">30</span></td>
						<td class="smallBox2"><span class="opacity00" id="valueId4">0</span></td>
						<td class="smallBox2"><span class="opacity00" id="valueId5">0</span></td>
					</tr>
					<tr class="opacity00" id="address2">
						<td class="addressBox">1015</td>
						<td class="addressBox">1017</td>
						<td class="addressBox">1019</td>
						<td class="addressBox">1021</td>
						<td class="addressBox">1023</td>
					</tr>
				</table>
			</div>
		</div>
		<div class="col-xs-3 col-xs-offset-1 margin-top-2 border opacity00" id="exampleDiv3">
			<div id="thirdExample" class="opacity00 margin-top-2 font-family">
				int arr[<span id="arraySize3">2</span>] = {<span id="inValue1">10</span>,<span id="inValue2">20</span>,<span id="inValue3">30</span>,<span id="inValue4">40</span>,<span id="inValue5">50</span>};
			</div>
				<div id="tableDiv3" class="margin-top-3">
				<table align="center">
					<tr>
						<td class="elementBox"><span class="opacity00" id="element10">arr[0]</span></td>
						<td class="elementBox"><span class="opacity00" id="element11">arr[1]</span></td>
					</tr>
					<tr class="visibility-hidden" id="smallBox3">
						<td class="smallBox3"><span class="opacity00" id="valueIds1">10</span></td>
						<td class="smallBox3"><span class="opacity00" id="valueIds2">20</span></td>
					</tr>
					<tr class="opacity00" id="address3">
						<td class="addressBox">1021</td>
						<td class="addressBox">1023</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-3 col-xs-offset-1 margin-top-2 border opacity00" id="exampleDiv4">
			<div id="fourthExample" class="opacity00 margin-top-2 font-family">
				int arr[<span id="arraySize4"> </span>] = {<span id="inputCount"><span id="inputVal1">10</span>,<span id="inputVal2">20</span>,<span id="inputVal3">30</span></span>};
			</div>
			<div id="tableDiv4" class="margin-top-3">
				<table align="center">
					<tr>
						<td class="elementBox"><span class="opacity00" id="element12">arr[0]</span></td>
						<td class="elementBox"><span class="opacity00" id="element13">arr[1]</span></td>
						<td class="elementBox"><span class="opacity00" id="element14">arr[2]</span></td>
					</tr>
					<tr class="visibility-hidden" id="smallBox4">
						<td class="smallBox4"><span class="opacity00" id="valuesId1">10</span></td>
						<td class="smallBox4"><span class="opacity00" id="valuesId2">20</span></td>
						<td class="smallBox4"><span class="opacity00" id="valuesId3">30</span></td>
					</tr>
					<tr class="opacity00" id="address4">
						<td class="addressBox">1019</td>
						<td class="addressBox">1021</td>
						<td class="addressBox">1023</td>
					</tr>
				</table>
			</div>
		</div>
		<div class="col-xs-6 col-xs-offset-1 margin-top-2 border opacity00" id="exampleDiv5">
			<div id="fifthExample" class="opacity00 margin-top-2 font-family">
				int arr[<span id="arraySize5">10</span>] = {<span id="inpVal"> </span>};
			</div>
				<div id="tableDiv5" class="margin-top-3">
				<table align="center">
					<tr>
						<td class="elementBox"><span class="opacity00" id="elementVal0">arr[0]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementVal1">arr[1]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementVal2">arr[2]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementVal3">arr[3]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementVal4">a[4]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementVal5">arr[5]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementVal6">arr[6]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementVal7">arr[7]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementVal8">arr[8]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementVal9">arr[9]</span></td>
					</tr>
					<tr class="visibility-hidden" id="smallBox5">
						<td class="smallBox5"><span class="opacity00 lastValues" id="lastValue">0</span></td>
						<td class="smallBox5"><span class="opacity00 lastValues">0</span></td>
						<td class="smallBox5"><span class="opacity00 lastValues">0</span></td>
						<td class="smallBox5"><span class="opacity00 lastValues">0</span></td>
						<td class="smallBox5"><span class="opacity00 lastValues">0</span></td>
						<td class="smallBox5"><span class="opacity00 lastValues">0</span></td>
						<td class="smallBox5"><span class="opacity00 lastValues">0</span></td>
						<td class="smallBox5"><span class="opacity00 lastValues">0</span></td>
						<td class="smallBox5"><span class="opacity00 lastValues">0</span></td>
						<td class="smallBox5"><span class="opacity00 lastValues">0</span></td>
					</tr>
					<tr class="opacity00" id="address5">
						<td class="addressBox">1027</td>
						<td class="addressBox">1029</td>
						<td class="addressBox">1031</td>
						<td class="addressBox">1033</td>
						<td class="addressBox">1035</td>
						<td class="addressBox">1037</td>
						<td class="addressBox">1039</td>
						<td class="addressBox">1041</td>
						<td class="addressBox">1043</td>
						<td class="addressBox">1045</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-3 col-xs-offset-2 margin-top-2">
<pre id="preCode" class="opacity00">
<span class='opacity00' id='preLineArrayCode'>int arr[3];</span>
<span class='opacity00' id='preLine1'>arr[0] = <span id='lineValue1'>4</span>;</span>
<span class='opacity00' id='preLine2'>arr[1] = <span id='lineValue2'>2</span>;</span>
<span class='opacity00' id='preLine3'>arr[2] = <span id='lineValue3'>7</span>;</span>

</pre>	
		</div>
		<div class="col-xs-3 col-xs-offset-1 border margin-top-2 opacity00" id="exampleDiv6">
			<div id="tableDiv6" class="margin-top-1">
					<table align="center">
						<tr>
							<td class="elementBox"><span class="opacity00" id="elementSixth1">arr[0]</span></td>
							<td class="elementBox"><span class="opacity00" id="elementSixth2">arr[1]</span></td>
							<td class="elementBox"><span class="opacity00" id="elementSixth3">arr[2]</span></td>
						</tr>
						<tr class="visibility-hidden" id="smallBox6">
							<td class="smallBox6"><span class="opacity00" id="valuesLineId1">4</span></td>
							<td class="smallBox6"><span class="opacity00" id="valuesLineId2">2</span></td>
							<td class="smallBox6"><span class="opacity00" id="valuesLineId3">7</span></td>
						</tr>
						<tr class="opacity00" id="address6">
							<td class="addressBox">1019</td>
							<td class="addressBox">1021</td>
							<td class="addressBox">1023</td>
						</tr>
					</table>
				</div>
			</div>
	</div>
	<div class="text-center margin-top-3 col-xs-12" id="restartDiv">
		<a class="btn btn-warning opacity00" id="restart"><i class="fa fa-refresh"></i>&nbsp;Restart</a>
	</div>
</div>

</body>

<script type="text/javascript">
$(document).ready(function() {
	initializationOfOneDimensionalArraysReady();
});


</script>

</html>
