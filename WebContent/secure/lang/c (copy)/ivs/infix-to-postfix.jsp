<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="js-min/itp.min.js"></script>


<title>Infix to Postfix</title>
<style>
.margin-top-25 {
	margin-top: 25px;
}

.margin-15 {
	margin: 15px;
}

.padding0 {
	padding: 0;
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

.box {
	border-radius: 4px;
	box-shadow: 0 0 9px rgba(0, 0, 0, 0.3);
	display: inline-block;
	height: 30px;
	padding: 4px;
	position: relative;
	width: 30px;
	text-align: center;
}

.infix-box {
	background: #afeeee; 
}

.operand-box {
	background: yellow;
}

.operator-box {
	background: lightgreen;
}

.ct-code-blue-color {
	font-family: monospace;
	font-weight: bold;
	color: blue;
}

.padding-box {
	 padding: 3px;
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

.user-btn {
	background: green;
}

.ct-red {
	color: red;
	font-family: monospace;
}

.introjs-fixParent {
	position: relative !important;
}

.stack-div {
	border-bottom: 1px solid lightpink;
	border-left: 1px solid lightpink;
	border-right: 1px solid lightpink;
	min-height: 50px;
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

#infixAdd {
	display: inline-block;
	overflow-y: auto;
	width: 100%; 
}

.minheight-css {
	min-height: 20px;
}

.height-css {
	height: 200px;
}

.fa {
	position: relative;
}

.result-css {
	border: 1px solid lightpink;
	padding: 8px;
	font-weight: bold;
}
</style>
</head>
<body>
	<div class="margin-top-25 text-center">
		<h4 class="label ct-demo-heading">Infix to Postfix</h4>
	</div>
	<div class="col-xs-12 margin-top-25">
		<div class="col-xs-12 padding0">
			<div class="col-xs-8 col-xs-offset-2 text-center padding0" style="font-family: monospace;">
				<div class="col-xs-12 padding0" id="EnterExpression">
					<div class="col-xs-5 padding0" style="margin-top: 12px;">Please enter an Infix expression:</div> 
					<div class="col-xs-7 padding0">
						<table id="enterTable" style="margin-top: 7px;" class="table-css">
							<tr id="tableRow">
								<%for (int i = 1; i <= 15; i++) {%>
									<td contenteditable="true" spellcheck="false" maxlength="1" class="editable td-css" id="enterText<%=i%>"></td>
								<%}%>
							</tr>
						</table>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-12 padding0" id="infixStack">
			<div class="margin-15 col-xs-12 padding0">
				<div class="col-xs-4 padding0 opacity00" id="infixExpressionDiv">
					<div class="text-center ct-code-blue-color">Infix Expression</div>
					<div class="main-box">
						<div class="text-center opacity00" id="infixTable" style="padding: 8px;">
							<table class="table-css">
								<tr id="infixTableRow" class="opacity00"></tr>
								<tr id="arrowsTr"></tr>
							</table>
						</div>
						<div id="infixAdd" style="position: relative;"></div>
					</div>
				</div>
				<div class="col-xs-8 padding0">
					<div class="col-xs-12 padding0">
						<div class="col-xs-2 col-xs-offset-3 padding0 opacity00" id="stackParentDiv">
							<div class="col-xs-12 padding0">
								<div class="text-center"><span id="stackSpan" class="box infix-box opacity00"></span></div>
								<div class="col-xs-6 col-xs-offset-3 padding0 text-center">
									<div class="stack-div" id="stackDiv"></div>
									<div class="text-center ct-code-blue-color" style="margin-top: 5px;">Stack</div>
								</div>
							</div>
						</div>
						<div class="col-xs-4 col-xs-offset-2 padding0 opacity00" id="postFixDiv">
							<div class="col-xs-12 padding0">
								<div class="text-center ct-code-blue-color">Postfix Expression</div>
								<div class="col-xs-12 padding0" style="border: 1px solid lightpink;">
									<div id="outerExpressionDiv" style="padding: 8px" class="postfix-values"></div>
								</div>
							</div>
						</div>
					</div>
					<div class="margin-top-25 opacity00 col-xs-6 col-xs-offset-3 result-css" id="result">
						<span class="ct-blue-color">The output postfix expression is :</span> <span id="resultValue"></span>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-12 text-center margin-top-40">
			<span id="restart" class="opacity00 btn btn-warning">Restart</span>
		</div>
	</div>
<script type="text/javascript">

$(document).ready(function() {
	infixToPostfixReady();
});

</script>
</body>
</html>