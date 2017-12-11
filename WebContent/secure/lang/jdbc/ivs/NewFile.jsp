
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/font-awesome-animation.min.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
		       
<script src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/gs/TweenLite.min.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/secure/lang/jdbc/js/NewFile.js"></script>

<title>Insert title here</title> 

<style type="text/css">

.titles {
	background-color: highlight;
    border-radius: 19px;
    padding: 3px 8px;
    position: relative;
    z-index: 1000000;
}
.headings{
	text-align: center !important;
} 
.creamPreTab4 {
   -moz-tab-size: 4;
    background-color: #fffae6;
    margin-left: -15px;
    white-space: pre;
    width: 104%;
}
.code-box {
	border-radius: 8px;
	margin-left: 2%;
}
.codeAndAnimation {
	margin-top: 25px;
}
pre {
 	font-size: 10px;
 	margin-top: 30px;
}
.animation-box {
    margin-top: 2.5%;
}
.letter, .indexLetter {
	font-size: 120%;
    padding-left: 27%;
    padding-top: 7%;
    position: absolute;
}
.box {
    border-radius: 6px;
    display: inline-block;
    height: 29px;
    position: relative;
    width: 30px;
}
.circle {
    display: inline-block;
    height: 29px;
    position: relative;
    width: 30px;
    border-radius: 50px;
    color: #B8860B;
}
.check {
    display: inline-block;
    height: 29px;
    position: relative;
    width: 30px;
    border-radius: 50px;
    color: green;
}
.not-matched {
	display: inline-block;
    height: 29px;
    position: relative;
    width: 30px;
    border-radius: 50px;
    color: red;
}
.letter {
	color:white;
}
.green {
  	background-color: #6fb936;
}
.result-font{
	color:#434D56;
	font-size:90%;
}

.comparingCircle {
	border: 2px solid blue;
    border-radius: 50%;
    margin-left: -13%;
    margin-top: -25%;
    padding: 22% 88% 105% 28%;
}
#result{
    margin-left: 27.3%;
}
.output-console-body {
	height: 175px !important;
}
#output {
     z-index: 1000000;
     position: absolute; 
     margin-top: 23%;
}
.length {
    border-radius: 50%;
    color: green;
    padding: 1%;
}
.opacity00 {
	opacity: 0;
	pointer-events: none;
	cursor: default;
}
.errorText {
	color: red;
}

#restart, .exit-main {
	opacity: 0;
}
#restartDiv {
	padding-left: 72px;
	position: absolute;
}
.given-text, .index-length-limit {
	outline: none;
}
.ct-code-pink {
	color: #ed138e;
}

.row {
	margin-right: 0px !important;
}

</style>

</head>
<body>

<script type="text/javascript">

	$(document).ready(function() {
		startsWithMethods();
	});
	
</script>

	<h3 class="headings" ><span class="label label-default titles">StartsWith Methods in Action</span></h3>

	<div class = 'codeAndAnimation row'>
		<div class="col-xs-5 code-box">
				<pre class="creamPreTab4">public class StringMethodsDemo {
	public static void main(String[] args) {<div id = 'codeIntro'>		<span id = 'textId'>String text = "<span id = 'changeText' contenteditable="false" class="given-text ct-code-pink " maxlength="9" placeholder="Enter text here" spellcheck="false">Banana</span>"; </span>
		<span id = "startsWithNoparameter">System.out.println("startsWith : " + text.<b>startsWith("<span id = 'prefix' contenteditable="false" class="given-text ct-code-pink " maxlength="9" spellcheck="false">Ban</span>")</b>); </span>
		<span id = "startsWithMethod">System.out.println("startsWith : " + text.<b>startsWith("<span id = 'startsWithText' contenteditable="false" class="given-text ct-code-pink " maxlength="9" spellcheck="false">nan</span>", <span id = 'startsWithIndex' contenteditable="true" class="index-length-limit ct-code-pink" maxlength="0">0</span>)</b>); </span></div>	} <span  class = 'exit-main' style = 'color:blue'>Exiting main method.</span>
}				</pre>
		</div>
	
		<div class = "col-xs-6 animation-box" id = 'animationDiv'></div>
		
	<div id = "output" class="col-xs-offset-3 col-xs-5">
			<div class="output-console" id="consoleId">
					<div class="output-console-title-bar">
							<span class="title">Output</span>
					</div>
							
	<div class="output-console-body" style='color:white'>
<span id="runEditor1"></span>
<span id="runEditor2"></span>
<span id="runEditor3"></span>
<span id="runEditor4"></span>
		</div>
		
			</div>
	</div>
	<div id = 'restartDiv' class = 'col-xs-offset-5'> <button id ='restart' type="button" class="btn btn-success">Restart</button> </div>
	</div>
		
	<div id = "textBoxes" class="row col-xs-offset-0">	
		<div class="row" id="row1">
			<div id="textIndices" class='col-xs-3 result-font' style="text-align:right;margin-top:5px"></div>
			<div id="excecuteIndices" class="col-xs-8"></div>
		</div>
		
		<div class="row" id="row2">
			<div id="enteredText" class='col-xs-3 result-font' style="text-align:right;margin-top:4px"></div>
			<div id="executeBoxes" class="col-xs-8"></div>	
		</div>	
		<div id='compareLength' class='result-font'>  </div> <br>
	</div>
	
	<div id = "startsWithBoxes" class="row col-xs-offset-0">	
		<div class="row" id="swRow">
			<div id="swText" class='col-xs-3 result-font' style="text-align:right;margin-top:4px"></div>
			<div id="swBoxes" class="col-xs-8"></div>	
		</div>	
		<div id='compareLength2' class='result-font'>  </div>
		<div id = 'startWithError' class='result-font remove-typingCursor'> </div>
		<div id= "result" class='results'> &nbsp;</div>
	</div>
	
	<span id = 'space' class = 'nbsps'>&nbsp;&nbsp;</span>
</body>
</html>
