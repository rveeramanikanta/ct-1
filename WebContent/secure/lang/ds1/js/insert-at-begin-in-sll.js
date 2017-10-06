var lang;
function insertAtBeginInSLLReady() {
	dynamicTempNodes(1);
	createDynamicNodes('#dynamicNodes', 1);
	createDynamicNodes('#fstExplain', 0);
	createDynamicNodes('#fstExplain', 2);
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


function structCode() {
	$('#codeDiv').append('<div id="structCode" class="position-css opacity00">struct list {\n'
						+ '\tint <bl>data</bl>;\n'
						+ '\tstruct list <g>*next</g>;\n'
						+ '};\n<span>typedef struct list *node; \t</span> </div>');
}

function insertAtBeginMethod() {
	if (lang == 'c') {
		$('#codeDiv').append('<br><br><div class="position-css" id="insertAtBeginMethod"><span id="line1">node <g>insertAtBegin(int x)</g> {\n'
						 + '\t<span id="step1">node temp;\n'
						 + '\t<span id="line3">temp = <g>createNode()</g>;</span>\n'
						 + '\ttemp -> data = x;</span>'
						 + '\n\treturn first;\n'
						 + '}</span></div>');
	} else if (lang == 'cpp') {
		$('#codeDiv').append('<br><br><div class="position-css" id="insertAtBeginMethod"><span id="line1">node <g>insertAtBegin(int x)</g> {\n'
						 + '\t<span id="step1">node temp;\n'
						 + '\t<span id="line3">temp = <g>createNode()</g>;</span>\n'
						 + '\ttemp -> data = x;</span>'
						 + '\n}</span></div>');
	}
	$('#insertAtBeginMethod span').addClass('opacity00');
}

function createNodeMethod() {
$('#codeDiv').append('\n\n<span id="createNodeFun" class="opacity00">node <g>createNode()</g> {\n'
					+ '\tnode temp;\n'
					+ '\t<span id="allocMemory"></span>\n'
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
				text = 'Here we will learn about <y>insertAtBegin()</y> method in a <y>Single Linked List</y>.';
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();
				});
			break;
			case 'algorithmDiv':
				$('#algorithmDiv').removeClass('opacity00');
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#codeAndAlgorithmDiv').addClass('box-border');
					text = 'Let us learn about adding a <bl>node</bl> at <bl>begin</bl> to a <bl>Single Linked List(SLL)</bl>. &emsp;';
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
								text = '<span id="l2">Let us store the <yy class="ct-fonts">begining of the linked list</yy> in a pointer variable'
										+ ' of type node (<bgb>first</bgb>).<br> Since the <yy class="ct-fonts">Linked list</yy> is'
										+ ' <yy class="ct-fonts">not yet created</yy> we should initialize it with <yy class="ct-fonts one">NULL</yy>.';
								typing('.introjs-tooltiptext', text, function() {
									$('#algorithmDiv').removeClass('opacity00').append('<ul style="list-style-type: circle" id="ul1"></ul>');
									algorithmSteps(text, '.introjs-tooltiptext span', '#algorithmDiv #l2', 0, 'fstCreation');
									$('#algorithmDiv #l2 yy:last').addClass('ct-green-color').removeClass('ct-blue-color');
								});
							});
						break;
						case 'fstListCreation':
							text = '<span id="l3Span">Let us consider the <y>steps</y> involved in <yy class="ct-fonts">adding</yy> a new '
									+ '<yy class="ct-fonts">node</yy> at <yy class="ct-fonts">begin</yy> for a given value.</span><br><br>Enter a value : '
									+ '<input type="text" class="usr-txt position-css zIndex" size="3" maxlength="3" id="nodeVal" />';
							typing('.introjs-tooltiptext', text, function() {
								validation('#nodeVal', 1);
							});
						break;
						case 'fstToTmpNxt':
							text = '<spna id="l4"><yy class="ct-fonts">fetch</yy> the <bgb>first</bgb> <yy class="ct-fonts">node</yy> for the '
									+ 'newly created <yy class="ct-fonts one">address</yy> in that <yy class="ct-fonts">node\'s</yy>'
									+ ' <yy class="ct-fonts one">next pointer variable<yy>.</span>';
							typing('.introjs-tooltiptext', text, function() {
								$('#algorithmDiv ul:last').append('<li class="opacity00">' + text + '</li>');
								$('#algorithmDiv #l4 yy').addClass('ct-blue-color').removeClass('ct-fonts');
								$('#algorithmDiv #l4 .one').removeClass('ct-blue-color').addClass('ct-green-color');
								$('#algorithmDiv #l4 bgb').removeClass('ct-fonts');
								$('#algorithmDiv #l4').addClass('opacity00');
								$('#step1').after('\n\t<span class="opacity00" id="fstToTmpNxt">temp -> next = first; &emsp;</span>');
								$('#codeDiv').scrollTo('#insertAtBeginMethod span:last', 300);
								nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
									fadeInBounceEffectWithTimelineMax('#firstVal', '#next1', false, 80, function() {
										$('#algorithmDiv li:last').removeClass('opacity00');
										$('#algorithmDiv').addClass('z-index10000');
										transWithZoomInEffect('.introjs-tooltiptext #l4', '#algorithmDiv #l4', function() {
											introNextSteps('#codeAndAlgorithmDiv', 'fstToTmpNxt', 'hide');
											$('.introjs-nextbutton').show();
										});
									});
								});
							});
						break;
						case 'tempToFst':
							text = '<span id="l5">Store the <yy class="ct-fonts">address</yy> of the <yy class="ct-fonts">newly created node</yy>'
									+ ' in the <bgb>first</bgb> variable.</span>';
							typing('.introjs-tooltiptext', text, function() {
								nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
									fadeInBounceEffectWithTimelineMax('#tempNode1', '#firstVal', false, -350, function() {
										svgAnimatingLineBottomToTop('#firstDiv', '#nextDiv1', 'line1', function() {
											$('#algorithmDiv ul:last').append('<li class="opacity00">' + text + '</li>');
											$('#algorithmDiv #l5').addClass('opacity00');
											$('#algorithmDiv yy').removeClass('ct-fonts').addClass('ct-blue-color');
											$('#algorithmDiv').addClass('z-index10000');
											$('#algorithmDiv li:last').removeClass('opacity00');
											transWithZoomInEffect('.introjs-tooltiptext #l5', '#algorithmDiv #l5', function() {
												introNextSteps('#codeAndAlgorithmDiv', 'tmpToFst', 'hide');
												$('.introjs-nextbutton').show();
											});
										});
									});
								});
							});
						break;
						case 'secondNode':
							$('#line11').remove();
							$('#tempNodeParent1').addClass('opacity00');
							text = 'Let us add another <y>node</y> at <y>begin</y> for the given value.<br>Enter a value '
									+ '<input type="text" class="usr-txt position-css zIndex" size="3" maxlength="3" id="nodeVal" />';
							typing('.introjs-tooltiptext', text, function() {
								validation('#nodeVal', 2);
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
								transWithZoomInEffect('#l2', '#fstCreation', function() {
									animatedTooltip('#helpText', "bottom", "first stores the begining of the linked list");
									nextBtnWithoutCalling('#fstCreation', function() {
										introNextSteps('#animationDiv', 'fstListCreation', 'show');
										introjs.nextStep();
									});
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
										if (lang == 'c') {
											$('#allocMemory').html('temp = (node)malloc(sizeof(<span id="list">struct list</span>));');
										} else if (lang == 'cpp') {
											$('#allocMemory').html('temp = new list;');
										}
										$('.introjs-tooltip').removeClass('hide');
										text = '<y>createNode()</y> is used to <y>allocate memory</y>.';
										typing('.introjs-tooltiptext', text, function() {
											structCode();
											$('#codeDiv').scrollTo('#structCode span:last', 300);
											nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
												transWithZoomInEffect('#line3', '#createNodeFun', function() {
													$('#list').css({'background-color' : 'yellow'});
													transWithZoomInEffect('#list', '#structCode', function() {
														$('#line3, #l3Div, #list').css({'background-color' : ''});
														introNextSteps('#animationDiv', 'fstToTmpNxt', 'show');
														$('.introjs-nextbutton').show();
													});
												});
											});
										});
									});
								});
							});
						break;
						case 'fstToTmpNxt':
							$('#codeDiv').scrollTo('#fstCreation', 300);
							$('#l4').effect('highlight', {color: 'yellow'}, 1200);
							transWithZoomInEffect('#l4', '#fstToTmpNxt', function() {
								nextBtnWithoutCalling('#fstToTmpNxt', function() {
									introNextSteps('#animationDiv', 'tempToFst', 'show');
									introjs.nextStep();
								});
							});
						break;
						case 'tmpToFst':
							$('#fstToTmpNxt').after('\n\t<span id="tempToFst" class="opacity00">first = temp; &emsp;</span>');
							$('#codeDiv').scrollTo('#fstCreation', 300);
							$('#l5').effect('highlight', {color: 'yellow'}, 1200);
							transWithZoomInEffect('#l5', '#tempToFst', function() {
								nextBtnWithoutCalling('#tempToFst', function() {
									introNextSteps('#animationDiv', 'secondNode', 'show');
									introjs.nextStep();
								});
							});
						break;
					}
				});
			break;
			case 'restartBtn':
				$('.introjs-tooltip').css({'min-width': '125px'});
				$('#animationDiv, #codeAndAlgorithmDiv').addClass('z-index10000');
				$('.zIndex').css({'z-index': '99999999'});
				$('#restartBtn').removeClass('opacity00');;
				$('.introjs-helperLayer').one('transitionend', function() {
					typing('.introjs-tooltiptext', 'Click to restart.', function() {
						$('#restartBtn').click(function() {
							location.reload();
						});
					});
				});
			break;
		}
	});
	introjs.start();
}
function secondNdeAnim() {
	$('.user-btn').remove();
	$('input').attr('disabled', true);
	$('.introjs-tooltiptext').append('<br><br>Follow the steps : ');
	$('#algorithmDiv').addClass('z-index10000');
	$('#l3Div').css({'background-color' : 'yellow'});
	$('.introjs-tooltiptext').append('<ol></ol>');
	dynamicTempNodes(2);
	text = '<li>Allocate <y>memory</y> for the new node (<y>address</y> of the new node is stored in'
			+ ' <y>temp</y>) and store the given value in <y>data</y>.</li>';
	typing('.introjs-tooltiptext ol', text, function() {
		nodeAnim(2, function() {
			nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
				$('#l3Div').css({'background-color' : ''});
				$('#l4').css({'background-color' : 'yellow'});
				$('.introjs-tooltiptext ol').append('<li></li>');
				text = '<y>fetch</y> the <bgb>first</bgb> <y>node</y> for the newly created <y>address</y> in that '
						+ '<y>node\'s</y> <y>next pointer variable<y>.';
				typing('.introjs-tooltiptext li:last', text, function() {
					nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
						fadeInBounceEffectWithTimelineMax('#firstVal', '#next2', true, 400, function() {
							svgAnimatingLineBottomToTop('#nextDiv2', '#nextDiv1', 'line2', function() {
								nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
									$('#l4').css({'background-color' : ''});
									$('#l5').css({'background-color' : 'yellow'});
									$('.introjs-tooltiptext ol').append('<li></li>');
									text = 'Store the <y>address</y> of the <y>newly created node</y> in the <bgb>first</bgb> variable.';
									typing('.introjs-tooltiptext li:last', text, function() {
										nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
											fadeInBounceEffectWithTimelineMax('#tempNode2', '#firstVal', false, -350, function() {
												$('#line1').remove();
												svgAnimatingLineRightToLeft('#firstDiv', '#dataDiv2', 'line1', function() {
													$('#l5').css({'background-color' : ''});	
													$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="rearrangeNode()">'
																+ ' Next &#8594;</a>');
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
		});
	});
}

function rearrangeNode() {
	$('.user-btn').remove();
	$('line').remove();
	TweenMax.to('#node1', 1, {left: '130px', onComplete: function() {
		createDynamicNodes('#dynamicNodes', 3);
		var t = $("#node3").detach();//detach is used to remove the selected element and re-inserted.
		$('#node1').before(t);
		$('#node3').html($('#node2').html());
		$('#node1').css('left', '0');
		var l = $('#node2').offset();
		$('#node3').offset({top : l.top, left : l.left});
		$('#node3').removeClass('opacity00');
		$('#node2').addClass('opacity00').remove();;
		TweenMax.to('#node3', 1, {top : 0, left : 0, onComplete : function() {
			$('#node3').attr('id', 'node2');
			svgAnimatingLineTopToBottom('#tempNodeParent2', '#nextDiv2', 'line3');
			svgAnimatingLineBottomToTop('#firstDiv', '#nextDiv2', 'line1');
			svgAnimatingLineRightToLeft('#nextDiv2', '#dataDiv1', 'line2');
			animatedTooltip('#dataDiv2', "bottom", "data holds user data");
			animatedTooltip('#nextDiv2', "bottom", "next holds next node's address");
			introNextSteps('#restartBtn', '', 'show', 'right');
			$('.introjs-nextbutton').show();
		}});
	}});
}

function validationAnim() {
	$('#nodeVal').off();
	$('input').attr('disabled', true);
	$('.user-btn, .error-text').remove();
	$('.introjs-tooltiptext').append('<br><br><div id="l3Div"><div>')
	text = 'Allocate <yy class="ct-fonts one">memory</yy> for the new node (<yy class="ct-fonts one">address</yy> of the new node is stored in'
			+ ' <yy class="ct-fonts one">temp</yy>) and store the given value in <yy class="ct-fonts">data</yy>.';
	typing('#l3Div', text, function() {
		nodeAnim(1, function() {
			$('#algorithmDiv').append('<span id="l3Span" class="opacity00">' 
							+ $('.introjs-tooltiptext #l3Span').html() + '</span>');
			$('#algorithmDiv yy').not('.one').addClass('ct-blue-color').removeClass('ct-fonts');
			$('#algorithmDiv .one').addClass('ct-green-color').removeClass('ct-fonts ct-blue-color');
			$('#algorithmDiv y').addClass('ct-brown-color');
			nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
				$('#algorithmDiv').addClass('z-index10000');
				transferEffect('.introjs-tooltiptext #l3Span', '#algorithmDiv #l3Span', function() {
					$('#algorithmDiv #l3Span').after('<ul style="list-style-type: circle" id="ul2"><li><span id="l3Div" class="opacity00">'
								+ $('.introjs-tooltiptext #l3Div').html() + '</span></li></ul>');
					$('#algorithmDiv yy').not('.one').addClass('ct-blue-color').removeClass('ct-fonts');
					$('#algorithmDiv .one').addClass('ct-green-color').removeClass('ct-fonts');
					transferEffect('.introjs-tooltiptext #l3Div', '#algorithmDiv #l3Div', function() {
						$('#algorithmDiv ul:last').css({'list-style-type': 'circle'});
						introNextSteps('#codeAndAlgorithmDiv', 'methodCreation', 'hide');
						$('.introjs-nextbutton').show();
						insertAtBeginMethod();
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
		if ($(this).val().length > max - 1) {
			$('.error-text').remove();
			$('.introjs-tooltiptext').append('<div class="error-text ct-fonts">Please restrict the maximum length to 3 digits only.</div>')
			e.preventDefault();
		}
	});
	$(selector).on('keyup', function(e) {
		if ($(selector).val().length != 0) {
			$('.user-btn, .errMsg').remove();
			if (val == 1) {
				$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="validationAnim()">Next &#8594;</a>');
				if (e.keyCode == 13) {
					validationAnim();
				}
			} else {
				$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="secondNdeAnim()">Next &#8594;</a>');
				if (e.keyCode == 13) {
					secondNdeAnim(val);
				}
			}
		} else {
			$('.user-btn').hide();
			$('.error-text').remove();
			$('.introjs-tooltiptext').append('<div class="error-text ct-fonts errMsg">Please enter number.</div>');
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

					