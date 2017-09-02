<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<title>image with float </title>

<style>

.padding0	{
	padding : 0px;
}

#codeDiv {
	background-color : #f4f6f6; 
}

#imgDiv {
	width: 100%;
}

#computerDiv {
	height : 50px !important;
	width : 100px !important;
	background-color:pink;
	float:left;
}

.position {
	position: relative;
}

.buttons-div {
	margin-top: 20px;
	text-align: center;
}

.zIndex {
	z-index: 9999999;
	background: white;
	position: relative;
}

.usr-btn {
	background-color: green;
}

.creamPreTab4 {
    -moz-tab-size: 6;
    tab-size: 3;
    background-color: #f5f5f5;
    border-radius: 8px;
    font-size: 13px;
    padding: 8px;
    margin: 0;
}

.ui-effects-transfer {
	z-index: 99999999;
	border: 1px solid #ED53E5;
	border-radius: 4px;
}

.ct-red {
	color: red;
	font-weight: bold;
}
.usr-txt {
	border: none;
	background: transparent;
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
</head>
<body>
	<div class="text-center margin-top20"><h4 class="label ct-demo-heading" id="heading">Images with float</h4></div>
	<div class = "col-xs-12">
		<div class = "col-xs-offset-1 col-xs-5 code-div margin-top20 padding0" id = "codeDiv">
<pre class = creamPreTab4>
<input maxlength="15" size="15" id='dochtmlTag'>
<input maxlength="6" size="6" id='htmlopenTag'>
	<input maxlength="6" size="6" id='headopenTag'>
		<input maxlength="7" size="7" id='styleopenTag'>
			<span id = imgselector><input maxlength="3" size="3" id='imgselectoropen'> <input maxlength="2" size="2" id='imgselectoropenbrace'/>
				<input maxlength="5" size="5" id='styleTag1'><input maxlength="1" size="1" id='stylecolonTag1'><input maxlength="4" size="4" id='stylevalueTag1'><input maxlength="1" size="1" id='stylesemicolonTag1'>
				<input maxlength="6" size="6" id='styleTag2'><input size="1" maxlength="1" id='stylecolonTag2'><input maxlength="9" size="9" id='stylevalueTag2'><input maxlength="1" size="1" id='stylesemicolonTag2'>
				<input maxlength="12" size="12" id='styleTag3'><input maxlength="1" size="1" id='stylecolonTag3'><input maxlength="4" size="4" id='stylevalueTag3'><input maxlength="1" size="1" id='stylesemicolonTag3'>
				<input maxlength="10" size="10" id='styleTag4'><input maxlength="1" size="1" id='stylecolonTag4'><input maxlength="4" size="4" id='stylevalueTag4'><input maxlength="1" size="1" id='stylesemicolonTag4'>
				<input maxlength="7" size="7" id='styleTag5'><input maxlength="1" size="1" id='stylecolonTag5'><input maxlength="3" size="3" id='stylevalueTag5'><input maxlength="1" size="1" id='stylesemicolonTag5'>
			<input maxlength="1" size="1" id='imgselectorclose'></span>
		<input maxlength="8" size="8" id='stylecloseTag'></span>
	<input maxlength="7" size="7" id='headcloseTag'>
	<input maxlength="7" size="7" id='bodyopenTag'>
		<input maxlength="6" size="6" id='openDiv'>
			<div style="display: inline-block;" id="imgEnter"><input id="imgOpen" maxlength="5" size="5" spellcheck="false"></div>
			<div id = paraDiv class = 'opacity00' style = "display:inline-block" >The IBM Personal Computer XT is a version of
 the IBM PC with a built-in hard drive. It was 
 released as IBM Machine Type number 5160 on
 March 8, 1983.</div>
		<input maxlength="6" size="6" id='closeDiv'>
	<input maxlength="7" size="7" id='bodycloseTag'>
<input maxlength="7" size="7" id='htmlcloseTag'></pre></div>
		<div class="col-xs-4 visibility-hidden col-xs-offset-1 margin-top20 padding0" id="browserDiv" style='display:inline-block;'></div>
	</div>
	<div class='buttons-div col-xs-12'><button type ="button" class="btn btn-warning visibility-hidden" id = "restartBtn">Restart</button></div> 	
<script>
var count = 1;
$(document).ready(function() {
	$('input').attr({'type' : 'text', 'spellcheck' : 'false', 'class' : 'opacity00 usr-txt'});
	creatingBrowser();
	initIntroJS();
});

function initIntroJS() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		steps : [ 
		{
			element : "#dochtmlTag",
			intro : "",
			position : "right"
		}, {
			element : "#htmlopenTag",
			intro : "",
			position : "right"
		}, {
			element : "#htmlcloseTag",
			intro : "",
			position : "right"
		}, {
			element : "#headopenTag",
			intro : "",
			position : "right"
		}, {
			element : "#headcloseTag",
			intro : "",
			position : "right"
		}, {
			element : "#bodyopenTag",
			intro : "",
			position : "right"
		}, {
			element : "#bodycloseTag",
			intro : "",
			position : "right"
		}, {
			element : "#openDiv",
			intro : "",
			position : "right"
		}, {
			element : "#closeDiv",
			intro : "",
			position : "right"
		}, {
			element : "#imgEnter",
			intro : "",
			position : "bottom"
		}, {
			element : "#paraDiv",
			intro : "",
			position : "right"
		}, {
			element : '#browserDiv',
			intro : '',
			position : 'bottom',
			animateStep1 : 'Browser1'
		}, {
			element : '#styleopenTag',
			intro : '',
			position : 'bottom'
		}, {
			element : '#stylecloseTag',
			intro : '',
			position : 'bottom'
		}, {
			element : '#imgselectoropenbrace',
			intro : '',
			position : 'bottom'
		}, {
			element : '#imgselectorclose',
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
			element : '#browserDiv',
			intro : '',
			position : 'bottom',
			animateStep1 : 'Browser2'
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
			element : '#browserDiv',
			intro : '',
			position : 'bottom',
			animateStep1 : 'Browser3'
		}, {
			element : '#styleTag3',
			intro : '',
			position : 'bottom'
		}, {
			element : '#stylecolonTag3',
			intro : '',
			position : 'bottom'
		}, {
			element : '#stylevalueTag3',
			intro : '',
			position : 'bottom'
		}, {
			element : '#stylesemicolonTag3',
			intro : '',
			position : 'bottom'
		}, {
			element : '#browserDiv',
			intro : '',
			position : 'bottom',
			animateStep1 : 'Browser4'
		}, {
			element : '#styleTag4',
			intro : '',
			position : 'bottom'
		}, {
			element : '#stylecolonTag4',
			intro : '',
			position : 'bottom'
		}, {
			element : '#stylevalueTag4',
			intro : '',
			position : 'bottom'
		}, {
			element : '#stylesemicolonTag4',
			intro : '',
			position : 'bottom'
		}, {
			element : '#browserDiv',
			intro : '',
			position : 'bottom',
			animateStep1 : 'Browser5'
		}, {
			element : '#styleTag5',
			intro : '',
			position : 'bottom'
		}, {
			element : '#stylecolonTag5',
			intro : '',
			position : 'bottom'
		}, {
			element : '#stylevalueTag5',					
			intro : '',
			position : 'bottom'
		}, {
			element : '#stylesemicolonTag5',
			intro : '',
			position : 'bottom'
		}, {
			element : '#browserDiv',
			intro : '',
			position : 'bottom',
			animateStep1 : 'Browser6'
		}, {
			element : "#restartBtn",
			intro : "Click to Restart",
			tooltipClass: "introjs-tooltip-min-width-custom",
			position : "right"
		} ]
	});
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		$('.introjs-prevbutton, .introjs-skipbutton, .introjs-nextbutton').hide();
		switch (elementId) {
			case "dochtmlTag":
				text = 'Enter Doctype declaration.<br>Hint: <span class="ct-code-b-yellow">&lt;!DOCTYPE html&gt;</span>'
				typing('.introjs-tooltiptext', text, function() {
					inputsValidation('#dochtmlTag','<!DOCTYPE html>', 0, 1);
				});
			break;
			case "htmlopenTag":
				custonIntroTyping('Open <span class="ct-code-b-yellow">html</span> tag', '#htmlopenTag', '<html>');
			break;
			case "htmlcloseTag":
				custonIntroTyping('Close the <span class="ct-code-b-yellow">html</span> tag', '#htmlcloseTag','</html>');
			break;
			case "styleopenTag":
				custonIntroTyping('Open <span class="ct-code-b-yellow">style</span> tag', '#styleopenTag','<style>');
			break;
			case "stylecloseTag":
				custonIntroTyping('Close the <span class="ct-code-b-yellow">style</span> tag', '#stylecloseTag','</style>');	
			break;
			case "styleselectorDiv":
				introjs.refresh();
				$('.introjs-helperLayer').one('transitionend', function() {
					typingContent = 'Let us write an image selector to specify float property to left.';
					typing('.introjs-tooltiptext',typingContent,function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "imgselectoropenbrace":
				introjs.refresh();
				text = 'Open <span class="ct-code-b-yellow">{</span>';
				custonIntroTyping(text, '#imgselectoropenbrace', '{');
			break;
			case "imgselectoropen":
				text = 'Write <span class="ct-code-b-yellow">img</span>';
				custonIntroTyping(text, '#imgselectoropen','img');
			break;
			case "imgselector":
				$('#imgselector').removeClass('opacity00');
				$('.introjs-helperLayer').one('transitionend', function() {
					typingContent = 'Now apply style to the image.';
					typing('.introjs-tooltiptext',typingContent,function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "imgselectorclose":
				text = 'Close <span class="ct-code-b-yellow">}</span>';
				custonIntroTyping(text, '#imgselectorclose', '}');
			break;
			case "styleTag1":
				custonIntroTyping('Enter <span class="ct-code-b-yellow">float</span>.', '#styleTag1','float');
			break;
			case "stylecolonTag1":
				custonIntroTyping('Enter <span class="ct-code-b-yellow">:</span>', '#stylecolonTag1', ':');
			break;
			case "stylevalueTag1":
				custonIntroTyping('Enter <span class="ct-code-b-yellow">left</span>', '#stylevalueTag1','left');
			break;
			case "stylesemicolonTag1":
				custonIntroTyping('Enter <span class="ct-code-b-yellow">;</span>', '#stylesemicolonTag1', ';');
			break;
			case "styleTag2":
				custonIntroTyping('Enter <span class="ct-code-b-yellow">border</span>.', '#styleTag2', 'border');
			break;
			case "stylecolonTag2":
				custonIntroTyping('Enter <span class="ct-code-b-yellow">:</span>', '#stylecolonTag2', ':');
			break;
			case "stylevalueTag2":
				custonIntroTyping('Enter <span class="ct-code-b-yellow">1px solid</span>', '#stylevalueTag2', '1px solid');
			break;
			case "stylesemicolonTag2":
				custonIntroTyping('Enter <span class="ct-code-b-yellow">;</span>', '#stylesemicolonTag2', ';');
			break;
			case "styleTag3":
				custonIntroTyping('Enter <span class="ct-code-b-yellow">margin-right</span>.', '#styleTag3', 'margin-right');
			break;
			case "stylecolonTag3":
				custonIntroTyping('Enter <span class="ct-code-b-yellow">:</span>', '#stylecolonTag3', ':');
			break;
			case "stylevalueTag3":
				custonIntroTyping('Enter <span class="ct-code-b-yellow">15px</span>', '#stylevalueTag3', '15px');
			break;
			case "stylesemicolonTag3":
				custonIntroTyping('Enter <span class="ct-code-b-yellow">;</span>', '#stylesemicolonTag3', ';');
			break;
			case "styleTag4":
				custonIntroTyping('Enter <span class="ct-code-b-yellow">margin-top</span>.', '#styleTag4', 'margin-top');
			break;
			case "stylecolonTag4":
				custonIntroTyping('Enter <span class="ct-code-b-yellow">:</span>', '#stylecolonTag4', ':');
			break;
			case "stylevalueTag4":
				custonIntroTyping('Enter <span class="ct-code-b-yellow">15px</span>', '#stylevalueTag4', '15px');
			break;
			case "stylesemicolonTag4":
				custonIntroTyping('Enter <span class="ct-code-b-yellow">;</span>', '#stylesemicolonTag4', ';');
			break;
			case "styleTag5":
				custonIntroTyping('Enter <span class="ct-code-b-yellow">padding</span>.', '#styleTag5', 'padding');
			break;
			case "stylecolonTag5":
				custonIntroTyping('Enter <span class="ct-code-b-yellow">:</span>', '#stylecolonTag5', ':');
			break;
			case "stylevalueTag5":
				custonIntroTyping('Enter <span class="ct-code-b-yellow">3px</span>', '#stylevalueTag5', '3px');
			break;
			case "stylesemicolonTag5":
				custonIntroTyping('Enter <span class="ct-code-b-yellow">;</span>', '#stylesemicolonTag5', ';');
			break;
			case "headopenTag":
				custonIntroTyping('Open <span class="ct-code-b-yellow">head</span> tag', '#headopenTag','<head>');
			break;
			case "headcloseTag":
				custonIntroTyping('Close the <span class="ct-code-b-yellow">head</span> tag', '#headcloseTag', '</head>');
			break;
			case "bodyopenTag":
				custonIntroTyping('Open <span class="ct-code-b-yellow">body</span> tag', '#bodyopenTag', '<body>');
			break;
			case "bodycloseTag":
				custonIntroTyping('Close the <span class="ct-code-b-yellow">body</span> tag', '#bodycloseTag', '</body>');
			break;
			case "paraDiv":
				$('#urlEnter').attr({"disabled" : true});
				$('#paraDiv').removeClass('opacity00');		
				$('.introjs-helperLayer').one('transitionend', function() {
					text = 'Consider the following text.';
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "openDiv":
				custonIntroTyping('Open <span class="ct-code-b-yellow">div</span> tag', '#openDiv', '<div>');
			break;
			case "closeDiv":
				custonIntroTyping('Close <span class="ct-code-b-yellow">div</span> tag', '#closeDiv', '</div>');
			break;
			case "imgEnter":
				$('.introjs-helperLayer').one('transitionend', function() {
					text = "Enter an image tag.<br/>Hint: <span class='ct-code-b-yellow'>&lt;img&gt;</span>";
					typing('.introjs-tooltiptext', text, function() {
						inputsValidation("#imgOpen", "<img>", 2, 0);
					});
				});
			break;
		
		case "browserDiv":
			$('.introjs-helperLayer').one('transitionend', function () {
				$('#browserDiv').removeClass('visibility-hidden opacity00');
				var animateStep1 = introjs._introItems[introjs._currentStep].animateStep1;
				switch(animateStep1) {
					case 'Browser1':
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer").one("transitionend", function() {
							transferEffect('#urlEnter', function() {
							$('#browserText').removeClass('opacity00');
							$("#paraDiv").addClass("zIndex").effect("transfer", {to: $(".opacityDiv"), className: "ui-effects-transfer"}, 1500,
									function() {
								$('.opacityDiv').removeClass('opacity00');
								$("#paraDiv").removeClass('zIndex');
								text = 'The text is displayed below the image.'
								typing('.introjs-tooltiptext', text, function() {
									$('.introjs-nextbutton').show();	
								}); 
							});
						});
						});
					break;
				case 'Browser2':
					$(".introjs-helperLayer").one("transitionend", function() {
						text = 'When the float left property is applied, the image is floated to the left and the text is displayed at the right.'
						typing('.introjs-tooltiptext', text,function() {
							$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>"
											+ " Next &#8594;</a>"); 
							$('.animation-nextbtn').click(function() { 
								$(this).remove();
								$('.floatopacity').removeClass('opacity00');
								fromEffectWithTweenMax(".opacityDiv", ".floatopacity", function() { 
									$('.opacityDiv').addClass('opacity00');
									$('.introjs-nextbutton').show();
								});
							}); 
						});
					});
				break;
				case 'Browser3':
					$(".introjs-helperLayer").one("transitionend", function() {
						text = 'Notice the border with style solid, width 1px.'
						typing('.introjs-tooltiptext', text, function() {
							$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>"
													+ " Next &#8594;</a>"); 
							$('.animation-nextbtn').click(function() {
								$(this).remove();
								transferEffect('#styleTag2', function() {
									$('#computerDiv').css({'border' : '1px solid'});
									$('.introjs-nextbutton').show();
								}); 
							});
						});
					});
				break;
				case 'Browser4':
					$(".introjs-helperLayer").one("transitionend", function() {
						text = 'The style margin with right of 15px is set to the image and the text is moved to right.'
						typing('.introjs-tooltiptext', text, function() {
							$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>"
													+ " Next &#8594;</a>"); 
							$('.animation-nextbtn').click(function() {
								$(this).remove();
								transferEffect('#styleTag3', function() {
									$('#computerDiv').css('margin-right','15px');
									$('.introjs-nextbutton').show();
								}); 
							});
						});
					});
				break;
				case 'Browser5':
					$(".introjs-helperLayer").one("transitionend", function() {
						text = 'The style margin with top of 15px is set to the image and the image is moved down.'
						typing('.introjs-tooltiptext', text, function() {
							$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>"
														+ " Next &#8594;</a>"); 
							$('.animation-nextbtn').click(function() { 
								$(this).remove();
								transferEffect('#styleTag4', function() {
									TweenMax.to("#computer",1.5,{ top :0, onComplete:function() {
										$('#computerDiv').css('margin-top','15px');
										$('.introjs-nextbutton').show();
									}});
								}); 
							});
						});
					});
				break;
				case 'Browser6':
					$(".introjs-helperLayer").one("transitionend", function() {
						text = 'Notice the padding set to the image.'
							typing('.introjs-tooltiptext', text, function() {
								$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>"
														+ " Next &#8594;</a>"); 
								$('.animation-nextbtn').click(function() { 
									$(this).remove();
									transferEffect('#styleTag5', function() {
										$('#computerDiv').css('padding','3px');
										$('.introjs-nextbutton').show();
									}); 
								});
							});
						});
					break;
				}
			});
		break;
		case "restartBtn":
			$('.introjs-helperLayer').one('transitionend', function () {
				$("#restartBtn").removeClass('visibility-hidden');
			});
		break;
		}
	});		
	introjs.start();
}

function custonIntroTyping(text, selector, tag) {
	$('.introjs-helperLayer').one('transitionend', function() {
		typing('.introjs-tooltiptext', text, function() {
			inputsValidation(selector, tag, 0, 1);
		});
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
	$(id).off('paste').on('paste', function(e) {
		e.preventDefault();
	});
	$(id).off("keyup").on("keyup", function(e) {
		if (e.keyCode == 17) {
			$(id).val(tag);
		}
		$(".ct-red, .usr-btn").remove();
		if ($(id).val() == tag) {
			if (val == 1) {
				$(".introjs-nextbutton").show();
				if ($('.introjs-nextbutton[style="display: inline-block;"]').length == 1 && e.keyCode == 13) {
					introjs.nextStep();
					$(id).attr({"disabled" : true});
				}
			} else {
				$('.introjs-tooltipbuttons').append('<a class="introjs-button usr-btn" onclick="userButton(' + count + ')">Next &#8594;</a>');
			}
		} else {
			$(".introjs-nextbutton, .usr-btn").hide();
			$('.introjs-tooltiptext').append("<div class='ct-red'>Properly write <span id='tagVal'></span></div>");
			$('#tagVal').text(tag);
		}
	});
}

function userButton(count) {
	$(".usr-btn").remove();
	if (count == 2) {
		imgTagTyping('#imgOpen', 'Enter <span class="ct-code-b-yellow">src=""</span>', '&lt;img <input id="srcEnter" size="6" maxlength="6"'
						+ ' spellcheck="false" type="text" class="usr-txt">&gt;', '#srcEnter', 'src=""', 3, 0)
	} else if (count == 3) {
		url = '&lt;img src="<input id="urlEnter" maxlength="12" size="12" spellcheck="false", type="text" class="usr-txt">"&gt;';
		imgTagTyping('#srcEnter', 'Enter <span class="ct-code-b-yellow">computer.png</span>', url, '#urlEnter', 'computer.png', 0, 1)
	} 
}

function imgTagTyping(id1, text, url, id2, imgNme, t1, t2) {
	$(id1).off();
	typing('.introjs-tooltiptext', text, function() {
		$("#imgEnter").text('').append(url);
		introjs.refresh();
		inputsValidation(id2, imgNme, t1, t2);
	});
}
//transfer effect
function transferEffect(id1, callBackFunction) {
	$(id1).addClass("zIndex");
	$(id1).effect("highlight", {color : "yellow"}, 800).effect("transfer", {to: $('#computerDiv'), className: "ui-effects-transfer"}, 1500, function() {
		$('#computerDiv').removeClass("opacity00");
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
							+ '<div class="col-xs-12 html-body padding0" id="htmlBody"><div class="browser-text opacity00" id="browserText">'
							+ ' <div id=parDiv><img src="../images/computer.png" id = computerDiv>'
							+ ' <div class="floatopacity opacity00 position">The IBM Personal Computer XT is a version of the IBM PC with a'
							+ ' built-in hard drive. It was released as IBM Machine Type number 5160 on March 8, 1983.</div></div>'
							+ ' <div class="opacityDiv opacity00">The IBM Personal Computer XT is a version of the IBM PC with a built-in hard'
							+ ' drive. It was released as IBM Machine Type number 5160 on March 8, 1983.</div></div></div></div>');
}
</script>	
</body>
</html>