<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Josephus problem</title>
<link href="/css/bootstrap.min.css" rel="stylesheet" >
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/jquery-ui.css" rel="stylesheet" >
<link href="/css/animate.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/jquery.scrollTo.js"></script>
<script src="/secure/lang/ds/js/josephus.js"></script>
<style type="text/css">
.padding0 {
	padding: 0px;	
}

.margin-top-25 {
	margin-top: 25px;
}

.border-css {
	border: 1px solid gray;
	padding: 8px;
	min-height: 150px;
}

.margin-top-20 {
	margin-top: 20px;
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
	josephusProgramReady();
});
</script>
<div class="col-xs-12 padding0 margin-top-25">
	<div class="col-xs-12 text-center padding0">
		<h1 class="label ct-demo-heading text-center">Josephus Problem</h1>
	</div>
	<div class="col-xs-12 margin-top-25">
		<div class="col-xs-6 border-css margin-top-25 padding0">
			<div class="col-xs-12 padding0" id="kingWithSoldiers" style="margin-top: 15px; margin-bottom: 15px;">
				<div class="col-xs-12 padding0">
					<div class="col-xs-4 col-xs-offset-4 padding0">
						<div class="col-xs-12">
							<div class="col-xs-2 text-center margin-top-20"><i class="fa fa-check"></i><i class="fa fa-user" id="user10"></i></div>
							<div class="col-xs-2 col-xs-offset-3 text-center"><i class="fa fa-check"></i><i class="fa fa-user" id="user1"></i></div>
							<div class="col-xs-2 col-xs-offset-2 text-center margin-top-20"><i class="fa fa-check"></i><i class="fa fa-user" id="user2"></i></div>
						</div>
					</div>
				</div>
				<div class="col-xs-12 padding0">
					<div class="col-xs-6 col-xs-offset-3 padding0">
						<div class="col-xs-12">
							<div class="col-xs-2 text-center margin-top-20 padding0"><i class="fa fa-check"></i><i class="fa fa-user" id="user9"></i></div>
							<div class="col-xs-2 col-xs-offset-8 text-center margin-top-20 padding0"><i class="fa fa-user" id="user3"></i><i class="fa fa-check"></i></div>
						</div>
					</div>
				</div>
				<div class="col-xs-12 padding0 text-center"><i class="fa fa-male fa-2x" style="color: blue;" id="king"></i></div>
				<div class="col-xs-12 padding0">
					<div class="col-xs-6 col-xs-offset-3 padding0">
						<div class="col-xs-12">
							<div class="col-xs-2 text-center margin-top-20 padding0"><i class="fa fa-check"></i><i class="fa fa-user" id="user8"></i></div>
							<div class="col-xs-2 col-xs-offset-8 text-center margin-top-20 padding0"><i class="fa fa-user" id="user4"></i><i class="fa fa-check"></i></div>
						</div>
					</div>
				</div>
				<div class="col-xs-12 padding0 margin-top-20">
					<div class="col-xs-4 col-xs-offset-4 padding0">
						<div class="col-xs-12">
							<div class="col-xs-2 text-center"><i class="fa fa-user" id="user7"></i><i class="fa fa-check"></i></div>
							<div class="col-xs-2 col-xs-offset-3 text-center margin-top-20"><i class="fa fa-user" id="user6"></i><i class="fa fa-check"></i></div>
							<div class="col-xs-2 col-xs-offset-2 text-center"><i class="fa fa-user" id="user5"></i><i class="fa fa-check"></i></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</body>
</html>