<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>nth-selectors-final2</title>
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
.margin-top-12 {
	margin-top: 10px;
}

.margin-top-20 {
	margin-top: 20px;
}

.input-css1 {
	border: medium none;
	width : 225px;
}

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
    height: 400px;
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

ul.tabs > li.active{
  background: #efefef;
}

ul.tabs > li{
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

#browserText *.animate {
	color: red;
	font-size: 20px;
	transition: 2s;
}

#codeDiv > *.animate {
	background-color: yellow;
}

#codeDiv p {
	margin-bottom: 0;
}

#codeDiv {
	margin-left: 20px;
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
var nthOfTypeArray = ['p:nth-of-type(2)', 'span:nth-of-type(odd)', 'div:nth-of-type(even)'];
var nthLastOfTypeArray = ['p:nth-last-of-type(1)', 'span:nth-last-of-type(2n + 1)', 'div:nth-last-of-type(even)'];
$(document).ready(function() {
	$('input').attr('disabled','disabled');
	$('button').attr('disabled','disabled');
	introGuide();
	$("#thirdBtn, #fourthBtn").on("click", function(){
		if ($(this).hasClass("disabled")) {
			return;
		}
	});
	
	$("[contenteditable=true]").on("click keydown keyup", function(e) {
		$(".errMsg").remove();
		 if (e.which === 13) {
			 e.preventDefault();
		}
		if ($(this).text() == "") {
			$(this).addClass("empty");
		} else {
			$(this).removeClass("empty");
		}
		introjs.refresh();
		
	 	if ($(".empty").length > 0) {
			$(".introjs-nextbutton").hide();
		} else {
			$(".introjs-nextbutton").show();
		}
		
		var max = $(this).attr("maxlength");
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
				},{
					element : "#topicsDiv",
					intro : "",
					position : "bottom"
				} ,{
			 		element : "#code",
					intro : "",
					position : "right"
				},{
			 		element : "#codeDiv",
					intro : "",
					position : "top"
				}, {
					element : "#totalProperty",
					intro : "",
					position : "right"
				}, {
					element : "#nthOfType",
					intro : "",
					position : "left"	
				}, {
					element : "#selector",
					intro : "",
					position : "bottom"
				}, {
					element : "#totalStyle",
					intro : "",
					position : "right"
				} ,{
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
					var text = "In this live demo you are going to learn<br> <b class='ct-code-b-yellow'>nth-of-type()</b> and<br> <b class='ct-code-b-yellow'>nth-last-of-type()</b>.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				} else {
					$('.user-btn').remove();
					$('#nthOfType, #nthLastOfType').removeAttr('disabled');
					var text = "You can select anyone.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
						introjs.insertOption(introjs._currentStep + 1, getStep("#restart", "", "right"));
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
					$("#codeDiv > " + $("#selector").val()).addClass("animate");
					$("#browser " + $("#selector").val()).addClass("animate");
					var text = "The output of your selected <br><b class ='ct-code-b-yellow'>"+ $("#selector").val() +"</b>";
					typing(".introjs-tooltiptext", text, function() {
						$("#codeDiv > " + $("#selector").val()).effect("transfer", {to: $("#browserText " + $("#selector").val()), className: "ui-effects-transfer"}, 1000, function() {
							$('.introjs-nextbutton').show();
							introjs.insertOption(introjs._currentStep + 1, getStep("#totalStyle", "", "bottom"));
						});
					});
				}
			});
		break;
		case "totalProperty":
			$(".introjs-nextbutton").hide();
			$('.user-btn').remove();
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "<b class='ct-code-b-yellow'>color:red</b> proprerty value can change the color of the element text.<br>"
							+" <b class='ct-code-b-yellow'> font-size:20px</b> proprerty value can increase size of the font.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "selector":
			$('button').attr('disabled','disabled');
			$('.css-rules').removeClass('css-rules');
			$(".introjs-nextbutton").hide();
			$('.user-btn').remove();
			$('.introjs-helperLayer ').one('transitionend', function() {
				if($('#selector').hasClass('three')) {
					$(".introjs-nextbutton").hide();
					var text = "Enter one of them and see the result.<br><b class='ct-code-b-yellow'>p:nth-of-type(2)</b><br>"
						+ " <b class='ct-code-b-yellow'>span:nth-of-type(odd)</b><br><b class='ct-code-b-yellow'>div:nth-of-type(even)</b>";
					typing(".introjs-tooltiptext", text, function() {
						selectorChecking(nthOfTypeArray);
					});
				} else if($('#selector').hasClass('four')) {
					$(".introjs-nextbutton").hide();
					$(".introjs-tooltip").css({"min-width": "270px"});
					var text = "Enter one of them and see the result.<br><b class='ct-code-b-yellow'>p:nth-last-of-type(1)</b><br>"
						+ " <b class='ct-code-b-yellow'>span:nth-last-of-type(2n + 1)</b><br><b class='ct-code-b-yellow'>div:nth-last-of-type(even)</b>";
					typing(".introjs-tooltiptext", text, function() {
						selectorChecking(nthLastOfTypeArray);
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
					if ($('#selector').hasClass('three')) {
						typing(".introjs-tooltiptext", text, function() {
							$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="tryAgainNthOfType()">Try Again</a>');
							$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="nextBtn(1)">Next</a>');
						});
					} else if ($('#selector').hasClass('four')) {
						typing(".introjs-tooltiptext", text, function() {
							$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="tryAgainNthLastOfType()">Try Again</a>');
							$('.introjs-nextbutton').show();
							introjs.insertOption(introjs._currentStep + 1, getStep("#topicsDiv", "", "bottom"));
						});
					}
				});
			}
		break;
		case "nthOfType":
			$('.user-btn').remove();
			$('.bg-yellow').removeClass('bg-yellow');
			$('#nthOfType').removeAttr('disabled');
			$(".introjs-nextbutton").hide();
			$('.visited').removeAttr('disabled');
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "<b class='ct-code-b-yellow'>nth-of-type()</b>: Selects all elements that are the nth child of their parent in relation to siblings with the same element name.";
				typing(".introjs-tooltiptext", text, function() {
					introjs.refresh();
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="selectorClick('+"&#34;three&#34;"+')">Next →</a>');
				});
			});
		break;
		case "nthLastOfType":
			$('.user-btn').remove();
			$('.bg-yellow').removeClass('bg-yellow');
			$('#nthLastOfType').removeAttr('disabled');
			$(".introjs-nextbutton").hide();
			$('.visited').removeAttr('disabled');
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "<b class='ct-code-b-yellow'>nth-last-of-type()</b>: Selects all the elements that are the nth-child of their parent in relation"
					+ " to siblings with the same element name, counting from the last element to the first.";
				typing(".introjs-tooltiptext", text, function() {
					introjs.refresh();
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="selectorClick('+"&#34;four&#34;"+')">Next →</a>');
				});
			});
		break;
		case "restart":
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

function tryAgainNthOfType() {
	$(".introjs-nextbutton").hide();
	$('.user-btn').remove();
	$("#selector").val("")
	$(".introjs-tooltiptext").empty();
	var text = "Enter one of them and see the result.<br><b class='ct-code-b-yellow'>p:nth-of-type(2)</b><br>"
		+ " <b class='ct-code-b-yellow'>span:nth-of-type(odd)</b><br><b class='ct-code-b-yellow'>div:nth-of-type(even)</b>";
	typing(".introjs-tooltiptext", text, function() {
		selectorChecking(nthOfTypeArray);
	});
}

function tryAgainNthLastOfType() {
	$(".introjs-nextbutton").hide();
	$('.user-btn').remove();
	$("#selector").val("")
	$(".introjs-tooltiptext").empty();
	var text = "Enter one of them and see the result.<br><b class='ct-code-b-yellow'>p:nth-last-of-type(1)</b><br>"
		+ " <b class='ct-code-b-yellow'>span:nth-last-of-type(2n + 1)</b><br><b class='ct-code-b-yellow'>div:nth-last-of-type(even)</b>";
	typing(".introjs-tooltiptext", text, function() {
		selectorChecking(nthLastOfTypeArray);
	});
}

function textFocus(selector) {
	$("#"+selector).focus();
	editText('#'+ selector);
}

function editText(selector) {
	$(selector).on("keydown", function(e) {
		$('.error-text').remove();
		var max = $(this).attr("maxlength");
		if ($(this).text().length > max-1) {
			if ($.inArray(e.keyCode, [46, 8, 9, 27, 37, 39, 13]) !== -1) {
				return;
			}
			if (e.keyCode == 13 && e.keyCode == 9) {
				e.preventDefault();
			}
			e.preventDefault();
		}		
	});
	
	$(selector).on("keyup", function(e) {
		$('.error-text').remove();
		introjs.refresh();
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 37, 39, 13]) !== -1) {
			return;
		}
		
		if (e.altKey && e.keyCode == 77) {
			$(selector).val($(selector).attr("originalText"));
		}
		
		if ($(this).val() == $(selector).attr("originalText")) {
			$(".introjs-nextbutton").show();
		} else {
			$(".introjs-nextbutton").hide();
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
	 $('#selector').removeAttr('class').attr('class','input-css1').addClass(element).val("");
	 introjs.goToStep(7);
 }
 
function selectorChecking(pseudoSelector) {
	$('input').removeAttr('disabled').focus();
	$('input').off("keyup");
	$('input').on("keyup", function(e) {
		for (var i = 0; i < pseudoSelector.length; i++) { 
			$('input').val($('input').val().trim());
			if ($('input').val() == pseudoSelector[i]) {
				if ($('.user-btn').length == 0) {
					$('input').attr('disabled','disabled');
					$('.introjs-nextbutton').show();
					introjs.insertOption(introjs._currentStep + 1, getStep("#codeDiv", "", "top"));
					break;
				}
			} else {
				$('.user-btn').remove();
			}
		}
	});
 } 

</script>
<div class='text-center margin-top-20'>
	<h4 class='label ct-demo-heading' id='demoTitle'>nth-child-selectors</h4>
</div>
<div class='col-xs-12 text-center margin-top-20'>
	<div class='col-xs-offset-4 col-xs-4 opacity00' id='topicsDiv'>
		<div class='col-xs-6 padding0'>
			<button id='nthOfType' onclick="selectorClick('three')" type="button" class="btn btn-success">nth-of-type()</button>
		</div>
		<div class='col-xs-6 padding0'>
			<button id='nthLastOfType' onclick="selectorClick('four')" type="button" class="btn btn-success">nth-last-of-type()</button>
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
<span id='totalStyle'><input id="selector" class="input-css1" maxlength='40' originalText="li:nth-child()"> {
	<span id='totalProperty'><span id='property'>color:red;</span>
	<span id='property'>font-size:20px;</span></span>
}</span>
<span id="styleCloseTag">&lt;/style&gt;</span>
<span id="bodyOpenTag">&lt;body&gt;</span><div id="codeDiv"><p>&lt;p&gt;first paragraph&lt;/p&gt;</p><span>&lt;span&gt;first span&lt;/span&gt;</span>
<p>&lt;p&gt;second paragraph&lt;/p&gt;</p><div>&lt;div&gt;first div&lt;/div&gt;</div><span>&lt;span&gt;second span&lt;/span&gt;</span>
<p>&lt;p&gt;third paragraph&lt;/p&gt;</p><div>&lt;div&gt;second div&lt;/div&gt;</div><p>&lt;p&gt;fourth paragraph&lt;/p&gt;</p><div>&lt;div&gt;third div&lt;/div&gt;</div><span>&lt;span&gt;third span&lt;/span&gt;</span></div><span id="bodyCloseTag">&lt;/body&gt;</span>
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
			<span class="col-xs-12 padding00" style="border-bottom: 1px solid gray; padding: 2px;">
				<span class='col-xs-2 padding00 text-center'>
					<span id='arrowCircle' class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-left arrow" id="inActiveArrow"></i><i class="fa fa-arrow-left hide" id="activeArrow" onclick='returnArrow()'></i></span>
					<span  class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-right arrow"></i></span>
					<span  class='col-xs-4 padding00 margin-top5'><i class="fa fa-rotate-right fa-1x"  id="spinArrow"></i></span>
				</span>
				<span class='col-xs-8 padding00 text-center url' id="changeUrl">
					<span id="urlText">localhost:8080/nth-child.jsp</span>
					<span id="urlText2" class="hide">localhost:8080/data.jsp</span>
					<!-- <input type="text" maxlength="100" class="usr-text" class="padding00"> -->
				</span>
				<span class='col-xs-2 padding00 fa-display text-center'>	
					<span class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-down fa-1x" ></i></span>
					<span class='col-xs-4 padding00 margin-top5'><i class="fa fa-home fa-1x"></i></span>
					<span class='col-xs-4 padding00 margin-top5'><i  class="fa fa-bars fa-1x"></i></span>
				</span>
			</span>
			<div class ="html-body" id="outputDiv">
			<div id='browserText' class='opacity00 margin-top-20'>
					<p>first paragraph</p>
					<span>first span</span>
					<p>second paragraph</p>
					<div>first div</div>
					<span>second span</span>
					<p>third paragraph</p>
					<div>second div</div>
					<p>fourth paragraph</p>
					<div>third div</div>
					<span>third span</span>
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