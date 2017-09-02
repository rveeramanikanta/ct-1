<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Internal Style style</title>
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

<style>
.margin-top-25 {
	margin-top: 25px;
}

.padding00 {
	padding: 0;
}

pre {
	-moz-tab-size: 3;
	margin: 0;
}

img {
	width: 100%;
}

.usr-btn {
	background-color: green;
}

.ui-effects-transfer {
	border: 1px solid #003399;
	z-index: 9999999;
}

.introjs-fixParent {
	position: relative !important;
}

[contenteditable=true]:empty:before {
	content: " ";
	color: #B8B8A0;
}

#h1Tag {
	position: relative;
}

#h2Tag {
	position: relative;
}

.position {
    display: inline-block;
    min-height: 15px;
    min-width: 30px;
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
}

.styles {
	display: inline-block;
	/* min-width: 15px;
	min-height: 15px; */
}

.z-index {
	z-index: 9999999;
	position: relative;
	background-color: white;
	padding: 4px;
	border-radius: 4px;
}

.ct-red {
	font-family: monospace;
	color: red;
	font-weight: bold;
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
	/* height: 100px; */
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
<script>
var count = 0;
var introjs;
var DELETE = 46;
var ESC = 27;
var BACKSPACE = 8;
var LEFTARROW = 37;
var RIGHTARROW = 39;

$(document).ready(function() {
	initIntroJS();
	displaybrowser('#browser',1);
	//drag option disabled
	$("body").attr({ondragstart : "return false"});
	
	$("#restart").click(function() {
		location.reload();
	});
});

function initIntroJS() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		showBullets: false,
		exitOnOverlayClick: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [ {
					element: '#program',
					intro: '',
					tooltipClass: 'hide'
				}, {
					element: '#h1Tag',
					intro: ''
				}, {
					element: '#browser',
					intro: '',
					tooltipClass: 'hide'
				}, {
					element: '#restart',
					intro: '',
					position: 'right'
				}]
	});
	
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch(elementId) {
		
			case "program":
				$('.introjs-nextbutton').hide();
				basicTags();
				break;
		
			case "h1Tag":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#h1Tag").removeClass("opacity00");
					var text = "This is <span class='ct-code-b-yellow'>h1</span> tag";
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
				
			case "browser":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introjs._currentStep == 2) {
						$("#h1Tag").addClass("z-index").effect("highlight", {color: "yellow"}).effect("transfer", {to: $("#h1Browser"), className: "ui-effects-transfer"}, 1500, function() {
							$("#h1Browser").removeClass("opacity00");
							$("#h1Tag").removeClass("z-index");
							$("#h1Style").append("<span id='h1StyleTag' class='style'></span>");
							$("#h1StyleTag").append('<div id="h1Selector" class= "position"> <span id="h1Enter" contenteditable="false" maxlength="3" spellcheck="false"> </span> </div>');
							nextStepTiming("#h1Selector");
						});
					} else {
						browserSteps();
					}
				});
				break;
				
			case "h1Selector":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Let us create <span class='ct-code-b-yellow'>h1</span> selector in style tag.<br> Enter <span class='ct-code-b-yellow'>h1</span>";
					typing('.introjs-tooltiptext', text, function() {
						$("#h1StyleTag").append('<div id="h1Open" class= "position"> <span id="h1OpenBrace" contenteditable="false" maxlength="2" spellcheck="false"> </span> </div>');
	 					$("#h1StyleTag").append('<br>\t\t\t\t<div id="h1Coloring" class= "position"> <span id="h1Color" contenteditable="false" maxlength="14" spellcheck="false"> </span> </div><br>'
	 										+ '\t\t\t<div id="h1Close" class= "position"> <span id="h1CloseBrace" contenteditable="false" maxlength="2" spellcheck="false"></span> </div>');
	 					nextStep("#h1Open");
						events("#h1Enter", "h1", 0, 1);
					});
				});
				break;
				
			case "h1Open":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Enter <span class='ct-code-b-yellow'>{</span>";
					typing('.introjs-tooltiptext', text, function() {
						nextStep("#h1Close");
						events("#h1OpenBrace", "{", 0, 1);
					});
				});
				break;
				
			case "h1Close":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Enter <span class='ct-code-b-yellow'>}</span>";
					typing('.introjs-tooltiptext', text, function() {
						nextStep("#h1Coloring");
						events("#h1CloseBrace", "}", 0, 1);
					});
				});
				break;
				
			case "h1Coloring":
				$('.introjs-nextbutton').hide();
				introjs.refresh();
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Enter <span class='ct-code-b-yellow'>color: blue;</span>";
					typing('.introjs-tooltiptext', text, function() {
						events("#h1Color", "color: blue;", 1, 0);
					});
				});
				break;
				
			case "h2Tag":
				$("#browser").removeClass("z-index");
				$('.introjs-nextbutton').hide();
				introjs.refresh();
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Let us create <span class='ct-code-b-yellow'>h2</span> tag";
					typing('.introjs-tooltiptext', text, function() {
						$("#h2Tag").removeClass("opacity00");
						browserNextStep();
					});
				});
				break;
				
			case "h2Selector":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Let us create a <span class='ct-code-b-yellow'>h2</span> selector in style tag.<br>Enter <span class='ct-code-b-yellow'>h2</span>";
					typing('.introjs-tooltiptext', text, function() {
						$("#h2Style").append('<div id="h2Open" class= "position"> <span id="h2OpenBrace" contenteditable="false" maxlength="2" spellcheck="false"> </span> </div>'
								+ '<br>\t\t\t\t<div id="h2Coloring" class= "position"> <span id="h2Color" contenteditable="false" maxlength="12" spellcheck="false"> </span> </div><br>'
								+ '\t\t\t\t<div id="fontType" class= "position"> <span id="fontFmly" contenteditable="false" maxlength="24" spellcheck="false"> </span> </div><br>'
								+ '\t\t\t\t<div id="alignment" class= "position"> <span id="alignType" contenteditable="false" maxlength="20" spellcheck="false"> </span> </div><br>'
								+ '\t\t\t<div id="h2Close" class= "position"> <span id="h2CloseBrace" contenteditable="false" maxlength="2" spellcheck="false"> </span> </div>')
						nextStep("#h2Open");
						events('#h2Enter', "h2", 0, 1);
					});
				});
				break;
				
			case "h2Open":
				$('.introjs-nextbutton').hide();
				introjs.refresh();
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Enter <span class='ct-code-b-yellow'>{</span>";
					typing('.introjs-tooltiptext', text, function() {
						nextStep("#h2Close");
						events("#h2OpenBrace", "{", 0, 1);
					});
				});
				break;
				
			case "h2Close":
				$('.introjs-nextbutton').hide();
				introjs.refresh();
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Enter <span class='ct-code-b-yellow'>}</span>";
					typing('.introjs-tooltiptext', text, function() {
						nextStep("#h2Coloring");
						events("#h2CloseBrace", "}", 0, 1);
					});
				});
				break;
				
			case "h2Coloring":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Enter <span class='ct-code-b-yellow'>color: red;</span>";
					typing('.introjs-tooltiptext', text, function() {
						events("#h2Color", "color: red;", 2, 0);
					});
				});
				break;
				
			case "fontType":
				$("#browser").removeClass("z-index");
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Enter <span class='ct-code-b-yellow'>font-family: monospace;</span>";
					typing('.introjs-tooltiptext', text, function() {
						events("#fontFmly", "font-family: monospace;", 3, 0)
					});
				});
				break;
				
			case "alignment":
				$("#browser").removeClass("z-index");
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Enter <br><span class='ct-code-b-yellow'>text-align: center;</span>";
					typing('.introjs-tooltiptext', text, function() {
						events("#alignType", "text-align: center;", 4, 0)
					});
				});
				break;
				
			case "h3Tag":
				$("#browser").removeClass("z-index");
				$('.introjs-nextbutton').hide();
				introjs.refresh();
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Let us create <span class='ct-code-b-yellow'>h3</span> tag";
					typing('.introjs-tooltiptext', text, function() {
						$("#h3Tag").removeClass("opacity00");
						browserNextStep();
					});
				});
				break;
				
			case "h3Selector":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introjs._currentStep == 17) {
						var text = "let us create <span class='ct-code-b-yellow'>h3</span> selector in style tag.<br>Enter <span class='ct-code-b-yellow'>h3</span>";
						typing('.introjs-tooltiptext', text, function() {
							$("#h3Style").append('<div class= "position" id="h3Open"> <span id = "h3OpenBrace" contenteditable="false" maxlength="2" spellcheck="false"> </span> </div>'
											+ '<br>\t\t\t\t<div class= "position" id = "h3Background"> <sapn id="h3Color" contenteditable="false" maxlength="27" spellcheck="false"> </span> </div>'
											+ '<br>\t\t\t<div class= "position" id = "h3Close"> <span id="h3CloseBrace" contenteditable="false" maxlength="2" spellcheck="false"> </span> </div>');
							nextStep("#h3Open");
							events("#h3Enter", "h3", 0, 1);
						});
					} else {
						$("#browser").removeClass("z-index");
						var text = "Enter <span class='ct-code-b-yellow'>, h4</span>";
						typing('.introjs-tooltiptext', text, function() {
		                   	nextStep('#h3Background');
		                    $("#h3Enter").text('');
		                   	$("#h3Enter").off();
		                    $("#h3Enter").append('h3<span class= "position" id="h3CommaEnter" contenteditable="false" maxlength="5" spellcheck="false"> </div> ');
		                    events("#h3CommaEnter", ", h4", 0, 1);
						});
					}
				});
				break;
				
			case "h4Selector":
				$("#browser").removeClass("z-index");
				var text = "Let us change the <span class='ct-code-b-yellow'>h4</span> background color to orange";
				typing('.introjs-tooltiptext', text, function() {
					nextStep("#h3Selector");
					events('#h4Enter', "h4", 0, 1);
				});
				break;
				
			case "h3Open":
				$('.introjs-nextbutton').hide();
				introjs.refresh();
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Enter <span class='ct-code-b-yellow'>{</span>";
					typing('.introjs-tooltiptext', text, function() {
						nextStep("#h3Close");
						events("#h3OpenBrace", "{", 0, 1);
					});
				});
				break;
				
			case "h3Close":
				$('.introjs-nextbutton').hide();
				introjs.refresh();
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Enter <span class='ct-code-b-yellow'>}</span>";
					typing('.introjs-tooltiptext', text, function() {
						nextStep("#h3Background");
						events("#h3CloseBrace", "}", 0, 1);
					});
				});
				break;
				
			case "h3Background":
				$('.introjs-nextbutton').hide();
				introjs.refresh();
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introjs._currentStep == 20) {
						$('.introjs-tooltip').css({'min-width' : '225px'});
						var text = "Enter <br><span class='ct-code-b-yellow'>background-color: orange;</span>";
						typing('.introjs-tooltiptext', text, function() {
							events("#h3Color", "background-color: orange;", 5, 0);
						});
					} else {
						var text = "We are changing <span class='ct-code-b-yellow'>h4</span> background color to orange.";
						typing('.introjs-tooltiptext', text, function() {
							$('.introjs-tooltipbuttons').append('<a class="introjs-button usr-btn" onclick="userButton(6)">Next &#8594;</a>');
						});
					}
				});
				break;
				
			case "h4Tag":
				$("#browser").removeClass("z-index");
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Let us create <span class='ct-code-b-yellow'>h4</span> tag";
					typing('.introjs-tooltiptext', text, function() {
						$("#h4Tag").removeClass("opacity00");
						browserNextStep();
					});
				});
				break;
				
			case "h5Tag":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Let us create <span class='ct-code-b-yellow'>h5</span> tag";
					typing('.introjs-tooltiptext', text, function() {
						$("#h5Tag").removeClass("opacity00");
						browserNextStep();
					})
				});
				break;
				
			case "h5Selector":
				$("#browser").removeClass("z-index");
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introjs._currentStep == 27) {
					var text = "Let us create <span class='ct-code-b-yellow'>h5</span> selector in style tag.<br>Enter <span class='ct-code-b-yellow'>h5</span>";
						typing('.introjs-tooltiptext', text, function() {
							nextStep("#h5Open");
							events("#h5Enter", "h5", 0, 1);
						});
					} else {
						$("#h5Enter").removeAttr("contenteditable spellcheck maxlength");
						var text = "Enter <span class='ct-code-b-yellow'>, h6</span>";
						typing('.introjs-tooltiptext', text, function() {
							$("#h5Enter").text('');
							$("#h5Enter").off();
							$("#h5Enter").append('h5<span id="h5CommaEnter" contenteditable="false" spellcheck="false" maxlength="5"> </span> ');
							nextStep("#h5Bordering");
							events("#h5CommaEnter", ", h6", 0, 1);
						});
					}
				});
				break;
				
			case "h5Open":
				$('.introjs-nextbutton').hide();
				introjs.refresh();
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Enter <span class='ct-code-b-yellow'>{</span>";
					typing('.introjs-tooltiptext', text, function() {
						nextStep("#h5Close");
						events("#h5OpenBrace", "{", 0, 1);
					});
				});
				break;
				
			case "h5Close":
				$('.introjs-nextbutton').hide();
				introjs.refresh();
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Enter <span class='ct-code-b-yellow'>}</span>";
					typing('.introjs-tooltiptext', text, function() {
						nextStep("#h5Bordering");
						events("#h5CloseBrace", "}", 0, 1);
					});
				});
				break;
				
			case "h5Bordering":
				$('.introjs-nextbutton').hide();
				introjs.refresh();
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introjs._currentStep == 30) {
						var text = "Enter <span class='ct-code-b-yellow'>border: 2px solid green;</span>";
						typing('.introjs-tooltiptext', text, function() {
							events("#h5Border", "border: 2px solid green;", 7, 0);
						});
					} else {
						var text = "We are changing <span class='ct-code-b-yellow'>h6</span> border to 2px solid green";
						typing('.introjs-tooltiptext', text, function() {
							$('.introjs-tooltipbuttons').append('<a class="introjs-button usr-btn" onclick="userButton(11)">Next &#8594;</a>');
						});
					}
				});
				break;
				
			case "h5Coloring":
				$("#browser").removeClass("z-index");
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introjs._currentStep == 31) {
						var text = "Enter <span class='ct-code-b-yellow'>color: brown;</span>";
						typing('.introjs-tooltiptext', text, function() {
							events("#h5Color", "color: brown;", 8, 0);
						});
					} else {
						var text = "We are changing <span class='ct-code-b-yellow'>h6</span> color to brown";
						typing('.introjs-tooltiptext', text, function() {
							$('.introjs-tooltipbuttons').append('<a class="introjs-button usr-btn" onclick="userButton(12)">Next &#8594;</a>');
						});
					}
				});
				break;
				
			case "h5fontFmly":
				$("#browser").removeClass("z-index");
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introjs._currentStep == 32) {
						var text = "Enter <span class='ct-code-b-yellow'>font-family: monospace;</span>";
						typing('.introjs-tooltiptext', text, function() {
							events("#h5FontType", "font-family: monospace;", 9, 0);
						});
					} else {
						var text = "We are changing <span class='ct-code-b-yellow'>h6</span> font family to monospace";
						typing('.introjs-tooltiptext', text, function() {
							$('.introjs-tooltipbuttons').append('<a class="introjs-button usr-btn" onclick="userButton(13)">Next &#8594;</a>');
						});
					}
				});
				break;
				
			case "h5Alignment":
				$("#browser").removeClass("z-index");
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introjs._currentStep == 33) {
						var text = "Enter <span class='ct-code-b-yellow'>text-align: right;</span>";
						typing('.introjs-tooltiptext', text, function() {
							events("#h5Align", "text-align: right;", 10, 0);
						});
					} else {
						var text = "We are changing <span class='ct-code-b-yellow'>h6</span> text align to right";
						typing('.introjs-tooltiptext', text, function() {
							$('.introjs-tooltipbuttons').append('<a class="introjs-button usr-btn" onclick="userButton(14)">Next &#8594;</a>');
						});
					}
				});
				break;
				
			case "h6Tag":
				$("#browser").removeClass("z-index");
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Let us create <span class='ct-code-b-yellow'>h6</span> tag";
					typing('.introjs-tooltiptext', text, function() {
						$("#h6Tag").removeClass("opacity00");
						browserNextStep();
					});
				});
				break;
				
			case "restart":
				$("#browser").removeClass("z-index");
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#restart").removeClass("opacity00");
					var text = "Click to restart";
					typing('.introjs-tooltiptext', text);
				});
				break;
		}
	});
	
	introjs.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting(text, {
		"typing_interval": "35",
		"cursor_color": "white",
	}, function() {
		$(selector).removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	})
}

function userButton() {
	$('.usr-btn').remove();
	count++;
	if (count == 1) {
		$("#browser").addClass("z-index");
		$("#h1Color").effect("transfer", {to: $("#h1Browser"), className: "ui-effects-transfer"}, 1500, function() {
			$("#h1Browser").css({'color': 'blue'});
			$("#h1Tag").append('\t\t<div id="h2Tag" class="opacity00" class= "position">&lt;h2&gt;h2 is smaller than h1&lt;/h2&gt;</div>');
			nextStep("#h2Tag");
			$('.introjs-nextbutton').show();
		});
	} else if (count == 2) {
		$("#browser").addClass("z-index");
		$("#h2Coloring").effect("transfer", {to: $("#h2Browser"), className: "ui-effects-transfer"}, 1500, function() {
			$("#h2Browser").css({"color" : "red"});
			nextStep("#fontType");
			$('.introjs-nextbutton').show();
		});
	} else if (count == 3) {
		$("#browser").addClass("z-index");
		$("#fontType").effect("transfer", {to: $("#h2Browser"), className: "ui-effects-transfer"}, 1500, function() {
			$("#h2Browser").css({"font-family" : "monospace"});
			nextStep("#alignment");
			$('.introjs-nextbutton').show();
		});
	} else if (count == 4) {
		$("#browser").addClass("z-index");
		$("#alignType").effect("transfer", {to: ($("#h2Browser").parent()), className: "ui-effects-transfer"}, 1500, function() {
			$("#h2Browser").parent().addClass("text-center");
			$("#h2Tag").append('\t\t<div id="h3Tag" class="opacity00">&lt;h3&gt;>h3 is smaller than h2&lt;/h3&gt;</div>');
			nextStep("#h3Tag");
			$('.introjs-nextbutton').show();
		});
	} else if (count == 5) {
		$("#browser").addClass("z-index");
		$("#h3Color").effect("transfer", {to: ($("#h3Browser").parent()), className: "ui-effects-transfer"}, 1500, function() {
			$("#h3Browser").parent().css({"background-color" : "orange"});
			$("#h3Tag").append('\t\t<div id="h4Tag" class="opacity00">&lt;h4&gt;h4 is smaller than h3&lt;/h4&gt;</div>');
			nextStep('#h4Tag');
			$('.introjs-nextbutton').show();
		});
	} else if (count == 6) {
		$("#browser").addClass("z-index");
		$("#h3Color").effect("transfer", {to: ($("#h4Browser").parent()), className: "ui-effects-transfer"}, 1500, function() {
			$("#h4Browser").parent().css({"background-color" : "orange"});
			$("#h4Tag").append('\t\t<div id="h5Tag" class="opacity00">&lt;h5&gt;h5 is smaller than h4&lt;/h5&gt;</div>');
			nextStep('#h5Tag');
			$('.introjs-nextbutton').show();
		});
	} else if (count == 7) {
		$("#browser").addClass("z-index");
		$("#h5Border").effect("transfer", {to: ($("#h5Browser").parent()), className: "ui-effects-transfer"}, 1500, function() {
			$("#h5Browser").parent().css({"border" : "2px solid green"});
			nextStep("#h5Coloring");
			$('.introjs-nextbutton').show();
		});
	} else if (count == 8) {
		$("#browser").addClass("z-index");
		$("#h5Color").effect("transfer", {to: $("#h5Browser"), className: "ui-effects-transfer"}, 1500, function() {
			$("#h5Browser").css({"color" : "brown"});
			nextStep("#h5fontFmly");
			$('.introjs-nextbutton').show();
		});
	} else if (count == 9) {
		$("#h5FontType").effect("transfer", {to: $("#h5Browser"), className: "ui-effects-transfer"}, 1500, function() {
			$("#h5Browser").css({"font-family" : "monospace"});
			nextStep("#h5Alignment");
			$('.introjs-nextbutton').show();
		});
	} else if (count == 10) {
		$("#h5Align").effect("transfer", {to: ($("#h5Browser").parent()), className: "ui-effects-transfer"}, 1500, function() {
			$("#h5Browser").parent().addClass("text-right");
			$("#h5Tag").append('\t\t<div id="h6Tag" class="opacity00">&lt;h6&gt;h6 is smaller than h5&lt;/h6&gt;</div>');
			nextStep("#h6Tag");
			$('.introjs-nextbutton').show();
		});
	} else if (count == 11) {
		$("#browser").addClass("z-index");
		$("#h5Border").effect("transfer", {to: ($("#h6Browser").parent()), className: "ui-effects-transfer"}, 1500, function() {
			$("#h6Browser").parent().css({"border" : "2px solid green"});
			nextStep("#h5Coloring");
			$('.introjs-nextbutton').show();
		});
	} else if (count == 12) {
		$("#browser").addClass("z-index");
		$("#h5Border").effect("transfer", {to: $("#h6Browser"), className: "ui-effects-transfer"}, 1500, function() {
			$("#h6Browser").parent().css({"color" : "brown"});
			nextStep("#h5fontFmly");
			$('.introjs-nextbutton').show();
		});
	} else if (count == 13) {
		$("#browser").addClass("z-index");
		$("#h5FontType").effect("transfer", {to: $("#h6Browser"), className: "ui-effects-transfer"}, 1500, function() {
			$("#h6Browser").css({"font-family" : "monospace"});
			nextStep("#h5Alignment");
			$('.introjs-nextbutton').show();
		});
	} else if (count == 14) {
		$("#browser").addClass("z-index");
		$("#h5FontType").effect("transfer", {to: ($("#h6Browser").parent()), className: "ui-effects-transfer"}, 1500, function() {
			$("#h6Browser").parent().addClass("text-right");
			$('.introjs-nextbutton').show();
		});
	}
}

function nextButton(count) {
	$('.introjs-tooltipbuttons').append('<a class="introjs-button usr-btn" onclick="userButton('+count+')">Next &#8594;</a>');
	count++;
}

//dynamic steps
function getStep(element, intro, tooltipClass, position) {
	var step = {};
	if (typeof element != 'undefined') {
		step['element'] = element;
	}
	if (typeof intro != 'undefined') {
		step['intro'] = intro;
	}
	if (typeof tooltipClass != 'undefined') {
		step['tooltipClass'] = tooltipClass;
	}
	if (typeof position != 'undefined') {
		step['position'] = position;
	}
	return step;
}

//browser repeated steps
function browserSteps() {
	if (introjs._currentStep == 8) {
		$("#h2Tag").addClass("z-index").effect("transfer", {to: $("#h2Browser"), className: "ui-effects-transfer"}, 1500, function() {
			$("#h2Browser").removeClass("opacity00");
			$("#h2Tag").removeClass("z-index");
			$("#h1Style").append('<br><span id="h2Style"></span>');
			$("#h2Style").append('\t\t\t<div id="h2Selector" class="position"> <span id="h2Enter" contenteditable="false" maxlength="3" spellcheck="false"> </span> </div>');
			nextStepTiming("#h2Selector");
		});
	} else if (introjs._currentStep == 16) {
		$("#h3Tag").addClass("z-index").effect("transfer", {to: $("#h3Browser"), className: "ui-effects-transfer"}, 1500, function() {
			$("#h3Browser").removeClass("opacity00");
			$("#h3Tag").removeClass("z-index");
			$("#h2Style").append('<br><span id="h3Style"></span>');
			$("#h3Style").append('\t\t\t<div id="h3Selector" class="position"> <span id="h3Enter" contenteditable="false" maxlength="3" spellcheck="false"> </span> </div>');
			nextStepTiming("#h3Selector");
		});
	} else if (introjs._currentStep == 22) {
		$("#h4Tag").addClass("z-index").effect("transfer", {to: $("#h4Browser"), className: "ui-effects-transfer"}, 1500, function() {
			$("#h4Browser").removeClass("opacity00");
			$("#h4Tag").removeClass("z-index");
			$("#h3Enter").removeAttr('contenteditable spellcheck maxlength');
			nextStepTiming('#h3Selector')
		})
	} else if (introjs._currentStep == 26) {
		$("#h5Tag").addClass("z-index").effect("transfer", {to: $("#h5Browser"), className: "ui-effects-transfer"}, 1500, function() {
			$("#h5Browser").removeClass("opacity00");
			$("#h5Tag").removeClass("z-index");
			$("#h3Style").append('<br><span id="h5Style"></span>')
			$("#h5Style").append('\t\t\t<div id="h5Selector" class="position"> <span id="h5Enter" contenteditable="false" maxlength="25" spellcheck="false"> </span> </div>'
					+ '<div id="h5Open" class="position"> <span id="h5OpenBrace" contenteditable="false" maxlength="2" spellcheck="false"> </span> </div><br>'
					+ '\t\t\t\t<div id="h5Bordering" class="position"> <span id="h5Border" contenteditable="false" maxlength="25" spellcheck="false"> </span> </div><br>'
					+ '\t\t\t\t<div id="h5Coloring" class="position"> <span id="h5Color" contenteditable="false" maxlength="14" spellcheck="false"> </span> </div><br>'
					+ '\t\t\t\t<div id="h5fontFmly" class="position"> <span id="h5FontType" contenteditable="false" maxlength="24" spellcheck="false"> </span> </div><br>'
					+ '\t\t\t\t<div id="h5Alignment" class="position"> <span id="h5Align" contenteditable="false" maxlength="19" spellcheck="false"> </span> </div><br>'
					+ '\t\t\t<div id="h5Close" class="position"><span id="h5CloseBrace" contenteditable="false" maxlength="2" spellcheck="false"> </span> </div>');
			nextStepTiming("#h5Selector");
		});
	} else {
		$("#h6Tag").effect("transfer", {to: $("#h6Browser"), className: "ui-effects-transfer"}, 1500, function() {
			$("#h6Browser").removeClass("opacity00");
			nextStepTiming("#h5Selector");
		});
	}
}

//dynamic step with time out function
function nextStepTiming(id) {
	setTimeout(function() {
		var newStep = getStep(id, '', '', '');
		introjs.insertOption(introjs._currentStep + 1, newStep);
		introjs.nextStep();
	}, 800);
}

//nextStep
function nextStep(id) {
	var newStep = getStep(id, '', '', '');
	introjs.insertOption(introjs._currentStep + 1, newStep);
}

//dynamic steps for brower
function browserNextStep() {
	var newStep = getStep('#browser', '', 'hide', '');
	introjs.insertOption(introjs._currentStep + 1, newStep);
	$('.introjs-nextbutton').show();
}

//Condition for entered colors
function events(id, text, count, val) {
	$('[contenteditable = false]').attr('contenteditable', 'true');
	$(id).css({"outline" : "none"});
	$(id).focus();
	$(id).text().trim();
	introjs.refresh();
	//disabled paste option
	$(id).off('paste');
	$(id).on('paste', function(e) {
		e.preventDefault();
	});
	
	($(id).parent()).click(function() {
		$(id).focus();
	});
	
	$(id).off('keydown');
	$(id).on('keydown', function(e) {
		var max = $(this).attr("maxlength");
		
		//backspace = 8, delete = 46, leftarrow = 37, rightarrow = 39, esc = 27, enter = 13, ctrl = 17, tab = 9;
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		
		if (e.keyCode == 13 || e.keyCode == 17 || e.keyCode == 9) {
			e.preventDefault();
		}
		if ($(id).text().length >= max) {
			e.preventDefault();
		}
	});
	
	$(id).off('keyup');
	$(id).on('keyup', function(e) {
		$(".usr-btn").remove();
		$(".ct-red").remove();
		introjs.refresh();
		if (e.keyCode == 17) {
			$(id).text(text);
		}
		if ($(id).text().trim() == text) {
			$('[contenteditable = true]').attr('contenteditable', 'false');
			if (val == 1) {
				$('.introjs-nextbutton').show();
			} else {
				$('.introjs-tooltipbuttons').append('<a class="introjs-button usr-btn" onclick="userButton(' + count + ')">Next &#8594;</a>');
			}
		} else {
			$('.introjs-nextbutton, .usr-btn').hide();
			$('.introjs-tooltiptext').append('<div class="ct-red">Properly write above text</div>');
		}
	});
}

function zoomInEffect(id, callBackFunction) {
	$(id).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(this).removeClass("animated zoomIn");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function basicTags() {
	TweenMax.to($("#docType"), 1, {opacity: 1, onComplete: function() {
		TweenMax.to($("#htmlOpen, #htmlClose"), 1, {opacity: 1, onComplete: function() {
			TweenMax.to($("#headOpen, #headClose"), 1, {opacity: 1, onComplete: function() {
				TweenMax.to($("#titleTag"), 1, {opacity: 1, onComplete: function() {
					$("#browser").addClass("z-index").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
						$(this).removeClass("animated zoomIn");
						setTimeout(function() {
							$("#browser").removeClass("z-index");
							TweenMax.to($("#bodyOpen, #bodyClose"), 1, {opacity: 1, onComplete: function() {
								TweenMax.to($("#styleOpen, #styleClose"), 1, {opacity: 1, onComplete: function() {
									$('.introjs-tooltip').removeClass("hide");
									var text = "Basic html page";
									typing('.introjs-tooltiptext', text, function() {
										$('.introjs-nextbutton').show();
									});
								}});
							}});
						}, 800);
					});
				}});
			}});
		}});
	}});
}

function displaybrowser(selector, num) {  
	$(selector).append('<div class="container col-xs-12 padding00" id="viewBrowser'+ num +'">'
				+ '<div class="tab-container"><ul class="tabs clearfix"><li class="active">'
				+ '<div class="col-xs-10 margin-top20 padding00" id="loadImg'+ num +'">Internal Style</div>'
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
				+ '<h1><span id="h1Browser" class="opacity00">This is first heading</span></h1>'
				+ '<h2><span id="h2Browser" class="opacity00">h2 is smaller than h1</span></h2>'
				+ '<h3><span id="h3Browser" class="opacity00">h3 is smaller than h2</span></h3>'
				+ '<h4><span id="h4Browser" class="opacity00">h4 is smaller than h3</span></h4>'
				+ '<h5><span id="h5Browser" class="opacity00">h5 is smaller than h4</span></h5>'
				+ '<h6><span id="h6Browser" class="opacity00">h6 is smaller than h5</span></h6>'
				+ '</div></div></div>');
	
				$('#url1').attr("placeholder", "https://www.codetantra.com/webdevelopment/internalStyles.html");
}

function appendNextBtn(callBackFunction) {
	$('.introjs-tooltiptext').append('<div class="text-right"><a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a></div>');
	$('.introjs-duplicate-nextbutton').click(function() {
		$('.introjs-duplicate-nextbutton').remove();
		callBackFunction();
	});
}

</script>
<body>
	<div class="text-center margin-top-25">
		<h4 class="label ct-demo-heading">Internal Style</h4>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-12 margin-top-25">
<pre class="col-xs-4 creamPreTab4" id="program">
<span id="docType" class="opacity00">&lt;!DOCTYPE html&gt;</span>
<span id="htmlOpen" class="opacity00">&lt;html&gt;</span>
	<span id="headOpen" class="opacity00">&lt;head&gt;</span>
		<span id="titleTag" class="opacity00">&lt;title&gt;Internal Style&lt;/title&gt;</span>
		<span id="styleOpen" class="opacity00">&lt;style&gt;</span>
			<span id="h1Style"></span>
		<span id="styleClose" class="opacity00">&lt;/style&gt;</span>
	<span id="headClose" class="opacity00">&lt;/head&gt;</span>
	<span id="bodyOpen" class="opacity00">&lt;body&gt;</span>
		<div id="h1Tag" class="position opacity00" class="position">&lt;h1&gt;This is first heading&lt;/h1&gt;</div> 
	<span id="bodyClose" class="opacity00">&lt;/body&gt;</span> 
<span id="htmlClose" class="opacity00">&lt;/html&gt;</span>
</pre>
			<div class="col-xs-6 col-xs-offset-1 padding00 opacity00" id="browser"></div>
		</div>
		<div class="col-xs-12 text-center margin-top-25">
			<span class="btn btn-warning opacity00" id="restart">Restart</span>
		</div>
	</div>
</body>
</html>