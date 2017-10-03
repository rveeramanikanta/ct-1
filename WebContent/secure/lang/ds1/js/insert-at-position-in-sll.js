function insertAtPositionInSLLReady() {
	dynamicTempNodes(1);
	createDynamicNodes('#dynamicNodes', 1);
	createDynamicNodes('#fstExplain', 0);
	svgAppend("#animationDiv");

	lang = getURLParameter("lang");
	lang = (lang == undefined) ? "c" : lang;
	initIntroJS();
}

function getURLParameter(sParam) {	//language selection in url
	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('&');
	for (var i = 0; i < sURLVariables.length; i++) {
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam) {
			return sParameterName[1];
		}
	}
}

function dynamicTempNodes(val) {	//temp nodes
	$('#tempDynamicNodes').append('<div class="col-xs-2 col-xs-offset-1 padding0 opacity00" id="tempNodeParent' + val + '">'
						+ '<div class="col-xs-12 box padding0 temp-node"><span id="tempNode' + val + '"'
						+ ' class="ct-brown-color ct-fonts position-css temp-node-val opacity00">1245</span></div>'
						+ '<div class="text-center col-xs-12 padding0 ct-green-color ct-fonts" id="tempame' + val + '">temp</div></div>');
	animatedTooltip('.temp-node', "bottom", "Address of the newly created node.");
}

function createDynamicNodes(id, nodeNum) {	//node
	var randomAddress = getRandomInt(1000, 5000);
	$(id).append('<div class="col-xs-2 nodes list-nodes opacity00" id="node' + nodeNum + '" style="top: 0px; width: auto;">'
					+ ' <div class="col-xs-12 padding0"><div class="col-xs-6 ct-blue-color ct-fonts padding0 text-center">'
					+ ' data</div><div class="ct-green-color ct-fonts text-center">next</div></div>'
					+ ' <div id="nodedata' + nodeNum + '"><div id="dataDiv' + nodeNum + '"'
					+ ' class="div-border left-radius col-xs-6 data-div"><span id="data' + nodeNum +'"'
					+ ' class="data-span ct-blue-color ct-fonts position-css" style="top: 0px; left: 0px;"></span></div>'
					+ ' <div id="nextDiv' + nodeNum +'" class="position-css div-border right-radius col-xs-6 next-div">'
					+ ' <span id="next' + nodeNum +'" class="position-css next-span ct-green-color ct-fonts position-css">NULL</span></div></div>'
					+ ' <div class="col-xs-12 padding0"><div class="col-xs-6 padding0 text-center">'
					+ ' <span id="dataAddress' + nodeNum + '" class="data-address padding0 ct-brown-color ct-fonts">'+ randomAddress 
					+ '</span></div></div></div>');
	animatedTooltip('#dataDiv' + nodeNum, "bottom", "data holds user data");
	animatedTooltip('#nextDiv' + nodeNum, "bottom", "next holds next node's address");
}

function getRandomInt(min, max) { //random address
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function animatedTooltip(id, position, tooltipText) {
	$(id).addClass('zIndex').attr({"data-placement" : position, "title" : tooltipText}).tooltip();
}

function initIntroJS() {
	introjs = introJs();
	introjs.setOptions({
		showBullets: false,
		showStepNumbers: false,
		exitOnOverlayClick: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps: [ {
				element: '#headingInSll',
				intro: ''
			}, {
				element: '#algorithmDiv',
				intro: '',
				tooltipClass: 'hide'
			}, {
				element: '#animationDiv',
				intro: '',
				animateStep: 'fstDeclaration',
				tooltipClass: 'hide'
		} ]
	});
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		$('.zIndex').not('.introjs-showElement, #headingInSll').css({'z-index': '0'});
		$('.introjs-showElement .zIndex').css({'zIndex': '99999999'});
		$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();
		switch(elementId) {
			case 'headingInSll':
				text = 'Here we will learn about <y>insertAtPosition()</y> method in a <y>Single Linked List</y>.';
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();
				});
			break;
			case 'algorithmDiv':
				$('#algorithmDiv').removeClass('opacity00');
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#codeAndAlgorithmDiv').addClass('box-border');
					text = 'Let us learn about adding a <bl>node</bl> at a particular <bl>position</bl> to a <bl>Single Linked List(SLL)</bl>. &emsp;';
					typing('#algorithmDiv', text, function() {
						nextBtnWithoutCalling('#algorithmDiv', function() {
							introjs.nextStep();
						});
					});
				});
			break;
			case 'animationDiv':
				$('#animationDiv').removeClass('opacity00');
				introjs.refresh();
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case 'fstDeclaration':
							animatedTooltip('#firstDiv', "bottom", "first stores the begining of the linked list");
							zoomInEffect('#firstNode', function() {
								$('.introjs-tooltip').removeClass('hide');
								text = '<span id="l1">Let us store the <yy class="ct-fonts">begining of the linked list</yy> in a pointer variable'
										+ ' of type node (<bgb>first</bgb>).<br> Since the <yy class="ct-fonts">Linked list</yy> is'
										+ ' <yy class="ct-fonts">not yet created</yy> we should initialize it with <yy class="ct-fonts one">NULL</yy>.';
								typing('.introjs-tooltiptext', text, function() {
									$('#algorithmDiv').removeClass('opacity00').append('<ul style="list-style-type: circle" id="ul1"></ul>');
									algorithmSteps(text, '.introjs-tooltiptext span', '#algorithmDiv #l1', 0, 'fstCreation');
									$('#algorithmDiv #l1 yy:last').addClass('ct-green-color').removeClass('ct-blue-color');
								});
							});
						break;
						case 'ifPosZeroStep':
							text = '<span id="l2">Let us consider the <y>steps</y> involved in <yy class="ct-fonts">adding</yy> a new '
								+ '<yy class="ct-fonts">node</yy> at particular <yy class="ct-fonts">position</yy> for a given value.</span>';
							typing('.introjs-tooltiptext', text, function() {
								$('#algorithmDiv').append(text);
								$('#algorithmDiv #l2').addClass('opacity00');
								$('.introjs-tooltiptext').append('<ul></ul>');
								text = '<li><span id="l21">Let us <yy class="ct-fonts">insert</yy> a node at <yy class="ct-fonts">position</yy>'
										+ ' <yy class="ct-fonts one">0</yy>.<br> We can\'t <yy class="ct-fonts">insert</yy> any node if'
										+ ' <yy class="ct-fonts">position</yy> is <yy class="ct-fonts one">less than or equal to zero</yy>.</span></li>';
								typing('.introjs-tooltiptext ul', text, function() {
									$('#algorithmDiv y').addClass('ct-brown-color');
									$('#algorithmDiv').append('<ul style="list-style-type: circle" id="ul2"></ul>');
									$('#ul2').append(text);
									$('#algorithmDiv #l21, #algorithmDiv li:last').addClass('opacity00');
									$('#algorithmDiv yy').not('.one').addClass('ct-blue-color').removeClass('ct-fonts');
									$('#algorithmDiv .one').addClass('ct-brown-color').removeClass('ct-fonts');
									nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
										$('#algorithmDiv').addClass('z-index10000');
										transWithZoomInEffect('.introjs-tooltiptext #l2', '#algorithmDiv #l2', function() {
											$('#algorithmDiv li:last').removeClass('opacity00');
											transWithZoomInEffect('.introjs-tooltiptext #l21', '#algorithmDiv #l21', function() {
												nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
													introNextSteps('#codeAndAlgorithmDiv', 'posLesThanZero', 'hide');
													introjs.nextStep();
												});
											});
										});
									});
								});
							});
						break;
						case 'ifPosIsOne':
							text = '<span>Let us <yy class="ct-fonts">insert</yy> a node at <yy ct-fonts">position</yy> <yy class="ct-fonts brn">'
									+ 'one</yy></span> for a given value.<br>Enter a value : '
									+ '<input type="text" class="usr-txt position-css zIndex" size="3" maxlength="3" id="nodeVal" />';
							typing('.introjs-tooltiptext', text, function() {
								validation('#nodeVal', 1);
							});
						break;
					}
				});
			break;
			case 'codeAndAlgorithmDiv':
				$('#algorithmDiv').removeClass('z-index10000');
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case 'fstCreation':
							zoomInEffect('#codeDiv', function() {
								$('#codeDiv').append('<span id="fstCreation" class="opacity00">node first = <g>NULL</g>; '
											+ ' <span><i class="fa fa-question-circle fa-1x" id="helpText"></i></span> &emsp;</span>');
								$('#algorithmDiv ul li:last').effect('highlight', {color: 'yellow'}, 1400);
								transWithZoomInEffect('#l1', '#fstCreation', function() {
									animatedTooltip('#helpText', "bottom", "first stores the begining of the linked list");
									nextBtnWithoutCalling('#fstCreation', function() {
										introNextSteps('#animationDiv', 'ifPosZeroStep', 'show');
										introjs.nextStep();
									});
								});
							});
						break;
						case 'posLesThanZero':
							$('#l2').effect('highlight', {color: 'yellow'}, 1400);
							$('#codeDiv').append('\n\n<div id="positionDiv" class="position-css"><span id="line1" class="opacity00">node'
											+ ' insertAtPosition(int pos, int x) {<span id="line1Close">\n\treturn first;\n}</span></span></div>');
							transWithZoomInEffect('#l2', '#line1', function() {
								$('#line1Close').before('\n\t<span id="line2" class="opacity00">if (<brn>position</brn> <= <brn>0</brn>) {'
													+ '\n\t\tprintf("No such position in SLL."\n\t\t\t" So insertion is not possible\\n");\n'
													+ '\t\treturn first;\n\t}</span>');
								$('#l21').effect('highlight', {color: 'yellow'}, 1400);
								transWithZoomInEffect('#l21', '#line2', function() {
									nextBtnWithoutCalling('#line1', function() {
										introNextSteps('#animationDiv', 'ifPosIsOne', 'show');
										introjs.nextStep();
									});
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

function validation(selector, val) {
	$(selector).effect('highlight', {color: 'yellow'}, 500).focus();
	$(selector).on('keydown', function(e) {
		var max = $(this).attr('maxlength');
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		if (((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) || (e.keyCode == 13 || e.keyCode == 9)){
			e.preventDefault();
		}
		if ($(this).val().length > max - 1) {
			$('.error-text').remove();
			$('.introjs-tooltiptext').append('<div class="error-text ct-fonts">Please restrict the maximum length to 3 digits only.</div>')
			e.preventDefault();
		}
	});
	$(selector).on('keyup', function(e) {
		if ($(this).val().length == 2) {
			$('.error-text').remove();
		}
		if ($(selector).val().length != 0) {
			$('.user-btn, .errMsg').remove();
			$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="validationAnim(' + val + ')">Next &#8594;</a>');
			if (e.keyCode == 13) {
				validationAnim(val);
			}
		} else {
			$('.user-btn').hide();
			$('.error-text').remove();
			$('.introjs-tooltiptext').append('<div class="error-text ct-fonts errMsg">Please enter number.</div>');
		}
	});
}

function validationAnim(val) {
	$('.user-btn, .error-text').remove();
	$('#nodeVal').attr('disabled', true);
	if (val == 1) {
		posOneAnim();
	} else {
		
	}
}

function posOneAnim() {
	$('.introjs-tooltiptext').append('<br><br><div id="appendText"></div>');
	text = '<span id="l3">Allocate <yy class="ct-fonts one">memory</yy> for the new node (<yy class="ct-fonts one">address</yy> of the new node'
			+ ' is stored in <yy class="ct-fonts one">temp</yy>) and store the given value in <yy class="ct-fonts">data</yy>.</span>';
	typing('#appendText', text, function() {
		nodeAnim(1, function() {
			$('#algorithmDiv #ul2').append('<li class="opacity00">' + text + '</li>');
			//$('#ul2 #l3').removeClass('ct-fonts').addClass()
		});
	});
}

function nodeAnim(val, callBackFunction) {
	nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
		$('#node' + val).removeClass('opacity00');
		TweenMax.from("#node"+ val, 1, {top : -30, onComplete:function() {
			zoomInEffect('#tempNodeParent' + val, function() {
				fromEffectWithTweenMax('#dataAddress' + val, '#tempNode' + val, true, function() {
					svgAnimatingLineTopToBottom('#tempNodeParent' + val, '#nextDiv' + val, 'line11', function() {
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
	$(id2 +' yy').addClass('ct-blue-color').removeClass('ct-fonts');
	$('#algorithmDiv .one').removeClass('ct-blue-color').addClass('ct-green-color');
	nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
		$('#algorithmDiv').addClass('z-index10000');
		transferEffect(id1, id2, function() {
			$('#algorithmDiv li').not('ol li').eq(val).removeClass('opacity00');
			introNextSteps('#codeAndAlgorithmDiv', animatedStep, 'hide');
			$('.introjs-nextbutton').show();
		});
	});
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
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1000 , function() {
		$(selector2).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
			$(selector2).removeClass("animated zoomIn").effect('highlight', {color: 'yellow'}, 800, function() {
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
			});
		});
	});
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
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	line.setAttribute("id", svgLineId);
	line.setAttribute("class", "svg-line");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	line.style.markerEnd = 'url("#arrow")';
	$("#svgId").append(line);
}

function svgAnimatingLineRightToLeft(selector1, selector2, svgLineId, callBackFunction) {
	var parentOffset = $("#animationDiv").offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgLineId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function svgAnimatingLineTopToBottom(selector1, selector2, svgLineId, callBackFunction) {
	var parentOffset = $("#animationDiv").offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight();
	svgLineAppend(svgLineId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function svgAnimatingLineLeftToRight(selector1, selector2, svgLineId, callBackFunction) {
	var parentOffset = $("#animationDiv").offset();
	var x1 = $(selector1).offset().left - parentOffset.left;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgLineId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function svgAnimatingLineBottomToTop(selector1, selector2, svgLineId, callBackFunction) {
	var parentOffset = $("#animationDiv").offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight();
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y2 = $(selector2).offset().top - parentOffset.top;
	svgLineAppend(svgLineId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}
	