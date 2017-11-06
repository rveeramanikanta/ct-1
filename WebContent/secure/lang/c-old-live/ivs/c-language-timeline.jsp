<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>c-language-timeline</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/introjs-ct.css">

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<script src="/secure/lang/c/js-min/clt.min.js"></script>
<style type="text/css">
.timeline {
	list-style: outside none none;
	margin: 20% 5% 0;
	position: relative;
}

.timeline li {
	background: white;
	border: 8px solid #ECA336;
	border-radius: 16px;
	height: 30px;
	position: absolute;
	width: 30px;
	z-index: 1;
	border: 8px solid #ECA336;
}

.year {
	background-color: lemonchiffon;
	border: 1px solid gray;
	border-radius: 20px;
	font-weight: bold;
	left: -38px;
	padding-top: 3px;
	position: absolute;
	text-align: center;
	top: 25px;
	width: 90px;
}

.animation-bar {
	width: 0%;
	border: 2px solid #ECA336;
	margin: 0 6%;
}

.popover-content {
	color: black;
	background-color: white;
}

.bgColor-lightgray {
	background-color: #E9E9E9;
}

.popover {
	width: 200px;
}

.li1::before, .li2::before, .li3::before, 
.li4::before, .li5::before {
	border-left: 4px solid #ECA336;
	bottom: 100%;
	content: " ";
	height: 0px;
	left: 37% !important;
	position: absolute;
	-webkit-transition: all 2s ease-in-out;
	-moz-transition: all 2s ease-in-out;
	-o-transition: all 2s ease-in-out;
}

.animate.li1::before, .animate.li2::before, .animate.li3::before,
	.animate.li4::before, .animate.li5::before {
	height: 50px;
}

.next-btn {
	background-color: green !important;
	border-radius: 3px !important;
	color: white !important;
	font: 11px sans-serif;
	padding: 3px !important;
}

.developer-div {
	bottom: 200px;
	position: relative;
	right: 44px;
	width: 110px;
	height: 150px;
	text-align: center;
}

.li1 .developer-div, .li2 .developer-div {
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 20px;
}

.developer-name {
	font-weight: bold;
}

.image {
	width: 100px;
}

.font-weight-bold {
	font-weight: bold;
}
</style>
<script type="text/javascript">
	$(document).ready(function() {
		cLanguageTimelineReady();
	});
</script>
</head>
<body>
	<div class="text-center">
		<h4>
			<span class="label ct-demo-heading">Evolution of C Programming Language</span>
		</h4>
	</div>
	<div class="col-xs-12">
		<ol class="timeline">
			<li style="left: 1%;" class='li1'><span class='year'
				data-trigger='focus' data-animation='false' rel='popover'
				data-placement='bottom' data-toggle='popover'
				data-content='<div>ALGOL60(Algorithmic language)
was developed by an International Committee in 1960.</div>'>1960</span>
				<div class='developer-div'>
					<div class='developer-name hide'>ALGOL60</div>
				</div></li>
			<li style="left: 24%;" class='li2 hide'><span class='year'
				data-trigger='focus' data-animation='false' rel='popover'
				data-placement='bottom' data-toggle='popover'
				data-content='<div>CPL(Combined Programming Language)
was developed jointly by University of Cambridge and University of London in 1963.</div>'>1963</span>
				<div class='developer-div'>
					<div class='developer-name hide'>CPL</div>
				</div></li>
			<li style="left: 48%;" class='li3 hide'><span class='year'
				data-trigger='focus' data-animation='false' rel='popover'
				data-placement='bottom' data-toggle='popover'
				data-content='<div>BCPL(Basic CPL)
was developed by Martin Richards in 1967.</div>'>1967</span>
				<div class='developer-div'>
					<img src="../images/martin-richards.jpg" class='image hide'>
					<div class='developer-name hide'>Martin Richards</div>
				</div></li>
			<li style="left: 72%;" class='li4 hide'><span class='year'
				data-trigger='focus' data-animation='false' rel='popover'
				data-placement='bottom' data-toggle='popover'
				data-content='<div>Ken Thompson developed the <b>B</b> programming language at Bell Labs in 1970.</div>'>1970</span>
				<div class='developer-div'>
					<img src="../images/ken-thompson.jpeg" class='image hide'>
					<div class='developer-name hide'>Ken Thompson</div>
				</div></li>
			<li style="left: 96%;" class='li5 hide'><span class='year'
				data-trigger='focus' data-animation='false' rel='popover'
				data-placement='bottom' data-toggle='popover'
				data-content='<div>Dennis Ritchie developed the C programming language at Bell Labs in 1972.</div>'>1972</span>
				<div class='developer-div'>
					<img src="../images/dennis-ritchie.jpeg" class='image hide'>
					<div class='developer-name hide'>Dennis Ritchie</div>
				</div></li>
		</ol>
		<div class='animation-bar'></div>
		<div class="text-center" style="margin-top: 250px;">
			<a class="btn btn-warning hide" id="restart">&nbsp;Restart</a>
		</div>
	</div>
</body>
</html>
