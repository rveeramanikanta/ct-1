 <%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
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
<script src="/js/gs/TweenMax.min.js"></script>
<title>Links</title>
<style>
.margin-top-15 {
	margin-top: 15px;
}

.margin-top-20 {
	margin-top: 20px;
}

pre {
	-moz-tab-size: 3;
	tab-size: 3;
	background: transparent;
}

.padding0 {
	padding: 0;
}

.editing {
	display: inline-block;
}

[contenteditable=true]:empty:before {
	content: " ";
	color: #B8B8A0;
}

.margin0 {
	margin: 0;
}

img {
	width: 100%;
}

.browser {
	border: 1px solid black;
	padding: 8px;
	height: 190px;
}

.z-index {
	z-index: 9999999;
	background-color: white;
	position: relative;
	padding: 4px;
	border-radius: 4px;
}

.ct-red {
	color: red;
	font-family: monospace;
	font-weight: bold;
}

.usr-btn {
	background-color: green;
}

.ui-effects-transfer {
	border: 1px solid #003399;
	z-index: 9999999;
}

b {
	background-color: #ccc;
	padding: 0 4px;
	border: 1px solid lightgray;
	border-radius: 4px;
}

a {
	text-decoration: underline;
}

a.link-linker:link {
	color: red !important;
}


a.link-visited:visited {
	color: hotpink !important;
}

a.link-hover:hover {
	background-color: yellow;
}


a.link-active:active {
	color: green !important;
}


.border-css {
	border: 1px solid grey;
}

.container {
	padding: 0px;
	margin-top: 30px;
	margin: 0;
}

.active {
	display: flex;
	align-items: center;
}

.browser-css {
	margin-top: 3px;
}

.plus {
	color: white;
	font-size: 18px;
}

.url {
	display: flex;
	border: 1px solid;
	align-items: center;
	margin-bottom: 5px;
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

.user-text {
	border: medium none;
	font-family: Bitstream Vera Serif Bold,sans-serif;
	width: 100%;
	padding-left: 5px;
}

.tab-container {
   	background: #0a0505 none repeat scroll 0 0;
}

.html-body {
	height: 200px;
	border-top: 1px solid gray;
	background: white;
	padding: 8px;
}

.margin-top5 {
	margin-top: 5px;
}

.margin-top20 {
	margin-top: 20px;
}

.usr-txt {
	background: transparent;
	border: none;
}
</style>
<script>
var introjs;
$(document).ready(function() {
	creatingBrowser('#homeBrowser', '1');
	$('.browser1').append('<p id="withoutLinkText" class="opacity00">Home page</p>');
	$('#inputId1').val('https://www.codetantra.com/webdevelopment/home.html');
	$('#browserHeading1').text('Home Page');
	
	creatingBrowser('#aboutBrowser', '2');
	$('.browser2').append('<p id="browser2Text" class="opacity00">About us page</p>'
					+ '<iframe name="targetDiv" width="100%" height="100%" frameBorder="0"></iframe>');
	$('#inputId2').val('https://www.codetantra.com/webdevelopment/about-us.html');
	$('#browserHeading2').text('About Us Page');
	initIntroJS();
	
	$("#restart").click(function() {
		location.reload();
	});
	
	//drag option disabled
	$("body").attr({ondragstart : "return false"});
	
});

function initIntroJS() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers : false,
		showBullets : false,
		exitOnOverlayClick : false,
		keyboardNavigation : false,
		exitOnEsc : false,
		steps : [ {
					element: '#homeProgram',
					intro: '',
					tooltipClass: 'hide'
				}, {
					element: '#pTagDiv',
					intro: ''
				}, {
					element: '#browser1',
					intro: '',
					tooltipClass: 'hide'
				}, {
					element: '#pOpen',
					intro: ''
				}, {
					element: '#pClose',
					intro: ''
				}, {
					element: '#backGroundDiv',
					intro: ''
				}, {
					element: '#alignmentDiv',
					intro: ''
				}, {
					element: '#pSelector',
					intro: ''
				}, {
					element: '#browser1',
					intro: '',
					tooltipClass: 'hide'
				}, {
					element: '#aboutProgram',
					intro: '',
					tooltipClass: 'hide'
				}, {
					element: '#linkingAbout',
					intro: '',
					position: 'top'
				}, {
					element: '#browser2',
					intro: '',
					animateStep: 'withoutLink',
					position: 'top'
				}, {
					element: '#linkingAbout',
					intro: '',
					position: 'top'
				}, {
					element: '#browser2',
					intro: '',
					animateStep: 'clickLink',
					position: 'top'
				}, {
					element: '#browser2',
					intro: '',
					animateStep: 'visitBrowser',
					position: 'top'
				}, {
					element: '#browser2',
					intro: '',
					animateStep: 'hoverBrowser',
					position: 'top'
				}, {
					element: '#browser2',
					intro: '',
					animateStep: 'activeBrowser',
					position: 'top'
				}, {
					element: '#browser2',
					intro: '',
					animateStep: 'linkerBrowser',
					position: 'top'
				}, {
					element: '#restart',
					intro: '',
					position: 'right'
				} ]
	});
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		$('.introjs-prevbutton, .introjs-skipbutton, .introjs-nextbutton').hide();
		switch(elementId) {
		
			case "homeProgram":
				$("#homeProgram").removeClass("opacity00");
				browserAnimation(1, function() {
					var text = "Basic html page";
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
				
			case "pTagDiv":
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Enter <span class='ct-code-b-yellow'>&lt;p&gt;Home page&lt;/p&gt;</span>";
					typing('.introjs-tooltiptext', text, function() {
						validation("#pTag", "<p>Home page</p>", 0, 1);
					});
				});
				break;
				
			case "browser1":
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introjs._currentStep == 2) {
						$('.introjs-tooltip').css({'min-width' : '200px'});
						transferEffect("#pTag", "#withoutLinkText", function() {
							setTimeout(function() {
								introjs.nextStep();
							}, 800);
						});
					} else if (introjs._currentStep == 8) {
						$("#backGroundDiv").addClass("z-index");
						transferEffect("#backGroundDiv", "#withoutLinkText", function() {
							$("#withoutLinkText").css({"background-color" : "yellow"});
							$("#backGroundDiv").removeClass("z-index");
							$("#alignmentDiv").addClass("z-index");
							transferEffect("#alignmentDiv", "#withoutLinkText", function() {
								$("#withoutLinkText").parent().addClass('text-center');
								$("#alignmentDiv").removeClass("z-index");
								setTimeout(function() {
									introjs.nextStep();
								}, 800);
							});
						});
					}
				});
				break;
				
			case "pSelector":
				stepTyping("#pSelector", "p");
				break;
				
			case "pOpen":
				introjs.refresh();
				stepTyping("#pOpen", "{");
				break;
				
			case "pClose":
				stepTyping("#pClose", "}");
				break;
				
			case "backGroundDiv":
				customStepsText("#backGroundDiv", "background-color: yellow;");
				break;
				
			case "alignmentDiv":
				$("#browser1").removeClass("z-index");
				customStepsText("#alignmentDiv", "text-align: center;");
				break;
				
			case "aboutProgram":
				$("#browser1").removeClass("z-index");
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#aboutProgram").removeClass("opacity00");
					browserAnimation(2, function() {
						var text = "Another html page with the name <span class='ct-code-b-yellow'>about-us.html</span>";
						typing('.introjs-tooltiptext', text, function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
				break;
				
			case "linkingAbout":
				introjs.refresh();
				if (introjs._currentStep == 10) {
					stepTyping("#pText", "About us page");
				} else if (introjs._currentStep == 12) {
					$('.introjs-helperLayer').one('transitionend', function() {
						$('.introjs-tooltip').css({'min-width' : '320px'});
						$("#linkTag").off();
						$('.introjs-tooltiptext').append('<ul><li></li></ul>');
						var text = "Enter <span class='ct-code-b-yellow'>&lt;a&gt;</span> tag for link Open i.e., <span class='ct-code-b-yellow'>"
									+ "&lt;a&gt;</span>";
						typing('.introjs-tooltiptext > ul li:last-child', text, function() {
							$('#pText').text('').remove();
							$('#linkingAbout').append('<input id="aOpenTag" type="text" size="3" class="usr-txt" maxlength="3" spellcheck="false"/>'
									+ 'About us page');
							validation("#aOpenTag", "<a>", 1, 0);
						});
					});
				} else {
					$('.introjs-helperLayer').one('transitionend', function() {
						$("#urlEnter").off();
						var text = "Enter url as <span class='ct-code-b-yellow'>hom.html</span>";
						typing('.introjs-tooltiptext', text, function() {
							$("#urlEnter").text('').remove();
							$("#linkingAbout").text('').append('&lt;a href=\"<input id="wrongUrl" type="text" class="usr-txt" spellcheck="false"'
									+ ' size="8" maxlength="8"/>\"&gt;About us page&lt;a&gt;');
							introjs.refresh();
							validation("#wrongUrl", "hom.html", 0, 1);
						});
					});
				}
				break;
				
			case "browser2":
				$('.introjs-tooltip').css({'min-width' : '200px'});
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
				
					case "withoutLink":
						$('.introjs-helperLayer').one('transitionend', function() {
							transferEffect("#pText", "#browser2Text", function() {
								var text = "Text <span class='ct-code-b-yellow'>without link</span>";
								typing('.introjs-tooltiptext', text, function() {
									$('.introjs-nextbutton').show();
								});
							});
						});
						break;
						
					case "clickLink":
						$("#urlEnter").removeAttr("style");
						$('.introjs-helperLayer').one('transitionend', function() {
							transferEffect("#linkingAbout", "#browser2Text", function() {
								$("#browser2Text").text('');
								$("#browser2Text").append('<a href="#" id="aTag">About us page</a>');
								var text = "Click on <span class='ct-code-b-yellow'>link text</span>";
								typing('.introjs-tooltiptext', text, function() {
									$("#styling").append('<span id="firstStyle" class="editing"></span>');
									$("#firstStyle").append('<input id="visitSelector" type="text" spellcheck="false" size="9" class="usr-txt"'
													+ ' maxlength="9"/><input id="visitOpenBrace" class="usr-txt" size="1" type="text"'
													+ ' spellcheck="false" maxlength="1"/><br>\t<input id="visitProperty" type="text"'
													+ ' class="usr-txt" size="15" spellcheck="false" maxlength="15"/><br><input id="visitCloseBrace"'
													+ ' type="text" class="usr-txt" spellcheck="false" maxlength="1" size="1"/>');
									var newStep = getStep('#visitOpenBrace', '', '', '');
									introjs.insertOption(introjs._currentStep + 1, newStep);
									$("#aTag").click(function() {
										$('#aboutBrowser').hide();
										$('#aboutBrowser2').append($('#homeBrowser').html());
										$('.introjs-nextbutton').show();
									});
								});
							});
						});
						break;
						
					case "visitBrowser":
							$("#aboutBrowser2").text('');
							$("#aboutBrowser").show();
							$('.introjs-helperLayer').one('transitionend', function() {
								$("#firstStyle").addClass("z-index");
								transferEffect("#visitProperty", "#aTag", function() {
									clickBrowser();
									$("#aTag").addClass("link-visited");
									$("#firstStyle").removeClass("z-index");
									var text = "We changed the text color";
									typing('.introjs-tooltiptext', text, function() {
										clickBrowser();
										$("#styling").append('<br><span id="secondStyle" class="editing"></span>');
										$("#secondStyle").append('<input id="hoverSelector" type="text" size="7" class="usr-txt" spellcheck="false"'
														+ ' maxlength="7"/><input id="hoverOpenBrace" class="usr-txt" type="text" spellcheck="false"'
														+ ' maxlength="1" size="1"/><br>\t<input id="hoverProperty" type="text" class="usr-txt"'
														+ ' size="26" spellcheck="false" maxlength="26"/><br><input id="hoverCloseBrace" type="text"'
														+ ' class="usr-txt" size="1" spellcheck="false" maxlength="1"/>');
										nextStep('#hoverOpenBrace');
										$('.introjs-nextbutton').show();
									});
								});
							});
							break;
							
					case "hoverBrowser":
						$('#aboutBrowser2').text('');
						$('#aboutBrowser').show();
						$('.introjs-helperLayer').one('transitionend', function() {
							$("#secondStyle").addClass("z-index");
							transferEffect("#hoverProperty", "#aTag", function() {
								clickBrowser();
								$("#aTag").addClass("link-hover");
								$("#secondStyle").removeClass("z-index");
								var text = "<span class='ct-code-b-yellow'>Mouse over</span> on the text";
								typing('.introjs-tooltiptext', text, function() {
									$("#styling").append('<br><span id="thirdStyle" class="editing"></span>');
									$("#thirdStyle").append('<input id="activeSelector" type="text" class="usr-txt" size="8" spellcheck="false"'
													+ ' maxlength="8"/><input id="activeOpenBrace" type="text" class="usr-txt" size="1"'
													+ ' spellcheck="false" maxlength="1"/><br>\t<input id="activeProperty" type="text" class="usr-txt"'
													+ ' size="13" spellcheck="false" maxlength="13"/><br><input id="activeCloseBrace" type="text"'
													+ ' class="usr-txt" size="1" spellcheck="false" maxlength="1"/>');
									nextStep('#activeOpenBrace');
									$('.introjs-nextbutton').show();
								});
							});
						});
						break;
						
					case "activeBrowser":
						$("#aboutBrowser2").text('');
						$("#aboutBrowser").show();
						$('.introjs-helperLayer').one('transitionend', function() {
							$("#thirdStyle").addClass("z-index");
							transferEffect("#activeProperty", "#aTag", function() {
								clickBrowser();
								$("#aTag").addClass("link-active");
								$("#thirdStyle").removeClass("z-index");
								var text = "Click on link.";
								typing('.introjs-tooltiptext', text, function() {
									$("#styling").append('<br><span id="fourthStyle" class="editing"></span>');
									$("#fourthStyle").append('<input id="linkSelector" type="text" class="usr-txt" size="6" spellcheck="false"'
													+ ' maxlength="6"/><input id="linkOpenBrace" type="text" class="usr-txt" size="1"'
													+ ' spellcheck="false" maxlength="1"/><br>\t<input id="linkProperty" type="text" class="usr-txt"'
													+ ' size="11" spellcheck="false" maxlength="11"/><br><input id="linkCloseBrace" type="text"'
													+ ' class="usr-txt" size="1" spellcheck="false" maxlength="1"/>');
									nextStep('#linkOpenBrace');
								});
							});
						});
						break;
						
					case "linkerBrowser":
						$("#aboutBrowser2").text('');
						$("#aboutBrowser").show();
						$('.introjs-helperLayer').one('transitionend', function() {
							$("#fourthStyle").addClass("z-index");
							transferEffect("#linkProperty", "#aTag", function() {
								$("#browser2Text").text('');
								$("#browser2Text").append('<a href="hom.html" id="anchorTag" target="targetDiv">About us page</a>');
								$("#anchorTag").addClass("link-linker link-hover link-active");
								$("#anchorTag").css({'color' : 'red'});
								$("#fourthStyle").removeClass("z-index");
								var text = "Click on link";
								typing('.introjs-tooltiptext', text, function() {
									$("#anchorTag").click(function() {
									  $("#browser2Text").hide();
									  $('.introjs-nextbutton').show();
									});
								});
							});
						});
						break;
				}
				break;
				
				
			case "visitOpenBrace":
				nextStep("#visitCloseBrace");
				stepTyping("#visitOpenBrace", "{");
				break;
				
			case "visitCloseBrace":
				nextStep("#visitProperty");
				stepTyping("#visitCloseBrace", "}");
				break;
				
			case "visitProperty":
				nextStep("#visitSelector");
				stepTyping("#visitProperty", "color: hotpink;");
				break;
				
			case "visitSelector":
				stepTyping("#visitSelector", "a:visited");
				break;
				
			case "hoverOpenBrace":
				introjs.refresh();
				nextStep("#hoverCloseBrace");
				stepTyping("#hoverOpenBrace", "{");
				break;
				
			case "hoverCloseBrace":
				nextStep("#hoverProperty");
				stepTyping("#hoverCloseBrace", "}");
				break;
				
			case "hoverProperty":
				nextStep("#hoverSelector");
				customStepsText("#hoverProperty", "background-color: yellow;");
				break;
				
			case "hoverSelector":
				stepTyping("#hoverSelector", "a:hover");
				break;
				
			case "activeOpenBrace":
				introjs.refresh();
				nextStep("#activeCloseBrace");
				stepTyping("#activeOpenBrace", "{");
				break;
				
			case "activeCloseBrace":
				nextStep("#activeProperty");
				stepTyping("#activeCloseBrace", "}");
				break;
				
			case "activeProperty":
				nextStep("#activeSelector");
				stepTyping("#activeProperty", "color: green;");
				break;
				
			case "activeSelector":
				stepTyping("#activeSelector", "a:active");
				break;
				
			case "linkOpenBrace":
				nextStep("#linkCloseBrace");
				stepTyping("#linkOpenBrace", "{");
				break;
				
			case "linkCloseBrace":
				nextStep("#linkProperty");
				stepTyping("#linkCloseBrace", "}");
				break;
				
			case "linkProperty":
				nextStep("#linkSelector");
				stepTyping("#linkProperty", "color: red;");
				break;
				
			case "linkSelector":
				nextStep("#fourthStyle");
				stepTyping("#linkSelector", "a:link");
				break;
				
			case "fourthStyle":
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "When we enter wrong url then only red color appears to the text";
					typing('.introjs-tooltiptext', text, function() {
						nextStep("#linkingAbout");
						$('.introjs-nextbutton').show();
					});
				});
				break;
				
			case "restart":
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#restart").removeClass("opacity00");
					var text = "Click to restart";
					typing('.introjs-tooltiptext', text);
				});
				break;
		}
	});
	introjs.start();
}

function typing(typingId, typingContent,callBackFunction) {
	$(typingId).typewriting( typingContent , {
		"typing_interval": "15",
		"cursor_color": 'white',
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

//=====typing funciton for similar text=====
function stepTyping(id, tag) {
	$('.introjs-tooltip').css({"width" : "200px"});
	$('.introjs-helperLayer').one('transitionend', function() {
		var text = "Enter <span class='ct-code-b-yellow'>" + tag + "</span>";
		typing('.introjs-tooltiptext', text, function() {
			validation(id, tag, 0, 1);
		});
	});
}

function customStepsText(id, tag) {
	$('.introjs-tooltip').css({"width" : "225px"});
	$('.introjs-helperLayer').one('transitionend', function() {
		var text = "Enter <br><span class='ct-code-b-yellow'>" + tag + "</span>";
		typing('.introjs-tooltiptext', text, function() {
			validation(id, tag, 0, 1);
		});
	});
}
//=========================================

//dynamic nextStep
function nextStep(id) {
	var newStep = getStep(id, '', '', '');
	introjs.insertOption(introjs._currentStep + 1, newStep);
}

//validation for entered tag / text
function validation(id, tag, count, val) {
	$(id).css({"outline" : "none"});
	$(id).focus();
	introjs.refresh();
	//paste option disabled
	$(id).off("paste");
	$(id).on("paste", function(e) {
		e.preventDefault();
	});
	$(id).parent().click(function() {
		$(id).focus();
	});
	$(id).off("keydown");
	$(id).on("keydown", function(e) {
		var max = $(this).attr("maxlength");
		introjs.refresh();
		//backspace = 8, delete = 46, leftarrow = 37, rightarrow = 39, esc = 27, enter = 13, ctrl = 17, tab = 9;
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		if (e.keyCode == 13 || e.keyCode == 17 || e.keyCode == 9) {
			e.preventDefault();
		}
		if ($(id).val().length >= max) {
			e.preventDefault();
		}
	});
	
	$(id).on("keyup", function(e) {
		$(".ct-red").remove();
		$(".usr-btn").remove();
		introjs.refresh();
		if (e.keyCode == 17) {
			$(id).val(tag);
		}
		if ($(id).val() == tag) {
			$(id).attr({"disabled" : true});
			if (val == 1) {
				$('.introjs-nextbutton').show();
			} else {
				$('.introjs-tooltipbuttons').append('<a class="introjs-button usr-btn" onclick="userButton('+count+')">Next &#8594;</a>');
			}
		} else {
			$('.introjs-nextbutton, .usr-btn').hide();
			$('.introjs-tooltiptext').append('<div class="ct-red">Properly write above text</div>');
		}
	});
}

//transfer effect
function transferEffect(id1, id2, callBackFunction) {
	$(id1).addClass("z-index");
	$(id1).effect("highlight", {color : "yellow"}).effect("transfer", {to: $(id2), className: "ui-effects-transfer"}, 1200, function() {
		$(id2).removeClass("opacity00");
		$(id1).removeClass("z-index");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	})
}

function userButton(count) {
	$(".usr-btn").remove();
	if (count == 1) {
		$("#aOpenTag").off();
		$('.introjs-tooltiptext > ul li:last-child').append('<div class="a-closing"></div>');
		var text = "Close a tag i.e., <span class='ct-code-b-yellow'>&lt;/a&gt;</span>";
		typing('.a-closing', text, function() {
			$("#aOpenTag").text('').remove();
			$("#linkingAbout").text('').append('&lt;a&gt;About us page<input id="aCloseTag" size="4" class="usr-txt" type="text"'
					+ ' maxlength="4" spellcheck="false"/>')
			validation("#aCloseTag", "</a>", 2, 0);
		});
	} else if (count == 2) {
		$("#aCloseTag").off();
		$('.introjs-tooltiptext > ul').append('<li></li>');
		var text = "For linking we add an attribute i.e., <span class='ct-code-b-yellow'>href=\"\"</span>";
		typing('.introjs-tooltiptext > ul li:last-child', text, function() {
			$('#aCloseTag').text('').remove();
			$("#linkingAbout").text('').append('&lt;a <input id="hrefEnter" type="text" size="7" class="usr-txt" spellcheck="false"'
					+ ' maxlength="7"/>&gt;About us page&lt;/a&gt;');
			introjs.refresh();
			validation("#hrefEnter", "href=\"\"", 3, 0);
		});
	} else if (count == 3) {
		$('#hrefEnter').off();
		$('.introjs-tooltiptext > ul').append('<li></li>');
		var text = "Enter url as i.e., <span class='ct-code-b-yellow'>home.html</span>";
		typing('.introjs-tooltiptext > ul li:last-child', text, function() {
			$('#hrefEnter').text('').remove();
			$("#linkingAbout").text('').append('&lt;a href=\"<input id="urlEnter" type="text" class="usr-txt" size="9"'
					+ ' spellcheck="false" maxlength="9"></span>\"&gt;About us page&lt;/a&gt;');
			introjs.refresh();
			validation("#urlEnter", "home.html", 0, 1);
		});
	}
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

//when a tag clicks then only browser changes
function clickBrowser() {
	$("#aTag").click(function() {
		$("#aboutBrowser2").show();
		$("#aboutBrowser").hide();
		$('.introjs-nextbutton').show();
	});
}

function browserAnimation(i, callBackFunction) {
	TweenMax.to($("#docType" + i), 1, {opacity: 1, onComplete: function() {
		TweenMax.to($("#htmlOpen" + i + ", #htmlClose" + i), 1, {opacity: 1, onComplete: function() {
			TweenMax.to($("#headOpen" + i + ", #headClose" + i), 1, {opacity: 1, onComplete: function() {
				TweenMax.to($("#title" + i), 1, {opacity: 1, onComplete: function() {
					$('#title' + i).effect('highlight', {color: 'yellow'}, 1200);
					$("#browser" + i).addClass("z-index").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
						$(this).removeClass("opacity00");
						setTimeout(function() {
							$("#browser" + i).removeClass("z-index")
							TweenMax.to($("#styleOpen" + i + ", #styleClose" + i), 1, {opacity: 1, onComplete: function() {
								TweenMax.to($("#bodyOpen" + i + ", #bodyClose" + i), 1, {opacity: 1, onComplete: function() {
									$('.introjs-tooltip').removeClass("hide");
									callBackFunction();
								}});
							}});
						}, 800);
					});
				}})
			}});
		}});
	}});
}

function creatingBrowser(id, val) {
	$(id).append('<div class="col-xs-12 padding0 margin-top10 container border-css">'
							+ '<div class="tab-container"><ul class="tabs clearfix" ><li class="active"><div class="col-xs-12 margin-top20 padding0"'
							+ ' id="browserHeading' + val + '">Links</div><i class="fa fa-times fa-sm margin-top20"></i></li></ul>'
							+ '<span id ="plus" class="plus"><i class="fa fa-plus"></i></span></div>'
							+ '<div class="col-xs-12 padding0 browser-css"><div class="col-xs-2 padding0 text-center">'
							+ '<span id="arrowCircle" class="col-xs-4 padding0"><i class="fa fa-arrow-left arrow"></i></span>'
							+ '<span class="col-xs-4 padding0"><i class="fa fa-arrow-right arrow"></i></span>'
							+ '<span class="col-xs-4 padding0"><i class="fa fa-rotate-right fa-1x"></i></span></div>'
							+ '<div class="col-xs-8 padding0 text-center url"><input type="text" maxlength="100" '
							+ 'class="user-text padding0" id="inputId'+ val
							+'" placeholder="https://www.codetantra.com/webdevelopment/links.html" disabled>'
							+ '<span class="col-xs-1 padding0"><i class="fa fa-star-o fa-1x"></i></span></div>'
							+ '<div class="col-xs-2 padding0 fa-display text-center">'
							+ '<span class="col-xs-6 padding0"><i class="fa fa-home fa-1x"></i></span>'
							+ '<span class="col-xs-6 padding0"><i class="fa fa-bars fa-1x"></i></span></div></div>'
							+ '<div class="col-xs-12 html-body padding0" id="htmlBody">'
							+ '<div class="browser' + val + '"></div></div></div>');
}

</script>
</head>
<body>
	<div class="text-center margin-top-15">
		<h4 class="label ct-demo-heading">Links</h4>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-12 padding0">
			<div class="col-xs-4 col-xs-offset-1 padding0 opacity00" id="homeProgram">
				<b class="ct-blue-color page1">home.html</b>
<pre class="margin0">
<span id="docType1" class="opacity00">&lt;!DOCTYPE html&gt;</span>
<span id="htmlOpen1" class="opacity00">&lt;html&gt;</span>
	<span id="headOpen1" class="opacity00">&lt;head&gt;</span>
		<span id="title1" class="opacity00">&lt;title&gt;Home Page&lt;/title&gt;</span>
		<span id="styleOpen1" class="opacity00">&lt;style&gt;</span>
			<input id="pSelector" type="text" maxlength="1" size="1" spellcheck="false" class="usr-txt"/><input id="pOpen" class="editing usr-txt" maxlength="1" size="1" spellcheck="false"/>
				<input id="backGroundDiv" class="editing usr-txt" maxlength="25" size="25" spellcheck="false"/>
				<input id="alignmentDiv" class="editing usr-txt" maxlength="19" size="19" spellcheck="false"/>
			<input id="pClose" class="editing usr-txt" maxlength="1" size="1" spellcheck="false"/>
		<span id="styleClose1" class="opacity00">&lt;/style&gt;</span>
	<span id="headClose1" class="opacity00">&lt;/head&gt;</span>
	<span id="bodyOpen1" class="opacity00">&lt;body&gt;</span>
		<div style="display: inline-block;" id="pTagDiv" class="editing"><input id="pTag" type="text" maxlength="21" size="17" spellcheck="false" class="usr-txt"></div>
	<span id="bodyClose1" class="opacity00">&lt;/body&gt;</span>
<span id="htmlClose1" class="opacity00">&lt;/html&gt;</span>
</pre>
			</div>
			<div class="col-xs-5 col-xs-offset-1 padding0 opacity00 margin-top-20" id="browser1"><div id="homeBrowser"></div></div>
		</div>
		<div class="col-xs-12 padding0 margin-top-15">
			<div class="col-xs-12 padding0">
				<div  class="col-xs-4 col-xs-offset-1 padding0 opacity00" id="aboutProgram">
					<b class="ct-blue-color page2">about-us.html</b>
<pre class="margin0">
<span id="docType2" class="opacity00">&lt;!DOCTYPE html&gt;</span>
<span id="htmlOpen2" class="opacity00">&lt;html&gt;</span>
	<span id="headOpen2" class="opacity00">&lt;head&gt;</span>
		<span id="title2" class="opacity00">&lt;title&gt;About Us Page&lt;/title&gt;</span>
		<span id="styleOpen2" class="opacity00">&lt;style&gt;</span>
			<span id="styling" class="editing"></span>
		<span id="styleClose2" class="opacity00">&lt;/style&gt;</span>
	<span id="headClose2" class="opacity00">&lt;/head&gt;</span>
	<span id="bodyOpen2" class="opacity00">&lt;body&gt;</span>
		<span id="linkingAbout" class="editing"><input id="pText" type="text" maxlength="18" size="14" spellcheck="false" class="usr-txt"/></span>
	<span id="bodyClose2" class="opacity00">&lt;/body&gt;</span>
<span id="htmlClose2" class="opacity00">&lt;/html&gt;</span>
</pre>
				</div>
				<div class="col-xs-5 col-xs-offset-1 padding0 opacity00 margin-top20" id="browser2">
					<div id="aboutBrowser2"></div><div id="aboutBrowser"></div>
				</div>
			</div>
		</div>
		<div class="col-xs-12 text-center margin-top-15"><span class="btn btn-warning opacity00" id="restart">Restart</span></div>
	</div>
</body>
</html>