<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!doctype html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<link rel="stylesheet" href="/css/jquery-ui.css">
<script src="/js/bootstrap.min.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenLite.min.js" type="text/javascript"></script>
<script src="/js/gs/TimelineLite.min.js" type="text/javascript"></script>
<link rel="stylesheet" href="/css/font-awesome.min.css" />
<link href="/css/introjs.css" rel="stylesheet">
<link rel="stylesheet" href="/css/introjs-ct.css" />
<link rel="stylesheet" href="/css/bootstrap.min.css" />
<link rel="stylesheet" href="/css/animate.css" />
<script src="/secure/lang/c/js-min/ci.min.js"></script>
<title>c-identifiers</title>
</head>
<style>
.introjs-tooltiptext br {
	margin: 15px;
}

.introjs.tooltiptext > span {
	display: inline-block;
}

.introjs-tooltip {
	min-width: 280px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.buttons-div {
	margin-top: 10px;
	margin-bottom: 5px;
	text-align: center;
}

.ct-demo-heading {
	background: highlight none repeat scroll 0 0;
    border-radius: 10px;
    font-size: 18px;
    position: relative;
    z-index: 9999999;
}

.ct-pink-color {
	font-family: monospace;
	color: #ed138e;
	outline: none;
}

.ct-code-b-red {
	font-family: monospace;/* border: 1px solid gray; */
	font-weight: bold;
	color: rgb(252, 66, 66);
}

.ct-code-b-yellow {
	font-family: monospace;
	font-weight: bold;
	color: yellow;
}

.ct-code-b-brown {
	font-family: monospace;
	font-weight: bold;
	color: brown;
}

.ct-code-b-green {
	font-family: monospace;
	font-weight: bold;
	color: green;
}

.row {
	margin-right : 0px !important;
}

.next-btn {
	border-radius: 3px !important;
    background-color:green !important;
}


.box-border {
	margin-top: 1%;
	min-height: 490px;
	border: 1px solid gray;
	border-radius: 4px;
	overflow: auto;
	padding-top: 15px;
}

.charset-orderlist {
	margin-top: 10px;
}

.reveal-left {
	position: relative;
	overflow: hidden;
	-moz-animation: reveal-down 1s ease;
	-moz-animation-fill-mode: downwards;
}
.border-class {
	border: 1px solid lightblue;
	border-radius: 4px;
	font-size: 90%;
	padding: 0 4px;
}
.border-class-red {
	border: 1px solid red;
    border-radius: 4px;
    font-size: 90%;
    padding: 0px 4px;
}
.valid-class {
	background-color: white;
    border-radius: 4px;
    padding: 5px;
    position: relative;
    z-index: 9999999;
}

.introjs-button {
    margin: -1px 2px !important;
}

.zIndex {
	z-index: 1000012;
	position: relative;
}

.table-color {
 	background-color: black;
    color: white;
    text-align: center;
}

@-moz-keyframes reveal-down {
	0% {height: 0%;}
	100%   {height: 100%;}
}

.blinking-border-background-red {
	animation-name: blink-border-background-red;
	animation-duration: 1s;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
}

@keyframes blink-border-background-red { 
	50% {
		border-color: red;
		/* background: rgba(255, 0, 0, 0.38); */
	}
}

.blinking-border-background-blue {
	animation-name: blink-border-background-blue;
	animation-duration: 0.5s;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
}

@keyframes blink-border-background-blue { 
	100% {
		border-color: blue;
	}
}

.table > thead > tr > th {
	padding: 5px;
}

</style>
<body>
<div class="col-xs-12">
	<div class="margin-padding-css text-center" >
		<div class="col-xs-1"></div>
		<div class="col-xs-offset-3 col-xs-3">
			<h3><span class="ct-demo-heading label label-default" id="titleName">Identifiers</span></h3>
		</div>
	</div>
	
	<div class="col-xs-12">
		<div class="col-xs-8 col-xs-offset-2 box-border opacity00" id="identifierDiv">			
			<span id="topic"></span>
			<div class="col-xs-12" id="steps">
				<div class="col-xs-12">
					<span id="heading"></span>
					<!-- <span class='introjs-button next-btn opacity00 next-btn1'  onclick='nextActionForExample()'>Next &#8594;</span> -->
				</div>
				<div class="col-xs-12">
					<div class="col-xs-5">
						<span id='exampleDiv'></span>
						<span id='examples'><ul><li id="line1" class="opacity00"><span id='intIdentifierId' class='border-class-red blink'>int</span> 
							<span id='varXId' class='border-class blink1'>x</span> = 3;</li><li id="line2" class="opacity00"> 
							<span id='charIdentifierId' class='border-class-red blink'>char</span>
							<span id='varChId' class='border-class blink1'>ch</span> = 'A';</li>
							<li id="line3" class="opacity00"><span id='intArrIdentifierId' class='border-class-red blink'>int[]</span> 
							<span id='varArrId' class='border-class blink1'>arr</span> = {1, 2, 3};<span id="test"></span></li></ul></span>
					</div>
					<div class="col-xs-7">
						<span id='exampleDiv1'></span>
						<span id="step1Text"></span>
						<span id="step2Text"></span>
					</div>
				</div>
				<div class="col-xs-12">
					<div>
						<span id="step3Text"></span>
					</div>
					<div>
						<span id="step4Text">
							<ul>
								<li id="list1" class="opacity00">Identifiers are formed by using alphabets, digits and an underscore( _ ).</li>
								<li id="list2" class="opacity00">The first character must always be an <b>alphabet</b> or an <b>underscore</b>. The remaining characters may be a combination of one or more alphabets, digits and underscores.</li>
								<li id="list3" class="opacity00">Any other special characters except <b>underscore</b> are not allowed in an identifier.<span id="test1"></span></li>
							</ul>
						</span>
					</div>
					<div>
						<span id="step5Text"></span>
					</div>
					<div class="col-xs-8 col-xs-offset-2">
						<span id="step6Text">
							<table id='tableId' class="table table-bordered opacity00" align= "center">
	    						<thead class="thead-inverse">
									<tr>
										<th class="table-color">Valid</th>
										<th class="table-color">Invalid</th>
									</tr>
	    						</thead>
		    					<tbody class="text-center">
		      						<tr>
								        <td>_BUFFER, X, A<br/> Sum, net_pay</td>
								        <td>3A, 'a', 1235<br/> hello world, 45-ss</td>
		      						</tr>
		    					</tbody>
	  						</table>
						</span>
					</div>
					
					<div id="inputDiv" class="col-xs-8 col-xs-offset-2 opacity00 text-center">
						<form  class="form-inline">
						    <div class="form-group">
						      <label for="email">Enter an identifier:</label>
						      <input class="form-control" id="inputId" Maxlength='8'  placeholder="eg: 5g_text">
						    </div>
						    <button type="button" class="btn btn-success" id="identifierBtn">Submit</button>
						 </form>
					</div>
				</div>
				<div class="col-xs-12 text-center" style="margin-top: 15px;">
					<span id='errorText'></span>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-12 text-center"><span type="button" class="btn btn-warning opacity00" id="restartBtn" style="margin-top: 15px;">Restart </span></div>
</div>
<script>
$(document).ready(function() {
	introjsGuide();
	cIdentifiersReady();
	$("#restartBtn").click(function() {
		location.reload();
	});
});	// end of document.ready function
</script>
</body>
</html>
