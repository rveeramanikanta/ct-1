<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">
<link href="/css/animate.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/gs/TimelineLite.min.js"></script>
<script src="/secure/lang/c/js-min/fs.min.js"></script>

<title>Insert title here</title>
<style type="text/css">
.padding0 {
	padding: 0px;
}

table {
	border: 2px solid gray;
 	border-collapse: separate;
 	border-spacing: 2px;
}

 td, th {
 	border: 2px solid gray;
	text-align: center;
	padding: 3px; 
	font-family: monospace;
}

.margin-top-bottom20 {
	margin: 20px 0;
}

#parallelogram {
	height: 56px;
	width: 164px;
	-webkit-transform: skew(-36deg);
	-moz-transform: skew(-36deg);
	-o-transform: skew(-36deg);
	border: 2px solid gray;
}

#pargmExample {
	height: 32px;
	width: 100px;
	-webkit-transform: skew(-36deg);
	-moz-transform: skew(-36deg);
	-o-transform: skew(-36deg);
	border: 2px solid gray;
}

#pargmText {
	display: inline-block;
	-moz-transform: skew(36deg);
	line-height: 32px;
}

#oval {
	border: 2px solid gray;
	-moz-border-radius: 100px/35px;
	-webkit-border-radius: 100px/35px;
	border-radius: 100px/35px;
	height: 56px;
	width: 168px;
}

#ovalExample {
	border: 2px solid gray;
	-moz-border-radius: 100px/35px;
	-webkit-border-radius: 100px/35px;
	border-radius: 100px/35px;
	height: 25px;
	width: 100px;
}

#rectangle {
	border: 2px solid gray;
	height: 56px;
	width: 168px;
}

#rectExample {
	border: 2px solid gray;
	height: 46px;
	width: 140px;
}

#rectText {
	line-height: 46px;
}

#rhombus {
	border : 4px solid gray;
    height: 85px;
    width: 85px;
    -webkit-transform: scaleX(.5) rotate(45deg);
    -moz-transform: scaleX(.5) rotate(45deg);
    -ms-transform: scaleX(.5) rotate(45deg);
    transform: scaleX(.5) rotate(45deg);
}

#rmbsExample {
	border : 4px solid gray;
    height: 66px;
    width: 66px;
    transform: scaleX(.5) rotate(45deg);
}

#rmbsText {
	display: inline-block;
    line-height: 66px;
    transform: scaleX(1) rotate(-45deg);
    font-family: verdana;
}

.display-inline-block {
	display: inline-block;
}

.text-line-height {
	line-height: 95px;
}

.fa-color {
	color: gray;
}
 .top45 {
 	top: 45px;
 }
 
.table-css {
	table-layout: fixed;
	width: 100%;
	
}

.margin15 {
	margin: 15px 0px;
}
</style>

<script type="text/javascript">

	$(document).ready(function() {
		flowchartSymbolsReady();		
	})
	
</script>
</head>
<body>
	<div class="col-xs-12 row padding0">
		<div class="col-xs-offset-5 col-xs-6 row padding0" >
			<h3>
				<span class="label label-default ct-demo-heading" style="font-family: serif;"  id="mainTitle">Flow Chart Symbols</span>
			</h3>
		</div>
	</div>
	<div class="col-xs-12 row padding0">
		<div class="col-xs-12 row padding0 text-center margin15" >
				<span class="btn btn-warning opacity00" id="restart">Restart</span>
		</div>
	</div>
	<div class = "col-xs-12 row padding0">
		<div class="col-xs-offset-2 col-xs-8 text-center  opacity00" id="flowChart">
			<table class="table-css">
			 <thead> 
				<tr><th>Symbol</th><th>Name</th><th>Function</th></tr>
			 </thead>
			<tbody>
				<tr id="terminal">
					<td class=""><div id="oval"  class="display-inline-block margin-top-bottom20 opacity00"></div></td>
					<td class=""><span class="text-line-height opacity00">Terminal</span></td>
					<td >
						<div class="opacity00">
							<span>Is used to indicate the start or end of the program, process, or sub-process.</span>
							<div  class="margin-top-bottom20"><span class="">ex :</span>&emsp;<span id="ovalExample" class="display-inline-block">start / end</span></div>
						</div>
					</td>
				</tr>
				<tr id="process">
					<td><div id="rectangle"  class="display-inline-block margin-top-bottom20 opacity00"></div></td>
					<td><span class="text-line-height opacity00">Process</span></td>
					<td>
					<div class="opacity00">
					<span>Is used to indicate any type of internal operation.</span>
					<div  class="margin-top-bottom20"><span>ex :</span>&emsp;<span id="rectExample" class="display-inline-block"><span id="rectText">sum = num1 * num2;</span></span></div>
					</div>
					</td>
				</tr>
				<tr id="ioLine">
					<td><div id="parallelogram"  class="display-inline-block margin-top-bottom20 opacity00"></div></td>
					<td><span class="text-line-height opacity00">input/output</span></td>
					<td>
					<div class="opacity00">
						<span>Is used to indicate any input / output(I/O) operation.</span>
						<div class="margin-top-bottom20"><span>eg :</span>&emsp;<span id="pargmExample" class="display-inline-block"><span id="pargmText">read / print</span></span></div>
					</div>
					</td>
				</tr>
				<tr id="decision">
					<td><div class="opacity00" style="display:inline-block;"><div id="rhombus" class="display-inline-block margin-top-bottom20"></div></div></td>
					<td><span class="text-line-height opacity00">Decision</span></td>
					<td>
					<div class="opacity00">
						<span>Is used to indicate a decision that is answered in a binary format(Yes/No, True/False)</span>
						<div class="margin-top-bottom20"><span>eg :</span>&emsp;<span id="rmbsExample" class="display-inline-block"><span id="rmbsText"><b>if (i < n)</b></span></span></span></div>
					</div>
					</td>
				</tr>
				<tr id="flowLines">
					<td>
						<div class="opacity00">
							<span><i class="fa fa-exchange fa-color fa-3x fa-rotate-90" aria-hidden="true"></i></span>
							<div><i class="fa fa-exchange fa-color fa-3x" aria-hidden="true"></i></div>
						</div>
					</td>
					<td><span class="text-line-height opacity00">Flow Lines</span></td>
					<td><span class="opacity00">Is used to indicate the direction of flow.</span></td>
				</tr>
				
			</tbody>
			</table>
		</div>
	</div>
</body>
</html>