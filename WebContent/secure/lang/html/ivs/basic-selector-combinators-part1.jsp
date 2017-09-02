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
<script src="/js/jquery.scrollTo.js" type="text/javascript"></script> 
<title>only three</title>

<style type="text/css">
.introjs-tooltip {
	min-width: 250px;
}

#styleDiv {
	height: 160px;
}
.margin-top-20 {
	margin-top: 20px;
}

pre {
    tab-size:4;
    -moz-tab-size: 4;
    -o-tab-size:  4;
 	white-space: pre-wrap;
 	border : 2px solid black;
 	font-size: 10px;
}

img {
	width: 100%;
}

.box-border {
	min-height: 552px;
	border : 2px solid black;
}
.z-index {
	position: relative;
	z-index: 10000001 !important;
	border-radius: 4px;
	padding: 4px;
	background: white;
}

/* .input-css {
	width : 100px;
	border: medium none;
} */

.user-btn {
	background-color: green;
}

.skip-btn {
	background-color: orange;
}

.color-blue {
	color: blue;
}

.underline-text {
	text-decoration: underline peru;
}

.descendant-css {
	margin-left: 100px;
	/* transition: 2s; */
}

.descendant-css1 {
	background: yellow;
}

.ui-effects-transfer {
	border: 1px solid #003399;
	z-index: 99999999;
}

.text-align-center {
	text-align: center;
}

.button-css {
	background: thistle;
	border: 2px solid red;
	color : navy;
	z-index: 10000001 !important;
}

.padding0 {
	padding: 0px;
}

.visited {
	background: green;
}

.bg-black-color-white {
	background: black;
	color: white;
}

.visited {
	background: green;
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

ul.tabs > li{
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

#browserText {
	margin: 4px;
}

/* *********************** Ending of the browser styles ********************* */

.position, .position1 {
	position: relative;
	display: inline-block;
}

.position1 {
	min-height: 15px;
	min-width: 15px;
}

[contenteditable="true"] {
    outline: medium none;
}


</style>
<script type="text/javascript">
$(document).ready(function() {
	$('.input-css').parent().addClass('opacity00');
	//$('#htmlCode span:not([id*="ChapterDiv"])').addClass('opacity00');
	$('button').attr('disabled','disabled');
	initIntroJS();
	$('#selectorOne').text('');
	$('button').attr('disabled','disabled');
	$('#restart').click(function() {
		location.reload();
	});
	$("body").attr({ondragstart :"return false"});
  	$('*').bind("cut copy paste",function(e) { 
    	e.preventDefault();
  	}); 
  	$('#selectorOne').attr('disabled','disabled');
});

var str =[];
function initIntroJS() {
	intro = introJs();
	intro.setOptions({
		steps : [  {
			element :"#heading",
			intro : "",
			position : "left",
		}, {
			element : "#topicsDiv",
			intro : "",
			position : "bottom"
		}, {
			element : "#h1Tag",
			intro : "",
			position : "top"
		}, {
			element : "#firstChapterDiv",
			intro : "",
			position : "top"
		}, {
			element : "#secondChapterDiv",
			intro : "",
			position : "top"
		}, {
			element : "#thirdChapterDiv",
			intro : "",
			position : "top"
		}, {
			element : "#universal",
			intro : "",
			position : "buttom"
		}, {
			element : "#universalProperty1",
			intro : "",
			position : "bottom"
		}, {
			element : "#selectorOne",
			intro : "",
			position : "buttom"
		}, {
			element : "#totalStyleOne",
			intro : "",
			position : "right"
		}, {
			element : "#child",
			intro : "",
			position : "buttom"
		}, {
			element : "#childProperty1",
			intro : "",
			position : "top"
		}, {
			element : "#selectorTwo",
			intro : "",
			position : "buttom"
		}, {
			element : "#totalStyleTwo",
			intro : "",
			position : "right"
		}, {
			element : "#descendant",
			intro : "",
			position : "buttom"
		}, {
			element : "#descendantProperty1",
			intro : "",
			position : "top"
		}, {
			element : "#selectorThree",
			intro : "",
			position : "buttom"
		}, {
			element : "#totalStyleThree",
			intro : "",
			position : "top"
		},  {
			element : "#topicsDiv",
			intro : "",
			position : "bottom"
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
					var text = "We are going to discuss these <b class='ct-code-b-yellow'>combinator  selectors</b>.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				} else {
					$('#htmlCode, #browser').removeClass('z-index');
					$('.user-btn').remove();
					$('.bg-yellow').removeClass('bg-yellow');
					$('#universal, #child, #descendant').removeAttr('disabled');
					var text = "You can select anyone.";
					typing(".introjs-tooltiptext", text, function() {
						//$('.introjs-nextbutton').show();
						//$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="intro.nextStep()">Next →</a>');
						intro.insertOption(intro._currentStep + 1, getStep("#restart", "", "right"));
						$('.skip-btn').remove();
						$(".introjs-tooltipbuttons").append('<a class="introjs-button skip-btn" onclick="intro.goToStep(20)">Skip →</a>');
					});
				}
			});
			break;
			
		case "h1Tag":
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('#h1Tag').removeClass('opacity00')
				var text = "This is the heading of the book in <b class='ct-code-b-yellow'>h1</b> tag element.";
				typing(".introjs-tooltiptext", text, function() {
					$('#browser [maxlength]').prop('value','basic-selector-combinators-part1.jsp');
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="printText()">Next →</a>');
				});
			});
			break;
			
		case "firstChapterDiv":
			$(".introjs-nextbutton").hide();
			$('#firstChapterDiv').removeClass('opacity00');
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "This is the total content in the <b class='ct-code-b-yellow'>first</b> chapter.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="printText1()">Next →</a>');
				});
			});
			break;
			
		case "secondChapterDiv":
			$(".introjs-nextbutton").hide();
			$('#secondChapterDiv').removeClass('opacity00');
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "This is the total content in the <b class='ct-code-b-yellow'>second-chapter</b>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="printText2()">Next →</a>');
				});
			});
			break;
			
		case "thirdChapterDiv":
			$(".introjs-nextbutton").hide();
			$('#thirdChapterDiv').removeClass('opacity00');
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "These are <b class='ct-code-b-yellow'>siblingElements</b> of div element.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="printText3()">Next →</a>');
				});
			});
			break;
			
		case "universal":
			$('#universal').addClass('z-index visited');
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				intro.refresh();
				var text = "This selector targets all the elements in an Element. <b class='ct-code-b-yellow'>&bigstar;</b>"
					+" symbol can use for universal selector.";
				typing(".introjs-tooltiptext", text, function() {
					$('.visited').removeAttr('disabled');
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "universalProperty1":
			$('#universal').addClass('visited');
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('#selectorOne').parent().removeClass('opacity00');
				var text = "<b class='ct-code-b-yellow'>color</b> property can be used for change the text color of given "
							+"element.Here value of the property is <b class='ct-code-b-yellow'>blue</b>.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
			
		case "selectorOne":
			$('[contenteditable="false"]').attr('contenteditable', true);
			$('#selectorOne').removeAttr('disabled');
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "Select all the elements that are placed in the inside of div elements.</br>Hint: <b class='ct-code-b-yellow'>div *</b>.";
				typing(".introjs-tooltiptext", text, function() {
					$('#selectorOne').focus();
					universalDescendantValidation("#selectorOne"," *");
				});
			});
			break;
			
		case "totalStyleOne":
			$('#selectorOne').attr('disabled','disabled');
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('[contenteditable="true"]').attr('contenteditable', false);
				var text = "This is know as a universion selector <b class='ct-code-b-yellow'>div *</b> here selects all the elements inside the div.";
				typing(".introjs-tooltiptext", text, function() {
					$('#htmlCode,#browser').addClass('z-index');
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="universalAnimation()">Next →</a>');
				});
			});
			break;
			
		case "child":
			$('#htmlCode,#browser').removeClass('z-index');
			$('.user-btn').remove();
			$('#child').addClass('z-index visited');
			$('.visited').removeAttr('disabled').addClass('z-index');
			$(".introjs-nextbutton").hide();
			intro.refresh();
			$('.introjs-helperLayer ').one('transitionend', function() {
				intro.refresh();
				var text = "Child selector can be used to select all child elements of given elements(Not sub-child elemnts).<b class='ct-code-b-yellow'>"
							+" > </b> symbol used for child selector.";
				typing(".introjs-tooltiptext", text, function() {
					$('.visited').removeAttr('disabled');
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "childProperty1":
			$('.visited').attr('disabled','disabled');
			$('#child').addClass('visited');
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('#selectorTwo').parent().removeClass('opacity00');
				var text = "<b class='ct-code-b-yellow'>text-decoration:underline</b> property value used to underline text of a given elements.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "selectorTwo":
			$('[contenteditable="false"]').attr('contenteditable', true);
			$('#selectorTwo').removeAttr('disabled');
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "Select all the elements <b class='ct-code-b-yellow'>h2</b> elements that are inside of "
							+"a <b class='ct-code-b-yellow'>div</b> elements. </br> Hint: <b class='ct-code-b-yellow'>div > h2</b>.";
				typing(".introjs-tooltiptext", text, function() {
					$('#selectorTwo').focus();
					selectorValidation("#selectorTwo",">","h2");
				});
			});
			break;
			
		case "totalStyleTwo":
			$('#selectorOne').attr('disabled','disabled');
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "This is know as child selector. <b class='ct-code-b-yellow'>div > h2</b> here selects all"
							+" <b class='ct-code-b-yellow'>h2</b> elements of inside of div elements.";
				typing(".introjs-tooltiptext", text, function() {
					$('#htmlCode,#browser').addClass('z-index');
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="childAnimation()">Next →</a>');
				});
			});
			break;
			
		case "descendant":
			$('#htmlCode,#browser').removeClass('z-index');
			$('.user-btn').remove();
			$('#descendant').addClass('z-index visited');
			$('.visited').removeAttr('disabled').addClass('z-index');
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				intro.refresh();
				var text = "Child selector can be used to select all child elements of given elements(Not sub-child elemnts)."
							+"<b class='ct-code-b-yellow'> > </b> symbol used for child selector.";
				typing(".introjs-tooltiptext", text, function() {
					$('.visited').removeAttr('disabled');
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "descendantProperty1":
			$('.visited').attr('disabled','disabled');
			$('#child').addClass('visited');
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('#selectorThree').parent().removeClass('opacity00');
				var text = "<b class='ct-code-b-yellow'>margin-left:100px</b> property value can be used to element moves towards left side and "
							+"<b class='ct-code-b-yellow'>background:yellow</b> property value change the background color of an elements.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "selectorThree":
			$('[contenteditable="false"]').attr('contenteditable', true);
			$('#selectorThree').removeAttr('disabled');
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "Select all the p elements of div elements irrespective of child or sub-child "
							+"</br> <b class='ct-code-b-yellow'>div p</b>.";
				typing(".introjs-tooltiptext", text, function() {
					$('#selectorThree').focus();
					universalDescendantValidation("#selectorThree"," p");
				});
			});
			break;
			
		case "totalStyleThree":
			$('#restart').parent().removeClass('hide');
			$('#selectorOne').attr('disabled','disabled');
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				intro.refresh();
				var text = "This is know as a descendent selector. <b class='ct-code-b-yellow'>div p</b> "
							+"here selects all p elements that are child/sub-child of div elements.";
				typing(".introjs-tooltiptext", text, function() {
					$('#htmlCode,#browser').addClass('z-index');
					intro.refresh();
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="descendantAnimation()">Next →</a>');
				});
			});
			break;
			
		case "restart":
			$('.user-btn, .skip-btn').remove();
			$('.z-index').removeClass('z-index');
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				intro.refresh();
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

function printText() {
	$('.user-btn').remove();
	var text = "Now this <b class='ct-code-b-yellow'>html code</b> output will be displayed on the <b class='ct-code-b-yellow'>browser</b>.";
	typing(".introjs-tooltiptext", text, function() {
		$("#browser").addClass("z-index").removeClass('opacity00');
		$("#h1Tag").effect("transfer", {to: $("#browserText > h1"), className: "ui-effects-transfer"}, 800, function() {
			$("#browserText > h1").removeClass("opacity00");
			$('.introjs-nextbutton').show();
		});
	});
}

function printText1() {
	$('.user-btn').remove();
	var text = "Now this html code output will be displayed on the browser without appling any css-rules this elements.";
	typing(".introjs-tooltiptext", text, function() {
		$("#firstChapterDiv").effect("transfer", {to: $("#browserText > div:eq(0)"), className: "ui-effects-transfer"}, 800, function() {
			$("#browserText > div:eq(0)").removeClass("opacity00");
			$('.introjs-nextbutton').show();
		});
	});
}

function printText2() {
	$('.user-btn').remove();
	var text = "Now this html code output will be displayed on the browser without appling any css-rules this elements.";
	typing(".introjs-tooltiptext", text, function() {
		$("#secondChapterDiv").effect("transfer", {to: $("#browserText > div:eq(1)"), className: "ui-effects-transfer"}, 800, function() {
			$("#browserText > div:eq(1)").removeClass("opacity00");
			$('.introjs-nextbutton').show();
		});
	});
}

function printText3() {
	$('.user-btn').remove();
	var text = "Now this html code output will be displayed on the browser without appling any css-rules this elements.";
	typing(".introjs-tooltiptext", text, function() {
		$("#thirdChapterDiv").effect("transfer", {to: $("#browserText > div:eq(2)"), className: "ui-effects-transfer"}, 800, function() {
			$("#browserText > div:eq(2)").removeClass("opacity00");
			$('.introjs-nextbutton').show();
		});
	});
}

function universalAnimation() {
	$('span[id*=TagInDiv]').addClass('bg-black-color-white');
	transfer('#htmlCode span[id*=TagInDiv]:eq(0)','#browserText > div *:eq(0)','color-blue',function() {
		transfer('#htmlCode span[id*=TagInDiv]:eq(1)','#browserText > div *:eq(1)','color-blue',function() {
			transfer('#htmlCode span[id*=TagInDiv]:eq(2)','#browserText > div *:eq(2)','color-blue',function() {
				transfer('#htmlCode span[id*=TagInDiv]:eq(3)','#browserText > div *:eq(3)','color-blue',function() {
					transfer('#htmlCode span[id*=TagInDiv]:eq(4)','#browserText > div *:eq(4)','color-blue',function() {
						transfer('#htmlCode span[id*=TagInDiv]:eq(5)','#browserText > div *:eq(5)','color-blue',function() {
							transfer('#htmlCode span[id*=TagInDiv]:eq(6)','#browserText > div *:eq(6)','color-blue',function() {
								transfer('#htmlCode span[id*=TagInDiv]:eq(7)','#browserText > div *:eq(7)','color-blue',function() {
									$('span[id*=TagInDiv]').removeClass('bg-black-color-white');
									dynamicStepCalling('totalStyleOne');
								});
							});
						});
					});
				});
			});
		});
	});
}

function childAnimation() {
	$('[id*=H2]').addClass('bg-black-color-white');
	transfer('[id*=H2]:eq(0)','#browserText > div:eq(0) *:eq(0)','underline-text',function() {
		transfer('[id*=H2]:eq(1)','#browserText > div:eq(1) *:eq(0)','underline-text',function() {
			$('[id*=H2]').removeClass('bg-black-color-white');
			dynamicStepCalling('totalStyleTwo');
		});
	});
}

function descendantAnimation() {
	$('.user-btn').remove();
	$('[id*=PTag]').addClass('bg-black-color-white');
	$("[id*=PTag]:eq(0)").effect("transfer", {to: $("#browserText div:eq(0) > p"), className: "ui-effects-transfer"}, 800, function() {
		$("#browserText div:eq(0) > p").addClass('descendant-css').queue(function(){
			$("#browserText div:eq(0) > p").addClass('descendant-css1').dequeue();
			$("[id*=PTag]:eq(1)").effect("transfer", {to: $("#browserText div:eq(1) > p:eq(0)"), className: "ui-effects-transfer"}, 800, function() {
				$('#browserText div:eq(1) > p:eq(0)').addClass('descendant-css').queue(function(){
					$('#browserText div:eq(1) > p:eq(0)').addClass('descendant-css1').dequeue();
					$("[id*=PTag]:eq(2)").effect("transfer", {to: $("#browserText div:eq(1) > p:eq(1)"), className: "ui-effects-transfer"}, 800, function() {
						$('#browserText div:eq(1) > p:eq(1)').addClass('descendant-css').queue(function(){
							$('#browserText div:eq(1) > p:eq(1)').addClass('descendant-css1').dequeue();
							$('[id*=PTag]').removeClass('bg-black-color-white');
							$('.introjs-nextbutton').show();
						});
					});
				});
			});
		});
	});
}

function transfer(selector1,selector2,className,callBackFunction) {
	$('.user-btn').remove();
	$(selector1).effect("transfer", {to: $(selector2), className: "ui-effects-transfer"}, 800, function() {
		$(selector2).addClass(className);
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function universalDescendantValidation(selector,value) {
	$(selector).off("keyup").focus();
	$(selector).on("keyup", function(e) {
		intro.refresh();
	    var one = $(selector).text();
	    var two = value;
	    var three ="div";
	    if (one.indexOf(two) > -1 && one.indexOf(three) > -1) {
	        var flag = false;
	    $.each(one.split(value), function(index, val) {
	      if ((index == 0 && val.trim() == "div") || (index == 1 && val.trim() == "") ) {
	        flag = !flag;
	        $('.introjs-nextbutton').show();
	      } else {
	    	  $('.introjs-nextbutton').hide();
	      }
	    });
	   } else {
		   $('.introjs-nextbutton').hide();
	   }
	});
}

function selectorValidation(selector,symbol,element) {
	$(selector).off("keyup");
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
	
	$(selector).on("keyup", function(e) {
		intro.refresh();
		var b = $(this).text();
		var div1 = b.trim().substring(0,3);
		var vv =b.replace(/\s/g,'');
			if ( div1 ==="div" && vv === "div"+symbol+element) {
				flag = false;
				$('.introjs-nextbutton').show();
			} else {
				$('.introjs-nextbutton').hide();
			}
	});
} 

function universalClick() {
	$('.user-btn').remove();
	$('#selectorOne').text(""); 
	$('#topicsDiv  button').attr('disabled', 'disabled');
	$('.color-blue').removeClass('color-blue');
	intro.goToStep(8);
}

function childClick() {
	$('.user-btn').remove();
	$('#selectorTwo').text(""); 
	$('#topicsDiv  button').attr('disabled', 'disabled');
	$('.underline-text').removeClass('underline-text');
	intro.goToStep(12);
}

function descendantClick() {
	$('.user-btn').remove();
	$('#selectorThree').text(""); 
	$('#topicsDiv  button').attr('disabled', 'disabled');
	$('.descendant-css, .descendant-css1').removeClass('descendant-css, descendant-css1');
	intro.goToStep(16);
}

function dynamicStepCalling(text) {
	if (text == "totalStyleOne") {
		$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="intro.goToStep(11)">Next &#8594;</a>');
	} else if (text == "totalStyleTwo") {
		$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="intro.goToStep(15)">Next?&#8594;</a>');
	} else if (text == "selectorThree") {
		$('.introjs-nextbutton').show();
	} 
}
</script>
</head>
<body>
	<div class='text-center margin-top-20'>
		<h4 class='label ct-demo-heading' id='heading'>Working with
			Selectors</h4>
	</div>
	<div class='col-xs-12 text-center margin-top-20'>
	 <div class='col-xs-offset-1 col-xs-10'>
			<div class='col-xs-offset-1 col-xs-10 opacity00' id='topicsDiv'>
				<div class='col-xs-4 padding0'>
					<button id='universal' onclick="universalClick()" type="button"
						class="btn btn-success">Universal Selector (&starf;)</button>
				</div>
				<div class='col-xs-4 padding0'>
					<button id='child' onclick="childClick()" type="button"
						class="btn btn-success">Child Selector (>)</button>
				</div>
				<div class='col-xs-4 padding0'>
					<button id='descendant' onclick="descendantClick()" type="button"
						class="btn btn-success">Descendant Selector (" ")</button>
				</div>
			</div>
		</div> 
	</div>
	<div class='col-xs-12 margin-top-20'>
		<div class='col-xs-6'>
			<div class='col-xs-12'>
				<pre class='opacity00'>
&lt;html&gt;				
<span class='openStyle'>&lt;style&gt;</span>
<div id='styleDiv'><span id='totalStyleOne'><div id="selectorOne" class="input-css position1" contenteditable='true' maxlength='10'></div> {
	<span id='universalProperty1'>color:&nbsp;blue;</span>
}</span>
<span id='totalStyleTwo'><div id="selectorTwo" class="input-css position1" contenteditable='true' maxlength='10'></div> {
	<span id='childProperty1'>text-decoration:&nbsp;underline peru;</span>
}</span>
<span id='totalStyleThree'><div id="selectorThree" class="input-css position1" contenteditable='true' maxlength='10'></div> {
	<span id='descendantProperty1'>margin-left:&nbsp;100px;
	background:&nbsp;yellow;</span>
}</span></div>
&lt;/style&gt;
&lt;body&gt;
<div id='htmlCode'><span id='h1Tag' class="opacity00">&lt;h1 style="text-align: center; color: red;"&gt;HTML BOOK&lt;/h1&gt;</span>
	<div id='firstChapterDiv' class="opacity00 position"><span id='firstDivOpen'>&lt;div&gt;</span>
		<span id='firstH2TagInDiv'>&lt;h2&gt;1. Chapter 1&lt;/h2&gt;</span>
		<span id="firstH4TagInDiv">&lt;h4&gt;1.1 Section&lt;/h4&gt;</span>
		<span id='firstPTagInDiv'>&lt;p&gt;1.1.1 Introduction Tags and selectors&lt;/p&gt;</span>
<span id='firstDivClose'>&lt;/div&gt;</span></div>
<div id='secondChapterDiv' class="position opacity00">	<span id='secondDivOpen'>&lt;div&gt;</span>
			<span id='secondH2TagInDiv'>&lt;h2&gt;2. Chapter 3&lt;/h2&gt;</span>
			<span id='secondH4TagInDiv'>&lt;h4&gt;2.1 Section&lt;/h4&gt;</span>
			<span id='secondPTagInDiv'>&lt;p&gt;2.1.1 Using relative position&lt;/p&gt;</span>
			<span id='thirdH4TagInDiv'>&lt;h4&gt;2.2 Section&lt;/h4&gt;</span>
			<span id='thirdPTagInDiv'>&lt;p&gt;2.2.1 Using absolute position&lt;/p&gt;</span>
	<span id='secondDivClose'>&lt;/div&gt;</span></div>
<div id='thirdChapterDiv' class="opacity00 position">			<span id='summary'>&lt;p&gt;Summary&lt;/p&gt;</span>
			<span id='assignment'>&lt;h4&gt;Assignment&lt;/h4&gt;</span>
			<span id='end'>&lt;p&gt;End of the course&lt;/p&gt;</span></div></div>
&lt;/body&gt;
&lt;/html&gt;</pre>
			</div>
		</div>
		<div class='col-xs-6'>
			<div class='col-xs-12 opacity00 container' id='browser'>
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
	<div class ="col-xs-12 html-body padding00" id = "htmlBody">
				<div id='browserText'>
					<h1 class='opacity00' style="text-align: center; color: Red">HTML
						BOOK</h1>
					<div class='opacity00'>
						<h2>1. Chapter 1</h2>
						<h4>1.1 Section</h4>
						<p>1.1.1 Introduction Tags and selectors</p>
					</div>
					<div class='opacity00'>
						<h2>2. Chapter 2</h2>
						<h4>2.1 Section</h4>
						<p>2.1.1 Using relative position</p>
						<h4>2.2 Section</h4>
						<p>2.2.1 Using absolute position</p>
					</div>
					<div class='opacity00'>
						<p>Summary</p>
						<h4>Assignment</h4>
						<p>End of the course</p>
					</div>
				</div>
			</div>
	</div>
	<div class='col-xs-12 text-center margin-top-20 hide'>
		 <span id='restart'
			class='btn btn-warning btn-sm opacity00 margin-top20'>Restart
			&nbsp;<i class='fa fa-refresh'></i>
		</span> 
	</div>
	</div>
</body>
</html>