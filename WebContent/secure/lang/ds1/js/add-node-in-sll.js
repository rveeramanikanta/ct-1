function addNodesInSLLReady() {
	dynamicTempNodes(1);
	createDynamicNodes('#fstExplain', 0);
	createDynamicNodes('#dynamicNodes', 1);
	svgAppend("#animationDiv");
	initIntroJS();
}

function dynamicTempNodes(val) {	//temp nodes
	$('#tempDynamicNodes').append('<div class="col-xs-2 col-xs-offset-1 padding0 opacity00" id="tempNodeParent' + val + '">'
						+ '<div class="col-xs-12 box padding0 temp-node"><span id="tempNode' + val + '"'
						+ ' class="ct-brown-color ct-fonts position-css temp-node-val opacity00">1245</span></div>'
						+ '<div class="text-center col-xs-12 padding0 ct-green-color ct-fonts" id="tempame' + val + '">temp</div></div>');
	animatedTooltip('.temp-node', "top", "Address of the newly created node.");
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
	$('#codeDiv').append('<br><br><div class="position-css" id="addNodeMethod"><span id="line1">node <g>addNodes(int x)</g> {\n'
						 + '\t<span id="step1">node temp;\n'
						 + '\t<span id="line3">temp = <g>createNode()</g>;</span>\n'
						 + '\ttemp -> data = x;</span>'
						 /*+ '<span id="addMthd" class="hide">\t<span id="line5">if (first == NULL) {\n'
						 + '\t\tfirst = temp;\n'
						 + '\t}</span> <span id="line7">else {\n'
						 + '\t<span id="line8">node lastNode = first;</span>\n'
						 + '\t\t<span id="line9">while (lastNode -> next != NULL) {\n'
						 + '\t\t\t<span id="line10">lastNode = lastNode -> next;</span>\n'
						 + '\t\t}</span>\n'
						 + '\t\t<span id="line11">lastNode -> next = temp;</span>\n'
						 + '\t}</span>\n'*/
						 + '\n\treturn first;\n</span>'
						 + '}</span></div>');
	$('#addNodeMethod span').addClass('opacity00');
}

function createNodeMethod() {
$('#codeDiv').append('\n\n<span id="createNodeFun" class="opacity00">node <g>createNode()</g> {\n'
					+ '\tnode temp;\n'
					+ '\t<span id="allocMemory">temp = (node)malloc(sizeof(struct list));</span>\n'
					+ '\ttemp -> next = NULL;\n'
					+ '\t<span>return temp;</span>\n'
					+ '} &emsp;</span>\n\n');
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
								text = '<span id="l1">Let us consider a node structure which contains <yy class="ct-fonts">two members</yy>.'
										+ '<ol><li>An <yy class="ct-fonts">int</yy> data type to hold user data.</li>'
										+ '<li>A <yy class="ct-fonts">pointer</yy> to the <yy class="ct-fonts">next</yy> node.</li></ol></span>';
								typing('.introjs-tooltiptext', text, function() {
									algorithmSteps(text, '.introjs-tooltiptext #l1', '#algorithmDiv #l1', 0, 'structCode');
								});
							}});
						break;
						case 'fstDeclaration':
							$('#node0').css({'opacity' : '0.5'});
							zoomInEffect('#firstNode', function() {
								animatedTooltip('#firstDiv', "bottom", "first stores the begining of the linked list");
								$('.introjs-tooltip').removeClass('hide');
								text = '<span id="l2">Let us store the <yy class="ct-fonts">begining of the linked list</yy> in a pointer variable'
										+ ' of type node (<yy class="ct-fonts">first</yy>).<br> Since the <yy class="ct-fonts">Linked list</yy> is'
										+ ' <yy class="ct-fonts">not yet created</yy> we should initialize it with <yy class="ct-fonts">NULL</yy>.';
								typing('.introjs-tooltiptext', text, function() {
									algorithmSteps(text, '.introjs-tooltiptext span', '#algorithmDiv #l2', 1, 'fstCreation');
									$('#l2 yy:last').addClass('ct-green-color').removeClass('ct-blue-color');
								});
							});
						break;
						case 'fstListCreation':
							text = '<span id="l3Span">Let us consider the <y>steps</y> involved in <yy class="ct-fonts">adding</yy> a new '
									+ '<yy class="ct-fonts">node</yy> for a given value.</span><br><br>Enter a value : '
									+ '<input type="text" class="usr-txt position-css zIndex" size="3" maxlength="3" id="nodeVal" />';
							typing('.introjs-tooltiptext', text, function() {
								validation('#nodeVal', 1);
							});
						break;
						case 'tempToFst':
							text = '<span id="l4">Store the <yy class="ct-fonts">address</yy> of the newly created <yy class="ct-fonts">node</yy> in the'
									+ ' <yy class="ct-fonts first-css">first</yy> variable if it is <yy class="ct-fonts">NULL</yy>.</span>';
							typing('.introjs-tooltiptext', text, function() {
								nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
									fadeInBounceEffectWithTimelineMax('#tempNode1', '#firstVal', function() {
										svgAnimatingLineBottomToTop('#firstDiv', '#nextDiv1', 'line1', function() {
											$('#algorithmDiv ul:last').append('<li class="opacity00">' + text + '</li>');
											$('#algorithmDiv #l4').addClass('opacity00');
											$('#algorithmDiv yy').removeClass('ct-fonts').addClass('ct-blue-color');
											$('#algorithmDiv #l4 yy:first').removeClass('ct-blue-color').addClass('ct-green-color');
											nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
												$('#algorithmDiv').addClass('z-index10000');
												$('#algorithmDiv li:last').removeClass('opacity00');
												transferEffect('.introjs-tooltiptext #l4', '#algorithmDiv #l4', function() {
													introNextSteps('#codeAndAlgorithmDiv', 'ifCondition', 'hide');
													$('.introjs-nextbutton').show();
												});
											});
										});
									});
								});
							});
						break;
						case 'elsePartAnim':
						case 'secondNode':
							text = 'Let us <y>add</y> another <y>node</y> to the <y>linked list</y> for a given value.' 
									+ '<br>Follow the <y>steps</y>.';
							typing('.introjs-tooltiptext', text, function() {
								$('#algorithmDiv').addClass('z-index10000');
								$('#l3Div').css({'background-color' : 'yellow'});
								$('.introjs-tooltiptext').append('<br><br>Enter a value : '
										+ '<input type="text" class="usr-txt position-css zIndex" size="3" maxlength="3" id="nodeVal" />');
								if (animateStep == 'elsePartAnim') {
									validation('#nodeVal', 3);
								} else {
									validation('#nodeVal', 2);
								}
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
							$('#codeDiv').append('<br><br><span id="fstCreation" class="opacity00">node <g>first</g> = NULL; '
										+ ' <span><i class="fa fa-question-circle fa-1x" id="helpText"	></i></span> &emsp;</span>');
							$('#algorithmDiv ul li:last').effect('highlight', {color: 'yellow'}, 1400);
							transWithZoomInEffect('#l2', '#fstCreation', function() {
								animatedTooltip('#helpText', "top", "first stores the begining of the linked list");
								nextBtnWithoutCalling('#fstCreation', function() {
									introNextSteps('#animationDiv', 'fstListCreation', 'show');
									introjs.nextStep();
								});
							});
						break;
						case 'methodCreation':
							$('#l3Span').effect('highlight', {color: 'yellow'}, 1200);
							transWithZoomInEffect('#l3Span', '#line1', function() {
								$('#l3Div').css({'background-color' : 'yellow'});
								transWithZoomInEffect('#l3Div', '#step1', function() {
									$('#line3').css({'background-color' : 'yellow'});
									createNodeMethod();
									$('#codeDiv').scrollTo('#createNodeFun span:last', 500, function() {
										$('.introjs-tooltip').removeClass('hide');
										text = '<y>createNode()</y> is used to <y>allocate memory</y>.';
										typing('.introjs-tooltiptext', text, function() {
											nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
												transWithZoomInEffect('#line3', '#createNodeFun', function() {
													$('#line3, #l3Div').css({'background-color' : ''});
													introNextSteps('#animationDiv', 'tempToFst', 'show');
													$('.introjs-nextbutton').show();
												});
											});
										});
									});
								});
							});
						break;
						case 'ifCondition':
							$('#step1').after('\n\t<span id="line5" class="opacity00">if (first == NULL) {\n'
										 + '\t\tfirst = temp;\n'
										 + '\t} </span>');
							$('#codeDiv').scrollTo('#addNodeMethod span:first', 300);
							$('#l4').effect('highlight', {color: 'yellow'}, 1200);
							transWithZoomInEffect('#l4', '#line5', function() {
								nextBtnWithoutCalling('#line5', function() {
									$('#line11').remove();
									$('#tempNodeParent1, #tempNode1').addClass('opacity00');
									introNextSteps('#animationDiv', 'secondNode', 'show');
									introjs.nextStep();
								});
							});
						break;
						case 'lastToTemp':
							$('#line5').after('<span id="elsePart" class="opacity00">else {\n'
										 + '\t\t<span id="line8">node lastNode = first;</span>\n'
										 + '\t\tlastNode -> next = temp;\n'
										 + '\t}</span>');
							$('#codeDiv').scrollTo('#addNodeMethod span:first', 300);
							$('#l5').effect('highlight', {color: 'yellow'}, 1200);
							transWithZoomInEffect('#l5', '#elsePart', function() {
								nextBtnWithoutCalling('#elsePart', function() {
									$('#line11, #line12').remove();
									$('#tempNodeParent1, #tempNodeParent2, #tempNode2').addClass('opacity00');
									introNextSteps('#animationDiv', 'elsePartAnim', 'show');
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

function secondAndThirdNodesAnim(val, callBackFunction) {
	$('input').attr('disabled', true);
	$('.user-btn, .error-text').remove();
	$('.introjs-tooltiptext').append('<br><br><ul></ul>')
	text = '<li>Allocate <yy class="ct-fonts">memory</yy> for the new node (<yy class="ct-fonts">address</yy> of the new node is stored in'
			+ ' <yy class="ct-fonts">temp</yy>) and store the given value in <yy class="ct-fonts">data</yy>.</li>';
	typing('.introjs-tooltiptext ul', text, function() {
		createDynamicNodes('#dynamicNodes', val);
		dynamicTempNodes(val);
		nodeAnim(val, function() {
			nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
				$('#l3Div').css({'background-color' : ''});
				$('.introjs-tooltiptext ul').append('<li id="lastLi"></li>');
				$('#l4').css({'background-color' : 'yellow'});
				text = '<bgb>first</bgb> value (i.e., <y> ' +  $('#firstVal').text() + '</y>) is <y>not equal to NULL</y>.<br><br>'
						+ ' <bgb>first</bgb> is already points to a <y>node</y>, <y>fetch</y> that <y>node</y> for the newly created'
						+ ' <y>address</y> in that node\'s <y>next pointer variable</y>.';
				typing('.introjs-tooltiptext li:last', text, function() {
					$('#l4').css({'background-color' : ''});
					nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
						$('#tempame' + (val -1)).text('lastNode')
						zoomInEffect('#tempNodeParent' + (val -1), function() {
							fromEffectWithTweenMax('#firstVal', '#tempNode' + (val -1), true, function() {
								svgAnimatingLineTopToBottom('#tempNodeParent' + (val -1), '#nextDiv1', 'line12', function() {
									if (typeof callBackFunction === "function") {
										callBackFunction();
									}
								});
							});
						});
					});
				});
			});
		});
	});
}

function secondNdeAnim(val) {
	secondAndThirdNodesAnim(val, function() {
		if (val == 2) {
			fadeInBounceEffectWithTimelineMax('#tempNode2', '#next1', function() {
				svgAnimatingLineRightToLeft('#nextDiv1', '#dataDiv2', 'line2', function() {
					stepText = '<span id="l5" class="opacity00">If the <bgb>first</bgb> is already points to a'
								+ ' <bl>node</bl>, <bl>fetch</bl> that <bl>node</bl> for the newly created '
								+ '<g>address</g> in that node\'s <g>next pointer variable</g>.</span>'
					nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
						$('#algorithmDiv ul:last').append('<li>' + stepText + '</li>');
						$('#algorithmDiv').scrollTo('#ul2 span:last', 300);
						transferEffect('#lastLi', '#l5', function() {
							introNextSteps('#codeAndAlgorithmDiv', 'lastToTemp', 'hide');
							$('.introjs-nextbutton').show();
						});
					});
				});
			});
		} else {
			
		}
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

function validationAnim() {
	$('#nodeVal').off();
	$('input').attr('disabled', true);
	$('.user-btn, .error-text').remove();
	$('.introjs-tooltiptext').append('<br><br><div id="l3Div"><div>')
	text = 'Allocate <yy class="ct-fonts">memory</yy> for the new node (<yy class="ct-fonts">address</yy> of the new node is stored in'
			+ ' <yy class="ct-fonts">temp</yy>) and store the given value in <yy class="ct-fonts">data</yy>.';
	typing('#l3Div', text, function() {
		nodeAnim(1, function() {
			$('#algorithmDiv').append('<span id="l3Span" class="opacity00">' 
							+ $('.introjs-tooltiptext #l3Span').html() + '</span>');
			$('#algorithmDiv yy').addClass('ct-blue-color').removeClass('ct-fonts');
			$('#algorithmDiv y').addClass('ct-brown-color');
			nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
				$('#algorithmDiv').addClass('z-index10000');
				transferEffect('.introjs-tooltiptext #l3Span', '#algorithmDiv #l3Span', function() {
					$('#algorithmDiv #l3Span').after('<ul style="list-style-type: circle" id="ul2"><li><span id="l3Div" class="opacity00">'
								+ $('.introjs-tooltiptext #l3Div').html() + '</span></li></ul>');
					$('#algorithmDiv yy').addClass('ct-blue-color').removeClass('ct-fonts');
					transferEffect('.introjs-tooltiptext #l3Div', '#algorithmDiv #l3Div', function() {
						$('#algorithmDiv ul:last').css({'list-style-type': 'circle'});
						introNextSteps('#codeAndAlgorithmDiv', 'methodCreation', 'hide');
						$('.introjs-nextbutton').show();
						addNodeMethod();
					});
				});
			});
		});
	});
}

function algorithmSteps(text, id1, id2, val, animatedStep) {
	$('#algorithmDiv ul').append('<li class="opacity00">' + text + '</li>');
	$(id2).addClass('opacity00');
	$('#algorithmDiv yy').addClass('ct-blue-color').removeClass('ct-fonts');
	if (animatedStep == "structCode") {
		$('#algorithmDiv li:last span:last').removeClass('ct-blue-color').addClass('ct-green-color');
	}
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

function transWithZoomInEffect(selector1, selector2, callBackFunction) {
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1000 , function() {
		if (selector2 == '#step1') {
			$('#line3').removeClass('opacity00');
		}
		$(selector2).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
			$(selector2).removeClass("animated zoomIn")
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		});
	});
}

function animatedTooltip(id, position, tooltipText) {
	$(id).addClass('zIndex').attr({"data-placement" : position, "title" : tooltipText}).tooltip();
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
		if ($(selector).val().length != 0) {
			$('.error-text').remove();
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
			if (val == 1) {
				$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="validationAnim()">Next &#8594;</a>');
				if (e.keyCode == 13) {
					validationAnim();
				}
			} else {
				$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="secondNdeAnim(' + val + ')">Next &#8594;</a>');
				if (e.keyCode == 13) {
					secondNdeAnim(val);
				}
			}
		} else {
			$('.user-btn').hide();
			$('.error-text').remove();
			$('.introjs-tooltiptext').append('<div class="error-text ct-fonts">Please enter number.</div>');
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
		timelineMax.from(selector2, 0.8, {ease: Bounce.easeOut, top: topLength, left: leftLength, onComplete: function() {
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
