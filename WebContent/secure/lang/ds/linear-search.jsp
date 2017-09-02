<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Linear Search</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/animate.css">

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<script src="/secure/lang/ds/js-min/ls.min.js"></script>

<style type="text/css">
.margin-top-20 {
	margin-top: 20px;	
}

.padding0 {
	padding: 0;
}

.box-border {
	border: 1px solid gray;
	border-radius: 8px;
}

.creampretab4 {
	tab-size: 2;
	-moz-tab-size: 2;
	background-color: lavender !important;
	font-size: 13px;
	font-style: inherit;
	padding: 5px;
	overflow-y: auto;
	white-space: pre;
	word-spacing: -3px;
}

#outputDiv {
	margin-top: 25px;
    padding: 0;
    z-index: 9999999;
}

.output-console-title-bar {
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
}

.output-console-body {
	border-bottom-left-radius: 6px; 
	border-bottom-right-radius: 6px;
	height: 85px;
	padding: 10px;
}

#animationDiv {
	height: 250px;
}

.table-border {
	border: 2px solid;
	padding: 5px;
	font-weight: bold;
}

table {
	table-layout: fixed;
	width: 90%;
}

[contenteditable=true] {
	outline: none;
	font-family: monospace;
}

.errorMsg {
	color: red;
	font-family: monospace;
	font-weight: bold;
}

.ui-effects-transfer {
	border: 2px solid #003399;
	border-radius: 6px;
	position: relative;
	z-index: 9999999;
}

#arrName {
	font-weight: bold;
	font-size: 18px;
}

.zIndex {
	position: relative;
	z-index: 9999999;
}

.fa-check {
	color: green;
}

.fa-times {
	color: red;
}

.user-btn {
	background-color: green;
}

#arrInit > div {
	display: inline-block;
}

.introjs-tooltiptext  pre {
	background-color: #003399;
	border: medium none;
	color: white;
	margin-top: 10px;
	padding: 2px
}

.introjs-tooltip {
	min-width: 300px;
}

.flip-css {
	position: relative;
	display: inline-block;
}

.ct-code-b-red {
	color: red;
	font-family: monospace;
	font-weight: bold;
}

.introjs-tooltiptext br {
	margin-bottom: 10px; 
}
</style>
<script type="text/javascript">

	$(document).ready(function() {
		linearSearchCReady();
	});

</script>
</head>
<body>
	<div class='text-center margin-top-20'>
		<h4 class='label ct-demo-heading' id='demoTitle'>Linear-Search</h4>
	</div>
	
	<div class='col-xs-12 margin-top-20 padding0'>
		<div class='col-xs-6'>
			<pre class='box-border creampretab4' id='cCode'><span id="headerFile"></span>
			
void <span id='main'>main()</span> {
	<div id='arrInit' style='display: inline-block;'>int arr[] = {<div contenteditable=true maxlength='1' id='val0'>5</div>, <div contenteditable=true maxlength='1' id='val1'>8</div>, <div contenteditable=true maxlength='1' id='val2'>1</div>, <div contenteditable=true maxlength='1' id='val3'>4</div>, <div contenteditable=true maxlength='1' id='val4'>7</div>, <div contenteditable=true maxlength='1' id='val5'>6</div>, <div contenteditable=true maxlength='1' id='val6'>2</div>, <div contenteditable=true maxlength='1' id='val7'>10</div>};</div>
	<div id='searchElmtInit' style="display: inline-block;">int searchElement = <div id='searchElmt' contenteditable=true maxlength='1' style="display: inline-block;">4</div>;</div>
	<span id='elmtIndex'>int elementIndex = -1;</span>
	<span id='iInit'>int i, length = 8;</span>
	<span id='forLoop'>for (i = 0; i < length; i++) {
		<span id='ifBlk'>if (searchElement == arr[i]) {
			elementIndex = i;
			break;
		}</span>
	}</span>

	<span id='ifElseBlk'><span>if (<span id='ifCndtn'>elementIndex != -1</span>)</span> {
		<span id='ifBody'></span>
	} else {
		<span id='elseBody'></span>
	}</span>
}
</pre>
		</div>
		<div class='col-xs-6' style="padding-left: 0;">
			<div class='box-border' id='animationDiv'>
				<div class="col-xs-12 margin-top-20 text-center" style="font-family: monospace;">
					<!-- <div id="searchBox" class="col-xs-4 opacity00 padding0">Search element = <span id="searchVal" class="opacity00">5</span></div>
					<div id="elmtIndexBox" class="col-xs-3 col-xs-offset-5 opacity00 padding0" style='text-align: right;'>elementIndex = <span id="elmtIndexVal">-1</span></div> -->
					<span id="searchBox" class="opacity00">Search
						element = <span id="searchVal" class="opacity00">4</span>
					</span> <span id="elmtIndexBox" class="opacity00" style="margin-left: 30px;">elementIndex = <span id="elmtIndexVal">-1</span>
					</span>
				</div>
				
				<div class="col-xs-12 margin-top-20 text-center" style="font-family: monospace;"><span id='iValSpan' class='opacity00' style="font-weight: bold;">i</span></div>
				<div class="col-xs-12 text-center" style="margin-top: 40px;">
					<table class='opacity00' align='center' id='arrTable'>
						<tr id='arrowsTr'>
							<td></td>
							<td><i aria-hidden="true" class="fa fa-arrow-down opacity00"></i></td>
							<td><i aria-hidden="true" class="fa fa-arrow-down opacity00"></i></td>
							<td><i aria-hidden="true" class="fa fa-arrow-down opacity00"></i></td>
							<td><i aria-hidden="true" class="fa fa-arrow-down opacity00"></i></td>
							<td><i aria-hidden="true" class="fa fa-arrow-down opacity00"></i></td>
							<td><i aria-hidden="true" class="fa fa-arrow-down opacity00"></i></td>
							<td><i aria-hidden="true" class="fa fa-arrow-down opacity00"></i></td>
							<td><i aria-hidden="true" class="fa fa-arrow-down opacity00"></i></td>
						</tr>
						
						<tr>
							<td></td>
							<td><span>0</span></td>
							<td><span>1</span></td>
							<td><span>2</span></td>
							<td><span>3</span></td>
							<td><span>4</span></td>
							<td><span>5</span></td>
							<td><span>6</span></td>
							<td><span>7</span></td>
						</tr>
						
						<tr>
							<td id='arrName'>arr : </td>
							<td class='table-border'><span>5</span></td>
							<td class='table-border'><span>8</span></td>
							<td class='table-border'><span>1</span></td>
							<td class='table-border'><span>4</span></td>
							<td class='table-border'><span>7</span></td>
							<td class='table-border'><span>6</span></td>
							<td class='table-border'><span>2</span></td>
							<td class='table-border'><span>10</span></td>
						</tr>
						<tr>
							<td></td>
							<td><i aria-hidden="true" class="fa fa-check hide"></i><i
								class="fa fa-times hide" aria-hidden="true"></i>
							<td><i aria-hidden="true" class="fa fa-check hide"></i><i
								class="fa fa-times hide" aria-hidden="true"></i>
							<td><i aria-hidden="true" class="fa fa-check hide"></i><i
								class="fa fa-times hide" aria-hidden="true"></i>
							<td><i aria-hidden="true" class="fa fa-check hide"></i><i
								class="fa fa-times hide" aria-hidden="true"></i>
							<td><i aria-hidden="true" class="fa fa-check hide"></i><i
								class="fa fa-times hide" aria-hidden="true"></i>
							<td><i aria-hidden="true" class="fa fa-check hide"></i><i
								class="fa fa-times hide" aria-hidden="true"></i>
							<td><i aria-hidden="true" class="fa fa-check hide"></i><i
								class="fa fa-times hide" aria-hidden="true"></i>
							<td><i aria-hidden="true" class="fa fa-check hide"></i><i
								class="fa fa-times hide" aria-hidden="true"></i></td>
						</tr>
					</table>
				</div>
			</div>
			<div id="outputDiv" class='col-xs-offset-2 col-xs-8'>
				<div class="output-console-title-bar">
					<span class="title">Output</span>
				</div><div class="output-console-body"><span id="output"></span>
				</div>
			</div>
		</div>
	</div>
	
	<div class="text-center margin-top-20 col-xs-12">
		<a class="btn btn-warning opacity00" id="restart">&nbsp;Restart</a>
	</div>
</body>
</html>
