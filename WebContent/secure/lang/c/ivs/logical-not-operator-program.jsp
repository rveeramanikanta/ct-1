<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css" >
<link rel="stylesheet" href="/css/introjs-ct.css" >
<link rel="stylesheet" href="/css/animate.css">
<script src="/js/jquery-latest.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/secure/lang/c/js-min/lnop.min.js"></script>

<title>logical-not-operator.jsp</title>

<style type="text/css">

.introjs-tooltiptext br {
	margin: 15px;
}

.introjs-tooltip {
	min-width: 300px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.introjs-duplicate-nextbutton {
	background-color: green;
}

.box-border {
	border-radius: 12px;
	border: 2px solid gray;
}

.buttons-div {
	margin-top: 20px;
	margin-bottom: 5px;
	text-align: center;
}

.margin-top {
    margin-top: 25px;
}

.padding0 {
    padding: 0px;
}

#codeDiv {
 	height: 216px;
}

#animationDiv {
 	height: 242px;
}

.ui-effects-transfer {
    border: 1px solid blue;
    z-index: 99999999 !important;
}
 
 .z-index1000000 {
	position: relative;
	background-color: white;
	z-index: 1000000 !important;
}
  
[contenteditable="true"] {
    outline: medium none;
}

div,span {
	position: relative;
}

.position {
	position: relative;
	display: inline-block;
}

#logicalNotDefinition {
	margin-top: 20px;
	height: 145px;
}

.creamPreTab4 {
    margin: 8px;
    padding: 10px;
    font-size: 12px;
    white-space: pre;
	-moz-tab-size: 6;
    border-radius: 8px;
    background-color: #fffae6;
}

.box-padding {
	padding: 10px;
}

.panel-heading {
    padding: 2px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
}

.panel-body {
    min-height: 55px;
    padding: 15px 0 0;
}

.panel {
 	border-radius: 0px;
    background-color: #000;
    border: 1px solid transparent;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
}

.panel-primary > .panel-heading {
    color: #000;
    border-color: lightgray;
    background-color: lightgray;
}

.number-div > .number-div {
	color: white;
	font-width: bold;
	margin-top: 12px;
	background-color: #337ab7;
}

.number-div > .number-body {
	color: black;
	font-width: bold;
	min-height: 45px;
	background-color: white;
	border-color: lightgray;
}

.address-text {
	margin-top: -13px;
}

#address {
	height: 121px;
	margin-top: 12px;	
}

#nextBtn {
    margin: 33px;
}

#outputDiv {
	margin-top: 10px;
}

.output {
    color: white;
    margin-top: -11px;
}

.ct-code-b-red {
	font-weight: bold;
	font-family: monospace;
	color: rgb(252, 66, 66);
}
.ct-code-b-yellow {
	color: yellow;
	font-weight: bold;
	font-family: inherit;
}

</style>
</head>
<body>
<body>
	<div class = "col-xs-12">
	<div class = "ct-box-main">
		 <div class = "text-center">
			<h1 class = "label ct-demo-heading text-center">logical NOT operator</h1>
		</div> 
		<div class = "col-xs-10 col-xs-offset-1">
			<div class = "col-xs-12 box-border " id = "logicalNotDefinition">
				<span id = "logicalnotDefinition" class = "visibility-hidden"> The <span class ="ct-code-b-red">Logical NOT</span>
				 operator is used to <span class = "ct-code-b-red">reverse</span> the logical state of its operand. 
				 If a condition is <span class = "ct-code-b-red">true</span>, then Logical NOT operator will make 
				 it <span class = "ct-code-b-red">false</span>.</span>
				<br><span id = "example" class = "visibility-hidden">Example: <b>boolean</b> <span class = "ct-code-b-red">status;</span></span>
				<div class = "col-xs-12">
					<div class = "col-xs-4 col-xs-offset-4 text-center">
						<table border = "1px solid gray" style = "width: 100%; opacity: 0;" id = "logicalNotTable">
  							<tbody>
	  							<tr>
	    							<td><b>status</b></td>
	   			 					<td><span class = "ct-code-b-red">!</span><b>status</b></td> 
								</tr>
								<tr>
									<td id = "trueValue" style = "opacity: 0;">True</td>
									<td id = "falseValue" style = "opacity: 0;"><span class = "ct-code-b-red">False</span></td>
								</tr>
								<tr>
									<td id = "falseValue1" style = "opacity: 0;">False</td>
									<td id = "trueValue1" style = "opacity: 0;"><span class = "ct-code-b-red">True</span></td>
								</tr>
							</tbody>
						</table>
					</div>
				<div class = "col-xs-2 col-xs-offset-10" id  = "nextBtn"></div>
				</div>
			</div>
		</div>
		<div class = "col-xs-12">
			<div class = "col-xs-7">
				<div id = "codeDiv"  class = "box-border margin-top">
					<pre class = 'creamPreTab4'>
<span id = "headerFile">#includu&lt;studio.h&gt;</span>
<span id = "mainMethod">main {</span>
	<span id = 'VariableDeclararion1'>int aValue = <span id='number1' contenteditable='true', spellcheck='false', maxlength='2'>14</span>;</span>
	<span id = 'VariableDeclararion2'>int bValue = <span id='number2' contenteditable='true', spellcheck='false', maxlength='2'>14</span>;</span>
	<span id = "statusCondition">if (!( aValue == bValue)) {</span>
		<span id = "sopLine1">System.output.println(aValue + " and " + bValue + " Values are not equal");</span>
	<span>}</span> else {
		<span id = "sopLine2">System.output.println(aValue + " and " + bValue + " Values are equal");</span>
	<span>}</span>
}
</pre>
				</div>
			</div>
			<div class = "col-xs-4">
				<div class = "col-xs-12 box-border margin-top" id  = "animationDiv">
						<div class="col-xs-12">
					    	<div id="address" class="box-border">
					    	<div class="col-xs-5 col-xs-offset-1" id="numberDiv1" style=  "opacity: 0;">
					    	<div class="panel-primary number-div">
	    						<div class="panel-heading text-center number-div">aValue</div>
	    						<div class="panel panel-body number-body">
	    							<div class = "text-center" id = "value1"></div>
	    						</div>
					    	</div>
					    	<div class="address-text text-center" id = "address1">1024</div>
					    	</div>
					    	<div class="col-xs-5" id="numberDiv2" style= " opacity: 0;">
					    	<div class="panel-primary number-div">
	    						<div class="panel-heading text-center number-div">bValue</div>
	    						<div class="panel panel-body number-body">
	    						<div class = "text-center" id = "value2"></div>
	    						</div>
					    	</div>
					    	<div class="address-text text-center" id = "address2">1156</div>
					    	</div>
					  </div>
					</div>
					<div class="col-xs-10 col-xs-offset-1">
		  				<div class="panel-primary output-div margin-left" id="outputDiv">
	    					<div class="panel-heading text-center" id="outputDiv">Output</div>
	    					<div class="panel panel-body">
	    						<div class="output col-xs-12">
	    							<div class="col-xs-12">
	    								<span id="outputText" class=""></span>
		    						</div>
	    						</div>
	    					</div>
	  					</div>
	 				</div>
				</div>
			</div>
			<div class = 'buttons-div col-xs-9'>
				<button type = "button" class = "btn btn-warning visibility-hidden" id = "restartBtn">Restart</button>
			</div> 
		</div>
	</div>
	</div>
	
	<script type="text/javascript">

	$(document).ready(function(){
		logicalNotOperatorProgramReady();
	});

</script>
</body>
</html>