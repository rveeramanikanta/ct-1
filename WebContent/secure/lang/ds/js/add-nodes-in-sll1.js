var lang, introjs, nodeCount = stepCount = 1;

function AddNodesInSLLReady() {
	dynamicTempNodes(1);
	createDynamicNodes(1);
	
	lang = getURLParameter("lang");
	svgAppend("#animationDiv", "svgId");
	svgMarkerAppend("#svgId", "arrow");
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
	$('#extraNodes').append('<div class="col-xs-2 col-xs-offset-1 padding0 opacity00" id="tempNodeParent' + val + '">'
						+ '<div class="col-xs-12 box padding0"><span id="tempNode' + val + '"'
						+ ' class="ct-brown-color ct-fonts position-css temp-node-val"></span></div>'
						+ '<div class="text-center col-xs-12 padding0 ct-green-color ct-fonts" id="tempame' + val + '">temp</div></div>');
}


function createDynamicNodes(nodeNum) {	//node
	var randomAddress = getRandomInt(1000, 5000);
	$('#dynamicNodes').append('<div class="col-xs-2 nodes list-nodes opacity00" id="node' + nodeNum + '" style="top: 0px; width: auto;">'
					+ ' <div class="col-xs-12 padding0"><div class="col-xs-6 ct-blue-color ct-fonts padding0 text-center">'
					+ ' data</div><div class="ct-green-color ct-fonts text-center">next</div></div>'
					+ ' <div id="nodedata' + nodeNum + '"><div id="dataDiv' + nodeNum + '"'
					+ ' class="div-border left-radius col-xs-6 data-div"><span id="data' + nodeNum +'"'
					+ ' class="data-span ct-blue-color ct-fonts position-css" style="top: 0px; left: 0px;">' + nodeNum + '</span></div>'
					+ ' <div id="nextDiv' + nodeNum +'" class="position-css div-border right-radius col-xs-6 next-div">'
					+ ' <span id="next' + nodeNum +'" class="position-css next-span ct-green-color ct-fonts position-css">NULL</span></div></div>'
					+ ' <div class="col-xs-12 padding0"><div class="col-xs-6 padding0 text-center">'
					+ ' <span id="dataAddress' + nodeNum + '" class="data-address padding0 ct-brown-color ct-fonts">'+ randomAddress 
					+ '</span></div></div></div>');
}

function getRandomInt(min, max) { //random address
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function appendSteps(text, stepName) {	//steps
	$('#algorithmDiv').append('<div calss="col-xs-12" id="stepDiv' + nodeCount + '"><div class="col-xs-2 padding3"><span class="step-arrow step'
							+ stepCount +' paddingClass"><span class="step-arrow-text">Step ' + stepCount + '</span></span></div><div id="stepTyping'
							+ stepCount + '"' + ' class="col-xs-10 padding3"></div></div>');
	typing('#stepTyping' + stepCount, text, function() {
		introNextSteps('#animationDiv', stepName, 'show');
		nextBtnWithoutCalling(false, function() {
			introjs.refresh();
			if (nodeCount != 1) {
				var val = nodeCount - 1;
				$('#line2' + val + ', #line1' + val).remove();
				$('#lastNodeParent, #tempNodeParent1, #tempNode1, #tempNodeParent' + val + ', #tempNode' + val).addClass('opacity00');
				dynamicTempNodes(nodeCount);
				createDynamicNodes(nodeCount);
			}
			stepCount++;
			introjs.nextStep();
		});
	});
}

function svgAppend(selector, svgId) {
	var code = '<svg class="svg-css" id="' + svgId + '"></svg>';
	$(selector).append(code);
}

function svgMarkerAppend(svgId, svgMarkerId) {
	var marker = document.createElementNS("http://www.w3.org/2000/svg", 'marker');
	marker.setAttribute('id', svgMarkerId);
	marker.setAttribute('refX', '5');
	marker.setAttribute('refY', '2.5');
	marker.setAttribute('markerWidth', '5');
	marker.setAttribute('markerHeight', '5');
	marker.setAttribute('orient', 'auto');
	marker.style.fill = 'gray';
	$(svgId).append(marker);
	var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	path.setAttribute("d", "M0,0 L5,2.5 L0,5 Z");
	$('#' + svgMarkerId).append(path);
}

function svgLineAppend(svgId, svgLineId, markerId, x1, y1, x2, y2) {
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	line.setAttribute("id", svgLineId);
	line.setAttribute("class", "svg-line");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	line.style.markerEnd = 'url("#' + markerId + '")';
	$(svgId).append(line);
}

function svgAnimatingLineRightToLeft(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}


function svgAnimatingLineTopToBottom(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight();
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
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
					element: '#animationDiv',
					animateStep: 'firstMemory',
					intro: '',
					tooltipClass: 'hide'
				} ]
	});
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
			$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
			switch (elementId) {
				case 'animationDiv':
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case 'firstMemory':	
							zoomInEffect('#animationDiv', function() {
								$('.introjs-tooltip').removeClass('hide');
								text = 'Let us assume a variable <y>first</y> node with <y>NULL</y>.';
								typing('.introjs-tooltiptext', text, function() {
									nextBtnWithoutCalling(true, function() {
										zoomInEffect('#firstNode', function() {
											zoomInEffect('#firstVal', function() {
												nextBtnWithoutCalling(true, function() {
													lastNodeNTempDeclaration('#lastNodeParent', '#lastNode');
												});
											});
										});
									})
								});
							});
						break;
						case 'ifFirstInTmp':
							checkFstIsNlOrNot();
						break;
						case 'memoryDeclaration' + nodeCount:
							$('#tempame1').text('lastNode');
							lastNodeNTempDeclaration('#tempNodeParent1', '#tempNode1');
						break;
					}
				break;
				case 'algorithmDiv':
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case 'nodeCreation':
							zoomInEffect('#algorithmDiv', function() {
								if (lang == 'c') {
									text1 = '<span class="nowrap-css"><bl>temp</bl> = <g>(node)</g><bl>malloc(sizeof(struct list));</bl></span>.'
								} else if (lang == 'cpp') {
									text1 = '<span class="nowrap-css"><bl>temp</bl> = <bl>new list;</bl></span>'
								}
								text = 'Let us create a dynamic memory by using ' + text1;
								appendSteps(text, 'ifFirstInTmp');
							});
						break;
						case 'tempInFst':
							text = 'Let us check <bl>first</bl> is equal to <g>NULL</g>. If first is equal to NULL then store first node address'	
									+ ' in first <br> i.e., <bl>temp</bl> value to <bl>first</bl>';
							nodeCount++;
							appendSteps(text, 'memoryDeclaration' + nodeCount);
						break;
						case 'tmpToLstNxt':
							text = '<bl>lastNode -> next</bl> is <brn>not equal</brn> to <grn>NULL</grn>. So store <bl>temp</bl> value in'
									+ ' <bl>lastNode -> next</bl>.';
							nodeCount++;
							appendSteps(text, 'memoryDeclaration' + nodeCount);
						break;
					}
				break;
			}
		});
	});
	introjs.start();
	text = 'Here we will learn about <y>addNodes()</y> method in <y>Single Linked List</y>.';
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-nextbutton').show();
	});
}


function typing(typingId, typingContent, typingCallbackFunction) {
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


function customIntroNxtStep(stepName, animatedStep, tooltip, position) {
	introNextSteps(stepName, animatedStep, tooltip, position);
	setTimeToIntroGoNextStep();
}

function setTimeToIntroGoNextStep() {
	setTimeout(function() {
		introjs.nextStep();
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

function fromEffectWithTweenMax(selector1, selector2, callBackFunction) {
	$(selector2).text($(selector1).text()).addClass('opacity00');
	var l1 = $(selector1).offset();
	var l2 = $(selector2).css({"color" : "brown", "font-width" : "bold", "z-index" : "99999999"}).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	$("body").append("<span id='dummy' style='position: relative; z-index: 9999999; color: brown;'>" + $(selector2).text() + "</span>");
	$("#dummy").offset({"top" : l2.top, "left" : l2.left});
	$(selector1).addClass('z-index1000000').effect( "highlight",{color: '#ffff33'}, 800);
	$("#dummy").remove();
	$(selector2).removeClass('opacity00');
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		$(selector2).removeAttr("style").css("color", "brown");
		$(selector1).removeClass('z-index1000000');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function fadeInBounceEffectWithTimelineMax(selector1, selector2, callBackFunction) {
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
		timelineMax.from(selector2, 2, {ease: Bounce.easeOut, top: topLength, left: leftLength, onComplete: function() {
			$(selector2).removeAttr("style")
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}}).to('#dummy', 0.5, {opacity: 1, top: parseInt($('#dummy').css("top")) - 40, onComplete: function() {
			$(selector2).text($(selector1).text());
			$("body").removeAttr("style");			
			$('#dummy').remove();
		}}, "-=0.5");
	});
}

function nextBtnWithoutCalling(flag, callBackFunction) {
	if (flag) {
		$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn">Next &#8594</a>');
	} else {
		$('#stepTyping' + stepCount).append('&emsp;<a class="introjs-button user-btn">Next &#8594</a>');
	}
	$('.user-btn').click(function() {
		$('.user-btn').remove();
		callBackFunction();
	});
}

function appendNextButton(val){
	$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="' + val + '()">Next &#8594</a>');
}

function lastNodeNTempDeclaration(id1, id2) {
	text = 'Let us declare <y>temp</y> and <y>lastNode</y>. <y>lastNode</y> is initialized with <y>first</y>(i.e., <y>' + $('#firstVal').text()
			+ '</y>) value.';
	typing('.introjs-tooltiptext', text, function() {
		nextBtnWithoutCalling(true, function() {
			zoomInEffect('#tempNodeParent' + nodeCount, function() {
				zoomInEffect(id1, function() {
					fromEffectWithTweenMax('#firstVal', id2, function() {
						if ($('#firstVal').text() != 'NULL') {
							svgAnimatingLineTopToBottom('#animationDiv', '#tempNodeParent1', '#nextDiv1', '#svgId', 'line2' + nodeCount, 'arrow');
									
						}
						appendNextButton('memoryDeclaration');
					});
				});
			});
		});
	});
}

function alogorithmSteps(animateStep) {
	$('#algorithmDiv').addClass('z-index10000');
	introNextSteps('#algorithmDiv', animateStep, 'hide');
	 $('.introjs-nextbutton').show();
}

function memoryDeclaration() {
	$('.user-btn').remove();
	if (nodeCount != 1) {
		$('#algorithmDiv').addClass('z-index10000');
		$('#stepDiv1').css({'background-color': 'yellow'});
	}
	var text1 = 'creates a <y>dynamic memory</y> with some address (i.e., <y>' + $("#dataAddress" + nodeCount).text() + '</y>) to the <y>struct'
				+ ' list</y>. Which is stored in <y>temp</y>.</li>'
				+ ' <li id="li2" class="opacity00">Which contains <y>two</y> fields <y>data</y> and <y>next</y> with values <y>' 
				+ nodeCount + '</y> and <y>NULL</y>.</li>';
	if (lang == 'c') {
		text = '<li id="li1" class="opacity00">Let us assume the <y class="nowrap-css">malloc(sizeof(struct list))</y> ' + text1; 
	} else if (lang == 'cpp') {
		text = '<li id="li1" class="opacity00">Let us assume the <y>new</y> operator ' + text1;
	}
	$('.introjs-tooltiptext').text('').append('<ul>' + text + '</ul>');
	TweenMax.to('#li1', 1, {opacity: 1, onComplete: function() {
		TweenMax.to('#li2', 1, {opacity: 1, onComplete: function() {
			nextBtnWithoutCalling(true, function() {
				$('#node' + nodeCount).removeClass('opacity00');
				TweenMax.from("#node" + nodeCount, 1, {top : -30, onComplete:function() {
					 fromEffectWithTweenMax("#dataAddress" + nodeCount, "#tempNode" + nodeCount, function() {
						 svgAnimatingLineTopToBottom('#animationDiv', '#tempNodeParent' + nodeCount, '#nextDiv' + nodeCount, '#svgId',
								 	'line1' + nodeCount, 'arrow', function() {
							 $('#stepDiv1').css({'background-color': ''});
							 if (nodeCount == 1) {
								 alogorithmSteps('nodeCreation');
							 } else {
								 appendNextButton('checkFstIsNlOrNot');
							 }
						 });
					 });
				}});
			});
		}});
	}});
}

function checkFstIsNlOrNot() {
	$('.user-btn').remove();
	if (nodeCount != 1) {
		$('#stepDiv2').css({'background-color': 'yellow'});
	}
	text = 'Let us check <y>first</y> is <y>NULL</y> or not.';
	typing('.introjs-tooltiptext', text, function() {
		nextBtnWithoutCalling(true, function() {
			$('#firstVal').effect('highlight', {color: 'blue'}, 500, function() {
				if ($('#firstVal').text() == 'NULL') {
					text = '<y>first</y> is <y>equal</y> to <y>NULL</y>. Then store the <y>temp</y> value in <y>first</y>.'
				} else {	//while condition
					text = '<y>first</y> is <y>not equal</y> to <y>NULL</y>. Then check <y>lastNode -> next</y> is <y>not equal</y>'
							+ ' to <y>NULL</y> or not.'
				}
				typing('.introjs-tooltiptext', text, function() {
					appendNextButton('ifFirstInTmpAnim');
				});
			});
		});
	});
}

function ifFirstInTmpAnim() {
	$('.user-btn').remove();
	if ($('#firstVal').text() == 'NULL') {
		fadeInBounceEffectWithTimelineMax('#tempNode1', '#firstVal', function() {
			svgAnimatingLineRightToLeft('#animationDiv', '#firstDiv', '#dataDiv1', '#svgId', 'line1', 'arrow', function() {
				$('#stepDiv2').css({'background-color': ''});
				alogorithmSteps('tempInFst');
			});
		});
	} else { //whileCond
		$('#stepDiv2').css({'background-color': ''});
		var val = $('.list-nodes .next-span:first').parent().attr('id');
		$('#tempNode1').effect('highlight', {color: 'blue'}, 500, function() {
			svgAnimatingLineTopToBottom('#animationDiv', '#tempNodeParent1', '#' + val, '#svgId', 'line222', 'arrow', function() {
				$('#' + val + ' .next-span').effect('highlight', {color: 'blue'}, 500, function() {
					$('#line222').remove();
					if ($('.list-nodes .next-span:first').text() != 'NULL') {
						//$('.list-nodes:first').removeClass('list-nodes'); //while true
						text = '<y>lastNode -> next</y> is <y>not equal</y> to <y>NULL</y>. So store the <y>lastNode -> next</y> value in'
								+ ' <y>lastNode</y>.';
						typing('.introjs-tooltiptext', text, function() {
							
						});
					} else {
						text = '<y>lastNode -> next</y> is <y>equal</y> to <y>NULL</y>. So store the <y>temp</y> value in <y>lastNode -> next</y>.';
						typing('.introjs-tooltiptext', text, function() {
							nextBtnWithoutCalling(true, function() {
								$('#tempNode1').effect('highlight', {color: 'blue'}, 500, function() {
									svgAnimatingLineTopToBottom('#animationDiv', '#tempNodeParent1', '#' + val, '#svgId', 'line222', 'arrow', function() {
										$('#' + val + ' .next-span').effect('highlight', {color: 'blue'}, 500, function() {
											$('#line222').remove();
											appendNextButton('tmpToLstNxt');
										});
									});
								});
							});
						});
					}
				});
			});
		});
	}
}

function tmpToLstNxt() {
	$('.user-btn').remove();
	fadeInBounceEffectWithTimelineMax('#tempNode' + nodeCount, '#next' + (nodeCount - 1), function() {
		svgAnimatingLineRightToLeft('#animationDiv', '#nextDiv' + (nodeCount - 1), '#dataDiv' + (nodeCount), '#svgId', 'line' + nodeCount,
						'arrow', function() {
			alogorithmSteps('tmpToLstNxt');
		});
	});
}


