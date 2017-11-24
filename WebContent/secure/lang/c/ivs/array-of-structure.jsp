<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">
<link href="/css/tablesorter/jquery-ui.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/animate.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/data-structures-css.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/secure/lang/c/js-min/aos.min.js"></script>

<title>Array of structure</title>
<style>

.information-div {
	background-color: rgb(243, 235, 235);
	border-radius: 10px;
	font-family: monospace;
	z-index: 9999999;
	border: 1px solid gray;
	border-radius: 5px;
	padding: 4px;
}

.ct-code-b-green {
	color: green;
	font-weight: bold;
}

.table-border {
	border: 2px solid gray;
}

.no-border {
	border: none !important;
}

.no-right-border {
	border-right: none;
}

.no-left-border {
	border-left: none;
}

.margin-top20 {
	margin-top: 20px;
}

.margin-bottom20 {
	margin-bottom: 20px;
}

.creampretab4 {
	tab-size: 3;
	margin: 0;
	-moz-tab-size: 3;
	background-color: lavender !important;
	font-family: monospace;
}

.output-console-title-bar {
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
}

.output-console-body {
	border-bottom-left-radius: 6px; 
	border-bottom-right-radius: 6px;
	height: 135px;
	padding: 10px;
}

.output {
	font-size: 14px;
	font-weight: bold;
}

.div-border {
	border: 2px solid gray;
	border-radius: 10px;
}

span, div {
	position: relative;
}

td, tr {
	padding: 4px 6px;
	text-align: center;
	width: 65px;
	height: 30px;
	border-top: 2px solid gray;
}

.padding0 {
	padding: 0;
}

.pink-color {
	color: mediumvioletred;
	text-align: center
}

.blue-color {
	color: slateblue;
	text-align: center
}

.green-color {
	color: seagreen;
	text-align: center;
}

.red-color {
	color: red;
	text-align: center;
}

.padding3 {
	padding: 3px 9px 0 3px;
	outline: none;
}

.padding0 {
	padding: 0;
}

.introjs-tooltip {
	min-width: 300px;
}

.user-btn {
	background: green;
	margin: 0 !important;
}

.ct-code-b-red {
	color: red;
	font-weight: bold;
}
</style>
</head>
<body>
	<h2 class="text-center">
		<span class="label label-default ct-demo-heading">Array of Structures</span>
	</h2>
	<div id="informationDiv"
		class="col-xs-offset-2 col-xs-9 information-div margin-top20">
		<div class="col-xs-7" id="text">
			<ul>
				<li id="li1" class="opacity00">structure variables can also be declared as an array of structures.</li>
				&emsp; &emsp; <span  id="li2" class="opacity00 col-xs-offset-1 ct-code-b-green">Syntax : struct
							tagname variable[size];</span>
				<li id="li3" class="opacity00">For example,
					<div class="col-xs-offset-1">
						struct example {<br> &emsp;&emsp;int a;<br>
						&emsp;&emsp;float b;<br> };<br> struct example e[3];
					</div>
				</li>
			</ul>
		</div>

		<div style="margin-top: 50px;" class="col-xs-5 opacity00" id="example-table">
			<table id="table" class="" style="margin: 20px 0px; width: 100%;">
				<tbody>
					<tr style="border-top: none;">
						<th></th>
						<th colspan="2" class="pink-color">e[0]</th>
						<th colspan="2" style="color: slateblue; text-align: center">e[1]</th>
						<th colspan="2" style="color: seagreen; text-align: center">e[2]</th>
					</tr>
					<tr style="border-top: none;">
						<th style="text-align: center;" class="">e[3] = </th>
						<th class="table-border pink-color">a</th>
						<th class="table-border pink-color">b</th>
						<th class="table-border" style="color: slateblue; text-align: center">a</th>
						<th class="table-border" style="color: slateblue; text-align: center;">b</th>
						<th class="table-border" style="color: seagreen; text-align: center">a</th>
						<th class="table-border" style="color: seagreen; text-align: center">b</th>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	<div class="col-xs-4 code-div margin-top20">
<pre class="code-div creampretab4 opacity00" id="codeDiv">
<span id="struct"><b class="pink-color">struct</b> book {
	char name[5];
	int price;
	int pages;
};</span>
<span id="mainMethod">main() {</span>
	<span id="structVariable"><b class="pink-color">struct</b> book s[4];</span>
	<span id="normalVariable">int i;</span>
	<span id="printDetailsStmt">printf ("\nEnter details of 4 books : ");</span>
	<div id="forLoop1" style="display: inline-block;">for (<span
					id="intial1">i = 0;</span> <span id="condition1">i < 4;</span> <span
					id="inc1">i++</span>)</div> {
		<span id="printNameStmt">printf("\nEnter name of book : ");</span>
		<span id="scanName">scanf("%s", &s[i].name);</span>
		<span id="printPage">printf("\nEnter no.of pages : ");</span>
		<span id="scanPage">scanf("%d", & s[i].pages);</span>
		<span id="printPrice">printf("\nEnter price : ");</span>
		<span id="scanPrice">scanf("%d", & s[i].price);</span>
 	}
 	<div id="forLoop2" style="display: inline-block;">for(<span
					id="intial2">i = 0;</span> <span id="condition2">i < 4;</span> <span
					id="inc2">i++</span>)</div> {
		<div id="display" style="display: inline-block">printf("Name: %s \t Price: %d \t Pages: %d",
		s[i].name, s[i].price, s[i].pages);</div>
 	}
<span id="termination">}</span></pre>	
	</div>
	<div>
		<div class='col-xs-8 margin-top20'>
			<div class="col-xs-12 div-border opacity00" id="animationDiv">

				<div style="padding: 0;" class="col-xs-12 text-center">
					<div class="col-xs-3 pink-color"><b>s[0]</b></div>
					<div class="col-xs-3 blue-color"><b>s[1]</b></div>
					<div class="col-xs-3 green-color"><b>s[2]</b></div>
					<div class="col-xs-3 red-color"><b>s[3]</b></div>
				</div>
				<div class='col-xs-12' style='padding: 0;'>
					<div
						class="col-xs-3 table-border padding0 margin-bottom20 no-right-border">

						<table class="table margin-top20">
							<tr class="no-border">
								<td class="no-border pink-color">name</td>
								<td class="no-border pink-color">price</td>
								<td class="no-border pink-color">pages</td>
							</tr>
							<tr>
								<td class="table-border pink-color opacity00 no-left-border" id="name1">0</td>
								<td class="table-border pink-color" id="price1"></td>
								<td class="table-border pink-color no-right-border" id="pages1"></td>
							</tr>
						</table>
					</div>
					<div
						class="col-xs-3 table-border padding0 margin-bottom20 no-right-border">
						<table class="table margin-top20">
							<tr class="no-border">
								<td class="no-border blue-color">name</td>
								<td class="no-border blue-color">price</td>
								<td class="no-border blue-color">pages</td>
							</tr>
							<tr>
								<td class="table-border blue-color opacity00 no-left-border" id="name2">0</td>
								<td class="table-border blue-color" id="price2"></td>
								<td class="table-border blue-color no-right-border" id="pages2"></td>
							</tr>
						</table>
					</div>
					<div
						class="col-xs-3 table-border padding0 margin-bottom20 no-right-border">
						<table class="table margin-top20">
							<tr class="no-border">
								<td class="no-border green-color">name</td>
								<td class="no-border green-color">price</td>
								<td class="no-border green-color">pages</td>
							</tr>
							<tr>
								<td class="table-border green-color opacity00 no-left-border" id="name3">0</td>
								<td class="table-border green-color" id="price3"></td>
								<td class="table-border green-color no-right-border" id="pages3"></td>
							</tr>
						</table>
					</div>
					<div class="col-xs-3 table-border padding0 margin-bottom20 ">
						<table class="table margin-top20">
							<tr class="no-border">
								<td class="no-border red-color">name</td>
								<td class="no-border red-color">price</td>
								<td class="no-border red-color">pages</td>
							</tr>
							<tr>
								<td class="table-border red-color opacity00 no-left-border"
									id="name4">0</td>
								<td class="table-border red-color" id="price4"></td>
								<td class="table-border red-color no-right-border" id="pages4"></td>
							</tr>
						</table>
					</div>
				</div>
				<div style="padding: 0;"
					class="col-xs-1 text-center margin-bottom20 opacity00" id="memoryOfi">
					<span><b>i </b></span>
					<table class="table"><tbody><tr><td class="table-border opacity00" id="ivalue">0</td></tr></tbody></table>
				</div>
			</div>
		</div>
		<div class="col-xs-6 margin-top20 output-div opacity00 padding0" id="outputDiv">
			<div class="output-console-title-bar"><span class="title">Output</span></div>
			<div class="output-console-body"><span class="output" id="output"></span></div>
		</div>
		<div class="col-xs-6 margin-top20 text-center">
			<span class="btn btn-warning opacity00" id="restart"><i class="fa fa-refresh"></i> Restart</span>
		</div>
	</div>
<script>
$(document).ready(function() {
	arrayOfStructure();
});
</script>
</body>
</html>