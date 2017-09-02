<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/jquery-ui.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<title>images</title>
<style>
pre {
	tab-size: 3;
	-moz-tab-size: 3;
	padding: 8px;
	border-radius: px;
	margin: 0;
}

.padding0 {
	padding : 0!important;
} 	

#natureDiv, #nature1Div {
	height : 200px !important;
	width : 210px !important;
}

.usr-btn {
	background-color : green;
}

.ui-effects-transfer {
	z-index: 99999999;
	border: 1px solid blue;
	border-radius: 4px;
}

.usr-txt {
	border: none;
	background: transparent;
}

.zIndex {
	background: white;
	position: relative;
	z-index: 99999999;
}
/* border-css starting */
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
	min-height: 250px;
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
</head>
<body>

<script>
var count = 1;
var styleIndex = 1;
$(document).ready(function() {
	$('input').attr({'type' : 'text', 'spellcheck' : 'false', 'class' : 'opacity00 usr-txt'});
	creatingBrowser();
	introGuide();
});

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		steps : [ {
				element : "#codeDiv",
				intro : "",
				position : "right"
			}, {
				element : "#img1Enter",
				intro : ""
			}, {
				element : "#browserDiv",
				intro : "",
				tooltipClass:"hide",
				animateStep1 : 'Browser1'
			}, {
				element : "#img2Enter",
				intro : "",
			}, {
				element : "#browserDiv",
				intro : "",
				tooltipClass:"hide",
				animateStep1 : 'Browser2'
			}, {
				element : '#styleTag',
				intro : ''
			}, {
				element : '#imgselectoropenbrace',
				intro : ''
			}, {
				element : '#imgselectorclose',
				intro : ''
			}, {
				element : '#styleTag1',					
				intro : ''
			}, {
				element : '#stylecolonTag1',
				intro : ''
			}, {
				element : '#stylevalueTag1',
				intro : ''
			}, {
				element : '#stylesemicolonTag1',
				intro : ''
			}, {
				element : '#imgselectoropen',
				intro : ''
			}, {
				element : '#imgselector',
				intro : ''
			}, {
				element : '#natureDiv',
				intro : ''
			}, {
				element : '#styleTag',
				intro : ''
			}, {
				element : '#imgselectoropen2brace',
				intro : ''
			}, {
				element : '#imgselectorclose2',
				intro : ''
			}, {
				element : '#styleTag2',					
				intro : ''
			}, {
				element : '#stylecolonTag2',
				intro : ''
			}, {
				element : '#stylevalueTag2',
				intro : '',
				animateStep2 : 'style1'
			}, {
				element : '#stylesemicolonTag2',
				intro : ''
			}, {
				element : '#imgselector2open',
				intro : ''
			}, {
				element : '#imgselector2',
				intro : ''
			}, {
				element : '#nature1Div',
				intro : ''
			}, {
				element : '#styleTag3',					
				intro : ''
			}, {
				element : '#stylecolonTag3',
				intro : ''
			}, {
				element : '#stylevalueTag3',
				intro : ''
			}, {
				element : '#stylesemicolonTag3',
				intro : ''
			}, {
				element : '#styleTag3Div',
				intro : ''
			}, {
				element : '#nature1Div',
				intro : ''
			}, {
				element : '#styleTag4',					
				intro : ''
			}, {
				element : '#stylecolonTag4',
				intro : ''
			}, {
				element : '#stylevalueTag4',
				intro : ''
			}, {
				element : '#stylesemicolonTag4',
				intro : ''
			}, {
				element : '#styleTag4Div',
				intro : ''
			}, {
				element : '#nature1Div',
				intro : ''
			}, {
				element : '#stylevalueTag2',
				intro : '',
				animateStep2 : 'style2'
			}, {
				element : '#styleTag2Div',
				intro : ''
			}, {
				element : '#nature1Div',
				intro : ''
			}, {
				element : '#stylevalueTag2',
				intro : '',
				animateStep2 : 'style3'
			}, {
				element : '#styleTag2Div',
				intro : ''
			}, {
				element : '#nature1Div',
				intro : ''
			}, {
				element : '#stylevalueTag2',
				intro : '',
				animateStep2 : 'style4'
			}, {
				element : '#styleTag2Div',
				intro : ''
			}, {
				element : '#nature1Div',
				intro : ''
			}, {
				element : "#restartBtn",
				intro : "Click to Restart",
				tooltipClass: "introjs-tooltip-min-width-custom",
				position : "right"
			} ]
		});
		introjs.onafterchange(function(targetElement) {
			var elementId = targetElement.id;
			$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				switch (elementId) {
					case "img1Enter":
						$('.introjs-tooltip').css({'min-width' : '350px'});
						text = "<ul><li>Enter an image tag. Hint: <span class='ct-code-b-yellow'>&lt;img&gt;</span></li></ul>";
						typing('.introjs-tooltiptext', text, function() {
							inputsValidation("#img1Open", "<img>", 2, 0);
						});
					break;
					case "img2Enter":
						text = "<ul><li>Enter an image tag. Hint: <span class='ct-code-b-yellow'>&lt;img&gt;</span></li></ul>";
						typing('.introjs-tooltiptext', text, function() {
							inputsValidation("#img2Open", "<img>", 6, 0);
						});
					break;
					case "styleTag":
						$('.introjs-tooltip').css({'min-width': '200px'});
						introjs.refresh();
						if(introjs._currentStep == 5) {
							var t = 'natureDiv';
						} else if(introjs._currentStep == 15) {
							var t = 'nature-1Div';
						}
						$('.introjs-helperLayer').one('transitionend', function() {
							text = 'Let us write an image selector for nature.jpg using its id(#' + t + ').';
							typing('.introjs-tooltiptext',typingContent,function() {
								$('.introjs-nextbutton').show();
							});
						});
					break;
					case "imgselectoropenbrace":
					case "imgselectoropen2brace":
						introjs.refresh();
						text = 'Open selector <br/>Hint: <span class="ct-code-b-yellow"> {</span>';
						customTyping(text, '#' + elementId, '{');
					break;
					case "imgselector2open":
					case "imgselectoropen":
						var t;
						if (elementId == 'imgselector2open') {
							t = '#nature-1Div'
						} else {
							t = '#natureDiv'
						}
						text = 'Give the id selector using <br/>Hint: <span class="ct-code-b-yellow">' + t + '</span>';
						customTyping(text, '#' + elementId, t);
					break;
					case "imgselector2":
					case "imgselector":
						$('#imgselector').removeClass('opacity00');
						text = 'The selector is applied.';
						typing('.introjs-tooltiptext', text, function() {
							$('.introjs-nextbutton').show();
						});
					break;
					case "imgselectorclose2":
					case "imgselectorclose":
						text = 'Close image selector <br/>Hint: <span class="ct-code-b-yellow">}</span>';
						customTyping(text, '#' + elementId, '}');
					break;
					case "styleTag1":
						text = 'Enter <span class="ct-code-b-yellow">opacity</span>';
						customTyping(text, '#styleTag1','opacity');	
					break;
					case "stylecolonTag" + styleIndex :
						text = 'Enter <span class="ct-code-b-yellow">:</span>(colon)';
						customTyping(text, '#stylecolonTag' + styleIndex, ':');
					break;
					case "stylevalueTag1":
						text = 'Enter <span class="ct-code-b-yellow">0.3</span>';
						customTyping(text, '#stylevalueTag1', '0.3');	
					break;
					case "stylesemicolonTag" + styleIndex:
						text = 'Enter <span class="ct-code-b-yellow">;</span>(semicolon)';
						customTyping(text, '#stylesemicolonTag' + styleIndex, ';');
					break;
					case "styleTag2Div":
					case "styleTag4Div":
					case "styleTag3Div":
						var val;
						if (elementId == 'styleTag3Div') {
							val = 'top';
						} else if (elementId == 'styleTag4Div') {
							val = 'left';
						} else {
							val = 'position';
						}
						$('#imgselector').removeClass('opacity00');
						text = 'The id selector is styled with ' + val + ' property.';
						typing('.introjs-tooltiptext', text, function() {
							$('.introjs-nextbutton').show();
						});
					break;
					case "styleTag2":
						text = 'Enter <span class="ct-code-b-yellow">position</span>'
						customTyping(text, '#styleTag2', 'position');		
					break;
					case "stylevalueTag2":
						$('#stylevalueTag2').removeClass('opacity00');
						var animateStep2 = introjs._introItems[introjs._currentStep].animateStep2;
						switch(animateStep2) {
							case 'style1':
								text = 'position can be <ul><li>relative</li><li>absolute</li><li>fixed</li><li>static</li></ul>';
								styleTypingText(text, 'relative', '#stylevalueTag2');
							break;
							case 'style2':
								$('#stylevalueTag2').val('');
								text = 'Let us change the position.';
								styleTypingText(text, 'absolute', '#stylevalueTag2');
							break;
							case 'style3':
								$('#stylevalueTag2').val('');
								text = 'Let us change the position.';
								styleTypingText(text, 'fixed', '#stylevalueTag2');
							break;
							case 'style4':
								$('#stylevalueTag2').val('');
								$('#mainDiv').css({'height': 600});
								text = 'Let us change the position.'
								styleTypingText(text, 'static', '#stylevalueTag2');
							break;
						}
					break;
					case "styleTag3":
						$('#styleTag3').removeClass('opacity00');
						$('.introjs-helperLayer').one('transitionend', function() {
							text = 'We can apply the following properties with position relative <ul><li>left</li><li>right</li><li>top</li>'
									+ '<li>bottom</li></ul>'
							styleTypingText(text, 'top', '#' + elementId);
						});
					break;
					case "stylevalueTag3":
						text = 'Enter <span class = "ct-code-b-yellow" id = positionDiv>100px</span>'
						customTyping(text, '#stylevalueTag3', '100px');
					break;
					case "styleTag4":
						text = 'Enter <span class = "ct-code-b-yellow" id = positionDiv>left</span>';
						customTyping(text, '#styleTag4', 'left');	
					break;
					case "stylevalueTag4":
						text = 'Enter <span class = "ct-code-b-yellow" id = positionDiv>50px</span>'
						customTyping(text, '#stylevalueTag4', '50px');
					break;
					case "browserDiv":
						var animateStep1 = introjs._introItems[introjs._currentStep].animateStep1;
						switch(animateStep1) {
							case 'Browser1':
							$(".introjs-helperLayer").one("transitionend", function() {
								$('#browserText').removeClass('opacity00');
								browserDivAnim('#urlEnter', '#natureDiv');
							});
							break;
						case 'Browser2':
							$(".introjs-helperLayer").one("transitionend", function() {
								browserDivAnim('#url1Enter', '#nature1Div');
							});
						break;
						}
					break;
					case "natureDiv" :
						text = 'Notice the opacity set to the image.'
						browserCSSAnim('#styleTag1Div', 'opacity', '0.3', elementId);
					break;
					case "nature1Div" :
						if(introjs._currentStep == 24) {
							text = 'Notice the change in the position of image.';
							browserCSSAnim('#styleTag2Div', 'position', 'relative', elementId);
						} else if(introjs._currentStep == 30) {
							text = 'Notice the change in top.'
							browserCSSAnim('#styleTag3Div', 'top', '100px', elementId);
						} else if(introjs._currentStep == 36) {
							text = 'Notice the change in left.'
							browserCSSAnim('#styleTag4Div', 'left', '50px', elementId);
						} else if(introjs._currentStep == 39) {
							typingContent = 'Notice the change in position of image when position is absolute.<br>The image is positioned with respect to its ancestor(here browser).'
							typing('.introjs-tooltiptext', typingContent,function() {
								$("#styleTag2").addClass("blink").effect("transfer", {to: $("#nature1Div"), className: "ui-effects-transfer"}, 1500, function() {
									$('#nature1Div').css({'position': 'absolute'});
									$('#nature1Div').css({'top': '50px'});
									$('#nature1Div').css({'left': '0'});
									introjs.refresh();
									$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
									$('.animation-nextbtn').click(function() { 
										$('.animation-nextbtn').remove();
										typingContent = 'Notice the change in top when position is absolute.'
										typing('.introjs-tooltiptext', typingContent,function() {
											$("#styleTag3").addClass("blink").effect("transfer", {to: $("#nature1Div"), className: "ui-effects-transfer"}, 1500, function() {
											$('#nature1Div').css({'top': '100px'});
											introjs.refresh();
											$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
											$('.animation-nextbtn').click(function() { 
												$('.animation-nextbtn').remove();
												typingContent = 'Notice the change in left when position is absolute.'
												typing('.introjs-tooltiptext', typingContent,function() {
													$("#styleTag4").addClass("blink").effect("transfer", {to: $("#nature1Div"), className: "ui-effects-transfer"}, 1500, function() {
														$('#nature1Div').css({'left': '50px'});
														introjs.refresh();
														$('.introjs-nextbutton').show();
													});
												});
											});
											});
										});
									});
								});
							});
						} else if(introjs._currentStep == 42) {
							typingContent = 'Notice the change when the position is fixed.'
							typing('.introjs-tooltiptext', typingContent,function() {
								$("#styleTag3").addClass("blink").effect("transfer", {to: $("#nature1Div"), className: "ui-effects-transfer"}, 1500, function() {
									$('#mainDiv').css({'height': 2028});
									$('#nature1Div').css({'position': 'fixed'});
									$('#nature1Div').css({'top': '17.5%'});
									$('#nature1Div').css({'left': '52%'});
									introjs.refresh();
									$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
									$('.animation-nextbtn').click(function() { 
										$('.animation-nextbtn').remove();
										typingContent = 'Move the scroll bar and see.<br>The position of image is fixed in all pages.'
										typing('.introjs-tooltiptext', typingContent,function() {
											introjs.refresh();
											$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
											$('.animation-nextbtn').click(function() { 
												$('.animation-nextbtn').remove();
												typingContent = 'Notice the change in top when position is fixed.'
												typing('.introjs-tooltiptext', typingContent,function() {
													$("#styleTag3").addClass("blink").effect("transfer", {to: $("#nature1Div"), className: "ui-effects-transfer"}, 1500, function() {
														$('#nature1Div').css({'top': '28%'});
														introjs.refresh();
													$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
													$('.animation-nextbtn').click(function() { 
														$('.animation-nextbtn').remove();
														typingContent = 'Notice the change in left when position is fixed.'
														typing('.introjs-tooltiptext', typingContent,function() {
															$("#styleTag4").addClass("blink").effect("transfer", {to: $("#nature1Div"), className: "ui-effects-transfer"}, 1500, function() {
																$('#nature1Div').css({'left': '58%'});
																introjs.refresh();
																$('.introjs-nextbutton').show();
															});
														});
													});
												});
											});
										});
										});
									});
								});
							});
						} else if(introjs._currentStep == 45) {
							$('#nature1Div').css({'z-index': '2'});
							typingContent = 'Notice that there is no change in top when position is static'
							typing('.introjs-tooltiptext', typingContent,function() {
								$("#styleTag3").addClass("blink").effect("transfer", {to: $("#nature1Div"), className: "ui-effects-transfer"}, 1500, function() {
									$('#nature1Div').css({'position': 'relative'});
									$('#nature1Div').css({'top': '0'});
									$('#nature1Div').css({'left': '0'});
									introjs.refresh();
									$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
									$('.animation-nextbtn').click(function() { 
										$('.animation-nextbtn').remove();
										typingContent = 'Notice that there is no change in top when position is static.'
										typing('.introjs-tooltiptext', typingContent,function() {
											$("#styleTag3").addClass("blink").effect("transfer", {to: $("#nature1Div"), className: "ui-effects-transfer"}, 1500, function() {
											introjs.refresh();
											$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
											$('.animation-nextbtn').click(function() { 
												$('.animation-nextbtn').remove();
												typingContent = 'Notice that there is no change in left when position is static.'
												typing('.introjs-tooltiptext', typingContent,function() {
													$("#styleTag4").addClass("blink").effect("transfer", {to: $("#nature1Div"), className: "ui-effects-transfer"}, 1500, function() {
														introjs.refresh();
														$('.introjs-nextbutton').show();
													});
												});
											});
										});
									});
								});
							});
							});
						}
					break;
					case "restartBtn":
						$('.introjs-helperLayer').one('transitionend', function () {
							$("#restartBtn").removeClass('visibility-hidden');
							$('#restartBtn').click(function() {
								location.reload();
							});
						});
					break;
				}
		});
	});		
	introjs.start();
	typingContent = 'Let us revise a basic HTML page syntax which already you are familiar with'
	typing('.introjs-tooltiptext',typingContent,function() {
		$('.introjs-nextbutton').show();
	});
}

function browserDivAnim(id1, id2) {
	transferEffect(id1, id2, function() {
		$(id).removeClass('opacity00');
		setTimeout(function() {
			introjs.nextStep();
		}, 1000);
	});
}
function browserCSSAnim(id1, prop, val, pId) {
	typing('.introjs-tooltiptext', text, function() {
		transferEffect(id1, '#' + pId, function() {	
			$('#' + pId).css(prop, val);
			introjs.refresh();
			$('.introjs-nextbutton').show();
			styleIndex++;
		});
	});
}

function styleTypingText(text, val, id) {
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-tooltiptext').append('<br><span id="totalpositionDiv"></span>')
		typingContent = 'Enter <span class="ct-code-b-yellow" id=positionDiv>' + val + '</span>';
		typing('#totalpositionDiv', typingContent, function() {
			inputsValidation(id, val, 0, 1);
		});
	});
}

function customTyping(text, id, value) {
	typing('.introjs-tooltiptext',text,function() {
		inputsValidation(id, value, 0, 1);
	});
}
			
function typing(typingId, typingContent, callbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval": '5',
		"cursor_color": "blue"
	}, function() {
		$(typingId).removeClass('typingCursor');
		callbackFunction();
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

//inputs validation(for basic tags)
function inputsValidation(id, tag, count, val) {
	$(id).removeClass("opacity00").attr("disabled", false).focus();
	//disabled paste option
	$(id).off('paste').on('paste', function(e) {
		e.preventDefault();
	});
	$(id).off("keyup").on("keyup", function(e) {
		$(".ct-red, .usr-btn").remove();
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
			$('.introjs-tooltiptext').append("<div class='ct-red'>write correct text</div>");
		}
	});
}

function userButton(count) {
	$(".usr-btn").remove();
	if (count == 2) {
		text = "Type <span class='ct-code-b-yellow'>src=\"\"</span> <b>src</b> - source path of an image path.";
		imgTagTyping('#img1Open', text, '1', '&lt;img <input id="srcEnter" maxlength="6">&gt;', '#srcEnter', 'src=""', 3, 0);
	} else if (count == 3) {
		text = "Type <span class='ct-code-b-yellow'>nature.jpg</span> value of the source image.";
		imgTagTyping('#srcEnter', text, '1', '&lt;img src=\"<input id="urlEnter" maxlength="10">"&gt;', '#urlEnter', 'nature.jpg', 4, 0);
	} else if (count == 4) {
		text = "Type <span class='ct-code-b-yellow'>id=\"\"</span> <b>id</b> - unique identification for the image";
		imgTagTyping('#urlEnter', text, '1', '&lt;img src="nature.jpg" <input id="idEnter" maxlength="5">&gt;', '#idEnter', 'id=""', 5, 0);
	} else if (count == 5) {
		text = "Type <span class='ct-code-b-yellow'>natureDiv</span> value of the id for the image";
		url = '&lt;img src="<span id="urlEnter">nature.jpg</span>" id =\"<input id="idurlEnter" maxlength="9">"&gt;'
		imgTagTyping('#urlEnter', text, '1', url, '#idurlEnter', 'natureDiv', 0, 1);
	} else if (count == 6) {
		text = "Type <span class='ct-code-b-yellow'>src=\"\"</span> <b>src</b> - source path of an image path.";
		imgTagTyping('#urlEnter', text, '2', '&lt;img <input id="src1Enter" maxlength="6">&gt;', '#src1Enter', 'src=""', 7, 0);
	} else if (count == 7) {
		text = "Type <span class='ct-code-b-yellow'>nature.png</span> value of the source image.";
		imgTagTyping('#src1Enter', text, '2', '&lt;img src=\"<input id="url1Enter" maxlength="10">"&gt;', '#url1Enter', 'nature.png', 8, 0);
	} else if (count == 8) {
		text = "Type <span class='ct-code-b-yellow'>id=\"\"</span> <b>id</b> - unique identification for the image";
		imgTagTyping('#url1Enter', text, '2', '&lt;img src="nature.png" <input id="id1Enter" maxlength="5">&gt;', '#id1Enter', 'id=""', 9, 0);
	} else if (count == 9) {
		text = "Type <span class='ct-code-b-yellow'>nature-1Div</span> value of the id for the image";
		url = '&lt;img src="<span id = "url1Enter">nature.jpg</span>" id =\"<input id="idurl1Enter" maxlength="11">"&gt;';
		imgTagTyping('#id1Enter', text, '2', url, '#idurl1Enter', 'nature-1Div', 0, 1);
	} 
}

function imgTagTyping(id1, text, i, url, id2, value, t1, t2) {
	$(id1).off();
	$('.introjs-tooltiptext > ul').append('<li></li>');
	typing('.introjs-tooltiptext > ul li:last-child', text, function() {
		$("#img" + i + "Enter").text('').append(url);
		$(id2).attr({'type' : 'text', 'spellcheck' : 'false', 'class' : 'opacity00 usr-txt', 'size': $(id2).attr('maxlength')});
		introjs.refresh();
		inputsValidation(id2, value, t1, t2);
	});
}
//transfer effect
function transferEffect(id1, id2, callBackFunction) {
	$(id1).addClass("zIndex");
	$(id1).effect("highlight", {color : "yellow"}, 800).effect("transfer", {to: $(id2), className: "ui-effects-transfer"}, 1200, function() {
		$(id2).removeClass("opacity00");
		$(id1).removeClass("zIndex");
		callBackFunction();
	});
}

function creatingBrowser() {
	$('#browserDiv').append('<div class="col-xs-12 padding0 margin-top10 container border-css">'
							+ '<div class="tab-container"><ul class="tabs clearfix" ><li class="active"><div class="col-xs-12 margin-top20 padding0"'
							+ ' id="browserHeading">Images</div><i class="fa fa-times fa-sm margin-top20"></i></li></ul>'
							+ '<span id ="plus" class="plus"><i class="fa fa-plus"></i></span></div>'
							+ '<div class="col-xs-12 padding0 browser-css"><div class="col-xs-2 padding0 text-center">'
							+ '<span id="arrowCircle" class="col-xs-4 padding0"><i class="fa fa-arrow-left arrow"></i></span>'
							+ '<span class="col-xs-4 padding0"><i class="fa fa-arrow-right arrow"></i></span>'
							+ '<span class="col-xs-4 padding0"><i class="fa fa-rotate-right fa-1x"></i></span></div>'
							+ '<div class="col-xs-8 padding0 text-center url"><input maxlength="100" '
							+ 'class="user-text padding0" id="inputId" value="https://www.codetantra.com/webdevelopment/images.html" disabled>'
							+ '<span class="col-xs-1 padding0"><i class="fa fa-star-o fa-1x"></i></span></div>'
							+ '<div class="col-xs-2 padding0 fa-display text-center">'
							+ '<span class="col-xs-6 padding0"><i class="fa fa-home fa-1x"></i></span>'
							+ '<span class="col-xs-6 padding0"><i class="fa fa-bars fa-1x"></i></span></div></div>'
							+ '<div class="col-xs-12 html-body" id="htmlBody"><div class="browser-text opacity00 padding0" id="browserText">'
							+ ' <img src="../images/nature2.jpg" id="natureDiv" class="opacity00"><img src="../images/nature.png" id="nature1Div"'
							+ ' class="opacity00"></div></div></div>');
}
</script>	

<div id=mainDiv>
	<div class="text-center margin-top20"><h4 class="label ct-demo-heading" id="heading">Images</h4></div>
	<div class="col-xs-12">
<pre class="col-xs-offset-1 col-xs-4 code-div border1 margin-top20" id="codeDiv">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
	&lt;head&gt;
		&lt;title&gt;Images&lt;/title&gt; 
		<span id="styleTag"">&lt;style&gt;
			<span id=imgselector><input maxlength=10" size="10" id='imgselectoropen'><input maxlength="1" size="1" id='imgselectoropenbrace'/>
				<span id=styleTag1Div ><input maxlength="7" size="7" id='styleTag1'><input maxlength="1" size="1" id='stylecolonTag1'><input maxlength="3" size="3" id='stylevalueTag1'><input maxlength="1" size="1" id='stylesemicolonTag1'></span>
			<input maxlength="1" size="1" id='imgselectorclose'></span>
 			<span id=imgselector2><input maxlength="13" size="13" id='imgselector2open'><input maxlength="1" size="1" id='imgselectoropen2brace'/>
				<span id=styleTag2Div ><input maxlength="8" size="8" id='styleTag2'><input maxlength="1" size="1" id='stylecolonTag2'><input maxlength="8" size="8" id='stylevalueTag2'><input maxlength="1" size="1" id='stylesemicolonTag2'></span>
				<span id=styleTag3Div ><input maxlength="3" size="3" id='styleTag3'><input maxlength="1" size="1" id='stylecolonTag3'><input maxlength="5" size="5" id='stylevalueTag3'><input maxlength="1" size="1" id='stylesemicolonTag3'></span>
				<span id=styleTag4Div ><input maxlength="4" size="4" id='styleTag4'><input maxlength="1" size="1" id='stylecolonTag4'><input maxlength="4" size="4" id='stylevalueTag4'><input maxlength="1" size="1" id='stylesemicolonTag4'></span>
			<input maxlength="1" size="1" id='imgselectorclose2'></span>
		&lt;/style&gt;</span>
	&lt;/head&gt;
	&lt;body&gt;
		<div id="img1Enter" style="display: inline-block"><input id="img1Open" maxlength="5" size="5"></div>
		<div id="img2Enter" style="display: inline-block"><input id="img2Open" maxlength="5" size="5"></div>
	&lt;/body&gt;
&lt;/html&gt;</pre>
			
		<div class=" col-xs-5 col-xs-offset-1 margin-top20 padding0" id="browserDiv"></div>
	</div>
	<div class='buttons-div col-xs-12 text-center'>
		<button type="button" class="btn btn-warning visibility-hidden" id="restartBtn">Restart</button>
	</div>	
</div>
</body>
</html>