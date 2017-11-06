<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>#include</title>
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
<script type="text/javascript" src="/secure/lang/c/js-min/i.min.js"></script>

<style type="text/css">

.margin-top-56 {
	margin-top: 56px;
}

.margin-top-40 {
	margin-top: 40px;
}

.margin-top-20 {
	margin-top: 20px;
}

.margin-top-10 {
	margin-top: 10px;
}

#totalDiv {
	border: 1px solid gray;
	border-radius: 8px;
	padding: 10px;
}

.creampretab {
	background-color: black;
    border: 1px solid gray;
    border-radius: 6px;
    color: white;
    display: block;
    font-family: monospace;
    font-size: 12px;
    line-height: 1.42857;
    margin-bottom: 0;
    padding: 15px;
}

#outputDiv {
	margin-top: 20px;
	padding: 0;
	z-index: 9999999;
}

.output-console-title-bar {
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
}

.output-console-body {
	border-bottom-left-radius: 6px;
	border-bottom-right-radius: 6px;
	font-size: 13px;
	height: 270px;
	padding: 10px;
	white-space: inherit;
}

.color-red {
	color: red;
}

.warning-color {
	color: #990000;
}

.note-color {
	color: #66ffc2;
}

.colorPink {
	color: fuchsia;
}

.colorGreen {
	color: green;
}

.colorMain {
	color: #f47442;
}

.colorWhite {
	color: white;
}

.colorBlack {
	color: black;
}

.cyan {
	color: #00FFFF;
}

@-webkit-keyframes blink {
  0% {
    background: black;
  }
  30.3% {
    background: #f28192;
  }
  
  
  50.2% {
    background: #CC0000;
  }
  80.5% {
    background: #f28192;
  }
  100.0% {
    background: pink;
  }
}

.blink-in-console {
	animation: blink 1.5s linear 3;
	/* -webkit-animation: blink 1s linear infinite; */
}
</style>
</head>
<body>
<script type="text/javascript">

	$(document).ready(function() {
		includeReady();
	});

</script>
	<div class='text-center margin-top-20'>
		<h4 class='label ct-demo-heading' id='demoTitle'>#include</h4>
	</div>
	<div class="col-xs-offset-1 col-xs-10">
		<div class="margin-top-20" id="totalDiv">
			<div id="typingDiv1">
				<ul>
					<li id="li1" class="opacity00">A software program can also use functions written in other files. Typically reusable functions are written in
					 files once which are later included in all other programs where these functions are used.       
					</li>
					<li id="li2" class="opacity00">The files in which the definitions and declarations of such common objects/functions are written are known as <b>header files</b>.
					</li>
					<li id="li3" class="opacity00">
						We can use a <b>#include</b> (which is read as hash-include) directive to include a <b>header file</b> in our program.
					</li>
					<li id="li4" class="opacity00">
						<b>#include</b> - is called a preprocessor directive.
					</li>
					<li id="li5" class="opacity00">
						<b>#include</b> directive can be used in two ways:
					</li>
					<!-- <b id="example" class="color-red opacity00">Example:</b><br/> -->
					<ol>
						 <li id="olLi1" class="opacity00">
						 	#include&lt;<b>stdio.h</b>&gt;<br/>
						 </li>
						 <li id="olLi2" class="opacity00">
						 	#include "<b>c\XYZ\Ritchie\abc.c</b>"
						 </li>	
					 </ol>
 				</ul>
 				
			</div>
		</div>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-offset-1 col-xs-5 margin-top-56">
			<div id="code1" class="opacity00">
			<pre class="creampretab"><span id="totalPro"><span class="opacity00" id="include1">#include&lt;stdio.h&gt;</span>
<span id="main"><span class="colorPink">void</span> main () {
  <span id="printf1">printf("<span id="ct" class="colorGreen">CodeTantra</span>");</span>
}</span></span>
</pre>
			</div>
			<div id="code2" class="margin-top-40 opacity00">
			<pre class="creampretab"><span id="totalPro2"><span id="include2"><span id="include21" class="opacity00">#include&lt;stdio.h&gt;</span>
<span id="include22" class="opacity00">#include&lt;math.h&gt;</span></span>
<span class="colorPink">void</span> main() {
  <span id="printf2">printf("<span id="sqrt" class="colorGreen">Square root of %f is %f\n</span>", 4.0, sqrt(4.0));</span>
}</span>
</pre>
			</div>
		</div>
		<div class="col-xs-5">
			<div id="outputDiv" class="opacity00">
				<div class="output-console-title-bar">
					<span class="title">Output</span>
				</div>
				<div class="output-console-body" id="outputBody"></div>
			</div>
		</div>
	</div>
	<div class="col-xs-12 text-center margin-top-20">
		<span class="btn btn-warning btn-sm opacity00" id="restart">Restart</span>
	</div>
</body>
</html>