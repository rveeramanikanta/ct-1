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
<title>HTML5 input types</title>
<style type="text/css">
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
	margin-top: 3px;
	padding-bottom: 6px;
	background: white;
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

.margin-top20 {
	margin-top: 20px;
}

ul.tabs {
    margin: 0 0 -4px;
    max-height: 26px;
    overflow: hidden;
    line-height: 25px;
    list-style-type: none;
    display: inline-block;
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

.padding00 {
	padding: 0;
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

.margin-top5 {
	margin-top: 5px;
}
/*** browser CSS ends here ***/

.margin-top-2 {
	margin-top: 2%;
}

.margin-top-1 {
	margin-top: 1%;
}
pre {
	-moz-tab-size: 3;
	tab-size: 3;
	font-size: 12px;
}

input {
	outline: none;
}

.dynamic-input {
	background-color: transparent;
	border: medium none;
}

.ui-effects-transfer {
	border: 1px solid green;
	z-index: 9999999 !important;
}

.z-index {
	z-index: 9999999;
	position: relative;
	background-color: white;
	padding: 4px;
	border-radius: 4px;
}

.display-block {
	display: inline-block;
	outline: none;
}

input[type=range] {
	width: 30%;
}

.html-body {
	font-size: 12px;	
}

.input-error-color {
	background: yellow;
}

.popover-content {
	background-color: darkseagreen;
	color: black;
	min-height: 28px;
	width: 206px;
}

.popover {
	z-index: 9999996;
	/* width: 100px; */
}

.color-blue {
	color: midnightblue;
	font-weight: bold;
}

.ct-code-b-red {
	color: red;
}
</style>
</head>
<body>
<div class="col-xs-12">
	<div class="text-center margin-top-1">
		<h3 class='label ct-demo-heading' id="heading">
			<span>HTML5 input Types</span>
		</h3>
	</div>
	<div class="col-xs-5 margin-top-2">
	<pre id="preCode">
<span id="doctype" class="opacity00">&lt;!DOCTYPE html&gt;</span>
<span id="openHtml" class="opacity00">&lt;html&gt;</span>
	<span id="openHead" class="opacity00">&lt;head&gt;</span>
		<span id="title" class="opacity00">&lt;title&gt;HTML input types&lt;/title&gt;</span>
	<span id="closeHead" class="opacity00">&lt;/head&gt;</span>
	<span id="openBody" class="opacity00">&lt;body&gt;</span>
	<span id="openForm" class="opacity00">&lt;form&gt;</span>	
		<span id="labelText1" class="opacity00">&lt;label&gt;Select your favorite color:&lt;/label&gt;</span>
	<span id="closeForm" class="opacity00">&lt;/form&gt;</span>
	<span id="closeBody" class="opacity00">&lt;/body&gt;</span>
<span id="closeHtml" class="opacity00">&lt;/html&gt;</span>
	</pre>
	</div>
	
	<div class='container col-xs-6 margin-top-5 opacity00' id="browserDiv">
		<div class='tab-container'>
			<ul class="tabs clearfix" >
				<li class="active">
					<div class="col-xs-12  padding00 margin-top20" id="titleTextInBrowser">HTML input types</div>
					<i class="col-xs-2 fa fa-times fa-sm padding00 margin-top20"></i>
				</li>
			</ul>
			<span id ="plus"><i class="fa fa-plus"></i></span>
		</div>
		<div id='browser' class='col-xs-12 padding00' style="border-bottom: 1px solid;">
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
		<div class ="col-xs-12 html-body" id = "htmlBody">
			<!-- <form class="margin-top-1" action="/action_page.jsp"> -->
			<form class="margin-top-1">
				<label class="opacity00" id="labelBrowserId1">Select your favorite color:</label>
				<br><br>
				<label class="opacity00" id="labelBrowserId2">Birthday:</label>
				<br><br>
				<label class="opacity00" id="labelBrowserId3">Birthday (date and time):</label>
				<br><br>
				<label class="opacity00" id="labelBrowserId4">Birthday (month and year):</label>
				<br><br>
				<label class="opacity00" id="labelBrowserId5">Quantity:</label>
				<br><br>
				<label class="opacity00" id="labelBrowserId6">Range:</label>
				<br><br>
				<label class="opacity00" id="labelBrowserId7">Email:</label>
				<br><br>
				<label class="opacity00" id="labelBrowserId8">Search Google:</label>
				<br><br>
			</form>
		</div>
		<div class="col-xs-12" id="dynamicHtmlBody" hidden="true" style="min-height: 586px; background: papayawhip">
			<img src="../images/logo-in-black-text.jpg" width="20%" style="margin-left: 40%;"><br>
			<h2 style="font-style:italic;">Submitted Form Data</h2>
			<span id="formLine1"></span><br><br>
			<span id="formLine2"></span><br><br>
			<span id="formLine3"></span><br><br>
			<span id="formLine4"></span><br><br>
			<span id="formLine5"></span><br><br>
			<span id="formLine6"></span><br><br>
			<span id="formLine7"></span><br><br>
			<span id="formLine8"></span><br><br>
			<span id="formLine9"></span><br><br>
			<span id="formLine10"></span><br><br>
			<span id="formLine11"></span><br><br>
			<span id="formLine12"></span><br><br>
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
			element : '#preCode',
			intro : ''
		}, {
			element : '#openForm',
			intro : '',
			animateStep : 'openFormByUser'
		}, {
			element : '#closeForm',
			intro : ''
		}, {
			element : '#labelText1',
			intro : '',
			tooltipClass : 'hide'
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
		var elementId = targetElement.id;
		switch(elementId) {
		case 'preCode':
			var text = "Let us learn different html input types of form element."
			typing('.introjs-tooltiptext', text, typingInterval, function() {
				TweenMax.to($("#preCode"), 0.5, {opacity: 1, onComplete: function() {
					TweenMax.to($("#doctype"), 0.5, {opacity: 1, onComplete: function() {
						TweenMax.to($("#openHtml, #closeHtml"), 0.5, {opacity: 1, onComplete: function() {
							TweenMax.to($("#openHead, #closeHead"), 0.5, {opacity: 1, onComplete: function() {
								TweenMax.to($("#title"), 0.5, {opacity: 1, onComplete: function() {
									TweenMax.to($("#openBody, #closeBody"), 0.5, {opacity: 1, onComplete: function() {
										zoomingEffect("#browserDiv", function() {
											$(".introjs-nextbutton").show();
										});
									}});
								}});
							}});
						}});
					}});
				}});
			});
			break;
		case 'openForm':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'openFormByUser':
				customIntro(elementId);
				break;
			case 'actionAttributeAppend':
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#openForm").text("");
					$("#openForm").append('&lt;form <div id="actionSpan" class="display-block" contenteditable="true"></div>&gt;');
					var text = 'enter here <span class="ct-code-b-yellow">action="/action_page.jsp"</span>';
					typing(".introjs-tooltiptext", text, typingInterval, function() {
						keyCodeCondition("#actionSpan", 'action="/action_page.jsp"');
					});
				});
				break;
			}
			break;
		case 'closeForm':
			customIntro(elementId);
			dynamicSteps("#openForm", "actionAttributeAppend");
			break;
		case 'labelText1':
			dispalyTextDirectly("#labelText1", "#labelBrowserId1");
			$("#labelText1").after("<br>\t\t<span id='inputColorTag' class='opacity00'>&lt;input&gt;</span>");
			dynamicSteps("#inputColorTag", "inputColorTagEnterByUser");
			break;
		case 'labelText2':
			dispalyTextDirectly("#labelText2", "#labelBrowserId2");
			$("#labelText2").after("<br>\t\t<span id='inputDateTag' class='opacity00'>&lt;input&gt;</span>");
			dynamicSteps("#inputDateTag", "inputDateTagEnterByUser");
			break;
		case 'labelText3':
			dispalyTextDirectly("#labelText3", "#labelBrowserId3");
			$("#labelText3").after("<br>\t\t<span id='inputDateTimeLocalTag' class='opacity00'>&lt;input&gt;</span>");
			dynamicSteps("#inputDateTimeLocalTag", "inputDateTimeLocalTagEnterByUser");
			break;
		case 'labelText4':
			dispalyTextDirectly("#labelText4", "#labelBrowserId4");
			$("#labelText4").after("<br>\t\t<span id='inputMonthTag' class='opacity00'>&lt;input&gt;</span>");
			dynamicSteps("#inputMonthTag", "inputMonthTagEnterByUser");
			break;
		case 'labelText5':
			dispalyTextDirectly("#labelText5", "#labelBrowserId5");
			$("#labelText5").after("<br>\t\t<span id='inputNumberTag' class='opacity00'>&lt;input&gt;</span>");
			dynamicSteps("#inputNumberTag", "inputNumberTagEnterByUser");
			break;
		case 'labelText6':
			dispalyTextDirectly("#labelText6", "#labelBrowserId6");
			$("#labelText6").after("<br>\t\t<span id='inputRangeTag' class='opacity00'>&lt;input&gt;</span>");
			dynamicSteps("#inputRangeTag", "inputRangeTagEnterByUser");
			break;
		case 'labelText7':
			dispalyTextDirectly("#labelText7", "#labelBrowserId7");
			$("#labelText7").after("<br>\t\t<span id='inputEmailTag' class='opacity00'>&lt;input&gt;</span>");
			dynamicSteps("#inputEmailTag", "inputEmailTagEnterByUser");
			break;
		case 'labelText8':
			dispalyTextDirectly("#labelText8", "#labelBrowserId8");
			$("#labelText8").after("<br>\t\t<span id='inputSearchTag' class='opacity00'>&lt;input&gt;</span>");
			dynamicSteps("#inputSearchTag", "inputSearchTagEnterByUser");
			break;
		case 'labelText9':
			$("#inputFieldSearchInBrowser").after('<br><br><label class="opacity00" id="labelBrowserId9">Telephone:</label>');
			dispalyTextDirectly("#labelText9", "#labelBrowserId9");
			$("#labelText9").after("<br>\t\t<span id='inputTelTag' class='opacity00'>&lt;input&gt;</span>");
			dynamicSteps("#inputTelTag", "inputTelTagEnterByUser");
			break;
		case 'labelText10':
			$("#inputFieldTelInBrowser").after('<br><br><label class="opacity00" id="labelBrowserId10">Select a time:</label>');
			dispalyTextDirectly("#labelText10", "#labelBrowserId10");
			$("#labelText10").after("<br>\t\t<span id='inputTimeTag' class='opacity00'>&lt;input&gt;</span>");
			dynamicSteps("#inputTimeTag", "inputTimeTagEnterByUser");
			break;
		case 'labelText11':
			$("#inputFieldTimeInBrowser").after('<br><br><label class="opacity00" id="labelBrowserId11">Add your home page:</label>');
			dispalyTextDirectly("#labelText11", "#labelBrowserId11");
			$("#labelText11").after("<br>\t\t<span id='inputUrlTag' class='opacity00'>&lt;input&gt;</span>");
			dynamicSteps("#inputUrlTag", "inputUrlTagEnterByUser");
			break;
		case 'labelText12':
			$("#inputFieldUrlInBrowser").after('<br><br><label class="opacity00" id="labelBrowserId12">Select a week:</label>');
			dispalyTextDirectly("#labelText12", "#labelBrowserId12");
			$("#labelText12").after("<br>\t\t<span id='inputWeekTag' class='opacity00'>&lt;input&gt;</span>");
			dynamicSteps("#inputWeekTag", "inputWeekTagEnterByUser");
			break;
		case 'labelText13':
			$("#inputFieldWeekInBrowser").after('<br><br><span class="opacity00" id="labelBrowserId13">'+
					'<input id="submitBtn" type="button" value="Submit"><input type="reset" value="Reset"></span>');
			dispalyTextDirectly("#labelText13", "#labelBrowserId13");
			dynamicSteps("#browserDiv", "submittedFormDataAction")
			break;
/*** type="color" steps in PreCode ***/		
		case 'inputColorTag':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'inputColorTagEnterByUser':	
			//	$("#browserDiv").removeClass("z-index");
				customIntro(elementId);
				dynamicSteps("#browserDiv", "inputColorTagShownInBrowser", "hide");
				break;
			case 'colorTypeAttrAppend':
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#inputColorTag").text("");
					$("#inputColorTag").append('&lt;input <div class="display-block" id="typeColor" contenteditable="true"> </div>&gt;');
					var text = 'enter here <span class="ct-code-b-yellow">type="color"</span>';
					typing(".introjs-tooltiptext", text, typingInterval, function() {
						keyCodeCondition("#typeColor", 'type="color"');
						dynamicSteps("#inputColorTag", "nameAttrAppendInTypeColor");
					});
				});
				break;
			case 'nameAttrAppendInTypeColor':
				$("#inputColorTag").text("");
				$("#inputColorTag").append('&lt;input type="color" <div id="nameText" spellcheck="false" contenteditable="true"'
								+ ' class="display-block"> </div>&gt;');
				var text = 'enter here <span class="ct-code-b-yellow">name="favcolor"</span>';
				typing(".introjs-tooltiptext", text, 30, function() {
					keyCodeCondition("#nameText", 'name="favcolor"');
					dynamicSteps("#browserDiv", "inputColorEditableByUserInBrowser");
				});
				break;
			}
			break;
/*** type="date" steps in PreCode ***/			
		case 'inputDateTag':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'inputDateTagEnterByUser':	
			//	$("#browserDiv").removeClass("z-index");
				customIntro(elementId);
				dynamicSteps("#browserDiv", "inputDateTagShownInBrowser", "hide");
				break;
			case 'dateTypeAttrAppend':
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#inputDateTag").text("");
					$("#inputDateTag").append('&lt;input <div class="display-block" id="typeDate" contenteditable="true"> </div>&gt;');
					var text = 'enter here <span class="ct-code-b-yellow">type="date"</span>';
					typing(".introjs-tooltiptext", text, typingInterval, function() {
						keyCodeCondition("#typeDate", 'type="date"');
						dynamicSteps("#inputDateTag", "nameAttrAppendInTypeDate");
					});
				});
				break;
			case 'nameAttrAppendInTypeDate':
				$("#inputDateTag").text("");
				$("#inputDateTag").append('&lt;input type="date" <div id="nameTextInDateType" contenteditable="true" class="display-block"'
										+ ' spellcheck="false"> </div>&gt;');
				var text = 'enter here <span class="ct-code-b-yellow">name="bday"</span>';
				typing(".introjs-tooltiptext", text, 30, function() {
					keyCodeCondition("#nameTextInDateType", 'name="bday"');
					dynamicSteps("#browserDiv", "inputDateEditableByUserInBrowser");
				});
				break;
			}
			break;
/*** type="datetime-local" steps in PreCode ***/			
		case 'inputDateTimeLocalTag':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'inputDateTimeLocalTagEnterByUser':	
			//	$("#browserDiv").removeClass("z-index");
				customIntro(elementId);
				dynamicSteps("#inputDateTimeLocalTag", "dateTimeLocalTypeAttrAppend");
				break;
			case 'dateTimeLocalTypeAttrAppend':
					$("#labelBrowserId3").after("<input id='inputFieldDateTimeLocalInBrowser'>");
					$("#inputDateTimeLocalTag").text("");
					$("#inputDateTimeLocalTag").append('&lt;input <div class="display-block" id="typeDateTimeLocal" contenteditable="true"'
										+ ' spellcheck="false"> </div>&gt;');
					var text = 'enter here <span class="ct-code-b-yellow">type="datetime-local"</span>';
					typing(".introjs-tooltiptext", text, 30, function() {
						keyCodeCondition("#typeDateTimeLocal", 'type="datetime-local"');
						dynamicSteps("#inputDateTimeLocalTag", "nameAttrAppendInTypeDateTimeLocal");
					});
				break;
			case 'nameAttrAppendInTypeDateTimeLocal':
				$("#inputDateTimeLocalTag").text("");
				$("#inputDateTimeLocalTag").append('&lt;input type="datetime-local" '+
					'<div id="nameTextInDateTimeLocalType" contenteditable="true" class="display-block" spellcheck="false"> </div>&gt;');
				var text = 'enter here <span class="ct-code-b-yellow">name="bdaytime"</span>';
				typing(".introjs-tooltiptext", text, 30, function() {
					keyCodeCondition("#nameTextInDateTimeLocalType", 'name="bdaytime"');
					dynamicSteps("#browserDiv", "inputDateTimeLocalEditableByUserInBrowser");
				});
				break;
			}
			break;
/*** type="month" steps in PreCode ***/			
		case 'inputMonthTag':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'inputMonthTagEnterByUser':	
			//	$("#browserDiv").removeClass("z-index");
				customIntro(elementId);
				dynamicSteps("#inputMonthTag", "monthTypeAttrAppend");
				break;
			case 'monthTypeAttrAppend':
					$("#labelBrowserId4").after("<input id='inputFieldMonthInBrowser'>");
					$("#inputMonthTag").text("");
					$("#inputMonthTag").append('&lt;input <div class="display-block" id="typeMonth" contenteditable="true"> </div>&gt;');
					var text = 'enter here <span class="ct-code-b-yellow">type="month"</span>';
					typing(".introjs-tooltiptext", text, "20", function() {
						keyCodeCondition("#typeMonth", 'type="month"');
						dynamicSteps("#inputMonthTag", "nameAttrAppendInTypeMonth");
					});
				break;
			case 'nameAttrAppendInTypeMonth':
				$("#inputMonthTag").text("");
				$("#inputMonthTag").append('&lt;input type="month" '+
					'<div id="nameTextInMonthType" contenteditable="true" class="display-block" spellcheck="false"> </div>&gt;');
				var text = 'enter here <span class="ct-code-b-yellow">name="bdaymonth"</span>';
				typing(".introjs-tooltiptext", text, 30, function() {
					keyCodeCondition("#nameTextInMonthType", 'name="bdaymonth"');
					dynamicSteps("#browserDiv", "inputMonthEditableByUserInBrowser");
				});
				break;
			}
			break;
/*** type="number" steps in PreCode ***/
		case 'inputNumberTag':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'inputNumberTagEnterByUser':	
				customIntro(elementId);
				dynamicSteps("#inputNumberTag", "numberTypeAttrAppend");
				break;
			case 'numberTypeAttrAppend':
				$("#labelBrowserId5").after("<input id='inputFieldNumberInBrowser'>");
				$("#inputNumberTag").text("");
				$("#inputNumberTag").append('&lt;input <div class="display-block" id="typeNumber" contenteditable="true"> </div>&gt;');
				var text = 'enter here <span class="ct-code-b-yellow">type="number"</span>';
				typing(".introjs-tooltiptext", text, "20", function() {
					keyCodeCondition("#typeNumber", 'type="number"');
					dynamicSteps("#inputNumberTag", "nameAttrAppendInTypeNumber");
				});
				break;
			case 'nameAttrAppendInTypeNumber':
				$("#inputNumberTag").text("");
				$("#inputNumberTag").append('&lt;input type="nubmer" '+
					'<div id="nameTextInNumberType" contenteditable="true" class="display-block" spellcheck="false"> </div>&gt;');
				var text = 'enter here <span class="ct-code-b-yellow">name="quantity"</span>';
				typing(".introjs-tooltiptext", text, 30, function() {
					keyCodeCondition("#nameTextInNumberType", 'name="quantity"');
					dynamicSteps("#browserDiv", "inputNumberEditableByUserInBrowser");
				});
				break;
			case 'minAttrAppendInTypeNumber':
				$("#inputNumberTag").text("");
				$("#inputNumberTag").append('&lt;input type="nubmer" name="quantity" '+
					'<div id="minTextInNumberType" contenteditable="true" class="display-block" spellcheck="false"> </div>&gt;');
				var text = 'enter here <span class="ct-code-b-yellow">min="1"</span>';
				typing(".introjs-tooltiptext", text, 30, function() {
					keyCodeCondition("#minTextInNumberType", 'min="1"');
					dynamicSteps("#inputNumberTag", "maxAttrAppendInTypeNumber");
				});
				break;
			case 'maxAttrAppendInTypeNumber':
				$("#inputNumberTag").text("");
				$("#inputNumberTag").append('&lt;input type="nubmer" name="quantity" min="1" '+
					'<div id="maxTextInNumberType" contenteditable="true" class="display-block" spellcheck="false"> </div>&gt;');
				var text = 'enter here <span class="ct-code-b-yellow">max="6"</span>';
				typing(".introjs-tooltiptext", text, 30, function() {
					keyCodeCondition("#maxTextInNumberType", 'max="6"');
					dynamicSteps("#browserDiv", "inputNumbeMinMaxrEditableByUserInBrowser");
				});
				break;
			}
			break;
/*** type="range" steps in PreCode ***/			
		case 'inputRangeTag':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'inputRangeTagEnterByUser':	
			//	$("#browserDiv").removeClass("z-index");
				customIntro(elementId);
				dynamicSteps("#inputRangeTag", "rangeTypeAttrAppend");
				break;
			case 'rangeTypeAttrAppend':
					$("#labelBrowserId6").after("<input id='inputFieldRangeInBrowser'>");
					$("#inputRangeTag").text("");
					$("#inputRangeTag").append('&lt;input <div class="display-block" id="typeRange" contenteditable="true"> </div>&gt;');
					var text = 'enter here <span class="ct-code-b-yellow">type="range"</span>';
					typing(".introjs-tooltiptext", text, "20", function() {
						keyCodeCondition("#typeRange", 'type="range"');
						dynamicSteps("#inputRangeTag", "nameAttrAppendInTypeRange");
					});
				break;
			case 'nameAttrAppendInTypeRange':
				$("#inputRangeTag").text("");
				$("#inputRangeTag").append('&lt;input type="range" '+
					'<div id="nameTextInRangeType" contenteditable="true" class="display-block" spellcheck="false"> </div>&gt;');
				var text = 'enter here <span class="ct-code-b-yellow">name="points"</span>';
				typing(".introjs-tooltiptext", text, 30, function() {
					keyCodeCondition("#nameTextInRangeType", 'name="points"');
					dynamicSteps("#browserDiv", "inputRangeEditableByUserInBrowser", "hide");
				});
				break;
			case 'minAttrAppendInTypeRange':
				$("#inputRangeTag").text("");
				$("#inputRangeTag").append('&lt;input type="range" name="points" '+
					'<div id="minTextInRangeType" contenteditable="true" class="display-block" spellcheck="false"> </div>&gt;');
				var text = 'enter here <span class="ct-code-b-yellow">min="0"</span>';
				typing(".introjs-tooltiptext", text, 30, function() {
					keyCodeCondition("#minTextInRangeType", 'min="0"');
					dynamicSteps("#inputRangeTag", "maxAttrAppendInTypeRange");
				});
				break;
			case 'maxAttrAppendInTypeRange':
				$("#inputRangeTag").text("");
				$("#inputRangeTag").append('&lt;input type="range" name="points" min="0" '+
					'<div id="maxTextInRangeType" contenteditable="true" class="display-block" spellcheck="false"> </div>&gt;');
				var text = 'enter here <span class="ct-code-b-yellow">max="10"</span>';
				typing(".introjs-tooltiptext", text, 30, function() {
					keyCodeCondition("#maxTextInRangeType", 'max="10"');
					dynamicSteps("#browserDiv", "inputRangeMinMaxEditableByUserInBrowser");
				});
				break;
			}
			break;
/*** type="email" steps in PreCode ***/			
		case 'inputEmailTag':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'inputEmailTagEnterByUser':	
			//	$("#browserDiv").removeClass("z-index");
				customIntro(elementId);
				dynamicSteps("#inputEmailTag", "emailTypeAttrAppend");
				break;
			case 'emailTypeAttrAppend':
					$("#labelBrowserId7").after("<input id='inputFieldEmailInBrowser'>");
					$("#inputEmailTag").text("");
					$("#inputEmailTag").append('&lt;input <div class="display-block" id="typeEmail" contenteditable="true"> </div>&gt;');
					var text = 'enter here <span class="ct-code-b-yellow">type="email"</span>';
					typing(".introjs-tooltiptext", text, "20", function() {
						keyCodeCondition("#typeEmail", 'type="email"');
						dynamicSteps("#inputEmailTag", "nameAttrAppendInTypeEmail");
					});
				break;
			case 'nameAttrAppendInTypeEmail':
				$("#inputEmailTag").text("");
				$("#inputEmailTag").append('&lt;input type="email" '+
					'<div id="nameTextInEmailType" contenteditable="true" class="display-block" spellcheck="false"> </div>&gt;');
				var text = 'enter here <span class="ct-code-b-yellow">name="Email"</span>';
				typing(".introjs-tooltiptext", text, 30, function() {
					keyCodeCondition("#nameTextInEmailType", 'name="Email"');
					dynamicSteps("#browserDiv", "inputEmailEditableByUserInBrowser");
				});
				break;
			}
			break;
/*** type="search" steps in PreCode ***/			
		case 'inputSearchTag':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'inputSearchTagEnterByUser':	
			//	$("#browserDiv").removeClass("z-index");
				customIntro(elementId);
				dynamicSteps("#inputSearchTag", "searchTypeAttrAppend");
				break;
			case 'searchTypeAttrAppend':
					$("#labelBrowserId8").after("<input id='inputFieldSearchInBrowser'>");
					$("#inputSearchTag").text("");
					$("#inputSearchTag").append('&lt;input <div class="display-block" id="typeSearch" contenteditable="true"> </div>&gt;');
					var text = 'enter here <span class="ct-code-b-yellow">type="search"</span>';
					typing(".introjs-tooltiptext", text, "20", function() {
						keyCodeCondition("#typeSearch", 'type="search"');
						dynamicSteps("#inputSearchTag", "nameAttrAppendInTypeSearch");
					});
				break;
			case 'nameAttrAppendInTypeSearch':
				$("#inputSearchTag").text("");
				$("#inputSearchTag").append('&lt;input type="search" '+
					'<div id="nameTextInSearchType" contenteditable="true" class="display-block" spellcheck="false"> </div>&gt;');
				var text = 'enter here <span class="ct-code-b-yellow">name="googlesearch"</span>';
				typing(".introjs-tooltiptext", text, 30, function() {
					keyCodeCondition("#nameTextInSearchType", 'name="googlesearch"');
					dynamicSteps("#browserDiv", "inputSearchEditableByUserInBrowser");
				});
				break;
			}
			break;
/*** type="tel" steps in PreCode ***/			
		case 'inputTelTag':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'inputTelTagEnterByUser':	
			//	$("#browserDiv").removeClass("z-index");
				customIntro(elementId);
				dynamicSteps("#inputTelTag", "telTypeAttrAppend");
				break;
			case 'telTypeAttrAppend':
					$("#labelBrowserId9").after("<input id='inputFieldTelInBrowser'>");
					$("#inputTelTag").text("");
					$("#inputTelTag").append('&lt;input <div class="display-block" id="typeTel" contenteditable="true"> </div>&gt;');
					var text = 'enter here <span class="ct-code-b-yellow">type="tel"</span>';
					typing(".introjs-tooltiptext", text, "20", function() {
						keyCodeCondition("#typeTel", 'type="tel"');
						dynamicSteps("#inputTelTag", "nameAttrAppendInTypeTel");
					});
				break;
			case 'nameAttrAppendInTypeTel':
				$("#inputTelTag").text("");
				$("#inputTelTag").append('&lt;input type="tel" '+
					'<div id="nameTextInTelType" contenteditable="true" class="display-block" spellcheck="false"> </div>&gt;');
				var text = 'enter here <span class="ct-code-b-yellow">name="usrtel"</span>';
				typing(".introjs-tooltiptext", text, 30, function() {
					keyCodeCondition("#nameTextInTelType", 'name="usrtel"');
					dynamicSteps("#browserDiv", "inputTelEditableByUserInBrowser");
				});
				break;
			}
			break;
/*** type="time" steps in PreCode ***/			
		case 'inputTimeTag':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'inputTimeTagEnterByUser':	
			//	$("#browserDiv").removeClass("z-index");
				customIntro(elementId);
				dynamicSteps("#inputTimeTag", "timeTypeAttrAppend");
				break;
			case 'timeTypeAttrAppend':
					$("#labelBrowserId10").after("<input id='inputFieldTimeInBrowser'>");
					$("#inputTimeTag").text("");
					$("#inputTimeTag").append('&lt;input <div class="display-block" id="typeTime" contenteditable="true"> </div>&gt;');
					var text = 'enter here <span class="ct-code-b-yellow">type="time"</span>';
					typing(".introjs-tooltiptext", text, "20", function() {
						keyCodeCondition("#typeTime", 'type="time"');
						dynamicSteps("#inputTimeTag", "nameAttrAppendInTypeTime");
					});
				break;
			case 'nameAttrAppendInTypeTime':
				$("#inputTimeTag").text("");
				$("#inputTimeTag").append('&lt;input type="time" '+
					'<div id="nameTextInTimeType" contenteditable="true" class="display-block" spellcheck="false"> </div>&gt;');
				var text = 'enter here <span class="ct-code-b-yellow">name="usr_time"</span>';
				typing(".introjs-tooltiptext", text, 30, function() {
					keyCodeCondition("#nameTextInTimeType", 'name="usr_time"');
					dynamicSteps("#browserDiv", "inputTimeEditableByUserInBrowser");
				});
				break;
			}
			break;
/*** type="url" steps in PreCode ***/			
		case 'inputUrlTag':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'inputUrlTagEnterByUser':	
			//	$("#browserDiv").removeClass("z-index");
				customIntro(elementId);
				dynamicSteps("#inputUrlTag", "urlTypeAttrAppend");
				break;
			case 'urlTypeAttrAppend':
					$("#labelBrowserId11").after("<input id='inputFieldUrlInBrowser'>");
					$("#inputUrlTag").text("");
					$("#inputUrlTag").append('&lt;input <div class="display-block" id="typeUrl" contenteditable="true"> </div>&gt;');
					var text = 'enter here <span class="ct-code-b-yellow">type="url"</span>';
					typing(".introjs-tooltiptext", text, "20", function() {
						keyCodeCondition("#typeUrl", 'type="url"');
						dynamicSteps("#inputUrlTag", "nameAttrAppendInTypeUrl");
					});
				break;
			case 'nameAttrAppendInTypeUrl':
				$("#inputUrlTag").text("");
				$("#inputUrlTag").append('&lt;input type="url" '+
					'<div id="nameTextInUrlType" contenteditable="true" class="display-block" spellcheck="false"> </div>&gt;');
				var text = 'enter here <span class="ct-code-b-yellow">name="homepage"</span>';
				typing(".introjs-tooltiptext", text, 30, function() {
					keyCodeCondition("#nameTextInUrlType", 'name="homepage"');
					dynamicSteps("#browserDiv", "inputUrlEditableByUserInBrowser");
				});
				break;
			}
			break;inputWeekTagEnterByUser
/*** type="week" steps in PreCode ***/			
		case 'inputWeekTag':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'inputWeekTagEnterByUser':	
			//	$("#browserDiv").removeClass("z-index");
				customIntro(elementId);
				dynamicSteps("#inputWeekTag", "weekTypeAttrAppend");
				break;
			case 'weekTypeAttrAppend':
					$("#labelBrowserId12").after("<input id='inputFieldWeekInBrowser'>");
					$("#inputWeekTag").text("");
					$("#inputWeekTag").append('&lt;input <div class="display-block" id="typeWeek" contenteditable="true"> </div>&gt;');
					var text = 'enter here <span class="ct-code-b-yellow">type="week"</span>';
					typing(".introjs-tooltiptext", text, "20", function() {
						keyCodeCondition("#typeWeek", 'type="week"');
						dynamicSteps("#inputWeekTag", "nameAttrAppendInTypeWeek");
					});
				break;
			case 'nameAttrAppendInTypeWeek':
				$("#inputWeekTag").text("");
				$("#inputWeekTag").append('&lt;input type="week" '+
					'<div id="nameTextInWeekType" contenteditable="true" class="display-block" spellcheck="false"> </div>&gt;');
				var text = 'enter here <span class="ct-code-b-yellow">name="week_year"</span>';
				typing(".introjs-tooltiptext", text, 30, function() {
					keyCodeCondition("#nameTextInWeekType", 'name="week_year"');
					dynamicSteps("#browserDiv", "inputWeekEditableByUserInBrowser");
				});
				break;
			}
			break;

/*** Action in Browser steps starts here ***/			
		case 'browserDiv':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
	/*** type="color" steps in browser ***/	
			case 'inputColorTagShownInBrowser':
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#labelBrowserId1").after("<input id='inputFieldColorInBrowser'>");
					setTimeoutFunction();
				});
				dynamicSteps("#inputColorTag", "colorTypeAttrAppend");
				break;
			case 'inputColorEditableByUserInBrowser':
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#inputFieldColorInBrowser").attr({type:"color", name:"favcolor"});
					var text = "Click on input box then it will shows color table in that you can select any color.";
					typing(".introjs-tooltiptext", text, typingInterval, function() {
						$("#inputFieldColorInBrowser").focus();
						$("#inputFieldColorInBrowser").click(function() { 
							$(".introjs-nextbutton").show(); 
						});
						$("#inputColorTag").after('&lt;br&gt;&lt;br&gt;<br>\t\t<span id="labelText2" class="opacity00">&lt;label&gt;Birthday:&lt;/label&gt;</span>');
						dynamicSteps("#labelText2", "", "hide");
					});
				});
				break;
	/*** type="date" steps in browser ***/	
			case 'inputDateTagShownInBrowser':
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#labelBrowserId2").after("<input id='inputFieldDateInBrowser'>");
					setTimeoutFunction();
				});
				dynamicSteps("#inputDateTag", "dateTypeAttrAppend");
				break;
			case 'inputDateEditableByUserInBrowser':
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#inputFieldDateInBrowser").attr({type:"date", name:"bday"});
					var text = 'Click on input box and observe the function of <span class="ct-code-b-yellow">type="date"</span>.';
					typing(".introjs-tooltiptext", text, typingInterval, function() {
						$("#inputFieldDateInBrowser").focus();
						$("#inputFieldDateInBrowser").on("click keyup", function() { 
							$(".introjs-nextbutton").show(); 
						});
						$("#inputDateTag").after('&lt;br&gt;&lt;br&gt;<br>\t\t<span id="labelText3" class="opacity00">&lt;label&gt;Birthday (date and time):&lt;/label&gt;</span>');
						dynamicSteps("#labelText3","", "hide");
					});
				});
				break;
	/*** type="datetime-local" steps in browser ***/
			case 'inputDateTimeLocalEditableByUserInBrowser':
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#inputFieldDateTimeLocalInBrowser").attr({type:"datetime-local", name:"bdaytime"});
					var text = 'Click on input box and observe the function of <span class="ct-code-b-yellow">type="datetime-local"</span>.';
					typing(".introjs-tooltiptext", text, typingInterval, function() {
						$("#inputFieldDateTimeLocalInBrowser").focus();
						$("#inputFieldDateTimeLocalInBrowser").on("click keyup", function() { 
							$(".introjs-nextbutton").show(); 
						});
						 $("#inputDateTimeLocalTag").after('&lt;br&gt;&lt;br&gt;<br>\t\t<span id="labelText4" class="opacity00">'+
								 '&lt;label&gt;Birthday (month and year):&lt;/label&gt;</span>');
						dynamicSteps("#labelText4","", "hide");
					});
				});
				break;
	/*** type="month" steps in browser ***/
			case 'inputMonthEditableByUserInBrowser':
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#inputFieldMonthInBrowser").attr({type:"month", name:"bdaymonth"});
					var text = 'Click on input box and observe the function of <span class="ct-code-b-yellow">type="month"</span>.';
					typing(".introjs-tooltiptext", text, typingInterval, function() {
						$("#inputFieldMonthInBrowser").focus();
						$("#inputFieldMonthInBrowser").on("click keyup", function() { 
							$(".introjs-nextbutton").show(); 
						});
						$("#inputMonthTag").after('&lt;br&gt;&lt;br&gt;<br>\t\t<span id="labelText5" class="opacity00">&lt;label&gt;Quantity:&lt;/label&gt;</span>');
						dynamicSteps("#labelText5","", "hide");
					});
				});
				break;
	/*** type="number" steps in browser ***/
			case 'inputNumberEditableByUserInBrowser':
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#inputFieldNumberInBrowser").attr({type:"number", name:"quantity"});
					var text = 'Click on input box and observe the function of <span class="ct-code-b-yellow">type="number"</span>.';
					typing(".introjs-tooltiptext", text, typingInterval, function() {
						$("#inputFieldNumberInBrowser").focus();
						$("#inputFieldNumberInBrowser").on("keyup click", function(e) { 
							$(".introjs-nextbutton").show(); 
						});
						dynamicSteps("#inputNumberTag", "minAttrAppendInTypeNumber");
					});
				});
				break;
			case 'inputNumbeMinMaxrEditableByUserInBrowser':
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#inputFieldNumberInBrowser").attr({min:"1", max:"6"});
					var text = 'Click on input box and observe the function of <span class="ct-code-b-yellow">min</span> and '+
						'<span class="ct-code-b-yellow">max</span> attributes.';
					typing(".introjs-tooltiptext", text, typingInterval, function() {
						$("#inputFieldNumberInBrowser").focus();
						$("#inputFieldNumberInBrowser").on("keyup click", function(e) { 
							$(".introjs-nextbutton").show(); 
						});
						$("#inputNumberTag").after('&lt;br&gt;&lt;br&gt;<br>\t\t<span id="labelText6" class="opacity00">&lt;label&gt;Range:&lt;/label&gt;</span>');
						dynamicSteps("#labelText6","", "hide");
					});
				});
				break;
	/*** type="range" steps in browser ***/
			case 'inputRangeEditableByUserInBrowser':
				$('.introjs-helperLayer').one('transitionend', function() {
				//	$("#inputFieldRangeInBrowser").attr({type:"range", name:"points"});
					TweenMax.to($("#inputFieldRangeInBrowser"), 1, {attr: {"type": "range"}});
					TweenMax.to($("#inputFieldRangeInBrowser"), 1, {attr: {"name": "points"}, onComplete: function() {
						introjs.refresh();
						setTimeout(function() {
						$(".introjs-tooltip").removeClass("hide");
						var helpLayerHeight = $(".introjs-helperLayer").height();
						$(".introjs-tooltip").css("top", helpLayerHeight + 8);
						var text = 'Click on input box and observe the function of <span class="ct-code-b-yellow">type="range"</span>.';
						typing(".introjs-tooltiptext", text, typingInterval, function() {
							$("#inputFieldRangeInBrowser").focus();
							$("#inputFieldRangeInBrowser").click(function() { 
								$(".introjs-nextbutton").show();
								/* $('#inputFieldRangeInBrowser').popover({
									placement: 'right',
									html: true,
									trigger: "focus",
									content: 'range is <span class="ct-code-b-yellow">' + $("#inputFieldRangeInBrowser").val() + '</span>.',
								});
								$('#inputFieldRangeInBrowser').popover('show');
								$("#inputFieldRangeInBrowser").popover('hide', 3000); 
								$("#inputFieldRangeInBrowser").popover({delay: {'show': '500', 'hide': '100'}}); */
							});
							dynamicSteps("#inputRangeTag", "minAttrAppendInTypeRange");
						});
						}, 1500);
					}});				
				});
				break;
			case 'inputRangeMinMaxEditableByUserInBrowser':
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#inputFieldRangeInBrowser").attr({min:"0", max:"10"});
					var text ="click."
					typing(".introjs-tooltiptext", text, typingInterval, function() {
						$("#inputFieldRangeInBrowser").focus();
						$("#inputFieldRangeInBrowser").click(function() { 
							$(".introjs-nextbutton").show(); 
						});
						$("#inputRangeTag").after('&lt;br&gt;&lt;br&gt;<br>\t\t<span id="labelText7" class="opacity00">&lt;label&gt;Email:&lt;/label&gt;</span>');
						dynamicSteps("#labelText7","", "hide");
					});
				});
				break;
	/*** type="email" steps in browser ***/
			case 'inputEmailEditableByUserInBrowser':
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#inputFieldEmailInBrowser").attr({type:"email", name:"Email"});
					var text = 'Enter your email id here.';
					typing(".introjs-tooltiptext", text, typingInterval, function() {
						$("#inputFieldEmailInBrowser").focus();
						$("#inputFieldEmailInBrowser").on("keyup click", function(e) { 
							$(".introjs-nextbutton").show(); 
						});
						$("#inputEmailTag").after('&lt;br&gt;&lt;br&gt;<br>\t\t<span id="labelText8" class="opacity00">&lt;label&gt;Search Google:&lt;/label&gt;</span>');
						dynamicSteps("#labelText8","", "hide");
					});
				});
				break;
	/*** type="search" steps in browser ***/
			case 'inputSearchEditableByUserInBrowser':
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#inputFieldSearchInBrowser").attr({type:"search", name:"googlesearch"});
					var text = 'Enter your search text here.';
					typing(".introjs-tooltiptext", text, typingInterval, function() {
						$("#inputFieldSearchInBrowser").focus();
						$("#inputFieldSearchInBrowser").on("keyup click", function(e) {
							$(".introjs-nextbutton").show(); 
						});
						$("#inputSearchTag").after('&lt;br&gt;&lt;br&gt;<br>\t\t<span id="labelText9" class="opacity00">&lt;label&gt;Telephone:&lt;/label&gt;</span>');
						dynamicSteps("#labelText9","", "hide");
					});
				});
				break;
	/*** type="tel" steps in browser ***/
			case 'inputTelEditableByUserInBrowser':
				introjs.refresh();
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#inputFieldTelInBrowser").attr({type:"tel", name:"usrtel"});
					var text = 'Enter your telephone number here.';
					typing(".introjs-tooltiptext", text, typingInterval, function() {
						$("#inputFieldTelInBrowser").focus();
						$("#inputFieldTelInBrowser").on("keyup click", function(e) {
							$(".introjs-nextbutton").show(); 
						});
						$("#inputTelTag").after('&lt;br&gt;&lt;br&gt;<br>\t\t<span id="labelText10" class="opacity00">&lt;label&gt;Select a time:&lt;/label&gt;</span>');
						dynamicSteps("#labelText10","", "hide");
					});
				});
				break;
	/*** type="time" steps in browser ***/
			case 'inputTimeEditableByUserInBrowser':
				introjs.refresh();
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#inputFieldTimeInBrowser").attr({type:"time", name:"usr_time"});
					var text = 'Enter time here.';
					typing(".introjs-tooltiptext", text, typingInterval, function() {
						$("#inputFieldTimeInBrowser").focus();
						$("#inputFieldTimeInBrowser").on("keyup click", function() { 
							$(".introjs-nextbutton").show(); 
						});
						$("#inputTimeTag").after('&lt;br&gt;&lt;br&gt;<br>\t\t<span id="labelText11" class="opacity00">'+
							'&lt;label&gt;Add your home page:&lt;/label&gt;</span>');
						dynamicSteps("#labelText11","", "hide");
					});
				});
				break;
	/*** type="url" steps in browser ***/
			case 'inputUrlEditableByUserInBrowser':
				introjs.refresh();
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#inputFieldUrlInBrowser").attr({type:"url", name:"homepage"});
					var text = 'Enter your url here.';
					typing(".introjs-tooltiptext", text, typingInterval, function() {
						$("#inputFieldUrlInBrowser").focus();
						$("#inputFieldUrlInBrowser").on("keyup click", function(e) {
							$(".introjs-nextbutton").show(); 
						});
						$("#inputUrlTag").after('&lt;br&gt;&lt;br&gt;<br>\t\t<span id="labelText12" class="opacity00">'+
							'&lt;label&gt;Select a week:&lt;/label&gt;</span>');
						dynamicSteps("#labelText12","", "hide");
					});
				});
				break;
	/*** type="week" steps in browser ***/
			case 'inputWeekEditableByUserInBrowser':
				introjs.refresh();
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#inputFieldWeekInBrowser").attr({type:"week", name:"week_year"});
					var text = 'Enter week here.';
					typing(".introjs-tooltiptext", text, typingInterval, function() {
						$("#inputFieldWeekInBrowser").focus();
						$("#inputFieldWeekInBrowser").on("keyup click", function() {
							$(".introjs-nextbutton").show(); 
						});
						$("#inputWeekTag").after('&lt;br&gt;&lt;br&gt;<br>\t\t<span id="labelText13" class="opacity00">'+
							'&lt;input type="submit" value="Submit"&gt;<br>\t\t&lt;input type="reset"&gt;');
						dynamicSteps("#labelText13","", "hide");
					});
				});
				break;
	/*** submitted form data action steps in browser ***/
			case 'submittedFormDataAction':
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Click on <span class='ct-code-b-yellow'>submit</span> button to submit your form inputs."
					typing(".introjs-tooltiptext", text, typingInterval, function() {
						$("#submitBtn").on("click", function() {
							if (validateForm()) {
								submitForm();
							} else {
								errorCorrectionValidateForm();
							}
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
				$("#restart").fadeTo(1000, 1);
				$("#restart").removeClass("opacity00");
			});
			break;
		}
	});
	introjs.start();
}

function submitForm() {
	$(".fa-rotate-right").addClass("fa-spin");
	$(".introjs-tooltip").hide();
	setTimeout(function() {
		introjs.refresh();
		$(".fa-rotate-right").removeClass("fa-spin");
		$("#htmlBody").hide();
		$("#dynamicHtmlBody").show();
		$("#titleTextInBrowser").text("");
		$("#titleTextInBrowser").append("action_page.jsp").effect('highlight',{color:'yellow'}, 1000);
		$(".fa-arrow-left").css("color", "#3c3f3b");
		submittedFormData();
	}, 2000);
	
	$(".fa-arrow-left").click(function() {
		$('.fa-arrow-left').popover('hide');
		introjs.refresh();
		$("#htmlBody").show();
		$("#dynamicHtmlBody").hide();
		$(".fa-arrow-left").css("color", "lightgray");
		$("#titleTextInBrowser").text("");
		$("#titleTextInBrowser").append("HTML input types");
		for( i =0; i < $("#dynamicHtmlBody span").length; i++) {
			$("#dynamicHtmlBody span:eq("+ i +")").text("");
		}
	});
	
	$(".fa-rotate-right").on('click', function(e) {
		e.preventDefault();
	});
}

function dispalyTextDirectly(elementId1, elementId2, callBackFunction) {
	$('.introjs-helperLayer').one('transitionend', function() {
		TweenMax.to($(elementId1), 1.5, {opacity: 1, onComplete: function() {
			transferEffectPreToBrowser($(elementId1), $(elementId2), function() {
				setTimeoutFunction();
			});
		}});
	});
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
	$(id).removeClass("opacity00").addClass("animated zoomIn z-index").one('animationend', function() {
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

function validation(selector1, selector2) {
	var textInput = $(selector1).text();
	var w = $(selector1).width();
	var l = textInput.length;
	var text = "Enter <span class='ct-code-b-yellow'>"+$(selector1).html()+ "</span>";
	typing('.introjs-tooltiptext', text, typingInterval, function() {
		$(selector1).empty().removeClass('opacity00'); 
		$(selector1).append('<input id="'+selector2+'" class="dynamic-input" style="width: '+ (w + 3) +'px;" maxlength='+ (l + 3) +'>');
		keyCodeCondition("#"+selector2, textInput);
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
		if(e.altKey && e.keyCode == 77) {
			$(this).val(tag);
		}
		$('.length-error-text').remove();
		introjs.refresh();
		if ($(id).val().trim() == tag || $(id).text().trim() == tag) {
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
		$(selector1).removeClass("z-index");
		$(selector2).removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function transferEffectPreToBrowser(selector1, selector2, callBackFunction) {
	$("#browserDiv").addClass("z-index");
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 200 , function() {
	//	$(selector1).removeClass("z-index");
		$(selector2).removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function setTimeoutFunction() {
	setTimeout(function() {
		introjs.nextStep();
	},200);
}

function submittedFormData() {
	/* var inputTypes = ["Color", "Date", "DateTimeLocal", "Month", "Number", "Range", "Email", "Search", "Tel", "Time", "Url", "Week"];
	for ( i =0; i < $("#dynamicHtmlBody span").length; i++) {
		   $("#dynamicHtmlBody span:eq("+ i +")").append($("#inputField" + inputTypes[i] + "InBrowser").attr("name"));
	} */
	
	var arr=[];
	$.each($("[name]"),function(i, val) {
		arr.push($(val).attr('name'));
	});
	for(i = 0; i < $("#dynamicHtmlBody > span").length; i++) {
		$("#dynamicHtmlBody > span:eq("+ i +")").append('<span class="color-blue">' + arr[i] + ' : </span>' + $("input[name = " + arr[i] + "]").val());
	}
	setTimeout(function() {
		introjs.refresh();
		$("#restart").fadeTo(1000, 1);
		$("#restart").removeClass("opacity00");
		$("#browserDiv, #preCode, #restart").addClass("z-index");
		$('.fa-arrow-left').popover({
			placement: 'left',
			html: true,
			trigger: "focus",
			content: 'Click here to get back input form and you can edit input data and resubmit the form.',
		});
		$('.fa-arrow-left').popover('show');
	}, 2000);
}

function validateForm() {
	
	var flag = true;
	
	var x = $("input[type = email]").val();
	var atPos = x.indexOf("@");
	var dotPos = x.lastIndexOf(".");
	if (atPos < 1 || dotPos < (atPos+2) || (dotPos+2) >= x.length) {
		$("input[type = email]").focus().addClass("input-error-color");
		flag = false;
	} 
	
	var url = $("input[type = url]").val();
	var re = /[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%\,\{\}\\|\\\^\[\]`]+)?$/;
	if (!(re.test(url))) { 
		$("input[type = url]").focus().addClass("input-error-color");
	//	effect('highlight',{color:'yellow'}, 10000);;
		flag = false;
	}
	
	var number = $("input[type = number]").val();
	if (number < 0 || number > 7) {
		$("input[type = number]").focus().addClass("input-error-color");
		flag = false;
	} 
	
	var date = $("input[type = date]").val();
	var dateformat = /^\d{4}\-\d{1,2}\-\d{1,2}$/;
	if (!(date.match(dateformat))) {
		$("input[type = date]").focus().addClass("input-error-color");
		flag = false;
	}
	
	var time = $("input[type = time]").val();
	var isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/;
	if (!(isValid.test(time))) {
		$("input[type = time]").focus().addClass("input-error-color");
		flag = false;
	}
	
	var dateTime = $("input[type = datetime-local]").val();
	if(dateTime == "" || dateTime == null) {
		$("input[type = datetime-local]").focus().addClass("input-error-color");
		flag = false;
	}
    
	var month = $("input[type = month]").val();
	if(month == "" || month == null) {
		$("input[type = month]").focus().addClass("input-error-color");
		flag = false;
	}
    
	var week = $("input[type = week]").val();
	if(week == "" || week == null) {
		$("input[type = week]").focus().addClass("input-error-color");
		flag = false;
	}
	
	return flag;
	
}

function errorCorrectionValidateForm() {
	$("input[type = email]").on("keyup click", function() {
		$("input[type = email]").removeClass("input-error-color");
	});

	$("input[type = url]").on("keyup click", function() {
		$("input[type = url]").removeClass("input-error-color");
	});

	$("input[type = number]").on("keyup click", function() {
		$("input[type = number]").removeClass("input-error-color");
	});

	$("input[type = date]").on("keyup click", function() {
		$("input[type = date]").removeClass("input-error-color");
	});

	$("input[type = time]").on("keyup click", function() {
		$("input[type = time]").removeClass("input-error-color");
	});
	$("input[type = datetime-local]").on("keyup click", function() {
		$("input[type = datetime-local]").removeClass("input-error-color");
	});
	$("input[type = month]").on("keyup click", function() {
		$("input[type = month]").removeClass("input-error-color");
	});
	$("input[type = week]").on("keyup click", function() {
		$("input[type = week]").removeClass("input-error-color");
	});
}



/* function validateFormAnother(e) {
	var x = $("input[type = email]").val();
	var atpos = x.indexOf("@");
	var dotpos = x.lastIndexOf(".");
	if (atpos < 1 || dotpos < atpos+2 || dotpos+2 >= x.length) {
		alert("Not a valid e-mail address");
		return false;
	}
    
	var url = $("input[type = url]").val();
	var re = /[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/;
	if (!re.test(url)) { 
		alert("url error");
	} else{
		alert('success')
	} 	
	
	var number = $("input[type = number]").val();
	if (number >= 1 || number =< 6) {
		true;
	}  else {
		false;
	}
	
	var date = $("input[type = date]").val();
	var dateformat = /^\d{4}\-\d{1,2}\-\d{1,2}$/;
	if (date.match(dateformat) ) {
		true;
	} else {
	    false; 
	}
	
	var time = $("input[type = time]").val();
	var isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/;
	if (isValid.test(time)) {
		true;
	} else {
	    false; 
	}
	
 	2017-05-02T04:10
	var dateformat = /^\d{4}\-\d{1,2}\-\d{1,2}\T\d{1,2}\:\d{1,2}$/; 
} */
</script>
</html>