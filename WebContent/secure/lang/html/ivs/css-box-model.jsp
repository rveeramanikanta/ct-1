<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
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

<title>CSS Box Model</title>

<style type="text/css">
/** browser css starts here **/
.container {
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
	min-height: 200px;
	/* border: 1px solid gray; */
	background: white;
}

.margin-top5 {
	margin-top: 5%;
}

/** browser css ends here **/

.margin-top-1 {
	margin-top: 1%;
}

.margin-top-2 {
	margin-top: 2%;
}

.margin-top-5 {
	margin-top: 5%;
}

.ct-code-b-red {
	color: red;
}

pre {
	-moz-tab-size: 4;
	tab-size: 4;
	font-weight: 12px;
}

.position {
	position: relative;
	display: inline-block;
}

.z-index {
	z-index: 9999999;
	position: relative;
	background-color: white;
	padding: 4px;
	border-radius: 4px;
}

span {
	outline: none;
}

input {
	background-color: transparent;
	border: medium none;
	outline:none;
}

.ui-effects-transfer {
	border: 1px solid green;
	z-index: 9999999 !important;
}

.ct-boxmodel {
    font-family: "Lato",sans-serif;
}

.ct-boxmodel .margin::before {
	content: "Margin";
	font-size: 1.1em;
	left: 0;
	position: absolute;
	text-align: center;
	top: 0%;
	width: 100%;
}
.ct-boxmodel .margin {
	background: #f1f1f1 none repeat scroll 0 0;
	border: 2px dashed #bbb;
	height: 100%;
	padding: 20px;
	position: relative;
	transition: all 0.25s ease-in-out 0s;
	width: 100%;
}


.ct-boxmodel .border::before {
	color: black;
	content: "Border";
	font-size: 1.1em;
	left: 0;
	position: absolute;
	text-align: center;
	top: 0%;
	width: 100%;
}

.ct-boxmodel .border {
	height: 100%;
	padding: 20px;
	position: relative;
	width: 100%;
}
.ct-theme {
	background-color: #4caf50 !important;
	color: #fff !important;
}


.ct-boxmodel .padding::before {
    content: "Padding";
    font-size: 1.1em;
    left: 0.5%;
    position: absolute;
    text-align: center;
    top: 0%;
    width: 100%;
}

.ct-boxmodel .padding {
    background: #f1f1f1 none repeat scroll 0 0;
    color: black;
    height: 100%;
    padding: 20px;
    position: relative;
    width: 100%;
}


.ct-boxmodel .content::before {
    content: "Content";
    display: block;
    font-size: 1.1em;
    line-height: 1.5;
    text-align: center;
}

.ct-boxmodel .content {
    background: white none repeat scroll 0 0;
    border: 2px dashed #bbb;
    height: 100%;
    padding: 20px;
    position: relative;
    width: 100%;
}
/*** css Box Model introduction ends here ***/
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

#infoDiv {
	background-color: rgb(243, 235, 235);
	border-radius: 10px;
	margin-left: 19.5%;
	margin-top: 1%;
}

.user-btn {
	background: green;
}

.user-skip-btn {
	background: orange;
	margin-right: 15px;
}

.ct-code-yellow {
	color: yellow;
}

.ct-code-lime {
	color: lime;
}

code {
	background-color: green;
	border-radius: 4px;
	color: white;
	font-size: 11px;
	padding: 3px;
}
.blinking {
	animation-name: blink;
	animation-duration: 0.8s;
	animation-iteration-count: 2;
}

@keyframes blink {
	50% {
		background: #9fbff2;
	}
}

.display-inline {
	display: inline-block;
	outline: none;
}

</style>
</head>
<body>
<div class="col-xs-12">
	<div class="text-center margin-top-1">
		<h3 class='label ct-demo-heading' id="heading">
			<span>CSS Box Model</span>
		</h3>
	</div>
	<div class="" id="informationDiv" >
		<div id="infoDiv" class="col-xs-7 col-xs-offset-2 margin-top-1" >
			<ul><li id='list1' class='opacity00'>In a document, each element is represented as a rectangular box.</li>
				<li id='list2' class='opacity00'>In CSS, each of these rectangular boxes is described using the standard box model. 
					This model describes the content of the space taken by an element.</li>
				<li id='list3' class='opacity00'>Each box consists of: <b>margins</b>, <b>borders</b>, <b>padding</b>, and the actual <b>content</b>. 
					The image below illustrates the box model.
					<span id='nextButton' class='opacity00'><a class='introjs-button user-btn'>Next &#8594;</a></span></li>
				<!-- <li id='list4' class=''></li>
				<li id='list5' class=''></li> -->
			</ul>
		</div>
	</div>
	<div class="col-xs-12 margin-top-2">
		<div class="ct-boxmodel col-xs-4 col-xs-offset-4">
			<div class="margin" id="margin">
  				<div class="border ct-theme" id="border">
    				<div class="padding" id="padding">
      					<div class="content" id="content"></div>
     				</div>
  				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-12 margin-top-2">
		<div class="col-xs-5">
<pre id="preCode" class="opacity00 position">
<span id="doctype" class="position">&lt;!DOCTYPE html&gt;</span>
<span id="openHtml" class="position">&lt;html&gt;</span>
	<span id="openHead" class="position">&lt;head&gt;</span>
		<span id="title" class="position">&lt;title&gt;CSS Syntax&lt;/title&gt;</span>
		<span id="openStyle" class="position">&lt;style&gt;</span>
		<span id="closeStyle" class="position">&lt;/style&gt;</span>
	<span id="closeHead" class="position">&lt;/head&gt;</span>
	<span id="openBody" class="position">&lt;body&gt;</span>
	<span class="position" id="pTagIdInPreCode">&lt;p&gt;The CSS box model is essentially a box that wraps 
	around every HTML element. It consists of: borders, 
	padding, margins,and the actual content.&lt;/p&gt;</span>
	<span id="closeBody" class="position">&lt;/body&gt;</span>
<span id="closeHtml" class="position">&lt;/html&gt;</span>
</pre>
		</div>
		<div class='container col-xs-6 col-xs-offset-1 z-index opacity00' id="browserDiv">
			<div class='tab-container'>
				<ul class="tabs clearfix" >
					<li class="active">
						<div class="col-xs-12">CSS Box Model</div>
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
				<div class='col-xs-2 padding00 fa-display text-center margin-top-1'>	
					<span class='col-xs-4 padding00'><i class="fa fa-arrow-down fa-1x" ></i></span>
					<span class='col-xs-4 padding00'><i class="fa fa-home fa-1x"></i></span>
					<span class='col-xs-4 padding00'><i  class="fa fa-bars fa-1x"></i></span>
				</div>
			</div>
			<div class ="col-xs-12 html-body" id ="htmlBody">
				<div class="margin-top-1" id="pTagDivInBrowser">
					<p id="pTagInBrowser">The CSS box model is essentially a box that wraps around every HTML element. It consists of: 
					borders, padding, margins, and the actual content.</p>
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
			element :"#infoDiv",
			intro : "",
			tooltipClass : 'hide',
		}, {
			element : '#content',
			intro : ''
		}, {
			element : '#padding',
			intro : ''
		}, {
			element : '#border',
			intro : ''
		}, {
			element : '#margin',
			intro : ''
		}, {
			element : '#preCode',
			intro : '',
		}, {
			element : '#pTagIdInPreCode',
			intro : ''
		}, {
			element : '#browserDiv',
			intro : '',
			animateStep : 'browserZoomEffect',
			tooltipClass : 'hide'
		}, {
			element : '#browserDiv',
			intro : '',
			animateStep : 'backgroundActionInBrowser',
			tooltipClass : 'hide'
		}, {
			element : '#browserDiv',
			intro : '',
			animateStep : 'borderActionInBrowser',
			tooltipClass : 'hide'
		}]
	});
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
		var elementId = targetElement.id;
		switch(elementId) {
		case 'infoDiv':
			$("#infoDiv").css({height: $("#infoDiv").outerHeight()});
			$("#list1").fadeTo(500, 1, function() {
				$("#list2").fadeTo(500, 1, function() {
					$("#list3").fadeTo(500, 1, function() {
						$("#infoDiv").addClass('z-index9999999');
						$('#nextButton').removeClass("opacity00");
						$('.user-btn').click(function() {
							$('.user-btn').remove();
								introjs.nextStep();
						});
					});
				});
			});
			break;
		case 'content':
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#content").addClass("blinking");
				var text = "The <span class='ct-code-b-yellow'>content</span> of the box, where text and images appear.";
				typing('.introjs-tooltiptext', text, typingInterval, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'padding':
			$("#content").removeClass("blinking");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#padding").addClass("blinking");
				var text = "The <span class='ct-code-b-yellow'>padding</span> is clears an area around the content. The padding is transparent.";
				typing('.introjs-tooltiptext', text, typingInterval, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'border':
			$("#padding").removeClass("blinking");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#border").addClass("blinking");
				var text = "A <span class='ct-code-b-yellow'>border</span> that goes around the padding and content.";
				typing('.introjs-tooltiptext', text, typingInterval, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'margin':
			$("#border").removeClass("blinking");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#margin").addClass("blinking");
				var text = "The <span class='ct-code-b-yellow'>margin</span> is clears an area outside the border. The margin is transparent.";
				typing('.introjs-tooltiptext', text, typingInterval, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'preCode':
			$("#margin").removeClass("blinking");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us consider a html code.";
				typing('.introjs-tooltiptext', text, typingInterval, function() {
					TweenMax.to($("#preCode"), 1.5, {opacity: 1, onComplete: function() {
						$('.introjs-nextbutton').show();
					}});
				});
			});
			break;
			
		case 'pTagIdInPreCode':
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Now apply different style properties to the <span class='ct-code-b-yellow'>p</span> tag.";
				typing('.introjs-tooltiptext', text, typingInterval, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'browserDiv':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'browserZoomEffect':
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#preCode").addClass("z-index");
					zoomingEffect("#browserDiv", function() {
						$(".introjs-nextbutton").show();
						$("#openStyle").after("<br>\t\t\t<span id='selectorSpan' class='opacity00'></span>");
						$("#selectorSpan").append("<br>\t\t\t<span id='pSelector'>p</span> <span class='' id='openBrace1'>{</span>");
						$("#openBrace1").after("<br>\t\t\t\t<span id='cssBackground'>background: yellow;</span>");
						$("#cssBackground").after("<br>\t\t\t\t<span class='opacity00' id='borderStyle'>border: 20px solid blue;</span>");
						$("#borderStyle").after("<br>\t\t\t<span id='closeBrace1'>}</span>");
						TweenMax.to($("#selectorSpan"), 1, {opacity: 1, onComplete: function() {
							setTimeoutFunction();
						}});
					});
				});
				break;
			case 'backgroundActionInBrowser':
			//	$(".introjs-helperLayer").one("transitionend", function() {
					transferEffect("#cssBackground", "#pTagDivInBrowser", function() {
						TweenMax.to($("#pTagInBrowser"), 1, {css: {"background": "yellow"}});
						dynamicSteps("#borderStyle", "enterBorderStyle");
						$("#preCode").removeClass("z-index");
						setTimeoutFunction();
					});
			//	});
				break;
			case'borderActionInBrowser':
				$(".introjs-helperLayer").one("transitionend", function() {
					transferEffect("#borderStyle", "#pTagDivInBrowser", function() {
						TweenMax.to($("#pTagInBrowser"), 1, {css: {"border": "20px solid blue"}});
						dynamicSteps("#borderStyle", "userEnterBorderStyle");
						setTimeoutFunction();
					});
				});
				break;
			case 'BorderStyleDisplayedByuser':
				$("#browserDiv").removeClass("z-index");
				var value = $("#borderStyleInput").val();
				var count = value.substring(value.indexOf(" ") + 1, value.lastIndexOf(";"));
				var borderArr = count.split(" ");
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#borderStyleInput").addClass("z-index");
					$("#browserDiv").addClass("z-index");
					transferEffect("#borderStyleInput", "#pTagDivInBrowser", function() {
						TweenMax.to($("#pTagInBrowser"), 1, {css: {"borderWidth": borderArr[0], "borderStyle" : borderArr[1], "borderColor" : borderArr[2]}});
						$("#borderStyleInput").removeClass("z-index");
						introjs.refresh();
						dynamicSteps("#cssPadding", "enterPaddingStyle");
						setTimeoutFunction();
					});
				});
				break;
			case 'paddingActionInBrowser':
				$(".introjs-helperLayer").one("transitionend", function() {
					transferEffect("#cssPadding", "#pTagDivInBrowser", function() {
						TweenMax.to($("#pTagInBrowser"), 1, {css: {"padding": "25px"}});
						dynamicSteps("#cssPadding", "userEnterPaddingStyle");
						setTimeoutFunction();
					});
				});
				break;
			case 'PaddingStyleDisplayedByuser':
				$("#browserDiv").removeClass("z-index");
				var value = $("#cssPaddingInput").val();
				var count = value.substring(value.indexOf(" ") + 1, value.lastIndexOf(";"));
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#cssPaddingInput").addClass("z-index");
					$("#browserDiv").addClass("z-index");
					transferEffect("#cssPaddingInput", "#pTagDivInBrowser", function() {
						TweenMax.to($("#pTagInBrowser"), 1, {css: {"padding": count}});
						$("#cssPaddingInput").removeClass("z-index");
						introjs.refresh();
						dynamicSteps("#cssMargin", "enterMarginStyle");
						setTimeoutFunction();
					});
				});
				break;
			
			case 'marginActionInBrowser':
				$(".introjs-helperLayer").one("transitionend", function() {
					transferEffect("#cssMargin", "#pTagDivInBrowser", function() {
						TweenMax.to($("#pTagInBrowser"), 1, {css: {"margin": "20px"}});
						dynamicSteps("#cssMargin", "userEnterMarginStyle");
						setTimeoutFunction();
					});
				});
				break;
			case 'MarginStyleDisplayedByuser':
				$("#browserDiv").removeClass("z-index");
				var value = $("#cssMarginInput").val();
				var count = value.substring(value.indexOf(" ") + 1, value.lastIndexOf(";"));
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#cssMarginInput").addClass("z-index");
					$("#browserDiv").addClass("z-index");
					transferEffect("#cssMarginInput", "#pTagDivInBrowser", function() {
						TweenMax.to($("#pTagInBrowser"), 1, {css: {"margin": count}});
						$("#cssMarginInput").removeClass("z-index");
						introjs.refresh();
						setTimeoutFunction();
						dynamicSteps("#selectorSpan");
						
						var valueOfBackground = $("#cssBackground").text();
						var countOfBackground = valueOfBackground.substring(valueOfBackground.indexOf(" ") + 1, valueOfBackground.lastIndexOf(";"));
						$("#cssBackground").replaceWith("<span>background: </span><div class='display-inline' id='BackgroundValue'>"+ countOfBackground + "</div>;");
						
						var valueOfBorder = $("#borderStyleInput").val();
						var countOfBorder = valueOfBorder.substring(valueOfBorder.indexOf(" ") + 1, valueOfBorder.lastIndexOf(";"));
						$("#borderStyle").replaceWith("<span>border: </span><div class='display-inline' id='BorderValue'>"+ countOfBorder + "</div>;");
						
						var valueOfPadding = $("#cssPaddingInput").val();
						var countOfPadding = valueOfPadding.substring(valueOfPadding.indexOf(" ") + 1, valueOfPadding.lastIndexOf("px;"));
						$("#cssPadding").replaceWith("<span>padding: </span><div class='display-inline' id='paddingValue'>"+ countOfPadding + "px</div>;");
						
						var valueOfMargin = $("#cssMarginInput").val();
						var countOfMargin = valueOfMargin.substring(valueOfMargin.indexOf(" ") + 1, valueOfMargin.lastIndexOf("px;"));
						$("#cssMargin").replaceWith("<span>margin: </span><div class='display-inline' id='MarginValue'>"+ countOfMargin + "px</div>;");
					});
				});
				break;
				
			case 'differentStylesDisplayedByUser':
				$('.introjs-helperLayer').one('transitionend', function() {
					var borderArr = $("#BorderValue").text().split(" ");
					TweenMax.to($("#pTagInBrowser"), 1, {css: {"background": $("#BackgroundValue").text()}});
					TweenMax.to($("#pTagInBrowser"), 1, {css: {"borderWidth": borderArr[0], "borderStyle" : borderArr[1], "borderColor" : borderArr[2]}});
					TweenMax.to($("#pTagInBrowser"), 1, {css: {"padding": $("#paddingValue").text()}});
					TweenMax.to($("#pTagInBrowser"), 1, {css: {"margin": $("#MarginValue").text()}});
					setTimeoutFunction();
					dynamicSteps("#selectorSpan");
				});
				break;
			}
			break;
		
		case 'selectorSpan':
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Now you can change the values of <span class='ct-code-b-yellow'>background</span>, "+
					"<span class='ct-code-b-yellow'>border</span>, <span class='ct-code-b-yellow'>padding</span> "+
					"and <span class='ct-code-b-yellow'>margin</span> and click on <code>Next</code> button to see " + 
					"how they apply to the element or click on <code style='background: orange'>skip</code> to end this process.";
				typing('.introjs-tooltiptext', text, typingInterval, function() {
					$("#BackgroundValue, #BorderValue, #paddingValue, #MarginValue").attr("contenteditable", "true").focus();
					$("#BackgroundValue, #BorderValue, #paddingValue, #MarginValue").addClass("blinking");
					$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
					$(".introjs-tooltipbuttons").append("<a class='introjs-button user-skip-btn'>Skip</a>");
					$(".user-skip-btn").click(function() {
						dynamicSteps("#restart", "", "", "right");
						introjs.nextStep();
						$(".user-skip-btn").remove();
						$(".user-btn").remove();
					});
					$(".user-btn").click(function() {
						dynamicSteps("#browserDiv", "differentStylesDisplayedByUser", 'hide');
						introjs.nextStep();
						$(".user-btn").remove();
						$(".user-skip-btn").remove();
					});
				});
			});
			break;
		case 'openBrace1':
			var text = "Enter here <span class='ct-code-b-yellow'>"+$("#openBrace1").html()+ "</span>";
			customIntro(elementId, text);
			break;
		case 'closeBrace1':
			var text = "Enter here <span class='ct-code-b-yellow'>"+$("#closeBrace1").html()+ "</span>";
			customIntro(elementId, text);
			break;
		case 'cssBackground':
			var text = "Enter here <span class='ct-code-b-yellow'>"+$("#cssBackground").html()+ "</span>";
			customIntro(elementId, text);
			break;
			
		case 'borderStyle':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;	
			switch(animateStep) {
			case 'enterBorderStyle':
				var text = "Enter here <span class='ct-code-b-yellow'>"+$("#borderStyle").html()+ "</span>";
				customIntro(elementId, text);
				$("#borderStyle").after("<br>\t\t\t\t<span class='opacity00' id='cssPadding'>padding: 25px;</span>");
				break;
			case 'userEnterBorderStyle':
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Now you can change the border value.";
					typing('.introjs-tooltiptext', text, typingInterval, function() {
						$("#borderStyleInput").removeAttr("disabled").focus();
						$("#borderStyleInput").on("keyup", function(e) {
							var value = $("#borderStyleInput").val();
							var count = value.substring(value.indexOf(" ") + 1, value.indexOf("px"));
							var syntax = value.substring(0, value.indexOf(" "));
							$('.length-error-text').remove();
							if (syntax == "border:" && count > 0 && count <= 100 && value.endsWith(";") == true) {
								$(".length-error-text").remove();
								$("#borderStyleInput").removeAttr("disabled");
								$(".introjs-nextbutton").show();
							} else {
								$(".introjs-nextbutton").hide();
								$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br>"+
										"<b> Please enter properly.</b></span>");
								if (count > 100) {
									$(".length-error-text").append("<br><span class='ct-code-lime'>Note:</span> "+
											"<span class='ct-code-yellow'><b>Here we restricted to max length is 100px</b>.</span>");
								}
							}
							dynamicSteps("#browserDiv", "BorderStyleDisplayedByuser", 'hide');
						});
					});
				});
				break;
			}
			break;
		
		case 'cssPadding':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;	
			switch(animateStep) {
			case 'enterPaddingStyle':
				var text = "Enter here <span class='ct-code-b-yellow'>"+$("#cssPadding").html()+ "</span>";
				customIntro(elementId, text);
				dynamicSteps("#browserDiv", "paddingActionInBrowser", 'hide');
				$("#cssPadding").after("<br>\t\t\t\t<span class='opacity00' id='cssMargin'>margin: 20px;</span>");
				break;
			case 'userEnterPaddingStyle':
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Now you can change the padding value.";
					typing('.introjs-tooltiptext', text, typingInterval, function() {
						$("#cssPaddingInput").removeAttr("disabled").focus();
						$("#cssPaddingInput").on("keyup", function(e) {
							var value = $("#cssPaddingInput").val();
							var count = value.substring(value.indexOf(" ") + 1, value.indexOf("px"));
							var syntax = value.substring(0, value.indexOf(" "));
							$('.length-error-text').remove();
							if (syntax == "padding:" && count > 0 && count <= 100 && value.endsWith(";") == true) {
								$(".length-error-text").remove();
								$("#cssPaddingInput").removeAttr("disabled");
								$(".introjs-nextbutton").show();
							} else {
								$(".introjs-nextbutton").hide();
								$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br>"+
										"<b> Please enter properly.</b></span>");
								if (count > 100) {
									$(".length-error-text").append("<br><span class='ct-code-lime'>Note:</span> "+
											"<span class='ct-code-yellow'><b>Here we restricted to max length is 100px</b>.</span>");
								}
							}
							dynamicSteps("#browserDiv", "PaddingStyleDisplayedByuser", 'hide');
						});
					});
				});
				break;
			}
			break;
		case 'cssMargin':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'enterMarginStyle':
				var text = "Enter here <span class='ct-code-b-yellow'>"+$("#cssMargin").html()+ "</span>";
				customIntro(elementId, text);
				dynamicSteps("#browserDiv", "marginActionInBrowser", 'hide');
				break;
			case 'userEnterMarginStyle':
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Now you can change the margin value.";
					typing('.introjs-tooltiptext', text, typingInterval, function() {
						$("#cssMarginInput").removeAttr("disabled").focus();
						$("#cssMarginInput").on("keyup", function(e) {
							var value = $("#cssMarginInput").val();
							var count = value.substring(value.indexOf(" ") + 1, value.indexOf("px"));
							var syntax = value.substring(0, value.indexOf(" "));
							$('.length-error-text').remove();
							if (syntax == "margin:" && count > 0 && count <= 100 && value.endsWith(";") == true) {
								/* $("#cssMarginInput").css({"width": "width: '") */ 
								$(".length-error-text").remove();
								$("#cssMarginInput").removeAttr("disabled");
								$(".introjs-nextbutton").show();
							} else {
								$(".introjs-nextbutton").hide();
								$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br>"+
										"<b> Please enter properly.</b></span>");
								if (count > 100) {
									$(".length-error-text").append("<br><span class='ct-code-lime'>Note:</span> "+
											"<span class='ct-code-yellow'><b>Here we restricted to max length is 100px</b>.</span>");
								}
							}
							dynamicSteps("#browserDiv", "MarginStyleDisplayedByuser", 'hide');
						});
					});
				});
				break;
			}
			break;
		case 'restart':
			$(".introjs-tooltip").css("min-width", "-moz-max-content");
			$(".introjs-tooltip").css("min-width", "max-content");
			$('.introjs-helperLayer').one("transitionend", function() {
				$(".introjs-tooltiptext").text("Click to restart.");
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

function customIntro(elementId, text) {
	$(".introjs-nextbutton").hide();
	$('.introjs-helperLayer').one('transitionend', function() {
		typing('.introjs-tooltiptext', text, typingInterval, function() {
			validation("#"+elementId,elementId+"Input");
		});
	});
}

function validation(selector1,selector2) {
	var textInput = $(selector1).text();
	var w = $(selector1).width();
	var l = textInput.length;
	$(selector1).empty().removeClass('opacity00'); 
	$(selector1).append('<input id="'+selector2+'" class="dynamic-input" style="width: '+ (w + 3) +'px;" maxlength='+ (l + 3) +'>');
	keyCodeCondition("#"+selector2,textInput);
}

function keyCodeCondition(id, tag) {
	$(id).empty().removeClass('opacity00'); 
	$(id).attr({contenteditable : "true"});
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
function dynamicSteps(stepName, animatedStep, tooltipClass, position) {
	var options = {
			element :stepName,
			intro :'',
			tooltipClass : tooltipClass,
			animateStep: animatedStep,
			position : position
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

</script>
</html>