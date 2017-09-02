<!DOCTYPE html PUBLIC
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>images</title>
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
<script src="/js/gs/TweenMax.min.js"></script>
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
	padding : 6px !important;
	font-size : 13px !important;
	tab-size: 3; 
}

#browserImage {
	width: 100%;
}

.z-index1000000 {
	position: relative;
	background-color: white;
	z-index: 1000000 !important;
}

.usr-btn {
	background-color: green;
}

.ct-red {
	color: red;
	font-family: monospace;
	font-weight: bold;
}

 #browserText {
 	border: 1px solid black; 
 	height: 200px;
} 

.z-index {
	z-index: 9999999;
	background-color: white;
	position: relative;
}

.usr-text {
	border: none;
	background-color: transparent;
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
}

.margin-top5 {
	margin-top: 5px;
}

.margin-top20 {
	margin-top: 20px;
}

#altText {
	position : relative;
}
</style>
<script>
var introjs;

$(document).ready(function() {
	creatingBrowser();
	initIntroJS();
	
	$("#restart").click(function() {
		location.reload();
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
		steps : [{
					element: '#heading',
					intro: '',
					position: 'right'
				}, {
					element: '#docTypeDiv',
					intro: ''
				}, {
					element: '#htmlOpenDiv',
					intro: ''
				}, {
					element: '#htmlCloseDiv',
					intro: ''
				}, {
					element: '#headOpenDiv',
					intro: ''
				}, {
					element: '#headCloseDiv',
					intro: ''
				}, {
					element: '#titleOpenDiv',
					intro: ''
				}, {
					element: '#titleCloseDiv',
					intro: ''
				}, {
					element: '#titletextDiv',
					intro: ''
				}, {
					element: '#browser',
					intro: '',
					tooltipClass: 'hide'
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
					position: 'left'
				}, {
					element: '#linking',
					intro: ''
				}, {
					element: '#browser',
					intro: '',
					position: 'left'
				}, {
					element: '#linking',
					intro: ''
				}, {
					element: '#browser',
					intro: '',
					position: 'left'
				}, {
					element: '#linking',
					intro: '',
					position: 'right'
				}, {
					element: '#browser',
					intro: '',
					position: 'left'
				}, {
					element: '#linking',
					intro: ''
				}, {
					element: '#browser',
					intro: '',
					position: 'left'
				}, {
					element: '#linking',
					intro: '',
					position: 'right'
				}, {
					element: '#browser',
					intro: '',
					position: 'left'
				}, {
					element: '#restart',
					intro: '',
					position: 'right'
				} ]
	});
	
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		$('.introjs-nextbutton, .introjs-skipbutton, .introjs-prevbutton').hide();
		switch(elementId) {
		
			case "heading":
				$('.usr-text').attr("disable", true);
					var text = "Let us learn to insert an image in a webpage using the self closing"
								+ " <span class='ct-code-b-yellow'>&lt;img&gt;</span> tag.";
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				break;
		
			case "docTypeDiv":
				$('.introjs-helperLayer').one('transitionend', function() {
					$(".program").removeClass("opacity00");
					var text = "Enter Doctype declaration.<br>Hint: <span class='ct-code-b-yellow'>&lt;!DOCTYPE html&gt;</span>"
					typing('.introjs-tooltiptext', text, function() {
						inputsValidation("#docType", "<!DOCTYPE html>", 0, 1);
					});
				});
				break;
				
			case "htmlOpenDiv":
				customIntro("Open html tag", "#htmlOpen", "<html>");
				break;
				
			case "htmlCloseDiv":
				customIntro("Close the html tag", "#htmlClose", "</html>");
				break;
				
			case "headOpenDiv":
				customIntro("Open head tag", "#headOpen", "<head>");
				break;
				
			case "headCloseDiv":
				customIntro("Close the head tag", "#headClose", "</head>");
				break;
		
			case "titleOpenDiv":
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltiptext').append('<ul><li></li></ul>');
					var text = "Open title tag";
					typing('.introjs-tooltiptext > ul li:last-child', text, function() {
						inputsValidation("#titleOpen", "<title>", 0, 1);
					})
				});
			break;
			case "titleCloseDiv":
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltiptext').append('<ul><li></li></ul>');
					var text = "Close title tag";
					typing('.introjs-tooltiptext > ul li:last-child', text, function() {
						inputsValidation("#titleClose", "</title>", 0, 1);
					})
				});
			break;	
			case "titleTextDiv":
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltiptext').append('<ul><li></li></ul>');
					var text = "Enter the text as <span class='ct-code-b-yellow'>images</span>";
					typing('.introjs-tooltiptext > ul li:last-child', text, function() {
						inputsValidation("#titleText", "images", 0, 1);
					})
				});
			break;	
			case "browser":
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introjs._currentStep == 9) {
						$("#browser").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
							$(this).removeClass("animated zoomIn");
							var text = "<span class='ct-code-b-yellow'>Title</span> displays here in the browser.";
							typing('.introjs-tooltiptext', text, function() {
								setTimeout(function() {
									introjs.nextStep();
								}, 500);
							});
						})
					} else if (introjs._currentStep == 13) {
						$('#natureDiv').addClass('opacity00');
						$('#browserText').removeClass('opacity00');
						$("#urlEnter").addClass("blink").effect("transfer", {to: $("#natureDiv"), className: "ui-effects-transfer"}, 1500, function() {
							$('#natureDiv').removeClass('opacity00');							
							$('.introjs-tooltip').removeClass("hide");
							var text = "The image is displayed in the browser";
							typing('.introjs-tooltiptext', text, function() {
								$('.introjs-nextbutton').show();
							});
						}); 
					} else if (introjs._currentStep == 15) {	
						setTimeout(function() { 
							typingContent = 'As the image is displaying properly, text in <span class="ct-code-b-yellow">alt</span> does not appear.';
							typing('.introjs-tooltiptext', typingContent,function() {
								$('.introjs-nextbutton').show();
							});
						},500);
					} else if (introjs._currentStep == 17) {
						typingContent = 'The text in the <span class="ct-code-b-yellow">alt</span> attribute is displayed as the browser'
										+ ' could not find the image.';
						typing('.introjs-tooltiptext', typingContent,function() {
							$('#browserText').append('<span id = altText class = "opacity00 position">'+$("#altEnter").text()+'</span>');
							$("#altEnter").addClass("z-index1000000").effect( "highlight",{color: 'yellow'},1000, function() {
								$("#altEnter").removeClass("z-index1000000");
								$('#altText').removeClass('opacity00');
								fromEffectWithTweenMax("#altEnter", "#altText", function() {
									$('.introjs-nextbutton').show();
								});
							});
						});
					} else if (introjs._currentStep == 19) {
						setTimeout(function() { 
							typingContent = 'To see the <span class="ct-code-b-yellow">title</span> of the image, move the mouse over to'
											+ ' the image in the browser.';
							typing('.introjs-tooltiptext', typingContent,function() {
								$('.introjs-nextbutton').show();
							});
						},500);
					} else if (introjs._currentStep == 21) {
						setTimeout(function() { 
							typingContent = 'Notice the change in <span class=ct-code-b-yellow>image height</span>';
							typing('.introjs-tooltiptext', typingContent,function() {
								setTimeout(function() { 
									$("#heighttextEnter").addClass("blink").effect("transfer", {to: $("#natureDiv"), className: "ui-effects-transfer"}, 1500, function() {
										heightvalue = $('#heighttextEnter').val();
										$('#natureDiv').css({'height': heightvalue});
										$('.introjs-nextbutton').show();
									});
								}, 800);
							});
						},500);
					} else if (introjs._currentStep == 23) {
						setTimeout(function() { 
							typingContent = 'Notice the change in <span class = "color-yellow">image width</span>';
							typing('.introjs-tooltiptext', typingContent,function() {
								setTimeout(function() { 
									$("#widthtextEnter").addClass("blink").effect("transfer", {to: $("#natureDiv"), className: "ui-effects-transfer"},
												1500, function() {
										widthvalue = $('#widthtextEnter').val(); 
										$('#natureDiv').css({'width': widthvalue}); 
										$('.introjs-nextbutton').show();
									});
								}, 800);
							});
						},500);
					}
				});
				break;
				
			case "bodyOpen":
				$('.introjs-helperLayer').one('transitionend', function() { 
					var text = "Open body tag.";
					typing('.introjs-tooltiptext', text, function() {
						inputsValidation("#bodyOpen", "<body>", 0, 1);
					});
				});
				break;
				
			case "bodyClose":
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Close body tag.";
					typing('.introjs-tooltiptext', text, function() {
						inputsValidation("#bodyClose", "</body>", 0, 1);
					});
				});
				break;
				
			case "linking":
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introjs._currentStep == 12) {
						var text = "Enter an image tag.</br>Hint: <span class='ct-code-b-yellow'>&lt;img&gt;</span><br/><ul><li>&lt;img&gt;"
								+ " is a self-closing tag.</li><li>Closing tag doesn't exist for <span class='ct-code-b-yellow'>&lt;img&gt;"
								+ "</span></li></ul>";
						typing('.introjs-tooltiptext', text, function() {
							$('#linkEnter').removeClass('opacity00');
							inputsValidation("#linkEnter", "<img>", 2, 0);
						});
					} else if (introjs._currentStep == 14) {
						$('.introjs-tooltiptext').append('<ul><li>');
						var text = "Enter <span class='ct-code-b-yellow'>alt=\"\"</span><br/>The text in alt displays in the browser instead of"
									+ " image, if the image is not loaded properly.";
						typing('.introjs-tooltiptext > ul li:last-child', text, function() {
							userButton(4);
						});
					} else if (introjs._currentStep == 16) {
						$('.introjs-tooltiptext').append('<ul><li>');
						var text = "Enter <span class='ct-code-b-yellow'>nnature.png</span>.";
						typing('.introjs-tooltiptext > ul li:last-child', text, function() {
							userButton(6);
						});
					} else if (introjs._currentStep == 18) {
						userButton(7);
					} else if (introjs._currentStep == 20) {
						userButton(9);
					} else if (introjs._currentStep == 22) {
						userButton(11);
					}
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
		"typing_interval": "20",
		"cursor_color": 'white',
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

//text for intro steps
function typingText(elementId, tag, callBackFunction) {
	$('.introjs-nextbutton').hide();
	$('.introjs-helperLayer').one('transitionend', function() {
		var text = "Enter <span class='ct-code-b-yellow'>" + tag +"</span>";
		typing('.introjs-tooltiptext', text, function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		})
	});
}

function customIntro(text, selector, tag) {
	$('.introjs-helperLayer').one('transitionend', function() {
		typing('.introjs-tooltiptext', text, function() {
			inputsValidation(selector, tag, 0, 1);
		});
	});
}

//inputs validation(for basic tags)
function inputsValidation(id, tag, count, val) {
	$(id).removeClass("opacity00");
	$(id).attr("disabled", false);
	$(id).focus();
	
	//disabled paste option
	$(id).off('paste');
	$(id).on('paste', function(e) {
		e.preventDefault();
	});
	
	$(id).off("keyup");
	$(id).on("keyup", function(e) {
		$(".ct-red").remove();
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
			$('.introjs-tooltiptext').append("<div class='ct-red'>write text</div>");
		}
	});
}

function userButton(count) {
	$(".usr-btn").remove();
	if (count == 0) {
		$('.introjs-tooltiptext > ul').append('<li></li>');
		var text = "Close <span class='ct-code-b-yellow'>title</span> tag.";
		typing('.introjs-tooltiptext > ul li:last-child', text, function() {
			inputsValidation("#titleClose", "</title>", 0,1);
		});
	} else if (count == 1) {
		$('.introjs-tooltiptext > ul').append('<li></li>');
		var text = "Enter the text in the title as <span class='ct-code-b-yellow'>images</span>";
		typing('.introjs-tooltiptext > ul li:last-child', text, function() {
			inputsValidation("#titleText", "images", 0, 1);
		});
	} else if (count == 2) {
		$("#linkEnter").off();
		var text = "Type <span class='ct-code-b-yellow'>src=\"\"</span>.<br/>src - source path of an image file";
		typing('.introjs-tooltiptext', text, function() {
			$('#linkEnter').remove();
			$("#linking").text('').append('&lt;img <input id="hrefEnter" class="usr-text" spellcheck="false" maxlength="6" size="6"/>&gt;');
			introjs.refresh();
			inputsValidation("#hrefEnter", "src=\"\"", 3, 0);
		});
	} else if (count == 3) {
		$("#hrefEnter").off();
		var text = "Enter <span class='ct-code-b-yellow'>nature.png</span><br/>value of the image source.";
		typing('.introjs-tooltiptext', text, function() {
			$("#hrefEnter").remove();
			$("#linking").text('').append('&lt;img src=\"<input id="urlEnter" class="usr-text" size="10" spellcheck="false" maxlength="10"/>"&gt;');
			introjs.refresh();
			inputsValidation("#urlEnter", "nature.png", 0,1);
		});
	} else if (count == 4) {
		$("#urlEnter").off().remove();
		$("#linking").text('').append('&lt;img src="nature.png" <input id="textEnter" spellcheck="false" class="usr-text" size="6" maxlength="6">' 
						+ '</span>&gt;');
		introjs.refresh();
		inputsValidation("#textEnter", "alt=\"\"", 5,0);
	} else if (count == 5) {
		$("#textEnter").off();
		$('.introjs-tooltiptext > ul').append('<li></li>');
		var text = "Type <span class='ct-code-b-yellow'>alternate text</span>. <br>If the image is not displaying, this text in"
				+ " <span class='ct-code-b-yellow'>alt</span> appears in the browser.";
		typing('.introjs-tooltiptext > ul li:last-child', text, function() {
			$("#linking").text('').append('&lt;img src="nature.png" alt=\"<input id="altEnter" class="usr-text" size="14" spellcheck="false"'
								+ ' maxlength="14"/>"&gt;');
			introjs.refresh();
			inputsValidation("#altEnter", "alternate text", 0,1);
		});
	} else if (count == 6) {
		$("#altEnter").off();
		$('.introjs-tooltiptext > ul').append('<li></li>');
		var text = "We are giving a wrong value in src to see the alt text.";
		typing('.introjs-tooltiptext > ul li:last-child', text, function() {
			$("#linking").text('').append('&lt;img src="<input id="urlEnter" type="text" spellcheck="false" class="usr-text" size="11"'
						+ ' maxlength="11"/>" alt="<span id = "altEnter">alternate text</span>"&gt;');
			introjs.refresh();
			inputsValidation("#urlEnter", "nnature.png", 0,1);
			$('#natureDiv').remove();
		});
	} else if (count == 7) {
		$("#urlEnter").off();
		$('.introjs-tooltiptext').append('<ul><li></li>');
		var text = "Type <span class='ct-code-b-yellow'>title=\"\"</span>.<br>The title is displayed when the mouse hovers over the image.";
		typing('.introjs-tooltiptext > ul li:last-child', text, function() {
			$('#browserText').text('').append('<img src = "../images/nature.png" id="natureDiv"/>');
			$("#linking").text('').append('&lt;img src="nature.png" alt="alternate text"<br> <input id="titleEnter" class="usr-text" size="8"'
						+ ' spellcheck="false" maxlength="8"/>&gt;');
			introjs.refresh();
			inputsValidation("#titleEnter", "title=\"\"", 8,0);
		});
	} else if (count == 8) {
		$("#titleEnter").off();
		introjs.refresh();
		$('.introjs-tooltiptext > ul').append('<li></li>');
		var text = " Enter title text as <br><span class='ct-code-b-yellow'>nature at its best</span>";
		typing('.introjs-tooltiptext > ul li:last-child', text, function() {
			$("#linking").text('').append('&lt;img src="nature.png" alt="alternate text" <br> title=\"<input id="titletextEnter"'
						+ ' class="usr-text" size="18" spellcheck="false" maxlength="18"/>"&gt;');
			$('#browserText').text('').append('<img src = "../images/nature.png" title="nature at its best" id="natureDiv"/>');
			inputsValidation("#titletextEnter", "nature at its best", 0,1);
		});
	} else if (count == 9) {
		$("#titletextEnter").off();
		$('.introjs-tooltiptext').append('<ul><li></li>');
		var text = "Type <span class='ct-code-b-yellow'>height=\"\"</span><br/>Height attribute specifies the image height.";
		typing('.introjs-tooltiptext > ul li:last-child', text, function() {
			$("#titletextEnter").remove();
			$("#linking").text('').append('&lt;img src="nature.png" alt="alternate text" <br> title="nature at its best" <input id="heightEnter"'
						+ ' type="text" class="usr-text" spellcheck="false" size="10" maxlength="10"/>&gt;');
			introjs.refresh();
			inputsValidation("#heightEnter", "height=\"\"" , 10,0);
		});
	} else if (count == 10) {
		$("#heightEnter").off();
		$('.introjs-tooltiptext > ul').append('<li></li>');
		var text = " Enter height as <span class='ct-code-b-yellow'>128</span>";
		typing('.introjs-tooltiptext > ul li:last-child', text, function() {
			$("#heightEnter").text('');
			$("#linking").text('').append('&lt;img src="nature.png" alt="alternate text" <br> title="nature at its best" height='
							+ '"<input id="heighttextEnter" type="text" spellcheck="false" class="usr-text" size="3" maxlength="3"/>"&gt;');
			introjs.refresh();
			inputsValidation("#heighttextEnter", "128", 0,1);
		});
	} else if (count == 11) {
		$("#heighttextEnter").off();
		$('.introjs-tooltiptext').append('<ul><li></li>');
		var text = "Type <span class='ct-code-b-yellow'>width=\"\"</span><br>Width attribute specifies the image width.";
		typing('.introjs-tooltiptext > ul li:last-child', text, function() {
			$("#heighttextEnter").remove();
			$("#linking").text('').append('&lt;img src="nature.png" alt="alternate text" <br> title="nature at its best" <br> height="128"'
						+ ' <input id="widthEnter" type="text" class="usr-text" size="8" spellcheck="false" maxlength="8"/>&gt;');
			introjs.refresh();
			inputsValidation("#widthEnter", "width=\"\"" , 12,0);
		});
	} else if (count == 12) {
		$("#widthEnter").off();
		$('.introjs-tooltiptext > ul').append('<li></li>');
		var text = "Enter width as <span class='ct-code-b-yellow'>128</span>";
		typing('.introjs-tooltiptext > ul li:last-child', text, function() {
			$("#widthEnter").text('');
			$("#linking").text('').append('&lt;img src="nature.png" alt="alternate text" <br> title="nature at its best" <br> height="128"'
						+ ' width="<input id="widthtextEnter" spellcheck="false" class="usr-text" size="3" maxlength="3"/>"&gt;');
			introjs.refresh();
			inputsValidation("#widthtextEnter", "128", 0,1);
		});
	}
}

function fromEffectWithTweenMax(selector1, selector2, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}


function creatingBrowser() {
	$('#browser').append('<div class="col-xs-12 padding0 margin-top10 container border-css">'
							+ '<div class="tab-container"><ul class="tabs clearfix" ><li class="active"><div class="col-xs-12 margin-top20 padding0"'
							+ ' id="browserHeading">images</div><i class="fa fa-times fa-sm margin-top20"></i></li></ul>'
							+ '<span id ="plus" class="plus"><i class="fa fa-plus"></i></span></div>'
							+ '<div class="col-xs-12 padding0 browser-css"><div class="col-xs-2 padding0 text-center">'
							+ '<span id="arrowCircle" class="col-xs-4 padding0"><i class="fa fa-arrow-left arrow"></i></span>'
							+ '<span class="col-xs-4 padding0"><i class="fa fa-arrow-right arrow"></i></span>'
							+ '<span class="col-xs-4 padding0"><i class="fa fa-rotate-right fa-1x"></i></span></div>'
							+ '<div class="col-xs-8 padding0 text-center url"><input type="text" maxlength="100" '
							+ 'class="user-text padding0" id="inputId" placeholder="https://www.codetantra.com/webdevelopment/images.html" disabled>'
							+ '<span class="col-xs-1 padding0"><i class="fa fa-star-o fa-1x"></i></span></div>'
							+ '<div class="col-xs-2 padding0 fa-display text-center">'
							+ '<span class="col-xs-6 padding0"><i class="fa fa-home fa-1x"></i></span>'
							+ '<span class="col-xs-6 padding0"><i class="fa fa-bars fa-1x"></i></span></div></div>'
							+ '<div class="col-xs-12 html-body padding0" id="htmlBody">'
							+ '<div class="browser"><div class="browser-text opacity00 padding0" id="browserText">'
							+ '<img src = "../images/nature.png" id = natureDiv></div></div></div></div>');
}

</script>
</head>
<body>
	<div class="text-center margin-top-25">
		<h4 class="label ct-demo-heading" id="heading">images</h4>
	</div>
	<div class="col-xs-12 margin-top-25">
		<div class="col-xs-12">
		<div class="col-xs-5 padding0 program opacity00">
<pre>
<span id = docTypeDiv><input type="text" maxlength="15" class="usr-text opacity00" id="docType"></span>
<span id = htmlOpenDiv><input type="text" maxlength="6" size="6" class="usr-text opacity00" id="htmlOpen"></span>
	<span id = headOpenDiv><input type="text" maxlength="6" size="6" class="usr-text opacity00" id="headOpen"></span>
		<span id="titleTag"><span id = titleOpenDiv><input type="text" maxlength="7" size="7" class="usr-text opacity00" id="titleOpen"></span><span id = titleTextDiv><input type="text" maxlength="6" size="6" class="usr-text opacity00" id="titleText"></span><span id = titleCloseDiv><input type="text" maxlength="8" size="8" class="usr-text opacity00" id="titleClose"></span></span>
	<span id = headCloseDiv><input type="text" maxlength="7" size="7" class="usr-text opacity00" id="headClose"></span>
	<span><input type="text" maxlength="6" size="6" class="usr-text opacity00" id="bodyOpen"></span>
		<div id="linking" style="display: inline-block;"><input id="linkEnter" class="usr-text opacity00" size="5" maxlength="5" spellcheck="false"></span></div>
	<span><input type="text" maxlength="7" size="7" class="usr-text opacity00" id="bodyClose"></span>
<span id = htmlCloseDiv><input type="text" maxlength="7" size="7" class="usr-text opacity00" id="htmlClose"></span>
</pre>
</div>		
			<div class=" col-xs-5 col-xs-offset-1 padding0 opacity00" id="browser" style = 'display : inline-block;'></div></div>
		<div class="col-xs-12 text-center margin-top-25"><span class="btn btn-warning opacity00" id="restart">Restart</span></div>
	</div>
</body>
</html>