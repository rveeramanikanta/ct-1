<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Links</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">
<link href="/css/font-awesome.min.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
<style>
.margin-top-25 {
	margin-top: 25px;
}

.padding0 {
	padding: 0;
}

pre {
	-moz-tab-size: 3;
	margin: 0;
	tab-size: 3;
}

img {
	width: 100%;
}

#linking {
	min-width: 15px;
	min-height: 15px;
	display: inline-block;
}

.usr-btn {
	background-color: green;
}

.ct-red {
	color: red;
	font-family: monospace;
	font-weight: bold;
}

.ui-effects-transfer {
	z-index: 9999999;
	border: 1px solid #003399;
}

.z-index {
	z-index: 9999999;
	background-color: white;
	position: relative;
}

.usr-text {
	border-width: 0px;
	background-color: transparent;
	border: none;
}

#docType {
	width: 123px;
}

.width-50 {
	width: 50px;
}

. width-more {
	width: 80px;
}

.width-59 {
	width: 59px;
}

.width-100 {
	width: 204px;
}

#titleClose {
	width: 66px;
}

#titleText {
	width: 43px;
}

#withoutLink {
	width: 83px;
}

a {
	text-decoration: underline;
	font-weight: bold;
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
	height: 282px;
	border-top: 1px solid gray;
	background: white;
}

.margin-top5 {
	margin-top: 5px;
}

.margin-top20 {
	margin-top: 20px;
}
</style>
<script>
var introjs;
$(document).ready(function() {
	creatingBrowser();
	initIntroJS();
	
	$("#restart").click(function() {
		location.reload();
		$('#program').val('');
	})
	//drag option disabled
	window.ondragstart = function() {
		return false; 
	}
});

function initIntroJS() {
	introjs=introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		showBullets: false,
		steps : [ {
					element: '#heading',
					intro: '',
					position: 'right'
				}, {
					element: '#program',
					intro: ''
				}, {
					element: '#docType',
					intro: ''
				}, {
					element: '#htmlOpen',
					intro: ''
				}, {
					element: '#htmlClose',
					intro: ''
				}, {
					element: '#headOpen',
					intro: ''
				}, {
					element: '#headClose',
					intro: ''
				}, {
					element: '#titleTag',
					intro: ''
				}, {
					element: '#browser',
					intro: '',
					tooltipClass: 'hide',
					position: 'left'
				}, {
					element: '#bodyOpen',
					intro: ''
				}, {
					element: '#bodyClose',
					intro: ''
				}, {
					element: '#linking',
					intro: ''
				}, {
					element: '#browser',
					intro: '',
					tooltipClass: 'hide'
				}, {
					element: '#linking',
					intro: ''
				}, {
					element: '#browser',
					intro: '',
					tooltipClass: 'hide',
					position: 'left'
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
		
			case "heading":
				$('.usr-text').attr("disable", true);
				var text = "A <span class='ct-code-b-yellow'>Link</span> redirects user directly to a reference data <br/> which can be";
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-tooltiptext').append('<ul><li></li></ul>');
					var text = "a whole document or";
					typing('.introjs-tooltiptext > ul li:last-child', text, function() {
						$('.introjs-tooltiptext > ul').append('<li></li>');
						var text = "a specific element within a document <br/> Link can be a text, image or a button";
						typing('.introjs-tooltiptext > ul li:last-child', text, function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
				break;
				
			case "program":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#program").removeClass("opacity00");
					var text = "Let us revise a basic HTML Page";
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
		
			case "docType":
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Enter <span class='ct-code-b-yellow'>Doctype</span> declaration <span class='ct-code-b-yellow'>&lt;!DOCTYPE html&gt;</span>";
					typing('.introjs-tooltiptext', text, function() {
						inputsValidation("#docType", "<!DOCTYPE html>", 0, 1);
					});
				});
				break;
				
			case "htmlOpen":
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Open <span class='ct-code-b-yellow'>html</span> tag";
					typing('.introjs-tooltiptext', text, function() {
						inputsValidation("#htmlOpen", "<html>", 0, 1);
					});
				});
				break;
				
			case "htmlClose":
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Close the <span class='ct-code-b-yellow'>html</span> tag";
					typing('.introjs-tooltiptext', text, function() {
						inputsValidation("#htmlClose", "</html>", 0, 1);
					});
				});
				break;
				
			case "headOpen":
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Open <span class='ct-code-b-yellow'>head</span> tag";
					typing('.introjs-tooltiptext', text, function() {
						inputsValidation("#headOpen", "<head>", 0, 1);
					});
				});
				break;
				
			case "headClose":
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Close the <span class='ct-code-b-yellow'>head</span> tag";
					typing('.introjs-tooltiptext', text, function() {
						inputsValidation("#headClose", "</head>", 0, 1);
					});
				});
				break;
		
			case "titleTag":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltiptext').append('<ul><li></li></ul>');
					var text = "Open <span class='ct-code-b-yellow'>title</span> tag";
					typing('.introjs-tooltiptext > ul li:last-child', text, function() {
						$("#titleOpen").effect("highlight", {color : "yellow"}, 500);
						inputsValidation("#titleOpen", "<title>", 0, 0);
					})
				});
				break;
				
			case "browser":
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introjs._currentStep == 8) {
						$("#browser").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
							$(this).removeClass("animated zoomIn");
							$('.introjs-tooltip').removeClass("hide");
							var text = "<span class='ct-code-b-yellow'>Title</span> displays here in the browser";
							typing('.introjs-tooltiptext', text, function() {
								$('.introjs-nextbutton').show();
							});
						});
					} else if (introjs._currentStep == 12) {
						transferEffect("#linking", "#textBrowser", function() {
							$('.introjs-tooltip').removeClass("hide");
							var text = "This plain text is about to be modified as link";
							typing('.introjs-tooltiptext', text, function() {
								$('.introjs-nextbutton').show();
							});
						});
					} else {
						$('#linking').text('<a href="https://www.codetantra.com">Codetantra</a>');
						transferEffect("#linking", "#textBrowser", function() {
							$("#textBrowser").text('');
							$('#textBrowser').append('<a href="https://www.codetantra.com" target="targetDiv">Codetantra</a>');
							$('.introjs-tooltip').removeClass("hide");
							var text = "Hover the cursor on the text.<br> Observe that the cursor is changing into hand icon.";
							typing('.introjs-tooltiptext', text, function() {
								$("#textBrowser").click(function() {
									$("#textBrowser").hide();
									$(".browser").css({"height" : "400px", "padding" : "0"});
									introjs.refresh();
									$("#browserImage").hide();
									$('#browserHeading').text('').append('<img src="../images/ct-logo.png" style="width: 17%"> Codetantra</img>');
									$('#inputId').val('https://www.codetantra.com/');
									$(".browser").load("https://www.codetantra.com", function() {
										$('.introjs-nextbutton').show();
									});
								});
							});
						});
					}
				});
				break;
				
			case "bodyOpen":
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Open <span class='ct-code-b-yellow'>body</span> tag";
					typing('.introjs-tooltiptext', text, function() {
						inputsValidation("#bodyOpen", "<body>", 0, 1);
					});
				});
				break;
				
			case "bodyClose":
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Close the <span class='ct-code-b-yellow'>body</span> tag";
					typing('.introjs-tooltiptext', text, function() {
						inputsValidation("#bodyClose", "</body>", 0, 1);
					});
				});
				break;
				
			case "linking":
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introjs._currentStep == 11) {
						var text = "Enter the text <span class='ct-code-b-yellow'>Codetantra</span><br> Observe how this unstyled"
								+ " & plain text appears in the browser";
						typing('.introjs-tooltiptext', text, function() {
							inputsValidation("#linkEnter", "Codetantra", 0, 1);
						});
					} else {
						$("#linkEnter").removeAttr("contenteditable maxlength spellcheck");
						$("#linkEnter").off();
						var text = "Enter &lt;a&gt; tag to open link.";
						typing('.introjs-tooltiptext', text, function() {
							$('#linkEnter').text('').remove();
							$("#linking").append('<input id="linkOpen" class="usr-text width-50" type="text" spellcheck="false" maxlength="4">Codetantra');
							introjs.refresh();
							inputsValidation("#linkOpen", "<a>", 2, 0);
						});
					}
				});
				break;
				
			case "restart":
				$('.introjs-tooltip').css({"min-width": "200px"});
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


function creatingBrowser() {
	$("#browser").append('<div class="col-xs-12 padding0 margin-top10 container border-css">'
							+ '<div class="tab-container"><ul class="tabs clearfix" ><li class="active"><div class="col-xs-12 margin-top20 padding0"'
							+ ' id="browserHeading">Links</div><i class="fa fa-times fa-sm margin-top20"></i></li></ul>'
							+ '<span id ="plus" class="plus"><i class="fa fa-plus"></i></span></div>'
							+ '<div class="col-xs-12 padding0 browser-css"><div class="col-xs-2 padding0 text-center">'
							+ '<span id="arrowCircle" class="col-xs-4 padding0"><i class="fa fa-arrow-left arrow"></i></span>'
							+ '<span class="col-xs-4 padding0"><i class="fa fa-arrow-right arrow"></i></span>'
							+ '<span class="col-xs-4 padding0"><i class="fa fa-rotate-right fa-1x"></i></span></div>'
							+ '<div class="col-xs-8 padding0 text-center url"><input type="text" maxlength="100" '
							+ 'class="user-text padding0" id="inputId" value="https://www.codetantra.com/webdevelopment/links.html" disabled>'
							+ '<span class="col-xs-1 padding0"><i class="fa fa-star-o fa-1x"></i></span></div>'
							+ '<div class="col-xs-2 padding0 fa-display text-center">'
							+ '<span class="col-xs-6 padding0"><i class="fa fa-home fa-1x"></i></span>'
							+ '<span class="col-xs-6 padding0"><i class="fa fa-bars fa-1x"></i></span></div></div>'
							+ '<div class="col-xs-12 html-body padding0" id="htmlBody">'
							+ '<div class="browser"><span id="textBrowser" class="opacity00">Codetantra</span>'
							+ '<iframe name="targetDiv" width="100%" height="70%" frameBorder="0"></iframe></div></div></div>');
}

function typing(typingId, typingContent,callBackFunction) {
	$(typingId).typewriting( typingContent , {
		"typing_interval": "5",
		"cursor_color": 'white',
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

//inputs validation(for basic tags)
function inputsValidation(id, tag, count, val) {
	$(id).removeClass("opacity00").attr("disabled", false).focus();
	//disabled paste option
	$(id).off('paste').on('paste', function(e) {
		e.preventDefault();
	});
	$(id).off("keydown").on("keydown", function(e) {
		$('.usr-btn').remove();
		//backspace = 8, delete = 46, leftarrow = 37, rightarrow = 39, esc = 27, enter = 13, ctrl = 17, tab = 9;
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		if (e.keyCode == 13 || e.keyCode == 17 || e.keyCode == 9) {
			e.preventDefault();
		}
	});
	
	$(id).off("keyup");
	$(id).on("keyup", function(e) {
		$(".ct-red, .usr-btn").remove();
		if (e.keyCode == 17) {
			$(id).val(tag);
		}
		if ($(id).val() == tag) {
			$(id).attr({"disabled" : true});
			if (val == 1) {
				$(".introjs-nextbutton").show();
			} else {
				$('.introjs-tooltipbuttons').append('<a class="introjs-button usr-btn" onclick="userButton('+count+')">Next &#8594;</a>');
			}
		} else {
			$(".introjs-nextbutton, .usr-btn").hide();
			$('.introjs-tooltiptext').append("<div class='ct-red'></div>");
			$(".ct-red").text("Please enter " + tag);
		}
	});
}

function userButton(count) {
	$(".usr-btn").remove();
	if (count == 0) {
		$('.introjs-tooltiptext > ul').append('<li></li>');
		var text = "Close the <span class='ct-code-b-yellow'>title</span> tag";
		typing('.introjs-tooltiptext > ul li:last-child', text, function() {
			$("#titleClose").effect("highlight", {color : "yellow"}, 500);
			inputsValidation("#titleClose", "</title>", 1, 0);
		});
	} else if (count == 1) {
		$('.introjs-tooltiptext > ul').append('<li></li>');
		var text = "Enter title as <span class='ct-code-b-yellow'>Links</span>";
		typing('.introjs-tooltiptext > ul li:last-child', text, function() {
			$("#titleText").effect("highlight", {color : "yellow"}, 500);
			inputsValidation("#titleText", "Links", 0, 1);
		});
	} else if (count == 2) {
		$("#linkOpen").off();
		var text = "Close <span class='ct-code-b-yellow'>&lt;a&gt;</span> tag <br/> Hint: <span class='ct-code-b-yellow'>&lt;/a&gt;</span>";
		typing('.introjs-tooltiptext', text, function() {
			$('#linkOpen').text('').remove();
			$("#linking").text('').append('&lt;a&gt;Codetantra<input id="linkClose" type="text" spellcheck="false" maxlength="4"'
							+ ' class="usr-text width-50">');
			introjs.refresh();
			inputsValidation("#linkClose", "</a>", 3, 0);
		});
	} else if (count == 3) {
		$("#linkClose").off();
		var text = "Enter <span class='ct-code-b-yellow'>href=\"\"</span> between a and >. <br/>For linking we add an attribute i.e.,"
					+ " <span class='ct-code-b-yellow'>href</span><br/>"
					+ " <span class='ct-code-b-yellow'>href</span> decides the <span class='ct-code-b-yellow'>link's destination</span>";
		typing('.introjs-tooltiptext', text, function() {
			$('#linkClose').text('').remove();
			$("#linking").text('').append('&lt;a <input id="hrefEnter" spellcheck="false" maxlength="7" type="text" class="usr-text width-59">'
						+ '&gt;Codetantra&lt;/a&gt;');
			introjs.refresh();
			inputsValidation("#hrefEnter", "href=\"\"", 4, 0);
		});
	} else if (count == 4) {
		$("#hrefEnter").off();
		var text = "Enter <span class='ct-code-b-yellow'>url</span> value \"<span class='ct-code-b-yellow'>https://www.codetantra.com</span>\""
					+ " between the double quotes";
		typing('.introjs-tooltiptext', text, function() {
			$("#hrefEnter").text('').remove();
			$("#linking").text('').append('&lt;a href=\"<input id="urlEnter" spellcheck="false" maxlength="28" type="text"'
							+ ' class="usr-text width-100">\"&gt;Codetantra&lt;/a&gt;');
			introjs.refresh();
			inputsValidation("#urlEnter", "https://www.codetantra.com", 0, 1);
		});
	}
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
	});
}

</script>
</head>
<body>
	<div class="text-center margin-top-25">
		<h4 class="label ct-demo-heading" id="heading">Links</h4>
	</div>
	<div class="col-xs-12 margin-top-25">
		<div class="col-xs-12">
		<div class="col-xs-5">
<pre class="opacity00" id="program">
<input type="text" maxlength="15" spellcheck="false" class="usr-text opacity00" id="docType">
<input type="text" maxlength="6" spellcheck="false" class="usr-text width-50 opacity00" id="htmlOpen">
   <input type="text" maxlength="6" spellcheck="false" class="usr-text width-50 opacity00" id="headOpen">
		<span id="titleTag"><input type="text" maxlength="7" spellcheck="false" class="usr-text width-59 opacity00" id="titleOpen"><input type="text" spellcheck="false" maxlength="5" class="usr-text opacity00" id="titleText"><input type="text" spellcheck="false" maxlength="8" class="usr-text opacity00" id="titleClose"></span>
   <input type="text" maxlength="7" spellcheck="false" class="usr-text width-59 opacity00" id="headClose">
   <input type="text" maxlength="6" spellcheck="false" class="usr-text width-50 opacity00" id="bodyOpen">
		<div id="linking"><input id="linkEnter" type="text" maxlength="10" spellcheck="false" class="usr-text width-more"></div>
   <input type="text" maxlength="7" spellcheck="false" class="usr-text width-59 opacity00" id="bodyClose">
<input type="text" maxlength="7" spellcheck="false" class="usr-text width-59 opacity00" id="htmlClose">
</pre></div>
			<div class="col-xs-6 col-xs-offset-1">
				<div class="col-xs-12 padding0 opacity00" id="browser"></div>
			</div>
			<div class="col-xs-12 text-center margin-top-25">
				<span class="btn btn-warning opacity00" id="restart">Restart</span>
			</div>
		</div>
	</div>
</body>
</html>