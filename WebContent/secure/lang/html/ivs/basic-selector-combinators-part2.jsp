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
<title>only two</title>

<style type="text/css">

.introjs-tooltip {
	min-width: 250px;
}

 #styleDiv {
	height: 120px;
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

.user-btn {
	background-color: green;
}

.skip-btn {
	background-color: orange;
}

.bg-hotpink {
	background: hotpink;
}

.border-green {
	border: 2px solid green;
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
	$('#selectorOne, #selectorTwo').parent().addClass('opacity00');
	$('#thirdChapterDiv > *').addClass('siblings');
	$('button').attr('disabled','disabled');
	initIntroJS();
	$('#selectorOne, #selectorTwo').text('');
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
			element : "#general",
			intro : "",
			position : "buttom"
		}, {
			element : "#generalProperty1",
			intro : "",
			position : "top"
		}, {
			element : "#selectorOne",
			intro : "",
			position : "buttom"
		}, {
			element : "#totalStyleOne",
			intro : "",
			position : "right"
		}, {
			element : "#adjacent",
			intro : "",
			position : "buttom"
		}, {
			element : "#adjacentProperty1",
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
					var text = "We are going to discuss these <b class='ct-code-b-yellow'>sibling  selectors</b>.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				} else {
					$('#htmlCode, #browser').removeClass('z-index');
					$('.user-btn').remove();
					$('.bg-yellow').removeClass('bg-yellow');
					$('#general, #adjacent').removeAttr('disabled');
					var text = "You can select anyone.";
					typing(".introjs-tooltiptext", text, function() {
						//$('.introjs-nextbutton').show();
						intro.insertOption(intro._currentStep + 1, getStep("#restart", "", "right"));
						$('.skip-btn').remove();
						$(".introjs-tooltipbuttons").append('<a class="introjs-button skip-btn" onclick="intro.goToStep(16)">Skip →</a>');
						
					});
				}
			});
			break;
			
		case "h1Tag":
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('#browser [maxlength]').prop('value','basic-selector-combinators-part2.jsp');
				$('#h1Tag').removeClass('opacity00')
				var text = "This is the heading of the book in <b class='ct-code-b-yellow'>h1</b> tag element.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="printText()">Next →</a>');
				});
			});
			break;
			
		case "firstChapterDiv":
			$('#firstChapterDiv').removeClass('opacity00');
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "This is the total content in the <b class='ct-code-b-yellow'>first</b> chapter.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="printText1()">Next →</a>');
				});
			});
			break;
			
		case "secondChapterDiv":
			$('#secondChapterDiv').removeClass('opacity00');
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "This is the total content in the <b class='ct-code-b-yellow'>second-chapter</b>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="printText2()">Next →</a>');
				});
			});
			break;
			
		case "thirdChapterDiv":
			$('#thirdChapterDiv').removeClass('opacity00');
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "These are <b class='ct-code-b-yellow'>siblingElements</b> of div element.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="printText3()">Next →</a>');
				});
			});
			break;
			
		case "general":
			$('#browser').removeClass('z-index');
			var pTags = $( "#browserText p:last" );
			if ( pTags.parent().is( "div" ) ) {
				pTags.unwrap();
			}
			
			$('#general').addClass('z-index visited');
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				intro.refresh();
				var text = "General sibling selector select all following sibling elements.<b class='ct-code-b-yellow'>~</b> symbol used for "
							+"general sibling selector.";
				typing(".introjs-tooltiptext", text, function() {
					$('.visited').removeAttr('disabled');
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "generalProperty1":
			$('.visited').attr('disabled','disabled');
			$('#general').addClass('visited');
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('#selectorOne').parent().removeClass('opacity00');
				var text = "<b class='ct-code-b-yellow'>background</b> property can be used for change the background-color of a given "
							+"element.Here value of the property is <b class='ct-code-b-yellow'>hotpink</b>.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
			
		case "selectorOne":
			$('[contenteditable="false"]').attr('contenteditable', true);
			$('#selectorTwo').removeAttr('disabled');
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "Select all the following <b class='ct-code-b-yellow'>p</b> sibling elements "
							+"of  div element.</br>Hint: <b class='ct-code-b-yellow'>div ~ p</b>.";
				typing(".introjs-tooltiptext", text, function() {
					$('#selectorOne').focus();
					selectorValidation("#selectorOne","~","p");
				});
			});
			break;
			
		case "totalStyleOne":
			$('[contenteditable="true"]').attr('contenteditable', false);
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "This is known as a general sibling selector.div ~ p here selects all p element that are after adjacents.";
				typing(".introjs-tooltiptext", text, function() {
					$('#htmlCode,#browser').addClass('z-index');
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="generalAnimation()">Next →</a>');
				});
			});
			break;
			
		case "adjacent":
			$('#adjacent').addClass('z-index visited');
			$('#htmlCode, #browser').removeClass('z-index');
			$('.user-btn').remove();
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				intro.refresh();
				var text = "Adjacent sibling selector targets the next to the sibling of targated element.<b class='ct-code-b-yellow'>"
							+" + </b> symbol used for adjacent sibling selector.";
				typing(".introjs-tooltiptext", text, function() {
					$('.visited').removeAttr('disabled');
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "adjacentProperty1":
			$('.visited').attr('disabled','disabled');
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('#selectorTwo').parent().removeClass('opacity00');
				var text = "<b class='ct-code-b-yellow'>border:2px solid green</b> property value used to border of a given elements.";
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
				var text = "Select adjacent sibling element of <b class='ct-code-b-yellow'>div</b> element</br> Hint: <b class='ct-code-b-yellow'>div + p</b>.";
				typing(".introjs-tooltiptext", text, function() {
					$('#selectorTwo').focus();
					selectorValidation("#selectorTwo","+","p");
				});
			});
			break;
			
		case "totalStyleTwo":
			$('[contenteditable="true"]').attr('contenteditable', false);
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "This is know as Adjacent-sibling selector. div + p here selects only p element if that is very next to the targated div.";
				typing(".introjs-tooltiptext", text, function() {
					$('#htmlCode,#browser').addClass('z-index');
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="childAnimation()">Next →</a>');
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

function generalAnimation() {
	$('.siblings:eq(0),.siblings:eq(2)').addClass('bg-black-color-white');
	transfer('.siblings:eq(0)','#browserText div ~ p:eq(0)','bg-hotpink',function() {
		transfer('.siblings:eq(2)','#browserText div ~ p:eq(1)','bg-hotpink',function() {
			$('.bg-black-color-white').removeClass('bg-black-color-white');
			$('.introjs-nextbutton').show();
		});
	});
}

function childAnimation() {
	$('.siblings:eq(0)').addClass('bg-black-color-white');
	transfer('.siblings:eq(0)','#browserText div + p','border-green',function() {
		$('.bg-black-color-white').removeClass('bg-black-color-white');
		$('#restart').parent().removeClass('hide');
		$('.introjs-nextbutton').show();
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

function selectorValidation(selector,symbol,element) {
	$(selector).off("keyup");
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

function generalClick() {
	$('#selectorOne').text(""); 
	$('.bg-hotpink').removeClass('bg-hotpink');
	intro.goToStep(8);
}

function adjacentClick() {
	$('#selectorTwo').text("");
	$('.border-green').removeClass('border-green');
	intro.goToStep(12)
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
		<div class='col-xs-offset-3 col-xs-6 opacity00' id='topicsDiv'>
		     <div class='col-xs-offset-1 col-xs-5 padding0'>
					<button id='general' onclick="generalClick()"type="button"  class="btn btn-success">General Sibling(~)</button>
				</div>
				<div class='col-xs-5 padding0'>
					<button id='adjacent' onclick="adjacentClick()" type="button" class="btn btn-success">adjacent Sibling(+)</button>
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
<div id='styleDiv'><span id='totalStyleOne'><div id="selectorOne" class="position1" contenteditable="true" maxlength='10'></div> {
	<span id='generalProperty1'>background:&nbsp;hotpink;</span>
}</span>
<span id='totalStyleTwo'><div id="selectorTwo" class="position1" contenteditable="true" maxlength='10'></div> {
	<span id='adjacentProperty1'>border:&nbsp;2px solid green;</span>
}</span></div>
&lt;/style&gt;
&lt;body&gt;
<div id='htmlCode'><span id='h1Tag'>	&lt;h1 style="text-align: center; color: red;"&gt;HTML BOOK&lt;/h1&gt;</span>
<div class="opacity00 position" id='firstChapterDiv'><span id='firstDivOpen'>&lt;div&gt;</span>
	<span id='firstH2TagInDiv'>&lt;h2&gt;1. Chapter 1&lt;/h2&gt;</span>
	<span id="firstH4TagInDiv">&lt;h4&gt;1.1 Section&lt;/h4&gt;</span>
	<span id='firstPTagInDiv'>&lt;p&gt;1.1.1 Introduction Tags and selectors&lt;/p&gt;</span>
<span id='firstDivClose'>&lt;/div&gt;</span></div>
<div class="position opacity00" id='secondChapterDiv'><span id='secondDivOpen'>&lt;div&gt;</span>
	<span id='secondH2TagInDiv'>&lt;h2&gt;2. Chapter 3&lt;/h2&gt;</span>
	<span id='secondH4TagInDiv'>&lt;h4&gt;2.1 Section&lt;/h4&gt;</span>
	<span id='secondPTagInDiv'>&lt;p&gt;2.1.1 Using relative position&lt;/p&gt;</span>
	<span id='thirdH4TagInDiv'>&lt;h4&gt;2.2 Section&lt;/h4&gt;</span>
	<span id='thirdPTagInDiv'>&lt;p&gt;2.2.1 Using absolute position&lt;/p&gt;</span>
<span id='secondDivClose'>&lt;/div&gt;</span></div>
<div class="position opacity00" id='thirdChapterDiv'><span id='summary'>&lt;p&gt;Summary&lt;/p&gt;</span>
<span id='assignment'>&lt;h4&gt;Assignment&lt;/h4&gt;</span>
<span id='end'>&lt;p&gt;End of the course&lt;/p&gt;</span></div></div>
&lt;/body&gt;
&lt;/html&gt;</pre>
			</div>
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
					<h1 class='opacity00' style="text-align: center; color: Red">HTML BOOK</h1>
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
	</div>
</body>
</html>