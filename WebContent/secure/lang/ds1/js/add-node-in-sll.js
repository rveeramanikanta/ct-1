function addNodesInSLLReady() {
	dynamicTempNodes(1);
	createDynamicNodes('#fstExplain', 0);
	createDynamicNodes('#dynamicNodes', 1);
	svgAppend("#animationDiv", "svgId");
	svgMarkerAppend("#svgId", "arrow");
	initIntroJS();
}

function dynamicTempNodes(val) {	//temp nodes
	$('#tempDynamicNodes').append('<div class="col-xs-2 col-xs-offset-1 padding0 opacity00" id="tempNodeParent' + val + '">'
						+ '<div class="col-xs-12 box padding0 temp-node"><span id="tempNode' + val + '"'
						+ ' class="ct-brown-color ct-fonts position-css temp-node-val opacity00">1245</span></div>'
						+ '<div class="text-center col-xs-12 padding0 ct-green-color ct-fonts" id="tempame' + val + '">temp</div></div>');
	animatedTooltip('.temp-node', "right", "Address of the newly created node.");
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

function structCode() {
	$('#codeDiv').text('').append('<div id="structCode" class="position-css opacity00">struct list {\n'
						+ '\tint <bl>data</bl>;\n'
						+ '\tstruct list <g>*next</g>;\n'
						+ '};\ntypedef struct list *node; \t </div>');
}

function addNodeMethod() {
	$('#codeDiv').append('<br><br><div class="position-css" id="addNodeMethod"><span id="line1">node addNodes(int x) {\n'
						 + '\t<span id="line2">node temp;</span>\n'
						 + '\t<span id="line3">temp = createNode();</span>\n'
						 + '\t<span id="line4">temp -> data = x;</span>\n'
						 + '\t<span id="line5">if (first == NULL) {\n'
						 + '\t\t<span id="line6">first = temp;</span>\n'
						 + '\t}</span> <span id="line7">else {\n'
						 + '\t<span id="line8">node lastNode = first;</span>\n'
						 + '\t\t<span id="line9">while (lastNode -> next != NULL) {\n'
						 + '\t\t\t<span id="line10">lastNode = lastNode -> next;</span>\n'
						 + '\t\t}</span>\n'
						 + '\t\t<span id="line11">lastNode -> next = temp;</span>\n'
						 + '\t}</span>\n'
						 + '\t<span id="line12">return first;</span>\n'
						 + '}</span></div>');
	$('#addNodeMethod span').addClass('opacity00');
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
		var elementId = targetElement.id;
		$('.zIndex').not('.introjs-showElement, #headingInSll').css({'zIndex': '0'});
		$('.introjs-showElement .zIndex').css({'zIndex': '99999999'});
		$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();
		switch(elementId) {
			case 'headingInSll':
				text = 'Here we will learn about <y>addNode()</y> method in a <y>Single Linked List</y>.';
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
							text = 'Let us learn about adding a <bl>node</bl> to a <bl>Single Linked List(SLL)</bl>. &emsp;';
							typing('#algorithmDiv', text, function() {
								nextBtnWithoutCalling('#algorithmDiv', function() {
									$('#algorithmDiv').append('<ul style="list-style-type: circle"></ul>');
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
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case 'nodeExplanation':
							$('#data0, #next0').addClass('opacity00');
							$('#node0').removeClass('opacity00').addClass('col-xs-offset-1');
							TweenMax.from("#node0", 1, {top : -30, onComplete:function() {
								$('.introjs-tooltip').removeClass('hide');
								text = '<span id="l1">Let us consider a node structure which contains <yy class="ct-fonts">two members</yy>.'
										+ '<ol><li>An <yy class="ct-fonts">int</yy> data type to hold user data.</li>'
										+ '<li>A <yy class="ct-fonts">pointer</yy> to the <yy class="ct-fonts">next</yy> node.</li></ol></span>';
								typing('.introjs-tooltiptext', text, function() {
									algorithmSteps(text, '.introjs-tooltiptext #l1', '#algorithmDiv #l1', 0, 'structCode');
								});
							}});
						break;
						case 'fstDeclaration':
							zoomInEffect('#firstNode', function() {
								animatedTooltip('#firstDiv', "bottom", "first stores the begining of the linked list");
								zoomInEffect('#firstVal', function() {
									$('.introjs-tooltip').removeClass('hide');
									text = '<span id="l2">Let us store the <yy class="ct-fonts">begining of the linked list</yy> in a pointer variable'
											+ ' of type node (<yy class="ct-fonts">first</yy>).<br> Since the <yy class="ct-fonts">Linked list</yy> is'
											+ ' <yy class="ct-fonts">not yet created</yy> we should initialize it with <yy class="ct-fonts">NULL</yy>.';
									typing('.introjs-tooltiptext', text, function() {
										algorithmSteps(text, '.introjs-tooltiptext span', '#algorithmDiv #l2', 1, 'fstCreation');
										$('#l2 yy:last').addClass('ct-green-color').removeClass('ct-blue-color');
									});
								});
							});
						break;
						case 'fstListCreation':
							text = '<span id="l3Span">Let us consider the steps involved in <yy class="ct-fonts">adding</yy> a new '
									+ '<yy class="ct-fonts">node</yy> for a given value.</span><br><br>Enter a value : '
									+ '<input type="text" class="usr-txt position-css zIndex" size="3" maxlength="3" id="nodeVal" />';
							typing('.introjs-tooltiptext', text, function() {
								validation('#nodeVal');
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
						case 'structCode':
							zoomInEffect('#codeDiv', function() {
								structCode();
								$('#algorithmDiv ul li').not('ol li').eq(0).effect('highlight', {color: 'yellow'}, 1200);
								transferEffect('#algorithmDiv #l1', '#structCode', function() {
									introNextSteps('#animationDiv', 'fstDeclaration', 'hide');
									nextBtnWithoutCalling('#structCode', function() {
										introjs.nextStep();
									})
								});
							});
						break;
						case 'fstCreation':
							$('#codeDiv').append('<br><br><span id="fstCreation" class="opacity00">node <g>first</g> = NULL; '
										+ ' <span><i class="fa fa-question-circle fa-1x" id="helpText"	></i></span> &emsp;</span>');
							$('#algorithmDiv ul li:last').effect('highlight', {color: 'yellow'}, 1200, function() {
								transferEffect('#l2', '#fstCreation', function() {
									animatedTooltip('#helpText', "top", "first stores the begining of the linked list");
									nextBtnWithoutCalling('#fstCreation', function() {
										introNextSteps('#animationDiv', 'fstListCreation', 'show');
										introjs.nextStep();
									});
								});
							});
						break;
						case 'methodCreation':
							transferEffect('#l3Span', '#line1', function() {
								
							});
						break;
					}
				});
			break;
		}
	});
	introjs.start();
}

function validationAnim() {
	$('input').attr('disabled', true);
	$('.user-btn, .error-text').remove();
	$('.introjs-tooltiptext').append('<br><br><div id="l3Div"><div>')
	text = 'Allocate <yy class="ct-fonts">memory</yy> for the new node (<yy class="ct-fonts">address</yy> of the new node is stored in'
			+ ' <yy class="ct-fonts">temp</yy>) and store the given value in <yy class="ct-fonts">data</yy>.';
	typing('#l3Div', text, function() {
		nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
			$('#node1').removeClass('opacity00');
			TweenMax.from("#node1", 1, {top : -30, onComplete:function() {
				zoomInEffect('#tempNodeParent1', function() {
					fromEffectWithTweenMax('#dataAddress1', '#tempNode1', true, function() {
						svgAnimatingLineTopToBottom('#animationDiv', '#tempNodeParent1', '#nextDiv1', '#svgId', 'line11', 'arrow', function() {
							fromEffectWithTweenMax('#nodeVal', '#data1', false, function() {
								$('#nodeVal').css({'color': 'white'});
								$('#algorithmDiv').addClass('z-index10000').append('<span id="l3Span" class="opacity00">' 
												+ $('.introjs-tooltiptext #l3Span').html() + '</span>');
								$('#algorithmDiv yy').addClass('ct-blue-color').removeClass('ct-fonts');
								nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
									transferEffect('.introjs-tooltiptext #l3Span', '#algorithmDiv #l3Span', function() {
										$('#algorithmDiv #l3Span').after('<ul style="list-style-type: circle"><li><span id="l3Div" class="opacity00">'
													+ $('.introjs-tooltiptext #l3Div').html() + '</span></li></ul>');
										$('#algorithmDiv yy').addClass('ct-blue-color').removeClass('ct-fonts');
										transferEffect('.introjs-tooltiptext #l3Div', '#algorithmDiv #l3Div', function() {
											$('#algorithmDiv ul:last').css({'list-style-type': 'circle'});
											introNextSteps('#codeAndAlgorithmDiv', 'methodCreation', 'hide');
											$('.introjs-nextbutton').show();
											addNodeMethod();
											$('#codeDiv').scrollTo('#addNodeMethod span:last', 300);
										});
									});
								});
							});
						});
					});
				});
			}});
		});
	});
}

function algorithmSteps(text, id1, id2, val, animatedStep) {
	$('#algorithmDiv ul').append('<li class="opacity00">' + text + '</li>');
	$(id2).addClass('opacity00');
	$('#algorithmDiv yy').addClass('ct-blue-color').removeClass('ct-fonts');
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
		$(selector2).removeClass('opacity00');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function animatedTooltip(id, position, tooltipText) {
	$(id).addClass('zIndex').attr({"data-placement" : position, "title" : tooltipText}).tooltip();
}

function validation(selector) {
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
			$('.introjs-tooltiptext').append('<div class="error-text ct-fonts">Please restrict the maximum length to 3 digits only.</div>')
			e.preventDefault();
		}
	});
	$(selector).on('keyup', function(e) {
		if ($(selector).val().length != 0) {
			$('.user-btn').remove();
			$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="validationAnim()">Next &#8594;</a>');
			if (e.keyCode == 13) {
				validationAnim();
			}
		} else {
			$('.user-btn').hide();
			$('.error-text').remove();
			$('.introjs-tooltiptext').append('<div class="error-text ct-fonts">Please enter number.</div>')
		}
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

