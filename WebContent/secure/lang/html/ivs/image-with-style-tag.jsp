<!DOCTYPE html>
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
	tab-size: 3;
	padding : 5px !important;
	font-size : 13px !important; 
}

#browserImage {
	width: 100%;
}

.z-index1000000 {
	position: relative;
	background-color: white;
	z-index: 1000000 !important;
}

#altText {
	position : relative;
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

.usr-txt {
	border: none;
	background: transparent;
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
					element: '#titleOpen',
					intro: ''
				}, {
					element: '#titleClose',
					intro: ''
				}, {
					element: '#titleText',
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
					intro: ''
				}, {
					element: '#browser',
					intro: '',
					position: 'left'
				}, {
					element : '#styleopenTag',
					intro : '',
					position : 'bottom'
					
				}, {
					element : '#stylecloseTag',
					intro : '',
					position : 'bottom'
				}, {
					element : '#styleselectorDiv',
					intro : '',
					position : 'bottom'
				}, {
					element : '#imgselectoropenbrace',
					intro : '',
					position : 'bottom'
				}, {
					element : '#imgselectorcloseDiv',
					intro : '',
					position : 'bottom'
				}, {
					element : '#styleTag1',					
					intro : '',
					position : 'bottom'
				}, {
					element : '#stylecolonTag1',
					intro : '',
					position : 'bottom'
				}, {
					element : '#stylevalueTag1',
					intro : '',
					position : 'bottom'
				}, {
					element : '#stylesemicolonTag1',
					intro : '',
					position : 'bottom'
				}, {
					element : '#imgselectoropen',
					intro : '',
					position : 'bottom'
				}, {
					element : '#imgselector',
					intro : '',
					position : 'bottom'
				}, {
					element : '#browser',
					intro : '',
					position : 'bottom',
				}, {
					element : '#styleTag2',					
					intro : '',
					position : 'bottom'
				}, {
					element : '#stylecolonTag2',
					intro : '',
					position : 'bottom'
				}, {
					element : '#stylevalueTag2',
					intro : '',
					position : 'bottom'
				}, {
					element : '#stylesemicolonTag2',
					intro : '',
					position : 'bottom'
				}, {
					element : '#browser',
					intro : '',
					position : 'bottom',
				}, {
					element: '#restart',
					intro: '',
					position: 'right'
				} ]
	});
	
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		switch(elementId) {
		
		case "heading":
				var text = "Let us learn to insert an image in a webpage using the self closing <span class='ct-code-b-yellow'>&lt;img&gt;</span> tag.";
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();
				});
		break;
		case "docType":
			$(".program").removeClass("opacity00");
			var text = "Enter Doctype declaration.<br>Hint: <span class='ct-code-b-yellow'>&lt;!DOCTYPE html&gt;</span>"
			custonIntroTyping(text, "#docType", "<!DOCTYPE html>");
		break;
		case "htmlOpen":
			custonIntroTyping("Open html tag", "#htmlOpen", "<html>");
		break;
		case "htmlClose":
			custonIntroTyping("Close the html tag", "#htmlClose", "</html>");
		break;
		case "headOpen":
			custonIntroTyping("Open head tag", "#headOpen", "<head>");
		break;
			
		case "headClose":
			custonIntroTyping("Close the head tag", "#headClose", "</head>");
		break;
	
		case "titleOpen":
			custonIntroTyping("Open title tag", "#titleOpen", "<title>");
		break;
		case "titleClose":
			custonIntroTyping("Close title tag", "#titleClose", "</title>");
		break;	
		case "titleText":
			var text = "Enter the text as <span class='ct-code-b-yellow'>Images</span>";
			custonIntroTyping("Close title tag", "#titleText", "Images");
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
					transferEffect("#urlEnter", function() {
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
					typingContent = 'The text in the <span class="ct-code-b-yellow">alt</span> attribute is displayed as the browser could not'
								+ ' find the image.';
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
						typingContent = 'To see the <span class="ct-code-b-yellow">title</span> of the image, move the mouse over to the image'
									+ ' in the browser.';
						typing('.introjs-tooltiptext', typingContent,function() {
							$('.introjs-nextbutton').show();
						});
					},500);
				} else if (introjs._currentStep == 31) {
					setTimeout(function() { 
						typingContent = 'Notice the change in <span class=ct-code-b-yellow>image height</span>';
						typing('.introjs-tooltiptext', typingContent,function() {
							setTimeout(function() { 
								transferEffect("#styleTag1", function() {
									$('#natureDiv').css({'height': 128});
									$('.introjs-nextbutton').show();
								});
							}, 800);
						});
					},500);
				} else if (introjs._currentStep == 36) {
					setTimeout(function() { 
						typingContent = 'Notice the change in <span class = "color-yellow">image width</span>';
						typing('.introjs-tooltiptext', typingContent,function() {
							setTimeout(function() { 
								transferEffect("#styleTag2", function() {
									$('#natureDiv').css({'width': 128}); 
									$('.introjs-nextbutton').show();
								});
							}, 800);
						});
					},500);
				}
			});
		break;
			
		case "bodyOpen":
			custonIntroTyping("Open title tag", "#bodyOpen", "<body>");
		break;
			
		case "bodyClose":
			custonIntroTyping("Close title tag", "#bodyClose", "</body>");
		break;
			
		case "linking":
			$('.introjs-helperLayer').one('transitionend', function() {
				if (introjs._currentStep == 12) {
					var text = "Enter an image tag.</br>Hint: <span class='ct-code-b-yellow'>&lt;img&gt;</span><br/><ul><li>&lt;img&gt; is a"
								+ " self-closing tag.</li><li>Closing tag doesn't exist for <span class='ct-code-b-yellow'>&lt;img&gt;</span></li></ul>";
					typing('.introjs-tooltiptext', text, function() {
						inputsValidation("#linkEnter", "<img>", 2, 0);
					});
				} else if (introjs._currentStep == 14) {
					$('.introjs-tooltiptext').append('<ul><li>');
					var text = "Enter <span class='ct-code-b-yellow'>alt=\"\"</span><br/>The text in alt displays in the browser instead of image,"
								+ " if the image is not loaded properly.";
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
				}
			});
		break;
		case "styleopenTag":
			custonIntroTyping("Open style tag", '#styleopenTag','<style>');
		break;
		case "stylecloseTag":
			custonIntroTyping("Close style tag", '#stylecloseTag','</style>');
		break;
		case "styleselectorDiv":
			introjs.refresh();
			$('.introjs-helperLayer').one('transitionend', function() {
				typingContent = 'Let us write an image selector to specify float property to left.'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "imgselectoropenbrace":
			introjs.refresh();
			text = 'Open selector <br/>Hint: <span class = "color-yellow"> {</span>'
			custonIntroTyping(text, '#imgselectoropenbrace','{');
		break;
		case "styleTag1":
			custonIntroTyping('Enter height', '#styleTag1','height');
		break;
		
		case "stylecolonTag1":
			custonIntroTyping('Enter <span class = "color-yellow">:</span>', '#stylecolonTag1',':');
		break;
		
		case "stylevalueTag1":
			custonIntroTyping('Enter <span class = "color-yellow">128px</span>', '#stylevalueTag1','128px');
		break;
		
		case "stylesemicolonTag1":
			custonIntroTyping('Enter <span class = "color-yellow">;</span>', '#stylesemicolonTag1',';');
		break;
		
		case "styleTag2":
			custonIntroTyping('Enter <span class = "color-yellow">width</span>.', '#styleTag2','width');
		break;
		
		case "stylecolonTag2":
			custonIntroTyping('Enter <span class = "color-yellow">:</span>', '#stylecolonTag2',':');
		break;
		
		case "stylevalueTag2":
			custonIntroTyping('Enter <span class = "color-yellow">128px</span>', '#stylevalueTag2','128px');
		break;
		
		case "stylesemicolonTag2":
			custonIntroTyping('Enter <span class = "color-yellow">;</span>', '#stylesemicolonTag2',';');
		break;
	
		case "imgselectoropen":
			text = 'Give the name to selector <br/>Hint: <span class = "color-yellow">img</span>'
			custonIntroTyping('Enter <span class = "color-yellow">;</span>', '#imgselectoropen','img');
		break;
		
		case "imgselector":
			$('#imgselector').removeClass('opacity00');
			$('.introjs-helperLayer').one('transitionend', function() {
				typingContent = 'The selector <br/>Hint: <span class = "color-yellow">img</span>'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "imgselectorcloseDiv":
			text = 'Close image selector <br/>Hint: <span class = "color-yellow">}</span>'
			custonIntroTyping(text, '#imgselectorclose','}');
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
		"typing_interval": "5",
		"cursor_color": 'white',
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function custonIntroTyping(text, selector, tag) {
	$('.introjs-helperLayer').one('transitionend', function() {
		typing('.introjs-tooltiptext', text, function() {
			inputsValidation(selector, tag, 0, 1);
		});
	});
}

//inputs validation(for basic tags)
function inputsValidation(id, tag, count, val) {
	$(id).removeClass("opacity00").attr("disabled", false).focus();
	//disabled paste option
	$(id).off('paste');
	$(id).on('paste', function(e) {
		e.preventDefault();
	});
	
	$(id).off("keyup");
	$(id).on("keyup", function(e) {
		$('.usr-btn').remove();
		$(".ct-red").remove();
		if (e.keyCode == 17) {
			$(id).val(tag)
		}
		if ($(id).val() == tag) {
			if (val == 1) {
				$(".introjs-nextbutton").show();
				if ($('.introjs-nextbutton[style="display: inline-block;"]').length == 1 && e.keyCode == 13) {
					introjs.nextStep();
					$(id).attr({"disabled" : true});
				}
			} else {
				$('.introjs-tooltipbuttons').append('<a class="introjs-button usr-btn" onclick="userButton('+count+')">Next &#8594;</a>');
			}
		} else {
			$(".introjs-nextbutton, .usr-btn").hide();
			$('.introjs-tooltiptext').append("<div class='ct-red'>Please write <span id='tagVal'></span></div>");
			$('#tagVal').text(tag)
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
		text = "Type <span class='ct-code-b-yellow'>src=\"\"</span>.<br/>src - source path of an image file.";
		url = '&lt;img <input id="hrefEnter" spellcheck="false" maxlength="7" size="7" class="usr-txt"/>&gt;';
		urlChangeInTyping("#linkEnter", text, url, "#hrefEnter", "src=\"\"", 3, 0);
	} else if (count == 3) {
		text = "Enter <span class='ct-code-b-yellow'>nature.png</span><br/>value of the image source.";
		url = '&lt;img src=\"<input id="urlEnter" class="usr-txt" spellcheck="false" maxlength="26" size="10"/>"&gt;';
		urlChangeInTyping("#hrefEnter", text, url, "#urlEnter", "nature.png", 0,1);
	} else if (count == 4) {
		$("#urlEnter").off();
		$("#linking").text('').append('&lt;img src="nature.png" <input id="textEnter" class="usr-txt" spellcheck="false" maxlength="10" size="10"/>&gt;');
		introjs.refresh();
		inputsValidation("#textEnter", "alt=\"\"", 5,0);
	} else if (count == 5) {
		$("#textEnter").off();
		$('.introjs-tooltiptext > ul').append('<li></li>');
		var text = "Type <span class='ct-code-b-yellow'>alternate text</span>. <br>If the image is not displaying, this text in"
					+ " <span class='ct-code-b-yellow'>alt</span> appears in the browser.";
		typing('.introjs-tooltiptext > ul li:last-child', text, function() {
			$("#linking").text('').append('&lt;img src="nature.png" alt=\"<input id="altEnter" class="usr-txt" spellcheck="false"'
						+ ' maxlength="26" size="14"/>"&gt;');
			introjs.refresh();
			inputsValidation("#altEnter", "alternate text", 0,1);
		});
	} else if (count == 6) {
		$("#altEnter").off();
		$('.introjs-tooltiptext > ul').append('<li></li>');
		var text = "We are giving a wrong value in src to see the alt text.";
		typing('.introjs-tooltiptext > ul li:last-child', text, function() {
			$("#linking").text('').append('&lt;img src=\"<input id="urlEnter" class="usr-txt" size="11" spellcheck="false" maxlength="26"/>"'
					+ ' alt="<span id = "altEnter">alternate text</span>"&gt;');
			introjs.refresh();
			inputsValidation("#urlEnter", "nnature.png", 0,1);
			$('#natureDiv').remove();
		});
	} else if (count == 7) {
		$("#urlEnter").off();
		$('.introjs-tooltiptext').append('<ul><li></li></ul>');
		var text = "Type <span class='ct-code-b-yellow'>title=\"\"</span>.<br>The title is displayed when the mouse hovers over the image.";
		typing('.introjs-tooltiptext > ul li:last-child', text, function() {
			$("#linking").text('').append('&lt;img src="nature.png" alt="alternate text" <input id="titleEnter" class="usr-txt"'
					+ ' spellcheck="false" size="8" maxlength="10">&gt;');
			introjs.refresh();
			$('#altText').remove();
			$('#browserText').append('<img src="../images/nature.png" id="natureDiv" title="nature at its best"/>');
			inputsValidation("#titleEnter", "title=\"\"", 8,0);
		});
	} else if (count == 8) {
		$("#titleEnter").off();
		$('.introjs-tooltiptext > ul').append('<li></li>');
		var text = " Enter title text as <br><span class='ct-code-b-yellow'>nature at its best</span>";
		typing('.introjs-tooltiptext > ul li:last-child', text, function() {
			$("#linking").text('').append('&lt;img src="nature.png" alt="alternate text" title=\"<input id="titletextEnter"'
					+ ' class="usr-txt" spellcheck="false" maxlength="19" size="18"/>"&gt;');
			introjs.refresh();
			inputsValidation("#titletextEnter", "nature at its best", 0,1);
		});
	} 
}

function urlChangeInTyping(id1, text, url, id2, tag, count, val) {
	$(id1).off();
	typing('.introjs-tooltiptext', text, function() {
		$("#linking").text('').append(url);
		introjs.refresh();
		inputsValidation(id2, tag, count, val);
	});
}

//transfer effect
function transferEffect(id1, callBackFunction) {
	$(id1).addClass("z-index");
	$(id1).effect("highlight", {color : "yellow"}, 500).effect("transfer", {to: $('#natureDiv'), className: "ui-effects-transfer"}, 1500, function() {
		$('#natureDiv').removeClass("opacity00");
		$(id1).removeClass("z-index");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
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
							+ ' id="browserHeading">Images</div><i class="fa fa-times fa-sm margin-top20"></i></li></ul>'
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
							+ '<div id="browser"><div class="browser-text opacity00 padding0" id ="browserText">'
							+ ' <img src = "../images/nature.png" id = natureDiv></div></div></div></div>');
}

</script>
</head>
<body>
	<div class="text-center margin-top-25"><h4 class="label ct-demo-heading" id="heading">Images</h4></div>
	<div class="col-xs-12 margin-top-25">
		<div class="col-xs-12">
		<div class="col-xs-6 padding0 program opacity00">
<pre>
<input type="text" maxlength="15" size="15" class="usr-txt opacity00" id="docType">
<input type="text" maxlength="6" size="6" class="usr-txt opacity00" id="htmlOpen">
	<input type="text" maxlength="6" size="6" class="usr-txt opacity00" id="headOpen">
		<input type="text" maxlength="7" size="7" class="usr-txt opacity00" id="titleOpen"><input type="text" maxlength="6" size="6" class="usr-txt opacity00" id="titleText"><input type="text" maxlength="8" size="8" class="usr-txt opacity00" id="titleClose">
		<span id ="styleselectorDiv"><input type="text" maxlength="7" size="7" class="usr-txt opacity00" id='styleopenTag'>
			<span id='imgselector'><input type="text" maxlength="3" size="3" class="usr-txt opacity00" id='imgselectoropen'> <input type="text" maxlength="1" size="1" class="usr-txt opacity00" id='imgselectoropenbrace'/>
				<span id='styleTag1Div'><input type="text" maxlength="6" size="6" class="usr-txt opacity00" id='styleTag1'><input type="text" maxlength="1" size="1" class="usr-txt opacity00" id='stylecolonTag1'><input type="text" maxlength="5" size="5" class="usr-txt opacity00" id='stylevalueTag1'><input type="text" maxlength="1" size="1" class="usr-txt opacity00" id='stylesemicolonTag1'></span>
				<span id='styleTag2Div'><input type="text" maxlength="5" size="5" class="usr-txt opacity00" id='styleTag2'><input type="text" maxlength="1" size="1" class="usr-txt opacity00" id='stylecolonTag2'><input type="text" maxlength="5" size="5" class="usr-txt opacity00" id='stylevalueTag2'><input type="text" maxlength="1" size="1" class="usr-txt opacity00" id='stylesemicolonTag2'></span>
			<span id = "imgselectorcloseDiv"><input type="text" maxlength="1" size="1" class="usr-txt opacity00" id='imgselectorclose'></span></span>
		<input type="text" maxlength="8" size="8" class="usr-txt opacity00" id='stylecloseTag'></span>
	<input type="text" maxlength="7" size="7" class="usr-txt opacity00" id="headClose">
	<input type="text" maxlength="6" size="6" class="usr-txt opacity00" id="bodyOpen">
		<div id="linking" style="display: inline-block;"><input id="linkEnter" size="5" class="usr-txt" maxlength="5" spellcheck="false"/></div>
	<input type="text" maxlength="7" size="7" class="usr-txt opacity00" id="bodyClose">
<input type="text" maxlength="7" size="7" class="usr-txt opacity00" id="htmlClose">
</pre>
</div>		
		<div class=" col-xs-5 opacity00 col-xs-offset-1 margin20 padding0" id="browser"></div>
			<div class="col-xs-12 text-center margin-top-25"><span class="btn btn-warning opacity00" id="restart">Restart</span></div>
		</div>
	</div>
</body>
</html>	