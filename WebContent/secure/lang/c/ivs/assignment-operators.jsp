
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome-animation.min.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>

<script src="/secure/lang/c/js-min/asio.min.js"></script>

<title>assignment-operators</title>
<style type="text/css">
.border {
	border: 2px solid gray;
	border-radius: 15px;
	min-height: 120px;
}

#assignSpan {
	display: inline-block;
	width: 65%;
}

#animationDiv {
	border: 2px solid gray;
	border-radius: 15px;
}

#operatorAnimation {
	border: 1px solid gray;
	border-radius: 10px;
	height: 240px;
	margin-bottom: 10px;
	padding: 3px;
}

#animationMemory {
	border: 2px solid gray;
	border-radius: 10px;
	height: 97px;
	text-align: center;
}

#animationExp {
	height: 95px;
}

#allocate1, #allocate2 {
	display: inline-block;
	height: 28px;
}

.background-color {
	background-color: lavender;
	font-family: monospace;
}

.margin-top20 {
	margin-top: 20px;
}


.position-relative {
	position: relative;
	display: inline-block;
} 

.next-button {
	background-color: green !important;
	border: 1px solid #d4d4d4;
	border-radius: 0.2em;
	/*color: #333;
    cursor: pointer;*/
	display: inline-block;
	font: 11px sans-serif;
	padding: 3px;
}

.display-none {
	display: none;
}

.padding0 {
	padding: 0px;
}

.inputWidth {
	width: 17%;
	text-align: center;
}

.margin-top06 {
	margin-top: 6px;
}

.length-error-text {
	color: red;
}

.opacity00 {
	opacity: 0;
}

.memory-blk {
	background-color: lightblue;
	border: 1px solid blue;
	border-radius: 4px;
	display: inline-block;
	box-shadow: 2px 2px 0 0 blue;
	height: 28px;
	margin-left: 5px;
	width: 28px;
}

.margin-top10 {
	margin-top: 10px;
}

.margin-top27 {
	margin-top: 27px;
}

.layer {
	border: 2px solid red;
	display: inline-block;
	height: 40px;
	position: relative;
	text-align: center;
	width: 75px;
	z-index: 10000000;
}

.memory-based {
	border: 1px solid gray;
	display: inline-block;
	height: 21px;
	position: unset;
	width: 34px;
}

.panel {
	background-color: transparent;
	border-color: 2px solid rgb(51, 102, 255) !important;
	width: 76px !important;
	display: inline-block;
	position: relative;
	border-radius: 7px;
	/* z-index: 999999; */
}

.panel-primary>.panel-heading {
	border-color: rgb(51, 102, 255);
	color: #fff;
	/* padding: 5px 9px; */
	padding: 0;
	text-align: center;
	font-weight: bold;
	font-family: monospace;
}

.panel-primary {
	border-color: #337ab7;
	border-width: 2px;
}

.panel-body {
	height: 36px !important;
	background-color: rgba(244, 251, 252, 0.85);
	text-align: center;
	padding: 10px;
}

.panel-body>span {
}

.zIndex {
	z-index: 99999999;
	position: relative;
}

.font-size {
	font-size: 8px;
}

.expXY {
	border: 2px solid gray;
    height: 96px;
	border-radius: 5px;
}

.margin-left23 {
	margin-left: 23px;
}

.zIndex {
	z-index: 9999999;
}

#operatorExpX > div, #operatorExpY > div {
    margin-left: 65px;
}

.ct-code-b-green {
	color: green;
}

y {
	color: yellow;
	font-weight: bold;
}
</style>
<script type="text/javascript">
	$(document).ready(function() {
		assignmentOperatorsReady();	
	})
</script>
</head>
<body>
		<h2 class="text-center">
			<span class="label label-default ct-demo-heading">Assignment Operators</span>
		</h2>
		<!-- <div class="margin-top20 text-center">
			<span class="btn btn-warning opacity00" id="restart">Restart</span>
		</div> -->
		<div id="informationDiv" class="col-xs-offset-2 col-xs-8 border margin-top20 background-color"></div>
		<div class="col-xs-12">
			 <div id="animationDiv" class="col-xs-offset-3 col-xs-6 border margin-top20">
		<div class="col-xs-12 padding0">
			<div  class="margin-top06 text-center"><div id="assignSpan"><span>int&nbsp;</span><span>x</span> = <span><input id="firstNum" type="text" placeholder="Number" contenteditable="true"  class="inputWidth empty" name="usrname" maxlength="2"></span>
			 	<!-- <div id="yInitialize" class="margin-top06"> --><span>, </span><span>y</span> = <span><input id="secondNum" type="text" placeholder="Number" contenteditable="true"  class="inputWidth empty" name="usrname" maxlength="2">;</span></div>
			</div>
				<div class="margin-top06" id='operatorsDiv' >
				<div class="text-center">
					<span>Assignment :</span> <span> <select id="selectAssign">
							<option value="0">--select--</option>
							<option value="1">simple assignment</option>
							<option value="2">compound assignment</option>
							<option value="3">assignment as expression</option>
					</select>
					</span> <span> <select id="selectSub">
							<option value='none'>---</option>
					</select>
					</span>
					 </div>
					<div> 
					<div class="text-center">
						<button id="submit" type="button">&nbsp;evaluation&nbsp;</button>
					</div>
					</div>
				</div>
			</div>
			<div class="col-xs-12">
				<div class="margin-top20 col-xs-12" id="operatorAnimation">
					<div id='animationExp' class="col-xs-12 padding0">
						<div id='memoryText' class="col-xs-12 padding0 margin-left23"></div>
						<div class='col-xs-12 padding0'>
							<div id='operatorExpX' class='col-xs-offset-1 col-xs-5 padding0 expXY margin-left23 display-none'></div>
							<div id='operatorExpY' class='col-xs-offset-1 col-xs-5 padding0 expXY display-none'></div>
						</div>
					</div>
					<div class='col-xs-12 margin-top27'>
						<div id='animationMemory' class='opacity00 col-xs-offset-2 col-xs-8 padding0'>
							<div class='col-xs-12 margin-top10'>
								<span class='memory-blk display-none'><span class='font-size'>1 byte</span></span>
								<span class='memory-blk display-none'><span class='font-size'>1 byte</span></span>
								<span id="allocate1">
									<span class='memory-blk display-none'><span class='font-size'>1 byte</span></span>
									<span class='memory-blk display-none'><span class='font-size'>1 byte</span></span>
								</span>
								<span class='memory-blk display-none'><span class='font-size'>1 byte</span></span>
								<span class='memory-blk display-none'><span class='font-size'>1 byte</span></span>
								<span class='memory-blk display-none'><span class='font-size'>1 byte</span></span>
								<span class='memory-blk display-none'><span class='font-size'>1 byte</span></span>							
							</div>
													
							<div class='col-xs-12 margin-top10'>
								<span class='memory-blk'><span class='font-size'>1 byte</span></span>
								<span class='memory-blk'><span class='font-size'>1 byte</span></span>
								<span class='memory-blk'><span class='font-size'>1 byte</span></span>
								<span class='memory-blk'><span class='font-size'>1 byte</span></span>
								<span class='memory-blk'><span class='font-size'>1 byte</span></span>
								<span class='memory-blk'><span class='font-size'>1 byte</span></span>
								<span id="allocate2">
									<span class='memory-blk'><span class='font-size'>1 byte</span></span>
									<span class='memory-blk'><span class='font-size'>1 byte</span></span>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>	
		</div>
		 <div class="col-xs-12 margin-top20 text-center">
			<span class="btn btn-warning opacity00" id="restart">Restart</span>
		</div>
	</div>
	
	 <div class="panel panel-primary zIndex opacity00" id='panel1'>
		<div class="panel-heading"><span>x</span><div class='font-size'>(2 bytes)</div></div>
		<div class="panel-body">&nbsp;<span id="xMemory" class='opacity00'></span></div>
	</div>
	<div class="panel panel-primary zIndex opacity00" id='panel2'>
		<div class="panel-heading"><span>y</span><div class='font-size'>(2 bytes)</div></div>
		<div class="panel-body">&nbsp;<span id="yMemory"  class='opacity00'></span></div>
	</div>
</body>
</html>
