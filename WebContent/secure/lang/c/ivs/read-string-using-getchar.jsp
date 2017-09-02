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
<script src="/secure/lang/c/js-min/rsug.min.js" type="text/javascript"></script>

<title>Print Character Program</title>
</head>
<style>
.output-console-title-bar {
	background-image: -moz-linear-gradient(center top, #e8e8e8, #bcbbbc);
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	font-size: 0.75em;
 	/* margin-top: 20px;  */
	padding: 2px 0;
	text-align: center;
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
	white-space: pre-line;
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

.ct-code-b-yellow {
	font-family: monospace;
	font-weight: bold;
	color: yellow;
}

#typewritingId {
	height: 167px; 
}

.address-box {
	height: 254px;
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

.creamPreTab4 {
	height: 254px;
}

.padding0 {
	padding: 0px;
}

#startBtn {
	margin-top: 10px;
}

#in, .input-char {
	width: 150px;
 /* padding: 8px; */
	border-width: 0px 0 0 0;
	background-color: #000;
	color: #0f0;
}

.base-address {
	font-size: 12px;
    height: 37px;
    margin-left: 39px;
    margin-top: -15px;
    padding: 2px;
    width: 40px;
}

</style>
<body>
<div class="col-sm-12 text-center">
	<div class="margin-padding-css text-center" >
		<div class="col-sm-1"></div>
		<div class="col-sm-offset-3 col-sm-3">
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
  			<table id="tableId" class="table visibility-hidden" style="margin-top: -1px;">
				
				<tbody>
					<tr>
				        <td><b class="ct-code-b-blue">ch</b></td>
				        <td>0</td>
				        <td>1</td>
				        <td>2</td>
				        <td>3</td>
				        <td>4</td>
				        <td>5</td>
				        <td>6</td>
				        <td>7</td>
				        <td>8</td>
				        <td>9</td>
				        <td>10</td>
				        <td>11</td>
				        <td>12</td>
				        <td>13</td>
				        <td>14</td>
				        <td>15</td>
				        <td>16</td>
				        <td>17</td>
				        <td>18</td>
				        <td>19</td>
					</tr>
			  
			      <tr id="tableRowId" class="hidden">
				     	<td class="td-css visibility-hidden"></td>
				        <td class="td-css visibility-hidden"></td>
				        <td class="td-css visibility-hidden"></td>
				        <td class="td-css visibility-hidden"></td>
				        <td class="td-css visibility-hidden"></td>
				        <td class="td-css visibility-hidden"></td>
				        <td class="td-css visibility-hidden"></td>
				        <td class="td-css visibility-hidden"></td>
				        <td class="td-css visibility-hidden"></td>
				        <td class="td-css visibility-hidden"></td>
				        <td class="td-css visibility-hidden"></td>
				        <td class="td-css visibility-hidden"></td>
				        <td class="td-css visibility-hidden"></td>
				        <td class="td-css visibility-hidden"></td>
				        <td class="td-css visibility-hidden"></td>
				        <td class="td-css visibility-hidden"></td>
				        <td class="td-css visibility-hidden"></td>
				        <td class="td-css visibility-hidden"></td>
				        <td class="td-css visibility-hidden"></td>
				        <td class="td-css visibility-hidden"></td>
				        <td id="lastTdPosition" class="td-css visibility-hidden"></td> 
			      	</tr>
				</tbody>
  			</table>
  			<div id="baseAddresssId" class="base-address visibility-hidden"><span><b>4515</b><i aria-hidden="true" class="fa fa-arrow-down" style="color: red; margin-left: 7px;"></i><span style="color: blue; margin-left: 5px;">Base Address</span></span></div>
		</div>
		<div class="col-xs-1" >
			<div class="panel-group visibility-hidden text-center" id="panelIntBox" style="margin-top: 5px;">
				<div class="panel panel-info">
					<div class="panel-heading" style="padding: 1px 15px;">i</div>
					<div class="panel-body">
						<span id="panelIntBody" class="position-relative display-inline"><span id="iValue" class="ct-code-b-green visibility-hidden">0</span></span>
					</div>
				</div>
				<span id="addressId" class="ab-adress-css">1024</span>
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
				<span id="typeChar"></span>
					<span id="hiddenTypingChar" class="hidden">Enter a String : <input id='inputChar' class='input-char' tabindex='0' /></span>
				<span id="totalEnterChar" ></span>
				<span id="enterHiddenTotal" class="hidden">The entered string is : <input id="hiddenTotalEnterChar" maxlength='20' class='input-char' tabindex='0' /></span>
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
