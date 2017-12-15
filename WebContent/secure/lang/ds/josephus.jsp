<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
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

.user-btn {
	background-color: green;
}

y {
	color: yellow;
}

.grn {
	color: green;
} 

.red {
	color: red;
}

.ct-css, y, .kill-val {
	font-weight: bold;
	font-family: monospace;
}

.kill-val {
	background-color: black;
	color: while;
	border: none;
	border-radius: 8px;
	text-align: center;
}

.blink {
	animation-name: blinking;
	animation-duration: 1s;
	animation-iteration-count: 2;
 }

@keyframes blinking {
	100% {color:  red;}
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
		<h1 class="label ct-demo-heading text-center" id="headingSection">Josephus Problem</h1>
	</div>
	<div class="col-xs-12 margin-top-25">
		<div class="col-xs-6 border-css margin-top-25 padding0 opacity00" id="kingSoldierAnimDiv">
			<div class="col-xs-12 padding0" id="kingWithSoldiers" style="margin-top: 15px; margin-bottom: 15px;">
				<div class="col-xs-12 padding0">
					<div class="col-xs-4 col-xs-offset-4 padding0">
						<div class="col-xs-12">
							<div class="col-xs-2 text-center margin-top-20">
								<i class="fa fa-check" id="sym10"></i><i class="val" id="val10">10</i><i class="fa fa-user" id="user10"></i>
							</div>
							<div class="col-xs-2 col-xs-offset-3 text-center">
								<i class="fa fa-check" id="sym01"></i><i class="val" id="val01">1</i><i class="fa fa-user" id="user01"></i>
							</div>
							<div class="col-xs-2 col-xs-offset-2 text-center margin-top-20">
								<i class="fa fa-check" id="sym02"></i><i class="val" id="val02">2</i><i class="fa fa-user" id="user02"></i>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xs-12 padding0">
					<div class="col-xs-6 col-xs-offset-3 padding0">
						<div class="col-xs-12">
							<div class="col-xs-2 text-center margin-top-20 padding0">
								<i class="fa fa-check" id="sym09"></i>&nbsp;<i class="val" id="val09">9</i>&nbsp;<i class="fa fa-user" id="user09"></i>
							</div>
							<div class="col-xs-2 col-xs-offset-8 text-center margin-top-20 padding0">
								<i class="fa fa-user" id="user03"></i>&nbsp;<i class="val" id="val03">3</i>&nbsp;<i class="fa fa-check" id="sym03"></i>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xs-12 padding0 text-center"><i class="fa fa-male fa-2x" style="color: blue;" id="king"></i></div>
				<div class="col-xs-12 padding0">
					<div class="col-xs-6 col-xs-offset-3 padding0">
						<div class="col-xs-12">
							<div class="col-xs-2 text-center margin-top-20 padding0">
								<i class="fa fa-check" id="sym08"></i>&nbsp;<i class="val" id="val08">8</i>&nbsp;<i class="fa fa-user" id="user08"></i>
							</div>
							<div class="col-xs-2 col-xs-offset-8 text-center margin-top-20 padding0">
								<i class="fa fa-user" id="user04"></i>&nbsp;<i class="val" id="val04">4</i>&nbsp;<i class="fa fa-check" id="sym04"></i>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xs-12 padding0 margin-top-20">
					<div class="col-xs-4 col-xs-offset-4 padding0">
						<div class="col-xs-12">
							<div class="col-xs-2 text-center">
								<i class="fa fa-user" id="user07"></i><i class="val" id="val07">7</i><i class="fa fa-check" id="sym07"></i>
							</div>
							<div class="col-xs-2 col-xs-offset-3 text-center margin-top-20">
								<i class="fa fa-user" id="user06"></i><i class="val" id="val06">6</i><i class="fa fa-check" id="sym06"></i>
							</div>
							<div class="col-xs-2 col-xs-offset-2 text-center">
								<i class="fa fa-user" id="user05"></i><i class="val" id="val05">5</i><i class="fa fa-check" id="sym05"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</body>
</html>