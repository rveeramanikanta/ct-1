var lang, introjs, nodeCount = stepCount = 1;

function AddNodesInSLLReady() {
	dynamicTempNodes(1);
	createDynamicNodes(1);
	//structDiv();
	
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
	$('#algorithmDiv').append('<div calss="col-xs-12" id="stepDiv' + nodeCount + '"><div class="col-xs-3 padding3"><span class="step-arrow step'
							+ stepCount +' paddingClass"><span class="step-arrow-text">Condition ' + stepCount + '</span></span></div><div id="stepTyping'
							+ stepCount + '"' + ' class="col-xs-9 padding3"></div></div>');
	typing('#stepTyping' + stepCount, text, function() {
		introNextSteps('#animationDiv', stepName, 'show');
		var t = $('#stepTyping' + stepCount + ' > ul li ul').attr('id');
		introjs.refresh();
		nextBtnWithoutCalling(false, '#' + t + ' li', function() {
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

function createNodeMthd() {
	$('#createMthd').append('<span id="createMthdNme" class="opacity00 position-css">node <g>createNode()</g> {'
							+ '<span id="createMthdParent" class="opacity00 position-css">Allocate dynamic memory'
							/*+ '<span id="createMthd"></span>'
							+ 'temp -> next = NULL;'
							+ 'return temp;</span>'*/
							+ '}</span>');
	if (lang == 'c') {
		$('#createMthd').html('temp = (node)<brn>malloc(sizeof(struct list));</brn>');
	} else if (lang == 'cpp') {
		$('#createMthd').html('temp = <brn>new list;</brn>');
	}
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
					animateStep: 'explainDataNext',
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
						case 'explainDataNext':
							zoomInEffect('#animationDiv', function() {
								$('#data1, #next1').addClass('opacity00');
								$('#node' + nodeCount).removeClass('opacity00');
								TweenMax.from("#node" + nodeCount, 1, {top : -30, onComplete:function() {
									$('.introjs-tooltip').removeClass('hide');
									text = 'This is the <y>node</y>. It contains two fields. They are: ';
									typing('.introjs-tooltiptext', text, function() {
										$('.introjs-tooltiptext').append('<ul><li><y>data</y> filed - Which is entered by the user</li></ul>'
													+ ' <span id="appendText"></span>');
										$('#dataDiv1').addClass('blinking');
										nextBtnWithoutCalling(true, '', function() {
											$('#dataDiv1').removeClass('blinking');
											$('.introjs-tooltiptext > ul').append('<li><y>next</y> filed - Which stores the next node address'
														+ ' or NULL</li>');
											$('#nextDiv1').addClass('blinking');;
												appendNextButton('firstCreation');
										});
									});
								}});
							});
						break
						case 'ifFstIsTmp':
							$('#firstDiv').effect('highlight', {color: 'blue'}, 800, function() {
								text = '<y>first</y> is <y>equal</y> to <y>NULL</y>. Now store the <y>temp</y> value (i.e., <y>' 
										+ $('#dataAddress1').text() + '</y>) in <y>first</y>.';
								typing('.introjs-tooltiptext', text, function() {
									nextBtnWithoutCalling(true, '', function() {
										fadeInBounceEffectWithTimelineMax('#tempNode1', '#firstVal', function() {
											svgAnimatingLineRightToLeft('#animationDiv', '#firstDiv', '#dataDiv1', '#svgId', 'line1', 'arrow', function() {
												$('#stepDiv2').css({'background-color': ''});
												alogorithmSteps('tempInFst');
											});
										});
									});
								});
							});
						break;
						case 'secondNode':
							creatingNode(function() {
								alogorithmSteps('secondNodeStep');
							});
						break;
						case 'lastNodeDec':
							lastNodeCreation(function() {
								alogorithmSteps('lastNodeDec');
							});
						break;
						case 'lstNxtToTmp':
							lstNxtToTmpAnim(function() {
								alogorithmSteps('lastNxtToTmp');
							});
						break;
						case 'thirdNode':
							$('#algorithmDiv').addClass('z-index10000');
							text = 'Repeat the condition 2';
							typing('.introjs-tooltiptext', text, function() {
								$('#secondLi li:first').css({'background-color':'yellow'});
								creatingNode(function() {
									nextBtnWithoutCalling(true, '', function() {
										$('#secondLi li:first').css({'background-color':''});
										$('#secondLi li').eq(1).css({'background-color':'yellow'});
										lastNodeCreation(function() {
											nextBtnWithoutCalling(true, '', function() {
												$('#secondLi li').eq(1).css({'background-color':''});
												$('.introjs-tooltiptext').append('<ul></ul>')
												text = '<li><y>lastNode -> next</y> is <y>not NULL</y>. So store the <y>lastNode</y> value '
														+ '<y>lastNode -> next</y>.</li>';
												typing('.introjs-tooltiptext > ul', text, function() {
													nextBtnWithoutCalling(true, '', function() {
														$('#tempNode2').effect('highlight', {color: 'yellow'}, 800, function() {
															svgAnimatingLineTopToBottom('#animationDiv', '#tempNodeParent2', '#nextDiv1',
																	 '#svgId', 'line222', 'arrow', function() {
																fadeInBounceEffectWithTimelineMax('#next1', '#tempNode3', function() {
																	$('#line23, #line222').remove();
																	svgAnimatingLineTopToBottom('#animationDiv', '#tempNodeParent2', '#nextDiv2',
																			 '#svgId', 'line23', 'arrow', function() {
																		$('.introjs-tooltiptext > ul').append('<li></li>');
																		text = 'Repeat the above step upto <y>lastNode -> next</y> is <y>NULL</y>';
																		typing('.introjs-tooltiptext > ul li:last-child', text, function() {
																			alogorithmSteps('lstToLstNxt');
																		});
																	});
																})
															});
														});
													});
												});
											});
										});
									});
								});
							});
						break;
						case 'WleLstNxtToTmp':
							$('#secondLi li').eq(2).css({'background-color':'yellow'});
							lstNxtToTmpAnim(function() {
								$('#secondLi li').eq(2).css({'background-color':''});
								introNextSteps('#createMthd', '', 'show', 'left');
								$('.introjs-nextbutton').show();
							});
						break;
					}
				break;
				case 'algorithmDiv':
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case 'nodeCreation':
							zoomInEffect('#algorithmDiv', function() {
								text = '<ul class="padding10"><li style="list-style-type:none"><span id="l2">If <bl>first</bl> is <g>NULL</g></span>'
										+ '<ul id="fstLi" class="margin-left"><li><span id="l1">Allocate <brn>dynamic memory</brn>.</span>'
										+ '</li></ul></li></ul>';
								appendSteps(text, 'ifFstIsTmp');
							});
						break;
						case 'tempInFst':
							$('#fstLi').append('<li></li>');
							text = '<bl>first</bl> is <g>equal</g> to <g>NULL</g>.'
									+ '<ul class="margin-left"><li style="list-style-type:none"><span id="l3">Store the '
									+ '<bl>temp</bl> value in <bl>first</bl>.</span></li></ul>';
							typing('#fstLi li:last-child', text, function() {
								$('#stepTyping1 ul:last li:last-child').append('&emsp;<a class="introjs-button user-btn">Next &#8594;</a>');
								introjs.refresh();
								$('.user-btn').click(function() {
									$(this).remove();
									introNextSteps('#animationDiv', 'secondNode');
									$('#line11').remove();
									$('#tempNodeParent1, #tempNode1').addClass('opacity00');
									introjs.nextStep();
								});
							});
						break;
						case 'secondNodeStep':
							text = '<ul class="padding10"><li style="list-style-type:none"><span id="l4">If <bl>first</bl> is <brn>not NULL</brn>'
									+ '</span> <ul id="secondLi"'
									+ ' class="margin-left"><li>Allocate <brn>dynamic memory</brn>.</li></ul></li></ul>';
							appendSteps(text, 'lastNodeDec');
						break;
						case 'lastNodeDec':
							$('#secondLi').append('<li></li>');
							text = '<span id="l5"><bl>lastNode</bl> points to the <bl>first</bl> node and <bl>temp</bl> points to the present node.</span>';
							typing('#secondLi li:last-child', text, function() {
								$('#secondLi li:last-child').append('&emsp;<a class="introjs-button user-btn">Next &#8594;</a>');
								introjs.refresh();
								introNextSteps('#animationDiv', 'lstNxtToTmp');
								$('.user-btn').click(function() {
									$(this).remove();
									introjs.nextStep();
								});
							});
						break;
						case 'lastNxtToTmp':
							$('#secondLi').append('<li style="list-style-type:none"></li>');
							text = 'If <bl>lastNode -> next</bl> is <g>NULL</g>';
							typing('#secondLi li:last', text, function() {
								$('#secondLi li:last').append('<ul class="margin-left"></ul>');
								text = '<li><span id="l7">Store the <bl>temp</bl> value in <bl>lastNode -> next</bl>.</span></li>';
								typing('#secondLi ul:last', text, function() {
									$('#secondLi ul:last li').append('&emsp;<a class="introjs-button user-btn">Next &#8594;</a>');
									introjs.refresh();
									introNextSteps('#animationDiv', 'thirdNode');
									$('.user-btn').click(function() {
										$('#tempNodeParent1, #tempNodeParent2, #tempNode2').addClass('opacity00');
										$('.user, #line12, #line22').remove();
										introjs.nextStep();
									});
								});
							});
						break;
						case 'lstToLstNxt':
							$('#secondLi').append('<li style="list-style-type:none"></li>');
							text = '<span id="l6">If <bl>lastNode -> next</bl> <brn>not NULL</brn></span>';
							typing('#secondLi li:last', text, function() {
								$('#secondLi li:last').append('<ul class="margin-left"></ul>');
								text = '<li><span id="l8"><bl>lastNode</bl> stores the <bl>lastNode -> next</bl> value up to <bl>'
										+ 'lastNode -> next</bl> is <g>NULL</g></span></li>';
								typing('#secondLi ul:last', text, function() {
									$('#secondLi li:last').append('&emsp;<a class="introjs-button user-btn">Next &#8594;</a>');
									introjs.refresh();
									introNextSteps('#animationDiv', 'WleLstNxtToTmp');
									$('.user-btn').click(function() {
										$(this).remove();
										introjs.nextStep();
									});
								})
							});
						break;
					}
				break;
				case 'createMthd':
					$('#line23, #line13, #extraNodesParent').remove();
					introjs.refresh();
					zoomInEffect('#createMthd', function() {
						createNodeMthd();
						text = 'Now convert the above <y>algorithm</y> to <y>' + lang + ' </y> program.'
						typing(".introjs-tooltiptext", text, function() {
							convertinCreateNode();
						});
					});
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

function nextBtnWithoutCalling(flag, id, callBackFunction) {
	if (flag) {
		$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn">Next &#8594</a>');
	} else {
		$(id).append('&emsp;<a class="introjs-button user-btn">Next &#8594</a>');
	}
	$('.user-btn').click(function() {
		$('.user-btn').remove();
		callBackFunction();
	});
}

function appendNextButton(val){
	$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="' + val + '()">Next &#8594</a>');
}

function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).effect( "highlight",{color: 'blue'}, 500, function() {
		$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1000 , function() {
			$(selector2).removeClass('opacity00');
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		});
	});
}

function flipEffectWithTweenMax(selector, val, callBackFunction) {
	setTimeout(function(){
		TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete:function() {
			$(selector).html(val);
			TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
				introjs.refresh();
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
			}});
		}});
	},200);
}

function alogorithmSteps(animateStep) {
	//$('#algorithmDiv').addClass('z-index10000');
	introNextSteps('#algorithmDiv', animateStep, 'hide');
	 $('.introjs-nextbutton').show();
}

function firstCreation() {
	$('.user-btn').remove();
	$('#nextDiv1').removeClass('blinking');
	createDynamicNodes(1);
	$('.nodes:first').remove();
	text = 'Let us learn how to create <y>nodes</y>.<span id="appendText"></span>';
	typing('.introjs-tooltiptext', text, function() {
		$('#appendText').append('<ul><li id="li1" class="opacity00">First time the <y>node pointer</y> variable <y>first</y> is <y>NULL</y>.</li></ul>');
		TweenMax.to('#li1', 0.5, {opacity: 1, onComplete: function() {
			zoomInEffect('#firstNode', function() {
				zoomInEffect('#firstVal', function() {
					nextBtnWithoutCalling(true, '', function() {
						text = '<li id="li2" class="opacity00">Let us create a <y>dynamic memory</y>. Which is stored in <y>temp</y>.</li>'
								+ ' <li id="li3" class="opacity00">Which contains <y>two</y> fields <y>data</y> and <y>next</y>.</li>';
						$('#appendText ul').append(text);
						TweenMax.to('#li2', 1, {opacity: 1, onComplete: function() {
							TweenMax.to('#li3', 1, {opacity: 1, onComplete: function() {
								nextBtnWithoutCalling(true, '', function() {
									$('#node' + nodeCount).removeClass('opacity00');
									TweenMax.from("#node" + nodeCount, 1, {top : -30, onComplete:function() {
										zoomInEffect('#tempNodeParent' + nodeCount, function() {
											fromEffectWithTweenMax("#dataAddress" + nodeCount, "#tempNode" + nodeCount, function() {
												 svgAnimatingLineTopToBottom('#animationDiv', '#tempNodeParent' + nodeCount, '#nextDiv' + nodeCount,
														 '#svgId', 'line1' + nodeCount, 'arrow', function() {
														 alogorithmSteps('nodeCreation');
												 });
											});
										});
									}});
								});
							}});
						}});
					});
				});
			});
		}});
	});
}

function creatingNode(callBackFunction) {
	$('.user-btn').remove();
	nodeCount++;
	createDynamicNodes(nodeCount);
	$('.introjs-tooltiptext').append('<ul></ul>');
	text = '<li>Let us assume another <y>dynamic memory</y> with some <y>address</y>. Which is stored in'
		+ ' <y>temp</y>.</li> ';
	typing('.introjs-tooltiptext > ul', text, function() {
		nextBtnWithoutCalling(true, '', function() {
			$('#node' + nodeCount).removeClass('opacity00');
			TweenMax.from("#node" + nodeCount, 1, {top : -30, onComplete:function() {
				dynamicTempNodes(nodeCount);
				zoomInEffect('#tempNodeParent' + nodeCount, function() {
					fromEffectWithTweenMax("#dataAddress" + nodeCount, "#tempNode" + nodeCount, function() {
						svgAnimatingLineTopToBottom('#animationDiv', '#tempNodeParent' + nodeCount, '#nextDiv' + nodeCount,
									'#svgId', 'line1' + nodeCount, 'arrow', function() {
							$('.introjs-tooltiptext > ul').append('<li></li>');
							text = 'Which contains <y>data</y> and <y>next</y> values like (<y>' + nodeCount
									+ '</y> and <y>NULL</y>).';
							typing('.introjs-tooltiptext > ul li:last-child', text, function() {
								$('.introjs-tooltiptext > ul').append('<li></li>');
								text = '<y>first</y> is <y>not equal</y> to <y>NULL</y>.';
								typing('.introjs-tooltiptext > ul li:last-child', text, function() {
									callBackFunction();
								});
							});
						});
					});
				});
			}});
		});
	});
}

function lastNodeCreation(callBackFunction) {
	var val = nodeCount - 1;
	text = 'Let us declare a <y>lastNode</y>, which is pointing to the <y>first</y> node.';
	typing('.introjs-tooltiptext', text, function() {
		nextBtnWithoutCalling(true, '', function() {
			$('#tempame' + val).text('lastNode')
			zoomInEffect('#tempNodeParent' + val, function() {
				fromEffectWithTweenMax('#firstVal', '#tempNode' + val, function() {
					svgAnimatingLineTopToBottom('#animationDiv', '#tempNodeParent' + val, '#nextDiv1', '#svgId', 'line2' + nodeCount, 'arrow', function() {
						callBackFunction();
					});
				});
			});
		});
	});
}

function lstNxtToTmpAnim(callBackFunction) {
	$('#nextDiv' + (nodeCount - 1)).effect('highlight', {color: 'yellow'}, 800, function() {
		text = '<y>lastNode -> next</y> value is <y> NULL</y>. Now <y>lastNode -> next</y> stores <y>temp</y> value.';
		typing('.introjs-tooltiptext', text, function() {
			nextBtnWithoutCalling(true, '', function() {
				fadeInBounceEffectWithTimelineMax('#tempNode' + nodeCount, '#next' + (nodeCount - 1), function() {
					svgAnimatingLineRightToLeft('#animationDiv', '#nextDiv' +  + (nodeCount - 1), '#dataDiv' + nodeCount,
								'#svgId', 'line' + nodeCount, 'arrow', function() {
						callBackFunction();
					});
				});
			});
		});
	});
}

function convertinCreateNode() {
	zoomInEffect('#createMthdNme', function() {
		transferEffect('#createMthdParent')
	});
}

			