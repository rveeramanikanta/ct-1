<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>nth-selectors-final1</title>
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
<style type="text/css">

.introjs-tooltip {
	min-width: 250px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.margin-top-12 {
	margin-top: 10px;
}

.margin-top-20 {
	margin-top: 20px;
}

/* .input-css1 {
	border: medium none;
	width : 225px;
} */

#topicsDiv {
	border: 1px solid gray;
    border-radius: 6px;
    padding: 6px;
} 

.z-index {
	position: relative;
	z-index: 10000001 !important; 	
	border-radius: 4px;
	padding: 4px;
	background: white;
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

.creampretab {
    -moz-tab-size: 2;
    tab-size: 2;
    background-color: #f5f5f5;
    border: 1px solid gray;
    border-radius: 6px;
    color: #333;
    display: block;
    font-size: 13px;
    line-height: 1.4;
    margin-bottom: 0;
    padding: 5px;
}

[contenteditable=true] {
	outline: none;
	font-family: monospace;
}

.display-inline-block {
	display: inline-block;
}

.padding5 {
	padding: 5px;
}

.padding6 {
	padding: 6px;
}

.bg-yellow {
	background: yellow;
}

.css-rules {
	color:red;
	font-size: 20px;
}

input:focus {
	background:#fff85a;
}

.visited {
	background: green;
}


#outputDiv, #outputDiv2 {
	border: 1px solid gray;
    font-family: monospace;
    height: 475px;
    padding: 10px;
}
.container {
	padding: 0px;
	border: 1px solid grey;
}

.active {
	display: flex;
	align-items: center;
}

#browser {
	margin-top: 3px;
	padding-bottom: 6px;
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
  	border-top-left-radius: 8px;
    border-top-right-radius: 12px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
    min-width: 170px;
    margin: 2px 0 -4px;
    position: relative;
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

.usr-text {
	border: medium none;
	font-family: Bitstream Vera Serif Bold,sans-serif;
	width: 100%;
}

.tab-container {
   	background: #0a0505 none repeat scroll 0 0;
}

.html-body {
	height: 160px;
	border: 1px solid gray;
	background: white;
}

.margin-top5 {
	margin-top: 5px;
}

.zIndex {
	position: relative;
	z-index: 10000001 !important;
}

#buttonsDiv {
	border: 1px solid gray;
	border-radius: 6px;
	height: 60px;
}

#browserText li.animate {
	color: red;
	font-size: 20px;
	transition: 2s;
}

#totalLists > span.animate {
	background-color: yellow;
}

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

#browserText {
	margin: 4px;
}

</style>
</head>
<body>
<script type="text/javascript"> 
var introjs;
var tl = new TimelineLite();
var typingSpeed = 5;
var buttonCount = 1;
var delete_key = 46;
var backspace_key = 8;
var nthArray = ['li:nth-child(even)', 'li:nth-child(odd)', 'li:nth-child(8)', 'li:nth-child(-n + 9)', 'li:nth-child(2n + 2)'];
var nthLastArray = ['li:nth-last-child(even)', 'li:nth-last-child(odd)', 'li:nth-last-child(8)', 'li:nth-last-child(3n)', 'li:nth-last-child(3n + 1)'];
$(document).ready(function() {
	$('input,button').attr('disabled','disabled');
	introGuide();
	$("#firstBtn, #secondBtn").on("click", function() {
		if ($(this).hasClass("disabled")) {
			return;
		}
	});
	
	$('#restart').click(function() {
		location.reload();
	});
	
});

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [{
			 		element : "#demoTitle",
					intro : "",
					position : "right"
				},  {
					element : "#topicsDiv",
					intro : "",
					position : "bottom"
				},  {
			 		element : "#code",
					intro : "",
					position : "right"
				},  {
			 		element : "#codeDiv",
					intro : "",
					position : "top"
				},  {
					element : "#totalProperty",
					intro : "",
					position : "right"
				},  {
					element : "#nthChild",
					intro : "",
					position : "left"	
				},  {
					element : "#selector",
					intro : "",
					position : "bottom"
				},  {
					element : "#totalStyle",
					intro : "",
					position : "right"
				}, {
					element : "#topicsDiv",
					intro : "",
					position : "bottom"
				}, {
			 		element : "#restart",
					intro : "",
					position : "right"
				}
			]});
	
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		$("#" + elementId).removeClass("hide");
		introjs.refresh();
		switch (elementId) {
		case "demoTitle":
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-tooltip").css({"min-width": "300px"});
			var text = "<ul><li>In this live demo we are going to learn about <b class='ct-code-b-yellow'>nth-child-selectors</b>.</li>"
				+ "<li>There are 4 types of <b class='ct-code-b-yellow'>nth-child-selectors</b> they are..</li></ul>"
				+ "<ol><b class='ct-code-b-yellow'><li>nth-child()</li></b>"
				+ "<b class='ct-code-b-yellow'><li>nth-last-child()</li></b>"
				+ "<b class='ct-code-b-yellow'><li>nth-last-of-type()</li></b>"
				+ "<b class='ct-code-b-yellow'><li>nth-of-type()</li></b></ol>";
			typing($(".introjs-tooltiptext"), text, function() {
				$('.introjs-nextbutton').show();
			})
		break;
			
		case "topicsDiv":
			$('#topicsDiv').removeClass('opacity00');
			$(".introjs-nextbutton").hide();
			$(".introjs-tooltip").css({"min-width": "250px"});
			$('.introjs-helperLayer ').one('transitionend', function() {
				if (introjs._currentStep == 1) { 
					var text = "In this live demo you are going to learn<br> <b class='ct-code-b-yellow'>nth-child()</b> and <b class='ct-code-b-yellow'>nth-last-child()</b>.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				} else {
					$('.user-btn').remove();
					$('#nthChild, #nthLastChild').removeAttr('disabled');
					var text = "You can select anyone.";
					typing(".introjs-tooltiptext", text, function() {
						introjs.insertOption(introjs._currentStep + 1, getStep("#restart", "", "right"));
						$('.skip-btn').remove();
						$(".introjs-tooltipbuttons").append('<a class="introjs-button skip-btn" onclick="introjs.nextStep()">Skip →</a>');
					});
				}
			});
		break;
		case "code":
			introjs.refresh();
			$("#firstBtn").addClass("disabled");
			$("#buttonsDiv").addClass("z-index");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('#code').removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is a basic <b class ='ct-code-b-yellow'>HTML</b> page, with <b class ='ct-code-b-yellow'>Ordered List</b> we will apply the styles"
					+ " on <b>list items</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "codeDiv":
			$(".introjs-nextbutton").hide();
			$('.user-btn').remove();
			$('.introjs-helperLayer ').one('transitionend', function() {
				if (introjs._currentStep == 3) {
					var text = "This HTML code will be displayed in the browser.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="browserReveal()">Next →</a>');
					});
				} else {
					$('.user-btn').remove();
					$(".animate").removeClass("animate");
					$("#totalLists > span.animate").removeClass("animate");
					$('#codeDiv, #browser').addClass('z-index');
					var selectedText = $("#totalLists > " + $("#selector").text().replace("li", "span"));
					$("#totalLists > " + $("#selector").text().replace("li", "span")).addClass("animate");
					$("#browser " + $("#selector").text()).addClass("animate");
					var text = "The output of your selected <br><b class ='ct-code-b-yellow'>"+ $("#selector").text() +"</b>";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
						introjs.insertOption(introjs._currentStep + 1, getStep("#totalStyle", "", "bottom"));
					});
				}
			});
		break;
		case "totalProperty":
			$(".introjs-nextbutton").hide();
			$('.user-btn').remove();
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "<b class='ct-code-b-yellow'>color:red</b> proprerty value can change the color of the element text.<br>"
							+" <b class='ct-code-b-yellow'> font-size:20px</b> proprerty value can size of the font.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "nthChild":
			$(".introjs-nextbutton").hide();
			$('.user-btn').remove();
			$('#nthChild').removeAttr('disabled');
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "This pseudo element can match more than one, one for each parent.";
				typing(".introjs-tooltiptext", text, function() {
					introjs.refresh();
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="selectorClick('+"&#34;one&#34;"+')">Next →</a>');
				});
			});
		break;
		case "selector":
			$('button').attr('disabled','disabled');
			$('.css-rules').removeClass('css-rules');
			$(".introjs-nextbutton").hide();
			$('.user-btn').remove();
			$('.introjs-helperLayer ').one('transitionend', function() {
				if ($('#selector').hasClass('one')) {
					var text = "Enter one of them and see the result.<br><b class='ct-code-b-yellow'>li:nth-child(even)</b><br>"
						+ " <b class='ct-code-b-yellow'>li:nth-child(odd)</b><br><b class='ct-code-b-yellow'>li:nth-child(8)</b><br><b class='ct-code-b-yellow'>li:nth-child(-n + 9)</b><br>"
						+ "<b class='ct-code-b-yellow'>li:nth-child(2n + 2)</b>";
					typing(".introjs-tooltiptext", text, function() {
						selectorChecking(nthArray);
					});
				} else if($('#selector').hasClass('two')) {
					var text = "Enter one of them and see the result.<br><b class='ct-code-b-yellow'>li:nth-last-child(even)</b><br>"
						+ " <b class='ct-code-b-yellow'>li:nth-last-child(odd)</b><br><b class='ct-code-b-yellow'>li:nth-last-child(8)</b><br><b class='ct-code-b-yellow'>li:nth-last-child(3n)</b><br>"
						+ "<b class='ct-code-b-yellow'>li:nth-last-child(3n + 1)</b>";
					typing(".introjs-tooltiptext", text, function() {
						selectorChecking(nthLastArray);
					});
				}
			});
		break;
		case "totalStyle":
			$('input').attr('disabled','disabled');
			if(introjs._currentStep == 7) {
			$(".introjs-nextbutton").hide();
			$('.user-btn').remove();
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "Apply this css-rules to based on the pseudo-element.";
				if ($('#selector').hasClass('one')) {
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
						introjs.insertOption(introjs._currentStep + 1, getStep("#codeDiv", "", "top"));
					});
				} 
			});
			} else {
				$(".introjs-nextbutton").hide();
				$('.user-btn').remove();
				$('#codeDiv, #browser').removeClass('z-index');
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "Apply this css-rules to based on the pseudo-element.";
					if ($('#selector').hasClass('one')) {
						typing(".introjs-tooltiptext", text, function() {
							$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="tryAgainNthChild()">Try Again</a>');
							$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="nextBtn(1)">Next</a>');
						});
					} else if ($('#selector').hasClass('two')) {
						typing(".introjs-tooltiptext", text, function() {
							$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="tryAgainNthLastChild()">Try Again</a>');
							$('.introjs-nextbutton').show();
							introjs.insertOption(introjs._currentStep + 1, getStep("#topicsDiv", "", "bottom"));
						});
					}
				});
			}
		break;
		case "nthLastChild":
			$('.user-btn').remove();
			$('.bg-yellow').removeClass('bg-yellow');
			$('#nthLastChild').removeAttr('disabled');
			$('.visited').removeAttr('disabled');
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "Selects all elements that are the nth-child of their parent, counting from the last element to the first.";
				typing(".introjs-tooltiptext", text, function() {
					introjs.refresh();
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="selectorClick('+"&#34;two&#34;"+')">Next →</a>');
				});
			});
		break;
		case "restart":
			$('.user-btn, .skip-btn').remove();
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-tooltip").css({"min-width": "115px"});
			$('#restart').removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Click to restart.";
				typing($(".introjs-tooltiptext"), text, function() {
				});
			});
		break;
		}
	});
	introjs.start();
	$('.introjs-nextbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
}

function nextBtn(number) {
	$(".user-btn").remove(); 
	introjs.insertOption(introjs._currentStep + 1, getStep("#" + $("#topicsDiv button").eq(number).attr("id"), "", "right"));
	introjs.nextStep();
}

function tryAgainNthChild() {
	$('.user-btn').remove();
	$("#selector").text("")
	$(".introjs-tooltiptext").empty();
	var text = "Enter one of them and see the result.<br><b class='ct-code-b-yellow'>li:nth-child(even)</b><br>"
		+ " <b class='ct-code-b-yellow'>li:nth-child(odd)</b><br><b class='ct-code-b-yellow'>li:nth-child(8)</b><br><b class='ct-code-b-yellow'>li:nth-child(-n + 9)</b><br>"
		+ "<b class='ct-code-b-yellow'>li:nth-child(2n + 2)</b>";
	typing(".introjs-tooltiptext", text, function() {
		selectorChecking(nthArray);
	});
}

function tryAgainNthLastChild() {
	$(".introjs-nextbutton").hide();
	$('.user-btn').remove();
	$("#selector").text("")
	$(".introjs-tooltiptext").empty();
	var text = "Enter one of them and see the result.<br><b class='ct-code-b-yellow'>li:nth-last-child(even)</b><br>"
		+ " <b class='ct-code-b-yellow'>li:nth-last-child(odd)</b><br><b class='ct-code-b-yellow'>li:nth-last-child(8)</b><br><b class='ct-code-b-yellow'>li:nth-last-child(3n)</b><br>"
		+ "<b class='ct-code-b-yellow'>li:nth-last-child(3n + 1)</b>";
	typing(".introjs-tooltiptext", text, function() {
		selectorChecking(nthLastArray);
	});
}

function selectorChecking(pseudoSelector) {
	$('#selector').focus();
	$('#selector').on("keydown", function(e) {
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
	$('#selector').on("keyup", function(e) {
		introjs.refresh();
		for (var i = 0; i < pseudoSelector.length; i++) { 
			if ($('#selector').text().trim() == pseudoSelector[i]) {
				$('.length-error-text').remove();
				$('.introjs-nextbutton').show();
				introjs.insertOption(introjs._currentStep + 1, getStep("#codeDiv", "", "top"));
				break;
			} else {
				$('.length-error-text').remove();
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>Enter the selector properly.</span>");
				$('.introjs-nextbutton').hide();
			}
		}
	});
 } 

function typing(selector, text, callBackFunction) {
	$(selector).typewriting(text, {
		"typing_interval" : typingSpeed,
		"cursor_color" : 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function charAtEnd(elementId) {
	var element = document.getElementById(elementId);
	element.focus();
	var range = document.createRange();
	range.selectNodeContents(element);
	range.collapse(false);
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
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

function browserReveal() {
	$('.user-btn').remove();
	$('#browser').removeClass('opacity00').addClass('z-index');
	$('#codeDiv').effect("transfer", {to: $('#browserText'), className: "ui-effects-transfer"}, 1000, function() {
		$('#browserText').removeClass('opacity00');
		$('.introjs-nextbutton').show();
	});
}
 
 function selectorClick(element) {
	 $('.skip-btn, .user-btn').remove();
	 $('#selector').removeAttr('class').attr('class','position input-css1').addClass(element).text("");
	 introjs.goToStep(7);
 }
 

</script>
<div class='text-center margin-top-20'>
	<h4 class='label ct-demo-heading' id='demoTitle'>nth-child-selectors</h4>
</div>
<div class='col-xs-12 text-center margin-top-20'>
		<div class='col-xs-offset-4 col-xs-4 opacity00' id='topicsDiv'>
			<div class='col-xs-6 padding0'>
				<button id='nthChild' onclick="selectorClick('one')" type="button"
					class="btn btn-success">nth-child()</button>
			</div>
			<div class='col-xs-6 padding0'>
				<button id='nthLastChild' onclick="selectorClick('two')" type="button"
					class="btn btn-success">nth-last-child()</button>
			</div>
		</div>
	</div>
<div class="col-xs-12 margin-top-20">
<div class="col-xs-offset-1 col-xs-5">
<div id="code" class="opacity00">
<pre class="creampretab"><span id="htmlOpenTag">&lt;html&gt;</span>
<span id="headOpenTag">&lt;head&gt;</span>
<span id="totalTitle"><span id="titleOpenTag">&lt;title&gt;</span>nth-selectors<span id="titleCloseTag">&lt;/title&gt;</span></span>
<span id="headCloseTag">&lt;/head&gt;</span>
<span id="styleOpenTag">&lt;style&gt;</span>
<span id='totalStyle'><div id="selector" class="position input-css1" contenteditable='true' spellcheck='false'  maxlength='40' originalText="li:nth-child()"></div> {
	<span id='totalProperty'><span id='property'>color:red;</span>
	<span id='property'>font-size:20px;</span></span>
}</span>
<span id="styleCloseTag">&lt;/style&gt;</span>
<span id="bodyOpenTag">&lt;body&gt;</span>
		<div id="codeDiv"> <span id="olOpenTag">  &lt;ol&gt;</span>
		<span id="totalLists"><span id="li1">&lt;li&gt;first li&lt;/li&gt;</span>
		<span id="li2">&lt;li&gt;second li&lt;/li&gt;</span>
		<span id="li3">&lt;li&gt;third li&lt;/li&gt;</span>
		<span id="li4">&lt;li&gt;fourth li&lt;/li&gt;</span>
		<span id="li5">&lt;li&gt;fifth li&lt;/li&gt;</span>
		<span id="li6">&lt;li&gt;sixth li&lt;/li&gt;</span>
		<span id="li7">&lt;li&gt;seventh li&lt;/li&gt;</span>
		<span id="li8">&lt;li&gt;eighth li&lt;/li&gt;</span>
		<span id="li9">&lt;li&gt;ninth li&lt;/li&gt;</span>
		<span id="li10">&lt;li&gt;tenth li&lt;/li&gt;</span></span>
	<span id="olCloseTag">&lt;/ol&gt;</span></div>
<span id="bodyCloseTag">&lt;/body&gt;</span>
<span id="htmlCloseTag">&lt;/html&gt;</span></pre> 
	</div>
	</div>
	<div class="col-xs-5">
		<div  id="browser" class="opacity00">
			<div class='tab-container'>
				<ul class="tabs clearfix" >
					<li class="active">
						<div class="col-xs-10">nth-child</div>
						<i class="col-xs-2 fa fa-times fa-sm padding00"></i>
					</li>
				</ul>
				<span id ="plus"><i class="fa fa-plus"></i></span>
			</div>
			<div class="col-xs-12 padding00" style="border-bottom: 1px solid gray; padding: 2px;">
				<div class='col-xs-2 padding00 text-center'>
					<span id='arrowCircle' class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-left arrow" id="inActiveArrow"></i><i class="fa fa-arrow-left hide" id="activeArrow" onclick='returnArrow()'></i></span>
					<span  class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-right arrow"></i></span>
					<span  class='col-xs-4 padding00 margin-top5'><i class="fa fa-rotate-right fa-1x"  id="spinArrow"></i></span>
				</div>
				<div class='col-xs-8 padding00 text-center url' id="changeUrl">
					<span id="urlText">localhost:8080/nth-child.jsp</span>
					<span id="urlText2" class="hide">localhost:8080/data.jsp</span>
				</div>
				<div class='col-xs-2 padding00 fa-display text-center'>	
					<span class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-down fa-1x" ></i></span>
					<span class='col-xs-4 padding00 margin-top5'><i class="fa fa-home fa-1x"></i></span>
					<span class='col-xs-4 padding00 margin-top5'><i  class="fa fa-bars fa-1x"></i></span>
				</div>
			</div>
			<div class ="html-body" id="outputDiv">
			<div id='browserText' class='opacity00 margin-top-20'>
				<ol>
					<li>first li</li>
					<li>second li</li>
					<li>third li</li>
					<li>fourth li</li>
					<li>fifth li</li>
					<li>sixth li</li>
					<li>seventh li</li>
					<li>eighth li</li>
					<li>ninth li</li>
					<li>tenth li</li>
				</ol>
				</div>
			</div>
		</div>	
	</div>
</div>
<div class="col-xs-12 text-center margin-top-20">
	<span class="btn btn-warning btn-sm opacity00" id="restart">Restart</span>
</div>
</body>
</html>