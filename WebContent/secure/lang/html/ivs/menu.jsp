<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Menu</title>
<link href="/css/bootstrap.min.css" rel="stylesheet" >
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/jquery-ui.css" rel="stylesheet" >
<link href="/css/animate.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<style type="text/css">
/* -------- browser-css ----------*/
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
	min-height: 150px;
	border-top: 1px solid gray;
	padding: 10px;
}

.margin-top5 {
	margin-top: 5px;
}
/* --------- end of browser css --------*/
.padding0 {
	padding: 0;
}

.margin-top20 {
	margin-top: 20px;
}

.pre-tab {
	tab-size: 3;
	-moz-tab-size: 3;
	border-radius: 8px;
	padding: 8px;
	margin: 0;
}

.usr-txt {
	min-width: 15px;
	min-height: 15px;
	outline: none;
}

.usr-btn {
	background: green;
}

.zIndex {
	z-index: 9999999;
	background: white;
	position: relative;
}

.position-css {
	display: inline-block;
	position: relative;
}

.ui-effects-transfer {
	z-index: 99999999;
	border: 1px solid blue;
	border-radius: 4px;
}

a {
	text-decoration: underline;
}

ul {
	margin: 0 !important;
}

.drop-menu li.list-hover:hover {
	background: #70051a;
}

.drop-menu li.li1-hover:hover ul li a {
	width: 100px; 
}

.drop-menu li.li3:hover ul li a {
	background: #70051a;
}

.drop-menu li.li2:hover ul li a.li2:hover {
	background: #005555;
}

</style>
<script type="text/javascript">
var count, iVal = 1;
$(document).ready(function() {
	creatingBrowser();
	$('#ul1Open').attr({'spellcheck' : 'false', 'class' : 'usr-txt position-css', 'maxlength' : '22', 'contenteditable' : 'false'});
	$('pre span').not('#bodyTags, #styleTags').addClass('opacity00');
	initIntroJS();
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
					element: '#preTab',
					intro: '',
 					tooltipClass: 'hide'
				}, {
					element: '#ul1Open',
					intro: ''
		} ]
	});
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		$('.introjs-helperLayer').one('transitionend', function() {
			switch(elementId) {
				case 'ul1Open':
					$('#ul1Open').after('<br>\t<span id="menu1List" class="opacity00">&lt;li&gt;<br>\t\t&lt;a href="#"&gt;Link 1&lt;/a&gt;<br>'
									+ '\t\t&lt;ul&gt;<br>\t\t\t&lt;li&gt;&lt;a href="#"&gt;Sub Link 11&lt;/a&gt;&lt;/li&gt;<br>'
									+ ' \t\t\t&lt;li&gt;&lt;a href="#"&gt;Sub Link 12&lt;/a&gt;&lt;/li&gt;<br>'
									+ ' \t\t&lt;/ul&gt;<br>\t&lt;/li&gt;</span>');
					$('#bodyTags').append('<br><div id="ul1Close"></div>');
					contentEditableProperties(true, '#ul1Close', '</ul>');
					text = 'Enter <span class="ct-code-b-yellow">&lt;ul class="drop-menu"&gt;</span>';
					typing('.introjs-tooltiptext', text, function() {
						validation('#ul1Open', '<ul class="drop-menu">');
					});
				break;
				case 'ul1Close':
					introNextSteps('#bodyTags', 'withoutStyle', 'show');
					text = 'Enter <span class="ct-code-b-yellow">&lt;/ul&gt;</span>';
					typing('.introjs-tooltiptext', text, function() {
						validation('#ul1Close', '</ul>');
					});
				break;
				case 'bodyTags':
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case 'withoutStyle':
							text = 'Let us take a list';
							liToBrowser(text, 1, 'browserFstLi');
						break;
						case 'withStyle':
							text = 'Let us apply styles';
							typing('.introjs-tooltiptext', text, function() {
								introNextSteps('#propertyVal' + iVal, '', 'show');
								$('.introjs-nextbutton').show();
							});
						break;
					}
				break;
				case 'menu2List':	//second ul
					text = 'Let us take an another list';
					liToBrowser(text, 2, 'browserSecndLi');
				break;
				case 'browserDiv':
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case 'browserFstLi':
							transferEffectToBrowser('#bodyTags', '.drop', function() {
								$('#menu1List').after('<br>\t<span id="menu2List" class="opacity00 position-css">&lt;li&gt;<br>\t'
													+ '&lt;a href="#"&gt;Link 2&lt;/a&gt;<br>\t&lt;ul&gt;<br>\t\t&lt;li&gt;&lt;'
													+ 'a href="#"&gt;Sub Link 21&lt;/a&gt;&lt;/li&gt;<br>\t\t&lt;li&gt;&lt;a href="#"&gt;'
													+ 'Sub Link 22&lt;/a&gt;&lt;/li&gt;<br>\t&lt;/ul&gt;<br>&lt;/li&gt;</span>');
								customIntroTimeToGoNextStep('#menu2List', '', 'show');
							});
						break;
						case 'browserSecndLi':
							$('#styleTags').append('<div id="dropMenuStyle" class="position-css"></div>');
							appendSelectorNOpenBrace('#dropMenuStyle', '#propertyVal' + iVal, '.drop-menu', '#openBrace' + iVal);
							transferEffectToBrowser('#menu2List', $('.drop-menu > li').eq(1), function() {
								styleDivAppend('#dropMenuStyle', '#property' + iVal, 'list-style-type: none;', '<br>\t');
								styleWitNxtStep('#dropMenuStyle', '#bodyTags', 'withStyle', 'right');
							});
						break;
						case 'styling1':
							divStyleWithNextStep('#dropMenuStyle', '#dropMenuLiStyle', 'li', '#property' + iVal, '.drop-menu', 'list-style-type',
									'none', '#property' + (iVal + 1), 'float: left;')
						break;
						case 'styling2':
							$('#browserDiv').css({'z-index': '9999999', 'background' : 'white', 'padding': '4px'});
							divStyleWithNextStep('#dropMenuLiStyle', '#dropMenuLiAStyle', 'li a', '#property' + iVal, '.drop-menu li',
									 'float', 'left', '#property' + (iVal + 1), 'text-decoration: none;');
						break;
						case 'styling3':
							styleChangeInBrowser('#property' + iVal, '.drop-menu li a', 'text-decoration', 'none', true, function() {
								$('#property' + iVal).after('<br>\t<div id="thirdStylePropAttrPadng"></div>');
								contentEditableProperties(false, '#thirdStylePropAttrPadng', 'padding: 8px;');
								customIntroTimeToGoNextStep('#thirdStylePropAttrPadng', '', 'show');
							});
						break;
						case 'thirdStylePropAttrPadng':
							styleChangeInBrowser('#thirdStylePropAttrPadng', '.drop-menu li a', 'padding', '8px', true, function() {
								$('#thirdStylePropAttrPadng').after('<br>\t<div id="thirdStylePropAttrDisplay"></div>');
								contentEditableProperties(true, '#thirdStylePropAttrDisplay', 'display: block;');
								setTimeToIntroNextStep();
							});
						break;
						case 'thirdStylePropAttrDisplay':
							divStyleWithNextStep('#dropMenuLiAStyle', '#dropMenuLiStyleHover', 'li:hover', '#thirdStylePropAttrDisplay', 
									'.drop-menu li a', 'display', 'block', '#property' + (iVal + 1), 'background-color: #70051a;');
						break;
						case 'styling4':
							count = iVal;
							$('.drop-menu li').addClass('list-hover');
							changeStyleNDivAppend('#property' + iVal, '.drop-menu li:hover', 'background-color', '70051a', 3, 
									'#thirdStylePropAttrDisplay', '#thirdStyleColor', 'color: white;');
							
						break;
						case 'thirdStyleColor':
							changeStyleNDivAppend('#thirdStyleColor', '.drop-menu li a', 'color', 'white', 1, '#property1', 
									'#fstBackGround', 'background-color: lightseagreen;');
						break;
						case 'fstBackGround':
							changeStyleNDivAppend('#fstBackGround', '.drop-menu', 'background', 'lightseagreen', 1, '#fstBackGround', '#fstheight',
										'height: 30px;');
						break;
						case 'fstheight':
							iVal = count;
							divStyleWithNextStep('#dropMenuLiStyleHover', '#dropMenuLiHoverUlLiA', 'li:hover ul li a', '#fstheight', '.drop-menu',
									 'height', '30px', '#property' + (iVal + 1), 'width: 100px;');	
						break;
						case 'styling5':
							$('.drop-menu li').addClass('li1-hover');
							changeStyleNDivAppend('#property' + iVal, '.li1-hover', 'width', '100px', iVal, 
									'#property' + iVal, '#fifthDisplay', 'display: block');
						break;
						case 'fifthDisplay':
							divStyleWithNextStep('#dropMenuLiHoverUlLiA', '#dropMenuUl', '.drop-menu ul', '#fifthDisplay', 
									'.li1-hover', 'display', 'block', '#property' + (iVal + 1), 'position: absolute;')
						break;
						case 'styling6':
							divStyleWithNextStep('#dropMenuUl', '#dropMenuLiHoverUlLiAStyle', 'li:hover ul li a:hover', '#property' + iVal,
									'.drop-menu ul', 'position', 'absolute', '#property' + (iVal + 1), 'background: #005555;');
						break;
						case 'styling7':
							count = iVal;
							$('.drop-menu li, .drop-menu li ul li a').addClass('li2');
							changeStyleNDivAppend('#property' + iVal, '.li2', 'heightt', '0px', 5, '#fifthDisplay', '#fifthBackGround',
									'background-color: #70051a;');
						break;
						case 'fifthBackGround':
							$('.drop-menu li').addClass('li3');
							styleChangeInBrowser('#fifthBackGround', '.drop-menu li', 'backgroundd', '', true, function() {
								customIntroTimeToGoNextStep('#restartBtn', '', 'show', 'right');
							});
						break;
					}
				break;
				case 'propertyVal' + iVal:	//selector value enter
					valueEnter('#openBrace' + iVal, elementId, 'show');
				break;
				case 'openBrace' + iVal:	//open braces
					bracesEnter(elementId, true);
				break;
				case 'closeBrace' + iVal:	//close braces
					bracesEnter(elementId, false);
				break;
				case 'restartBtn':
					$('#restartBtn').removeClass('opacity00');
					typing('.introjs-tooltiptext', 'Click to restart', function() {
						$('#restartBtn').click(function() {
							location.reload();
						});
					});
				break;
				case elementId:		//prop and val enter
					browserDivSteps(elementId);
				break;
			}
		});
	});
	introjs.start();
	
	basicTagsReveal(1, 5, function() {
		$('.basic-tags4').effect('highlight', {color: 'yellow'}, 1000);
		zoomInEffect('#browserDiv', function() {
			basicTagsReveal(5, 7, function() {
				$('.introjs-tooltip').removeClass('hide');
				text = 'Basic html page.';
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		});
	});
}

function changeStyleNDivAppend(id1, sel, prop, val, t, pId, id2, value) {
	styleChangeInBrowser(id1, sel, prop, val, true, function() {
		iVal = t;
		var selector = id2.substring(1, id2.length);
		$(pId).after('<br>\t<div id="' + selector + '"></div>');
		contentEditableProperties(true, id2, value);
		setTimeToIntroNextStep();
	});
}

function divStyleWithNextStep(id1, id2, selector1, id3, selector2, prop, val, id4, value) {
	iVal++;
	appendStyleDivs(id1, id2, '#propertyVal' + iVal, '#openBrace' + iVal, selector1, id3, selector2, prop, val, id4, value, function() {
		styleWitNxtStep(id2, '#propertyVal' + iVal);
	});
}

function appendStyleDivs(selector, pId, id, id1, val1, fromVal, toVal, prop, val, id2, val2, callbackFunction) {
	var t = pId.substring(1, pId.length);
	$(selector).after('<br><div id="' + t + '" class="position-css"></div>');
	appendSelectorNOpenBrace(pId, id, val1, id1);
	styleChangeInBrowser(fromVal, toVal, prop, val, true, function() {
		styleDivAppend(pId, id2, val2, '<br>\t');
		callbackFunction();
	});
}

function styleWitNxtStep(id1, id2, animateStep, position) {
	styleDivAppend(id1, '#closeBrace' + iVal, '}', '<br>');
	customIntroTimeToGoNextStep(id2, animateStep, 'show', position);
}

function bracesEnter(elementId, flag) {	//open and close brace enter and next step
	var sel;
		var t = $('#' + elementId).parent().attr('id');
	if (flag) {	//open brace
		sel = $('#' + t + ' div:last').attr('id');
		valueEnter('#' + sel, elementId, 'show');
	} else {	//close brace
		sel = $('#' + t + ' div').nextAll().eq(2).attr('id');
		valueEnter('#' + sel, elementId, 'show');
	}
}


function appendSelectorNOpenBrace(pId, id1, val1, id2) {	//append selector name and open brace
	styleDivAppend(pId, id1, val1, '');
	styleDivAppend(pId, id2, '{', ' ');
}
	
function styleDivAppend(pId, id, value, tags) {	//div append in styles
	var t = id.substring(1, id.length);
	$(pId).append(tags + '<div id="' + t + '"></div>');
	contentEditableProperties(false, id, value);
}

function contentEditableProperties(flag, id, value, animatedStep, position) {
	$(id).attr({'spellcheck' : 'false', 'class' : 'usr-txt position-css', 'maxlength' : value.length, 'contenteditable' : 'false', 'value' : value});
	if (flag) {
		introNextSteps(id, animatedStep, 'show', position);
	}
}

function valueEnter(nextId, id, tooltip, animatedStep) {
	introNextSteps(nextId, animatedStep, tooltip);
	text = 'Enter <span class="ct-code-b-yellow">' + $('#' + id).attr('value') + '</span>';
	typing('.introjs-tooltiptext', text, function() {
		validation('#' + id, $('#' + id).attr('value'));
	});
}

//browser functions
function liToBrowser(text, i, id) {
	typing('.introjs-tooltiptext', text, function() {
		appendLiToBrowser(i);
		zoomInEffect('#menu' + i + 'List', function() {
			introNextSteps('#browserDiv', id, 'hide');
			$('.introjs-nextbutton').show();
		});
	});
}

function appendLiToBrowser(val) {
	if (val == 1) {
		$('#htmlBody').append('<div class="drop opacity00 position-css"><ul class="drop-menu"><li><a href="#">Link 1</a><ul>'
							+ '<li><a href="#">Sub Link 11</a></li><li><a href="#">Sub Link 12</a></li></ul></li></ul></div>')
	} else if (val == 2) {
		$('.drop-menu').append('<li class="opacity00"><a href="#">Link 2</a><ul><li><a href="#">Sub Link 21</a></li>'
							+ '<li><a href="#">Sub Link 22</a></li></ul></li>');
	}
}

function transferEffectToBrowser(selector1, selector2, callbackFunction) {
	$(selector1).addClass('zIndex').effect('transfer', {to: $('.drop'), className: 'ui-effects-transfer'}, 1200, function() {
		TweenMax.to(selector2, 1, {opacity: 1, onComplete:function() {
			$(selector2).removeClass('opacity00');
			$(selector1).removeClass('zIndex');
			callbackFunction();
		}});
	});
}

function styleChangeInBrowser(selector1, selector2, prop, val, flag, callbackFunction) {
	$(selector1).parent().addClass('zIndex');
	$(selector1).effect('highlight', {color: 'yellow'}, 800).effect('transfer', {to: $('.drop'), className: 'ui-effects-transfer'}, 1200, function() {
		if (flag) {
			$(selector2).css(prop, val);
		}
		console.log(prop + ' @@ ' + val);
		introjs.refresh();
		$(selector1).parent().removeClass('zIndex');
		callbackFunction();
	});
}

function browserDivSteps(elementId) {
	var selector;
	if (elementId == 'thirdStylePropAttrPadng' || elementId == 'thirdStylePropAttrDisplay' || elementId == 'thirdStyleColor' || 
			elementId == 'fstBackGround' || elementId == 'fstheight' || elementId == 'fifthDisplay' || elementId == 'fifthBakground' ||
			elementId == 'fifthBackGround') {
		selector = elementId;
	} else if (iVal <= 3 || iVal >= 4) {
		selector = 'styling' + iVal;
	}
	valueEnter('#browserDiv', elementId, 'hide', selector);
}
//end
function typing(typingId, typingContent, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval" : '5',
		"cursor_color" : 'white'
	}, function() {
		typingCallbackFunction();
		$('.introjs-tooltip').show();
	});
}

function introNextSteps(stepName, animatedStep, tooltip, position) {
	$('.introjs-disabled').removeClass('introjs-disabled');
	var options = {
			element : stepName,
			intro : '',
			tooltipClass : tooltip,
			position : position,
			animateStep : animatedStep
	}
	introjs.insertOption(introjs._currentStep + 1, options);
	introjs._options.steps.push({"element" : stepName});
}

function customIntroTimeToGoNextStep(stepName, animatedStep, tooltip, position) {
	introNextSteps(stepName, animatedStep, tooltip, position)
	setTimeToIntroNextStep();
}

function setTimeToIntroNextStep() {
	setTimeout(function() {
		introjs.nextStep();
	}, 800);
}

function zoomInEffect(selector, callbackFunction) {
	$(selector).addClass('zIndex').removeClass('opacity00').addClass('animated zoomIn').one('animationend', function() {
		$(this).removeClass('animated zoomIn').removeClass('zIndex');
		callbackFunction();
	});
}

function creatingBrowser() {	//browser
	$("#browserDiv").append('<div class="col-xs-12 padding0 margin-top10 container border-css">'
					+ '<div class="tab-container"><ul class="tabs clearfix" ><li class="active"><div class="col-xs-12 margin-top20 padding0"'
					+ ' id="browserHeading">Menu</div><i class="fa fa-times fa-sm margin-top20"></i></li></ul>'
					+ '<span id ="plus" class="plus"><i class="fa fa-plus"></i></span></div>'
					+ '<div class="col-xs-12 padding0 browser-css"><div class="col-xs-2 padding0 text-center">'
					+ '<span id="arrowCircle" class="col-xs-4 padding0"><i class="fa fa-arrow-left arrow"></i></span>'
					+ '<span class="col-xs-4 padding0"><i class="fa fa-arrow-right arrow"></i></span>'
					+ '<span class="col-xs-4 padding0"><i class="fa fa-rotate-right fa-1x"></i></span></div>'
					+ '<div class="col-xs-8 padding0 text-center url"><input type="text"'
					+ 'class="user-text padding0" id="inputId" value="https://www.codetantra.com/webdevelopment/menu.html" disabled>'
					+ '<span class="col-xs-1 padding0"><i class="fa fa-star-o fa-1x"></i></span></div>'
					+ '<div class="col-xs-2 padding0 fa-display text-center">'
					+ '<span class="col-xs-6 padding0"><i class="fa fa-home fa-1x"></i></span>'
					+ '<span class="col-xs-6 padding0"><i class="fa fa-bars fa-1x"></i></span></div></div>'
					+ '<div class="col-xs-12 html-body" id="htmlBody"></div></div>');
}

function basicTagsReveal(val, endVal, callbackFunction) {
	if (val < endVal) {
		TweenMax.to(".basic-tags" + val, 0.8, {opacity: 1, onComplete: function() {
			$('.basic-tags' + val).removeClass('opacity00');
			val++;
			basicTagsReveal(val, endVal, callbackFunction);
		}});
	} else {
		callbackFunction();
	}
}

function validation(id, value) {
	$(id).attr({'contenteditable' : 'true'}).focus();
	introjs.refresh();
	$(id).off().on('paste', function(e) {
		e.preventDefault();
	});
	$(id).on("keydown", function(e) {
		//backspace = 8, delete = 46, leftarrow = 37, rightarrow = 39, esc = 27, enter = 13, ctrl = 17, tab = 9;
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		if ($(this).text().length >= value.length || e.keyCode === 13 || e.keyCode === 9) {
			e.preventDefault();
		}
	});
	$(id).on("keyup", function(e) {
		introjs.refresh();
		if (e.keyCode == 17) {
			$(id).text(value);
		}
		if ($(id).text() == value) {
			$(id).attr({"contenteditable" : 'false'});
			$(".introjs-nextbutton").show();
		} else {
			$(".introjs-nextbutton").hide();
		}
	});
}
</script>
</head>
<body>
	<div class="col-xs-12 padding0 margin-top20 text-center"><h1 class="label ct-demo-heading">Menu</h1></div>
	<div class="col-xs-12 padding0 margin-top20">
		<div class="col-xs-12 padding00">
			<div class="col-xs-5 col-xs-offset-1 padding0">
			<pre class="pre-tab" id="preTab">
<span class="basic-tags1">&lt;!DOCTYPE html&gt;</span>
<span class="basic-tags2">&lt;html&gt;</span>
	<span class="basic-tags3">&lt;head&gt;</span>
		<span class="basic-tags4">&lt;title&gt;Menu&lt;/title&gt;</span>
		<span class="basic-tags6">&lt;style&gt;</span>
			<span id="styleTags" class="position-css"></span>
		<span class="basic-tags6">&lt;/style&gt;</span>
	<span class="basic-tags3">&lt;/head&gt;</span>
	<span class="basic-tags5">&lt;body&gt;</span>
		<span id="bodyTags" class="position-css"><div id="ul1Open"></div></span>
	<span class="basic-tags5">&lt;/body&gt;</span>
<span class="basic-tags2">&lt;/html&gt;</span></pre>
			</div>
			<div class="col-xs-5 padding0" style="margin-left: 40px;">
				<div class="col-xs-12 padding0 opacity00" id="browserDiv"></div>
				<div class="col-xs-12 margin-top20 text-center"><span class="btn btn-warning text-center opacity00" id="restartBtn">Restart</span></div>
			</div>
		</div>
	</div>
</body>
</html>