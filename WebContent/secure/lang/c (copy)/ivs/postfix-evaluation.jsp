<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Postfix Evaluation</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link href="/css/font-awesome.min.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="js-min/pe.min.js"></script>



<style type="text/css">
.margin-top-25 {
	margin-top: 25px;
}

.margin-top-15 {
	margin-top: 15px;
}

.padding0 {
	padding: 0;
}

.ct-code-blue-color {
	font-family: monospace;
	font-weight: bold;
	color: blue;
}

.table-css {
	width: 100%;
	text-align: center;
	table-layout: fixed;
}

.td-css {
	padding: 4px;
	text-align: center;
	border: 1px solid black;
	color: blue;
	height: 30px;
	min-width: 45px;
}

.editable {
	outline: none;
}

.main-box {
	position: relative;
	font-family: monospace;
	border: 1px solid lightpink;
	display: inline-block;
}

.stack-div {
	border-bottom: 1px solid lightpink;
	border-left: 1px solid lightpink;
	border-right: 1px solid lightpink;
	min-height: 40px;
	padding: 5px;
}

.ct-red {
	color: red;
}

.min-height-css {
	min-height: 40px;
}

.ui-effects-transfer {
	border: 1px solid #003399;
	z-index: 9999999;
}

.z-index {
	z-index: 9999999;
	background: white;
	position: relative;
	padding: 4px;
}

.box {
	border-radius: 4px;
	box-shadow: 0 0 9px rgba(0, 0, 0, 0.3);
	display: inline-block;
	height: 30px;
	padding: 4px;
	position: relative;
	min-width: 30px;
	text-align: center;
}

.infix-box {
	background: #afeeee; 
}

.operand-box {
	background: lightgreen;
}

.operator-box {
	background: #EFB6AF;
}

.padding-5 {
	padding: 5px;
}

.step-arrow {
	background-color: #a1126c;
	height: 30px;
	line-height: 30px;
	display: inline-block;
	border-bottom-left-radius: 8px;
	border-top-left-radius: 8px;
}

.step-arrow::after {
	color: #a1126c;
	border-left: 15px solid;
	border-top: 15px solid transparent;
	border-bottom: 15px solid transparent;
	content: ' ';
	position: absolute;
}

.step-arrow-text {
	color: white;
	padding-left: 5px;
	font-family: monospace;
	font-size: 12px;
}

.padding-box {
	padding: 3px;
}

.introjs-fixParent {
	position: relative !important;
}

.user-btn {
	background: green;
}

.padding {
	padding: 8px;
}

.box-border {
	border: 1px solid lightpink;
}

.display-css {
	display: inline-block;
	position: relative;
}

.tooltip-min-width {
	min-width: 110px;
}

.scroll-div  {
	overflow-y: auto;
	display: inline-block;
	width: 100%;
}

.height-css {
	height: 200px;
}

span, .fa {
	position: relative;
}

.restrt-btn {
	margin: 0 !important;
	background: orange;
}
</style>

<body>
	<div class="margin-top-25 text-center">
		<h4 class="label ct-demo-heading">Postfix Evaluation</h4>
	</div>
	<div class="col-xs-12 margin-top-25">
		<div class="col-xs-12 padding0">
			<div class="col-xs-8 col-xs-offset-2 text-center padding0" style="font-family: monospace;">
				<div class="col-xs-12 padding0" id="enterExpression">
					<div class="col-xs-5 padding0" style="margin-top: 12px;">Please enter PostFix expression:</div> 
					<div class="col-xs-7 padding0">
						<table id="enterTable" style="margin-top: 7px;" class="table-css">
							<tr id="tableRow">
								<%for (int i = 1; i <= 15; i++) {%>
									<td contenteditable="false" spellcheck="false" maxlength="1" class="editable td-css" id="enterText<%=i%>"></td>
								<%}%>
							</tr>
						</table>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-12 padding0 margin-top-25">
			<div class="col-xs-12 padding0">
				<div class="col-xs-4 padding0 opacity00" id="postFixDiv">
					<div class="text-center ct-code-blue-color">Input</div>
					<div class="main-box">
						<div class="text-center opacity00" id="postFixTable" style="padding: 8px;">
							<table class="table-css">
								<tr id="postFixTableRow" class="opacity00"></tr>
								<tr id="arrows"></tr>
							</table>
						</div>
						<div id="postFixAdd" style="position: relative;"></div>
					</div>
				</div>
				<div class="col-xs-2 col-xs-offset-1 padding0 opacity00" id="stackParentDiv">
					<div class="col-xs-12 padding0">
						<div class="text-center"><span id="stackSpan" class="box operand-box opacity00"></span></div>
						<div class="col-xs-6 col-xs-offset-3 padding0 text-center margin-top-25">
							<div class="stack-div" id="stackDiv"></div>
							<div class="text-center ct-code-blue-color" style="margin-top: 8px;">Operand Stack</div>
						</div>
					</div>
				</div>
				<div class="col-xs-3 col-xs-offset-1 padding0">
					<div class="col-xs-12 padding0 hide" id="outputDiv">
						<div class="text-center ct-code-blue-color">Output</div>
						<div class="col-xs-12 padding0" style="border: 1px solid lightpink;">
							<div id="outerExpressionDiv" style="padding: 8px; height: 50px;"></div>
						</div>
					</div>
					<div class="col-xs-12 margin-top-15 padding0">
						<div class="col-xs-10 col-xs-offset-1 opacity00 box-border" id="explanation" style="height: 125px;">
							<div id="expalinDiv" style="padding: 8px;"></div>
						</div>
					</div>
					<div class="col-xs-12 margin-top-15 padding0 opacity00 box-border" id="calculationParent" style="height: 150px;">
						<div id="calculation" style="padding: 8px;"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-12 text-center margin-top-25">
			<span id="restart" class="btn btn-warning opacity00">Restart</span>
		</div>
	</div>
<script type="text/javascript">

$(document).ready(function() {
	postfixEvaluationReady();
});

</script>
</body>
</html>