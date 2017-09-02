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
<title>Insert title here</title>

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

.html-body {
	min-height: 263px;
	background: white;
}

.margin-top5 {
	margin-top: 5px;
}

pre {
	-moz-tab-size: 3;
	tab-size: 3;
	font-size: 12px;
}

.margin-top-5 {
	margin-top: 5%;
}

.margin-top-1 {
	margin-top: 1%;
	margin-bottom: 1%;
}

.dynamic-input {
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

.ct-color-turquoise {
	color: turquoise;
}

.z-index {
	z-index: 9999999;
	position: relative;
	background-color: white;
	padding: 4px;
	border-radius: 4px;
}


input {
	outline: none;
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
span {
	outline: none;
}
.display-block {
	display: inline-block;
	outline: none;
}

.popover-content {
	background-color: darkseagreen;
	color: black;
	min-height: 28px;
	width: 206px;
}

.popover {
	z-index: 9999996;
}

.color-blue {
	color: midnightblue;
	font-weight: bold;
}

.margin-top20 {
	margin-top: 20px;
}
</style>
</head>
<body>
<div class="col-xs-12">
	<div class="text-center margin-top-1">
		<h3 class='label ct-demo-heading' id="heading">
			<span>HTML input Types</span>
		</h3>
	</div>
	<div class="col-xs-5 margin-top-5">
<pre id="preCode">
<span id="doctype" class="opacity00">&lt;!DOCTYPE html&gt;</span>
<span id="openHtml" class="opacity00">&lt;html&gt;</span>
	<span id="openHead" class="opacity00">&lt;head&gt;</span>
		<span id="title" class="opacity00">&lt;title&gt;HTML input types&lt;/title&gt;</span>
	<span id="closeHead" class="opacity00">&lt;/head&gt;</span>
	<span id="openBody" class="opacity00">&lt;body&gt;</span>
		<span id="openForm" class="opacity00">&lt;form&gt;</span>
			<span id="firstLabel"><span id='openLabel' class="opacity00">&lt;label&gt;</span><span id='labelText' class="opacity00">Username:</span><span id='closeLabel' class="opacity00">&lt;/label&gt;</span></span>
			<span id="inputTag" class="opacity00">&lt;input&gt;</span>
		<span id="closeForm" class="opacity00">&lt;/form&gt;</span>
	<span id="closeBody" class="opacity00">&lt;/body&gt;</span>
<span id="closeHtml" class="opacity00">&lt;/html&gt;</span>
</pre>
	
	</div>
	<div class='container col-xs-6 margin-top-5 opacity00' id="browserDiv">
		<div class='tab-container'>
			<ul class="tabs clearfix" >
				<li class="active">
					<div class="col-xs-12 padding00 margin-top20" id="titleTextInBrowser">HTML input types</div>
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
			<!-- <img src="/css/images/logo-in-black-text.jpg" width="20%"> -->
			<form class="margin-top-1">
				<label class="opacity00" id="labelBrowserId1">Username:</label>
				<br><br>
				<label class="opacity00" id="labelBrowserId2">Password:</label>
				<br><br>
				<label class="opacity00" id="labelBrowserId3"></label>
				<br><br>
				<span class="opacity00" id="spanBrowserId4"></span>
				<br><br>
				<span class="opacity00" id="spanBrowserId5"></span>
				<br><br>
				<span class="opacity00" id="spanBrowserId6"></span>
			</form>
		</div>
		<div class="col-xs-12" id="dynamicHtmlBody" hidden="true" style="min-height: 288px;  background: papayawhip">
			<img src="../images/logo-in-black-text.jpg" width="20%" style="margin-left: 40%;"><br>
			<h2 style="font-style:italic;">Submitted Form Data</h2>
			<span id="line1"></span><br><br>
			<span id="line2"></span><br><br>
			<span id="line3"></span><br><br>
			<span id="line4"></span><br><br>
			<span id="line5"></span>
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
			intro : ''
		}, {
			element : '#closeForm',
			intro : ''
		}, {
			element : '#openLabel',
			intro : ''
		}, {
			element : '#closeLabel',
			intro : ''
		}, {
			element : '#labelText',
			intro : ''
		}, {
			element : '#browserDiv',
			intro : '',
			animateStep : 'firstStep',
			tooltipClass : 'hide'
		}, {
			element : '#inputTag',
			intro : '',
			animateStep : 'inputTagEnterByUser'
		}, {
			element : '#browserDiv',
			intro : '',
			animateStep : 'inputTagOpen',
			tooltipClass : 'hide'
		}, {
			element : '#inputTag',
			intro : '',
			animateStep : 'attrAppend'
		}, {
			element : '#inputTag',
			intro : '',
			animateStep : 'attrNameAppend'
		}, {
			element : '#inputTag',
			intro : '',
			animateStep : 'attrValueAppend'
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
		var elementId = targetElement.id;
		switch(elementId) {
		case'preCode':
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
			$("#browserDiv").removeClass("z-index");
			customIntro(elementId);
			break;
		case 'closeForm':
			customIntro(elementId);
			break;
/*** type="text" steps in preCode  ***/		
		case 'openLabel':
			customIntro(elementId);
			break;
		case 'closeLabel':
			customIntro(elementId);
			break;
		case 'labelText':
			customIntro(elementId);
			break;
		case 'inputTag':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'inputTagEnterByUser':
				customIntro(elementId);
				break;
			case 'attrAppend':
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#inputTag").text("");
					$("#inputTag").append('&lt;input <input id="typeText" type="text" size="11" maxlength="11" spellcheck="false" class="dynamic-input"'
									+ '/>&gt;');
					var text = 'enter here <span class="ct-code-b-yellow">type="text"</span>';
					typing(".introjs-tooltiptext", text, typingInterval, function() {
						keyCodeCondition("#typeText", 'type="text"');
					});
				});
				break;
			case 'attrNameAppend':
				$("#inputTag").text("");
				$("#inputTag").append('&lt;input type="text" <input id="nameText" type="text" size="15" maxlength="15" spellcheck="false"'
									+ ' class="dynamic-input"/>&gt;');
				var text = 'enter here <span class="ct-code-b-yellow">name="Username"</span>';
				typing(".introjs-tooltiptext", text, 30, function() {
					keyCodeCondition("#nameText", 'name="Username"');
					dynamicSteps("#browserDiv", "inputEditableByUser");
				});
				break;
			case 'attrValueAppend':
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#inputFieldInBrowser").val("");
					$("#inputTag").text("");
					$("#inputTag").append('&lt;input type="text" name="Username" ' + 
						'<input id="valueText" type="text" maxlength="18" size="18" class="dynamic-input" spellcheck="false"/>&gt;');
					var text = 'enter here <span class="ct-code-b-yellow">value="codetantra"</span>';
					typing(".introjs-tooltiptext", text, 10, function() {
						keyCodeCondition("#valueText", 'value="codetantra"');
						dynamicSteps("#browserDiv", "inputValueEditableByUser");
					});
				});
				break;
			}
			break;
/*** Action in browser steps start  ***/			
		case 'browserDiv':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'firstStep':
				$(".introjs-helperLayer").one("transitionend", function() {
					transferEffect("#firstLabel", "#labelBrowserId1", function() {
						$("#labelBrowserId1").removeClass("opacity00");
						setTimeoutFunction();
					});
				});
				break;
	/*** steps in type="text"   ***/			
			case 'inputTagOpen':
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#labelBrowserId1").after("<input id='inputFieldInBrowser' spellcheck='false'>");
					setTimeoutFunction();
				});
				break;
			case 'inputEditableByUser':
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "You can write a text in input field.";
					typing(".introjs-tooltiptext", text, typingInterval, function() {
						$("#inputFieldInBrowser").focus();
						$("#inputFieldInBrowser").on("keyup", function(e) {
							$(".introjs-nextbutton").show();
						});
					});
				});
				break;
			case 'inputValueEditableByUser':
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The <span class='ct-code-b-yellow'>value</span> attribute specifies the initial (default) values "+
						"of an <span class='ct-code-b-yellow'>&lt;input&gt;</span> element.<br><span id='typingText1'></span>";
					typing(".introjs-tooltiptext", text, typingInterval, function() {
						$("#inputFieldInBrowser").attr("type", "text");
						$("#inputFieldInBrowser").attr("name", "Username");
						$("#inputFieldInBrowser").val("codetantra");
						$("#inputFieldInBrowser").focus();
						typing("#typingText1", 'You can also edit the input field.', typingInterval, function() {
							$("#inputFieldInBrowser").on("keyup", function(e) {
								$(".introjs-nextbutton").show();
							});
						});
					});
				});
				$("#inputTag").after("<br>\t\t<span id='brakeId1'>&lt;br&gt;&lt;br&gt;</span>");
				$("#brakeId1").after("<br>\t\t<span id='openLabel2' class='opacity00'>&lt;label&gt;</span>"+
				"<span id='labelPswdText' class='opacity00'>Password:</span><span id='closeLabel2' class='opacity00'>&lt;/label&gt;</span>");
				$("#closeLabel2").after("<br>\t\t<span id='inputPswdTag' class='opacity00'>&lt;input&gt;</span>");
				dynamicSteps("#openLabel2");
				break;
	/*** steps in type="password"   ***/
			case 'labelPswdShow':
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#labelBrowserId2").removeClass("opacity00");
					setTimeoutFunction();
					dynamicSteps("#inputPswdTag", "inputPswdTagEnterByUser");
				});
				break;
			case 'labelPswdShowInBrowser':
				$(".introjs-tooltip").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#labelBrowserId2").after("<input id='inputFieldPswdInBrowser'>");
					setTimeoutFunction();
					dynamicSteps("#inputPswdTag", "pswdAttrAppend");
				});
				break;
			case 'inputPswdEditableByUser':
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Enter The characters in a <span class='ct-code-b-yellow'>password field</span> are masked "+
						"(shown as <span class='ct-code-b-yellow'>asterisks</span> or <span class='ct-code-b-yellow'>circles</span>).<br>"+
						"Enter some text and see how <span class='ct-code-b-yellow'>password</span> type attribute display in input field.";
					typing(".introjs-tooltiptext", text, typingInterval, function() {
						$("#inputFieldPswdInBrowser").focus();
						$("#inputFieldPswdInBrowser").attr("type","password");
						$("#inputFieldPswdInBrowser").attr("name","psw");
						$("#inputFieldPswdInBrowser").on("keyup", function(e) {
							$(".introjs-nextbutton").show();
						});
					});
				});
				$("#inputPswdTag").after("<br>\t\t<span id='brakeId2'>&lt;br&gt;&lt;br&gt;</span>");
				$("#brakeId2").after("<br>\t\t<span id='inputButtonTag' class='opacity00'>&lt;input&gt;</span>");
				dynamicSteps("#inputButtonTag", "inputButtonTagEnterByUser");
				break;
	/*** steps in type="button"   ***/		
			case 'InputButtonShowInBrowser':
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#labelBrowserId3").after("<input id='inputFieldButtonInBrowser'>");
					setTimeoutFunction();
					dynamicSteps("#inputButtonTag", "buttonTypeAttrAppend");
				});
				break;
			case 'inputButtonClickByUser':
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#inputFieldButtonInBrowser").attr("type", "button");
					$("#inputFieldButtonInBrowser").attr("onclick", "alert('Hello')");
					$("#inputFieldButtonInBrowser").attr("value", "Click Me!");
					dynamicSteps("#inputRadioTag", "inputRadioTagEnterByUser");
					var text = "Click the button to display an alert box."
					typing(".introjs-tooltiptext", text, typingInterval, function() {
						$("#inputFieldButtonInBrowser").click(function() {
							$(".introjs-nextbutton").show();
						});
					});
					$("#inputButtonTag").after("<br>\t\t<span id='brakeId3'>&lt;br&gt;&lt;br&gt;</span>");
					$("#brakeId3").after("<br>\t\t<span id='inputRadioTag' class='opacity00'>&lt;input&gt;</span>");
					dynamicSteps("#inputRadioTag", "inputRadioTagEnterByUser");
				});
				break;
		/*** steps in type="radio"   ***/
			case 'inputRadioShow':
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#spanBrowserId4").removeClass("opacity00");
					$("#spanBrowserId4").append('<input id="inputFieldRadioInBrowser">');
					setTimeoutFunction();
					dynamicSteps("#inputRadioTag", "typeTextInTypeRadio");
				});
				break;
			case 'radioButtonShownInBrowser':
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#inputFieldRadioInBrowser").attr("type","radio");
					$("#inputFieldRadioInBrowser").attr("value","male");
					$("#inputFieldRadioInBrowser").attr("name","gender");
					$("#inputFieldRadioInBrowser").after("Male");
					dynamicSteps("#inputRadioTagFemale");
					setTimeoutFunction();
				});
				break;
			case 'inputRadioTagFemaleShownInBrowser':
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#spanBrowserId4").after('<input id="inputFieldRadioInBrowser2" type="radio" name="gender" value="female">Female');
					var text = 'Radio buttons are used when out of many options, just one option is required to be selected. Here select two '+
					'radio buttons and observe the action of <span class="ct-code-b-yellow">type="radio"</span> attribute.';
					typing(".introjs-tooltiptext", text, typingInterval, function() {
						$("[type=radio]").click(function() {
							  $(".introjs-nextbutton").show();
						});
					});
					$("#inputRadioTagFemale").after("<br>\t\t<span id='brakeId4'>&lt;br&gt;&lt;br&gt;</span>");
					$("#brakeId4").after("<br>\t\t<span id='inputCheckBoxTag' class='opacity00'>&lt;input&gt;</span>");
					dynamicSteps("#inputCheckBoxTag", "inputCheckBoxTagEnterByUser");
				});
				break;
		/*** steps in type="checkbox"   ***/
			case 'inputCheckBoxShow':
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#spanBrowserId5").removeClass("opacity00");
					$("#spanBrowserId5").append('<input id="inputFieldCheckBoxInBrowser">');
					setTimeoutFunction();
					dynamicSteps("#inputCheckBoxTag", "typeTextInTypeCheckBox");
				});
				break;
			case 'CheckBoxButtonShownInBrowser':
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#inputFieldCheckBoxInBrowser").attr("type","checkbox");
					$("#inputFieldCheckBoxInBrowser").attr("name","language1");
					$("#inputFieldCheckBoxInBrowser").attr("value","java");
					$("#inputFieldCheckBoxInBrowser").after("I learn java");
					dynamicSteps("#inputCheckBoxTagAnother");
					setTimeoutFunction();
				});
				break;
			case 'inputCheckBoxTagAnotherShownInBrowser':
				$(".introjs-tooltip").hide();
				$("#spanBrowserId5").after('<br><input id="inputFieldCheckBoxInBrowser2" class="opacity00" type="checkbox" name="language2" value="C">I learn C');
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					TweenMax.to($("#inputFieldCheckBoxInBrowser2"), 1, {opacity: 1, onComplete: function() {
						$(".introjs-tooltip").show();
						var text ="Checkboxes are used when more than one option is required to be selected. Select the above Checkboxes and observe " +
							"the action of <span class='ct-code-b-yellow'>checkbox</span> attribute."
						typing(".introjs-tooltiptext", text, typingInterval, function() {
							$("[type=checkbox]").click(function() {
								  $(".introjs-nextbutton").show();
							});
						});
					}});
					$("#inputCheckBoxTagAnother").after("<br>\t\t<span id='brakeId5'>&lt;br&gt;&lt;br&gt;</span>");
					$("#brakeId5").after("<br>\t\t<span id='inputSubmitTag' class='opacity00'>&lt;input&gt;</span>");
					dynamicSteps("#inputSubmitTag", "inputSubmitTagEnterByUser");
				});
				break;
	/*** steps in type="submit"   ***/
			case 'inputSubmitShow':
				$("#spanBrowserId6").append('<input id="inputFieldSubmitInBrowser">');
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#spanBrowserId6").removeClass("opacity00");
					setTimeoutFunction();
					dynamicSteps("#inputSubmitTag", "typeTextInTypeSubmit");
				});
				break;
			case 'submitButtonShownInBrowser':
				$("#openForm").text("");
				$("#openForm").append('&lt;form action="/action_page.jsp"&gt;');
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#inputFieldSubmitInBrowser").attr("type","button");
					$("#inputFieldSubmitInBrowser").attr("value","Submit");
					$("#inputFieldSubmitInBrowser").attr("disabled", true);
					$("#inputSubmitTag").after('<br>\t\t<span id="inputResetTag" class="opacity00">&lt;input type="reset"&gt;</span>');
					setTimeoutFunction();
					dynamicSteps("#inputResetTag");
				});
				break;
			case 'inputResetTagShownInBrowser':
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#inputFieldSubmitInBrowser").after('<input id="inputFieldResetInBrowser" type="reset">');
					$("#inputFieldResetInBrowser").attr("disabled", true);
					setTimeoutFunction();
					dynamicSteps("#inputFieldSubmitInBrowser");
				});
				break;
			case 'actionOfSubmitAndResetButtons':
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = 'Here first click on reset button and observe the usage of <span class="ct-code-b-yellow">type="reset"</span> '+
					'attribute and then fill all the input fields then click on the submit button.';
					typing(".introjs-tooltiptext", text, typingInterval, function() {
						submitForm();
					});
				});
				break;
			}
			break;
		case 'inputFieldSubmitInBrowser':
			$("#inputFieldSubmitInBrowser").attr("disabled", true);
			$("#inputFieldResetInBrowser").attr("disabled", true);
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = '<span class="ct-code-b-yellow">&lt;input type="submit"&gt;</span> defines a button for submitting form data '+
				'to a form-handler. The form-handler is typically a server page with a script for processing input data. '+
				'The form-handler is specified in the form\'s <span class="ct-code-b-yellow">action</span> attribute.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$("#openForm").addClass("z-index blinking");
					$(".introjs-nextbutton").show();
					dynamicSteps("#inputFieldResetInBrowser");
				});
			});
			break;
		case 'inputFieldResetInBrowser':
			$("#openForm").removeClass("z-index blinking");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = '<span class="ct-code-b-yellow">&lt;input type="reset"&gt;</span> defines a reset button that will reset all '+
				'form values to their default values.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
					dynamicSteps("#browserDiv", "actionOfSubmitAndResetButtons");
				});
			});
			break;
/*** Action in browser steps ends here  ***/

/*** type="password" steps in preCode  ***/
		case 'openLabel2':
			customIntro(elementId);
			dynamicSteps("#closeLabel2");
			break;
		case 'closeLabel2':
			customIntro(elementId);
			dynamicSteps("#labelPswdText");
			break;
		case 'labelPswdText':
			customIntro(elementId);
			dynamicSteps("#browserDiv", "labelPswdShow", "hide");
			break;
		case 'inputPswdTag':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'inputPswdTagEnterByUser':	
				customIntro(elementId);
				dynamicSteps("#browserDiv", "labelPswdShowInBrowser", "hide");
				break;
			case 'pswdAttrAppend':
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#inputPswdTag").text("");
					$("#inputPswdTag").append('&lt;input <input id="typePassword" class="dynamic-input" type="text" maxlength="15" size="15"'
										+ ' spellcheck="false">&gt;');
					var text = 'enter here <span class="ct-code-b-yellow">type="password"</span>';
					typing(".introjs-tooltiptext", text, typingInterval, function() {
						keyCodeCondition("#typePassword", 'type="password"');
						dynamicSteps("#inputPswdTag", "attrNameAppendToPswd");
					});
				});
				break;
			case 'attrNameAppendToPswd':
				$("#inputPswdTag").text("");
				$("#inputPswdTag").append('&lt;input type="password" <input class="dynamic-input" type="text" id="nameTextInTypePswd" size="10"'
							+ ' maxlength="10" spellcheck="false"/>&gt;');
				var text = 'enter here <span class="ct-code-b-yellow">name="psw"</span>';
				typing(".introjs-tooltiptext", text, 30, function() {
					keyCodeCondition("#nameTextInTypePswd", 'name="psw"');
					dynamicSteps("#browserDiv", "inputPswdEditableByUser");
				});
				break;
			}
			break;
/*** type="button" steps in preCode  ***/			
			
		case 'inputButtonTag':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'inputButtonTagEnterByUser':	
				customIntro(elementId);
				dynamicSteps("#browserDiv", "InputButtonShowInBrowser", "hide");
				break;
			case 'buttonTypeAttrAppend':
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#inputButtonTag").text("");
					$("#inputButtonTag").append('&lt;input <input type="text" class="dynamic-input" id="typeButton" maxlength="13" size="13"'
								+ ' spellcheck="false"/>&gt;');
					var text = 'enter here <span class="ct-code-b-yellow">type="button"</span>';
					typing(".introjs-tooltiptext", text, typingInterval, function() {
						keyCodeCondition("#typeButton", 'type="button"');
						dynamicSteps("#inputButtonTag", "buttonOnClickAttrAppend");
					});
				});
				break;
			case 'buttonOnClickAttrAppend':
				$("#inputButtonTag").text("");
				$("#inputButtonTag").append('&lt;input type="button" '+
					'<input class="dynamic-input" spellcheck="false" id="OnClickAttrTextInTypeButton" maxlength="25" size="25"/>&gt;');
				var text = 'enter here <span class="ct-code-b-yellow">onclick="alert(\'Hello\')"</span>';
				typing(".introjs-tooltiptext", text, 30, function() {
					keyCodeCondition("#OnClickAttrTextInTypeButton", "onclick=\"alert('Hello')\"");
					dynamicSteps("#inputButtonTag", "buttonValueAttrAppend");
				});
				break;
			case 'buttonValueAttrAppend':
				$("#inputButtonTag").text("");
				$("#inputButtonTag").append('&lt;input type="button" onclick="alert(\'Hello\')" '+
					'<input class="dynamic-input" id="buttonValueAttrAppend" maxlength="17" size="17"/ spellcheck="false"/>&gt;');
				var text = 'enter here <span class="ct-code-b-yellow">value="Click Me!"</span>';
				typing(".introjs-tooltiptext", text, 30, function() {
					keyCodeCondition("#buttonValueAttrAppend", 'value="Click Me!"');
					dynamicSteps("#browserDiv", "inputButtonClickByUser");
				});
				break;
			}
			break;
/*** type="radio" steps in preCode  ***/		
		case 'inputRadioTag':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'inputRadioTagEnterByUser':
				customIntro(elementId);
				dynamicSteps("#browserDiv", "inputRadioShow", "hide");
				break;
			case 'typeTextInTypeRadio':
				$("#inputRadioTag").text("");
				$("#inputRadioTag").append('&lt;input <input class="dynamic-input" id="typeTextInTypeRadio" maxlength="12" size="12"'
							+ ' spellcheck="false"/>&gt;');
				var text = 'enter here <span class="ct-code-b-yellow">type="radio"</span>';
				typing(".introjs-tooltiptext", text, 30, function() {
					keyCodeCondition("#typeTextInTypeRadio", 'type="radio"');
					dynamicSteps("#inputRadioTag", "nameTextInTypeRadio");
				});
				break;
			case 'nameTextInTypeRadio':
				$("#inputRadioTag").text("");
				$("#inputRadioTag").append('&lt;input type="radio" '+
					'<input id="nameTextInTypeRadio" class="dynamic-input" maxlength="13" spellcheck="false" size="13"/>&gt;');
				var text = 'enter here <span class="ct-code-b-yellow">name="gender"</span>';
				typing(".introjs-tooltiptext", text, 30, function() {
					keyCodeCondition("#nameTextInTypeRadio", 'name="gender"');
					dynamicSteps("#inputRadioTag", "valueTextInTypeRadio");
				});
				break;
			case 'valueTextInTypeRadio':
				$("#inputRadioTag").text("");
				$("#inputRadioTag").append('&lt;input type="radio" name="gender" '+
					'<input id="valueTextInTypeRadio" class="dynamic-input" maxlength="12" spellcheck="false" size="12"/>&gt;');
				var text = 'enter here <span class="ct-code-b-yellow">value="male"</span>';
				typing(".introjs-tooltiptext", text, 30, function() {
					keyCodeCondition("#valueTextInTypeRadio", 'value="male"');
					dynamicSteps("#inputRadioTag", "textOfInputTypeRadio");
				});
				break;
			case 'textOfInputTypeRadio':
				$("#inputRadioTag").text("");
				$("#inputRadioTag").append('&lt;input type="radio" name="gender" value="male"&gt;'+
					'<input id="textOfInputTypeRadio" class="dynamic-input" maxlength="4" spellcheck="false" size="4"/>');
				var text = 'enter here <span class="ct-code-b-yellow">Male</span>';
				typing(".introjs-tooltiptext", text, 30, function() {
					keyCodeCondition("#textOfInputTypeRadio", "Male");
					dynamicSteps("#browserDiv", "radioButtonShownInBrowser", "hide");
					$("#inputRadioTag").after('<br>\t\t<span id="inputRadioTagFemale" class="opacity00">&lt;'+
						'input type="radio" name="gender" value="female"&gt;female');
				});
				break;
			}
			break;
		case 'inputRadioTagFemale':
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Consider a same input type of radio button.";
				typing(".introjs-tooltiptext", text, 30, function() {
					TweenMax.to($("#inputRadioTagFemale"), 1, {opacity: 1, onComplete: function() {
						$(".introjs-nextbutton").show();
						dynamicSteps("#browserDiv", "inputRadioTagFemaleShownInBrowser");
					}});
				});
			});
			break;
/*** type="checkbox" steps in preCode  ***/		
		case 'inputCheckBoxTag':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'inputCheckBoxTagEnterByUser':
				customIntro(elementId);
				dynamicSteps("#browserDiv", "inputCheckBoxShow", "hide");
				break;
			case 'typeTextInTypeCheckBox':
				$("#inputCheckBoxTag").text("");
				$("#inputCheckBoxTag").append('&lt;input <input id="typeTextInTypeCheckBox" class="dynamic-input" maxlength="15"'
							+ ' spellcheck="false" size="15"/>&gt;');
				var text = 'enter here <span class="ct-code-b-yellow">type="checkbox"</span>';
				typing(".introjs-tooltiptext", text, 30, function() {
					keyCodeCondition("#typeTextInTypeCheckBox", 'type="checkbox"');
					dynamicSteps("#inputCheckBoxTag", "nameTextInTypeCheckBox");
				});
				break;
			case 'nameTextInTypeCheckBox':
				$("#inputCheckBoxTag").text("");
				$("#inputCheckBoxTag").append('&lt;input type="checkbox" '+
					'<input id="nameTextInTypeCheckBox" class="dynamic-input" maxlength="16" spellcheck="false" size="16"/>&gt;');
				var text = 'enter here <span class="ct-code-b-yellow">name="language1"</span>';
				typing(".introjs-tooltiptext", text, 30, function() {
					keyCodeCondition("#nameTextInTypeCheckBox", 'name="language1"');
					dynamicSteps("#inputCheckBoxTag", "valueTextInTypeCheckBox");
				});
				break;
			case 'valueTextInTypeCheckBox':
				$("#inputCheckBoxTag").text("");
				$("#inputCheckBoxTag").append('&lt;input type="checkbox" name="language1" '+
					'<div class="display-block" id="valueTextInTypeCheckBox" contenteditable="true"> </div>&gt;');
				var text = 'enter here <span class="ct-code-b-yellow">value="java"</span>';
				typing(".introjs-tooltiptext", text, 30, function() {
					keyCodeCondition("#valueTextInTypeCheckBox", 'value="java"');
					dynamicSteps("#inputCheckBoxTag", "textOfInputTypeCheckBox");
				});
				break;
			case 'textOfInputTypeCheckBox':
				$("#inputCheckBoxTag").text("");
				$("#inputCheckBoxTag").append('&lt;input type="checkbox" name="language1" value="java"&gt;'+
					'<input id="textOfInputTypeCheckBox" class="dynamic-input" maxlength="12" spellcheck="false" size="12"/>');
				var text = 'enter here <span class="ct-code-b-yellow">I learn java</span>';
				typing(".introjs-tooltiptext", text, 30, function() {
					keyCodeCondition("#textOfInputTypeCheckBox", "I learn java");
					dynamicSteps("#browserDiv", "CheckBoxButtonShownInBrowser", "hide");
					$("#inputCheckBoxTag").after('<br>\t\t&lt;br&gt;<br>\t\t<span id="inputCheckBoxTagAnother" class="opacity00">'+
							'&lt;input type="checkbox" name="language2" value="C"&gt;I learn C');
				});
				break;
			}
			break;
		case 'inputCheckBoxTagAnother':
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Consider a same input type of checkbox.";
				typing(".introjs-tooltiptext", text, 30, function() {
					TweenMax.to($("#inputCheckBoxTagAnother"), 1, {opacity: 1, onComplete: function() {
						$(".introjs-nextbutton").show();
						dynamicSteps("#browserDiv", "inputCheckBoxTagAnotherShownInBrowser");
					}});
				});
			});
			break;
/*** type="submit" steps in preCode  ***/	
		case 'inputSubmitTag':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'inputSubmitTagEnterByUser':
				customIntro(elementId);
				dynamicSteps("#browserDiv", "inputSubmitShow", "hide");
				break;
			case 'typeTextInTypeSubmit':
				$("#inputSubmitTag").text("");
				$("#inputSubmitTag").append('&lt;input <input id="typeTextInTypeSubmit" class="dynamic-input" maxlength="14"'
							+ ' spellcheck="false" size="13"/>&gt;');
				var text = 'enter here <span class="ct-code-b-yellow">type="submit"</span>';
				typing(".introjs-tooltiptext", text, 30, function() {
					keyCodeCondition("#typeTextInTypeSubmit", 'type="submit"');
					dynamicSteps("#inputSubmitTag", "valueTextInTypeSubmit");
				});
				break;
			case 'valueTextInTypeSubmit':
				$("#inputSubmitTag").text("");
				$("#inputSubmitTag").append('&lt;input type="Submit" '+
					'<input id="valueTextInTypeSubmit" class="dynamic-input" maxlength="14" spellcheck="false" size="14"/>&gt;');
				var text = 'enter here <span class="ct-code-b-yellow">value="Submit"</span>';
				typing(".introjs-tooltiptext", text, 30, function() {
					keyCodeCondition("#valueTextInTypeSubmit", 'value="Submit"');
					dynamicSteps("#browserDiv", "submitButtonShownInBrowser", "hide");
				});
				break;
			}
			break;
/*** type="reset" steps in preCode  ***/
		case 'inputResetTag':
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Consider a input type of reset.";
				typing(".introjs-tooltiptext", text, 20, function() {
					TweenMax.to($("#inputResetTag"), 1, {opacity: 1, onComplete: function() {
						$(".introjs-nextbutton").show();
						dynamicSteps("#browserDiv", "inputResetTagShownInBrowser", "hide");
					}});
				});
			});
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
		$('.length-error-text').remove();
		introjs.refresh();
		if (e.keyCode == 17) {
			$(id).val(tag);
		}
		if ($(id).val().trim() == tag) {
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
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1000 , function() {
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

function submitForm() {
	$("#inputFieldSubmitInBrowser").attr("disabled", false);
	$("#inputFieldResetInBrowser").attr("disabled", false);
	$("#inputFieldSubmitInBrowser").click(function() {
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
		
			$("#line1").append('<span class="color-blue">' + $("#inputFieldInBrowser").attr("name") + ' : </span>' + $("#inputFieldInBrowser").val());
			$("#line2").append('<span class="color-blue">' + $("#inputFieldPswdInBrowser").attr("name") + ' : </span>' + $("#inputFieldPswdInBrowser").val()); 
			$("#line3").append('<span class="color-blue">' + $("#inputFieldRadioInBrowser").attr("name") + ' : </span>');
			$("#line4").append('<span class="color-blue">' + $("#inputFieldCheckBoxInBrowser").attr("name") + ' : </span>');
			$("#line5").append('<span class="color-blue">' + $("#inputFieldCheckBoxInBrowser2").attr("name") + ' : </span>'); 
			if($("#inputFieldRadioInBrowser").is(":checked") == true) {
				$("#line3").append($("#inputFieldRadioInBrowser").val());
			} else if($("#inputFieldRadioInBrowser2").is(":checked") == true) {
				$("#line3").append($("#inputFieldRadioInBrowser2").val());
			} 
			
			if($("#inputFieldCheckBoxInBrowser").is(":checked") == true) {
				$("#line4").append($("#inputFieldCheckBoxInBrowser").val());
			} 
			if($("#inputFieldCheckBoxInBrowser2").is(":checked") == true) {
				$("#line5").append($("#inputFieldCheckBoxInBrowser2").val());
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
			
		},1500);
			
		$(".fa-arrow-left").click(function() {
			$('.fa-arrow-left').popover('hide');
			introjs.refresh();
			$("#htmlBody").show();
			$("#dynamicHtmlBody").hide();
			$(".fa-arrow-left").css("color", "lightgray");
			$("#titleTextInBrowser").text("");
			$("#titleTextInBrowser").append("HTML input types");
			$("#line1, #line2, #line3, #line4, #line5").text("");
		});
	});
}
</script>
</html>