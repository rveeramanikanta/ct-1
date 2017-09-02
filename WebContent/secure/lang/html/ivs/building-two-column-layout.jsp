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
<title>Building two column layout</title>

<style type="text/css">
.border {
	border: 1px solid;
}

.browser-demo {
	border: 1px solid;
	font-size: 12px;
	padding: 0;
}

pre {
	-moz-tab-size: 3;
	tab-size: 3;
	font-size: 11px;
	/* height: auto;
	max-height: 200px;
	overflow: auto;
	background-color: #eeeeee;
	word-break: normal !important;
	word-wrap: normal !important;
	white-space: pre !important; */
}

.margin-top-1 { 
	margin-top: 1%;
}

.margin-top-3 { 
	margin-top: 3%;
}

.z-index {
	z-index: 9999999;
	background-color: white;
	padding: 2px;
	position: relative;
}

h1 {
	margin: 0;
}

.user-btn {
	background: green;
}

input {
	background-color: transparent;
	border: medium none;
}

.ct-code-b-red {
	color: red;
}

.ui-effects-transfer {
	border: 1px solid green;
	z-index: 9999999 !important;
}

a {
	/* color: #337ab7; */
	text-decoration: underline;
}

</style>
</head>
<body>
<div class="col-xs-12">
	<div class="text-center margin-top-1">
		<h3 class='label ct-demo-heading' id="heading">
			<span>Two Column Layout</span>
		</h3>
	</div>
	<div class="col-xs-12 margin-top-3">
		<div class="col-xs-6">
<pre class="opacity00" id="preCode">
<span id='docType' class="">&lt;!DOCTYPE html&gt;</span>
<span class="" id="openHtml">&lt;html&gt;</span>
	<span class="" id="openHead">&lt;head&gt;</span>
		<span class="" id="openTitle">&lt;title&gt;</span><span class="" id="titleText">Building two column layout</span><span class="" id="closedTitle">&lt;/title&gt;</span>
		<span class="" id="openStyle">&lt;style&gt;</span>
		<span class="" id="closeStyle">&lt;/style&gt;</span>
	<span class="" id="closedHead">&lt;/head&gt;</span>
	<span class="" id="openBody">&lt;body&gt;</span>
	&lt;div id='total'&gt;
		&lt;div id="header"&gt;
			&lt;h1&gt;Document Heading&lt;/h1&gt;
		&lt;/div&gt;
		&lt;div id="nav"&gt;
			&lt;ul&gt;
				&lt;li&gt;&lt;a href="#"&gt;Option 1&lt;/a&gt;&lt;/li&gt;
				&lt;li&gt;&lt;a href="#"&gt;Option 2&lt;/a&gt;&lt;/li&gt;
			&lt;/ul&gt;
		&lt;/div&gt;
		&lt;div id="main"&gt;
			&lt;h2&gt;Column 1&lt;/h2&gt;
			&lt;p&gt;HTML (Hypertext Markup Language) is the set of markup symbols or codes
			inserted in a file intended for display  on a World Wide Web browser page.&lt;/p&gt;
		&lt;/div&gt;
		&lt;div id="sidebar"&gt;
			&lt;h2&gt;Column 2&lt;/h2&gt;
			&lt;p&gt;HTML (Hypertext Markup Language) is the set of markup symbols or codes
			inserted in a file intended for display on a World Wide Web browser page.&lt;/p&gt;
			&lt;ul&gt;
				&lt;li&gt;&lt;a href="#"&gt;Link 1&lt;/a&gt;&lt;/li&gt;
				&lt;li&gt;&lt;a href="#"&gt;Link 2&lt;/a&gt;&lt;/li&gt;
			&lt;/ul&gt;
		&lt;/div&gt;
		&lt;div id="footer"&gt;
			&lt;p&gt;Footer&lt;/p&gt;
		&lt;/div&gt;
	&lt;/div&gt;
	<span class="" id="closedBody">&lt;/body&gt;</span>
<span class="" id="closedHtml">&lt;/html&gt;</span>
</pre>
		</div>
		<div class="col-xs-6">
			<div id="browser" class="col-xs-12 browser-demo opacity00">
			<img src="../images/building-two-column-layout-img.png" style="width: 100%;">
				<div id="browserContent">
					<div id="header" style="border-top: 1px solid;"><h1>Document Heading</h1></div>
					<div id="nav">
						<ul>
							<li><a href="#">Option 1</a></li>
							<li><a href="#">Option 2</a></li>
						</ul>
					</div>
					<div id="main">
						<h2>Column 1</h2>
						<p>HTML (Hypertext Markup Language) is the set of markup symbols or codes inserted in a file intended for display 
							on a World Wide Web browser page.</p>
					</div>
					<div id="sidebar">
						<h2>Column 2</h2>
						<p>HTML (Hypertext Markup Language) is the set of markup symbols or codes inserted in a file intended for display 
							on a World Wide Web browser page. </p>
						<ul>
							<li><a href="#">Link 1</a></li>
							<li><a href="#">Link 2</a></li>
						</ul>
					</div>
					<div id="footer">
						<p>Footer</p>
					</div>
				</div>
			</div>
		</div>
		<div class="text-center" id="restartDiv">
		<a class="btn btn-warning opacity00" id="restart" style="text-decoration: none; margin-top: 6%;"><i class="fa fa-refresh"></i>&nbsp;Restart</a>
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
			element : '#preCode',
			intro : ''
		}, {
			element : '#browser',
			intro : '',
			animateStep : 'zoomingEffect'
		}, {
			element : '#browser',
			intro : '',
			tooltipClass : 'hide',
			animateStep : 'bgmTotalInBrowser'
		}, {
			element : '#browser',
			intro : '',
			tooltipClass : 'hide',
			animateStep : 'bgmForHeaderInBrowser'
		}, {
			element : '#browser',
			intro : '',
			tooltipClass : 'hide',
			animateStep : 'bgmForNavInBrowser' 
		}, {
			element : '#browser',
			intro : '',
			tooltipClass : 'hide',
			animateStep : 'displayForNavInBrowser'
		}, {
			element : '#browser',
			intro : '',
			tooltipClass : 'hide',
			animateStep : 'paddingForNavInBrowser'
		}, {
			element : '#browser',
			intro : '',
			tooltipClass : 'hide',
			animateStep : 'bgmMainInBrowser'
		}, {
			element : '#browser',
			intro : '',
			tooltipClass : 'hide',
			animateStep : 'widthMainInBrowser'
		}, {
			element : '#browser',
			intro : '',
			tooltipClass : 'hide',
			animateStep : 'floatMainInBrowser'
		}, {
			element : '#browser',
			intro : '',
			tooltipClass : 'hide',
			animateStep : 'paddingMainInBrowser'
		}, {
			element : '#browser',
			intro : '',
			tooltipClass : 'hide',
			animateStep : 'bgmSidebarInBrowser'
		}, {
			element : '#browser',
			intro : '',
			tooltipClass : 'hide',
			animateStep : 'widthSidebarInBrowser'
		}, {
			element : '#browser',
			intro : '',
			tooltipClass : 'hide',
			animateStep : 'floatSidebarInBrowser'
		}, {
			element : '#browser',
			intro : '',
			tooltipClass : 'hide',
			animateStep : 'paddingSidebarInBrowser'
		}, {
			element : '#browser',
			intro : '',
			tooltipClass : 'hide',
			animateStep : 'clearFooterInBrowser'
		}, {
			element : '#browser',
			intro : '',
			tooltipClass : 'hide',
			animateStep : 'bgmFooterInBrowser'
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
		case'preCode':
			var text = "Let us consider a basic html page."
			typing('.introjs-tooltiptext', text, typingInterval, function() {
				TweenMax.to($("#preCode"), 1, {opacity: 1, onComplete: function() {
					$("#browser").addClass("z-index");
					zoomingEffect($("#browser"), function() {
						$(".introjs-nextbutton").show();	
					});
				}});
			});
			break;
			
/**** browser case start here ****/			
		case 'browser':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'zoomingEffect':
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Now apply the different css properties to design a two column 	page layout.";
					typing('.introjs-tooltiptext', text, typingInterval, function() {
						$(".introjs-nextbutton").show();
						$("#openStyle").after("<br>\t\t<span id='selectorTotal' class='opacity00'>#total</span>");
						$("#selectorTotal").after("&nbsp;<span id='openBrace1' class='opacity00'>{</span>");
						$("#openBrace1").after("<br>\t\t\t<span id='bgmForTotalId' class='opacity00'>background: #99c;</span>");
						$("#bgmForTotalId").after("<br>\t\t<span id='closeBrace1' class='opacity00'>}</span>");
						$("#closeBrace1").after("<br>\t\t<span id='headerSelector' class='opacity00'>#header</span>");
						$("#headerSelector").after("&nbsp;<span id='openBrace2' class='opacity00'>{</span>");
						$("#openBrace2").after("<br>\t\t\t<span id='bgmForHeader' class='opacity00'>background: #ddd;</span>");
						$("#bgmForHeader").after("<br>\t\t<span id='closeBrace2' class='opacity00'>}</span>");
						dynamicSteps("#selectorTotal");
					});
				});
				break;
			case 'bgmTotalInBrowser':
				$('.introjs-helperLayer').one('transitionend', function() {
					transferEffect("#bgmForTotalIdInput", "#browserContent", function() {
						$("#browserContent").css({"background": "#99c", "margin-bottom": "-10px"});
						introjs.refresh();
						dynamicSteps("#headerSelector");
						setTimeoutFunction();
					});
				});
				break;
			case 'bgmForHeaderInBrowser':
				$('.introjs-helperLayer').one('transitionend', function() {
					transferEffect("#bgmForHeaderInput", "#header", function() {
						$("#header").css({"background": "#ddd"});
						setTimeoutFunction();
						dynamicSteps("#navSelector");
					});
				});
				break;
			case 'bgmForNavInBrowser':
				$('.introjs-helperLayer').one('transitionend', function() {
					transferEffect("#bgmForNavTagInput", "#nav", function() {
						$("#nav").css({"background": "#c99"});
						setTimeoutFunction();
						dynamicSteps("#navLiSelector");
					});
				});
				break;
			case 'displayForNavInBrowser':
				$('.introjs-helperLayer').one('transitionend', function() {
					transferEffect("#navLiDisplayInput", "#nav", function() {
						$("#nav > ul > li").css({"display": "inline"});
						introjs.refresh();
						setTimeoutFunction();
						dynamicSteps("#paddingForNavTag");
					});
				});
				break;
			case 'paddingForNavInBrowser':
				$('.introjs-helperLayer').one('transitionend', function() {
					transferEffect("#paddingForNavTagInput", "#nav", function() {
					//	$("#nav").css({"padding": "5px"});
						TweenMax.to($("#nav"), 1, {css: {padding: "5px"}});
						introjs.refresh();
						setTimeoutFunction();
						dynamicSteps("#mainSelector");
					});
				});
				break;
			case 'bgmMainInBrowser':
				$('.introjs-helperLayer').one('transitionend', function() {
					transferEffect("#bgmForMainInput", "#main", function() {
						$("#main").css({"background": "#9c9"});
						setTimeoutFunction();
						dynamicSteps("#widthForMain");
					});
				});
				break;
			case 'widthMainInBrowser':
				$('.introjs-helperLayer').one('transitionend', function() {
					transferEffect("#widthForMainInput", "#main", function() {
					//	$("#main").css({"width": "390px"});
						TweenMax.to($("#main"), 1, {css: {width: "390px"}});
						introjs.refresh();
						setTimeoutFunction();
						dynamicSteps("#floatForMain");
					});
				});
				break;
			case 'floatMainInBrowser':
				$('.introjs-helperLayer').one('transitionend', function() {
					transferEffect("#floatForMainInput", "#main", function() {
						$("#main").css({"float": "left"});
						introjs.refresh();
						setTimeoutFunction();
						dynamicSteps("#paddingForMain");
					});
				});
				break;
			case 'paddingMainInBrowser':
				$('.introjs-helperLayer').one('transitionend', function() {
					transferEffect("#paddingForMainInput", "#main", function() {
					//	$("#main").css({"padding": "10px"});
						TweenMax.to($("#main"), 1, {css: {padding: "10px"}});
						introjs.refresh();
						setTimeoutFunction();
						dynamicSteps("#sidebarSelector");
					});
				});
				break;
			case 'bgmSidebarInBrowser':
				$('.introjs-helperLayer').one('transitionend', function() {
					transferEffect("#bgmForSidebarInput", "#sidebar", function() {
						$("#sidebar").css({"background": "blueviolet"});
						setTimeoutFunction();
						dynamicSteps("#widthForSidebar");
					});
				});
				break;
			case 'widthSidebarInBrowser':
				$('.introjs-helperLayer').one('transitionend', function() {
					transferEffect("#widthForSidebarInput", "#sidebar", function() {
						$("#sidebar").css({"width": "225px"});
					//	TweenMax.to($("#sidebar"), 1, {css: {width: "225px"}});
						introjs.refresh();
						setTimeoutFunction();
						dynamicSteps("#floatForSidebar");
					});
				});
				break;
			case 'floatSidebarInBrowser':
				$('.introjs-helperLayer').one('transitionend', function() {
					transferEffect("#floatForSidebarInput", "#sidebar", function() {
						$("#sidebar").css({"float": "right"});
						introjs.refresh();
						setTimeoutFunction();
						dynamicSteps("#paddingForSidebar");
					});
				});
				break;
			case 'paddingSidebarInBrowser':
				$('.introjs-helperLayer').one('transitionend', function() {
					transferEffect("#paddingForSidebarInput", "#sidebar", function() {
					//	$("#sidebar").css({"padding": "10px"});
						TweenMax.to($("#sidebar"), 1, {css: {padding: "10px"}});
						introjs.refresh();
						setTimeoutFunction();
						dynamicSteps("#footerSelector");
					});
				});
				break;
			case 'clearFooterInBrowser':
				$('.introjs-helperLayer').one('transitionend', function() {
					transferEffect("#clearForFooterInput", "#footer", function() {
						$("#footer").css({"clear": "both"});
						introjs.refresh();
						setTimeoutFunction();
						dynamicSteps("#bgmForFooter");
					});
				});
				break;
			case 'bgmFooterInBrowser':
				$('.introjs-helperLayer').one('transitionend', function() {
					transferEffect("#bgmForFooterInput", "#footer", function() {
						$("#footer").css({"background": "skyblue"});
						setTimeoutFunction();
					});
				});
				break;
			}
			break;
/***** browser case ends here *****/ 		
		
	 case 'selectorTotal':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = "Here enter id selector total. i.e. <span class='ct-code-b-yellow'>#total</span>";
				typing('.introjs-tooltiptext', text, typingInterval, function() {
					customIntroWithoutTyping(elementId);
					dynamicSteps("#openBrace1");
				});
			});
			break;
		case 'openBrace1':
			customIntro(elementId);
			dynamicSteps("#closeBrace1");
			break;
		case 'bgmForTotalId':
			customIntro(elementId);
			break;
		case 'closeBrace1':
			customIntro(elementId);
			dynamicSteps("#bgmForTotalId");
			break;
		case 'headerSelector':
			customIntro(elementId);
			dynamicSteps("#openBrace2");
			break;
		case 'openBrace2':
			customIntro(elementId);
			dynamicSteps("#closeBrace2");
			break;
		case 'closeBrace2':
			customIntro(elementId);
			dynamicSteps("#bgmForHeader");
			break;
		case 'bgmForHeader':
			customIntro(elementId);
			$("#closeBrace2").after("<br>\t\t<span id='navSelector' class='opacity00'>#nav</span>");
			$("#navSelector").after("&nbsp;<span id='openBrace3' class='opacity00'>{</span>");
			$("#openBrace3").after("<br>\t\t\t<span id='bgmForNavTag' class='opacity00'>background: #c99;</span>");
			$("#bgmForNavTag").after("<br>\t\t\t<span id='paddingForNavTag' class='opacity00'>padding: 5px;</span>");
			$("#paddingForNavTag").after("<br>\t\t<span id='closeBrace3' class='opacity00'>}</span>");
			$("#closeBrace3").after("<br>\t\t<span id='navLiSelector' class='opacity00'>#nav li</span>");
			$("#navLiSelector").after("&nbsp;<span id='openBrace4' class='opacity00'>{</span>");
			$("#openBrace4").after("<br>\t\t\t<span id='navLiDisplay' class='opacity00'>display: inline;</span>");
			$("#navLiDisplay").after("<br>\t\t<span id='closeBrace4' class='opacity00'>}</span>");
			break;
		case 'navSelector':
			customIntro(elementId);
			dynamicSteps("#openBrace3");
			break;
		case 'openBrace3':
			customIntro(elementId);
			dynamicSteps("#closeBrace3");
			break;
		case 'closeBrace3':
			customIntro(elementId);
			dynamicSteps("#bgmForNavTag");
			break;
		case 'bgmForNavTag':
			customIntro(elementId);
			break;
		case 'paddingForNavTag':
			customIntro(elementId);
			break;
		case 'navLiSelector':
			customIntro(elementId);
			dynamicSteps("#openBrace4");
			break;
		case 'openBrace4':
			customIntro(elementId);
			dynamicSteps("#closeBrace4");
			break;
		case 'closeBrace4':
			customIntro(elementId);
			dynamicSteps("#navLiDisplay");
			break;
		case 'navLiDisplay':
			customIntro(elementId);
			$("#closeBrace4").after("<br>\t\t<span id='mainSelector' class='opacity00'>#main</span>");
			$("#mainSelector").after("&nbsp;<span id='openBrace5' class='opacity00'>{</span>");
			$("#openBrace5").after("<br>\t\t\t<span id='bgmForMain' class='opacity00'>background: #9c9;</span>");
			$("#bgmForMain").after("<br>\t\t\t<span id='widthForMain' class='opacity00'>width: 390px;</span>");
			$("#widthForMain").after("<br>\t\t\t<span id='floatForMain' class='opacity00'>float: left;</span>");
			$("#floatForMain").after("<br>\t\t\t<span id='paddingForMain' class='opacity00'>padding: 10px;</span>");
			$("#paddingForMain").after("<br>\t\t<span id='closeBrace5' class='opacity00'>}</span>");
			break;
		case 'mainSelector':
			customIntro(elementId);
			dynamicSteps("#openBrace5");
			break;
		case 'openBrace5':
			customIntro(elementId);
			dynamicSteps("#closeBrace5");
			break;
		case 'closeBrace5':
			customIntro(elementId);
			dynamicSteps("#bgmForMain");
			break;
		case 'bgmForMain':
			customIntro(elementId);
			break;
		case 'widthForMain':
			customIntro(elementId);
			break;
		case 'floatForMain':
			customIntro(elementId);
			break;
		case 'paddingForMain':
			customIntro(elementId);
			$("#closeBrace5").after("<br>\t\t<span id='sidebarSelector' class='opacity00'>#sidebar</span>");
			$("#sidebarSelector").after("&nbsp;<span id='openBrace6' class='opacity00'>{</span>");
			$("#openBrace6").after("<br>\t\t\t<span id='bgmForSidebar' class='opacity00'>background: blueviolet;</span>");
			$("#bgmForSidebar").after("<br>\t\t\t<span id='widthForSidebar' class='opacity00'>width: 225px;</span>");
			$("#widthForSidebar").after("<br>\t\t\t<span id='floatForSidebar' class='opacity00'>float: right;</span>");
			$("#floatForSidebar").after("<br>\t\t\t<span id='paddingForSidebar' class='opacity00'>padding: 10px;</span>");
			$("#paddingForSidebar").after("<br>\t\t<span id='closeBrace6' class='opacity00'>}</span>");
			break;
		case 'sidebarSelector':
			customIntro(elementId);
			dynamicSteps("#openBrace6");
			break;
		case 'openBrace6':
			customIntro(elementId);
			dynamicSteps("#closeBrace6");
			break;
		case 'closeBrace6':
			customIntro(elementId);
			dynamicSteps("#bgmForSidebar");
			break;
		case 'bgmForSidebar':
			customIntro(elementId);
			break;
		case 'widthForSidebar':
			customIntro(elementId);
			break;
		case 'floatForSidebar':
			customIntro(elementId);
			break;
		case 'paddingForSidebar':
			customIntro(elementId);
			$("#closeBrace6").after("<br>\t\t<span id='footerSelector' class='opacity00'>#footer</span>");
			$("#footerSelector").after("&nbsp;<span id='openBrace7' class='opacity00'>{</span>");
			$("#openBrace7").after("<br>\t\t\t<span id='clearForFooter' class='opacity00'>clear: both;</span>");
			$("#clearForFooter").after("<br>\t\t\t<span id='bgmForFooter' class='opacity00'>background: skyblue;</span>");
			$("#bgmForFooter").after("<br>\t\t<span id='closeBrace7' class='opacity00'>}</span>");
			break;
		case 'footerSelector':
			customIntro(elementId);
			dynamicSteps("#openBrace7");
			break;
		case 'openBrace7':
			customIntro(elementId);
			dynamicSteps("#closeBrace7");
			break;
		case 'closeBrace7':
			customIntro(elementId);
			dynamicSteps("#clearForFooter");
			break;
		case 'clearForFooter':
			customIntro(elementId);
			break;
		case 'bgmForFooter':
			customIntro(elementId);
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

function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).addClass("z-index");
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 2000 , function() {
		$(selector1).removeClass("z-index");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
	
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
	typing('.introjs-tooltiptext', text, typingInterval, function() {
		$(selector1).empty().removeClass('opacity00'); 
		$(selector1).append('<input id="'+selector2+'" style="width: '+ (w + 3) +'px;" maxlength='+ (l + 3) +'>');
		keyCodeCondition("#"+selector2,textInput);
	}); 
}

function keyCodeCondition(id, tag) {
	$(id).focus();
	$(id).off("paste");
	$(id).on("paste",function(e) { 
		e.preventDefault();
	});
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
</script>
</html>