<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/css/bootstrap.min.css" rel="stylesheet" >
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/jquery-ui.css" rel="stylesheet" >

<script src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="../js/line-testing.js"></script>
<title>Svg Lines</title>
<style type="text/css">
.box-css {
	min-height: 80px;
	border: 1px solid black;
}

.margin-top-50 {
	margin-top: 50px;
}

.svg-css {
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	position: absolute;
}

.svg-line {
	stroke: gray;
	stroke-width: 2; 
	position: relative;
	marker-end: url("#arrowEnd"); 
}
</style>
</head>
<body>
<script type="text/javascript">
	$(document).ready(function() {
		lineTesting();
	});
</script>
	<div class="col-xs-12 margin-top-50">
		<div class="col-xs-6 col-xs-offset-3">
			<div class="col-xs-12 margin-top-50">
				<div class="col-xs-2 col-xs-offset-1 box-css" id="box1"></div>
				<div class="col-xs-2 col-xs-offset-4 box-css" id="box2"></div>
			</div>
			<div class="col-xs-12 margin-top-50">
				<div class="col-xs-2 col-xs-offset-1 box-css margin-top-50" id="box3"></div>
				<div class="col-xs-2 col-xs-offset-4 box-css margin-top-50" id="box4"></div>
			</div>
		</div>
	</div>
</body>
</html>