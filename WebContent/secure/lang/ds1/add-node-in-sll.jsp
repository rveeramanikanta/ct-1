<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Add Node in SLL</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/animate.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/jquery.scrollTo.js"></script>
<script src="/secure/lang/ds1/js/add-node-in-sll.js"></script>
<style type="text/css">
.margin-top25 {
	margin-top: 25px;
}

.padding0 {
	padding: 0;
}

.box-border {
	border: 1px solid black;
	border-radius: 8px;
}

.ct-fonts, y, g, brn, bl {
	font-weight: bold;
	font-family: monospace;
}

.ct-green-color, g {
	color: green;
}

.ct-brown-color, brn {
	color: brown;
}

.ct-blue-color, bl {
	color: blue;
}

y {
	color: yellow;
}

.position-css {
	display: inline-block;
	position: relative;
}


.div-border {
	margin: 0;
	padding: 0;
	width: 50px;
	min-height: 24px;
	text-align: center;
	display: inline-block;
	border: 2px solid gray;
}

.left-radius {
	border-right: none;
	border-color: blue;
	border-radius: 6px 0 0 6px;
}

.right-radius {
	border-color: green;
	border-radius: 0 6px 6px 0;
}

.box {
	min-height: 24px;
	text-align: center;
	border-radius: 6px;
	border: 1px solid green;
}

</style>

</head>
<body>
<script type="text/javascript">
	$(document).ready(function() {
		$('#headingInSll').addClass("zIndex").attr({"data-placement" : "bottom", "title" : "Mallika Balla"}).tooltip();
		addNodesInSLLReady();
	});
	</script>
	<div class="col-xs-12 padding0">
		<div class="text-center margin-top25 col-xs-12 padding0">
			<h1 class="label ct-demo-heading" id="headingInSll">addNode() in SLL</h1>
		</div>
		<div class="col-xs-12 margin-top25">
			<div class="col-xs-7" style="padding-left: 0">
				<div class="col-xs-12 padding0 box" id="codeAndAlgorithmDiv">
					<div class="col-xs-6 padding0" id="algorithmDiv">
						<div class="col-xs-12 box padding0"></div>
					</div>
					<div class="col-xs-6" id="codeDiv" style="padding-left: 5px; padding-right: 0px;">
						<div class="col-xs-12 padding0 box"></div>
					</div>
				</div>
			</div>
			<div class="col-xs-5 box">
				<div class="col-xs-12 margin-top25">
					<div class="col-xs-2 padding0" id="firstNode">
						<div class="text-center col-xs-12 ct-green-color ct-fonts padding0">first</div>
						<div class="col-xs-12 box padding0" id="firstDiv">
							<span id="firstVal" class="ct-green-color ct-fonts position-css opacity00">NULL</span>
						</div>
					</div>
				</div>
				<div class="col-xs-12 margin-top25" id="dynamicNodes"></div>
				<div class="col-xs-12 margin-top25" id="tempDynamicNodes"></div>
			</div>
		</div>
	</div>
</body>
</html>