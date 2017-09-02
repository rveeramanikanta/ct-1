<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/animate.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/secure/lang/c/js-min/siC.min.js" type="text/javascript"></script>

<title>statements-in-c</title>
<style>
.margin5 {
	margin-top : 5px;
}
.margin20 {
	margin-top : 20px;
}
.margin30 {
	margin-top : 30px;
}
.margin10 {
	margin-top : 10px;
}

.ct-code-b-red {
	font-family: monospace;
	font-weight: bold;
	color: rgb(252, 66, 66);
}

#simpleDiv, #compoundDiv, #controlDiv {
    text-shadow: 0px 2px 4px #000000;
    display: none;
    box-shadow: 0 4px 3px grey;
}

#mainDiv {
	height : 430px;
}

#typingbox {
	padding-top : 5px!important;
	height : 80px;
}

#stateDiv {
	padding-top : 5px!important;
	height : 80px;
}

#simpletextDiv, #statetypeDiv {
	padding-top : 5px!important;
	min-height : 230px;
	margin-top :20px!important;
}

#simDiv {
	padding-top : 5px!important;
	height : 150px;
}

#textDiv {
	padding-top : 5px!important;
	height : 80px;
}

#expDiv {
	height : 20px;
}

#simheading {
	color: red;
	height : 20px;
	font-size : 15px;
}

.color-green {
	color : green;
}

.color-yellow {
	color : yellow;
}
.padding0 {
	padding : 0;
}

pre {
	border : none;
	background-color: cream !important;
	border-radius: none;
	overflow-y: hidden;
}

#textDiv {
	display: inline-block;
}

.ct-code-b-green {
	color: green;
	font-weight : bold;
}

 .position {
	position: relative;
    z-index: 10000000 !important;
}

.margintop5 {
	margin-top: 5px;
}
</style>
</head>

<body>

<script>
	$(document).ready(function() {
		statementsInCReady();
	});
</script>
<div class='ct-box-main'>
	<div class='text-center'>
		<h1 class='label ct-demo-heading'>Statements in C</h1>
	</div>
<br>
	<div class = "main-div col-xs-offset-1 col-xs-9" id = 'mainDiv' >
			<div class = "typing-box col-xs-offset-2 col-xs-8 box-border" id = "typingbox">
			</div>
		<div class = 'row margin5'>
			<div class = "state-div col-xs-4 padding0 " id = 'statetypeDiv'>
				<div class='text-center margin30'>
					<h4 class='label ct-demo-heading  type-name opacity00'>Types of statements</h4>
				</div>
				
				<div class='text-center'>
					<span class="btn btn-warning disabled margin20" id="simpleDiv">Simple Statement </span>
				</div>
				
				<div class='text-center'>
					<span class="btn btn-warning disabled margin20" id="compoundDiv">Compound Statement</span>
				</div>
				
				<div class='text-center'>
					<span class="btn btn-warning disabled margin20" id="controlDiv">Control Statement</span>
				</div>
				
			</div>
			<div class = 'col-xs-8 padding0 visibility-hidden margin10 ' id = 'simpletextDiv'>
				 <pre class = 'col-xs-12' id = 'simDiv'>
				 
				</pre>
				<div class = 'col-xs-12' id = 'textDiv'>
				</div>
		</div>
		</div>
	</div>	
</div>
</body>
</html>