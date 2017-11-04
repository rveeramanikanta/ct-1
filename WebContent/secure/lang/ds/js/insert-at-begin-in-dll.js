function insertAtBeginInDLLReady() {
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
	 				+ ' <div class="col-xs-12 padding0"><div class="col-xs-4 ct-green-color ct-fonts text-center padding0">prev</div>'
					+ ' <div class="col-xs-4 ct-blue-color ct-fonts padding0 text-center">data</div>'
					+ '	<div class="col-xs-4 ct-green-color ct-fonts text-center padding0">next</div></div>'
					+ ' <div id="nodedata' + nodeNum + '"><div id="prevDiv' + nodeNum + '" class="div-border left-radius col-xs-4 prev-div">'
					+ ' <span id="prev' + nodeNum + '" class="prev-span ct-green-color">NULL</span></div>'
					+ ' <div id="dataDiv' + nodeNum + '" class="div-border no-radius col-xs-4 data-div">'
					+ ' <span id="data' + nodeNum + '" class="data-span ct-blue-color opacity00" style="top: 0px; left: 0px;"></span></div>'
					+ ' <div id="nextDiv' + nodeNum + '" class="div-border right-radius col-xs-6 next-div">'
					+ ' <span id="next' + nodeNum + '" class="next-span ct-green-color">NULL</span></div></div>'
					+ ' <div class="col-xs-12 padding0"><div class="col-xs-4 col-xs-offset-4 padding0 text-center">'
					+ ' <span id="dataAddress' + nodeNum + '" class="data-address padding0 ct-brown-color ct-fonts">'+ randomAddress
					+ '</span></div></div></div>');
	$('#prev' + nodeNum + ', #data' + nodeNum + ', #next' + nodeNum).addClass('position-css ct-fonts');
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
	$(id).addClass('zIndex').attr({"data-placement" : position, "title" : tooltipText}).tooltip();
}

function structCode() {
	$('#codeDiv').append('<div id="structCode" class="position-css opacity00">struct <g>list</g> {\n'
						+ '\tint <bl>data</bl>;\n'
						+ '\tstruct list <g>*prev</g>;\n'
						+ '\tstruct list <g>*next</g>;\n'
						+ '};\n<span>typedef struct list *node; \t</span> </div>');
}

function insertAtBeginMethod() {
	$('#codeDiv').append('<br><br><div class="position-css" id="insertAtBeginMethod"><span id="insertAtBeginFun"></span></div>');
	if (lang == 'c') {
		$('#insertAtBeginFun').html('node <g>insertAtBegin(int x)</g> {\n'
						 + '\t<span id="step1"></span>'
						 + '\n\treturn first;\n}');
	} else if (lang == 'cpp') {
		$('#insertAtBeginFun').html('void Sll::<g>insertAtBegin(int x)</g> {\n'
						 + '\t<span id="step1"></span>\n}');
	}
	$('#step1').html('node temp;\n'
						 + '\t<span id="callCreateNode">temp = <g>createNode()</g>;</span>\n'
						 + '\ttemp -> data = x;');
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
				text = 'Here we will learn about <y>insertAtBegin()</y> method in a <y>Doubly Linked List</y>.';
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();
				});
			break;
			case 'algorithmDiv':
				$('#algorithmDiv').removeClass('opacity00');
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#codeAndAlgorithmDiv').addClass('box-border');
					text = 'Let us learn about adding a <bl>node</bl> at <bl>beginning</bl> of the <bl>Doubly Linked List(DLL)</bl>. &emsp;';
					typing('#algorithmDiv', text, function() {
						callingNextBtn('#algorithmDiv', function() {
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
							animatedTooltip('#firstDiv', "bottom", "first stores the beginning of the linked list");
							zoomInEffect('#firstNode', function() {
								$('.introjs-tooltip').removeClass('hide');
								text = '<span id="l2">Let us store the <yy class="ct-fonts brn">beginning of the linked list</yy> in a pointer variable'
										+ ' of type node (<bgb>first</bgb>).<br> Since the <yy class="ct-fonts brn">Linked list</yy> is'
										+ ' <yy class="ct-fonts brn">not yet created</yy> we should initialize it with <yy class="ct-fonts g">NULL</yy>.';
								typing('.introjs-tooltiptext', text, function() {
									$('#algorithmDiv').removeClass('opacity00').append('<ul style="list-style-type: circle" id="ul1"></ul>');
									algorithmSteps(text, '.introjs-tooltiptext span', '#algorithmDiv #l2', 0, 'fstCreation');
								});
							});
						break;
						case 'fstListCreation':
							text = '<span id="l3Span">Let us consider the <y>steps</y> involved in <yy class="ct-fonts">adding</yy> a new '
									+ '<yy class="ct-fonts bl">node</yy> at <yy class="ct-fonts bl">begin</yy> for a given value.</span><br>'
									+ ' <br>Enter a value : '
									+ '<input type="text" class="usr-txt position-css zIndex" size="3" maxlength="3" id="nodeVal" />';
							typing('.introjs-tooltiptext', text, function() {
								validation('#nodeVal', 1);
							});
						break;
						case 'tempToFirst':
							text = '<span id="l4">Check the condition if <bgb>first</bgb> is <y>NULL</y> or <y>not</y>.<br><br>'
									+ ' If <bgb>first</bgb> is not <y>NULL</y>'
									+ ' then <y>fetch</y> the newly created node <y>address</y> in <bgb>first</bgb>.</span>'
							typing('.introjs-tooltiptext', text, function() {
								callingNextBtn('.introjs-tooltipbuttons', function() {
									fadeInBounceEffectWithTimelineMax('#tempNode1', '#firstVal', false, -380, function() {
										svgAnimatingLineTopAndBottom('#firstDiv', '#dataDiv1', 'line2', false, function() {
											callingNextBtn('.introjs-tooltipbuttons', function() {
												text = '<li><span id="l4" class="opacity00"><bl>Fetch</bl> the newly created <bl>node</bl>'
														+ ' <g>address</g> in <bgb>first</bgb>. If it is <g>NULL</g>.</li>';
												$('#algorithmDiv #ul2').append(text);
												$('#algorithmDiv').addClass('z-index10000');
												transWithZoomInEffect('.introjs-tooltiptext #l4', '#algorithmDiv #l4', function() {
													introNextSteps('#codeAndAlgorithmDiv', 'tempToFirst', 'hide');
													$('.introjs-nextbutton').show();
												});
											});
										});
									});
								});
							});
						break;
						
						
						
						/*
						case 'tempToFst':
							text = '<span id="l5">Store the <yy class="ct-fonts g">address</yy> of the <yy class="ct-fonts">newly created node</yy>'
									+ ' in the <bgb>first</bgb> variable.</span>';
							typing('.introjs-tooltiptext', text, function() {
								callingNextBtn('.introjs-tooltipbuttons', function() {
									fadeInBounceEffectWithTimelineMax('#tempNode1', '#firstVal', false, -350, function() {
										svgAnimatingLineTopAndBottom('#firstDiv', '#nextDiv1', 'line1', false, function() {
											$('#algorithmDiv ul:last').append('<li class="opacity00">' + text + '</li>');
											$('#algorithmDiv #l5').addClass('opacity00');
											algorithmDivColors();
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
						break;*/
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
									animatedTooltip('#helpText', "bottom", "first stores the beginning of the linked list");
									callingNextBtn('#fstCreation', function() {
										introNextSteps('#animationDiv', 'fstListCreation', 'show');
										introjs.nextStep();
									});
								});
							});
						break;
						case 'methodCreation':
							$('#l3Span').effect('highlight', {color: 'yellow'}, 1200);
							transWithZoomInEffect('#l3Span', '#insertAtBeginFun', function() {
								$('#l3Div').css({'background-color' : 'yellow'});
								transWithZoomInEffect('#l3Div', '#step1', function() {
									$('#callCreateNode').css({'background-color' : 'yellow'});
									createNodeMethod();
									$('#codeDiv').scrollTo('#createNodeFun span:last', 500, function() {
										if (lang == 'c') {
											$('#allocMemory').html('temp = (node)malloc(sizeof(<span id="list" class="ct-green-color">struct list</span>));');
										} else if (lang == 'cpp') {
											$('#allocMemory').html('temp = <span id="list" class="ct-green-color">new list;</span>');
										}
										$('.introjs-tooltip').removeClass('hide');
										text = '<y>createNode()</y> is used to <y>allocate memory</y>.';
										typing('.introjs-tooltiptext', text, function() {
											structCode();
											$('#codeDiv').scrollTo('#structCode span:last', 300);
											callingNextBtn('.introjs-tooltipbuttons', function() {
												transWithZoomInEffect('#callCreateNode', '#createNodeFun', function() {
													$('#list').css({'background-color' : 'yellow'});
													transWithZoomInEffect('#list', '#structCode', function() {
														$('#callCreateNode, #l3Div, #list').css({'background-color' : ''});
														introNextSteps('#animationDiv', 'tempToFirst', 'show');
														$('.introjs-nextbutton').show();
													});
												});
											});
										});
									});
								});
							});
						break;
						case 'tempToFirst':
							$('#codeDiv').scrollTo('#fstCreation', 300);
							$('#l4').effect('highlight', {color: 'yellow'}, 1200);
							$('#step1').after('\n\t<span id="bgnIfCond" class="opacity00">first = temp;&emsp;</span>');
							transWithZoomInEffect('#l4', '#bgnIfCond', function() {
								callingNextBtn('#bgnIfCond', function() {
									introNextSteps('#animationDiv', 'secondNode', 'show');
									introjs.nextStep();
								});
							});
						break;
						case 'ifCondCode':
							$('#bgnIfCond').before('<span id="">if (first != NULL) {\n'
											+ '\t\ttemp -> next = first;\n'
											+ '\t\tfirst -> prev = temp;\n\t}</span>\n\t');
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

function algorithmDivColors() {
	$('#algorithmDiv yy').addClass('ct-blue-color').removeClass('ct-fonts');
	$('#algorithmDiv .g').removeClass('ct-blue-color').addClass('ct-green-color');
	$('#algorithmDiv .brn').removeClass('ct-blue-color').addClass('ct-brown-color');
	$('#algorithmDiv y').addClass('ct-brown-color');
}


function secondNdeAnim() {
	$('.introjs-tooltiptext').append('<br><br>Follow the steps : ');
	$('#algorithmDiv').addClass('z-index10000');
	$('#l3Div').css({'background-color' : 'yellow'});
	$('.introjs-tooltiptext').append('<ol></ol>');
	dynamicTempNodes(2);
	text = '<li>Allocate <y>memory</y> for the new node (<y>address</y> of the new node is stored in <y>temp</y>) and store'
				+ ' the given value in <y>data</y>.</li>';
	typing('.introjs-tooltiptext ol', text, function() {
		nodeAnim(2, function() {
			callingNextBtn('.introjs-tooltipbuttons', function() {
				$('#l3Div').css({'background-color' : ''});
				$('.introjs-tooltiptext ol').append('<li></li>');
				text = '<span id="l5">Store the <bgb>first</bgb> in newlyy created node\'s <yy class="ct-fonts g">next</yy> next pointer variable. '
						+ 'If <bgb>first</bgb> is not <yy class="ct-fonts g">NULL</yy>.</span>';
				typing('.introjs-tooltiptext li:last', text, function() {
					callingNextBtn('.introjs-tooltipbuttons', function() {
						fadeInBounceEffectWithTimelineMax('#firstVal', '#next2', true, 400, function() {
							svgAnimatingLineTopAndBottom('#nextDiv2', '#nextDiv1', 'line3', false, function() {
								$('#algorithmDiv ul:last').append('<li>' + text + '</li>');
								$('#algorithmDiv #l5').addClass('opacity00');
								algorithmDivColors();
								transWithZoomInEffect('.introjs-tooltiptext #l5', '#algorithmDiv #l5', function() {
									callingNextBtn('.introjs-tooltipbuttons', function() {
										$('.introjs-tooltiptext ol').append('<li></li>');
										text = '<span id="l6">Now Store the <yy class="ct-fonts b">newly created node\'s</yy>'
												+ ' <yy class="ct-fonts g">address</yy>'
												+ ' in <bgb>first</bgb> node\'s <yy class="ct-fonts g">prev</yy> pointer variable.</span>';
										typing('.introjs-tooltiptext li:last', text, function() {
											callingNextBtn('.introjs-tooltipbuttons', function() {
												fadeInBounceEffectWithTimelineMax('#tempNode2', '#prev1', false, -350, function() {
													svgAnimatingLineTopAndBottom('#prevDiv1', '#prevDiv2', 'line4', true, function() {
														$('#algorithmDiv ul:last').append('<li>' + text + '</li>');
														$('#algorithmDiv #l6').addClass('opacity00');
														algorithmDivColors();
														transWithZoomInEffect('.introjs-tooltiptext #l6', '#algorithmDiv #l6', function() {
															callingNextBtn('.introjs-tooltipbuttons', function() {
																$('.introjs-tooltiptext ol').append('<li></li>');
																text = '<span id="l5">Store the <y>address</y> of the <y>newly created node</y>'
																		+ ' in the <bgb>first</bgb> variable.</span>';
																typing('.introjs-tooltiptext li:last', text, function() {
																	callingNextBtn('.introjs-tooltipbuttons', function() {
																		fadeInBounceEffectWithTimelineMax('#tempNode2', '#firstVal', false, 
																				-350, function() {
																			$('#line2').remove();
																			svgAnimatingLineRightToLeft('#firstDiv', '#prevDiv2', 'line2', function() {
																				$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn"'
																						+ ' onclick="rearrangeNode()"> Next &#8594;</a>');
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
			svgAnimatingLineTopAndBottom('#tempNodeParent2', '#nextDiv2', 'line4', true);
			svgAnimatingLineTopAndBottom('#firstDiv', '#nextDiv2', 'line1', false);
			svgAnimatingLineRightToLeft('#nextDiv2', '#prevDiv1', 'line2');
			svgAnimatingLineLeftToRight('#prevDiv1', '#nextDiv2', 'line3')
			animatedTooltip('#prevDiv2', "bottom", "prev holds prev node's address");
			animatedTooltip('#dataDiv2', "bottom", "data holds user data");
			animatedTooltip('#nextDiv2', "bottom", "next holds next node's address");
			introNextSteps('#codeAndAlgorithmDiv', 'ifCondCode', 'hide');
			//introNextSteps('#restartBtn', '', 'show', 'right');
			$('.introjs-nextbutton').show();
		}});
	}});
}

function validationAnim() {
	$('.introjs-tooltiptext').append('<br><br><div id="l3Div"><div>')
	text = 'Allocate <yy class="ct-fonts brn">memory</yy> for the new node (<yy class="ct-fonts g">address</yy> of the new node is stored in'
			+ ' <yy class="ct-fonts g">temp</yy>) and store the given value in <yy class="ct-fonts bl">data</yy>.';
	typing('#l3Div', text, function() {
		nodeAnim(1, function() {
			$('#algorithmDiv').append('<span id="l3Span" class="opacity00">' + $('.introjs-tooltiptext #l3Span').html() + '</span>');
			$('#algorithmDiv #l3Span').after('<ul style="list-style-type: circle" id="ul2"><li class="opacity00"><span id="l3Div" class="opacity00">'
											+ $('.introjs-tooltiptext #l3Div').html() + '</span></li></ul>');
			algorithmDivColors();
			callingNextBtn('.introjs-tooltipbuttons', function() {
				$('#algorithmDiv').addClass('z-index10000');
				transferEffect('.introjs-tooltiptext #l3Span', '#algorithmDiv #l3Span', function() {
					$('#ul2 li').removeClass('opacity00')
					transferEffect('.introjs-tooltiptext #l3Div', '#algorithmDiv #l3Div', function() {
						introNextSteps('#codeAndAlgorithmDiv', 'methodCreation', 'hide');
						insertAtBeginMethod();
						$('.introjs-nextbutton').show();
					});
				});
			});
		});
	});
}

function nodeAnim(val, callBackFunction) {
	callingNextBtn('.introjs-tooltipbuttons', function() {
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
	callingNextBtn('.introjs-tooltipbuttons', function() {
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

function callingNextBtn(id, callBackFunction) {
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
			$('#callCreateNode').removeClass('opacity00');
		}
		$(selector2).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
			$(selector2).removeClass("animated zoomIn")
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		});
	});
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
		if ($(this).val().length == 2) {
			$('.error-text').remove();
		}
		if ($(selector).val().length != 0) {
			$('.user-btn, .errMsg').remove();
			$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="eventValidation(' + val + ')">Next &#8594;</a>');
			if (e.keyCode == 13) {
				eventValidation(val)
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
		secondNdeAnim();
	}
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
	if (flag) {
		var y1 = $(selector1).offset().top - parentOffset.top;
		var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight();
	} else {
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