var introjs, lang;
function addNodesInDCLLReady() {
	dynamicTempNodes(1);
	createDynamicNodes('#fstExplain', 0);
	$('#node0').addClass('col-xs-offset-1');
	createDynamicNodes('#dynamicNodes', 1);
	lang = getURLParameter("lang");
	lang = (lang == undefined) ? "c" : lang;
	
	svgAppend('#animationDiv');
	initIntroJs();
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

function addNodeMethod() {
	$('#codeDiv').append('<br><br><div class="position-css" id="addNodeMethod"><span id="addNodeFun"></span></div');
	if (lang == 'c') {
		$('#addNodeFun').html('node <bl>addNode(int x)</bl> {\n'
							 + '\t<span id="step1"></span>'
							 + '\n\treturn first;\n}');
	} else if (lang == 'cpp') {
		$('#addNodeFun').html('void Dcll::<bl>addNode(int x)</bl> {\n'
				 		+ '\t<span id="step1"></span>\n}');
	}
	$('#step1').html('node temp;\n'
				 + '\t<span id="callCreateNodeMthd">temp = <g>createNode()</g>;</span>\n'
				 + '\ttemp -> data = x;');
	$('#addNodeMethod span').addClass('opacity00');
}


function createNodeMethod() {
$('#codeDiv').append('\n\n<span id="createNodeFun" class="opacity00">node <bl>createNode()</bl> {\n'
					+ '\tnode temp;\n'
					+ '\t<span id="allocMemory"></span>\n'
					+ '\ttemp -> prev = NULL;\n'
					+ '\ttemp -> next = NULL;\n'
					+ '\t<span>return temp;</span>\n'
					+ '} &emsp;</span>\n\n');
}

function initIntroJs() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		showBullets: false,
		steps: [ {
			element: '#headingInDcll',
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
		$('.introjs-button').hide();
		$('.zIndex').not('.introjs-showElement, #headingInDll').css({'z-index': '0'});
		var elementId = targetElement.id;
		switch(elementId) {
			case 'headingInDcll':
				text = 'Here we will learn about <y>addNode()</y> method in a <y>Doubly Circular Linked List</y>.';
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();
				});
			break;
			case 'algorithmDiv':
				$('#algorithmDiv').removeClass('opacity00');
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#codeAndAlgorithmDiv').addClass('box-border');
					text = 'Let us learn about adding a <bl>node</bl> to a <bl>Doubly Circular Linked List(DCLL)</bl>. &emsp;';
					typing('#algorithmDiv', text, function() {
						nextBtnCalling('#algorithmDiv', function() {
							introjs.nextStep();
						});
					});
				});
			break;
			case 'animationDiv':
				$('#animationDiv, .bakcground-yellow').removeClass('opacity00 bakcground-yellow');
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case 'fstDeclaration':
							zoomInEffect('#firstNode', function() {
								animatedTooltip('#firstDiv', "bottom", "first stores the beginning of the linked list");
								$('.introjs-tooltip').removeClass('hide');
								text = '<span id="l1">Let us store the <yy class="ct-fonts brn">beginning of the linked list</yy> in a pointer'
										+ '  variable of type <yy class="ct-fonts b">node</yy> (<bgb>first</bgb>).<br> Since the'
										+ ' <yy class="ct-fonts brn">Linked list</yy> is <yy class="ct-fonts brn">not yet created</yy>'
										+ ' we should initialize it with <yy class="ct-fonts g">NULL</yy>.</span>';
								typing('.introjs-tooltiptext', text, function() {
									$('#algorithmDiv').append('<ul style="list-style-type: circle" id="ul1"></ul>');
									nextBtnCalling('.introjs-tooltipbuttons', function() {
										var selector = '#algorithmDiv';
										tranferAnim(selector, selector + ' ul', text, '.introjs-tooltiptext span', selector + ' #l1', function() {
											introNextSteps('#codeAndAlgorithmDiv', 'fstCreation', 'hide');
											$('.introjs-nextbutton').show();
										});
									});
								});
							});
						break;
						case 'fstListCreation':
							text = '<span id="l2Span">Let us consider the <yy class="ct-fonts brn"><b>steps</b></yy> involved in'
									+ ' <yy class="ct-fonts b">adding</yy> a new '
									+ '<yy class="ct-fonts b">node</yy> for a given value.</span><br><br>Enter a value : '
									+ '<input type="text" class="usr-txt position-css zIndex" size="3" maxlength="3" id="nodeVal" />';
							typing('.introjs-tooltiptext', text, function() {
								validation('#nodeVal', 1);
							});
						break;
					}
				});
			break;
			case 'codeAndAlgorithmDiv':
				$('#algorithmDiv, #codeDiv, .bakcground-yellow').removeClass('z-index10000 opacity00 bakcground-yellow');
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case 'fstCreation':
							$('#codeDiv').append('<span id="fstCreation" class="opacity00">node first = <g>NULL</g>; '
									+ ' <span><i class="fa fa-question-circle fa-1x" id="helpText"	></i></span></span>&emsp;');
							$('#algorithmDiv ul li').effect('highlight', {color: 'yellow'}, 1400);
							transWithZoomInEffect('#l1', '#fstCreation', function() {
								animatedTooltip('#helpText', "bottom", "first stores the beginning of the linked list");
								nextBtnCalling('#fstCreation', function() {
									introNextSteps('#animationDiv', 'fstListCreation', 'show');
									introjs.nextStep();
								});
							});
						break;
						case 'methodCreation':
							addNodeMethod();
							$('#l2Span').effect('highlight', {color: 'yellow'}, 1200);
							transWithZoomInEffect('#l2Span', '#addNodeFun', function() {
								$('#l2Div').css({'background-color' : 'yellow'});
								$('#callCreateNodeMthd').removeClass('opacity00');
								transWithZoomInEffect('#l2Div', '#step1', function() {
									$('#callCreateNodeMthd').css({'background-color' : 'yellow'});
									createNodeMethod();
									$('#codeDiv').scrollTo('#createNodeFun span:last', 500, function() {
										if (lang == 'c') {
											$('#allocMemory').html('temp = (node)malloc(sizeof(<brn>struct list</brn>));');
										} else if (lang == 'cpp') {
											$('#allocMemory').html('temp = <brn>new list</brn>;');
										}
										$('.introjs-tooltip').removeClass('hide');
										text = '<y>createNode()</y> is used to <y>allocate memory</y>.';
										typing('.introjs-tooltiptext', text, function() {
											nextBtnCalling('.introjs-tooltipbuttons', function() {
												transWithZoomInEffect('#callCreateNodeMthd', '#createNodeFun', function() {
													
													$('#allocMemory .brn').addClass('background-yellow');
													$('#callCreateNodeMthd, #l2Div').css({'background-color' : ''});
													introNextSteps('#animationDiv', 'tempToFst', 'show');
													$('.introjs-nextbutton').show();
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

function validationAnim() {
	$('.introjs-tooltiptext').append('<br><br><div id="l2Div"><div>')
	text = '<span id="l2Div">Allocate <yy class="ct-fonts brn">memory</yy> for the new node (<yy class="ct-fonts g">address</yy> of the new node '
			+ 'is stored in <yy class="ct-fonts g">temp</yy>) and store the given value in <yy class="ct-fonts b">data</yy>.</span>';
	typing('#l2Div', text, function() {
		nodeAnim(1, function() {
			nextBtnCalling('.introjs-tooltipbuttons', function() {
				var selector = '#algorithmDiv';
				tranferAnim(selector, selector + ' #ul1', '<span id="l2Span">' + $('#l2Span').html() + '</span>', '.introjs-tooltiptext #l2Span', 
								selector + ' #l2Span', function() {
					$('#algorithmDiv #l2Span').after('<ul style="list-style-type: circle" id="ul2"></ul>');
					selector = '#algorithmDiv';
					setTimeout(function() {
						tranferAnim(selector, selector + ' #ul2', '<span id="l2Div">' + $('#l2Div').html() + '</span>', '.introjs-tooltiptext #l2Div',
									selector + ' #l2Div', function() {
							introNextSteps('#codeAndAlgorithmDiv', 'methodCreation', 'hide');
							$('.introjs-nextbutton').show();
						});
					}, 500);
				});
			});
		});
	});
}

function nodeAnim(val, callBackFunction) {
	nextBtnCalling('.introjs-tooltipbuttons', function() {
		$('#node' + val).removeClass('opacity00');
		TweenMax.from("#node"+ val, 1, {top : -30, onComplete:function() {
			zoomInEffect('#tempNodeParent' + val, function() {
				fromEffect('#dataAddress' + val, '#tempNode' + val, true, function() {
					svgLineTopAndBottom('#animationDiv', '#tempNodeParent' + val, '#nextDiv' + val, 'line11', '', 'top', 'bottom', '', '', '', function() {
						fromEffect('#nodeVal', '#data' + val, false, function() {
							$('#nodeVal').css({'color': 'white'});
							callBackFunction();
						});
					});
				});
			});
		}});
	});
}

function transWithZoomInEffect(selector1, selector2, callBackFunction) {
	transferEffect(selector1, selector2, function() {
		zoomInEffect(selector2, function() {
			callBackFunction();
		});
	});
}

function tranferAnim(selector, parentId, text, selector1, selector2, callBackFunction) {
	$('.bakcground-yellow').removeClass('bakcground-yellow');
	$(parentId).append('<li class="opacity00">' + text + '</li>');
	algorithmDivColors();
	$(selector).addClass('z-index10000');
	transferEffect(selector1, selector2, function() {
		$(selector2).addClass('bakcground-yellow');
		$(selector2).parent().removeClass('opacity00');
		callBackFunction();
	});
}

function typing(typingId, typingContent, callBackFunction) {
	$(typingId).typewriting(typingContent, {
		"cursor_color" : "white",
		"typing_interval" : "1"
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
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

function nextBtnCalling(id, callBackFunction) {
	$(id).append(' <a class="introjs-button user-btn">Next &#8594;</a>');
	$('.introjs-tooltip').scrollTo('.introjs-tooltipbuttons a:last', 300);
	$('.user-btn').click(function() {
		$('.user-btn').remove();
		callBackFunction();
	});
}

function algorithmDivColors() {
	$('#algorithmDiv .brn').addClass('ct-brown-color').removeClass('ct-fonts');
	$('#algorithmDiv .b').addClass('ct-blue-color').removeClass('ct-fonts');
	$('#algorithmDiv .g').addClass('ct-green-color').removeClass('ct-fonts');
}

function zoomInEffect(selector1, callBackFunction) {
	$(selector1).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(selector1).removeClass("animated zoomIn")
		callBackFunction();
	});
}

function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1000 , function() {
		$(selector2).removeClass('opacity00')
		callBackFunction();
	});
}

function dynamicTempNodes(val) {	//temp nodes
	$('#tempDynamicNodes').append('<div class="col-xs-2 col-xs-offset-1 padding0 opacity00" id="tempNodeParent' + val + '">'
						+ '<div class="col-xs-12 box padding0 temp-node" id="tempDiv' + val + '"><span id="tempNode' + val + '"'
						+ ' class="ct-brown-color ct-fonts position-css temp-node-val opacity00">1245</span></div>'
						+ '<div class="text-center col-xs-12 padding0 ct-green-color ct-fonts" id="tempame' + val + '">temp</div></div>');
	animatedTooltip('#tempDiv' + val, "top", "Address of the newly created node");
}

function getRandomInt(min, max) { //random address
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
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


function animatedTooltip(id, position, tooltipText) {
	$(id).addClass('zIndex').attr({"data-placement" : position, "data-original-title" : tooltipText}).tooltip();
}


function validation(selector, val) {
	$(selector).effect('highlight', {color: 'yellow'}, 500).focus();
	$(selector).on('keydown', function(e) {
		var max = $(this).attr('maxlength');
		$('.error-text').remove();
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		if (((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) || (e.keyCode == 13 || e.keyCode == 9)){
			e.preventDefault();
		}
		if ($(this).val().length > max - 1) {
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
			$('.user-btn, .error-text').remove();
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

function fromEffect(selector1, selector2, flag, callBackFunction) {
	var value = flag ? $(selector1).text() : $(selector1).val();
	$(selector2).text(value).addClass('opacity00');
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
