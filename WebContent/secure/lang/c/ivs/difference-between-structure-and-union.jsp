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
<script src="/js/jquery-ui-all.js" type="text/javascript"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/secure/lang/c/js-min/dbsau.min.js"></script>


<title>difference between structure and union</title>
<style>
.border-div {
	border: 2px solid gray;
	border-radius: 15px;
}

.margin-top20 {
	margin-top: 20px;
}

.margin-left20 {
	margin-left: 20px;
}

.margin-bottom20 {
	margin-bottom: 20px;
}

.nextButton {
	background-color: green;
}

.introjs-fixParent {
	position: relative !important;
}

.red-color {
	color: red;
}

.ct-code-b-green {
	color: green;
}

.table-border {
	border: 2px solid gray;
	text-align: center;
	width: 16%;
	height: 26px;
}

.z-index-class {
	position: relative;
	z-index: 9999999;
	background-color: white;
}

span {
	position: relative;
}

.restart-tooltip-min-width {
	min-width: 110px;
}

#mainDiv {
	font-family: monospace;
	font-size: initial;
}

</style>
</head>
<body>
<script>
$(document).ready(function() {
	diffBetweenStructureAndUnionReady();
});
</script>

	<h2 class="text-center">
		<span class="label label-default ct-demo-heading" id="heading">Difference
			between Structures and Unions</span>
	</h2>
	<div class="margin-top20 text-center">
		<span class="btn btn-warning opacity00" id="restart"><i class='fa fa-refresh'></i> Restart</span>
	</div>
	<div class="col-xs-offset-1 col-xs-11" id="mainDiv">
		<div class="col-xs-5 border-div opacity00 margin-top20" id="structuresDiv">
			<h4 class="text-center">
				<span class="label label-default">structure</span>
			</h4>
			<div class="col-xs-offset-2 col-xs-8 margin-top20" id="structureDeclaration">
				1. <span class="opacity00" id="structureKeyword">struct</span>
				<span class="opacity00" id="structureRemainingDecleration">
						<span>book {</span> 
					<span class="margin-left20"> 
						<i class="fa fa-arrow-right red-color"></i>
					</span> 
					<span class="margin-left20 ct-code-b-green">Declaration</span><br>
							<span>&emsp;&emsp;char series;</span><br>
							<span>&emsp;&emsp;int pages;</span><br>
							<span>&emsp;&emsp;float price;</span><br>
						<span>};</span>
				</span>
			</div>
			<div class="col-xs-offset-2 col-xs-8 margin-top20 opacity00" id="structureDefinition">
				<span>2. struct book b;</span>
				<span class="margin-left20"> 
						<i class="fa fa-arrow-right red-color"></i>
					</span> 
				<span class="margin-left20 ct-code-b-green">Definition</span><br>
			</div>
			<div id ="totalInitialization" class ="col-xs-offset-2 col-xs-10">
				<div class="margin-top20 opacity00" id="structureInitialization">
					<span>3. struct book b = {'A', 300, 150.0};</span>
					<span style="margin-left:10px;"> 
							<i class="fa fa-arrow-right red-color"></i>
						</span> 
					<span class="ct-code-b-green" style="margin-left:8px;">Initialization</span><br>
				</div>
				<div class="col-xs-offset-2 col-xs-10 opacity00" id="anotherInitializationOfStructure">
					<div class="text-center">
						<span class="ct-code-b-red"
							style="margin-top: 10px; margin-bottom: 10px;" id="or2">OR</span>
					</div>
					<div class="margin-left20">
						b.series = '<span id="aName">A</span>';
					</div>
					<div class="margin-left20">
						b.pages= <span id="aPages">300</span>;
					</div>
					<div class="margin-left20">
						b.price= <span id="aPrice">150.0</span>;
					</div>
				</div>
			</div>
			<div class="col-xs-offset-2 col-xs-8 margin-top20 opacity00" id="structureMemory">
				<span>4. struct book b;</span>
				<span class="margin-left20"> 
						<i class="fa fa-arrow-right red-color"></i>
				</span> 
				<span class="margin-left20 ct-code-b-green">memory</span><br>
				<div class="col-xs-11 text-center" id="a">b</div>
				<div class="col-xs-offset-2 col-xs-7 border-div margin-bottom20" id="memory">
					<table align="center">
						<tbody>
							<tr>
								<td style="text-align: center;">series</td>
								<td style="text-align: center;">pages</td>
								<td style="text-align: center;">price</td>
							</tr>
							<tr>
								<td class="table-border"><span id="pname"></span></td>
								<td class="table-border"><span id="ppages"></span></td>
								<td class="table-border"><span id="pprice"></span></td>
							</tr>
							<tr>
								<td style="text-align: center; color: green" id="address1">1054</td>
								<td style="text-align: center; color: green;">1074</td>
								<td style="text-align: center; color: green;">1076</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div class="col-xs-offset-2 col-xs-9 margin-top20 margin-bottom20 opacity00" id="structureAccessing">
				<span>5. </span>
				<span>printf("series: %s", b.series);</span><span class="margin-left20"> 
						<i class="fa fa-arrow-right red-color"></i>
					</span> 
				<span class="margin-left20 ct-code-b-green">Accessing</span>
			</div>
		</div>
		<div class="col-xs-offset-1 col-xs-5 border-div opacity00 margin-top20" id="unionsDiv" style="min-height: 536px;">
			<h4 class="text-center">
				<span class="label label-default">union</span>
			</h4>
			<div class="col-xs-offset-2 col-xs-8 margin-top20" id="unionDeclaration">
				1. <span class="opacity00" id="unionKeyword">union</span> 
				<span class="opacity00" id="unionRemainingDecleration"> 
					<span>book {</span>
					<span class="margin-left20"> 
						<i class="fa fa-arrow-right red-color"></i>
					</span>
					<span class="margin-left20 ct-code-b-green">Declaration</span><br>
					<span>&emsp;&emsp;char series;</span><br> 
					<span>&emsp;&emsp;int pages;</span><br>
					<span>&emsp;&emsp;float price;</span><br>
					<span>};</span>
				</span>
			</div>
			<div class="col-xs-offset-2 col-xs-8 margin-top20 opacity00" id="unionDefinition">
				<span>2. union book b;</span>
				<span class="margin-left20"> 
						<i class="fa fa-arrow-right red-color"></i>
					</span> 
				<span class="margin-left20 ct-code-b-green">Definition</span><br>
			</div>
			<div class="col-xs-offset-2 col-xs-8 margin-top20 opacity00" id="unionInitialization">
				<span>3. union book b;</span>
				<span class="margin-left20"> 
						<i class="fa fa-arrow-right red-color"></i>
					</span> 
				<span class="margin-left20 ct-code-b-green">Initialization</span><br>
				<span id="">&emsp;b.series = '<span id="series">A</span>';</span><br>
				<span id="">&emsp;b.pages = <span id ="pages">300</span>;</span><br>
				<span id="">&emsp;b.price = <span id="price">150.0</span>;</span>
			</div>
			<div class="col-xs-offset-2 col-xs-8 margin-top20 opacity00" id="unionMemory">
				<span>4. union book b;</span>
				<span class="margin-left20"> 
					<i class="fa fa-arrow-right red-color"></i>
				</span> 
				<span class="margin-left20 ct-code-b-green">memory</span><br>
				<div class="col-xs-offset-2 col-xs-10 border-div margin-top20">
					<div class="col-xs-offset-2 col-xs-8" style ="padding: 0px 0px 15px;">
						<table id="table2">
							<tbody>
								<tr>
								<td colspan="4" class="ct-code-b-green" style="text-align: center;">4 bytes</td>
								</tr>
								<tr>
									<td class="table-border"><span id="tabletd1"></span></td>
								</tr>
								<tr>
								<td colspan="4" class="ct-code-b-green opacity00" style="text-align: center;" id="changingBytes">b.series(1 bytes)</td>
								</tr>
							</tbody>
						</table>
					</div>
  				</div>
			</div>
			<div class="col-xs-offset-2 col-xs-9 margin-top20 margin-bottom20 opacity00" id="unionAccessing">
			<span>5. </span>
				<span>printf("series: %s", b.series);</span>
				<span class="margin-left20"> 
						<i class="fa fa-arrow-right red-color"></i>
					</span> 
				<span class="margin-left20 ct-code-b-green">Accessing</span>
			</div>
		</div>
	</div>
</body>
</html>