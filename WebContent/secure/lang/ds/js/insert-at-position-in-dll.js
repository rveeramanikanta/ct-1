function insertAtPositionInDLLReady() {
	dynamicTempNodes(1);
	createDynamicNodes('#dynamicNodes', 1);
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
						+ '<div class="col-xs-12 box padding0 temp-node" id="tempBox' + val + '"><span id="tempNode' + val + '"'
						+ ' class="ct-brown-color ct-fonts position-css temp-node-val opacity00">1245</span></div>'
						+ '<div class="text-center col-xs-12 padding0 ct-green-color ct-fonts" id="tempame' + val + '">temp</div></div>');
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
	$(id).addClass('zIndex').attr({"data-placement" : position, "data-original-title" : tooltipText}).tooltip();
}

function createNodeMethod() {
	$('#codeDiv').append('\n\n<span id="createNodeFun" class="opacity00">node <g>createNode()</g> {\n'
						+ '\tnode temp;\n'
						+ '\t<span id="allocMemory"></span>\n'
						+ '\ttemp -> next = NULL;\n'
						+ '\t<span>return temp;</span>\n'
						+ '} &emsp;</span>\n\n');
}

function structCode() {
	$('#codeDiv').append('<span id="structCode" class="opacity00"><g>struct list</g> {\n'
						+ '\tint <bl>data</bl>;\n'
						+ '\tstruct list <g>*prev</g>;\n'
						+ '\tstruct list <g>*next</g>;\n'
						+ '};\n<span>typedef struct list *node; \t</span> </span>\n');
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
				element: '#headingInDll',
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
		$('.zIndex').not('.introjs-showElement, #headingInDll').css({'z-index': '0'});
		$('.introjs-showElement .zIndex').css({'zIndex': '99999999'});
		$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();
		switch(elementId) {
			case 'headingInDll':
				text = 'Here we will learn about <y>insertAtPosition()</y> method in a <y>Doubly Linked List</y>.';
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();
				});
			break;
			case 'algorithmDiv':
				$('#algorithmDiv').removeClass('opacity00');
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#codeAndAlgorithmDiv').addClass('box-border');
					text = 'Let us learn about adding a <bl>node</bl> at a particular <brn>position</brn> to a'
							+ ' <bl>Doubly Linked List(DLL)</bl>. &emsp;';
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
							animatedTooltip('#firstDiv', "bottom", "first stores the beginning of the linked list");
							zoomInEffect('#firstNode', function() {
								$('.introjs-tooltip').removeClass('hide');
								text = '<span id="l1">Let us store the <yy class="ct-fonts">beginning of the linked list</yy> in a pointer variable'
										+ ' of type node (<bgb>first</bgb>).<br> Since the <yy class="ct-fonts">Linked list</yy> is'
										+ ' <yy class="ct-fonts">not yet created</yy> we should initialize it with <yy class="ct-fonts grn">NULL</yy>.';
								typing('.introjs-tooltiptext', text, function() {
									$('#algorithmDiv').removeClass('opacity00').append('<ul style="list-style-type: circle" id="ul1"></ul>');
									algorithmSteps(text, '.introjs-tooltiptext span', '#algorithmDiv #l1', 0, 'fstCreation');
								});
							});
						break;
						case 'ifPosZeroStep':
							posZeroAnim();
						break;
						case 'ifPosIsOne':
							text = '<span>Let us <yy class="ct-fonts">insert</yy> a node at <yy class="ct-fonts brn one">'
									+ '1</yy>st <yy class="ct-fonts brn">position</yy> </span> for a given value.<br>Enter a value : '
									+ '<input type="text" class="usr-txt position-css zIndex" size="3" maxlength="3" id="nodeVal" />';
							typing('.introjs-tooltiptext', text, function() {
								fromEffectWithTweenMax('.introjs-tooltiptext .one', '#posVal', true, function() {
									validation('#nodeVal', 1);
								});
							});
						break;
						case 'posOneCond':
							posOneAnim();
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
									animatedTooltip('#helpText', "bottom", "first stores the beginning of the linked list");
									nextBtnWithoutCalling('#fstCreation', function() {
										introNextSteps('#animationDiv', 'ifPosZeroStep', 'show');
										introjs.nextStep();
									});
								});
							});
						break;
						case 'posLesThanZero':
							$('#l2').effect('highlight', {color: 'yellow'}, 1400);
							$('#codeDiv').append('\n\n<div id="positionDiv" class="position-css"><span id="line1" class="opacity00"></span></div>');
							if (lang == 'c') {
								$('#line1').html('node insertAtPosition(int <brn>position</brn>, int x) {<span id="line1Close">\n\t'
													+ '<span id="retn">return first;\n</span>}</span>');
							} else if (lang == 'cpp') {
								$('#line1').html('void Dll::insertAtPosition(int <brn>position</brn>, int x) {<span id="line1Close">\n}</span>');
							}
							transWithZoomInEffect('#l2', '#line1', function() {
								$('#line1Close').before('\n\t<span id="line2" class="opacity00">if (<brn>position</brn> <g><=</g> <brn>0</brn>) {\n\t'
												+ '\t<span id="line0">printf("<brn>No such position in DLL. So</brn> "\n\t\t\t\t"<brn>insertion is '
												+ 'not possible</brn>\\n");\n\t\treturn first;</span>\n\t}</span>');
								if (lang == 'cpp') {
									$('#line0').html('cout << "<brn>No such position in DLL. So</brn> "\n\t\t\t\t"<brn>insertion is '
													+ 'not possible</brn>\\n";\n\t\treturn;');
								}
								codeDivAnim('#l3', '#line2', function() {
									nextBtnWithoutCalling('#line1', function() {
										introNextSteps('#animationDiv', 'ifPosIsOne', 'show');
										introjs.nextStep();
									});
								});
							});
						break;
						case 'posTwoCode':
							$('#posNotOne').append('\t\t<span id="line5" class="opacity00">temp -> next = prevPos -> next;</span>\n'
											+ '\t\t<span id="line6" class="opacity00">prevPos -> next = temp;</span>\n');
							$('#codeDiv').scrollTo('#positionDiv #createCall', 300);
							codeDivAnim('#l14', '#line5', function() {
								$('#codeDiv').scrollTo('#positionDiv #createCall', 300);
								codeDivAnim('#l15', '#line6', function() {
									nextBtnWithoutCalling('#line6', function() {
										introNextSteps('#animationDiv', 'NoPosition', 'show');
										introjs.nextStep();
									});
								});
							});
						break;
						case 'mallocCreation':
							$('#line2').after('\n<span id="createMethod" class="opacity00">\t<span id="tempDec">node temp;</span>\n'
											+ '\t<span id="createCall">temp = <g>createNode()</g>;</span>\n\ttemp -> data = x;</span>'
											+ '\n\t<span id="ifPosIsOne" class="opacity00">if (<brn>position</brn> <g>==</g> <brn>1</brn>) {\n'
											+ '<span id="posOneCond"></span>\t<span id="posOneClose">}</span></span>');
							$('#l4').effect('highlight', {color: 'yellow'}, 1400);
							transWithZoomInEffect('#l4', '#ifPosIsOne', function() {
								$('#l5').effect('highlight', {color: 'yellow'}, 1400);
								transWithZoomInEffect('#l5', '#createMethod', function() {
									createNodeMethod();
									structCode();
									$('#createCall').css({'background-color' : 'yellow'});
									$('.introjs-tooltip').removeClass('hide');
									text = '<y>createNode()</y> is used to <y>allocate memory</y>.';
									typing('.introjs-tooltiptext', text, function() {
										nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
											$('#codeDiv').scrollTo('#structCode span:first', 300, function() {
												if (lang == 'c') {
													$('#allocMemory').html('temp = (node)malloc(sizeof(<span id="list"><g>struct list</g></span>));');
												} else if (lang == 'cpp') {
													$('#allocMemory').html('temp = <span id="list"><g>new list;</g></span>');
												}
												transWithZoomInEffect('#createCall', '#createNodeFun', function() {
													$('#codeDiv').scrollTo('#structCode span:last', 300, function() {	
														$('#list').css({'background-color' : 'yellow'});
														transWithZoomInEffect('#list', '#structCode', function() {
															introNextSteps('#animationDiv', 'posOneCond', 'show');
															$('.introjs-nextbutton').show();
														});
													});
												});
											});
										});
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


function posZeroAnim() {
	text = '<span id="l2">Let us consider the <y>steps</y> involved in <yy class="ct-fonts">adding</yy> a new '
		+ '<yy class="ct-fonts">node</yy> at a particular <yy class="ct-fonts brn">position</yy> for a given value.</span>';
	typing('.introjs-tooltiptext', text, function() {
		$('#algorithmDiv').append(text);
		$('#algorithmDiv #l2').addClass('opacity00');
		$('.introjs-tooltiptext').append('<ul></ul>');
		text = '<li><span id="l3">Let us <yy class="ct-fonts">insert</yy> a node at <yy class="ct-fonts brn">position</yy>'
				+ ' <yy class="ct-fonts one brn">0</yy>.'
		typing('.introjs-tooltiptext ul', text, function() {	
			zoomInEffect('#posDec', function() {
				fromEffectWithTweenMax('#l3 .one', '#posVal', true, function() {
					animatedTooltip('#positionBox', "bottom", "Position of the node");
					$('.introjs-tooltiptext li').append('<div id="appendText"></div>');
					text1 = ' We can\'t <yy class="ct-fonts">insert</yy> any node if the <yy class="ct-fonts brn">position</yy> is '
							+ '<yy class="ct-fonts brn"><span class="grn">less than or equal to</span> zero</yy>.<br>Print'
							+ ' <yy class="ct-fonts brn">No such position in DLL. So insertion is not possible</yy>.</span></li>';
					typing('#appendText', text1, function() {
						$('#algorithmDiv y, #algorithmDiv .one, #algorithmDiv .brn').addClass('ct-brown-color');
						$('#algorithmDiv').append('<ul style="list-style-type: circle" id="ul2"></ul>');
						$('#ul2').append(text + text1);
						$('#algorithmDiv #l3, #algorithmDiv li:last').addClass('opacity00');
						algorithmColorAnim();
						nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
							$('#algorithmDiv').addClass('z-index10000');
							transWithZoomInEffect('.introjs-tooltiptext #l2', '#algorithmDiv #l2', function() {
								$('#algorithmDiv li:last').removeClass('opacity00');
								transWithZoomInEffect('.introjs-tooltiptext #l3', '#algorithmDiv #l3', function() {
									nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
										introNextSteps('#codeAndAlgorithmDiv', 'posLesThanZero', 'hide');
										introjs.nextStep();
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


function posOneValidationAnim() {
	$('.introjs-tooltiptext').append('<br><br><div id="appendText"></div>');
	text = '<span id="l5">Allocate <yy class="ct-fonts">memory</yy> for the <yy class="ct-fonts">new node</yy> (<yy class="ct-fonts grn">address</yy>'
			+ ' of the <yy class="ct-fonts">new node</yy> is stored in <yy class="ct-fonts">temp</yy>) and store the given value in'
			+ ' <yy class="ct-fonts">data</yy>.</span>';
	typing('#appendText', text, function() {
		animatedTooltip('#tempBox1', "top", "Address of the newly created node.");
		nodeAnim(1, 1, function() {
			$('#algorithmDiv #ul2').append('<li class="opacity00"><span id="l4" class="opacity00">' + $('.introjs-tooltiptext span:first').html() 
								+ '</span></li>');
			$('#algorithmDiv #l4').after('<ul id="ul3"><li class="opacity00">' + text + '</li></ul>');
			algorithmColorAnim();
			nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
				$('#algorithmDiv').addClass('z-index10000');
				$('#algorithmDiv #l5').addClass('opacity00');
				$('#algorithmDiv #ul2 > li:last').removeClass('opacity00');
				transWithZoomInEffect('.introjs-tooltiptext span:first', '#algorithmDiv #l4', function() {
					$('#algorithmDiv li:last').removeClass('opacity00');
					transWithZoomInEffect('.introjs-tooltiptext #l5', '#algorithmDiv #l5', function() {
						introNextSteps('#codeAndAlgorithmDiv', 'mallocCreation', 'hide');
						$('.introjs-nextbutton').show();
					});
				});
			});
		});
	});
}


function posOneAnim() {
	$('#createCall, #list').css({'background-color' : ''});
	$('.introjs-tooltiptext').append('<ul><li></li></ul>');
	text = '<span id="l6">Store the <bgb>first</bgb> value in <yy class="ct-fonts">newly created node\'s</yy>'
			+ ' <yy class="ct-fonts grn">next</yy> pointer variable.</span>';
	typing('.introjs-tooltiptext li', text, function() {
		$('#algorithmDiv #ul3').append('<li class="opacity00">' + text + '</li>');
		$('#ul3 #l6').addClass('opacity00');
		nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
			fadeInBounceEffectWithTimelineMax('#firstVal', '#next1', false, -50, function() {
				$('#algorithmDiv').addClass('z-index10000');
				nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
					algorithmAnim('#ul3', '#l6', function() {
						nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
							$('.introjs-tooltiptext ul').append('<li></li>');
							text = '<span id="l7">Store the <yy class="ct-fonts grn">address</yy> of the <yy class="ct-fonts">newly created node</yy>'
										+ ' in the <bgb>first</bgb> variable.</span>';
							typing('.introjs-tooltiptext li:last', text, function() {
								$('#algorithmDiv #ul3').append('<li class="opacity00">' + text + '</li>');
								$('#ul3 #l7').addClass('opacity00');
								nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
									fadeInBounceEffectWithTimelineMax('#tempNode1', '#firstVal', false, -350, function() {
										svgAnimatingLineTopAndBottom('#firstDiv', '#nextDiv1', 'line1', false, function() {
											nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
												algorithmAnim('#ul3', '#l7', function() {
													introNextSteps('#codeAndAlgorithmDiv', 'posOneStep', 'hide');
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
		});
	});
}


function posTwoValidationAnim() {
	$('.introjs-tooltiptext').append('<ul></ul>');
	text = '<li>Allocate <y>memory</y> for the new node (<y>address</y> of the new node'
			+ ' is stored in <y>temp</y>) and store the given value in <y>data</y>.</li>';
	typing('.introjs-tooltiptext ul', text, function() {
		animatedTooltip('#tempBox3', "top", "Address of the newly created node.");
		createDynamicNodes('#dynamicNodes', 2);
		nodeAnim(2, 3, function() {
			text = '<span id="l14">Now store the <yy class="ct-fonts">previous position(prevPos)\'s</yy> <yy class="ct-fonts grn">next</yy> value in'
					+ ' <yy class="ct-fonts">newly created node\'s</yy> <yy class="ct-fonts grn">next</yy> pointer variable.</span>';
			frLoopAnimText(text, '14', function() {
				nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
					fadeInBounceEffectWithTimelineMax('#next1', '#next2', true, 320, function() {
						$('#algorithmDiv').addClass('z-index10000');
						algorithmAnim('#ul4', '#l14', function() {
							nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
								text = '<span id="l15">Now store the <yy class="ct-fonts">newly created node\'s</yy> <yy class="ct-fonts grn">'
										+ ' address</yy> in the <yy class="ct-fonts">previous position(prevPos)\'s</yy> '
										+ ' <yy class="ct-fonts grn">next</yy> pointer variable.</span>';
								frLoopAnimText(text, '15', function() {
									nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
										fadeInBounceEffectWithTimelineMax('#tempNode3', '#next1', false, -320, function() {
											svgAnimatingLineRightToLeft('#nextDiv1', '#dataDiv2', 'line2', function() {
												algorithmAnim('#ul4', '#l15', function() {
													introNextSteps('#codeAndAlgorithmDiv', 'posTwoCode', 'hide');
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
		});
	});
}

function noPositionAnim(id1, id2, text, callBackFunction) {
	$(id1).css({'background-color' : ''});
	$(id2).css({'background-color' : 'yellow'});
	liTyping(text, function() {
		callBackFunction();
	});
}
function liTyping(text, callBackFunction) {
	$('.introjs-tooltiptext ul').append('<li></li>');
	typing('.introjs-tooltiptext li:last', text, function() {
		callBackFunction();
	});
}

function positonNodeAnimInCode(id1, id2, scrollID, callBackFunction) {
	$('#codeDiv').scrollTo('#positionDiv ' + scrollID, 300);
	$('#algorithmDiv').scrollTo(id1, 300, function() {
		codeDivAnim(id1, id2, function() {
			callBackFunction();
		});
	});
}

function codeDivAnim(id1, id2, callBackFunction) {
	$(id1).effect('highlight', {color: 'yellow'}, 1400);
	transWithZoomInEffect(id1, id2, function() {
		callBackFunction();
	});
}

function algorithmColorAnim() {
	$('#algorithmDiv yy').removeClass('ct-fonts').addClass('ct-blue-color');
	$('#algorithmDiv .brn').removeClass('ct-fonts ct-blue-color').addClass('ct-brown-color');
	$('#algorithmDiv .grn').removeClass('ct-fonts ct-blue-color').addClass('ct-green-color');
}

function algorithmAnim(id1, id2, callBackFunction) {
	algorithmColorAnim();
	$('#algorithmDiv').scrollTo(id1 + ' span:last', 300, function() {
		$('#algorithmDiv ' + id2).parent().removeClass('opacity00');
		transWithZoomInEffect('.introjs-tooltiptext ' + id2, '#algorithmDiv ' + id2, function() {
			callBackFunction();
		});
	});
}

function frLoopAnimText(text, val, callBackFunction) {
	liTyping(text, function() {
		$('#algorithmDiv #ul4').append('<li class="opacity00">' + text + '</li>');
		$('#algorithmDiv #l' + val).addClass('opacity00');
		callBackFunction();
	});
}
	
function tempararyNodeDec(val, callBackFunction) {
	$('#tempBox' + val).attr('data-original-title' , '');
	animatedTooltip('#tempBox' + val, "top", "Address of the first node.");
	zoomInEffect('#tempNodeParent' + val, function() {
		fromEffectWithTweenMax('#firstVal', '#tempNode' + val, true, function() {
			svgAnimatingLineTopAndBottom('#tempNodeParent' + val, '#nextDiv1', 'line1' + (val + 1), true, function() {
				callBackFunction()
			});
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
		posOneValidationAnim();
	} else {
		posTwoValidationAnim();
	}
}

function nodeAnim(val, val1, callBackFunction) {
	nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
		$('#node' + val).removeClass('opacity00');
		TweenMax.from("#node"+ val, 1, {top : -30, onComplete:function() {
			zoomInEffect('#tempNodeParent' + val1, function() {
				fromEffectWithTweenMax('#dataAddress' + val, '#tempNode' + val1, true, function() {
					svgAnimatingLineTopAndBottom('#tempNodeParent' + val1, '#nextDiv' + val, 'line11', true, function() {
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
	algorithmColorAnim();
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
	svgLineAppend(svgLineId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}