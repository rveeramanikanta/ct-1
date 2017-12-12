<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>operator precedence and associativity</title>
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
<script type="text/javascript" src="/secure/lang/c/js-min/opa.min.js"></script>

<style type="text/css">
.margin-top-10 {
	margin-top: 8px;
}

.margin-top-20 {
	margin-top: 20px;
}

#totalDiv {
    border: 1px solid gray;
    border-radius: 8px;
    height: 345px;
    padding: 10px;
}

.color-red {
	color: red;
}

 #rightDiv {
 	border: 1px solid gray;
    border-radius: 8px;
    font-family: monospace;
    height: 216px;
 }

.creampretab {
	-moz-tab-size: 4;
    background-color: #f5f5f5;
    font-family: monospace;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: #333;
    display: block;
    font-size: 12px;
    line-height: 1.821;
    margin: 0 0 10px;
    padding: 10px;
}

.errMsg {
	color: red;
	font-weight: bold;
	font-family: monospace;
}

[contenteditable=true] {
	outline: none;
	font-family: monospace;
}

.margin-top {
	 margin-top: 10px;
    text-align: center;
}

.ui-effects-transfer {
	border: 1px solid white;
	border-radius: 6px;
	position: relative;
	z-index: 10000001 !important;
}

.user-btn, .user-btn1, .user-btn2 {
	background-color: green;
}

.background-color-yellow {
	background-color: yellow;
}

.background-color-blue {
	background-color: red;
}

.position-relative {
	position: relative;
}


#outputDiv {
	margin-top: 5px;
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
	height: 53px;
	padding: 10px;
}

.background-color-black {
	background-color: black;
}

.color-white {
	color: white;
}

.color-black {
	color: black;
}

.width {
	width: 90px;
}

.width1 {
	width: 32px;
}

.text-highlight {
	background-color: black;
    border: 1px solid green;
    border-radius: 5px;
    color: white;
}

.padding-5 {
	padding: 5px;
	padding-left: 1px;
}
</style>
</head>
<body>
<script type="text/javascript">
	$(document).ready(function() {
		operatorPrecedenceAssociativityReady();
	});
</script>
<div class='text-center margin-top-20'>
	<h4 class='label ct-demo-heading' id='demoTitle'>Operator Precedence and Associativity</h4>
</div>
<div class="col-xs-offset-1 col-xs-10">
	<div class="margin-top-20" id="totalDiv">
		<div id="typingDiv1">
				<ul>
					<li  id="li1" class="opacity00">
						In an expression for example <b class="text-highlight">int total = x + y + (z * x) - k;</b>
					  	when two or more operators (<b style='color:green'>+</b>, <b style='color:green'> *</b>, <b style='color:green'> -</b>) 
					  	are used then there are certain rules to be followed to evaluate the expression.<br>
						These rules are <b>hierarchical</b> in nature.
					</li>
					<li id="li2" class="opacity00">
						The <b>hierarchical rules</b> specify the order in which the operators are evaluated. This order is called <b>precedence</b>.<br>
						In an expression the operator which is evaluated first is said to have highest precedence compared to other operators.<br>
						Let us consider how the following example evaluates:&nbsp;&nbsp;
						<b class ='color-red'>2 + 3 * 5 - 4</b>
						&emsp; <span class='user-btn1 introjs-button' onclick='flipFirstEqtn()'>Next &#8594;</span><br>
					</li>
					</ul>
		</div>
		<div class="opacity00" id="firstEqtnFlip" style="margin-left: 25px;">
			<span id="first" class="margin-top position-relative">
			<b>
			<span id='flip3' style='display: inline-block;'>
			<span id='flip2' style='display: inline-block;'>
			2 + 
			<span id='flip1' style='display: inline-block;'>3 * 5</span>
			</span>
			- 4</span></b></span>
		</div>
			<div class="opacity00" id="secondEqtnFlip" style="margin-left: 25px;">
				<span id="second" class="margin-top position-relative">2 + 3 * 5 - 4</span>
			</div>
			<div class="opacity00" id="thirdEqtnFlip" style="margin-left: 25px;">
				<span id="third" class="margin-top position-relative">2 + 3 * 5 - 4</span>
			</div>
		<div class="typing-two opacity00" id="typingDiv2">
				<ul>
					<li id="li3" class="opacity00">
						It is also possible for two or more operators to have the same precedence in which case there is an aspect called <b>associativity</b>
						which place a role. 
					</li>
					<li id="li4" class="opacity00">
						<b>Associativity</b> refers to the order in which <b style='color:green'>C</b> evaluates the operators having the same precedence.
						 Such operators can associate either from right to left or	left to right.<br>Let us consider how the following example evaluates:&nbsp;&nbsp;
						 <b class ='color-red'>2 + 3 + 6 - 5</b>
						&emsp; <span class='user-btn2 introjs-button' onclick='flipSecondEqtn()'>Next &#8594;</span><br>
					</li>
				</ul>
	   </div>
	   <div class="opacity00" id="firstInnerEqtnFlip" style="margin-left: 25px;">
			<span id="firstInner" class="margin-top position-relative"><b>
			<span id='thirdFlip' style='display: inline-block;'>
			<span id='secondFlip' style='display: inline-block;'>
			<span id='firstFlip' style='display: inline-block;'>
			2 + 3</span> + 6</span> - 5</span>
			</b></span>
		</div>
		<div class="opacity00" id="secondInnerEqtnFlip" style="margin-left: 25px;">
				<span id="secondInner" class="margin-top position-relative">2 + 3 + 6 - 4</span>
		</div>
		<div class="opacity00" id="thirdInnerEqtnFlip" style="margin-left: 25px;">
				<span id="thirdInner" class="margin-top position-relative">2 + 3 + 6 - 4</span>
		</div>
	</div>	
</div>
<div class="col-xs-12  margin-top-20">
<div class="col-xs-offset-0 col-xs-6">
	<div id="leftDiv" class="opacity00"><pre class="creampretab background-color-black color-white"><span id="links">#include&lt;stdio.h&gt;</span>
void main() {
	<span id="editNum">int num1 = <span contenteditable='true' maxlength='1' id='firstVal' class="padding-5" spellcheck="false">4</span>;
	int num2 = <span contenteditable='true' maxlength='1' id='secondVal' class="padding-5" spellcheck="false">6</span>;
	int num3 = <span contenteditable='true' maxlength='1' id='thirdVal' class="padding-5" spellcheck="false">3</span>;
	int num4 = <span contenteditable='true' maxlength='1' id='fourthVal'  class="padding-5" spellcheck="false">2</span>;</span>
	<span id="eqtnExe1">int num5 = num1 * num2 - num3 + ((num2 + num3) * num4) / num2;</span>
	<span id="printf">printf("The value of num5 is : %d /n", num5);</span>
}</pre>	
	</div>
</div>
<div class="col-xs-6">
	<div id="rightDiv" class="opacity00 background-color-black">
		<div id="eqtnRef" class="margin-top position-relative color-white opacity00">int num5 = num1 * num2 - num3 + ((num2 + num3) * num4) / num2;</div>
		
		<div id="eqtnExe2" class="margin-top position-relative color-white opacity00"><span class="opacity00">int num5</span> = <span id="totalSum" style="display: inline-block;"> 
			<span id="num1num2num3Sub" style="display: inline-block;"> 
			<span id="num1num2" style="display: inline-block;">
			<span id="num1" style="display: inline-block;">num1</span>
		  * <span id="num21" style="display: inline-block;">num2</span></span> - <span id="num31"  style="display: inline-block;">num3</span></span> + 
		  <span id="divide" style="display: inline-block;"><span id="firstMul" style="display: inline-block;">(
		  (<span id="firstExc" style="display: inline-block;"><span id="num22" style="display: inline-block;"> num2 </span> + 
		  <span id="num32" style="display: inline-block;"> num3 </span></span>) * <span id="num4" style="display: inline-block;">num4</span>
		  )</span> / <span id="num23" style="display: inline-block;">num2</span></span></span>;</div>
		  
		<div id="eqtnExe3" class="margin-top position-relative color-white opacity00"><span class="opacity00">int num5</span> = num1 * num2 - num3 + ((num2 + num3) * num4) / num2;</div>
		<div id="eqtnExe4" class="margin-top position-relative color-white opacity00"><span class="opacity00">int num5</span> = num1 * num2 - num3 + ((num2 + num3) * num4) / num2;</div>
		<div id="eqtnExe5" class="margin-top position-relative color-white opacity00"><span class="opacity00">int num5</span> = num1 * num2 - num3 + ((num2 + num3) * num4) / num2;</div>
		<div id="eqtnExe6" class="margin-top position-relative color-white opacity00"><span class="opacity00">int num5</span> = num1 * num2 - num3 + ((num2 + num3) * num4) / num2;</div>
		<div id="eqtnExe7" class="margin-top position-relative color-white opacity00"><span class="opacity00">int num5</span> = num1 * num2 - num3 + ((num2 + num3) * num4) / num2;</div>
	</div>
</div>
</div>
<div class="col-xs-12">
	<div class="col-xs-offset-4 col-xs-4">
		<div id="outputDiv" class="opacity00">
			<div class="output-console-title-bar">
				<span class="title">Output</span>
			</div>
			<div class="output-console-body" id="body">
				<span id="output"></span>
			</div>
		</div>
	</div>
</div>
<div class="col-xs-12 text-center margin-top-20">
	<span class="btn btn-warning btn-sm opacity00" id="restart">Restart</span>
</div>
</body>
</html>
