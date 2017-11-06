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
<script src='/secure/lang/c/js-min/iooda2.min.js'></script>

<title>Initialization of arrays</title>
</head>
<style>

#infoDiv {
	background-color: rgb(243, 235, 235);
	border-radius: 10px;
	font-size: 15px;
	padding: 11px 12px;
	/* margin-left: 19.5%;
	margin-top: 1%; */
}

.margin-top-1 {
	margin-top: 1%;
}

.smallBox1, .smallBox2, .smallBox3, .smallBox4, .smallBox5 {
	border: 1px solid gray;
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
	border: 1px solid;
	border-radius: 6px;
}

span, div {
	position: relative;
}

.user-btn {
	background-color: green;
}

.animated-border {
	border-color: rgba(255, 255, 255, 0);
    animation: 2s ease 0s normal none 1 running animated-border;
}

@keyframes animated-border {  
  100% { border-color: dodgerblue; }
}
}

</style>
<body>
<div class="main-div col-xs-12">
	<div class="text-center margin-top-1" id="heading">
		<h3 class='label ct-demo-heading'>
			<span>Initialization of arrays</span>
		</h3>
	</div>
	<div class="text-center margin-top-1" id="restartDiv">
		<a class="btn btn-warning opacity00" id="restart"><i class="fa fa-refresh"></i>&nbsp;Restart</a>
	</div>
	<div class="col-xs-8 col-xs-offset-2 margin-top-2 infoDiv" id="infoDiv">
		<ul>
			<li>Arrays a kind of data structure that can store a fixed-size sequential collection 
				of elements of the same type. And an array is used to store a collection of data.</li>
			<li>The elements of an array may be assigned with the values using initialization instead of reading them by the I/O functions.</li>
		 	<li> An array can be initialized in its declaration only.</li>
			<li>The list of values are enclosed in braces { }.</li>
			<li>The values are separated by commas and they must be constants or constant expressions.</li>
		</ul>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-3 col-xs-offset-1 margin-top-2 border opacity00" id="exampleDiv1">
			<div id="firstExample" class="opacity00 margin-top-2">
				int a[<span id="arraySize1">4</span>]={<span id="input1">10</span>,<span id="input2">20</span>,<span id="input3">30</span>,
													<span id="input4">40</span>};
			</div>
			<div id="tableDiv1" class="margin-top-3">
				<table align="center">
					<tr>
						<td class="elementBox"><span class="opacity00" id="element1">a[0]</span></td>
						<td class="elementBox"><span class="opacity00" id="element2">a[1]</span></td>
						<td class="elementBox"><span class="opacity00" id="element3">a[2]</span></td>
						<td class="elementBox"><span class="opacity00" id="element4">a[3]</span></td>
					</tr>
					<tr class="visibility-hidden" id="smallBox1">
						<td class="smallBox1"><span class="opacity00" id="value1">10</span></td>
						<td class="smallBox1"><span class="opacity00" id="value2">20</span></td>
						<td class="smallBox1"><span class="opacity00" id="value3">30</span></td>
						<td class="smallBox1"><span class="opacity00" id="value4">40</span></td>
					</tr>
					<tr class="opacity00" id="address1">
						<td class="addressBox">1024</td>
						<td class="addressBox">1026</td>
						<td class="addressBox">1028</td>
						<td class="addressBox">1030</td>
					</tr>
				</table>
			</div>
		</div>
		<div class="col-xs-3 col-xs-offset-1 margin-top-2 border opacity00" id="exampleDiv2">
			<div id="secondExample" class="opacity00 margin-top-2">
				int a[<span id="arraySize2">5</span>]={<span id="inputValue1">10</span>,<span id="inputValue2">20</span>,
														<span id="inputValue3">30</span>};
			</div>
				<div id="tableDiv2" class="margin-top-3">
				<table align="center">
					<tr>
						<td class="elementBox"><span class="opacity00" id="element5">a[0]</span></td>
						<td class="elementBox"><span class="opacity00" id="element6">a[1]</span></td>
						<td class="elementBox"><span class="opacity00" id="element7">a[2]</span></td>
						<td class="elementBox"><span class="opacity00" id="element8">a[3]</span></td>
						<td class="elementBox"><span class="opacity00" id="element9">a[4]</span></td>
					</tr>
					<tr class="visibility-hidden" id="smallBox2">
						<td class="smallBox2"><span class="opacity00" id="valueId1">10</span></td>
						<td class="smallBox2"><span class="opacity00" id="valueId2">20</span></td>
						<td class="smallBox2"><span class="opacity00" id="valueId3">30</span></td>
						<td class="smallBox2"><span class="opacity00" id="valueId4">0</span></td>
						<td class="smallBox2"><span class="opacity00" id="valueId5">0</span></td>
					</tr>
					<tr class="opacity00" id="address2">
						<td class="addressBox">1016</td>
						<td class="addressBox">1018</td>
						<td class="addressBox">1020</td>
						<td class="addressBox">1022</td>
						<td class="addressBox">1024</td>
					</tr>
				</table>
			</div>
		</div>
		<div class="col-xs-2 col-xs-offset-1 margin-top-2 border opacity00" id="exampleDiv3">
			<div id="thirdExample" class="opacity00 margin-top-2">
				int a[<span id="arraySize3">2</span>]={<span id="inValue1">10</span>,<span id="inValue2">20</span>,<span id="inValue3">30</span>,
														<span id="inValue4">40</span>,<span id="inValue5">50</span>};
			</div>
				<div id="tableDiv3" class="margin-top-3">
				<table align="center">
					<tr>
						<td class="elementBox"><span class="opacity00" id="element10">a[0]</span></td>
						<td class="elementBox"><span class="opacity00" id="element11">a[1]</span></td>
					</tr>
					<tr class="visibility-hidden" id="smallBox3">
						<td class="smallBox3"><span class="opacity00" id="valueIds1">10</span></td>
						<td class="smallBox3"><span class="opacity00" id="valueIds2">20</span></td>
					</tr>
					<tr class="opacity00" id="address3">
						<td class="addressBox">1022</td>
						<td class="addressBox">1024</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-3 col-xs-offset-1 margin-top-2 border opacity00" id="exampleDiv4">
			<div id="fourthExample" class="opacity00 margin-top-2">
				int a[<span id="arraySize4"> </span>]={<span id="inputCount"><span id="inputVal1">10</span>,
						<span id="inputVal2">20</span>,<span id="inputVal3">30</span></span>};
			</div>
				<div id="tableDiv4" class="margin-top-3">
				<table align="center">
					<tr>
						<td class="elementBox"><span class="opacity00" id="element12">a[0]</span></td>
						<td class="elementBox"><span class="opacity00" id="element13">a[1]</span></td>
						<td class="elementBox"><span class="opacity00" id="element14">a[2]</span></td>
					</tr>
					<tr class="visibility-hidden" id="smallBox4">
						<td class="smallBox4"><span class="opacity00" id="valuesId1">10</span></td>
						<td class="smallBox4"><span class="opacity00" id="valuesId2">20</span></td>
						<td class="smallBox4"><span class="opacity00" id="valuesId3">30</span></td>
					</tr>
					<tr class="opacity00" id="address4">
						<td class="addressBox">1020</td>
						<td class="addressBox">1024</td>
						<td class="addressBox">1026</td>
					</tr>
				</table>
			</div>
		</div>
		<div class="col-xs-6 col-xs-offset-1 margin-top-2 border opacity00" id="exampleDiv5">
			<div id="fifthExample" class="opacity00 margin-top-2">
				int a[<span id="arraySize5">10</span>]={<span id="inpVal">0</span>};
			</div>
				<div id="tableDiv5" class="margin-top-3">
				<table align="center">
					<tr>
						<td class="elementBox"><span class="opacity00" id="elementVal0">a[0]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementVal1">a[1]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementVal2">a[2]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementVal3">a[3]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementVal4">a[4]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementVal5">a[5]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementVal6">a[6]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementVal7">a[7]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementVal8">a[8]</span></td>
						<td class="elementBox"><span class="opacity00" id="elementVal9">a[9]</span></td>
					</tr>
					<tr class="visibility-hidden" id="smallBox5">
						<td class="smallBox5"><span class="opacity00" id="lastValue">0</span></td>
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
						<td class="addressBox">1028</td>
						<td class="addressBox">1030</td>
						<td class="addressBox">1032</td>
						<td class="addressBox">1034</td>
						<td class="addressBox">1036</td>
						<td class="addressBox">1038</td>
						<td class="addressBox">1040</td>
						<td class="addressBox">1042</td>
						<td class="addressBox">1044</td>
						<td class="addressBox">1046</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</div>

</body>

<script type="text/javascript">
	$(document).ready(function() {
		initializationOfOneDimesionalArraysReady();
	});
</script>

</html>