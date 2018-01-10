<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Structure of C</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<script type="text/javascript" src="/secure/lang/c/js-min/soc.min.js"></script>
<style type="text/css">
.margin-top-20 {
	margin-top: 20px;
}

.creampretab1 {
    -moz-tab-size: 2;
    background-color: black;
    border: 1px solid gray;
    color: white;
    font-family: monospace;
    font-size: 12px;
    font-style: inherit;
    line-height: 20px;
    padding: 17.5px;
}

.creampretab2 {
    -moz-tab-size: 2;
    background-color: black;
    border: 1px solid gray;
    color: white;
    font-family: monospace;
    font-size: 11px;
    font-style: inherit;
    line-height: 16px;
    overflow-y: auto;
    padding: 8px;
    white-space: pre;
}

.introjs-tooltip {
    background-color: white;
    border-radius: 3px;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.4);
    max-width: 300px;
    min-width: 225px;
    padding: 10px;
    position: absolute;
    transition: opacity 1.1s ease-out 0s;
    visibility: visible;
}

.color-red {
	color: red;
}

.color-black {
	color: black;
}

.zIndex {
	position: relative;
	z-index: 10000001;
}

.background-color-yellow {
	background-color: yellow;
}

.background-color-green {
	background-color: #90EE90
}

.background-color-blue {
	background-color: #87CEFA
}
</style>
</head>
<body>
<script type="text/javascript">
	$(document).ready(function() {
		structureOfCReady();
	});
</script>
<h3 class="col-xs-12 text-center margin-top-20">
		<span class="label label-default ct-demo-heading" id="heading">Basic Structure of C Program</span>
</h3>
<div id="animationDiv" class="col-xs-offset-2 col-xs-8 margin-top-20">
<div id="totalAnimationDiv">
  <div class="col-xs-6">
  <div id="leftDiv" class="opacity00">
<pre class="creampretab1" id='leftCode' class="opacity00"><span id="dcmntSection" class="opacity00">Documentation section</span>
<span id="linkSection" class="opacity00">Link section</span>
<span id="defSection" class="opacity00">Definition section</span>
<span id="globalDef" class="opacity00">Global definition section</span>
<span id="usrDefFun" class="opacity00">User define function declaration</span>
<span id="totalMainFun" class="opacity00">main() {
  <span id="totalMainSec"><span id="dclrPart">Declaration part</span>
  <span id="excPart">Execution part</span>	
}</span></span>
<span id="subPro" class="opacity00">Sub program section having user defined functions
Function1() {
  -- ---
  -----
}</span></pre>
	</div>
  </div>
  <div class="col-xs-6">
  	<div id="rightDiv">
  	<pre class="creampretab2 opacity00" id='rightCode'><span id="comment" class="opacity00">/* C language was 
Develop by Dennis Ritchie. */
//This is a sample C program developed by user.</span>
<span id="links" class="opacity00">#include &lt;stdio.h&gt;</span>
<span id="define" class="opacity00">#define VALUE 10</span>
<span id="globalVariable" class="opacity00">int total;</span>
<span id="userDefineFun" class="opacity00">int sum(int, int);</span>
<span id="totalMain" class="opacity00">int main() <span id="mainFun">{
  <span id="declPart">int a, b;</span>
  <span id="exeParts"><span id="exePart1">a = VALUE + 5;</span>
  <span id="exePart2">b = VALUE - 3;</span></span>
  printf("This is main function /n");
  total = sum(a, b);
  printf("Total = %d /n", total);
  return 0;
}</span></span>
<span id="sumFun" class="opacity00">int sum(int a, int b) {
  return a + b;
}</span></pre>
  	</div>
  </div>
  </div>
</div>
<div class="col-xs-12 text-center margin-top-20">
<span class="btn btn-warning btn-sm opacity00" id="restart">Restart</span>
</div>
</body>
</html>