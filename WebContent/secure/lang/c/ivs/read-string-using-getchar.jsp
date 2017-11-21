<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
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
<!-- <script src="/secure/lang/c/js-min/rsug.min.js" type="text/javascript"></script> -->
<script src="/secure/lang/c/js/read-string-using-getchar.js" type="text/javascript"></script>

<title>Print Character Program</title>
</head>
<style>
.output-console-title-bar {
	padding: 3px;
	letter-spacing: 1px;
	font-family: monospace;
	font-weight: bold;
	background-color: whitesmoke;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
}

.output-console-body {
	background-color: black;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #f0f0f0;
	font-family: monospace;
	font-size: 14px;
	margin-bottom: 14px;
	height: 100px;
	overflow: auto;
	padding: 10px;
	white-space: inherit;
}

.introjs-tooltiptext br {
	margin: 15px;
}

.introjs.tooltiptext > span{
	display: inline-block;
}

.introjs-tooltip {
	min-width: 280px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.introjs-prevbutton, .introjs-nextbutton, .introjs-skipbutton {
	border-radius: 3px !important;
}

.introjs-prevbutton {
	background-color: #5bc0de !important;
}

.introjs-nextbutton {
	background-color: green !important;
}

.introjs-skipbutton {
	margin-right: 15px !important;
	background-color: orange !important;
}

.ct-pink-color {
	font-family: monospace;
	color: #ed138e;
	outline: none;
}

.ct-code-b-red {
	font-family: monospace;
	font-weight: bold;
	color: rgb(252, 66, 66);
}

.ct-code-b-blue {
	font-family: monospace;
	font-weight: bold;
	color: blue;
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

#typewritingId {
	height: 167px; 
}

.blink {
  animation: blinker 1s linear infinite;
}

@keyframes blinker {
	100% { opacity: 0.0; }
}

.address-box {
	height: 169px;
	border: 1px solid lightgray;
	border-radius: 4px;
}

.ct-demo-heading {
	background: highlight none repeat scroll 0 0;
    border-radius: 10px;
    font-size: 18px;
    position: relative;
    z-index: 9999999;
}
.padding0 {
	padding: 0px;
}

#startBtn {
	margin-top: 10px;
}

#in, .input-char {
	width: 170px;
 /* padding: 8px; */
	border-width: 0px 0 0 0;
	background-color: #000;
	color: yellow;
	font-weight: bold;
}

.base-address {
	font-size: 12px;
    height: 37px;
    margin-left: 50px;
    margin-top: -15px;
    padding: 2px;
    width: 40px;
}

in {
	color: rgb(62, 50, 173);
}

ink {
	color: 	rgb(255, 0, 191)
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

pi {
	color: fuchsia;
}

y {
	font-family: monospace;
	font-weight: bold;
	color: yellow;
}

.table-bordered {
	border: 1px solid black !important;
}

</style>
<body>
<div class="col-sm-12 text-center">
	<div class="margin-padding-css text-center" >
		<div class="col-sm-1"></div>
		<div class="col-sm-12">
			<h3><span class="ct-demo-heading label label-default" id="titleName">getchar() for reading a String</span></h3>
		</div>
	</div>
</div>
<div class="body-div col-sm-12 padding0">
<br>
<div class="col-xs-4">
<!-- <pre id="typewritingId"></pre> -->
<pre class="creamPreTab4 opacity00" id="preBody">
#include&lt;stdio.h&gt;
<span id='line1'>main()</span> {
 <span id='line2'>char ch[20]</span>;
 <span id='line3'>int i = 0;</span>
 <span id='line4'>printf("Enter a string : ");</span>
 <span id='line5'>while((ch[i] = getchar()) != '#') {
  i++;
 }</span>
 <span id='line6'>ch[i] = '\0';</span>
 <span id='line7'>printf("The entered string is : ");</span>
 <span id='line8'>puts(ch);</span>
<span id='line9'>}</span>
	
</pre>
</div>
<div class="col-xs-8">
	<div class="address-box opacity00" id="addressBox">
  		<div class="col-xs-11" id="animationBox">
  			<table id="tableId" class="table opacity00" style="margin-top: -1px;">
				<tbody>
					<tr>
				        <td></td>
				        <%for (int i = 0; i < 20; i++) {%>
				        	<td><%=i %></td>
				        <%} %>
					</tr>
			      <tr id="tableRowId">
				     	<td style="border-top: none;"><b class="ct-code-b-blue">ch </b>=</td>
				       <%for (int i = 0; i < 20; i++) {%>
				        	 <td class="td-css table-bordered opacity00"></td>
				        <%} %>
			      	</tr>
				</tbody>
  			</table>
  			<div id="baseAddresssId" class="base-address opacity00"><span><b style="color: green; font-family: monospace;">4515</b><i aria-hidden="true" class="fa fa-arrow-down" style="color: red; margin-left: 7px;"></i><span style="color: blue; margin-left: 5px;  font-family: monospace;"><b>Base Address</b></span></span></div>
		</div>
		<div class="col-xs-1" >
			<div class="panel-group opacity00 text-center" id="panelIntBox" style="margin-top: 5px;">
				<div class="panel panel-info">
					<div class="panel-heading" style="padding: 1px 15px;">i</div>
					<div class="panel-body">
						<span id="panelIntBody" class="position-relative display-inline"><span id="iValue" class="ct-code-b-green opacity00">0</span></span>
					</div>
				</div>
				<span id="addressId" class="ab-adress-css">1056</span>
 			</div>
		</div>
	</div>
</div>
</div>
	<div class="col-sm-offset-4 col-sm-4">
		<div id="consoleId" class="center opacity00">
			<div class="output-console-title-bar">
				<span class="title"><b>Console</b></span>
			</div>
			<div class="output-console-body" id="consoleBodyDiv">
				<div id="typeChar"></div>
				<div id="hiddenTypingChar" class="hidden">Enter a String : <input id='inputChar' class='input-char' tabindex='0' maxlength="20"/></div>
				<div id="totalEnterChar" ></div>
				<div id="enterHiddenTotal" class="hidden">The entered string is : <input id="hiddenTotalEnterChar" maxlength='20' class='input-char' tabindex='0' /></div>
			</div>
		</div>
	</div>
<div><button type="button" class="col-sm-1 col-sm-offset-6 btn btn-warning opacity00" id="restartBtn" style="margin-top: 15px;">Restart </button></div>
<script>
	$(document).ready(function() {
		readStringUsingGetcharReady();
	}); // end of document.ready function									
</script>
</body>
</html>
