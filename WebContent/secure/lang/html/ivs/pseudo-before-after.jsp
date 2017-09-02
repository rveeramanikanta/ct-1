<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<title>pseudo before after classes</title>
<style type="text/css">

.introjs-tooltip {
	min-width: 250px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.margin-top-20 {
	margin-top: 20px;
}

.padding0 {
	padding: 0;
}

.btn-success {
	font-weight: 700;
}


pre {
    tab-size:4;
    -moz-tab-size: 4;
    -o-tab-size:  4;
 	white-space: pre-wrap;
 	border : 2px solid black;
 	font-size: 11px;
}

.input-css {
	width : 100px;
	border: medium none;
}

#browser {
	border: 2px solid;
}

img {
	width: 100%;
}

#browserText  {
	margin: 4px;
	font-family: monospace;
}

.user-btn {
	background-color: green;
}

.skip-btn {
	background-color: orange;
}

.ui-effects-transfer {
	border: 1px solid #003399;
	z-index: 99999999;
}

.z-index {
	position: relative;
	z-index: 10000001 !important;
	border-radius: 4px;
	padding: 4px;
	background: white;
}

.display-inline-block {
	display: inline-block;
}

.abc {
	display: inline;
}

.first-line:FIRST-LINE {
	color: blue;
}


p > span:NTH-CHILD(2),p > span:LAST-CHILD {
	width:  0px;
	background: red;
	height: 18px;
}

.bg-yellow {
	background: yellow;
}

.visited {
	background: green;
}

input:focus {
	background:#fff85a;
}
 
 p > i {
color:green;
}

/* *********************** starting of the browser styles ********************* */
.container {
	padding: 0px;
	margin-top: 30px;
	border: 2px solid grey;
}

.active {
	display: flex;
	align-items: center;
}

#browser {
	margin-top: 0px;
}

#browser1 {
	padding-bottom: 6px;
	padding-top: 6px;
} 

#browserText {
	margin: 4px;
}

#plus {
	color: white;
	font-size: 18px;
}

.url {
	display: flex;
	border: 1px solid;
	align-items: center;
}

.fa-display {
	display: flex;
	align-items: center;
}

ul.tabs {
    margin: 0 0 -4px;
    max-height: 26px;
    overflow: hidden;
    line-height: 25px;
    list-style-type: none;
    display: inline-block;
}

.padding00 {
	padding: 0;
}

ul.tabs > li.active {
  background: #efefef;
}

ul.tabs > li {
	margin: 2px 0 -4px;
	position: relative;
	width: 170px;
	border-left: 20px solid rgb(10, 5, 5);
	border-bottom: 24px solid rgba(211, 211, 211, 0.21);
	border-right: 20px solid rgb(10, 5, 5);
	height: 0px;
}

.arrow {
	color: lightgray;
    font-size: 15px;
}

.fa {
    cursor: default;
}

.tabs {
  height:25px;
  padding: 0;
  overflow:visible;
}

#browser .usr-text {
	border: medium none;
	font-family: Bitstream Vera Serif Bold,sans-serif;
	width: 100%;
}

.tab-container {
   	background: #0a0505 none repeat scroll 0 0;
}

.html-body {
	border: 1px solid gray;
	background: white;
}

.margin-top5 {
	margin-top: 5px;
}

.margin-top20 {
	margin-top: 20px;
}

p {
	margin: 0 !important;
}

/*********************** Ending of the browser styles ********************* */

.position {
	position: relative;
	display: inline-block;
	min-width: 15px;
	min-height: 15px;
}

.length-error-text {
	color: red;
	font-weight: bold;
}

[contenteditable="true"] {
    outline: medium none;
}

</style>
</head>

<body>
	<div class='text-center margin-top-20'>
		<h4 class='label ct-demo-heading' id='heading'>Pseudo Elements</h4>
	</div>


	<div class='col-xs-12 text-center margin-top-20'>
		<span id='restart'
			class='btn btn-warning btn-sm opacity00 margin-top20'>Restart
			&nbsp;<i class='fa fa-refresh'></i>
		</span>
	</div>
	<div class='col-xs-12 text-center margin-top-20'>
		<div class='col-xs-offset-3 col-xs-6 opacity00' id='topicsDiv'>
			<div class='col-xs-3 padding0'>
				<button id='before' onclick="selectorClick('5','0')" type="button"
					class="btn btn-success">:before</button>
			</div>
			<div class='col-xs-3 padding0'>
				<button id='after' onclick="selectorClick('8','1')" type="button"
					class="btn btn-success">:after</button>
			</div>
			<div class='col-xs-3 padding0'>
				<button id='firstLine' onclick="selectorClick('11','2')"
					type="button" class="btn btn-success">:first-line</button>
			</div>

			<div class='col-xs-3 padding0'>
				<button id='firstLetter' onclick="selectorClick('14', 3)"
					type="button" class="btn btn-success">:first-letter</button>
					<!--  -->
					<!-- <input id="selectorOne" class="input-css" maxlength='10'> -->
			</div>
		</div>
	</div>
	<div class='col-xs-12 margin-top-20'>
		<div id='htmlCode' class='col-xs-6'>
			<div class='col-xs-12'>
				<pre>
&lt;html&gt;
&lt;head&gt;
<span class='openStyle'>&lt;style&gt;</span>
<div id='styleDiv'><span id='totalStyleOne'><div id="selectorOne" class="position" contenteditable='true' spellcheck='false'  maxlength='10'></div> {
	<span id='beforeProperty1'>content:&nbsp;'Chapter-';</span>
	<span id='beforeProperty2'>color:&nbsp;green;</span>
}</span>
<span id='totalStyleTwo'><div id="selectorTwo" class="position" contenteditable='true' spellcheck='false'  maxlength='10'></div> {
	<span id='afterProperty1'>content:&nbsp;'(End of para)';</span>
	<span id='afterProperty2'>color:&nbsp;grey;</span>
}</span>
<span id='totalStyleThree'><div id="selectorThree" class="position" contenteditable='true' spellcheck='false'  maxlength='15'></div> {
	<span id='firstLineProperty1'>color:&nbsp;blue;</span>
}</span>
<span id='totalStyleFour'><div id="selectorFour" class="position" contenteditable='true' spellcheck='false'  maxlength='18'></div> {
	<span id='firstLetterProperty1'>color:&nbsp;red;</span>
	<span id='firstLetterProperty2'>font-size:&nbsp;35px;</span>
}</span>
</div>&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;<div id='codeDiv' class='opacity00'>	&lt;ol&gt;
		<span><span>&lt;li&gt;Pseudo :before element can be used to append the</span>
			<span>content to the starting position.&lt;/li&gt;</span></span>
		<span><span>&lt;li&gt;Pseudo :after element can be used to append the</span>
			<span>content to the ending position.&lt;/li&gt;</span></span>
		<span><span>&lt;li&gt;Pseudo :first-line element can be used to apply the </span>
			<span>styles for first line of given element.&lt;/li&gt;</span></span>
		<span><span>&lt;li&gt;Pseudo :first-letter element can be used to</span>
			<span>apply the styles for first letter of given element content.&lt;/li&gt;</span></span>
	&lt;/ol&gt;</div>&lt;body&gt;
&lt;/html&gt;
		</pre>
			</div>
		</div>
		<div class='col-xs-6'>
					<div class='opacity00 container col-xs-12' id="browser">
					<div class='tab-container'>
		<ul class="tabs clearfix">
			<li class="active">
				<div class="col-xs-10 margin-top20">insert title</div>
				<i class="col-xs-2 fa fa-times fa-sm margin-top20"></i>
			</li>
		</ul>
		<span id ="plus"><i class="fa fa-plus"></i></span>
	</div>
	<div id='browser1' class='col-xs-12 padding00'>
		<div class='col-xs-2 padding00 text-center'>
			<span id='arrowCircle' class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-left arrow"></i></span>
			<span  class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-right arrow"></i></span>
			<span  class='col-xs-4 padding00 margin-top5'><i class="fa fa-rotate-right fa-1x"></i></span>
		</div>
		<div class='col-xs-8 padding00 text-center url'>
			<input type="text" maxlength="100" class="usr-text" class="padding00" disabled="disabled" value="basic.jsp">
			<span class='col-xs-1 padding00'><i class="fa fa-star-o fa-1x"></i></span>
		</div>
		<div class='col-xs-2 padding00 fa-display text-center'>
			<span class='col-xs-6 padding00 margin-top5'><i class="fa fa-home fa-1x"></i></span>
			<span class='col-xs-6 padding00 margin-top5'><i  class="fa fa-bars fa-1x"></i></span>
		</div>
	</div>
	<div class="col-xs-12 html-body padding00" id="htmlBody">
		<div id='browserText' class="opacity00">
			<p class="first-line abc"><i></i><span></span>1. Pseudo :before element can be used to append the content to the starting position.<span></span></p><br/>
				<p class="first-line abc"><i></i><span></span>2. Pseudo :after element can be used to append the content to the ending position.<span></span></p><br/>
				<p class="first-line abc"><i></i><span></span>3. Pseudo :first-line element can be used to apply the styles for first line of given element.<span></span></p><br/>
				<p class="first-line abc"><i></i><span></span>4. Pseudo :first-letter element can be used to apply the styles for  first letter of given element content.the styles for first letter of given element content.<span></span></p>
		</div>
	</div>
	</div>
		</div>
	</div>
<script type="text/javascript">

var beforeFlag = true;
var afterFlag = true;
var firstLineFlag = true;
var firstLetterFlag = true;
var flagCount = 0;
$(document).ready(function() {
	$('[contenteditable="true"]').attr('contenteditable', 'false')
	$('button,input').attr('disabled','disabled');
	$('pre,#browser,#codeDiv').addClass('opacity00');
	initIntroJS();
	$('input').val('');
	$('#restart').click(function() {
		location.reload();
	});
	$("body").attr({ondragstart :"return false"});
  	 $('*').bind("cut copy paste",function(e) { 
    	e.preventDefault();
  	});
});

	function initIntroJS() {
	intro = introJs();
	intro.setOptions({
		steps : [  {
			element :"#heading",
			intro : "",
			
		}, {
			element : "#topicsDiv",
			intro : "",
			position : "bottom"
		}, {
			element : "#codeDiv",
			intro : "",
			position : "top"
		}, {
			element : "#before",
			intro : "",
			position : "bottom"
		}, {
			element : "#totalStyleOne",
			intro : "",
			position : "bottom"
		}, {
			element : "#selectorOne",
			intro : "",
			position : "bottom"
		}, {
			element : "#after",
			intro : "",
			position : "bottom"
		}, {
			element : "#totalStyleTwo",
			intro : "",
			position : "right"
		}, {
			element : "#selectorTwo",
			intro : "",
			position : "bottom"
		} ,{
			element : "#firstLine",
			intro : "",
			position : "bottom"
		}, {
			element : "#totalStyleThree",
			intro : "",
			position : "bottom"
		}, {
			element : "#selectorThree",
			intro : "",
			position : "bottom"
		}, {
			element : "#firstLetter",
			intro : "",
			position : "bottom"
		}, {
			element : "#totalStyleFour",
			intro : "",
			position : "top"
		}, {
			element : "#selectorFour",
			intro : "",
			position : "top"
		}, {
			element : "#topicsDiv",
			intro : "",
			position : "bottom"
		}, {
			element : "#restart",
			intro : "",
			position : "top"
		}]});
		intro.onafterchange(function(targetElement) {
			var elementId = targetElement.id;
			switch (elementId) {
			case "heading":
				$(".introjs-nextbutton").hide();
				var text = "<b class='ct-code-b-yellow'>selectors</b> are patterns used to select the element(s) you want to style.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
				break;
				
			case "topicsDiv":
				$('pre').removeClass('opacity00');
				$(".introjs-nextbutton").hide();
				$('#topicsDiv').removeClass('opacity00');
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (intro._currentStep == 1) {
						$('#topicsDiv').removeClass('opacity00');
						var text = "We are going to discuss these <b class='ct-code-b-yellow'>pseudo elements</b>.";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton').show();
						});
					} else {
						$('#htmlCode, #browser').removeClass('z-index');
						$('.user-btn').remove();
						$('.bg-yellow').removeClass('bg-yellow');
						$('#before, #after, #firstLine, #firstLetter').removeAttr('disabled');
						var text = "You can select anyone.";
						typing(".introjs-tooltiptext", text, function() {
							intro.insertOption(intro._currentStep + 1, getStep("#restart", "", "right"));
							$('.skip-btn').remove();
							$(".introjs-tooltipbuttons").append('<a class="introjs-button skip-btn" onclick="intro.goToStep(17)">Skip →</a>');
						});
					}
				});
				break;
				
			case "codeDiv":
				$('#browser [maxlength]').prop('value','www.codetantra.com/pseudo-before-after.jsp');
				$('#codeDiv').removeClass('opacity00');
				$(".introjs-nextbutton").hide();
				var text = "This html content will be displayed in the borwser.";
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="browserReveal()">Next →</a>');
					});
				});
				break;
				
			case "before":
				$('button:eq(0)').addClass('z-index visited');
				$(".introjs-nextbutton").hide();
				var text = "<b class='ct-code-b-yellow'>:before</b> pseudo element can use to append content to starting position of an element content.";
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing(".introjs-tooltiptext", text, function() {
						$('.visited').removeAttr('disabled');
						intro.refresh();	
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="selectorClick('+"&#34;5&#34;"+','+"&#34;0&#34;"+')">Next →</a>');
					});
				});
				break;
				
			case "totalStyleOne":
				$(".introjs-nextbutton").hide();
				$('.user-btn').remove();
				$('.introjs-helperLayer ').one('transitionend', function() {
					if ($('div .position:eq(0)').text() == "") {
						var text = "<b class='ct-code-b-yellow'>content:'Chapter-'</b> property value is used to append the text before or after "
									+"the html element text based on the pseudo element.</br><b class='ct-code-b-yellow'>color:green</b> "
									+"property value is used to change the text color to green";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton').show();
						});
				} else {
					$('[contenteditable="true"]').attr('contenteditable', 'false');
					$('#codeDiv,#browser').addClass('z-index');
					//$('#codeDiv > span > span').addClass('bg-yellow');
					var text = "Apply this css rule based on selector.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="beforeAnimation()">Next →</a>');
					});
				}
			});
				break;
			case "selectorOne":
				$("p > span:nth-child(2)").removeAttr('style').empty();
				$('[contenteditable="false"]').attr('contenteditable', 'true');
				$('div .position:eq(0)').text("");
				if (beforeFlag) {
					beforeFlag = !beforeFlag;
					flagCount++;
				}
				$(".introjs-nextbutton").hide();
				var text = "Enter <b class='ct-code-b-yellow'>li:before</b>";
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing(".introjs-tooltiptext", text, function() {
						selectorChecking("div .position:eq(0)","li:before","intro.goToStep(5)");
					});
				});
				break;
				
			case "after":
				$('.user-btn').remove();
				$('button:eq(1)').addClass('z-index visited');
				$('div.z-index').removeClass('z-index');
				$(".introjs-nextbutton").hide();
				var text = "<b class='ct-code-b-yellow'>:after</b> pseudo element can use to append content to ending position of an element content.";
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing(".introjs-tooltiptext", text, function() {
						$('.visited').removeAttr('disabled');
						intro.refresh();	
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="selectorClick('+"&#34;8&#34;"+')">Next →</a>');
					});
				});
				break;
				
			case "totalStyleTwo": 
				$(".introjs-nextbutton").hide();
				$('.user-btn').remove();
				$('.introjs-helperLayer ').one('transitionend', function() {
					if ($('div .position:eq(1)').text() == "") {
						var text = "<b class='ct-code-b-yellow'>content:'(End of para)'</b> property value is used to append the text before or after "
									+"the html element text based on the pseudo element.</br><b class='ct-code-b-yellow'>color:grey</b> "
									+"property value is used to change the text color to grey";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton').show();
						});
				} else {
					$('#codeDiv,#browser').addClass('z-index');
					$('[contenteditable="true"]').attr('contenteditable', 'false');
					//$('#codeDiv > span > span').addClass('bg-yellow');
					var text = "Apply this css rule based on selector.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="afterAnimation()">Next →</a>');
					});
				}
			});
				break;
				
			case "selectorTwo":
				$("#browserText > p > span:last-child").removeAttr('style').empty();
				$('[contenteditable="false"]').attr('contenteditable', 'true');
				if (afterFlag) {
					afterFlag = !afterFlag;
					flagCount++;
				}
				$(".introjs-nextbutton").hide();
				var text = "Enter <b class='ct-code-b-yellow'>li:after</b>";
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing(".introjs-tooltiptext", text, function() {
						selectorChecking("div .position:eq(1)","li:after","intro.goToStep(8)");
					});
				});
				break;
				
			case "firstLine":
				$('.user-btn').remove();
				$('button:eq(2)').addClass('z-index visited');
				$('div.z-index').removeClass('z-index');
				$(".introjs-nextbutton").hide();
				var text = "<b class='ct-code-b-yellow'>:first-line</b> pseudo element can select first-line of a given element.";
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing(".introjs-tooltiptext", text, function() {
						$('.visited').removeAttr('disabled');
						intro.refresh();	
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="selectorClick('+"&#34;11&#34;"+')">Next →</a>');
					});
				});
				break;
				
			case "totalStyleThree":
				$(".introjs-nextbutton").hide();
				$('.user-btn').remove();
				$('.introjs-helperLayer ').one('transitionend', function() {
					if ($('div .position:eq(2)').text() == "") {
						var text = "<b class='ct-code-b-yellow'>color:blue</b> "
									+"property value is used to change the text color to blue";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton').show();
						});
				} else {
					$('#codeDiv,#browser').addClass('z-index');
					//$('#codeDiv > span > span').addClass('bg-yellow');
					$('[contenteditable="true"]').attr('contenteditable', 'false');
					var text = "Apply this css rule based on selector.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="firstLineAnimation()">Next →</a>');
					});
				}
			});
				break;
				
			case "selectorThree":
				$("#browserText .first-line").addClass('abc');
				$('.display-inline-block').removeClass('display-inline-block');
				$('[contenteditable="false"]').attr('contenteditable', 'true');
				if (firstLineFlag) {
					firstLineFlag = !firstLineFlag;
					flagCount++;
				}
				$(".introjs-nextbutton").hide();
				var text = "Enter <b class='ct-code-b-yellow'>li:first-line</b>";
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing(".introjs-tooltiptext", text, function() {
						selectorChecking("div .position:eq(2)","li:first-line","intro.goToStep(11)");
					});
				});
				break;
				
			case "firstLetter":
				$('.user-btn').remove();
				$('button:eq(3)').addClass('z-index visited');
				$('div.z-index').removeClass('z-index');
				$(".introjs-nextbutton").hide();
				var text = "<b class='ct-code-b-yellow'>:first-letter</b> pseudo element can select first-letter of a given element.";
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing(".introjs-tooltiptext", text, function() {
						$('.visited').removeAttr('disabled');
						intro.refresh();	
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="selectorClick('+"&#34;14&#34;"+')">Next →</a>');
					});
				});
				break;
				
				
			case "totalStyleFour":
				$(".introjs-nextbutton").hide();
				$('.user-btn').remove();
				$('.introjs-helperLayer ').one('transitionend', function() {
					if ($('div .position:eq(3)').text() == "") {
						var text = "<b class='ct-code-b-yellow'>color:red</b> property value can use to change the element text to red color"
									+".</br><b class='ct-code-b-yellow'>font-size:35px;</b> "
									+"property value is used to change the font-size to 35px;";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton').show();
						});
				} else {
					$('#codeDiv,#browser').addClass('z-index');
					$('[contenteditable="true"]').attr('contenteditable', 'false');
					//$('#codeDiv > span > span').addClass('bg-yellow');
					var text = "Apply this css rule based on selector.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="firstLetterAnimation()">Next →</a>');
					});
				}
			});
				break;
				
			case "selectorFour":
				$("p > i").removeAttr('style');
				$('[contenteditable="false"]').attr('contenteditable', 'true');
				if (firstLetterFlag) {
					firstLetterFlag = !firstLetterFlag;
					flagCount++;
				}
				$(".introjs-nextbutton").hide();
				var text = "Enter <b class='ct-code-b-yellow'>li:first-letter</b>";
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing(".introjs-tooltiptext", text, function() {
						selectorChecking("div .position:eq(3)","li:first-letter","intro.goToStep(14)");
					});
				});
				break;
				
			case "restart":
				$('.user-btn, .skip-btn').remove();
				$('.z-index').removeClass('z-index');
				$('button').attr('disabled','disabled');
				$(".introjs-nextbutton").hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "Click to restart.";
					typing(".introjs-tooltiptext", text, function() {
						$('#restart').removeClass('opacity00');
					});
				});
				break;
			}
		});
		intro.setOption('showStepNumbers', false);
		intro.setOption('exitOnOverlayClick', false);
		intro.setOption('exitOnEsc', false);
		intro.setOption('keyboardNavigation', false);
		intro.start();
		$('.introjs-prevbutton').hide();
		$('.introjs-skipbutton').hide();
		$('.introjs-bullets').hide();
	}
	
	function typing(selector, text, callBackFunction) {
		$(selector).typewriting(text, {
			"typing_interval" : 10,
			"cursor_color" : 'white',
		}, function() {
			$(selector).removeClass("typingCursor");
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		});
	}
	
	 function browserReveal() {
		$('.user-btn').remove();
		$('#browser').removeClass('opacity00').addClass('z-index');
		$('#codeDiv').effect("transfer", {to: $('#browserText'), className: "ui-effects-transfer"}, 800, function() {
			$('#browserText').removeClass('opacity00');
			$('.introjs-nextbutton').show();
		});
	}
	 
	 
	function selectorClick(introStep,inputBoxNumber) {
		$('div .position').eq(inputBoxNumber).text('');
		$('.user-btn').remove();
		$('button').attr('disabled','disabled');
		intro.goToStep(introStep);
	}
	
	 function selectorChecking(selector,pseudoSelector,stepNumber) {
		$(selector).text("").focus();
		$(selector).on("keyup", function(e) {
			intro.refresh();
			var selectedText = $(selector).text().trim();
			if (selectedText == pseudoSelector) {
				$('.user-btn').remove();
				$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="'+stepNumber+'">Next &#8594;</a>');
			} else {
				$('.user-btn').remove();
			}
		});
		$(selector).on("keydown", function(e) {
			$('.length-error-text').remove();
			var max = $(this).attr("maxlength");
			if(e.keyCode === 13) {
				e.preventDefault();
			    return false;
			}
			
			if ($.inArray(e.keyCode, [46, 8, 9, 27, 37, 39]) !== -1) {
				return;
			}
			if ($(this).text().length > max-1) {
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>String length to "+ max +".</span>");
				e.preventDefault();
			}
		});
	 }
	 
	 function beforeAnimation() {
		 $('.user-btn').remove();
		 $('#codeDiv > span:eq(0)').effect( "highlight",{color: 'yellow'}, 1000);
		 $('#codeDiv > span:eq(0)').effect("transfer", {to: $("p > span:nth-child(2):eq(0)"), className: "ui-effects-transfer"}, 800, function() {
			 $('p > span:nth-child(2):eq(0)').animate({ width :'65px'},'slow', function() {
				 $(this).text('Chapter-').css('background','white').css('color','green');
				 $('#codeDiv > span:eq(1)').effect( "highlight",{color: 'yellow'}, 1000);
				 $('#codeDiv > span:eq(1)').effect("transfer", {to: $("p > span:nth-child(2):eq(1)"), className: "ui-effects-transfer"}, 800, function() {
					 $('p > span:nth-child(2):eq(1)').animate({ width :'65px'},'slow', function() {
						 $(this).text('Chapter-').css('background','white').css('color','green');
						 $('#codeDiv > span:eq(2)').effect( "highlight",{color: 'yellow'}, 1000);
						 $('#codeDiv > span:eq(2)').effect("transfer", {to: $("p > span:nth-child(2):eq(2)"), className: "ui-effects-transfer"}, 800, function() {
							 $('p > span:nth-child(2):eq(2)').animate({ width :'65px'},'slow', function() {
								 $(this).text('Chapter-').css('background','white').css('color','green');
								 $('#codeDiv > span:eq(3)').effect( "highlight",{color: 'yellow'}, 1000);
								 $('#codeDiv > span:eq(3)').effect("transfer", {to: $("p > span:nth-child(2):eq(3)"), className: "ui-effects-transfer"}, 800, function() {
									 $('p > span:nth-child(2):eq(3)').animate({ width :'65px'},'slow', function() {
										 $(this).text('Chapter-').css('background','white').css('color','green');
										 $('.bg-yellow').removeClass('bg-yellow');
										 dynamicCalling();
									 });
								 });
							 });
						 });
					 });
				 });
			 });
		 });
	 }
	 
	  function afterAnimation() {
		 $('.user-btn').remove();
		 $('#codeDiv > span:eq(0)').effect( "highlight",{color: 'yellow'}, 1000);
		 $('#codeDiv > span:eq(0)').effect("transfer", {to: $("#browserText > p > span:last-child:eq(0)"), className: "ui-effects-transfer"}, 800, function() {
			 $('#browserText > p > span:last-child:eq(0)').animate({ width :'100px'},'slow', function() {
				 $(this).text(' (End of para)').css({'background':'white','color':'grey','display':'inline'});
				 $('#codeDiv > span:eq(1)').effect( "highlight",{color: 'yellow'}, 1000);
				 $('#codeDiv > span:eq(1)').effect("transfer", {to: $("#browserText > p > span:last-child:eq(1)"), className: "ui-effects-transfer"}, 800, function() {
					 $('#browserText > p > span:last-child:eq(1)').animate({ width :'100px'},'slow', function() {
						 $(this).text(' (End of para)').css({'background':'white','color':'grey','display':'inline'});
						 $('#codeDiv > span:eq(2)').effect( "highlight",{color: 'yellow'}, 1000);
						 $('#codeDiv > span:eq(2)').effect("transfer", {to: $("#browserText > p > span:last-child:eq(2)"), className: "ui-effects-transfer"}, 800, function() {
							 $('#browserText > p > span:last-child:eq(2)').animate({ width :'100px'},'slow', function() {
								 $(this).text(' (End of para)').css({'background':'white','color':'grey','display':'inline'});
								 $('#codeDiv > span:eq(3)').effect( "highlight",{color: 'yellow'}, 1000);
								 $('#codeDiv > span:eq(3)').effect("transfer", {to: $("#browserText > p > span:last-child:eq(3)"), className: "ui-effects-transfer"}, 800, function() {
									 $('#browserText > p > span:last-child:eq(3)').animate({ width :'100px'},'slow', function() {
										 $(this).text(' (End of para)').css({'background':'white','color':'grey','display':'inline'});
										 dynamicCalling();
									 });
								 });
							 });
						 });
					 });
				 });
			 });
		 });
	 } 
	 
	/*  function firstLineAnimation() {
		 $('.user-btn').remove();
		 $(".bg-yellow").parent().eq(0).effect("transfer", {to: $("p > span:nth-last-child(3):eq(0)"), className: "ui-effects-transfer"}, 1500, function() {
			  $('p > span:nth-last-child(3):eq(0)').addClass('display-inline-block');
			 $(".bg-yellow").parent().eq(1).effect("transfer", {to: $("p > span:nth-last-child(3):eq(1)"), className: "ui-effects-transfer"}, 1500, function() {
				 $('p > span:nth-last-child(3):eq(1)').addClass('display-inline-block');
				 $(".bg-yellow").parent().eq(2).effect("transfer", {to: $("p > span:nth-last-child(3):eq(2)"), className: "ui-effects-transfer"}, 1500, function() {
					 $('p > span:nth-last-child(3):eq(2)').addClass('display-inline-block');
					 dynamicCalling();
				 });
			 });
		 });
	 } */
	 
	 
	 function firstLineAnimation() {
		 $('.user-btn').remove();
		 $('#codeDiv > span:eq(0)').effect( "highlight",{color: 'yellow'}, 1000);
		 $('#codeDiv > span:eq(0)').effect("transfer", {to: $(".first-line:eq(0)"), className: "ui-effects-transfer"}, 800, function() {
			  $('.first-line:eq(0)').removeClass('abc').addClass('display-inline-block');
			  $('#codeDiv > span:eq(1)').effect( "highlight",{color: 'yellow'}, 1000);
			  $('#codeDiv > span:eq(1)').effect("transfer", {to: $(".first-line:eq(1)"), className: "ui-effects-transfer"}, 800, function() {
				 $('.first-line:eq(1)').removeClass('abc').addClass('display-inline-block');
				 $('#codeDiv > span:eq(2)').effect( "highlight",{color: 'yellow'}, 1000);
				 $('#codeDiv > span:eq(2)').effect("transfer", {to: $(".first-line:eq(2)"), className: "ui-effects-transfer"}, 800, function() {
					 $('.first-line:eq(2)').removeClass('abc').addClass('display-inline-block');
					 $('#codeDiv > span:eq(3)').effect( "highlight",{color: 'yellow'}, 1000);
					 $('#codeDiv > span:eq(3)').effect("transfer", {to: $(".first-line:eq(3)"), className: "ui-effects-transfer"}, 800, function() {
						 $('.first-line:eq(3)').removeClass('abc').addClass('display-inline-block');
						 dynamicCalling();
					 });
				 });
			 });
		 });
	 }
	 
	 
	function firstLetterAnimation() {
		 $('.user-btn').remove();
		 $('#codeDiv > span:eq(0)').effect( "highlight",{color: 'yellow'}, 1000);
		 $('#codeDiv > span:eq(0)').effect("transfer", {to: $("p > i:eq(0)"), className: "ui-effects-transfer"}, 800, function() {
			 $('p > i:eq(0)').text('C').css({'font-size':'35px', 'color':'red'});
			 $("p > span:nth-child(2):eq(0)").text('hapter-');
			 $('#codeDiv > span:eq(1)').effect( "highlight",{color: 'yellow'}, 1000);
			 $('#codeDiv > span:eq(1)').effect("transfer", {to: $("p > i:eq(1)"), className: "ui-effects-transfer"}, 800, function() {
				 $('p > i:eq(1)').text('C').css({'font-size':'35px', 'color':'red'});
				 $("p > span:nth-child(2):eq(1)").text('hapter-');
				 $('#codeDiv > span:eq(2)').effect( "highlight",{color: 'yellow'}, 1000);
				 $('#codeDiv > span:eq(2)').effect("transfer", {to: $("p > i:eq(2)"), className: "ui-effects-transfer"}, 800, function() {
					 $('p > i:eq(2)').text('C').css({'font-size':'35px', 'color':'red'});
					 $("p > span:nth-child(2):eq(2)").text('hapter-');
					 $('#codeDiv > span:eq(3)').effect( "highlight",{color: 'yellow'}, 1000);
					 $('#codeDiv > span:eq(3)').effect("transfer", {to: $("p > i:eq(3)"), className: "ui-effects-transfer"}, 800, function() {
						 $('p > i:eq(3)').text('C').css({'font-size':'35px', 'color':'red'});
						 $("p > span:nth-child(2):eq(3)").text('hapter-');
						 dynamicCalling();
					 });
				 });
			 });
		 });
	}
	 
	 function dynamicCalling() {
		 if (flagCount == 1) {
			 $(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="intro.goToStep(7)">Next &#8594;</a>');
		 } else if (flagCount == 2) {
			 $(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="intro.goToStep(10)">Next &#8594;</a>');
		 }  else if (flagCount == 3) {
			 $(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="intro.goToStep(13)">Next &#8594;</a>');
		 } else if (flagCount == 4) {
			 $(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="intro.goToStep(16)">Next &#8594;</a>');
		 }
	 }
	 
	 function getStep(element, intro, position, tooltipClass) {
		 	var step = {};
		 	if (typeof element != 'undefined') {
		 		step['element'] = element;
		 	}
		 	if (typeof intro != 'undefined') {
		 		step['intro'] = intro;
		 	}
		 	if (typeof position != 'undefined') {
		 		step['position'] = position;
		 	}
		 	if (typeof tooltipClass != 'undefined') {
		 		step['tooltipClass'] = tooltipClass;
		 	}
		 	
		 	return step;
		 }
		 
	 
</script>
</body>
</html>