<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<title>Inline style</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css" >
<link rel="stylesheet" href="/css/introjs-ct.css" >
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/bootstrap.min.js"></script>

<style type="text/css">
pre {
	tab-size: 3;
	-moz-tab-size: 3;
}
.introjs-tooltiptext br {
	margin: 15px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.introjs-duplicate-nextbutton {
	background-color: green;
}

.introjs-duplicate {
	background-color: green;
	position: absolute;
}

[contenteditable="true"]:empty::before {
	color: #cbcbcb !important;
	content: attr(placeholder);
}

[contenteditable="true"] {
    outline: medium none;
}

.box-border {
	border-radius: 12px;
	border: 2px solid gray;
}

.style-border {
	border-radius: 12px;
	border: 2px solid transparent;
}

.buttons-div {
	margin-top: 20px;
	margin-bottom: 5px;
	text-align: center;
}

div,span{
	position: relative;
}

#singleStyle > div {
	padding: 6px;
	margin-bottom: 50px;
	margin-top: 35px;
}

.doubleQuotes, #semicolon {
    padding: 6px;
}

.margin-top {
    margin-top: 21px;
}

.padding00 {
	padding: 0px;
}

.position {
	position: relative;
	display: inline-block;
}

.z-index1000000 {
	position: relative;
	background-color: white;
	z-index: 1000000 !important;
}

.html-body {
	height: 160px;
	border: 1px solid gray;
	background: white;
}

.creamPreTab4 {
    margin: 8px;
    padding: 10px;
    font-size: 13px;
    white-space: pre;
	-moz-tab-size: 4;
    border-radius: 8px;
    background-color: #fffae6;
}

.image-custom {
    height: 60px;
    position: absolute;
 }

.image-custom1 {
    width: 100%;
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
	//marker-end: url("#arrowEnd");
	position: relative;
	stroke: gray;
	stroke-width: 2; 
}

.blinking {
	animation-name: blink;
	animation-duration: 1s;
	animation-iteration-count: infinite;
 }

@keyframes blink {
	50% {
		background:  #9fbff2;
	}
}

.ct-code-b-red {
	font-weight: bold;
	font-family: monospace;
	color: rgb(252, 66, 66);
}

.ui-effects-transfer {
    border: 1px solid blue;
    z-index: 99999999 !important;
  }
  
  
.container { /*Browser css  */
	padding: 0px;
	border: 2px solid grey;
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

ul.tabs > li.active{
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

.usr-text {
	border: medium none;
	font-family: Bitstream Vera Serif Bold,sans-serif;
	width: 100%;
}

.tab-container {
   	background: #0a0505 none repeat scroll 0 0;
}

.html-body {
	height: 100px;
	border-top: 1px solid gray;
	background: white;
	/* overflow: auto; */
}

.margin-top5 {
	margin-top: 5px;
}

.margin-top20 {
	margin-top: 15px;
} /* browse css closed */

</style>

</head>
<body>
<script type="text/javascript">

var typingInterval = 10;
var intro;
var filePointerCount = 1;

$(document).ready(function() {
	introGuide();
	displaybrowser('#browser',1);
	svgAppend("#inlineSyntaxExplanation", "svg");
	svgMarkerAppend("#svg", "arrow");
	
	$('#restartBtn').click(function() {
		location.reload();
	});
		
});

	function introGuide() { 
		intro = introJs();
		intro.setOptions({
			showStepNumbers: false,
			exitOnOverlayClick: false,
			showBullets: false,
			exitOnEsc: false,
			keyboardNavigation: false,
			
				steps : [{
							element : "#code",
							intro	: "",
							tooltipClass : "hide",
							animateStep: "learn"
						},{
							element : "#pTag",
							intro	: "",
							tooltipClass : "hide",
						},{
							element : "#inlineSyntaxExplanation",
							intro	: "",
							tooltipClass : "hide",
						},{
							element : "#htmlDisplay",
							intro	: "",
							tooltipClass : "hide",
							animateStep: "pWithSingleStyle"
						},{
							element : "#pTag1",
							intro	: "",
							tooltipClass : "hide",
						},{
							element : "#htmlDisplay",
							intro	: "",
							animateStep: "pWithMultipleStyles"
						},{
							element : "#restartBtn",
							intro : "Click to Restart",
							tooltipClass: "introjs-tooltip-min-width-custom",
							position : "right"
						}]
		});
	
	intro.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		
			case "code" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
					$("#code").removeClass("opacity00");
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "learn" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'Here we will learn the <span class="ct-code-b-yellow">HTML</span>.';
							typing('.introjs-tooltiptext', text, function() {
								fadeInDownEffect(".step", function() {
									$('.introjs-nextbutton').show();
								});
							});	
						break;	
					}
			break;
			
			case "pTag" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here we use <span class="ct-code-b-yellow">style</span> attribute with '+
							'<span class="ct-code-b-yellow">color</span>.';
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});	
				});
			break;
			
			case "inlineSyntaxExplanation" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$("#pStyle").addClass("z-index1000000");
					transferEffect("#pStyle", "#singleStyle", function () {
						explainSelector();
					});
				});
			break;
			
			case "htmlDisplay" :
				$("#inlineSyntaxExplanation").addClass("z-index1000000");
				$("#pStyle").removeClass("z-index1000000");
				$(".doubleQuotes").removeClass("blinking");
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$("#htmlDisplay").removeClass("opacity00");
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "pWithSingleStyle" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'Here we print text with <span class="ct-code-b-yellow">blue</span> color.';
							typing('.introjs-tooltiptext', text, function() {
								appendNextBtn(function() {
									$("#pTag").addClass("z-index1000000");
									transferEffect("#h1Text", "#pcontent", function () {
										$("#pTag, #h1Text").removeClass("z-index1000000");
										$('.introjs-nextbutton').show();
									});	
								});
							});
						break;
						
						case "pWithMultipleStyles" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'Here we print text with color <span class="ct-code-b-yellow">blue</span> and display in center.';
							typing('.introjs-tooltiptext', text, function() {
								appendNextBtn(function() {
									$("#pTag1").addClass("z-index1000000");
									transferEffect("#h1Text1", "#pcontent1", function () {
										$("#pTag1, #h1Text1").removeClass("z-index1000000");
										$('.introjs-nextbutton').show();
									});
								});
							});
						break;
					}
				});
			break;
			
			case "pTag1" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
					text = 'In this we use multiple attributes. Here we use <span class="ct-code-b-yellow">style</span> attribute with '+
							'<span class="ct-code-b-yellow">color</span> and <span class="ct-code-b-yellow">'+
							'<span class="ct-code-b-yellow">center</span>.';
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});	
				});
			break;
			
			case "restartBtn":
				$("#inlineSyntaxExplanation").removeClass("z-index1000000");
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$("#restartBtn").removeClass('visibility-hidden');
					$('#restartBtn').click(function() {
						location.reload();
					});
				});
			break;
		}
	});
	intro.start();
	$('.introjs-nextbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();

}
	
	function displaybrowser(selector, num) {  
		$(selector).append('<div class="container col-xs-12 padding0" id="viewBrowser'+ num +'">'
					+ '<div class="tab-container"><ul class="tabs clearfix"><li class="active">'
					+ '<div class="col-xs-10 margin-top20 padding00" id="loadImg'+ num +'">Inline Style</div>'
					+ '<i class="fa fa-times fa-sm margin-top20"></i>'
					+ '</li></ul><span id ="plus"><i class="fa fa-plus"></i></span></div>'
					+ '<div id="browser" class="col-xs-12 padding00"><div class="col-xs-2 padding00 text-center">'
					+ '<span id="arrowCircle" class="col-xs-4 padding00 margin-top5"><i class="fa fa-arrow-left arrow"></i></span>'
					+ '<span  class="col-xs-4 padding00 margin-top5"><i class="fa fa-arrow-right arrow"></i></span>'
					+ '<span  class="col-xs-4 padding00 margin-top5"><i class="fa fa-rotate-right fa-1x"></i></span></div>'
					+ '<div class="col-xs-8 padding00 text-center url">'
					+ '<input type="text" maxlength="50" class="usr-text padding00" id="url'+  num +'">'
					+ '<span class="col-xs-1 padding00"><i class="fa fa-star-o fa-1x"></i></span></div>'
					+ '<div class="col-xs-2 padding00 fa-display text-center">'	
					+ '<span class="col-xs-6 padding00 margin-top5"><i class="fa fa-home fa-1x"></i></span>'
					+ '<span class="col-xs-6 padding00 margin-top5"><i  class="fa fa-bars fa-1x"></i></span></div></div>'
					+ '<div class ="col-xs-12 html-body padding00" id = "htmlBody">'
					+ '<div id="content'+ num +'" class="col-xs-12 html-text padding00">'
					+ '<span id = "pcontent" class="opacity00" style="color: blue;">This is a heading.</span><br>'
					+ '<div id = "pcontent1" class="opacity00" style="color: blue; text-align: center">This is a heading.</div><br>'
					+ '</div></div></div>');
		
					$('#url1').attr("placeholder", "https://www.codetantra.com/webdevelopment/inline-style.html");
	}
	
	function appendNextBtn(callBackFunction) {
		$('.introjs-tooltiptext').append('<div class="text-right"><a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a></div>');
		$('.introjs-duplicate-nextbutton').click(function() {
			$('.introjs-duplicate-nextbutton').remove();
			callBackFunction();
		});
	}
	
	//********explain Selector*************
	function explainSelector() {
		TweenMax.to("#ptag", 1, {borderColor: "gray", onComplete:function() {
			svgAnimatingTopToBottomLine("#inlineSyntaxExplanation", "#ptag", "#selector", "#svg", "line","arrow", function() {
				TweenMax.to("#selector", 1, {opacity: 1, onComplete:function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here <span class="ct-code-b-yellow">p</span> is selector we can also use selector as '+
							'<span class="ct-code-b-yellow">h1</span>,<span class="ct-code-b-yellow">span</span>,'+
							'etc..';
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
							"onclick=explainStyleAttribute()>Next &#8594;</a>");
					});
				}});
			});
		}});
	}
	
	//***********Explanation of style attribute**********
	function explainStyleAttribute() {
		$('.introjs-tooltip').addClass('hide');
		$(".introjs-duplicate-nextbutton").remove();
		$("#styleAttribute").addClass("blinking");
		$('.introjs-tooltip').removeClass('hide');
		text = 'The style attribute specifies an inline style for an element.';
		typing('.introjs-tooltiptext', text, function() {
			$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
			"onclick=styleProperty()>Next &#8594;</a>");
		});
	}
	
	//*************Explain style Property**********
	function styleProperty() {
		$("#styleAttribute").removeClass("blinking");
		$('.introjs-tooltip').addClass('hide');
		$(".introjs-duplicate-nextbutton").remove();
		TweenMax.to("#colorProperty", 1, {borderColor: "gray", onComplete:function() {
			svgAnimatingTopToBottomLine("#inlineSyntaxExplanation", "#colorProperty", "#property", "#svg", "line1","arrow", function() {
				TweenMax.to("#property", 1, {opacity: 1, onComplete:function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here <span class="ct-code-b-yellow">color</span> is property.';
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
							"onclick=styleValue()>Next &#8594;</a>");
					});
				}});
			});
		}});
	}
	
	//*********Explain Style Value*************
	function styleValue() {
		$("#styleAttribute").removeClass("blinking");
		$('.introjs-tooltip').addClass('hide');
		$(".introjs-duplicate-nextbutton").remove();
		TweenMax.to("#stylevalue", 1, {borderColor: "gray", onComplete:function() {
			svgAnimatingTopToBottomLine("#inlineSyntaxExplanation", "#stylevalue", "#Value", "#svg", "line2","arrow", function() {
				TweenMax.to("#Value", 1, {opacity: 1, onComplete:function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here <span class="ct-code-b-yellow">blue</span> is value.';
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
							"onclick=explainColon()>Next &#8594;</a>");
					});
				}});
			});
		}});
	}
	
	//*******************Explain colon**********
	function explainColon() {
		$('.introjs-tooltip').addClass('hide');
		$(".introjs-duplicate-nextbutton").remove();
		$("#colornColor").addClass("blinking");
		$('.introjs-tooltip').removeClass('hide');
		text = 'The <span class="ct-code-b-yellow">:</span>(colon) is used to separate '+
				' the <span class="ct-code-b-yellow">Property</span> and a '+
				'<span class="ct-code-b-yellow">value</span>.';
		typing('.introjs-tooltiptext', text, function() {
			$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
			"onclick=semicolon()>Next &#8594;</a>");
		});
	}
	
	//***********Explain semicolon**********
	function semicolon() {
		$('.introjs-tooltip').addClass('hide');
		$(".introjs-duplicate-nextbutton").remove();
		$("#colornColor").removeClass("blinking");
		$("#semicolon").addClass("blinking");
		$('.introjs-tooltip').removeClass('hide');
		text = ' Always ends with a <span class="ct-code-b-yellow">;</span> semicolon.';
		typing('.introjs-tooltiptext', text, function() {
			$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
			"onclick=doubleQuotes()>Next &#8594;</a>");
		});
	}
	
	//*****double quotes blinking***********
	function doubleQuotes() {
		$('.introjs-tooltip').addClass('hide');
		$(".introjs-duplicate-nextbutton").remove();
		$("#semicolon").removeClass("blinking");
		$(".doubleQuotes").addClass("blinking");
		$('.introjs-tooltip').removeClass('hide');
		text = 'The css <span class="ct-code-b-yellow">property</span> and <span class="ct-code-b-yellow">Value</span> '+
				'always enclosed with <span class="ct-code-b-yellow">" "</span>(doubleQuote).';
		typing('.introjs-tooltiptext', text, function() {
			$(".introjs-nextbutton").show();
		});
	}
	
	//********* Transfer effect function ********* 
	function transferEffect(selector1, selector2, callBackFunction) {
		$(selector1).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 500);
		$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1000 , function() {
			$(selector2).removeClass("opacity00");
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		});
	}
	
	//********** FadeInDown effect function **********
	function fadeInDownEffect(selector, callBackFunction) {
		$(selector).removeClass("opacity00").addClass("animated fadeInDown").one('animationend', function() {
			$(selector).removeClass("animated fadeInDown")
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		});
	}
	
	//********** Typing function **********
	function typing(typingId, typingContent, typingCallbackFunction) {
		$(typingId).typewriting(typingContent, {
			"typing_interval" : typingInterval,
			"cursor_color" : 'white',
		}, function() {
			$(typingId).removeClass("typingCursor");
			typingCallbackFunction();
			$('.introjs-tooltip').show();
		});
	}
	
	//****** Svg append to specified div******
	function svgAppend(selector, svgId) {
		var code = '<svg class="svg-css" id="' + svgId + '"></svg>';
		$(selector).append(code);
	}

	//*********Append svg marker to the  line*************
	function svgMarkerAppend(svgId, svgMarkerId) {
		//****(document.createElementNS)---create an element without specifying a namespace URI, use the createElement method***
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

	//********Draw a svg line********
	function svgLineAppend(svgId, svgLineId, markerId, x1, y1, x2, y2) {
		//****(document.createElementNS)---create an element without specifying a namespace URI, use the createElement method***
		var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
		line.setAttribute("id", svgLineId);
		line.setAttribute("class", "svg-line");
		line.setAttribute("x1", x1);
		line.setAttribute("y1", y1);
		line.setAttribute("x2", x2);
		line.setAttribute("y2", y2);
		line.style.markerEnd = 'url("#' + markerId + '")';
		$(svgId).append(line);
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

	<div class="col-xs-12">
		<div class="ct-box-main">
		
			<div class="text-center">
				<h1 class="label ct-demo-heading text-center">How Inline Style work</h1>
			</div>

			<div class="col-xs-12 margin-top">
				<div class="col-xs-7 col-xs-offset-0 margin-top" id="savingFileStep">
					<pre class='creamPreTab4 padding00 ' id="code">
<span id="docType" class="opacity00 step position">&lt;!DOCTYPE html&gt;</span>
<span id="hOpenTag" class="opacity00 step position"> &lt;html&gt; </span>
	<span id="headOpenTag" class="opacity00 step position">&lt;head&gt;</span>
		<span id="titleTag" class="opacity00 step position">&lt;title&gt;<span id='titleText'>Inline Style</span>&lt;/title&gt;</span>
 	<span id="headCloseTag" class="opacity00 step position">&lt;/head&gt;</span>
	<span id="bodyOpenTag" class="opacity00 step position">&lt;body&gt; </span>
		<span id="pTag" class="opacity00 step position"><span id="pStyle">&lt;p style="color:<span id="applyColor" contenteditable='true',spellcheck='false', maxlength='15'>blue</span>;"&gt;</span><span id="h1Text">This is a heading.</span>&lt;/p&gt;</span>
		<span id="pTag1" class="opacity00 step position">&lt;p style="<span id="color">color:blue;</span><span id="fontsize">text-align:center;</span>"&gt;<span id="h1Text1">This is a heading.</span>&lt;/p&gt;</span>
	<span id="bodyCloseTag" class="opacity00 step position">&lt;/body&gt; </span>
<span id="hClosedTag" class = "opacity00 step position"> &lt;/html&gt; </span>
					</pre>
				</div>
				<div class="col-xs-5 margin-top">
					<div class="col-xs-12 margin-top text-center box-border" id="inlineSyntaxExplanation">
						<div class="col-xs-12 margin-top">
							<div class="col-xs-3 opacity00" id="selector">Selector</div>
							<div class="col-xs-4 col-xs-offset-1 opacity00" id="property">Property</div>
							<div class="col-xs-2 opacity00" id="Value">Value</div>
						</div>
					
 		 				<div class="col-xs-12 opacity00" id="singleStyle"> 
		  					<div id="open" class="col-xs-1">&lt;</div>
		 		 			<div id="ptag" class="position col-xs-1 style-border">p</div> 
		 		 			<div id="styleAttribute" class="col-xs-2 style-border">style</div>
		  					<div id="equal" class="col-xs-1">=<span class="doubleQuotes style-border">"</span></div>
		  					<div id="colorProperty" class="col-xs-2 style-border">color</div> 
		 		 			<div id="colornColor" class="col-xs-1 style-border">:</div> 
		 		 			<div id="stylevalue" class="col-xs-2 style-border">blue</div> 
		  					<div class="col-xs-1 style-border"><span id="semicolon">;</span><span class="doubleQuotes style-border">"</span></div>
		   					<div id="close" class="col-xs-1 ">&gt;</div>
 						</div>
					</div>
				</div>
			</div>
			
			<div class="col-xs-6 col-xs-offset-3 padding00 margin-top">
				<div class = "col-xs-12 opacity00 padding00 " id = "htmlDisplay">
					<div class = "margin-top" id ="browser"></div>
				</div>
			</div>
				
			<div class = 'col-xs-12 buttons-div text-center'>
				<button type = "button" class = "btn btn-warning visibility-hidden" id = "restartBtn">Restart</button>
			</div> 
		</div>
	</div>
	
</body>
</html>