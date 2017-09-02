<!-- =============================================================
TOC-Reference-Name:Multiple column-layout-1
Objective: Assignment-layouts 
Coverage: column-count, gap, rule-style, rule-width, rule-color
Developed By: Shiva
Developed Date: 26-11-16
Reviewed by:
Reviewed Date:
Modified Date:  
============================================================= -->

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src='/js/intro.js'></script>

<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<title>Multiple column layout</title>
<style type="text/css">


.margin-top-5 {
	margin-top: 5%;
}

.margin-top-1 {
	margin-top: 1%;
}

.margin-top-2 {
	margin-top: 2%;
}

.margin-top-10 {
	margin-top: 10%;
}

pre {
	-moz-tab-size: 3;
	font-size: 12px;
}
input {
	background-color: transparent;
	border: medium none;
	outline: none;
}

.width-11 {
	width: 11%;
}

.width-35 {
	width: 35%;
}

.width-41 {
	width: 41%;
}

.browser {
	border: 1px solid; 
	padding: 0;
}

.z-index {
	z-index: 9999999;
	background-color: white;
	padding: 2px;
	position: relative;
}

.fa-repeat {
	position: relative;
}

.ct-code-b-red {
	color: red;
}

.ui-effects-transfer {
	border: 1px solid green;
	z-index: 9999999 !important;
}

/* .introjs-tooltip {
	min-width: 280px;
} */

</style>

</head>

<body>
<div class="col-xs-12">
	<div class="text-center margin-top-1">
		<h3 class='label ct-demo-heading' id="heading">
			<span>Multiple Column Layout</span>
		</h3>
	</div>
	<div class="text-center margin-top-2" id="restartDiv">
		<a class="btn btn-warning opacity00" id="restart"><i class="fa fa-refresh"></i>&nbsp;Restart</a>
	</div>
	<div class="col-xs-6">
<pre id="preCode" class="margin-top-10">
<span id='docType' class="opacity00">&lt;!DOCTYPE html&gt;</span>
<span class="opacity00" id="openHtml">&lt;html&gt;</span>
	<span class="opacity00" id="openHead">&lt;head&gt;</span>
		<span class="opacity00" id="openTitle">&lt;title&gt;</span><span class="opacity00" id="titleText">Multiple column layout</span><span class="opacity00" id="closedTitle">&lt;/title&gt;</span>
		<span class="opacity00" id="openStyle">&lt;style&gt;</span>
		<span class="opacity00" id="closeStyle">&lt;/style&gt;</span>
	<span class="opacity00" id="closedHead">&lt;/head&gt;</span>
	<span class="opacity00" id="openBody">&lt;body&gt;</span>
		<span id='totalh4Tag'><span class="opacity00" id="openh4Tag">&lt;h4&gt;</span><span class="opacity00" id="h4TagText">Wikipedia:</span><span class="opacity00" id="closeh4Tag">&lt;/h4&gt;</span></span>
		<span class="opacity00 hide" id="preCodeText">&lt;div class='content'&gt;
			Narendra Damodardas Modi born 17 September 1950 is the 14th and 
			current Prime Minister of India, in office since 26 May 2014. 
			Modi, a leader of the Bharatiya Janata Party (BJP), was the 
			Chief Minister of the western Indian state of Gujarat from 2001 
			to 2014, and is currently a Member of the Parliament from 
			Varanasi. He took office as the Prime Minister after the 2014 
			general election, in which his party (BJP) won a majority in the 
			Lok Sabha (the lower house of the Indian parliament), for the 
			first time since 1984 general elections.
		&lt;/div&gt;</span>
	<span class="opacity00" id="closedBody">&lt;/body&gt;</span>
<span class="opacity00" id="closedHtml">&lt;/html&gt;</span>
</pre>
	</div>
	<div class="col-xs-6 margin-top-5">
		<div class="col-xs-12 browser opacity00" id="browser">
			<img src="../images/multiple-column-browser-img.png" style="width: 100%;">
			<!-- <i class="fa fa-repeat fa-sin" style="font-size:18px"></i> -->
			<div style="border-top: 1px solid;">
				<h4 class="opacity00" id="h4TextDisplay">Wikipedia: </h4>
			</div>
			<!-- <div class="col-xs-offset-2" id="navTag1">
				<nav>
					<ul class="nav navbar-nav" style="font-size: 17px; display: inline;">
						<li><a href="#">Mail</a></li>
						<li><a href="#">Cricket</a></li>
						<li class="active"><a href="#">News</a></li>
						<li><a href="#">Movies</a></li>
						<li><a href="#">Style</a></li>
					</ul>
				</nav>
			</div> -->
			<div class="col-xs-12">
				<div class="html-wiki opacity00" id="browserText" style="padding: 2px;">
					Narendra Damodardas Modi born 17 September 1950 is the 14th and current Prime Minister of India, 
					in office since 26 May 2014. Modi, a leader of the Bharatiya Janata Party (BJP), was the Chief Minister 
					of the western Indian state of Gujarat from 2001 to 2014, and is currently a Member of the Parliament 
					from Varanasi. He took office as the Prime Minister after the 2014 general election, in which his party 
					(BJP) won a majority in the Lok Sabha (the lower house of the Indian parliament), for the first time 
					since 1984 general elections.
				</div>
			</div>
		</div>
	</div>
</div>
</body>
<script type="text/javascript">
var typingInterval = 10;
$(document).ready(function() {
	introGuide();
	$("body").attr({ondragstart :"return false"});   /* ondragstart: fires when the user starts to drag an element */
});

function introGuide() {
	introjs = introJs();
	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
	
	$("#restart").click(function() {
		location.reload();
	});
	
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		tooltip : false,
		steps :[{
			element : '#heading',
			intro : ''
		}, {
			element : '#docType',
			intro : ''
		}, {
			element : '#openHtml',
			intro : ''
		}, {
			element : '#closedHtml',
			intro : ''
		}, {
			element : '#openHead',
			intro : ''
 		}, {
			element : '#closedHead',
			intro : ''
 		}, {
			element : '#openTitle',
			intro : ''
 		}, {
			element : '#closedTitle',
			intro : ''
 		}, {
			element : '#titleText',
			intro : ''
 		}, {
			element : '#browser',
			intro : '',
			animateStep : 'zoomingBrowser',
			tooltipClass : 'hide'
		}, {
			element : '#openBody',
			intro : ''
		}, {
			element : '#closedBody',
			intro : ''
		}, {
			element : '#openh4Tag',
			intro : ''
		}, {
			element : '#closeh4Tag',
			intro : ''
		}, {
			element : '#h4TagText',
			intro : ''
		}, {
			element : '#browser',
			intro : '',
			animateStep : 'h4TextDisplayed',
			tooltipClass : 'hide'
		}, {
			element : '#openStyle',
			intro : ''
		}, {
			element : '#closeStyle',
			intro : ''
		}, {
			element : '#browser',
			intro : '',
			animateStep : 'h4TextColorDisplayed',
			tooltipClass : 'hide'
		}, {
			element : '#preCodeText',
			intro : '',
		}, {
			element : '#browser',
			intro : '',
			animateStep : 'reflectingText',
			tooltipClass : 'hide'
		}, {
			element : '#browser',
			intro : '',
			animateStep : 'reflectingCount',
			tooltipClass : 'hide'
		}, {
			element : '#browser',
			intro : '',
			animateStep : 'reflectingCountEnterByUser',
			tooltipClass : 'hide'
		}, {
			element : '#browser',
			intro : '',
			animateStep : 'reflectingGap',
			tooltipClass : 'hide'
		}, {
			element : '#browser',
			intro : '',
			animateStep : 'reflectingGapEnterByUser',
			tooltipClass : 'hide'
		}, {
			element : '#browser',
			intro : '',
			animateStep : 'reflectingRuleStyle',
			tooltipClass : 'hide'
		}, {
			element : '#browser',
			intro : '',
			animateStep : 'reflectingRuleStyleEnterByUser',
			tooltipClass : 'hide'
		}, {
			element : '#browser',
			intro : '',
			animateStep : 'reflectingRuleWidth',
			tooltipClass : 'hide'
		}, {
			element : '#browser',
			intro : '',
			animateStep : 'reflectingRuleWidthEnterByUser',
			tooltipClass : 'hide'
		}, {
			element : '#browser',
			intro : '',
			animateStep : 'reflectingRuleColor',
			tooltipClass : 'hide'
		}, {
			element : '#browser',
			intro : '',
			animateStep : 'reflectingRuleColorEnterByUser',
			tooltipClass : 'hide'
		}, {
			element : '#browser',
			intro : '',
			animateStep : 'reflectingRuleForAll',
			tooltipClass : 'hide'
		}, {
			element :'#restart',
			intro : "Click to restart",
			position : 'right',
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
		var elementId = targetElement.id;
		switch(elementId) {
		case 'heading':
			var text = "Let us learn multi-column Properties using <span class='ct-code-b-yellow'>CSS</span>.";
			typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
				$('.introjs-nextbutton').show();
			});
			break;      
		case 'docType':
			customIntro(elementId);
			break;
		case 'openHtml':
			customIntro(elementId);
			break;
		case 'closedHtml':
			customIntro(elementId);
			break;
		case 'openHead':
			customIntro(elementId);
			break;
		case 'closedHead':
			customIntro(elementId);
			break;
		case 'openTitle':
			customIntro(elementId);
			break;
		case 'closedTitle':
			customIntro(elementId);
			break;
		case 'titleText':
			$(".introjs-tooltip").css({"min-width": "250px"});
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Write a title name here.<br>Enter <span class='ct-code-b-yellow'>Multiple column layout</span>";
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
					customIntroWithoutTyping(elementId);
				});
			});
			break;
		case 'openBody':
			$(".introjs-tooltip").css({"min-width": "200px"});
			customIntro(elementId);
			break;
		case 'closedBody':
			customIntro(elementId);
			break;
		case 'openh4Tag':
			customIntro(elementId);
			break;
		case 'closeh4Tag':
			customIntro(elementId);
			break;
		case 'h4TagText':
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Enter a text in the <span class='ct-code-b-yellow'>h4</span> tag.<br>"+
					"Here we enter the text is<br><span class='ct-code-b-yellow'>Wikipedia:</span>";
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
					customIntroWithoutTyping(elementId);
				});
			});
			break;
		case 'openStyle':
			customIntro(elementId);
			$("#openStyle").after("<br>\t\t\t<span class='opacity00' id='h4Id'>h4</span> <span class='opacity00' id='openBrace1'>{</span>");
			$("#openBrace1").after("<br>\t\t\t\t<span class='opacity00' id='cssColor'>color: blue;</span>");
			$("#cssColor").after("<br>\t\t\t<span class='opacity00' id='closeBrace1'>}</span>");
			break;
		case 'closeStyle':
			customIntro(elementId);
			dynamicSteps("#h4Id");
			break;
		case 'h4Id':
			customIntro(elementId);
			dynamicSteps("#openBrace1");
			break;
		case 'openBrace1':
			customIntro(elementId);
			dynamicSteps("#closeBrace1");
			break;
		case 'closeBrace1':
			customIntro(elementId);
			dynamicSteps("#cssColor");
			break;
		case 'cssColor':
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Here we apply the color property for the <span class='ct-code-b-yellow'>h4</span> tag."+
							"<br>i.e. <span class='ct-code-b-yellow'>color: blue;</span>";
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
					customIntroWithoutTyping(elementId);
				});
			});
			break;
		case 'openBrace2':
			customIntro(elementId);
			$("#openBrace2").after("<br>\t\t\t\t<span class='opacity00' id='columnCount'>column-count: 3;</span>");
			dynamicSteps("#closeBrace2");
			break;
		case 'closeBrace2':
			customIntro(elementId);
			dynamicSteps("#columnCount", "enterColumnCount");
			break;
		case 'preCodeText':
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Let us consider a text with class selector <span class='ct-code-b-yellow'>content</span>.";
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
					TweenMax.to($("#preCodeText"), 1, {opacity: 1, onComplete: function() {
						$('.introjs-nextbutton').show();
					}});
				});
			});
			break;
		case 'contentClass':
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Now apply multi-column properties for the class selector <span class='ct-code-b-yellow'>content</span>.<br>"+
						"Here we enter class selector i.e. <span class='ct-code-b-yellow'>.content</span>";
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
					customIntroWithoutTyping(elementId);
					$("#openBrace2").after("<br>\t\t\t<span class='opacity00' id='closeBrace2'>}</span>");
					dynamicSteps("#openBrace2");
				});
			});
			break;
		case 'columnCount':
			$(".introjs-tooltip").css({"min-width": "280px"});
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'enterColumnCount':
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "The <span class='ct-code-b-yellow'>column-count</span> property specifies the number of columns an "+
						"element should be divided into.<br><br>Here we enter the<br><span class='ct-code-b-yellow'>column-count: 3;</span>";
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						customIntroWithoutTyping(elementId);
					});
				}); 
				$("#columnCount").after("<br>\t\t\t\t<span class='opacity00' id='columnGap'>column-gap: 20px;</span>");
				break;
			case 'userEnterColumnCount':
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Now you can change the count value.<br> Here we restricted to column count is below 7.";
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$("#columnCountInput").removeAttr("disabled").focus();
						$("#columnCountInput").on("keyup", function(e) {
							var value = $("#columnCountInput").val();
							var count = value.substring(value.indexOf(" ") + 1, value.lastIndexOf(";"));
							var syntax = value.substring(0, value.indexOf(" "));
							$('.length-error-text').remove();
							if (syntax == "column-count:" && count > 0 && count < 7) { 
								$(".length-error-text").remove();
								$("#columnCountInput").removeAttr("disabled");
								$(".introjs-nextbutton").show();
							} else {
								$(".introjs-nextbutton").hide();
								$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br>"+
										"<b> Please enter properly.</b></span>");
							}
						});
					});
				});
				break;
			}
			break;
		case 'columnGap':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'enterColumnGap':	
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "The <span class='ct-code-b-yellow'>column-gap</span> property specifies the gap between the columns."+
						"<br><br>Here we enter the<br><span class='ct-code-b-yellow'>column-gap: 20px;</span>";
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						customIntroWithoutTyping(elementId);
					});
				}); 
				$("#columnGap").after("<br>\t\t\t\t<span class='opacity00' id='columnRuleStyle'>column-rule-style: solid;</span>");
				break;
			case 'userEnterColumnGap':
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Now you can change the gap value.<br> Here we restricted to column gap is below 50px.";
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$("#columnGapInput").removeAttr("disabled").focus();
						$("#columnGapInput").on("keyup", function(e) {
							var value = $("#columnGapInput").val();
							var count = value.substring(value.indexOf(" ") + 1, value.lastIndexOf("px;"));
							var syntax = value.substring(0, value.indexOf(" "));
							$('.length-error-text').remove();
							if (syntax == "column-gap:" && count > 0 && count <= 50) {
								$(".length-error-text").remove();
								$("#columnGapInput").removeAttr("disabled");
								$(".introjs-nextbutton").show();
							} else {
								$(".introjs-nextbutton").hide();
								$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br>"+
										"<b> Please enter properly.</b></span>");
							}
						});
					});
				});
				break;
			}
			break;
		case 'columnRuleStyle':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'entercolumnRuleStyle':	
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "The <span class='ct-code-b-yellow'>column-rule-style</span> property specifies the style of the rule between columns."+
						"<br><br>Here we enter the<br><span class='ct-code-b-yellow'>column-rule-style: solid;</span>";
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						customIntroWithoutTyping(elementId);
					});
				}); 
				$("#columnRuleStyle").after("<br>\t\t\t\t<span class='opacity00' id='columnRuleWidth'>column-rule-width: 1px;</span>");
				break;
			case 'userEntercolumnRuleStyle':
				$("#columnRuleStyleInput").css({"width": "200px"});
				$('.introjs-helperLayer').one('transitionend', function() {
					text = 'Now you can chage the <span class="ct-code-b-yellow">solid</span> to any of these style, '+
					'<ul><li><span class="ct-code-b-yellow">dotted</span></li>'+
					'<li><span class="ct-code-b-yellow">dashed</span></li>'+
					'<li><span class="ct-code-b-yellow">double</span></li>'+
					'<li><span class="ct-code-b-yellow">groove</span></li>'+
					'<li><span class="ct-code-b-yellow">ridge</span></li>'+
					'<li><span class="ct-code-b-yellow">inset</span></li>'+
					'<li><span class="ct-code-b-yellow">outset</span></li></ul>'+
					'Hint: <span class="ct-code-b-yellow">column-rule-style: dotted;</span>';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$("#columnRuleStyleInput").removeAttr("disabled").focus();
						$("#columnRuleStyleInput").on("keyup", function(e) {
							var value = $("#columnRuleStyleInput").val();
							var count = value.substring(value.indexOf(" ") + 1, value.lastIndexOf(";"));
							var syntax = value.substring(0, value.indexOf(" "));
							$('.length-error-text').remove();
							if ((syntax == "column-rule-style:") && (count == "dotted" || count == "dashed" || count == "double" || count == "groove" || 
									count == "ridge" ||count == "inset" ||  count == "outset")) {
								$(".length-error-text").remove();
								$("#columnRuleStyleInput").removeAttr("disabled");
								$(".introjs-nextbutton").show();
							} else {
								$(".introjs-nextbutton").hide();
								$("#columnRuleStyleInput").removeAttr("disabled");
								$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br>"+
										"<b> Please enter properly.</b></span>");
							}
						});
					});
				});
				break;
			}
			break;
		case 'columnRuleWidth':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'entercolumnRuleWidth':
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "The <span class='ct-code-b-yellow'>column-rule-width</span> property specifies the width of the rule between columns."+
						"<br><br>Here we enter the<br><span class='ct-code-b-yellow'>column-rule-width: 1px;</span>";
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						customIntroWithoutTyping(elementId);
					});
				}); 
				$("#columnRuleWidth").after("<br>\t\t\t\t<span class='opacity00' id='columnRuleColor'>column-rule-color: red;</span>");
				break;
			case 'userEntercolumnRuleWidth':
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Now you can change the widht value.<br> Here we restricted to column gap is below 5px.";
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$("#columnRuleWidthInput").removeAttr("disabled").focus();
						$("#columnRuleWidthInput").on("keyup", function(e) {
							var value = $("#columnRuleWidthInput").val();
							var count = value.substring(value.indexOf(" ") + 1, value.lastIndexOf("px;"));
							var syntax = value.substring(0, value.indexOf(" "));
							$('.length-error-text').remove();
							if (syntax == "column-rule-width:" && count > 0 && count <= 5) {
								$(".length-error-text").remove();
								$("#columnRuleWidthInput").removeAttr("disabled");
								$(".introjs-nextbutton").show();
							} else {
								$(".introjs-nextbutton").hide();
								$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br>"+
										"<b> Please enter properly.</b></span>");
							}
						});
					});
				});
				break;
			}
			break;
		case 'columnRuleColor':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'entercolumnRuleColor':
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "The <span class='ct-code-b-yellow'>column-rule-color</span> property specifies the color of the rule between columns."+
						"<br><br>Here we enter the<br><span class='ct-code-b-yellow'>column-rule-color: red;</span>";
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						customIntroWithoutTyping(elementId);
					});
				}); 
				$("#columnRuleColor").after("<br>\t\t\t\t<span class='opacity00' id='columnRuleForAll'>column-rule: 2px dashed green;</span>");
				break;
			case 'userEntercolumnRuleColor':
				$("#columnRuleColorInput").css({"width": "200px"});
				$('.introjs-helperLayer').one('transitionend', function() {
					text = 'Now you can chage the color to any of these colors, '+
					'<ul><li><span class="ct-code-b-yellow">violet</span></li>'+
					'<li><span class="ct-code-b-yellow">teal</span></li>'+
					'<li><span class="ct-code-b-yellow">blue</span></li>'+
					'<li><span class="ct-code-b-yellow">gold</span></li>';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$("#columnRuleColorInput").removeAttr("disabled").focus();
						$("#columnRuleColorInput").on("keyup", function(e) {
							introjs.refresh();
							var value = $("#columnRuleColorInput").val();
							var syntax = value.substring(0, value.indexOf(" "));
							var count = value.substring(value.indexOf(" ") + 1, value.lastIndexOf(";"));
							$('.length-error-text').remove();
							if ( (syntax == "column-rule-color:")&& (count == "violet" || count == "teal" || count == "blue" || 
									count == "gold")) {
								$(".length-error-text").remove();
								$("#columnRuleColorInput").removeAttr("disabled");
								$(".introjs-nextbutton").show();
							} else {
								$(".introjs-nextbutton").hide();
								$("#columnRuleColorInput").removeAttr("disabled");
								$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br>"+
										"<b> Please enter properly.</b></span>");
							}
						});
					});
				});
				break;
			}
			break;
		case 'columnRuleForAll':
			$('.introjs-helperLayer').one('transitionend', function() {	
				var text = "The <span class='ct-code-b-yellow'>column-rule</span> property is a shorthand "+
					"property for setting all the column-rule-* properties above."+
					"<br><br>Here we enter the<br><span class='ct-code-b-yellow'>column-rule: 2px dashed green;</span>";
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
					customIntroWithoutTyping(elementId);
				});
			});
			break;
		case 'browser':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'zoomingBrowser':
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#browser").removeClass("visibility-hidden").show();
					zoomingEffect($("#browser"), function() {
						$("#browser").off();
						setTimeoutFunction();
					});
				});
				break;
			case 'h4TextDisplayed':
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#totalh4Tag").addClass("z-index");
					transferEffect("#totalh4Tag", "#h4TextDisplay", function() {
						TweenMax.to($("#h4TextDisplay"), 1, {opacity: 1, onComplete: function() {
							$("#totalh4Tag").removeClass("z-index");
							setTimeoutFunction();
						}});
					});
				});
				break;
			case 'h4TextColorDisplayed':
				$("#preCodeText").removeClass("hide");
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#cssColorInput").addClass("z-index");
					transferEffect("#cssColorInput", "#h4TextDisplay", function() {
						TweenMax.to($("#h4TextDisplay"), 1, {css:{color: "blue"}, onComplete: function() {
							$("#cssColorInput").removeClass("z-index");
							setTimeoutFunction();
						}});
					});
				});
				break;
			case 'reflectingText':
				$('.introjs-helperLayer').one('transitionend', function() {
					TweenMax.to($("#browserText"), 1, {opacity: 1, onComplete: function() {
						setTimeoutFunction();
					}});
					$("#closeBrace1").after("<br>\t\t\t<span class='opacity00' id='contentClass'>.content</span> "+
						"<span class='opacity00' id='openBrace2'>{</span>");
					dynamicSteps("#contentClass");
				});
				break;
			case'reflectingCount':
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#columnCountInput").addClass("z-index");
					transferEffect("#columnCountInput", "#browserText", function() {
						$("#browserText").css({"column-count":"3"});
						$("#columnCountInput").removeClass("z-index");
						introjs.refresh();
						dynamicSteps("#columnCount", "userEnterColumnCount");
						setTimeoutFunction();
					});
				});
				break;
			case 'reflectingCountEnterByUser':
				var value = $("#columnCountInput").val();
				var count = value.substring(value.indexOf(" ") + 1, value.lastIndexOf(";"));
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#columnCountInput").addClass("z-index");
					transferEffect("#columnCountInput", "#browserText", function() {
						$("#browserText").css({"column-count": count});
						$("#columnCountInput").removeClass("z-index");
						introjs.refresh();
						dynamicSteps("#columnGap", "enterColumnGap");
						setTimeoutFunction();
					});
				});
				break;
			case'reflectingGap':
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#columnGapInput").addClass("z-index");
					$("#browser").addClass("z-index");
					transferEffect("#columnGapInput", "#browserText", function() {
					//	$("#browserText").css({"column-gap": "20px"});
						TweenMax.to($("#browserText"), 1, {css: {"-moz-column-gap": "20px"}});
						$("#columnGapInput").removeClass("z-index");
						introjs.refresh();
						dynamicSteps("#columnGap", "userEnterColumnGap");
						setTimeoutFunction();
					});
				});
				break;
			case 'reflectingGapEnterByUser':
				$("#browser").removeClass("z-index");
				var value = $("#columnGapInput").val();
				var count = value.substring(value.indexOf(" ") + 1, value.lastIndexOf(";"));
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#columnGapInput").addClass("z-index");
					$("#browser").addClass("z-index");
					transferEffect("#columnGapInput", "#browserText", function() {
					//	$("#browserText").css({"column-gap": count});
						TweenMax.to($("#browserText"), 1, {css: {"-moz-column-gap": count}});
						$("#columnGapInput").removeClass("z-index");
						introjs.refresh();
						dynamicSteps("#columnRuleStyle", "entercolumnRuleStyle");
						setTimeoutFunction();
					});
				});
				break;
			case'reflectingRuleStyle':
				$("#browser").removeClass("z-index");
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#columnRuleStyleInput").addClass("z-index");
					transferEffect("#columnRuleStyleInput", "#browserText", function() {
						$("#browserText").css({"column-rule-style": "solid"});
						$("#columnRuleStyleInput").removeClass("z-index");
						introjs.refresh();
						dynamicSteps("#columnRuleStyle", "userEntercolumnRuleStyle");
						setTimeoutFunction();
					});
				});
				break;
			case'reflectingRuleStyleEnterByUser':
				var value = $("#columnRuleStyleInput").val();
				var count = value.substring(value.indexOf(" ") + 1, value.lastIndexOf(";"));
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#columnRuleStyleInput").addClass("z-index");
					transferEffect("#columnRuleStyleInput", "#browserText", function() {
						$("#browserText").css({"column-rule-style": count});
						$("#columnRuleStyleInput").removeClass("z-index");
						introjs.refresh();
						dynamicSteps("#columnRuleWidth", "entercolumnRuleWidth");
						setTimeoutFunction();
					});
				});
				break;
			case'reflectingRuleWidth':
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#columnRuleWidthInput").addClass("z-index");
					transferEffect("#columnRuleWidthInput", "#browserText", function() {
						$("#browserText").css({"column-rule-width": "1px"});
						$("#columnRuleWidthInput").removeClass("z-index");
						introjs.refresh();
						dynamicSteps("#columnRuleWidth", "userEntercolumnRuleWidth");
						setTimeoutFunction();
					});
				});
				break;
			case 'reflectingRuleWidthEnterByUser':
				var value = $("#columnRuleWidthInput").val();
				var count = value.substring(value.indexOf(" ") + 1, value.lastIndexOf(";"));
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#columnRuleWidthInput").addClass("z-index");
					transferEffect("#columnRuleWidthInput", "#browserText", function() {
						$("#browserText").css({"column-rule-width": count});
						$("#columnRuleWidthInput").removeClass("z-index");
						introjs.refresh();
						dynamicSteps("#columnRuleColor", "entercolumnRuleColor");
						setTimeoutFunction();
					});
				});
				break;
			case'reflectingRuleColor':
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#columnRuleColorInput").addClass("z-index");
					transferEffect("#columnRuleColorInput", "#browserText", function() {
						$("#browserText").css({"-moz-column-rule-color": "red"});
						$("#columnRuleColorInput").removeClass("z-index");
						introjs.refresh();
						dynamicSteps("#columnRuleColor", "userEntercolumnRuleColor");
						setTimeoutFunction();
					});
				});
				break;
			case 'reflectingRuleColorEnterByUser':
				var value = $("#columnRuleColorInput").val();
				var count = value.substring(value.indexOf(" ") + 1, value.lastIndexOf(";"));
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#columnRuleColorInput").addClass("z-index");
					transferEffect("#columnRuleColorInput", "#browserText", function() {
						$("#browserText").css({"-moz-column-rule-color": count});
						$("#columnRuleColorInput").removeClass("z-index");
						introjs.refresh();
						dynamicSteps("#columnRuleForAll");
						setTimeoutFunction();
					});
				});
				break;
			case'reflectingRuleForAll':
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#columnRuleForAllInput").addClass("z-index");
					transferEffect("#columnRuleForAllInput", "#browserText", function() {
						$("#browserText").css({"-moz-column-rule": "2px dashed green"});
						$("#columnRuleForAllInput").removeClass("z-index");
						introjs.refresh();
						setTimeoutFunction();
					});
				});
				break;
			}
			break;
		case 'restart':
			$(".introjs-tooltip").css("min-width", "-moz-max-content");
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#restart").fadeTo(1000, 1);
				$("#restart").removeClass("opacity00");
			});
			break;
		}
	});
	introjs.start();
}

function typing(typingId, text, typingInterval, cursorColor, typingCallbackFunction) {
	$(typingId).typewriting(text, {
		"typing_interval": typingInterval,
		"cursor_color": cursorColor
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof typingCallbackFunction === "function") {
			typingCallbackFunction();
		}
	});
}

function zoomingEffect(id, callBackFunction) {
	$(id).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(id).removeClass("animated zoomIn");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

//****dynamic steps*************
function dynamicSteps(stepName, animatedStep) {
	var options = {
			element :stepName,
			intro :'',
			tooltipClass : "",
			animateStep: animatedStep
	}
	introjs.insertOption(introjs._currentStep + 1, options);
}

function customIntroWithoutTyping(elementId) {
	validationWithoutTyping("#"+elementId,elementId+"Input");
}

function validationWithoutTyping(selector1,selector2) {
	var textInput = $(selector1).text();
	var w = $(selector1).width();
	var l = textInput.length;
		$(selector1).empty().removeClass('opacity00');
		$(selector1).append('<input id="'+selector2+'" style="width: '+ (w + 3) +'px;" maxlength='+ (l + 3) +'>');
		keyCodeCondition("#"+selector2,textInput);
}


function customIntro(elementId) {
	$(".introjs-nextbutton").hide();
	$('.introjs-helperLayer').one('transitionend', function() {
		validation("#"+elementId,elementId+"Input");
	});
}

function validation(selector1,selector2) {
	var textInput = $(selector1).text();
	var w = $(selector1).width();
	var l = textInput.length;
	var text = "Enter <span class='ct-code-b-yellow'>"+$(selector1).html()+ "</span>";
	typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
		$(selector1).empty().removeClass('opacity00');
		$(selector1).append('<input id="'+selector2+'" style="width: '+ (w + 3) +'px;" maxlength='+ (l + 3) +'>');
		keyCodeCondition("#"+selector2,textInput);
	}); 
}

function keyCodeCondition(id, tag) {
	$(id).focus();
	$(id).off("paste");
	/* $(id).on("paste",function(e) { 
		e.preventDefault();
	}); */
	$(id).on("keydown", function(e) {
		$('.error-text').remove();
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 37, 39, 13]) !== -1) {
			return;
		}	
	});
	$(id).on("keyup", function(e) {
		$('.length-error-text').remove();
		if ($(id).val() == tag) {
			$(".length-error-text").remove();
			$(id).attr({disabled : "disabled"});
			$(".introjs-nextbutton").show();
		} else {
			$(".introjs-nextbutton").hide();
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br><b> Please enter above text properly.</b></span>");
		}
	});
}

function setTimeoutFunction() {
	setTimeout(function() {
		introjs.nextStep();
	},1500);
}

function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 2000 , function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
	
}
</script>
</html>