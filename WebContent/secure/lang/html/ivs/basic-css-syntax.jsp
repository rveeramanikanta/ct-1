<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC>
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
<title>CSS Basic Syntax</title>

<style type="text/css">
.margin-top-1 {
	margin-top: 1%;
}

.margin-top-3 {
	margin-top: 3%;
}

.margin-top-5 {
	margin-top: 5%;
}

pre {
	-moz-tab-size: 4;
	tab-size: 4;
	font-weight: 12px;
}

/** browser css starts here **/
.container {
	padding: 0px;
	/* margin-top: 30px; */
	border: 2px solid grey;
}

.active {
	display: flex;
	align-items: center;
}

#browser {
	margin-top: 3px;
	padding-bottom: 6px;
	border: 1px solid gray;
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
	/* border: 1px solid gray; */
	background: white;
}

/** browser css ends here **/

.margin-top5 {
	margin-top: 5px;
}

.z-index {
	z-index: 9999999;
	position: relative;
	background-color: white;
	padding: 4px;
	border-radius: 4px;
}

.dynamic-input {
	background-color: transparent;
	border: medium none;
}

.ui-effects-transfer {
	border: 1px solid green;
	z-index: 9999999 !important;
}

.ct-code-b-red {
	color: red;
}

.user-btn {
	background-color: green;
}

.blinking {
	animation-name: blink;
	animation-duration: 0.8s;
	animation-iteration-count: infinite;
}

@keyframes blink {
	50% {
		background: #9fbff2;
	}
}

.position {
	position: relative;
	display: inline-block;
}

.style-border {
	border: 2px solid white;
	border-radius: 12px;
	/* font-family: monospace; */
}

.style-border-transparent {
	border: 2px solid transparent;
	border-radius: 12px;
	/* font-family: monospace; */
}

.curlyBraces {
	padding: 6px;
}

.svg-css {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
}

.svg-line {
	display: none;
	/* marker-end: url("arrowEnd"); */	
	position: relative;
	stroke: gray;
	stroke-width: 2;  
}

#syntaxId {
	border: 2px solid gray;
	border-radius: 8px;
	font-size: 16px;
	/* background: lightyellow; */
	/* font-weight: bold; */
}

.z-index1000000 {
	position: relative;
	background-color: white;
	z-index: 1000000 !important;
}

input {
	outline: none;
}
</style>
</head>
<body>
<div class="col-xs-12">
	<div class="text-center margin-top-1">
		<h3 class='label ct-demo-heading' id="heading">
			<span>CSS Basic Syntax</span>
		</h3>
	</div>
	<div class="col-xs-12 margin-top-3" id="syntaxDiv">
		<div class="col-xs-offset-3 col-xs-5" id="syntaxId">
			<div class="col-xs-12" style="margin-top: 5px;">
				<div id="" class="col-xs-7 col-xs-offset-4">
					<div class="col-xs-4 position opacity00 style-border-transparent text-center padding00" id="propertyId">Property</div>
					<div class="col-xs-4 col-xs-offset-1 position opacity00 style-border-transparent text-center" id="valueId">Value</div>
				</div>
			</div>
			<div class="col-xs-12" id="singleStyle" style="margin-top: 15px;"> 
				<div class="col-xs-2  position opacity00 style-border-transparent padding00" id="selector">Selector</div>
				<div id="pTag" class="position col-xs-1 col-xs-offset-1 style-border">p</div> 
				<div id="equal" class="col-xs-1 padding00"><span class="curlyBraces style-border">{</span></div>
			</div>
			<div class="col-xs-12"  style="margin-top: 2px;">
				<div id="declarationBlock" class="col-xs-7 col-xs-offset-4">
					<div id="colorProperty" class="col-xs-4 style-border text-center">color</div> 
					<div id="colornColor" class="col-xs-1 style-border padding00 text-center">:</div> 
					<div id="stylevalue" class="col-xs-4 style-border text-center">blue</div> 
					<div class="col-xs-1 padding00 style-border text-center" id="semicolon">;</div>
				</div>
			</div>
			<div class="col-xs-12 margin-top-1" style="margin-bottom: 3%;">
				<div class="col-xs-offset-4 col-xs-1 padding00"><span class="curlyBraces style-border">}</span></div>
			</div>
		</div>
	</div>
	<div class="col-xs-12 margin-top-5">
		<div class="col-xs-5 ">
<pre id="preCode" class="opacity00">
<span id="doctype" class="opacity00">&lt;!DOCTYPE html&gt;</span>
<span id="openHtml" class="opacity00">&lt;html&gt;</span>
	<span id="openHead" class="opacity00">&lt;head&gt;</span>
		<span id="title" class="opacity00">&lt;title&gt;CSS Syntax&lt;/title&gt;</span>
		<span id="openStyle" class="opacity00">&lt;style&gt;</span>
		<span id="closeStyle" class="opacity00">&lt;/style&gt;</span>
	<span id="closeHead" class="opacity00">&lt;/head&gt;</span>
	<span id="openBody" class="opacity00">&lt;body&gt;</span>
	<span id="spanTagLine" class="opacity00">&lt;span&gt;Lets see how the output looks without style&lt;/span&gt;</span>
	<span id="pTagLine" class="opacity00">&lt;p&gt;Lets see how the output looks with style&lt;/p&gt;</span>
	<span id="closeBody" class="opacity00">&lt;/body&gt;</span>
<span id="closeHtml" class="opacity00">&lt;/html&gt;</span>
</pre>
	
		</div>
		<div class='container col-xs-6 col-xs-offset-1 opacity00 z-index' id="browserDiv">
			<div class='tab-container'>
				<ul class="tabs clearfix" >
					<li class="active">
						<div class="col-xs-12">CSS Syntax</div>
						<i class="col-xs-2 fa fa-times fa-sm padding00"></i>
					</li>
				</ul>
				<span id ="plus"><i class="fa fa-plus"></i></span>
			</div>
			<div id='browser' class='col-xs-12 padding00'>
				<div class='col-xs-2 padding00 text-center'>
					<span id='arrowCircle' class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-left arrow"></i></span>
					<span  class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-right arrow"></i></span>
					<span  class='col-xs-4 padding00 margin-top5'><i class="fa fa-rotate-right fa-1x"></i></span>
				</div>
				<div class='col-xs-5 padding00 text-center url'>
					<input type="text" maxlength="100" class="usr-text" class="padding00" disabled="disabled"
					placeholder='http://www.codetantra.com/WebDevelopment/'>
					<span class='col-xs-1 padding00'><i class="fa fa-star-o fa-1x"></i></span>
				</div>
				<div class='col-xs-3'>
					<div class='url'>
						<span class="col-xs-2 padding00 fa-display"><i class="fa fa-search fa-1x" style="padding: 4px;"></i></span>
						<span class="col-xs-10 padding00">
							<input type="text" maxlength="100" class="usr-text" placeholder='search' disabled="disabled">
						</span>
					</div>
				</div>
				<div class='col-xs-2 padding00 fa-display text-center'>	
					<span class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-down fa-1x" ></i></span>
					<span class='col-xs-4 padding00 margin-top5'><i class="fa fa-home fa-1x"></i></span>
					<span class='col-xs-4 padding00 margin-top5'><i  class="fa fa-bars fa-1x"></i></span>
				</div>
			</div>
			<div class ="col-xs-12 html-body" id ="htmlBody">
				<div class="margin-top-1">
					<span id="spanTagInBrowser" class="opacity00">Lets see how the output looks without style</span>
					<p id="pTagInBrowser" class="opacity00"> Lets see how the output looks with style</p>
				</div>
				
			</div>
		</div>
	</div>
	<div class="col-xs-12">
		<div class="text-center margin-top-2" id="restartDiv">
			<a class="btn btn-warning opacity00" id="restart"><i class="fa fa-refresh"></i>&nbsp;Restart</a>
		</div>
	</div>
</div>

</body>
<script type="text/javascript">
var typingInterval = 10;
$(document).ready(function() {
	introGuide();
	//$("body").attr({ondragstart :"return false"});   /* ondragstart: fires when the user starts to drag an element */
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
			element : '#syntaxId',
			intro : '',
			animateStep : 'introduction'
		}, {
			element : '#pTag',
			intro : '',
		}, {
			element : '#declarationBlock',
			intro : ''
		}, {
			element : '#syntaxId',
			intro : '',
			animateStep : 'explanation',
			tooltipClass : 'hide'
		}, {
			element : '#preCode',
			intro : ''
		}, {
			element : '#spanTagLine',
			intro : ''
		}, {
			element : '#browserDiv',
			intro : '',
			animateStep : 'firstStep',
			tooltipClass : 'hide'
		}, {
			element : '#pTagLine',
			intro : '',
			animateStep : 'opacityRemove',
			tooltipClass : 'hide'
		}, {
			element : '#browserDiv',
			intro : '',
			animateStep : 'secondStep',
			tooltipClass : 'hide'
		}, {
			element : '#pTagLine',
			intro : '',
			animateStep : 'cssApplyExplaination',
		}, {
			element : '#openStyle',
			intro : ''
		}, {
			element : '#closeStyle',
			intro : ''
		}, {
			element : '#browserDiv',
			intro : '',
			animateStep : 'colorApplying',
			tooltipClass : 'hide'
		}, {
			element : '#browserDiv',
			intro : '',
			animateStep : 'fontWeightInAction',
			tooltipClass : 'hide'
		}, {
			element :'#restart',
			intro : "Click to restart.",
			position : 'right',
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
		var elementId = targetElement.id;
		switch(elementId) {
		case 'pTag':
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is <span class='ct-code-b-yellow'>selector Block</span>.";
				typing('.introjs-tooltiptext', text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'declarationBlock':
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is <span class='ct-code-b-yellow'>declaration Block</span>.";
				typing('.introjs-tooltiptext', text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'syntaxId':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'introduction':
				var text = "Let us consider a basic syntax of an CSS is made of a <span class='ct-code-b-yellow'>selector block</span> and a "+
					"<span class='ct-code-b-yellow'>declaration block</span>.";
				typing('.introjs-tooltiptext', text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				break;
			case 'explanation':
				$(".introjs-helperLayer").one("transitionend", function() {
					TweenMax.to("#pTag", 1, {borderColor: "gray", onComplete:function() {
						$("#pTag").addClass("blinking");
						svgAppend("#syntaxId", "svg");
						svgMarkerAppend("#svg", "arrow1");
						svgAnimatingLineSelector1LeftSideToSelector2RightSide("#syntaxId", "#pTag", "#selector", "#svg", "line1", "arrow1", function() {
							TweenMax.to("#selector", 1, {opacity: 1, color: 'green', onComplete:function() {
								$('.introjs-tooltip').removeClass('hide');
								var text = "Here <span class='ct-code-b-yellow'>p</span> is a <span class='ct-code-b-yellow'>selector</span>.";
								typing('.introjs-tooltiptext', text, typingInterval, function() {
									nextButtonFucntion(function() {
										$("#pTag").removeClass("blinking");
										$('.introjs-tooltip').addClass('hide');
										TweenMax.to("#colorProperty", 1, {borderColor: "gray", onComplete:function() {
											$("#colorProperty").addClass("blinking");
											svgAppend("#syntaxId", "svg");
											svgMarkerAppend("#svg", "arrow2");
											svgAnimatingTopToBottomLine("#syntaxId", "#colorProperty", "#propertyId", "#svg", "line2", "arrow2", function() {
												TweenMax.to("#propertyId", 1, {opacity: 1, color: 'purple', onComplete:function() {
													$('.introjs-tooltip').removeClass('hide');
													var text = "Here <span class='ct-code-b-yellow'>color</span> is <span class='ct-code-b-yellow'>property</span>.";
													typing('.introjs-tooltiptext', text, typingInterval, function() {
														nextButtonFucntion(function() {
															$("#colorProperty").removeClass("blinking");
															$('.introjs-tooltip').addClass('hide');
															TweenMax.to("#stylevalue", 1, {borderColor: "gray", onComplete:function() {
																$("#stylevalue").addClass("blinking");
																svgAppend("#syntaxId", "svg");
																svgMarkerAppend("#svg", "arrow3");
																svgAnimatingTopToBottomLine("#syntaxId", "#stylevalue", "#valueId", "#svg", "line3", "arrow3", function() {
																	TweenMax.to("#valueId", 1, {opacity: 1, color: 'blue', onComplete:function() {
																		$('.introjs-tooltip').removeClass('hide');
																		var text = "Here <span class='ct-code-b-yellow'>blue</span> is "+
																		"<span class='ct-code-b-yellow'>value</span>.";
																		typing('.introjs-tooltiptext', text, typingInterval, function() {
																			nextButtonFucntion(function() {
																				$("#stylevalue").removeClass("blinking");
																				explainColon();
																			});
																		});
																	}});
																});
															}});
														});
													});
												}});
											});
										}});
									});
								});
							}});
						});
					}});
				});
				break;
				}
			break;
		
		case'preCode':
			$(".curlyBraces").removeClass("blinking");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#preCode").removeClass("opacity00");
				var text = "Now lets use in our html document."
				typing('.introjs-tooltiptext', text, typingInterval, function() {
					TweenMax.to($("#preCode"), 1, {opacity: 1, onComplete: function() {
						TweenMax.to($("#doctype"), 1, {opacity: 1});
						$("#doctype").effect( "highlight", {color:"blue"}, 600, function() {
							TweenMax.to($("#openHtml, #closeHtml"), 1, {opacity: 1});
							$("#openHtml").effect( "highlight", {color:"blue"}, 600);
							$("#closeHtml").effect( "highlight", {color:"blue"}, 600, function() {
								TweenMax.to($("#openHead, #closeHead"), 1, {opacity: 1});
								$("#openHead").effect( "highlight", {color:"blue"}, 600);
									$("#closeHead").effect( "highlight", {color:"blue"}, 600, function() {
										TweenMax.to($("#openBody, #closeBody"), 1, {opacity: 1});
										$("#openBody").effect( "highlight", {color:"blue"}, 600);
										$("#closeBody").effect( "highlight", {color:"blue"}, 600, function() {
									TweenMax.to($("#title"), 1, {opacity: 1, onComplete: function() {
											zoomingEffect("#browserDiv", function() {
												$(".introjs-nextbutton").show();
											});
										}});
									});
								});
							});
						});
					}});
				});
			});
			break;
		case 'spanTagLine':
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Now consider a <span class='ct-colr-b-yellow'>span</span> tag line without style attribute.";
				typing('.introjs-tooltiptext', text, typingInterval, function() {
					$(".introjs-nextbutton").show();
					$("#spanTagLine").removeClass("opacity00");
				});
			});
			break;
		case 'pTagLine':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'opacityRemove':
				$(".introjs-helperLayer").one("transitionend", function() {
					TweenMax.to($("#pTagLine"), 1, {opacity: 1, onComplete: function() {
						setTimeoutFunction();
					}});
				});
				break;
			case 'cssApplyExplaination':
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Now apply style attribute to the <span class='ct-colr-b-yellow'>p</span> tag.";
					typing('.introjs-tooltiptext', text, typingInterval, function() {
						$(".introjs-nextbutton").show();
					});
				});
				break;
			}
			break;
		case 'openStyle':
			customIntro(elementId);
			$("#openStyle").after("<br>\t\t\t<span class='opacity00' id='pId'>p</span> <span class='opacity00' id='openBrace1'>{</span>");
			$("#openBrace1").after("<br>\t\t\t\t<span class='opacity00' id='cssColor'>color: blue;</span>");
			$("#cssColor").after("<br>\t\t\t<span class='opacity00' id='closeBrace1'>}</span>");
			break;
		case 'closeStyle':
			customIntro(elementId);
			dynamicSteps("#pId");
			break;
		case 'pId':
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
			customIntro(elementId);
			break;
		case 'cssFontWeight':
			customIntro(elementId);
			break;
			
		case 'browserDiv':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'firstStep':
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#browser").removeClass("visibility-hidden").show();
					transferEffect("#spanTagLine", "#spanTagInBrowser", function() {
						setTimeoutFunction();
					});
				});
				break;
			case 'secondStep':
				$('.introjs-helperLayer').one('transitionend', function() {
					transferEffect("#pTagLine", "#pTagInBrowser", function() {
						setTimeoutFunction();
					});
				});
				break;
			case 'colorApplying':
				$('.introjs-helperLayer').one('transitionend', function() {
					transferEffect("#cssColor", "#pTagInBrowser", function() {
						TweenMax.to($("#pTagInBrowser"), 1, {css:{color: "blue"}, onComplete: function() {
							setTimeoutFunction();
						}});
					});
				});
				$("#cssColor").after("<br>\t\t\t\t<span class='opacity00' id='cssFontWeight'>font-weight: bold;</span>");
				dynamicSteps("#cssFontWeight");
				break;
			case 'fontWeightInAction':
				$('.introjs-helperLayer').one('transitionend', function() {
					transferEffect("#cssFontWeight", "#pTagInBrowser", function() {
						TweenMax.to($("#pTagInBrowser"), 1, {css:{fontWeight: "bold"}, onComplete: function() {
							setTimeoutFunction();
						}});
					});
				});
				break;
			}
			break;
		case 'restart':
			$(".introjs-tooltip").css("min-width", "-moz-max-content");
			$(".introjs-tooltip").css("min-width", "max-content");
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#restart").fadeTo(1000, 1);
				$("#restart").removeClass("opacity00");
			});
			break;
		}
	});
	introjs.start();
}

function explainColon() {
	$('.introjs-tooltip').addClass('hide');
	$(".user-btn").remove();
	$("#colornColor").addClass("blinking");
	$('.introjs-tooltip').removeClass('hide');
	text = 'A property and value is known as a <span class="ct-code-b-yellow">declaration</span>. The <span class="ct-code-b-yellow">Property</span> '+
		'and <span class="ct-code-b-yellow">value</span> are separated by <span class="ct-code-b-yellow">:</span>(colon).';
	typing('.introjs-tooltiptext', text, typingInterval, function() {
		$('.introjs-tooltipbuttons').append("<a class='introjs-button user-btn' " +
		"onclick=semicolon()>Next &#8594;</a>");
	});
}

//***********Explain semicolon**********
function semicolon() {
	$('.introjs-tooltip').addClass('hide');
	$(".user-btn").remove();
	$("#colornColor").removeClass("blinking");
	$("#semicolon").addClass("blinking");
	$('.introjs-tooltip').removeClass('hide');
	text = 'The declaration is always ends with a <span class="ct-code-b-yellow">;</span> semicolon.';
	typing('.introjs-tooltiptext', text, typingInterval, function() {
		$('.introjs-tooltipbuttons').append("<a class='introjs-button user-btn' " +
		"onclick=curlyBraces()>Next &#8594;</a>");
	});
}

//*****curly braces blinking***********
function curlyBraces() {
	$('.introjs-tooltip').addClass('hide');
	$(".user-btn").remove();
	$("#semicolon").removeClass("blinking");
	$(".curlyBraces").addClass("blinking");
	setTimeout(function() {
		$('.introjs-tooltip').removeClass('hide');
		text = 'The css <span class="ct-code-b-yellow">property</span> and <span class="ct-code-b-yellow">Value</span> '+
				'always enclosed with <span class="ct-code-b-yellow">{ }</span>(curly braces).';
		typing('.introjs-tooltiptext', text, "20", function() {
			$(".introjs-nextbutton").show();
		});
	},1000);
}
function typing(typingId, text, typingInterval, typingCallbackFunction) {
	$(typingId).typewriting(text, {
		"typing_interval": typingInterval,
		"cursor_color": 'white'
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
	typing('.introjs-tooltiptext', text, typingInterval, function() {
		$(selector1).empty().removeClass('opacity00'); 
		$(selector1).append('<input id="'+selector2+'" class="dynamic-input" style="width: '+ (w + 3) +'px;" maxlength='+ (l + 3) +'>');
		keyCodeCondition("#"+selector2,textInput);
	}); 
}

function keyCodeCondition(id, tag) {
	$(id).focus();
	/* $(id).off("paste");
	$(id).on("paste",function(e) { 
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
		introjs.refresh();
		if ($(id).val() == tag || $(id).text() == tag) {
			$(".length-error-text").remove();
			$(id).attr({disabled : "disabled"});
			$(id).attr({contenteditable : "false"});
			$(".introjs-nextbutton").show();
		} else {
			$(".introjs-nextbutton").hide();
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br><b> Please enter above text properly.</b></span>");
		}
	});
}

//****dynamic steps*************
function dynamicSteps(stepName, animatedStep, tooltipClass) {
	var options = {
			element :stepName,
			intro :'',
			tooltipClass : tooltipClass,
			animateStep: animatedStep
	}
	introjs.insertOption(introjs._currentStep + 1, options);
}

function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).addClass("z-index");
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 2000 , function() {
		$(selector2).removeClass("opacity00");
		$(selector1).removeClass("z-index");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
	
}

function setTimeoutFunction() {
	setTimeout(function() {
		introjs.nextStep();
	},1500);
}

function nextButtonFucntion(callBackFunction) {
	$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
	$(".user-btn").click(function() {
		$(".user-btn").remove();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function svgAppend(selector, svgId) {
	var code = '<svg class="svg-css" id="' + svgId + '"></svg>';
	$(selector).append(code);
}

function svgMarkerAppend(svgId, svgMarkerId) {
	var marker = document.createElementNS("http://www.w3.org/2000/svg", 'marker');
	marker.setAttribute('id', svgMarkerId);
	marker.setAttribute('refX', '5');
	marker.setAttribute('refY', '2.5');
	marker.setAttribute('markerWidth', '5');
	marker.setAttribute('markerHeight', '5');
	marker.setAttribute('orient', 'auto');
	marker.style.fill = 'gray';
	$(svgId).append(marker);
	var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	path.setAttribute("d", "M0,0 L5,2.5 L0,5 Z");
	$('#' + svgMarkerId).append(path);
}

function svgLineAppend(svgId, svgLineId, svgMarkerId, x1, y1, x2, y2) {
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	line.setAttribute("id", svgLineId);
	line.setAttribute("class", "svg-line");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	line.style.markerEnd = 'url("#' + svgMarkerId + '")';
	$(svgId).append(line);
}

// from selector1 Right side to selector2 Left side
function svgAnimatingLineSelector1LeftSideToSelector2RightSide(parentSelector, selector1, selector2, svgId, svgLineId, svgMarkerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, svgMarkerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

//************ Line from selector1 Top to selecter2 Bottom ****************
function svgAnimatingTopToBottomLine(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	//*****OuterWidth: returns the width of an element (includes padding and border)******
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	//*****OuterHeight: returns the height of an element (includes padding and border)******
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight();
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

</script>
</html>