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
<link href="/css/animate.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/data-structures-css.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/secure/lang/c/js-min/poswd.min.js"></script>
<title>Processing of Structure with Dot Operator</title>
<style>

.border-div {
	border:2px solid gray;
	border-radius: 11px;
}

.information-div {
	background-color: rgb(243, 235, 235);
	border-radius: 10px;
	font-family: monospace;
	z-index: 9999999;
	border-radius: 5px;
	border: 1px solid gray; 
}

.table-border {
	border: 2px solid gray;
	text-align: center;
	width: 12%;
	height: 26px;
}

.output-table-border {
	border: 2px solid transparent;
	text-align: center;
	width: 12%;
	height: 26px;
}

.creampretab4 {
	-moz-tab-size: 3;
	tab-size: 3;
	background-color: lavender !important;
	font-size: 11px;
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
	white-space: normal;
}

.output {
	font-size: 14px;
	font-weight: bold;
}

.margin-top20 {
	margin-top: 20px;
}

.cursor-wait {
    cursor: wait !important;
}

.padding3 {
	padding: 3px 9px 0 3px;
	outline: none;
}

.ct-code-b-green {
	color: green;
}

.ct-code-b-red {
	color: red;
	font-weight: bold;
}

.user-btn {
	background: green;
	margin: 0 !important;
}

.introjs-tooltip {
	min-width: 300px;
}

.td-css {
	text-align: center;
	color: fuchsia;
	font-weight: bold;
}

td {
	text-align: center;
}

.introjs-fixParent {
	position: relative !important;
}
</style>
</head>
<body>
	<script>
		/* Modification done by Durga Mahesh (17-08-17)
		Change the error color form white to red */
		$(document).ready(function() {
			processingOfStructureWithDotReady();
		});
	</script>

	<h2 class="text-center">
		<span class="label label-default ct-demo-heading" id = "heading">Processing of structure using dot(.) operator</span>
	</h2>
	<div id="informationDiv" class="col-xs-offset-2 col-xs-8 information-div" style="margin-top: 7px;">
		<div class="col-xs-12" id="text">
			<ul>
				<li id="li1" class="opacity00"><span class="ct-code-b-green">Processing of structure</span> refers to the ways of accessing
					 the members of a structure.</li>
				<li id="li2" class="opacity00">There are <span class="ct-code-b-green">two</span> operators defined for accessing
					 the members of a structure, based on whether it is a <span class="ct-code-b-green">member</span> or a 
					 <span class="ct-code-b-green">pointer member</span>.</li>
				<ol>
					<li id="li3" class="opacity00"><b class="ct-blue-color">Dot(.) operator</b>: This is used to access a member of a
						 <span class="ct-code-b-green">structure</span>.<br>
						 &emsp; <b>Syntax</b> : <span class="ct-code-b-green">struct_variable . member</span></li>
					<li id="li4" class="opacity00"><b class="ct-blue-color">Arrow(->) operator</b>: This is used to access a member of a
						 <span class="ct-code-b-green">structure pointer</span> (To be discussed later).</li>
				</ol>
			</ul>
		</div>
	</div>
	<div class="col-xs-12 margin-top20">
		<div class="col-xs-5">
			<pre class="code-div creampretab4 opacity00" id="codeDiv">
<span id="declaration"><b class="ct-code-b-green">struct</b> employee_record {
	char name [20];
	int age;
	int sal;
};</span>
main() {
	<span id="variableDefinition"><b class="ct-code-b-green ">struct</b> employee_record <span
			id="emp1">emp1</span>, <span id="emp2">emp2</span>, <span id="emp3">emp3</span>;</span>

	<span id="firstRecord">printf("Enter details of first record name, age and salary \n");</span>
	<span id="name1">printf("Enter name:");</span>
	<span id="readName1">gets(emp1.name);</span>
	<span id="age1">printf("\nEnter age:");</span>
	<span id="readAge1">scanf("%d", &emp1.age);</span>
	<span id="salary1">printf("\nEnter salary:");</span>
	<span id="readSalary1">scanf("%d", &emp1.sal);</span>
	
	<span id="secondRecord">printf("Enter details of second record name, age and salary \n");</span>
	<span id="name2">printf("Enter name:");</span>
	<span id="readName2">gets(emp2.name);</span>
	<span id="age2">printf("\nEnter age:");</span>
	<span id="readAge2">scanf("%d", &emp2.age);</span>
	<Span id="salary2">printf("\nEnter salary:");</Span>
	<span id="readSalary2">scanf("%d", &emp2.sal);</span>
	
	<span id="thirdRecord">printf("Enter details of third record name, age and salary \n");</span>
	<span id="name3">printf("Enter name:");</span>
	<span id="readName3">gets(emp3.name);</span>
	<span id="age3">printf("\nEnter age:");</span>
	<span id="readAge3">scanf("%d", &emp3.age);</span>
	<span id="salary3">printf("\nEnter salary:");</span>
	<span id="readSalary3">scanf("%d", &emp3.sal);</span>
	<span id="titles">printf("\n%7s%15s%15s","AGE","Name","SALARY");</span>
	<span id="printRecord1">printf("\n%8d%15s%15d", emp1.age, emp1. name, emp1.sal);</span>
	<span id="printRecord2">printf("\n%8d%15s %15d", emp2.age, emp2.name, emp2.sal);</span>
	<span id="printRecord3">printf("\n%8d%15s%15d", emp3.age, emp3.name, emp3.sal);</span>
}</pre>
		</div>
		<div class="col-xs-6">
			<div class="col-xs-12">
				<div class="col-xs-offset-3 col-xs-6 border-div opacity00" id="animationDiv1">
					<div class="text-center" style="color: blue"><b>emp1</b></div>
					<table align="center">
						<tr><td>name</td><td>age</td><td>sal</td></tr>
						<tr>
							<td class="table-border" id="s1name"></td>
							<td class="table-border" id="s1age"></td>
							<td class="table-border" id="s1sal"></td>
						</tr>
						<tr><td class="td-css">1044</td><td class="td-css">1046</td><td class="td-css">1048</td></tr>

					</table>
				</div>
			</div>
			<div class="col-xs-12 margin-top20">
				<div id="animationDiv2" class="col-xs-offset-3 col-xs-6 border-div opacity00">
					<div class="text-center" style="color: blue"><b>emp2</b></div>
					<table align="center">
						<tr><td>name</td><td>age</td><td>sal</td></tr>
						<tr>
							<td class="table-border" id="s2name"></td>
							<td class="table-border" id="s2age"></td> 
							<td class="table-border" id="s2sal"></td> 
						</tr>
						<tr><td class="td-css">3470</td><td class="td-css">3490</td><td class="td-css">3492</td></tr>
					</table>
				</div>
			</div>
			<div class="col-xs-12 margin-top20">
				<div id="animationDiv3" class="col-xs-offset-3 col-xs-6 border-div opacity00">
					<div class="text-center" style="color: blue"><b>emp3</b></div>
					<table align="center">
						<tr><td>name</td><td>age</td><td>sal</td></tr>
						<tr>
							<td class="table-border" id="s3name"></td>
							<td class="table-border" id="s3age"></td>
							<td class="table-border" id="s3sal"></td>
						</tr>
						<tr><td class="td-css">4526</td><td class="td-css">4546</td><td class="td-css">4548</td></tr>
					</table>
				</div>
			</div>
		</div>
		<div class="col-xs-6 margin-top20 output-div opacity00" id="outputDiv" style="padding: 0">
			<div class="output-console-title-bar"><span class="title">Output</span></div>
			<div class="output-console-body"><span class="output" id="output"></span></div>
		</div>
		<div class="col-xs-6 margin-top20 text-center">
			<span class="btn btn-warning opacity00" id="restart"><i class="fa fa-refresh"></i> Restart</span>
		</div>
	</div>

</body>
</html>