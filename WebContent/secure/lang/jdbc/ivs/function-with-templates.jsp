
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/jquery-ui.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenLite.min.js" type="text/javascript"></script>
<script src="/js/gs/TimelineLite.min.js" type="text/javascript"></script>
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link href="/css/introjs.css" rel="stylesheet">
<link rel="stylesheet" href="/css/introjs-ct.css" />
<link rel="stylesheet" href="/css/bootstrap.min.css" />
<link rel="stylesheet" href="/css/animate.css" />
<script src="/secure/lang/jdbc/js/function-with-templates.js"></script>
<title>Function With Templates</title>
<style type="text/css">
#informationDiv {
	border: 2px solid gray;
	border-radius: 5px;
}
.margin-top {
	margin-top: 20px;
}
.margin-topp {
	margin-top: 90px;
}
.margin-topp1 {
	margin-top: 90px;
}
.margin-top1 {
	margin-top: 23px;
}
g, r, y ,p{
	font-weight: bold;
}
g {
	color: green;
}
r {
	color: red;
}
y {
	color: yellow;
}
y1 {
	color: yellow;
}
o {
	color: #ab33a0;
	font-weight: bold;
    font-size: 16px;
}
k {
	color: rgba(236, 24, 89, 0.75);
	font-weight: bold;
    font-size: 16px;
}
#class {
	border: 1px solid gray;
	background-color: black;
	color: white;
	font-weight: bold;
}
.user-button {
	background-color: green;
}
.creamPreTab4 {
	tab-size: 4;
	margin: 2px;
	padding: 12px;
	-moz-tab-size: 4;
	border-radius: 8px;
	font-family: monospace; 
	background-color: #e5eecc;
	min-height: 200px;
}
.violet {
	color : #ad08ad;
}
.green {
	color : green;
}
.red {
	color : #af0a0a;
}
.pink {
	color : deeppink;
}
.output-console-title-bar {
	background-color: #8e8989;
	text-align: center;
}
.display {
	display: inline-block;
}
.box-border {
	border: 2px solid #dcd9d9;
	border-radius: 8px;
	min-height : 105px;
	padding-left : 10px;
	padding-right : 10px;
}
.box-border3 {
	border: 2px solid #dcd9d9;
	border-radius: 8px;
	min-height : 105px;
	padding-left : 10px;
	padding-right : 10px;
}
.box-border1 {
	border: 1px solid #8fd8cc ;
	padding : 10px;
	height : 40px;
	border-top: 0px;
}
.box-border2 {
	border: 1px solid #d2d189;
	padding : 10px;
	height : 40px;
	border-top: 0px;
}
.output-console-body {
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #f0f0f0;
	font-family: monospace;
	font-size: 14px;
	margin-bottom: 14px;
	padding: 10px;
	white-space: nowrap;
	min-height: 100px;
}
.position {
	position: relative;
}
.ui-effects-transfer {
    border: 2px dashed deeppink;
    z-index: 99999999 !important;
 }
  .ui-effectss-transfer {
    border: 2px dashed deeppink;
    z-index: 99999999 !important;
 }
 .circle-css {
	border: 1px solid white;
	border-radius: 50%;
	padding: 2px;
	position: relative;
	z-index: 1000000;
}
.z-index1000000 {
	position:relative;
	background-color: white;
	z-index:1000000 !important;
}
.z-index10000000 {
	position: relative;
	background-color: #a38388;
	z-index: 10000000 !important;
}
.border {
	background : #a7eef1;
	color: black;
	font-weight: bold;
}
.managerBox {
	background: #8ddcd0 none repeat scroll 0 0;
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
	font-family: monospace;
	text-align: center;
}
.managerBox1 {
	background: #d2d189 none repeat scroll 0 0;
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
	font-family: monospace;
	text-align: center;
}
.blinking-orange {
	animation-name: blink-border-background-orange;
	animation-duration: 2s ;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
	z-index: 10000000;
	position: relative;
}
.user-btn {
	background-color: green;
}
@keyframes blink-border-background-orange { 
	50% {
		border-color: white;
		background: #a38388;
	}
}

</style>
</head>
<body>
<div class="col-xs-12">
	<div class="col-xs-12 text-center padding">
		<h3 id="title"><span class='ct-demo-heading label'>Function with Templates</span></h3>
	</div>
	<div class="col-xs-12 ">
		<div class="col-xs-10 col-xs-offset-1" id="informationDiv" style=' margin-top: 5px;'>
			<span id="infoText" class=''><ul><li><g>Templates</g> are used to avoid the duplication of the
			 code in the prohram whenever we are performing same operation with different data types.</li>
			  <li>The general format for defining a function <g>template</g> is
			  <span id="class">Template &lt;class T&gt;</span>.</li>
			  <a class="introjs-button user-button" id="nextButton">Next&rarr;</a></ul></span>
		</div>
	</div>
	<div class="col-xs-12 " style='margin-top: 10px;'>
		<div class="col-xs-5">
			<pre class="creamPreTab4 opacity00" id="preBody">
<span id="declaration"><span class="violet">#include</span> <span class="green">&lt;iostream&gt;</span></span>
<span class="red">using</span> <span class="green">namespace</span> <span>std;</span>
   <span class="opacity00" id="method"><span id="method1" class=""><span class="" ><span class="green">void</span> show (<span id="intBlink">int</span> num1) {</span>
     <span id="cout1" class="display">cout << <span id="enterText1" class="pink">"Integer number is : "</span> << <span id="animateVal1">num1</span> << endl;</span>
   }</span>
   <span id="method2"><span class=""><span class="green display">void</span> show (<span class="" id="floatBlink">float</span> num2) {</span>
     <span id="cout2">cout << <span id="enterText2" class="pink">"Float number is : "</span> << <span id="animateVal2">num2</span> << endl;</span>
   }</span>
   <span id="method3"><span class="" ><span class="green display">void</span> show (<span id="charBlink">char</span> ch) {</span>
    <span id="cout3">cout << <span id="enterText3" class="pink">"Character is : "</span> << <span id="animateVal3">ch</span> << endl;</span>
   }</span></span>
<span class="hide" id="template"><span class="" id="template1"><span class="red">template</span> <span class="" id="tempVal">&lt;<span class="red">class</span> T&gt;</span></span>
<span id="method4" class=" position"><span class="" id="void"><span class="green">void</span> show (<span class="display red">T</span> x) {</span>
   <span id="cout4" class="">cout << <span id="enterText4" class="pink">"The value is : "</span> << <span id="animateVal4" class="">x</span> << endl;</span>
}</span></span>
<span id="main" class="opacity00"><span class="green">int</span> main() {
   <div id="int1" class="display opacity00"><span class="green display" id="int">int</span> <div class="display" id ="aVal1">num1 = <span class="pink">10</span></div>;</div>
   <div id="float1" class="display opacity00"><div class="green display" id="float">float</div> <div class="display" id ="bVal1">num2 = <span class="pink">10.5</span></div>;</div>
   <div id="char1" class="display opacity00"><div class="green display" id="char">char</div> <div class="display" id ="cVal1">ch = <span class="pink">'R'</span></div>;</div>
   <div id="show1" type="int"  param="a"class="display opacity00">show(<span id="num1">num1</span>);</div>
   <div id="show2" type="float" param="b" class="display opacity00">show(<span id="num2">num2</span>);</div>
   <div id="show3" type="char" param="c" class="display opacity00">show(<span id="num3">ch</span>);</div>
   <div id="return" class="display"><div class="red display">return</div> <span class="pink">0</span>;</div>
<span id="mainClose">}</span></span>
			</pre>
		</div>
		<div class="col-xs-6">
			<div class="col-xs-12 margin-topp box-border hide" id="animationBox">
				<div class="col-xs-12">
					<div class="col-xs-3 margin-top text-center opacity00" id="aValue1">
						<div id="" class="text-center managerBox " style = "color : #4a4649; font-weight:bold;">num1</div>
						<div class="padding box-border1 " id="borderBox1"><span class="text-center" id="boxValue1"><k>10</k></span></div>
					</div>
					<div class="col-xs-3 col-xs-offset-1 margin-top text-center  opacity00" id="bValue1">
						<div class="text-center managerBox" style = "color : #4a4649; font-weight:bold;">num2</div>
						<div class="padding box-border1 " id="borderBox2"><span class="text-center" id="boxValue2"><k>10.5</k></span></div>
					</div>
					<div class="col-xs-3 col-xs-offset-1 margin-top text-center opacity00" id="cValue1" >
						<div class="text-center managerBox" style = "color : #4a4649; font-weight:bold;">ch</div>
						<div class="padding box-border1 " id="borderBox3"><span class="text-center" id="boxValue3"><k>R</k></span></div>
					</div>
				</div>
				</div>
				 <div class="col-xs-12 margin-topp1 box-border3 hide" id="animationBox1">
				<div class="col-xs-12">
					<div class="col-xs-3  margin-top1 text-center opacity00" id="aValue2">
						<div class="text-center managerBox1" style = "color : #58a905; font-weight:bold;">num1</div>
						<div class="padding box-border2 position" id="borderBox4"><span class="text-center" id="boxValue4"><o>10</o></span></div>
					</div>
					<div class="col-xs-3 col-xs-offset-1 margin-top1 text-center opacity00" id="bValue2">
						<div class="text-center managerBox1" style = "color: #58a905; font-weight:bold;">num2</div>
						<div class="padding box-border2" id="borderBox5"><span class="text-center" id="boxValue5"><o>10.5</o></span></div>
					</div>
					<div class="col-xs-3 col-xs-offset-1 margin-top1 text-center opacity00" id="cValue2">
						<div class="text-center managerBox1" style = "color: #58a905; font-weight:bold;">ch</div>
						<div class="padding box-border2" id="borderBox6"><span class="text-center" id="boxValue6"><o>R</o></span></div>
					</div>
				</div>
			</div>
			<div class="output-console col-xs-12 margin-top padding00 hide" id="outputBox">
				<div class="output-console-title-bar  text-center">
					<span>output</span>
				</div>
				<div class="output-console-body" id="outputBody"></div>
			</div>
			<div class="output-console col-xs-12 margin-top padding00 hide" id="outputBox1">
				<div class="output-console-title-bar  text-center">
					<span>output</span>
				</div>
				<div class="output-console-body" id="outputBody1"></div>
			</div>
		</div>
	</div>
	<div class="button col-xs-12 text-center " id="button">
		<span class="btn btn-success glyphicon glyphicon-refresh opacity00" id='restartBtn' style='margin-top: 4px'>Restart</span>
	</div>
</div>
<script type="text/javascript">
$(document).ready(function() {
	readPrintStringUsingGetsPutsReady();
});
</script>
</body>
</html>