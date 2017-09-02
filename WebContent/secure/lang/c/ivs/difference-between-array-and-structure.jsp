<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/animate.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/data-structures-css.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript"
	charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/secure/lang/c/js-min/dbaas.min.js"></script>
<title>Difference between array and structure</title>
<style>

.div-border {
	border: 2px solid gray;
	border-radius: 15px;
}

.border-div {
	border: 2px solid gray;
	border-radius: 11px;
}

.margin-top20 {
	margin-top: 20px;
}

.margin-bottom20 {
	margin-bottom: 20px;
}

.table-border {
	border: 2px solid gray;
	text-align: center;
	width: 16%;
	height: 26px;
}

.nextButton {
	background-color: green;
}

.introjs-fixParent {
	position: relative !important;
}

.blinking {
	animation-name: blink;
	animation-duration: 1s;
	animation-iteration-count: 3;
	animation-direction: alternate;
}

@
keyframes blink { 50% {
	background: yellow;
}
}

.z-index-class {
	position: relative;
	z-index: 9999999;
	background-color: white;
}

.declaration-of-structure {
	position: relative;
	display: inline-block;
}

.margin-left20 {
	margin-left: 20px;
}

.green-color {
	color: green;
}

.red-color {
	color: red;
}

.introjs-tooltip-min-width-custom {
	min-width: 110px;
}

</style>
</head>
<body>
<script>
$(document).ready(function() {
	differenceBetweenArrayAndStructure();
});
</script>

	<h2 class="text-center">
		<span class="label label-default ct-demo-heading" id="heading">Difference
			between arrays and structures</span>
	</h2>
	<div class="margin-top20 text-center">
		<span class="btn btn-warning opacity00" id="restart">Restart</span>
	</div>
	<div class="col-xs-offset-1 col-xs-10 margin-top20" id="mainDiv">
		<div class="col-xs-5 div-border opacity00" id="array">
			<h4 class="text-center">
				<span class="label label-default">Array</span>
			</h4>
			<div class="col-xs-offset-2 col-xs-8 margin-top20 opacity00"
				id="declarationOfArray">
				<span>1. int a[5];</span><span class="margin-left20"><i
					class="fa fa-arrow-right red-color"></i></span><span
					class="margin-left20 green-color">declaration</span>
			</div>
			<div class="col-xs-offset-2 col-xs-10 margin-top20 opacity00"
				id="declarationOrInitialization">
				<span>2. int a[5];</span> <span class="margin-left20 red-color"><i
					class="fa fa-arrow-right red-color"></i></span> <span
					class="margin-left20 green-color">declaration & definition</span>
			</div>
			<div class="col-xs-offset-2 col-xs-10 margin-top20">
				<div id="totalInitializationOfArray">
					<div id="firstinitializationOfArray">
						<div id="initializationOfArray" class="opacity00">
							3. int a[5] = <span id="values">{1, 53, 2, 4, 5};</span> <span
								class="margin-left20"><i
								class="fa fa-arrow-right red-color"></i></span> <span
								class="margin-left20 green-color">initialization</span>
						</div>
					</div>
					<div class="margin-left20 opacity00"
						id="anotherInitializationOfArray">
						<div class="ct-code-b-red text-center"
							style="margin-top: 10px; margin-bottom: 10px;" id="or1">OR</div>
						<div id="totalValue1">
							<span id="a0">a[0]</span> = <span id="value0">1</span>;
						</div>
						<div id="totalValue2">
							<span id="a1">a[1]</span> = <span id="value1">53</span>;
						</div>
						<div id="totalValue3">
							<span id="a2">a[2]</span> = <span id="value2">2</span>;
						</div>
						<div id="totalValue4">
							<span id="a3">a[3]</span> = <span id="value3">4</span>;
						</div>
						<div id="totalValue5">
							<span id="a4">a[4]</span> = <span id="value4">5</span>;
						</div>
					</div>
				</div>
			</div>
			<div class="col-xs-12 margin-top20 margin-bottom20 opacity00"
				id="memoryOfArray">
				<div class="col-xs-offset-2 col-xs-10 animated zoomIn"
					id="memoerypoint">
					<span>4. </span> <span>int a[5];</span> <span class="margin-left20">
						<i class="fa fa-arrow-right red-color"></i>
					</span> <span class="green-color margin-left20">memory is allocated
						as</span>
				</div>
				<div style="margin-top: 40px;">
					<table align="center" class="opacity00" id="table1">
						<tbody>
							<tr>
								<th></th>
								<td style="text-align: center;"><span id="a0ofTable">a[0]</span></td>
								<td style="text-align: center;"><span id="a1ofTable">a[1]</span></td>
								<td style="text-align: center;"><span id="a2ofTable">a[2]</span></td>
								<td style="text-align: center;"><span id="a3ofTable">a[3]</span></td>
								<td style="text-align: center;"><span id="a4ofTable">a[4]</span></td>
							</tr>
							<tr>
								<th style="text-align: center;">a[5] =&emsp;</th>
								<td class="table-border"><span id="a0value"></span></td>
								<td class="table-border"><span id="a1value"></span></td>
								<td class="table-border"><span id="a2value"></span></td>
								<td class="table-border"><span id="a3value"></span></td>
								<td class="table-border"><span id="a4value"></span></td>
							</tr>
							<tr>
								<th></th>
								<td style="text-align: center; color: violet;"><span
									id="arrayAddress1">2024</span></td>
								<td style="text-align: center; color: violet;"><span
									id="arrayAddress2">2026</span></td>
								<td style="text-align: center; color: violet;"><span
									id="arrayAddress3">2028</span></td>
								<td style="text-align: center; color: violet;"><span
									id="arrayAddress4">2030</span></td>
								<td style="text-align: center; color: violet;"><span
									id="arrayAddress5">2032</span></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div
				class="col-xs-offset-2 col-xs-8 margin-top20 margin-bottom20 opacity00"
				id="arrayAccess">
				<span>5. printf("%d ", <span id="index">a[0]</span>);
				</span><span class="margin-left20"><i
					class="fa fa-arrow-right red-color"></i></span><span
					class="margin-left20 green-color">accessing</span>
			</div>
		</div>
		<div class="col-xs-offset-1 col-xs-5 div-border opacity00"
			id="structure">
			<h4 class="text-center">
				<span class="label label-default">Structure</span>
			</h4>
			<div class="col-xs-offset-2 col-xs-10 margin-top20">
				<div>
					<div class="declaration-of-structure" id="declarationOfStructure">
						<div id="onlyDeclarationOfStructure"
							class="col-xs-12 declaration-of-structure opacity00">
							<span id="structKeyword">1. struct</span> book { <span
								class="margin-left20"><i
								class="fa fa-arrow-right red-color"></i></span> <span
								class="margin-left20 green-color">declaration</span>
							<div style="margin-left: 30px;">char name[20];</div>
							<div style="margin-left: 30px;">int pages;</div>
							<div style="margin-left: 30px;">float price;</div>
							<div class="margin-left20">};</div>
						</div>
						<div class="col-xs-12 opacity00" id="definitionOfStructure">
							<span>2. struct book a;</span><span class="margin-left20"><i
								class="fa fa-arrow-right red-color"></i></span> <span
								class="margin-left20 green-color">definition</span>
						</div>
					</div>
				</div>
				<div class="col-xs-12" id="totalInitializationOfStructure">
					<div class="opacity00" id="initializationOfStructure">3.
						struct book a={“C Language”, 450, 300.00};</div>
					<div class="opacity00" id="anotherInitializationOfStructure">
						<div class="text-center">
							<span class="ct-code-b-red"
								style="margin-top: 10px; margin-bottom: 10px;" id="or2">OR</span><span
								class="margin-left20"><i
								class="fa fa-arrow-right red-color"></i></span> <span
								class="margin-left20 green-color">initialization</span>
						</div>
						<div class="margin-left20">
							a.name = "<span id="aName">C Language</span>";
						</div>
						<div class="margin-left20">
							a.pages= <span id="aPages">450</span>;
						</div>
						<div class="margin-left20">
							a.price= <span id="aPrice">300.00</span>;
						</div>
					</div>
				</div>
			</div>
			<div class="col-xs-offset-2 col-xs-10 margin-top20 opacity00"
				id="memoryOfStructure">
				<div class="col-xs-12 opacity00" id="point4">
					<span>4. </span> <span>struct book a;</span> <span
						class="margin-left20"> <i
						class="fa fa-arrow-right red-color"></i>
					</span> <span class="green-color" style="margin-left: 10px;">memory
						is allocated as</span>
				</div>
				<div class="col-xs-11 text-center opacity00" id="a">a</div>
				<div
					class="col-xs-offset-2 col-xs-7 border-div margin-bottom20 opacity00"
					id="memory">
					<table align="center">
						<tbody>
							<tr>
								<td style="text-align: center;">name</td>
								<td style="text-align: center;">pages</td>
								<td style="text-align: center;">price</td>
							</tr>
							<tr>
								<td class="table-border" id="pname"></td>
								<td class="table-border" id="ppages"></td>
								<td class="table-border" id="pprice"></td>
							</tr>
							<tr>
								<td style="text-align: center; color: violet" id="address1">1024</td>
								<td style="text-align: center; color: violet;">1044</td>
								<td style="text-align: center; color: violet;">1046</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div
				class="col-xs-offset-2 col-xs-10 margin-top20 margin-bottom20 opacity00"
				id="structureAccess">
				<span>5. printf("%d" ,<span id="dotOperator">a.pages</span>);
				</span> <span class="margin-left20"><i
					class="fa fa-arrow-right red-color"></i></span> <span
					class="margin-left20 green-color">accessing</span>
			</div>
		</div>
	</div>
</body>
</html>