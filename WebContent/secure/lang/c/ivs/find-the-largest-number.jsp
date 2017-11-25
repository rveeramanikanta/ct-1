<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src='/js/intro.js'></script>
<script src='/secure/lang/c/js/find-the-largest-number.js'></script>

<title>Insert title here</title>

<style type="text/css">

.margin-top-1 {
	margin-top: 1%;
}

.margin-top-2 {
	margin-top: 2%;
}

.margin-top-5 {
	margin-top: 5%;
}

.ct-b-color-green {
	background-color: green;
}

.ct-color-firebrick {
	color: firebrick;
}

.ct-color-blue {
	color: blue;
}

.user-btn {
	background-color: green;
}

.border {
	background-color: lightgrey;
	border: 1px solid;
	border-radius: 13px;
	height: 115px;
}

.display-inline {
	display: inline-block;
}

.ui-effects-transfer {
	border: 1px solid green;
	z-index: 9999999 !important;
	opacity: 1;
}

.introjs-tooltip {
	min-width: 280px;
}

#infoDiv {
	border: 1px solid;
	/* height: 70px; */
	padding : 10px;
}

#executionTernary {
	border: 1px solid;
	border-radius: 10px;
	padding: 6px;
}

#preCode {
	-moz-tab-size: 4;
	tab-size: 4;
	font-size: 12px;
	padding: 5.5px;
	background-color: #fffae6;
	font-family: monospace;
	border: 1px solid green;
	border-radius: 10px;
}

/* .code-condition {
	border: 1px solid #ccc;
	border-radius: 10px;
	padding: 12px;
} */

.outline-css {
	outline: medium none navy;
}

.z-index9999999 {
	background-color: white;
	z-index: 9999999 !important;
}

.ct-color-orangered {
	color: orangered;
}

.ct-demo-mediumblue {
	color: mediumblue;
}

/* .ct-code-b-turquoise {
	background-color: turquoise;
} */

.ct-demo-green {
	color: green;
}

.ct-color-red {
	color: red;
}

.ct-color-darkmagenta {
	color: darkmagenta;
}

.border-css {
	border: 1px solid;
	border-radius: 12px;
	font-size: 16px;
	padding: 10px;
}

.blinking {
	animation-name: blink;
	animation-duration: 1s;
	animation-iteration-count: 2;
 }

@keyframes blink {
	50% {
		background: turquoise;
	}
}

.blinking-once {
	animation-name: blinking;
	animation-duration: 1s;
	animation-iteration-count: 1;
 }

@keyframes blinking {
	50% {
		background: orange;
	}
}

.blinking-error {
	animation-name: blink-error;
	animation-duration: 1s;
	animation-iteration-count: 2;
 }
 
 .output-console-body {
	background-color: black;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #f0f0f0;
	font-family: monospace;
	font-size: 11px;
	margin-bottom: 14px;
	height: 80px;
	overflow: auto;
	padding: 10px;
	white-space: nowrap;
}

@keyframes blink-error {
	50% {
		background: red;
	}
}

div, span {
	position: relative;
}

.ct-code-b-turquoise {
	color: turquoise;
	font-weight: bold;
}

.ct-code-b-red {
	color: red;
	font-weight: bold;
}

in {
	color: rgb(62, 50, 173);
	font-weight: bold;
}

ink {
	color: 	rgb(255, 0, 191);
}

go {
	color: rgb(134, 19, 19);
	font-weight: bold;
}

g {
	color: 	rgb(64, 130, 65);
	font-weight: bold;
}

r {
	color: red;
}



</style>

</head>
<body>

<div class="col-xs-12">
	<div class="text-center margin-top-2">
		<h3 class='label ct-demo-heading'>
			<span>Largest Number</span>
		</h3>
	</div>
	<div class="col-xs-8 col-xs-offset-2 margin-top-5" id="sampleDiv">
		<div class="col-xs-12">
			<div class="col-xs-7">
<pre id="preCode" class="opacity00 code-condition margin-top-5">
<in>#include</in> <ink>&lt;stdio.h&gt;</ink>
<g>void</g> main() {
    <div id="inputSpan1" class="display-inline"><g>int</g> num1 = <ink><div class="outline-css display-inline" id="input1" MaxLength="3">56</div></ink>;</div>
	<div id="inputSpan2" class="display-inline"><g>int</g> num2 = <ink><div class="outline-css display-inline" id="input2" MaxLength="3">48</div></ink>;</div>
	<div id="inputSpan3" class="display-inline"><g>int</g> num3 = <ink><div class="outline-css display-inline" id="input3" MaxLength="3">65</div></ink>;</div>
	<span id='preLine1'><go>if</go> (<span id='ifCondition1'>num1 > num2</span>)</span> {
		<span id='preLine2'><go>if</go> (<span id='ifCondition2'>num1 > num3</span>)</span> {
			<span id='preLine3'>printf(<ink>"<in>%d</in> is the largest number."</ink>, num1);</span>
		} <go>else</go> {
			<span id='preLine4'>printf(<ink>"<in>%d</in> is the largest number."</ink>, num3);</span>
		}
	} <go>else</go> {
		<span id='preLine5'><go>if</go> (<span id='ifCondition3'>num2 > num3</span>)</span> {
			<span id='preLine6'>printf(<ink>"<in>%d</in> is the largest number."</ink>, num2);</span>
		} <go>else</go> {
			<span id='preLine7'>printf(<ink>"<in>%d</in> is the largest number."</ink>, num3);</span>
		}
	}
}
</pre>
			</div>
			<div class="col-xs-4 col-xs-offset-1" style="margin-left: 4%; margin-top: 13%;">
			<div class="col-xs-12">
				<div id="consoleId" class="center opacity00">
					<div class="output-console-title-bar">
						<span class="title"><b>Console</b></span>
					</div>
					<div class="output-console-body" id="consoleBodyDiv">
						<div class='' id="printText1"></div>
					</div>
				</div>
			</div>
		</div>
		</div>
	</div>
	<div class="col-xs-12">
		<div class="text-center margin-top-2" id="restartDiv">
			<a class="btn btn-warning opacity00" id="restart"><i class="fa fa-refresh"></i>&nbsp;Restart</a>
		</div>
	</div>
</div>
</body>

<script type="text/javascript">
	$(document).ready(function() {
		findTheLargestNumberReady();
	});
</script>
</html>