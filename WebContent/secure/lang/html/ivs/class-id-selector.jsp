<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
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
<title>class and id selectors</title>

<style type="text/css">

.introjs-tooltip {
	min-width: 350px;
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

.user-btn {
	background-color: green;
}

.skip-btn {
	background-color: orange;
}

button {
	min-width: 115px;
}

input {
	background-color: transparent;
	border: medium none;
	outline: none;
	width: 20%;
}


.z-index {
	position: relative;
	z-index: 10000001 !important;
	border-radius: 4px;
	padding: 4px;
	background: white;
}


/* [contenteditable=true]:empty:before {
	content: attr(placeholder);
	color: #B8B8A0;
} */

/* [contenteditable="true"] {
	border: 1px solid;
	border-radius: 2px;
	padding: 4px;
	min-width: 60px;
	display: inline-block;
	
} */

.ui-effects-transfer {
	border: 1px solid #003399;
	z-index: 99999999;
}

pre {
    tab-size:4;
    -moz-tab-size: 4;
    -o-tab-size:  4;
 	white-space: pre-wrap;
 	border : 2px solid black;
 	font-size: 12px;
}

.selectors-css {
	padding: 8px;
	background-color: blue;
	color: white;
	border: 2px solid;
	border-radius: 8px;
	font-weight: bold;
}

#browser {
	border: 2px solid;
}

.bg-grey-color-white {
	background: grey;
	color: white;
}

.box-border {
	min-height: 320px;
	border : 2px solid black;
}

#browserText {
	margin: 4px;
}

.error {
	color: #ff3636;
    font-weight: bold;
}

.bg-yellow {
	background: yellow;
}

.css-rules {
	text-align:center;
	border: 2px solid red;
}

.visited {
	background: green;
}
.light-blue {
	background: #00ffff;
}

input:focus {
	background:#fff85a;
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

/* *********************** Ending of the browser styles ********************* */

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

<script type="text/javascript">
	var intro;
	var classCount = 0;
	var flagCount = 0;
	var classFlag = true;
	var idFlag = true;
	$(document).ready(function() {
		$('#styleDiv input').attr('disabled','disabled');
		$('button').attr('disabled','disabled');
		//$('#styleDiv ~ div > span[id],#browserText > *,pre').addClass('opacity00');
		initIntroJS();
		$('#restart').click(function() {
			location.reload();
		});
		 $("body").attr({ondragstart :"return false"});
	  	$('*').bind("cut copy paste",function(e) {
	    	e.preventDefault();
	  	}); 
	});
	
	var str =[];
	function initIntroJS() {
		intro = introJs();
		intro.setOptions({
			steps : [  {
				element :"#heading",
				intro : "",
				position : "bottom",
			}, {
				element : "#topicsDiv",
				intro : "",
				position : "bottom"
			}, {
				element : "#codeDiv",
				intro : "",
				position : "bottom"
			}, {
				element : "#classElement",
				intro : "",
				position : "bottom"
			}, {
				element : "#totalProperty",
				intro : "",
				position : "bottom"
			}, {
				element : "#selector",
				intro : "",
				position : "bottom"
			}, {
				element : "#totalStyle",
				intro : "",
				position : "right"
			}, {
				element : "#idElement",
				intro : "",
				position : "bottom"
			}, {
				element : "#classOrId",
				intro : "",
				position : "right"
			},  {
				element : "#topicsDiv",
				intro : "",
				position : "left"
			}, {
				element : "#restart",
				intro : "",
				position : "right"
			}]});

		intro.onafterchange(function(targetElement) {
			var elementId = targetElement.id;
			switch (elementId) {
			case "heading":
				$(".introjs-nextbutton").hide();
				var text = "In this live demo we are going to learn <b class='ct-code-b-yellow'>class</b> and <b class='ct-code-b-yellow'>Id</b> attributes"
							+" If you want to use class attribute value as a selector place a <b class='ct-code-b-yellow'>dot</b> before on it."
							+"Getting element with Id attribute value as selector place a <b class='ct-code-b-yellow'>#</b> symbol before on it.<br>"
							+"Ex. <b class='ct-code-b-yellow'>class='value'</b> selector is <b class='ct-code-b-yellow'>.value</b><br>"
							+"Ex. <b class='ct-code-b-yellow'>Id='sample'</b> selector is <b class='ct-code-b-yellow'>#sample</b>"
							+"<br> Id attribute value must be <b class='ct-code-b-yellow'>unique</b> in a single web-page";
				$('.introjs-tooltiptext').append(text);
				//typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				//});
				break;
			case "topicsDiv":
				$('pre').removeClass('opacity00');
				$(".introjs-nextbutton").hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('#topicsDiv').removeClass('opacity00');
					if (intro._currentStep == 1) { 
						var text = "Let us going to discuss  <b class='ct-code-b-yellow'>Class and Id attributes</b>.";
						$('.introjs-tooltiptext').append(text);
						//typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton').show();
						//});
					} else {
						$('#codeDiv, #browser').removeClass('z-index')
						$('.user-btn').remove();
						$('#classElement, #idElement, #classOrId').removeAttr('disabled');
						var text = "You can select anyone.";
						$('.introjs-tooltiptext').append(text);
						//typing(".introjs-tooltiptext", text, function() {
							//$('.introjs-nextbutton').show();
							$('.skip-btn').remove();
							$(".introjs-tooltipbuttons").append('<a class="introjs-button skip-btn" '
							+'onclick="intro.goToStep(12)">Skip →</a>');
							intro.insertOption(intro._currentStep + 1, getStep("#restart", "", "right"));
						//});
					}
				});
				break;
			case "codeDiv" :
				$(".introjs-nextbutton").hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('#codeDiv').removeClass('opacity00');
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" '
							+'onclick="browserReveal('+"&#34;#browserText&#34;"+')">Next →</a>');
				});
			break;
			
			case "classElement":
				$('.user-btn').remove();
				$('div.z-index').removeClass('z-index');
				$(".introjs-nextbutton").hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "Class is an attribute.We can use class value as a selector by placing dot (.) before the value.</br>Example"
								+"<b class='ct-code-b-yellow'> class='sample'</b> selector for this class is <b class='ct-code-b-yellow'>.sample</b>";
								$('.introjs-tooltiptext').append(text);
					//typing(".introjs-tooltiptext", text, function() {
						$('button:eq(0)').removeAttr('disabled').addClass('z-index visited');
						intro.refresh();
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="classClick()">Next →</a>');
					//});
				});
				break;
				
			 case "totalProperty":
				 $('#classElement, #idElement, #classOrId').removeAttr('disabled');
				$(".introjs-nextbutton").hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "<b class='ct-code-b-yellow'>text-align:center</b> property value is used to center the text of an element."
								+" <b class='ct-code-b-yellow'>border: 2px solid red</b> property value is used to given the border of a given element.</b>.";
					$('.introjs-tooltiptext').append(text);
					//typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					//});
				});
				break;
				
			case "selector":
				$('.bg-yellow').removeClass('bg-yellow');
				$('.light-blue').removeClass('light-blue');
				$('.css-rules').removeClass('css-rules');
				$('.visited').attr('disabled','disabled');
				$('.user-btn').remove();
				$('[contenteditable=false]').attr('contenteditable', 'true');
				$(".introjs-nextbutton").hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					if ($('#selector').hasClass('class-click')) {
						if (classFlag) {
							classFlag = !classFlag;
							flagCount++;
						}
						var text = "Enter any class name value.</br>Note: Class value must be preceded by "
									+"dot(.) </br> Hint: <b class='ct-code-b-yellow'>.asia</b> or <b class='ct-code-b-yellow'>.africa</b> or "
									+"<b class='ct-code-b-yellow'>.north-america</b>";
									$('.introjs-tooltiptext').append(text);
						//typing(".introjs-tooltiptext", text, function() {
							$('#selector').focus();
							var classArr = [".asia",".africa",".north-america"];
							selectorValidation(classArr,"classType");
						//});
					} else if ($('#selector').hasClass('id-click')) {
						if (idFlag) {
							idFlag = !idFlag;
							flagCount++;
						}
						var text = "Enter any id value.</br>Note: id value must be preceded by (hash) "
									+"(#) and all are case sensitive.</br><b class='ct-code-b-yellow'> #delhi or #capeTown or #beiging "
									+"or  #canada or #cairo or #usa or #tokyo</b>.";
									$('.introjs-tooltiptext').append(text);
						//typing(".introjs-tooltiptext", text, function() {
							$('#selector').focus();
							var idArr = ["#delhi","#capeTown","#beiging","#canada","#cairo","#usa","#tokyo"];
							selectorValidation(idArr,"idType");
						//});
					} else if ($('#selector').hasClass('class-id-click')) {
						var text = "Select all <b class='ct-code-b-yellow'>african countries</b> elements.So in this case we "
									+"are using <b class='ct-code-b-yellow'>class</b> attribute.</br>Hint :<b class='ct-code-b-yellow'>.africa</b> ";
									$('.introjs-tooltiptext').append(text);
						//typing(".introjs-tooltiptext", text, function() {
							$('#selector').focus();
							$('#selector').off("keyup");
							$('#selector').on("keyup", function(e) {
								intro.refresh();
								if ($('#selector').text().trim() == ".africa") {
									$('.introjs-nextbutton').show();
								} else {
									$('.introjs-nextbutton').hide();
								}
							});
						//});
					} else if ($('#selector').hasClass('second-id')) {
						var text = "Select the element which has <b class='ct-code-b-yellow'>Japan</b> as content of the element</br>"
									+" Hint: <b class='ct-code-b-yellow'>#tokyo</b>";
									$('.introjs-tooltiptext').append(text);
						//typing(".introjs-tooltiptext", text, function() {
							$('#selector').focus().text("");
							$('div.z-index').removeClass('z-index');
							$('#selector').off("keyup");
							$('#selector').on("keyup", function(e) {
								intro.refresh();
								if ($('#selector').text().trim() == "#tokyo") {
									$('.introjs-nextbutton').show();
								} else {
									$('.introjs-nextbutton').hide();
								}
							});
						//});
					}
				});
				break;
				
			case "totalStyle":
				$('[contenteditable=true]').attr('contenteditable', 'false');
				$(".introjs-nextbutton").hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "Apply these css-rules to targated elements.";
					typing(".introjs-tooltiptext", text, function() {
						$('#firstAsia').parent().addClass('z-index');
						$('#browser').addClass('z-index');
						if ($('#selector').hasClass('class-click')) {
							$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="classAnimation()">Next →</a>');
						} else if ($('#selector').hasClass('id-click')) {
							$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="idAnimation()">Next →</a>');
						} else if ($('#selector').hasClass('class-id-click')) {
							$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="classOrIdAnimation()">Next →</a>');
						} else if ($('#selector').hasClass('second-id')) {
							$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="secondIdAnimation()">Next →</a>');
						}
					});
				});
				break;
				
			case "idElement":
				$('.user-btn').remove();
				$('div.z-index').removeClass('z-index');
				$('button:eq(1)').removeAttr('disabled').addClass('z-index visited');
				$('.visited').removeAttr('disabled');
				$(".introjs-nextbutton").hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "Class is an attribute.We can use class value as a selector by placing dot (.) before the value.</br>Example"
								+"<b class='ct-code-b-yellow'> class='sample'</b> selector for this class is <b class='ct-code-b-yellow'>.sample</b>";
								$('.introjs-tooltiptext').append(text);
								
					//typing(".introjs-tooltiptext", text, function() {
						intro.refresh();
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="idClick()">Next →</a>');
					//});
				});
				break;
				
			case "classOrId":
				$('.user-btn').remove();
				$('div.z-index').removeClass('z-index');
				$('button:eq(2)').removeAttr('disabled').addClass('z-index visited');
				$('.visited').removeAttr('disabled');
				$(".introjs-nextbutton").hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "We can targate a group of element using class attribute.We can select uniqe element by id attribute.Id "
								+" value must be uniqe in single html page.";
					$('.introjs-tooltiptext').append(text);
					//typing(".introjs-tooltiptext", text, function() {
						intro.refresh();
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="classOrIdClick()">Next →</a>');
					//});
				});
				break;
				
			case "restart":
				$('.user-btn, .skip-btn').remove();
				$('.z-index').removeClass('z-index');
				$('.introjs-tooltip').css({'min-width': '130px'});
				$(".introjs-nextbutton").hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "Click to restart.";
					$('.introjs-tooltiptext').append(text);
					//typing(".introjs-tooltiptext", text, function() {
						$('#restart').removeClass('opacity00');
					//});
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
		"typing_interval" : 5,
		"cursor_color" : 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
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

function browserReveal(selector) {
	$('.user-btn').remove();
	$('#browser').removeClass('opacity00').addClass('z-index');
	$('#codeDiv').parent().effect("transfer", {to: $(selector), className: "ui-effects-transfer"}, 500, function() {
		$(selector).removeClass('opacity00');
		$('.introjs-nextbutton').show();
	});
}

function selectorValidation(classArr,type) {
	$('#selector').off("keyup");
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
		intro.refresh();
		if ( $.inArray($('#selector').text().trim(), classArr ) == -1) {
			$('.introjs-nextbutton').hide();
			if ($('#selector').text().trim().charAt(0) != "." && $('.error').length == 0 && type == "classType") {
				$('.introjs-tooltiptext').append('<span class="error"></br>class selector should start with dot</span>');
			}
			if ($('#selector').text().trim().charAt(0) != "#" && $('.error').length == 0 && type == "idType") {
				$('.introjs-tooltiptext').append('<span class="error"></br>id selector should start with hash(#) symbol.</span>');
			}
		} else {
			$('.error').remove();
			$('.introjs-nextbutton').show();
			if ($('.introjs-nextbutton[style="display: inline-block;"]').length == 1 && e.keyCode == 13) {
				intro.nextStep();
			}
		}	
	});
}

function classAnimation() {
	$('.user-btn').remove();
	var value = $('#selector').text().trim().substring(1);
	$('span[id]:contains('+value+')').not('#totalStyle').addClass('bg-yellow');
	$('.bg-yellow > span:odd').addClass('light-blue');
	$('[class='+value+']').addClass('class-transfer-move');
	var count = ($('.bg-yellow').length)-1;
	classTransfer(classCount,count);
}

function classTransfer(classCount,count) {
	$('.bg-yellow:eq('+classCount+')').effect("transfer", {to: $('.class-transfer-move:eq('+classCount+')'), className: "ui-effects-transfer"}, 500, function() {
		$('.class-transfer-move:eq('+classCount+')').addClass('css-rules');
		if (count == classCount) {
			$('.class-transfer-move').removeClass('class-transfer-move');
			dynamicCalling();
		} else {
			classCount++;
			classTransfer(classCount,count);
		}
	});
}

function idAnimation() {
	$('.user-btn').remove();
	var value = $('#selector').text().trim().substring(1);
	$('span[id]:contains('+value+')').not('#totalStyle').addClass('bg-yellow');
	$('.bg-yellow > span:first').addClass('light-blue');
	$('[id='+value+']').addClass('class-transfer-move');
	$('.bg-yellow').effect("transfer", {to: $('.class-transfer-move'), className: "ui-effects-transfer"}, 500, function() {
		$('.class-transfer-move').addClass('css-rules').removeClass('class-transfer-move');
		dynamicCalling();
	});
}

function classOrIdAnimation() {
	$('.user-btn').remove();
	$('span[id]:contains(africa)').not('#totalStyle').addClass('bg-yellow');
	$('.bg-yellow > span:odd').addClass('light-blue');
	$('[class*=africa]').addClass('class-transfer-move');
	$('.bg-yellow:eq(0)').effect("transfer", {to: $('.class-transfer-move:eq(0)'), className: "ui-effects-transfer"}, 500, function() {
		$('.class-transfer-move:eq(0)').addClass('css-rules');
		$('.bg-yellow:eq(1)').effect("transfer", {to: $('.class-transfer-move:eq(1)'), className: "ui-effects-transfer"}, 500, function() {
			$('.class-transfer-move:eq(1)').addClass('css-rules');
			$('.class-transter-move').removeClass('class-transfer-move');
			$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="intro.goToStep(10)">Next →</a>');
			$('#selector').removeAttr('class').attr('class','position input-css second-id');
		});
	});
}

function secondIdAnimation() {
	$('.user-btn').remove();
	$('#thirdAsia').addClass('bg-yellow');
	$('.bg-yellow > span:first').addClass('light-blue');
	$('.bg-yellow').effect("transfer", {to: $('#tokyo'), className: "ui-effects-transfer"}, 500, function() {
		$('#tokyo').addClass('css-rules');
		$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="intro.goToStep(10)">Next &#8594;</a>');
	});
}

function classClick() {
	$('.user-btn').remove();
	$('.id-click').removeClass('id-click');
	$('#selector').text("").addClass('class-click');
	intro.goToStep(5);
}

function idClick() {
	$('.user-btn').remove();
	$('.class-click').removeClass('class-click');
	$('#selector').text("").addClass('id-click');
	intro.goToStep(5);
}

function classOrIdClick() {
	$('.user-btn').remove();
	$('.id-click').removeClass('id-click');
	$('.class-click').removeClass('class-click');
	$('#selector').text("").addClass('class-id-click');
	intro.goToStep(5);
}

function dynamicCalling() {
	if (flagCount == 1) {
		$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="intro.goToStep(8)">Next &#8594;</a>');
	} else if (flagCount == 2) {
		$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="intro.goToStep(9)">Next &#8594;</a>');
	} 
}

</script>

</head>
<body>
	<div class='text-center margin-top-20'>
		<h4 class='label ct-demo-heading' id='heading'>Class and Id Selector</h4>
	</div>

	<div class='col-xs-12 text-center margin-top-20'>
		<span id='restart'
			class='btn btn-warning btn-sm opacity00 margin-top20'>Restart
			&nbsp;<i class='fa fa-refresh'></i>
		</span>
	</div>
	<div class='col-xs-12 text-center margin-top-20'>
		<div class='col-xs-offset-4 col-xs-4 opacity00' id='topicsDiv'>
			<div class='col-xs-4 padding0'>
				<button id='classElement' onclick="classClick()"
					type="button" class="btn btn-success">Class</button>
			</div>
			<div class='col-xs-4 padding0'>
				<button id='idElement' onclick="idClick()" type="button"
					class="btn btn-success">Id</button>
			</div>
			<div class='col-xs-4 padding0'>
				<button id='classOrId' onclick="classOrIdClick()" type="button"
					class="btn btn-success">Class or Id</button>
			</div>
		</div>
	</div>
	<div class='col-xs-12 margin-top-20'>
	<div id='htmlCode' class='col-xs-6'>
<pre>
&lt;html&gt;				
<span class='openStyle'>&lt;style&gt;</span>
<div id='styleDiv'><span id='totalStyle'><div id="selector" class="position input-css" contenteditable='true' spellcheck='false'  maxlength='20'></div> {
	<span id='totalProperty'><span id='property'>text-align:&nbsp;center;</span>
	<span id='property'>border:&nbsp;2px solid red;</span></span>
}</span></div>
&lt;/style&gt;
&lt;body&gt;<div id='codeDiv' class="opacity00">	<span id='firstAsia'>&lt;div <span>id='delhi'</span> <span>class='asia'</span>&gt;India&lt;/div&gt;</span>
	<span id='firstAfrica'>&lt;div <span>id='capeTown'</span> <span>class='africa'</span>&gt;South Africa&lt;/div&gt;</span>
	<span id='secondAsia'>&lt;p <span>id='beiging'</span> <span>class='asia'</span>&gt;China&lt;/p&gt;</span>
	<span id='firstIndianState'>&lt;p <span>id='canada'</span> <span>class='north-america'</span>&gt;canada&lt;/p&gt;</span>
	<span id='secondAfrica'>&lt;h4 <span>id='cairo'</span> <span>class='africa'</span>&gt;Egypt&lt;/h4&gt;</span>
	<span id='secondIndianState'>&lt;div <span>id='usa'</span> <span>class='north-america'</span>&gt;USA&lt;/div&gt;</span>
	<span id='thirdAsia'>&lt;p <span>id='tokyo'</span> <span>class='asia'</span>&gt;Japan&lt;/p&gt;</span></div>&lt;/body&gt;
&lt;/html&gt;</pre>
	</div>
		<div class='col-xs-6'>
			<div class='container opacity00 col-xs-12' id='browser'>
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
	<div class ="col-xs-12 html-body padding00" id ="htmlBody">
				<div id='browserText'>
					<div id='delhi' class='asia'>India</div>
					<div id='capeTown' class='africa'>South Africa</div>
					<p id='beiging' class='asia'>China</p>
					<p id='canada' class='north-america'>Canada</p>
					<h4 id='cairo' class='africa'>Egypt</h4>
					<div id='usa' class='north-america'>USA</div>
					<p id='tokyo' class='asia'>Japan</p>
				</div>
			</div>
		</div>
	</div>
	</div>
</body>
</html>