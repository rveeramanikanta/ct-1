<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<title>Text Alignments</title>

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

.introjs-tooltiptext br {
	margin: 15px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.introjs-tooltip {
    width: 250px;
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

.box-border {
	border-radius: 12px;
	border: 2px solid gray;
}

.buttons-div {
	margin-top: 20px;
	margin-bottom: 5px;
	text-align: center;
}

div,span {
	position: relative;
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
	background-color : white;
	z-index: 1000000 !important;
}

.html-body {
	min-height: 160px;
	border: 1px solid gray;
	background: white;
}

.creamPreTab4 {
	tab-size: 4;
    margin: 8px;
    padding: 10px;
    font-size: 13px;
    white-space: pre;
	-moz-tab-size: 4;
    border-radius: 8px;
    background-color: #fffae6;
    weight: 350px;
}

.step {
	position: relative;
    display: inline-block;
}

.image-custom {
    height: 60px;
    position: absolute;
 }

.image-custom1 {
    width: 100%;
}

[contenteditable="true"] {
    outline: medium none;
}

.blinking {
	animation-name: blink;
	animation-duration: 1s;
	animation-iteration-count: infinite;
 }

@keyframes blink {
	50% {
		background:  red;
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

#htmlDisplay {
	padding: 4px;
	margin-top: 30px;
}

#textAndTag {
	width: 200px;
	display: inline-block;
}
.background {
	background: yellow;
}

#pcontent {
	margin-top: 5px;
}

/* #applyCss {
    margin: -10px 0 -9px 20px;
} */

input {
	background : transparent;
	border : none;
	height: 25px;
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
var buttonCount = 1;
var propertyText = ['text-align', 'text-indent', 'word-spacing', 'text-transform', 'text-decoration',  'letter-spacing' ];

$(document).ready(function() {
	introGuide();
	displaybrowser('#browser',1);
	//*******"ondragstart: -  is an event occurs when the user starts to drag an element*********
	$("body").attr({ondragstart:"return false"});

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
							element : "#headding",
							intro	: "",
							tooltipClass : "hide",
						},{
							element : "#code",
							intro	: "",
							tooltipClass : "hide",
						},{
							element : "#divTagOpen",
							intro	: "",
							tooltipClass : "hide",
						},{
							element : "#divTagClose",
							intro	: "",
							tooltipClass : "hide",
						},{
							element : "#divTagText",
							intro	: "",
							tooltipClass : "hide",
						},{
							element : "#divTag",
							intro	: "",
							tooltipClass : "hide",
							animateStep: "divText"
						},{
							element : "#htmlDisplay",
							intro	: "",
							tooltipClass : "hide",
							animateStep: "displayTextInBrowser"
						},{
							element : "#divTag",
							intro	: "",
							tooltipClass : "hide",
							animateStep: "applyStyle"
						},{
							element : "#internalStyles",
							intro   : "",
							tooltipClass : "hide",
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
			
			case "headding" :
				$('.introjs-tooltip').removeClass('hide');
				text = 'Let us learn to format the content by applying various properties like'+
					'<ul><li><span class="ct-code-b-yellow">text-align</span> </li>'+
					'<li><span class="ct-code-b-yellow">text-indent</span> </li>'+
					' <li><span class="ct-code-b-yellow">word-spacing</span>  </li>'+
					' <li><span class="ct-code-b-yellow">text-transform</span> </li> '+
					' <li><span class="ct-code-b-yellow">letter-spacing</span> and </li> '+
					' <li><span class="ct-code-b-yellow">text-decoration</span>.</li>';
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();
				});
			break;
			
			case "code" :
				$("#content").removeClass("opacity00");
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Let us revise a basic HTML page syntax.';
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
						$('.introjs-duplicate-nextbutton').click(function() {
							$('.introjs-duplicate-nextbutton').remove();
							borderStylesDisplay(1);
						});
					});
				});
			break;
		
			case "divTagOpen" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Open a paragraph tag<br>'+
							'Hint: <span class="ct-code-b-yellow">&lt;p&gt;</span>';
					typing('.introjs-tooltiptext', text, function() {
						$("#divTagOpen").focus().effect( "highlight",{color: 'yellow'});
						textValidation("#divTagOpen", 4, "<p>", "-*");
						
					});
				});
			break;
			
			case "divTagClose" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Close the paragraph tag<br>'+
							'Hint: <span class="ct-code-b-yellow">&lt/p&gt;</span>';
					typing('.introjs-tooltiptext', text, function() {
						$("#divTagClose").focus().effect( "highlight",{color: 'yellow'});
						textValidation("#divTagClose", 4, "</p>", "-*");
					});
				});
			break;
			
			case "divTagText" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Enter the text shown below.<br>'+
							'<span class="ct-code-b-yellow">Content formatting</span>';
					typing('.introjs-tooltiptext', text, function() {
						$("#divTagText").focus().effect( "highlight",{color: 'yellow'});
						textValidation("#divTagText", 20, "content formatting", "-*");
					});
				});
			break;
			
			case "divTag" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$("#divTagOpen, #divTagText, #divTagClose").attr({"disabled": "disabled"});
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "divText" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'Observe how this unstyled text appears in the browser.';
							typing('.introjs-tooltiptext', text, function() {
								$('.introjs-nextbutton').show();
							});
						break;
						
						case "applyStyle" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'Let us style this text in <span class="ct-code-b-yellow">style</span> block'+
									' which is integrated in the same HTML document.';
							typing('.introjs-tooltiptext', text, function() {
								$('.introjs-nextbutton').show();
							});
						break;
					}
				});
			break;
			
			case "internalStyles" :
				$("#htmlDisplay").removeClass("z-index1000000");
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$("#applyCss").append('<br id="break"><input id="openCurlyBrace" type="text" size="3" maxlength="3">');
				$("#openCurlyBrace").attr({"disabled": "disabled"});
				intro.refresh();
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Let us apply Style on paragraph, by writing a <span class="ct-code-b-yellow">selector</span>'+
							' & <span class="ct-code-b-yellow">property value</span> pair.'
					typing('.introjs-tooltiptext', text, function() {
						nextSteps("#openCurlyBrace", "openCurlyBrace");
						$('.introjs-nextbutton').show();
					});	
				});
			break;
			
			case "openCurlyBrace" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$("#openCurlyBrace").after('<input id="closeCurlyBrace" type="text" size="3" maxlength="3">');
				$("#closeCurlyBrace").attr({"disabled": "disabled"})
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Open a curly braces.<br>'+
							'Hint: <span class="ct-code-b-yellow">{</span>';
					typing('.introjs-tooltiptext', text, function() {
						$("#openCurlyBrace").removeAttr("disabled").focus().effect( "highlight",{color: 'yellow'});						
						textValidation("#openCurlyBrace", 3, "{", "-*");
						nextSteps("#closeCurlyBrace", "closeCurlyBrace");
					});	
				});
			break;
			
			case "closeCurlyBrace" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$("#openCurlyBrace").after('<br id="break"><div id="align"><input id="textAlignment'+ buttonCount+'" type="text" size="11" maxlength="11"></div>');
				$("#textAlignment").attr({"disabled": "disabled"});
				intro.refresh();
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Close the curly braces. <br>'+
						'Hint: <span class="ct-code-b-yellow">}</span>';
					typing('.introjs-tooltiptext', text, function() {
						$("#closeCurlyBrace").removeAttr("disabled").focus().effect( "highlight",{color: 'yellow'});
						textValidation("#closeCurlyBrace", 3, "}", "-*");
						nextSteps("#textAlignment"+buttonCount, "textAlignmentRight");
					});	
				});
			break;
			
			case "applyCss" :
				++buttonCount;
				if (buttonCount <= 6) {
					if (buttonCount == 2) {
						$("#align").after('<div id="indent'+buttonCount +'"><input id="textAlignment'+ buttonCount+'" type="text" size="11" maxlength="11"></div>');
					} else {
						$("#indent"+ (buttonCount -1)).after('<div id="indent'+buttonCount +'"><input id="textAlignment'+ buttonCount+'" type="text" size="15" maxlength="15"></div>');
					}
				}
				$("#textAlignment"+buttonCount).attr({"disabled": "disabled"});
				intro.refresh();
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "valueRight" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'In this Style block, apply <span class="ct-code-b-yellow">property:value</span> pairs.';
							typing('.introjs-tooltiptext', text, function() {
								nextSteps("#textAlignment", "textAlignmentRight");
								$('.introjs-nextbutton').show();
							});	
						break;
						 
						case "applyIndent" :
							$('.introjs-tooltip').removeClass('hide');
							if (buttonCount <= 6) {
								text = ' Let us apply one more property:value pair '+
										'<span class="ct-code-b-yellow">'+ propertyText[(buttonCount -1)] +'</span> to the selector p.';
							} else {
								text = 'These are content formatting styles';
							}
							typing('.introjs-tooltiptext', text, function() {
								if (buttonCount <= 6) {
									nextSteps("#textAlignment"+buttonCount, "textIndent40");
								}
								$('.introjs-nextbutton').show();
							});	
						break;
					}
				});
			break; 
			
			case "textAlignment"+ buttonCount :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$("#textAlignment"+buttonCount).after('<input id="colon'+ buttonCount+'" type="text" size="2" maxlength="2"></span>');
					$("#colon"+buttonCount).attr({"disabled": "disabled"});
					$('.introjs-tooltip').removeClass('hide');
					text = 'Enter the property <span class="ct-code-b-yellow">'+ propertyText[(buttonCount - 1)] +'</span>';
					typing('.introjs-tooltiptext', text, function() {
						$("#textAlignment"+buttonCount).removeAttr("disabled").focus().effect( "highlight",{color: 'yellow'});
						if (buttonCount == 2) {
							textValidation("#textAlignment"+buttonCount, 11, propertyText[(buttonCount -1)], "-*");
						} else {
							textValidation("#textAlignment"+buttonCount, 15, propertyText[(buttonCount -1)], "-*");							
						}
						nextSteps("#colon"+buttonCount, "colon");
					});
				});
			break;
			
			case "colon"+buttonCount :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				if (buttonCount <= 3 || buttonCount == 6 ) {
					$("#colon"+buttonCount).after('<input id="value'+ buttonCount +'" type="text" size="6" maxlength="6">');
				} else {
					$("#colon"+buttonCount).after('<input id="value'+ buttonCount +'" type="text" size="12" maxlength="12">');
				}
				$("#value"+buttonCount).attr({"disabled": "disabled"})
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Enter <span class="ct-code-b-yellow">:</span> (colon).';
					typing('.introjs-tooltiptext', text, function() {
						$("#colon"+buttonCount).removeAttr("disabled").focus().effect( "highlight",{color: 'yellow'});						
						textValidation("#colon"+buttonCount, 2, ":", "-*");
							nextSteps("#value"+buttonCount, "propertyvalue"+buttonCount);
					});	
				});
			break;
			
			case "value"+buttonCount :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "propertyvalue"+buttonCount :
							$("#value"+buttonCount).after('<input id="semiColon'+ buttonCount+'" type="text" size="2" maxlength="2">');
							$("#semiColon"+buttonCount).attr({"disabled": "disabled"});
							$('.introjs-tooltip').removeClass('hide');
							if (buttonCount == 1) {
								text = 'Enter the value <span class="ct-code-b-yellow">right</span>.<br>'+
								'3 values (<span class="ct-code-b-yellow">left</span>,'+
								'<span class="ct-code-b-yellow">center</span>,'+
								'<span class="ct-code-b-yellow">right</span>) are available for text-align property';	
								textValidation("#value"+buttonCount, 6, "right", "-*");
							} else if (buttonCount == 2) {
								text = 'Enter the value <span class="ct-code-b-yellow">40px</span>';
								textValidation("#value"+buttonCount, 6, "40px", "-*");
							} else if (buttonCount == 3) {
								text = 'Enter the value <span class="ct-code-b-yellow">20px</span>';
								textValidation("#value"+buttonCount, 6, "20px", "-*");
							} else if (buttonCount == 4) {
								text = 'Enter the value <span class="ct-code-b-yellow">capitalize</span>';
								textValidation("#value"+buttonCount, 12, "capitalize", "-*");
							} else if (buttonCount == 5) {
								text = 'Enter the value <span class="ct-code-b-yellow">underline</span>';
								textValidation("#value"+buttonCount, 12, "underline", "-*");
							} else if (buttonCount == 6) {
								text = 'Enter the value <span class="ct-code-b-yellow">4px</span>';
								textValidation("#value"+buttonCount, 6, "4px", "-*");
							}
							typing('.introjs-tooltiptext', text, function() {
								$("#value"+buttonCount).removeAttr("disabled").focus().effect( "highlight",{color: 'yellow'});
								nextSteps("#semiColon"+buttonCount, "semiColon");
							});
						break;
						
						case "changeAlignValue" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'Change the value from <span class="ct-code-b-yellow">right</span> to '+
									/* '<span class="ct-code-b-yellow">center</span> or '+ */
									'<span class="ct-code-b-yellow">left</span>';
							typing('.introjs-tooltiptext', text, function() {
								$("#value"+buttonCount).removeAttr("disabled").focus().effect( "highlight",{color: 'yellow'});
								textValidation("#value"+buttonCount, 6, "center", "left");
								nextSteps("#pcontent", "alignModifiedValue");
							});
						break;
						
						case "changeIndentValue" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'Change the value from <span class="ct-code-b-yellow">40px</span> to '+
									'<span class="ct-code-b-yellow">70px</span>';
							typing('.introjs-tooltiptext', text, function() {
								$("#value"+buttonCount).removeAttr("disabled").focus().effect( "highlight",{color: 'yellow'});
								textValidation("#value"+buttonCount, 6, "70px", "*-");
								nextSteps("#pcontent", "alignModifiedIndent");
							});
						break;
						
						case "changeWordSpacingValue":
							$('.introjs-tooltip').removeClass('hide');
							text = 'Change the value from <span class="ct-code-b-yellow">20px</span> to '+
									'<span class="ct-code-b-yellow">40px</span>';
							typing('.introjs-tooltiptext', text, function() {
								$("#value"+buttonCount).removeAttr("disabled").focus().effect( "highlight",{color: 'yellow'});
								textValidation("#value"+buttonCount, 6, "40px", "*-");
								nextSteps("#pcontent", "alignModifiedWordSpacing");
							});
						break;
						
						case "changeTransformValue":
							$('.introjs-tooltip').removeClass('hide');
							text = 'Change the value from <span class="ct-code-b-yellow">capitalize</span> to '+
									'<span class="ct-code-b-yellow">uppercase</span> or '+
									'<span class="ct-code-b-yellow">lowercase</span>';
							typing('.introjs-tooltiptext', text, function() {
								$("#value"+buttonCount).removeAttr("disabled").focus().effect( "highlight",{color: 'yellow'});
								textValidation("#value"+buttonCount, 12, "uppercase", "lowercase");
								nextSteps("#pcontent", "alignModifiedTransform");
							});
						break;
						
						case "changeDecorationValue":
							$('.introjs-tooltip').removeClass('hide');
							text = 'Change the value from <span class="ct-code-b-yellow">underline</span> to '+
									'<span class="ct-code-b-yellow">line-through</span> or '+
									'<span class="ct-code-b-yellow">overline</span>';
							typing('.introjs-tooltiptext', text, function() {
								$("#value"+buttonCount).removeAttr("disabled").focus().effect( "highlight",{color: 'yellow'});
								textValidation("#value"+buttonCount, 12, "line-through", "overline");
								nextSteps("#pcontent", "alignModifiedDecoration");
							});
						break;
						
						case "changeLetterSpacingValue":
							$('.introjs-tooltip').removeClass('hide');
							text = 'Change the value from <span class="ct-code-b-yellow">4px</span> to '+
									'<span class="ct-code-b-yellow">7px</span>';
							typing('.introjs-tooltiptext', text, function() {
								$("#value"+buttonCount).removeAttr("disabled").focus().effect( "highlight",{color: 'yellow'});
								textValidation("#value"+buttonCount, 6, "7px", "*-");
								nextSteps("#pcontent", "alignModifiedLetterSpacing");
							});
						break;
					}
				});
			break;
			
			case "semiColon"+buttonCount :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$("#semiColon"+buttonCount).attr({"disabled": "disabled"});
					$('.introjs-tooltip').removeClass('hide');
					text = 'Enter <span class="ct-code-b-yellow">;</span> (Semicolon)';
					typing('.introjs-tooltiptext', text, function() {
						$("#semiColon"+buttonCount).removeAttr("disabled").focus().effect( "highlight",{color: 'yellow'});
						textValidation("#semiColon"+buttonCount, 2, ";", "-*");
						if (buttonCount == 1) {
							nextSteps("#align", "align");
						} else {
							nextSteps("#indent"+buttonCount, "indent");
						}
					});
				});
			break;
			
			case "align":
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$("#openCurlyBrace").before('<input id="selector" type="text" size="3" maxlength="3">');
				intro.refresh();
				$('.introjs-helperLayer').one('transitionend', function () {
					$("#selector").attr({"disabled": "disabled"});
					$('.introjs-helperLayer').one('transitionend', function () {
						$('.introjs-tooltip').removeClass('hide');
						text = 'This is property and value for text-align';
						typing('.introjs-tooltiptext', text, function() {
							nextSteps("#selector", "selector");
							$('.introjs-nextbutton').show();
						});
					});
				});
			break;
			
			case "indent"+buttonCount:
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-helperLayer').one('transitionend', function () {
						$('.introjs-tooltip').removeClass('hide');
						text = 'This is property and value for '+ propertyText[(buttonCount -1)]  +'.';
						typing('.introjs-tooltiptext', text, function() {
							nextSteps("#pcontent", "applyAlign");
							$('.introjs-nextbutton').show();
						});
					});
				});
			break;
			
			case "selector" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Write a selector <span class="ct-code-b-yellow">p</span>';
					typing('.introjs-tooltiptext', text, function() {
						$("#selector").removeAttr("disabled").focus().effect( "highlight",{color: 'yellow'});
						textValidation("#selector", 3, "p", "-*");
						nextSteps("#pcontent", "applyAlign");
					});
				});
			break;
			
			case "htmlDisplay" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "displayTextInBrowser" :
							$("#pcontent").text($("#divTagText").val());
							$("#divTag").addClass("z-index1000000");
							transferEffect("#divTag", "#pcontent", function () {
								$("#divTag").removeClass("z-index1000000");
								introNextStep()
							});
						break;
					}
				});
			break;
			
			case "pcontent" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "applyAlign" :
							$("#break").css({"display": "none"});
							$('.introjs-tooltip').removeClass('hide');
							if (buttonCount == 1) {
								text ='Now, this unstyled text is about to be styled as'+
								' the Selector is <span class="ct-code-b-yellow">p</span>.';
							} else if (buttonCount == 2) {
								text = 'The <span class="ct-code-b-yellow">text-indent</span> property Indents the first line position.';
							} else if (buttonCount == 3) {
								text = 'The <span class="ct-code-b-yellow">word-spacing</span> property impacts'+
									' the distance between the words.';
							} else if (buttonCount == 4) {
								text = 'The <span class="ct-code-b-yellow">text-transform</span> property changes the '+
								'text into uppercase, lowercase or capitalizes.';
							} else if (buttonCount == 5) {
								text = 'The <span class="ct-code-b-yellow">text-decoration</span> property'+
									' decorates the text to underline, overline or line-through.';
							} else if (buttonCount == 6) {
								text = 'The <span class="ct-code-b-yellow">letter-spacing</span> increases or decreases space between letters.';
							}
							typing('.introjs-tooltiptext', text, function() {
								$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
								$('.introjs-duplicate-nextbutton').click(function() {
									$('.introjs-duplicate-nextbutton').remove();
									$('.introjs-tooltip').addClass('hide');
									$("#applyCss").addClass("z-index1000000");
									setTimeout(function() {
										if (buttonCount == 1) {
											transferEffect('#align', "#pcontent", function () {
												$("#pcontent").css({"text-align": "right"})
												$('#align').removeClass("z-index1000000");
												$("#applyCss").removeClass("z-index1000000");
												nextSteps("#value"+buttonCount, "changeAlignValue");
												introNextStep()
											});
										} else if (buttonCount == 2) {
											transferEffect('#indent'+buttonCount, "#pcontent", function () {
												$("#pcontent").css({"text-indent": "40px"})
												$('#indent'+buttonCount).removeClass("z-index1000000");
												$("#applyCss").removeClass("z-index1000000");
												nextSteps("#value"+buttonCount, "changeIndentValue");
												introNextStep()
											});
										} else if (buttonCount == 3) {
											transferEffect('#indent'+buttonCount, "#pcontent", function () {
												$("#pcontent").css({"word-spacing": "20px"})
												$('#indent'+buttonCount).removeClass("z-index1000000");
												$("#applyCss").removeClass("z-index1000000");
												nextSteps("#value"+buttonCount, "changeWordSpacingValue");
												introNextStep()
											});
										} else if (buttonCount == 4) {
											transferEffect('#indent'+buttonCount, "#pcontent", function () {
												$("#pcontent").css({"text-transform": " capitalize"})
												$('#indent'+buttonCount).removeClass("z-index1000000");
												$("#applyCss").removeClass("z-index1000000");
												nextSteps("#value"+buttonCount, "changeTransformValue");
												introNextStep()
											});
										} else if (buttonCount == 5) {
											transferEffect('#indent'+buttonCount, "#pcontent", function () {
												$("#pcontent").css({"text-decoration": "underline"})
												$('#indent'+buttonCount).removeClass("z-index1000000");
												$("#applyCss").removeClass("z-index1000000");
												nextSteps("#value"+buttonCount, "changeDecorationValue");
												introNextStep()
											});
										} else if (buttonCount == 6) {
											transferEffect('#indent'+buttonCount, "#pcontent", function () {
												$("#pcontent").css({"letter-spacing": "4px"})
												$('#indent'+buttonCount).removeClass("z-index1000000");
												$("#applyCss").removeClass("z-index1000000");
												nextSteps("#value"+buttonCount, "changeLetterSpacingValue");
												introNextStep()
											});
										}
									},500);
								});
							});
						break;
						
						case "alignModifiedValue" :
							$("#align").addClass("z-index1000000");
							transferEffect("#align", "#pcontent", function () {
								$("#pcontent").css({"text-align": $("#value"+buttonCount).val()})
								$("#align").removeClass("z-index1000000");
								nextSteps("#applyCss", "applyIndent");
								introNextStep()
							});
						break;
						
						case "alignModifiedIndent" :
							$("#indent"+buttonCount).addClass("z-index1000000");
							transferEffect("#indent"+buttonCount, "#pcontent", function () {
								$("#pcontent").css({"text-indent": $("#value"+buttonCount).val()})
								$("#indent"+buttonCount).removeClass("z-index1000000");
								nextSteps("#applyCss", "applyIndent");
								introNextStep()
							});
						break;
						
						case "alignModifiedWordSpacing" :
							$("#indent"+buttonCount).addClass("z-index1000000");
							transferEffect("#indent"+buttonCount, "#pcontent", function () {
								$("#pcontent").css({"word-spacing": $("#value"+buttonCount).val()})
								$("#indent"+buttonCount).removeClass("z-index1000000");
								nextSteps("#applyCss", "applyIndent");
								introNextStep()
							});
						break;
						
						case "alignModifiedTransform" :
							$("#indent"+buttonCount).addClass("z-index1000000");
							transferEffect("#indent"+buttonCount, "#pcontent", function () {
								$("#pcontent").css({"text-transform": $("#value"+buttonCount).val()})
								$("#indent"+buttonCount).removeClass("z-index1000000");
								nextSteps("#applyCss", "applyIndent");
								introNextStep()
							});
						break;
						
						case "alignModifiedDecoration" :
							$("#indent"+buttonCount).addClass("z-index1000000");
							transferEffect("#indent"+buttonCount, "#pcontent", function () {
								$("#pcontent").css({"text-decoration": $("#value"+buttonCount).val()})
								$("#indent"+buttonCount).removeClass("z-index1000000");
								nextSteps("#applyCss", "applyIndent");
								introNextStep()
							});
						break;
						
						case "alignModifiedLetterSpacing" :
							$("#indent"+buttonCount).addClass("z-index1000000");
							transferEffect("#indent"+buttonCount, "#pcontent", function () {
								$("#pcontent").css({"letter-spacing": $("#value"+buttonCount).val()})
								$("#indent"+buttonCount).removeClass("z-index1000000");
								nextSteps("#applyCss", "applyIndent");
								introNextStep()
							});
						break;
					}
				});
			break;
			
			case "restartBtn":
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$("#restartBtn").removeClass('visibility-hidden');
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
					+ '<div class="col-xs-10 margin-top20 padding00" id="loadImg'+ num +'">Text Alignments</div>'
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
					+ '<div id = "pcontent" class="opacity00">This is a DIV tag.</div>'
					+ '</div></div></div>');
		
					$('#url1').attr("placeholder", "https://www.codetantra.com/webdevelopment/alignments.html");
	}
	
	function appendNextBtn(callBackFunction) {
		$('.introjs-tooltiptext').append('<div class="text-right"><a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a></div>');
		$('.introjs-duplicate-nextbutton').click(function() {
			$('.introjs-duplicate-nextbutton').remove();
			callBackFunction();
		});
	}
	
	function introNextStep() {
		setTimeout(function() {
			intro.nextStep();
		},1200);
	}
	
	
	function borderStylesDisplay(displayCount) {
		$(".introjs-duplicate-nextbutton").remove();
		if (displayCount < 11) {
			zoomInLeftEffect(".border"+displayCount);
					borderStylesDisplay(++displayCount);
		} else {
			$('.introjs-nextbutton').show();
		}
	}
	
	//********** zoomInDown effect function **********
	function zoomInLeftEffect(selector, callBackFunction) {
		$(selector).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
			$(selector).removeClass("animated zoomIn")
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		});
	}
	
	//****dynamic steps*************
	function nextSteps(stepName, animatedStep) {
		var options = {
				element :stepName,
				intro :'',
				tooltipClass : "hide",
				animateStep: animatedStep
		}
		intro.insertOption(intro._currentStep + 1, options);
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

	//********** Check text color and font-size **************** 
	function textValidation(text, minLength, validationText1, validationText2 ) {
		//******bind - Is used to combine Multiple event types at once
		  $("body").bind("cut copy paste", function(e) {
			e.preventDefault();
		});
		//When the keybord key deep press
		$(text).on("keydown", function(e) {
		$('.error-text').remove();
		//backspace[8], tab[9], escape[27], leftArrow[37], rightArrow[39], delete[46], enter[13]
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [8, 9, 27, 37, 39, 46, 13]) !== -1) {
			return;
		}
		//***** Check input text field to limited access *****
		if ($(this).val().length > max-1) {
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>max length restricted to "+ minLength +".</span>");
			e.preventDefault();
		} 	
	});
	//*********When the keybord key is released*******
	$(text).on("keyup", function(e) {
		$(".introjs-duplicate-nextbutton").remove();
		$('.error-text').remove();
		intro.refresh();
		if (e.keyCode == 17) {
			$(text).val(validationText1);
		}
		//*******Text empty to show error message***********
		if ($(this).val() == "") {
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter above text.</span>");
			$(".introjs-nextbutton").hide();
			//$(this).addClass("empty");
		} else {
			//************check the given text entered or not and display next button*********
			var trimText = $(text).val();
			if ( trimText.trim().toLowerCase() == validationText1.toLowerCase() || 
					trimText.trim().toLowerCase() == validationText2.toLowerCase() ) {
				$(".introjs-nextbutton").show();
			} else {
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter above text.</span>");
				$(".introjs-nextbutton").hide();
			}
		}
	});
} 

</script>

	<div class="col-xs-12">
		<div class="ct-box-main">
		
			<div class="text-center">
				<h1 class="label ct-demo-heading text-center" id="headding">Content Formatting</h1>
			</div>

			<div class="col-xs-12 margin-top opacity00" id="content">
				<div class="col-xs-4 col-xs-offset-0 margin-top padding00" id="fontHtmlText">
					<pre class='col-xs-12 creamPreTab4 padding00' id="code">
<span class='border1 opacity00' id="docType">&lt;!DOCTYPE html&gt;</span>
<span class='border2 opacity00' id="hOpenTag"> &lt;html&gt; </span>
	<span class='border4 opacity00'>&lt;head&gt;</span>
		<span class='border6 opacity00'>&lt;title&gt; Text Alignments &lt;/title&gt; </span>
		<div class='border9 opacity00' id="internalStyles" style="display:inline-block"><span id="styleOpenTag">&lt;style&gt;</span><div id="applyCss"></div>
<span class='border10 opacity00' id="styleCloseTag">&lt;/style&gt;</span></div>
	<span class='border5 opacity00'>&lt;/head&gt;</span>
	<span class='border7 opacity00' id="bodyOpenTag">&lt;body&gt; </span>
		<div id="divTag" class="position"><input id="divTagOpen" type="text" size="4" maxlength='4'><input id="divTagText" type="text" size="20" maxlength='20'><input id="divTagClose" type="text" size="4" maxlength='4'></div>
	<span class='border8 opacity00' id="bodyCloseTag">&lt;/body&gt;</span>
<span class='border3 opacity00' id="hClosedTag">&lt;/html&gt;</span>
						</pre>
					</div>

				<div class="col-xs-6 col-xs-offset-1">
					<div class = "col-xs-12" id = "htmlDisplay">
						<div id ="browser" class="padding00"></div>
					</div>
				</div>
			</div>
			<div class = 'col-xs-12 buttons-div text-center'>
				<button type = "button" class = "btn btn-warning visibility-hidden" id = "restartBtn">Restart</button>
			</div> 
		</div>
	</div>
	
</body>
</html>