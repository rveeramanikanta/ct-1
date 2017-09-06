var lang, introjs;

function insertAtBeginInSllReady() {
	createDynamicNodes('#dynamicNodes', 1);
	createDynamicNodes('#dupNode', 2);
	lang = getURLParameter("lang");
	svgAppend("#animationDiv");
	svgMarkerAppend("arrow");
	initIntroJS();
}

function createDynamicNodes(selector, nodeNum) {	//node
	var randomAddress = getRandomInt(1000, 5000);
	$(selector).append('<div class="col-xs-2 nodes opacity00 position-css" id="node' + nodeNum + '" style="top: 0px; width: auto;">'
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

function insertAtBgnMthd() {
	$('#insertBeginMthd').append('<span id="createMthdNme"></span>\n'
								+ '\t<span id="tmpDec">node temp;</span>\n' 
								+ '\t<span id="createMthdCall"></span>\n'
								+ '\t<span id="tmpNxtNl">temp -> next = NULL;</span>\n'
								+ '\t<span id="rtnTmp">return temp;</span>\n'
								+ '<span id="createClose">}</span>\n\n'
								+ '<span id="mthdName"></span>\n'
								+ '\t<span id="mthdTmpDec">node temp;</span>\n'
								+ '\t<span id="createCall">' + $('#l1').html() + '</span>\n'
								+ '\t<span id="tmpData">temp -> data = x;</span>\n'
								+ '\t<span id="fstToTmpNxt">' + $("#l2").html() + '</span>\n'
								+ '\t<span id="tmpToFst">' + $("#l3").html() + '</span>'
								+ '\n<span id="insrtMthdClose">}</span>\n\n');
	if (lang == 'c') {
		$('#mthdName').html('node <g>insertAtBegin(node first, int x) {</g>');
		$('#createMthdNme').html('node <g>createNode()</g> {');
		$('#createMthdCall').html('temp = (node)<brn>malloc(sizeof(struct list));</brn>');
	} else if (lang == 'cpp') {
		$('#mthdName').html('void Sll::<g>insertAtBegin(int x)</g> {');
		$('#createMthdNme').html('node Sll::<g>createNode()</g> {');
		$('#createMthdCall').html('temp = <brn>new list;</brn>');
	}
	$('#insertBeginMthd span').addClass('position-css opacity00')
}

function initIntroJS() {
	introjs = introJs();
	introjs.setOptions({
		showBullets: false,
		showStepNumbers: false,
		keyboardNavigation: false,
		exitOnOverlayClick: false,
		exitOnEsc: false,
		steps: [ {
					element: '#headingInSll',
					intro: ''
				}, {
					element: '#animationDiv',
					animateStep: 'firstNodeCreation',
					intro: '',
					tooltipClass: 'hide'
			} ]
	});
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		$('.introjs-helperLayer').one('transitionend', function() {
			switch(elementId) {
				case "animationDiv":
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case "firstNodeCreation":
							zoomInEffect('#animationDiv', function() {
								fstNodeAnim();
							});
						break;
						case 'tmpNxtToFst':
							$('.introjs-tooltip').removeClass('hide');
							text = 'Now store the <y>first</y> value (i.e., <y>' + $('#firstVal').text() + '</y>) in <y>temp -> next</y>.';
							typing('.introjs-tooltiptext', text, function() {
								nextBtnWithFadeInEffect('#firstVal', '#next1', function() {
									introNextSteps('#algorithmDiv', 'fstInTmpNxt');
									$('.introjs-nextbutton').show();	
								});
							});
						break;
						case 'tmpToFst':
							$('.introjs-tooltip').removeClass('hide');
							text = 'Now store the <y>temp</y> value (i.e., <y>' + $('#tempNode').text() + '</y>) in <y>first</y>.';
							typing('.introjs-tooltiptext', text, function() {
								nextBtnWithFadeInEffect('#tempNode', '#firstVal', function() {
									svgAnimatingLineRightToLeft('#firstDiv', '#dataDiv1', 'line1', 'arrow', function() {
										introNextSteps('#algorithmDiv', 'fstInTmp');
										$('.introjs-nextbutton').show();
									});
								});
							});
						break;
						case 'secndNodeCreation':
							secndNdeAnim();
						break;
					}
				break;
				case 'algorithmDiv':
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case 'memoryAlloc':
							zoomInEffect('#algorithmDiv', function() {
								zoomInEffect('#stepNme', function() {
									$('#algorithmSteps').append('<ul style="list-style-type:circle"></ul>');
									text = '<li><span id="l1">Allocate <brn>dynamic memory</brn>.</span></li>';
									typing('#algorithmSteps > ul', text, function() {
										animationDivStep('#algorithmSteps li', 'tmpNxtToFst');
									});
								});
							});
						break;
						case 'fstInTmpNxt':
							$('#algorithmSteps > ul').append('<li></li>');
							text = '<span id="l2">Store the <bl>first</bl> value in <g>temp -> next</g>.</span>';
							algorithmStepsAnim(text, 'tmpToFst');
						break;
						case 'fstInTmp':
							$('#line11').remove();
							$('#tempNode, #tempNodeParent').addClass('opacity00');
							$('#algorithmSteps > ul').append('<li></li>');
							text = '<span id="l3">Store the <bl>temp</bl> value in <g>first</g>.</span>';
							algorithmStepsAnim(text, 'secndNodeCreation');
						break;
					}
				break;
				case 'insertBeginMthd':
					$('#line3, #dupNode #node2').remove();
					$('#tempNodeParent').addClass('opacity00');
					zoomInEffect('#insertBeginMthd', function() {
						$('.introjs-tooltip').removeClass('hide');
						text = 'Now convert the <y>algorithm</y> to <y>' + lang.toUpperCase() + ' </y> program.'
						typing(".introjs-tooltiptext", text, function() {
							nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
								convertingAlgorithmToCodeAnim();
							});
						});
					});
				break;
				case 'restartBtn':
					$('.z-index10000').removeClass('z-index10000');
					$('.introjs-tooltip').css({'min-width': '125px'}).removeClass('hide');
					$('#restartBtn').removeClass('opacity00');
					typing('.introjs-tooltiptext', 'Click to restart.', function() {
						$('#restartBtn').click(function() {
							location.reload();
						});
					});
				break;
			}
		});
	});
	introjs.start();
	text = 'Here we will learn about <y>insertAtBegin()</y> method in <y>Single Linked List</y>.';
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-nextbutton').show();
	});
}

function fstNodeAnim() {
	$('.introjs-tooltip').removeClass('hide');
	text = 'Let us learn how to create <y>nodes</y>.<span id="appendText"></span>';
	typing('.introjs-tooltiptext', text, function() {
		$('#appendText').append('<ul><li id="li1" class="opacity00">First time the <y>node pointer</y> variable <y>first</y> is <y>NULL</y>.</li></ul>');
		TweenMax.to('#li1', 0.5, {opacity: 1, onComplete: function() {
			zoomInEffect('#firstNode', function() {
				zoomInEffect('#firstVal', function() {
					nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
						text = '<li id="li2" class="opacity00">Let us create a <y>dynamic memory</y>. Which contains <y>two</y> fields'
								+ ' <y>data</y> and <y>next</y> and the return value will be stored in <y>temp</y>.</li>'
								+ '<li id="li3" class="opacity00">Which returns a value and that value should be stored in <y>temp</y>.</li>';
						$('#appendText ul').append(text);
						TweenMax.to('#li2', 1, {opacity: 1, onComplete: function() {
							TweenMax.to('#li3', 1, {opacity: 1, onComplete: function() {
								nodeCreationAnim(1, function() {
									svgAnimatingLineTopToBottom('#tempNode', '#nextDiv1', 'line11', 'arrow', function() {
										introNextSteps('#algorithmDiv', 'memoryAlloc');
										$('.introjs-nextbutton').show();
									});
								});
							}});
						}});
					});
				});
			});
		}});
	});
}

function secndNdeAnim() {
	$('.introjs-tooltip').removeClass('hide');
	text = 'Repeat the steps.';
	typing('.introjs-tooltiptext', text, function() {
		$('#algorithmDiv').addClass('z-index10000');
		$('#l1').css({'background-color' : 'yellow'});
		$('.introjs-tooltiptext').append('<ul></ul><br><span id="appendText"></span>');
		text = '<li>Let us assume another <y>dynamic memory</y>. Which contains <y>two</y> fields'
				+ ' <y>data</y> and <y>next</y>. Which returns a value and that value should be stored in <y>temp</y>.</li>';
		typing('.introjs-tooltiptext > ul', text, function() {
			nodeCreationAnim(2, function() {
				svgAnimatingLineLeftToRight('#tempNodeDiv', '#nextDiv2', 'line11', 'arrow', function() {
					nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
						$('#l1').css({'background-color' : ''});
						$('#l2').css({'background-color' : 'yellow'});
						text = 'Now store the <y>first</y> value (i.e., <y>' + $('#firstVal').text() + '</y>) in <y>temp -> next</y>.';
						typingWithFade(text, '#firstVal', '#next2', function() {
							svgAnimatingLineRightToLeft('#nextDiv2', '#dataDiv1', 'line2', 'arrow', function() {
								$('#l2').css({'background-color' : ''});
								$('#l3').css({'background-color' : 'yellow'});
								text = 'Now store the <y>temp</y> value (i.e., <y>' + $('#tempNode').text() + '</y>) in <y>first</y>.';
								typingWithFade(text, '#tempNode', '#firstVal', function() {
									$('#line1').remove();
									svgAnimatingLineBottomToTop('#firstDiv', '#dataDiv2', 'line1', 'arrow', function() {
										$('#l3').css({'background-color' : ''});
										text = 'Now rearrange the nodes.';
										typing('#appendText', text, function() {
											nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
												$('line').remove();
												regenerateArrows();
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

function convertingAlgorithmToCodeAnim() {
	zoomInEffect('#mthdName', function() {
		$('#insrtMthdClose').removeClass('opacity00');
		mthdText = 'temp = <bl>createNode();</bl>';
		$('#l1').css({'background-color': 'yellow'});
		transWitFlipAnim('#l1', '#createCall', mthdText, function() { 
			zoomInEffect('#createMthdNme', function() {
				$('#createClose').removeClass('opacity00');
				createNodeCalling(function() {
					$('#l1').css({'background-color': ''});
					mthdText = 'temp -> next = first;';
					transWitFlipAnim('#l2', '#fstToTmpNxt', mthdText, function() {
						mthdText = 'first = temp;';
						transWitFlipAnim('#l3', '#tmpToFst', mthdText, function() {
							zoomInEffect('#mthdTmpDec', function() {
								zoomInEffect('#tmpData', function() {
									if (lang == 'c') {
										$('#tmpToFst').after('\n\t<span id="retnFst" class="position-css opacity00">'
												+ 'return first;</span>');
										zoomInEffect('#retnFst', function() {
											introNextSteps('#restartBtn', '', 'right');
											$('.introjs-nextbutton').show();
										});
									} else if (lang == 'cpp') {
										introNextSteps('#restartBtn', '', 'right');
										$('.introjs-nextbutton').show();
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

function createNodeCalling(callBackFunction) {
	 var arr = ['tmpDec', 'createMthdCall', 'tmpNxtNl', 'rtnTmp'];
	 createMthdAnim(arr, 0, callBackFunction);
}

function createMthdAnim(arr, i, callBackFunction) {
	if (i < arr.length) {
		zoomInEffect('#' + arr[i], function() {
			i++;
			createMthdAnim(arr, i, callBackFunction);
		});
	} else {
		callBackFunction();
	}
}

function regenerateArrows() {
	TweenMax.to('#node1', 1, {left: '130px', onComplete: function() {
		createDynamicNodes('#dynamicNodes', 2);
		var t = $("#dynamicNodes #node2").detach();//detach is used to remove the selected element and re-inserted.
		$('#node1').before(t);
		$('#dynamicNodes #node2').html($('#dupNode #node2').html());
		$('#node1').css('left', '0');
		var l1 = $('#dupNode #node2').offset();
		var l2 = $('#dynamicNodes #node2').offset();
		var topLength = l1.top - l2.top;
		var leftLength = l1.left - l2.left;
		$('#node2').removeClass('opacity00');
		$('#dupNode #node2').addClass('opacity00');
		TweenMax.from($('#dynamicNodes #node2'), 1, {top: topLength, left: leftLength, onComplete: function() {
			svgAnimatingLineRightToLeft('#firstDiv', '#dataDiv2', 'line1', 'arrow');
			svgAnimatingLineRightToLeft('#nextDiv2', '#dataDiv1', 'line2', 'arrow');
			svgAnimatingLineTopToBottom('#tempNodeDiv', '#nextDiv2', 'line3', 'arrow');
			insertAtBgnMthd();
			introNextSteps('#insertBeginMthd', 'right');
			$('.introjs-nextbutton').show();
		}});
	}});
}

function typingWithFade(text, id1, id2, callBackFunction) {
	$('.introjs-tooltiptext > ul').append('<li></li>');
	typing('.introjs-tooltiptext > ul li:last-child', text, function() {
		nextBtnWithFadeInEffect(id1, id2, function() {
			callBackFunction();
		});
	});
}

function zoomInWithFromEffectAnim(val, callBackFunction) {
	zoomInEffect('#tempNodeParent', function() {
		fromEffectWithTweenMax("#dataAddress" + val, "#tempNode", function() {
			callBackFunction();
		});
	});
}

function nodeCreationAnim(val, callBackFunction) {
	nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
		$('#node' + val).removeClass('opacity00');
		TweenMax.from("#node" + val, 1, {top : -30, onComplete:function() {
			zoomInWithFromEffectAnim(val, function() {
				callBackFunction();
			});
		}});
	});
}

function nextBtnWithFadeInEffect(id1, id2, callBackFunction) {
	nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
		fadeInBounceEffectWithTimelineMax(id1, id2, function() {
			callBackFunction();
		});
	});
}

function algorithmStepsAnim(text, stepId) {
	typing('#algorithmSteps > ul li:last-child', text, function() {
		animationDivStep('#algorithmSteps li:last', stepId);
	});
}

function animationDivStep(id, animateStep) {
	introNextSteps('#animationDiv', animateStep);
	nextBtnWithoutCalling(id, function() {
		introjs.nextStep();
	});
}

function transWitFlipAnim(id1, id2, text, callBackFunction) {
	transferEffect(id1, id2, function() {
		flipEffectWithTweenMax(id2, text, function() {
			callBackFunction();
		});
	});
}

function typing(typingId, typingContent, typingCallbackFunction) {
	$('.typingCursor').removeClass('typingCursor');
	$(typingId).typewriting(typingContent, {
		"typing_interval" : "1",
		"cursor_color": "white"
	}, function() {
		typingCallbackFunction();
		$('.introjs-tooltip').show();
	});
}

function introNextSteps(stepId, animateStep, position) {
	$('.introjs-disabled').removeClass('introjs-disabled');
	var options = {
			element: stepId,
			intro: '',
			tooltipClass: 'hide',
			position: position,
			animateStep: animateStep
	}
	introjs.insertOption(introjs._currentStep + 1, options);
	introjs._options.steps.push({"element" : stepId});
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

function nextBtnWithoutCalling(id, callBackFunction) {
	$(id).append('<a class="introjs-button user-btn">Next &#8594</a>');
	$('.user-btn').click(function() {
		$('.user-btn').remove();
		callBackFunction();
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

function svgAppend(selector) {
	var code = '<svg class="svg-css" id="svgId"></svg>';
	$(selector).append(code);
}

function svgMarkerAppend(svgMarkerId) {
	var marker = document.createElementNS("http://www.w3.org/2000/svg", 'marker');
	marker.setAttribute('id', svgMarkerId);
	marker.setAttribute('refX', '5');
	marker.setAttribute('refY', '2.5');
	marker.setAttribute('markerWidth', '5');
	marker.setAttribute('markerHeight', '5');
	marker.setAttribute('orient', 'auto');
	marker.style.fill = 'gray';
	$('#svgId').append(marker);
	var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	path.setAttribute("d", "M0,0 L5,2.5 L0,5 Z");
	$('#' + svgMarkerId).append(path);
}

function svgLineAppend(svgLineId, markerId, x1, y1, x2, y2) {
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	line.setAttribute("id", svgLineId);
	line.setAttribute("class", "svg-line");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	line.style.markerEnd = 'url("#' + markerId + '")';
	$('#svgId').append(line);
}

function svgAnimatingLineRightToLeft(selector1, selector2, svgLineId, markerId, callBackFunction) {
	var parentOffset = $('#animationDiv').offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}


function svgAnimatingLineTopToBottom(selector1, selector2, svgLineId, markerId, callBackFunction) {
	var parentOffset = $('#animationDiv').offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight();
	svgLineAppend(svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function svgAnimatingLineLeftToRight(selector1, selector2, svgLineId, markerId, callBackFunction) {
	var parentOffset = $('#animationDiv').offset();
	var x1 = $(selector1).offset().left - parentOffset.left;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function svgAnimatingLineBottomToTop(selector1, selector2, svgLineId, markerId, callBackFunction) {
	var parentOffset = $('#animationDiv').offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight();
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y2 = $(selector2).offset().top - parentOffset.top;
	svgLineAppend(svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
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





