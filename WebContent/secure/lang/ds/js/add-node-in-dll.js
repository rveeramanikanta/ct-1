function addNodesInDLLReady() {
	dynamicTempNodes(1);
	createDynamicNodes('#fstExplain', 0);
	createDynamicNodes('#dynamicNodes', 1);
	svgAppend("#animationDiv");
	initIntroJS();
	/*createDynamicNodes('#dynamicNodes', 2);
	createDynamicNodes('#dynamicNodes', 3);
	$('.opacity00').removeClass('opacity00');
	svgAnimatingLineTopAndBottom('#tempDiv1', '#prevDiv1', 'line1', true);
	svgAnimatingLineTopAndBottom('#prevDiv2', '#tempDiv1', 'line2', false);
	svgAnimatingLineRightToLeft('#nextDiv1', '#prevDiv2', 'line3', true);
	svgAnimatingLineRightToLeft('#nextDiv2', '#prevDiv3', 'line4', true);
	svgAnimatingLineLeftToRight('#prevDiv2', '#nextDiv1', 'line5');
	svgAnimatingLineLeftToRight('#prevDiv3', '#nextDiv2', 'line6');*/
}

function initIntroJS() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		showBullets: false,
		exitOnOverlayClick: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps: [ {
			element: '#headingInDll',
			intro: ''
		}, {
			element: '#algorithmDiv',
			intro: '',
			animateStep: 'listExplain',
			tooltipClass: 'hide'
		}, {
			element: '#animationDiv',
			intro: '',
			animateStep: 'nodeExplanation',
			tooltipClass: 'hide'
		} ]
	});
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		switch(elementId) {
		case 'headingInDll':
			text = 'Here we will learn about <y>addNode()</y> method in a <y>Doubly Linked List</y>.';
			typing('.introjs-tooltiptext', text, function() {
				$('.introjs-nextbutton').show();
			});
		break;
		case 'algorithmDiv':
			$('#algorithmDiv').removeClass('opacity00');
			$('.introjs-helperLayer').one('transitionend', function() {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
					case 'listExplain':
						$('#codeAndAlgorithmDiv').addClass('box-border');
						text = 'Let us learn about adding a <g>node</g> to a <bl>Doubly Linked List(DLL)</bl>. &emsp;';
						typing('#algorithmDiv', text, function() {
							nextBtnWithoutCalling('#algorithmDiv', function() {
								$('#algorithmDiv').append('<ul style="list-style-type: circle" id="ul1"></ul>');
								$('#dataAddress0').parent().parent().remove();
								introjs.nextStep();
							});
						});
					break;
				}
			});
		break;
		case 'animationDiv':
			$('#animationDiv').removeClass('opacity00');
			introjs.refresh();
			$('#node0').addClass('zIndex');
			$('.introjs-helperLayer').one('transitionend', function() {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
					case 'nodeExplanation':
						$('#data0, #next0').addClass('opacity00');
						$('#node0').removeClass('opacity00').addClass('col-xs-offset-1');
						TweenMax.from("#node0", 1, {top : -30, onComplete:function() {
							$('.introjs-tooltip').removeClass('hide');
							text = '<span id="l1">Let us consider a <yy class="ct-fonts g">node</yy> structure which '
									+ 'contains <yy class="ct-fonts brn">three members</yy>.'
									+ '<ol><li>A <yy class="ct-fonts g">pointer</yy> to the <yy class="ct-fonts g">previous</yy> node.</li>'
									+ '<li>An <yy class="ct-fonts">int</yy> data type to hold the user <yy class="ct-fonts">data</yy>.</li>'
									+ '<li>A <yy class="ct-fonts g">pointer</yy> to the <yy class="ct-fonts g">next</yy> node.</li></ol></span>';
							typing('.introjs-tooltiptext', text, function() {
								algorithmSteps(text, '.introjs-tooltiptext #l1', '#algorithmDiv #l1', 0, 'structCode');
							});
						}});
					break;
					case 'fstDeclaration':
						$('#node0').css({'opacity' : '0.5'});
						zoomInEffect('#firstNode', function() {
							animatedTooltip('#firstDiv', "bottom", "first stores the beginning of the linked list");
							$('.introjs-tooltip').removeClass('hide');
							text = '<span id="l2">Let us store the <yy class="ct-fonts brn">beginning of the linked list</yy> in a pointer variable'
									+ ' of type <yy class="ct-fonts g">node</yy> (<bgb>first</bgb>).<br> Since the'
									+ ' <yy class="ct-fonts brn">Linked list</yy> is <yy class="ct-fonts brn">not yet created</yy> we should initialize it with <yy class="ct-fonts one">NULL</yy>.';
							typing('.introjs-tooltiptext', text, function() {
								algorithmSteps(text, '.introjs-tooltiptext span', '#algorithmDiv #l2', 1, 'fstCreation');
							});
						});
					break;
					case 'fstListCreation':
					text = '<span id="l3Span">Let us consider the <yy class="ct-fonts">steps</y> involved in <yy class="ct-fonts">adding</yy> a new '
							+ '<yy class="ct-fonts b">node</yy> for a given value.</span><br><br>Enter a value : '
							+ '<input type="text" class="usr-txt position-css zIndex" size="3" maxlength="3" id="nodeVal" />';
					typing('.introjs-tooltiptext', text, function() {
						validation('#nodeVal', 1);
					});
				}
			});
			break;
		case 'codeAndAlgorithmDiv':
			$('#algorithmDiv').removeClass('z-index10000');
			$('.introjs-helperLayer').one('transitionend', function() {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
					case 'structCode':
						zoomInEffect('#codeDiv', function() {
							structCode();
							$('#l1').parent().attr('id', 'l1Parent');
							$('#algorithmDiv ul li').not('ol li').eq(0).effect('highlight', {color: 'yellow'}, 1400);
							transWithZoomInEffect('#algorithmDiv #l1Parent', '#structCode', function() {
								introNextSteps('#animationDiv', 'fstDeclaration', 'hide');
								nextBtnWithoutCalling('#structCode', function() {
									introjs.nextStep();
								})
							});
						});
					break;
					case 'fstCreation':
						$('#codeDiv').append('<br><br><span id="fstCreation" class="opacity00">node first = <g>NULL</g>; '
								+ ' <span><i class="fa fa-question-circle fa-1x" id="helpText"	></i></span> &emsp;</span>');
						$('#algorithmDiv ul li:last').effect('highlight', {color: 'yellow'}, 1400);
						transWithZoomInEffect('#l2', '#fstCreation', function() {
							animatedTooltip('#helpText', "top", "first stores the beginning of the linked list");
							nextBtnWithoutCalling('#fstCreation', function() {
								introNextSteps('#animationDiv', 'fstListCreation', 'show');
								introjs.nextStep();
							});
						});
					break;
				}
			});
			break;
		}
	});
	introjs.start();
}

function typing(typingId, typingContent, typingCallbackFunction) {
	$('.typingCursor').removeClass('typingCursor');
	$(typingId).typewriting(typingContent, {
		"typing_interval" : '1',
		"cursor_color" : 'white'
	}, function() {
		typingCallbackFunction();
		$('.introjs-tooltip').show();
	});
}

function introNextSteps(stepName, animatedStep, tooltip, position) {
	$('.introjs-disabled').removeClass('introjs-disabled');
	var options = {
			element :stepName,
			intro :'',
			position : position,
			tooltipClass : tooltip,
			animateStep: animatedStep
	}
	introjs.insertOption(introjs._currentStep + 1, options);
	introjs._options.steps.push({"element" : stepName});
}

function nextBtnWithoutCalling(id, callBackFunction) {
	$(id).append('<a class="introjs-button user-btn">Next &#8594;</a>');
	$('.user-btn').click(function() {
		$('.user-btn').remove();
		callBackFunction();
	});
}

function zoomInEffect(selector1, callBackFunction) {
	$(selector1).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(selector1).removeClass("animated zoomIn")
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1000 , function() {
		$(selector2).removeClass('opacity00')
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function transWithZoomInEffect(selector1, selector2, callBackFunction) {
	transferEffect(selector1, selector2, function() {
		zoomInEffect(selector2, function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		});
	});
}

function algorithmDivColors() {
	$('#algorithmDiv yy').addClass('ct-blue-color').removeClass('ct-fonts');
	$('#algorithmDiv .g').removeClass('ct-blue-color').addClass('ct-green-color');
	$('#algorithmDiv .brn').removeClass('ct-blue-color').addClass('ct-brown-color');
}


function validation(selector, val) {
	$(selector).effect('highlight', {color: 'yellow'}, 500).focus();
	$(selector).on('keydown', function(e) {
		var max = $(this).attr('maxlength');
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		if (((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) || (e.keyCode == 13 || e.keyCode ==9)){
			e.preventDefault();
		}
		if ($(this).val().length > max - 1) {
			$('.error-text').remove();
			$('.introjs-tooltiptext').append('<div class="error-text ct-fonts">Here we restrict the maximum length to 3 digits only.</div>')
			e.preventDefault();
		}
	});
	$(selector).on('keyup', function(e) {
		if ($(selector).val().length != 0) {
			$('.user-btn, .errMsg').remove();
			$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="eventValidation(' + val + ')">Next &#8594;</a>');
			if (e.keyCode == 13) {
				eventValidation(val);
			}
		} else {
			$('.user-btn').hide();
			$('.error-text').remove();
			$('.introjs-tooltiptext').append('<div class="error-text ct-fonts errMsg">Please enter number.</div>');
		}
	});
}

function eventValidation(val) {
	$('.user-btn, .error-text').remove();
	$('#nodeVal').off();
	$('input').attr('disabled', true);
	if (val == 1) {
		validationAnim();
	} else {
		secondNdeAnim(val);
	}
}


function validationAnim() {
	$('.introjs-tooltiptext').append('<br><br><div id="l3Div"><div>')
	text = 'Allocate <yy class="ct-fonts brn">memory</yy> for the new node (<yy class="ct-fonts g">address</yy> of the new node is stored in'
			+ ' <yy class="ct-fonts g">temp</yy>) and store the given value in <yy class="ct-fonts">data</yy>.';
	typing('#l3Div', text, function() {
		nodeAnim(1, function() {
			$('#algorithmDiv').append('<span id="l3Span" class="opacity00">' + $('.introjs-tooltiptext #l3Span').html() + '</span>');
			algorithmDivColors();
			nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
				$('#algorithmDiv').addClass('z-index10000');
				transferEffect('.introjs-tooltiptext #l3Span', '#algorithmDiv #l3Span', function() {
					$('#algorithmDiv #l3Span').after('<ul style="list-style-type: circle" id="ul2"><li><span id="l3Div" class="opacity00">'
												+ $('.introjs-tooltiptext #l3Div').html() + '</span></li></ul>');
					algorithmDivColors();
					transferEffect('.introjs-tooltiptext #l3Div', '#algorithmDiv #l3Div', function() {
						$('#algorithmDiv ul:last').css({'list-style-type': 'circle'});
						introNextSteps('#codeAndAlgorithmDiv', 'methodCreation', 'hide');
						$('.introjs-nextbutton').show();
						//addNodeMethod();
					});
				});
			});
		});
	});
}


function nodeAnim(val, callBackFunction) {
	nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
		$('#node' + val).removeClass('opacity00');
		TweenMax.from("#node"+ val, 1, {top : -30, onComplete:function() {
			zoomInEffect('#tempNodeParent' + val, function() {
				fromEffectWithTweenMax('#dataAddress' + val, '#tempNode' + val, true, function() {
					svgAnimatingLineTopAndBottom('#tempNodeParent' + val, '#nextDiv' + val, 'line11', true, function() {
						fromEffectWithTweenMax('#nodeVal', '#data' + val, false, function() {
							$('#nodeVal').css({'color': 'white'});
							callBackFunction();
						});
					});
				});
			});
		}});
	});
}

function algorithmSteps(text, id1, id2, val, animatedStep) {
	$('#algorithmDiv ul').append('<li class="opacity00">' + text + '</li>');
	$(id2).addClass('opacity00');
	algorithmDivColors();
	nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
		$('#algorithmDiv').addClass('z-index10000');
		transferEffect(id1, id2, function() {
			$('#algorithmDiv li').not('ol li').eq(val).removeClass('opacity00');
			introNextSteps('#codeAndAlgorithmDiv', animatedStep, 'hide');
			$('.introjs-nextbutton').show();
		});
	});
}

function structCode() {
	$('#codeDiv').text('').append('<div id="structCode" class="position-css opacity00"><g>struct list</g> {\n'
						+ '\tint <bl>data</bl>;\n'
						+ '\tstruct list <g>*prev</g>;\n'
						+ '\tstruct list <g>*next</g>;\n'
						+ '};\ntypedef struct list *node; \t </div>');
}

function dynamicTempNodes(val) {	//temp nodes
	$('#tempDynamicNodes').append('<div class="col-xs-2 col-xs-offset-1 padding0 opacity00" id="tempNodeParent' + val + '">'
						+ '<div class="col-xs-12 box padding0 temp-node" id="tempDiv' + val + '"><span id="tempNode' + val + '"'
						+ ' class="ct-brown-color ct-fonts position-css temp-node-val opacity00">1245</span></div>'
						+ '<div class="text-center col-xs-12 padding0 ct-green-color ct-fonts" id="tempame' + val + '">temp</div></div>');
	animatedTooltip('#tempDiv' + val, "top", "Address of the newly created node");
}

function createDynamicNodes(id, nodeNum) {	//node
	var randomAddress = getRandomInt(1000, 5000);
	$(id).append('<div class="col-xs-2 nodes list-nodes opacity00" id="node' + nodeNum + '" style="top: 0px; width: auto;">'
	 				+ ' <div class="col-xs-12 padding0"><div class="col-xs-4 ct-green-color ct-fonts text-center padding0">prev</div>'
					+ ' <div class="col-xs-4 ct-blue-color ct-fonts padding0 text-center">data</div>'
					+ '	<div class="col-xs-4 ct-green-color ct-fonts text-center padding0">next</div></div>'
					+ ' <div id="nodedata' + nodeNum + '"><div id="prevDiv' + nodeNum + '" class="div-border left-radius col-xs-4 prev-div">'
					+ ' <span id="prev' + nodeNum + '" class="position prev-span ct-green-color ct-fonts inline-style opacity00"></span></div>'
					+ ' <div id="dataDiv' + nodeNum + '" class="div-border no-radius col-xs-4 data-div">'
					+ ' <span id="data' + nodeNum + '" class="data-span ct-blue-color ct-fonts opacity00" style="top: 0px; left: 0px;"></span></div>'
					+ ' <div id="nextDiv' + nodeNum + '" class="position div-border right-radius col-xs-6 next-div">'
					+ ' <span id="next' + nodeNum + '" class="position next-span ct-green-color ct-fonts inline-style opacity00"></span></div></div>'
					+ ' <div class="col-xs-12 padding0"><div class="col-xs-4 col-xs-offset-4 padding0 text-center">'
					+ ' <span id="dataAddress' + nodeNum + '" class="data-address padding0 ct-brown-color ct-fonts">'+ randomAddress
					+ '</span></div></div></div>');
	animatedTooltip('#prevDiv' + nodeNum, "bottom", "prev holds previous node's address");
	animatedTooltip('#dataDiv' + nodeNum, "bottom", "data holds user data");
	animatedTooltip('#nextDiv' + nodeNum, "bottom", "next holds next node's address");
}

function getRandomInt(min, max) { //random address
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function animatedTooltip(id, position, tooltipText) {
	$(id).addClass('zIndex').attr({"data-placement" : position, "data-original-title" : tooltipText}).tooltip();
}


function fromEffectWithTweenMax(selector1, selector2, flag, callBackFunction) {
	if (flag) {
		$(selector2).text($(selector1).text()).addClass('opacity00');
	} else {
		$(selector2).text($(selector1).val()).addClass('opacity00');
	}
	var l1 = $(selector1).offset();
	var l2 = $(selector2).css({"color" : "brown", "font-width" : "bold", "z-index" : "99999999"}).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	$("body").append("<span id='dummy' style='position: relative; z-index: 9999999; color: brown;'>" + $(selector2).text() + "</span>");
	$("#dummy").offset({"top" : l2.top, "left" : l2.left});
	$(selector1).addClass('z-index1000000').effect( "highlight",{color: '#ffff33'}, 500);
	$("#dummy").remove();
	$(selector2).removeClass('opacity00');
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		$(selector2).removeAttr("style").css("color", "brown");
		$(selector1).removeClass('z-index1000000');
		if (typeof callBackFunction === "function") {
			introjs.refresh();
			callBackFunction();
		}
	}});
}

function fadeInBounceEffectWithTimelineMax(selector1, selector2, flag, val, callBackFunction) {
	var timelineMax = new TimelineMax();
	$(selector1).parent().effect( "highlight",{color: 'blue'}, 500, function() {
		var l1 = $(selector1).offset();
		var l2 = $(selector2).offset();
		var topLength = l1.top - l2.top;
		var leftLength = l1.left - l2.left;
		$("body").append("<span id='dummy' class='ct-brown-color ct-fonts' style='position: relative;z-index: 9999999;'>" 
					+ $(selector2).text() + "</span>");
		$('#dummy').offset({"top": l2.top, "left": l2.left});
		$(selector2).text($(selector1).text());
		TweenLite.from(selector2, 2.8, {ease: Bounce.easeOut, top: topLength, left: leftLength});
		if (flag) {
			TweenLite.to('#dummy', 1.5, {ease: Sine.easeOut, left: val, delay : 1.1, opacity:0 , onComplete: function() {
				bounceAnim(selector1, selector2, callBackFunction);
			}});
		} else {
			TweenLite.to('#dummy', 1.5, {ease: Sine.easeOut, top: val , delay : 1.1, opacity:0 , onComplete: function() {
				bounceAnim(selector1, selector2, callBackFunction);
			}});
		}
	});
}

function bounceAnim(selector1, selector2, callBackFunction) {
	$(selector2).removeAttr("style");
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
	$(selector2).text($(selector1).text());
	$("body").removeAttr("style");			
	$('#dummy').remove();
}

function svgAppend(selector) {
	var code = '<svg class="svg-css" id="svgId"></svg>';
	$(selector).append(code);
	svgMarkerAppend();
}

function svgMarkerAppend() {
	var marker = document.createElementNS("http://www.w3.org/2000/svg", 'marker');
	marker.setAttribute('id', 'arrow');
	marker.setAttribute('refX', '5');
	marker.setAttribute('refY', '2.5');
	marker.setAttribute('markerWidth', '5');
	marker.setAttribute('markerHeight', '5');
	marker.setAttribute('orient', 'auto');
	marker.style.fill = 'gray';
	$("#svgId").append(marker);
	var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	path.setAttribute("d", "M0,0 L5,2.5 L0,5 Z");
	$('#arrow').append(path);
}

function svgLineAppend(svgLineId, x1, y1, x2, y2) {
	var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
	line.setAttribute('id', svgLineId);
	line.setAttribute('class', 'svg-line lines');
	line.setAttribute('x1', x1);
	line.setAttribute('y1', y1);
	line.setAttribute('x2', x2);
	line.setAttribute('y2', y2);
	line.style.markerEnd = 'url("#arrow")';
	$('#svgId').append(line);
}

function svgAnimatingLineRightToLeft(selector1, selector2, svgLineId, lineFlag, callBackFunction) {
	var parentOffset = $("#animationDiv").offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	var x2 = $(selector2).offset().left - parentOffset.left;
	if (lineFlag) { //up
		var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 1.5;
		var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 1.5;
	} else {	//down
		var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
		var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	}
	lineAnim(svgLineId, x1, y1, x2, y2, callBackFunction);
}

function svgAnimatingLineLeftToRight(selector1, selector2, svgLineId, callBackFunction) {
	var parentOffset = $("#animationDiv").offset();
	var x1 = $(selector1).offset().left - parentOffset.left;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 5;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 5;
	lineAnim(svgLineId, x1, y1, x2, y2, callBackFunction);
}

function svgAnimatingLineTopAndBottom(selector1, selector2, svgLineId, flag, callBackFunction) {
	var parentOffset = $("#animationDiv").offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	if (flag) {	// top to bottom
		var y1 = $(selector1).offset().top - parentOffset.top;
		var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight();
	} else {	// bottom to top
		var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight();
		var y2 = $(selector2).offset().top - parentOffset.top;
	}
	lineAnim(svgLineId, x1, y1, x2, y2, callBackFunction);
}

function lineAnim(svgLineId, x1, y1, x2, y2, callBackFunction) {
	svgLineAppend(svgLineId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === 'function') {
			callBackFunction();
		}
	}});
}
