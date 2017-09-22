
var lang, introjs;

function InsertAtPositionInSllReady() {
	
	createDynamicNodes('#dynamicNodes', 1);
	createDynamicNodes('#dupNode', 2);

	lang = getURLParameter("lang");  
	lang = (lang == undefined) ? "c" : lang;
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
					animateStep: 'posLesThanZero',
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
						case "posLesThanZero":
							zoomInEffect('#animationDiv', function() {
								posLesThanZero();
							});
						break;
						case 'pos1Node':
							$('.introjs-tooltip').removeClass('hide');
							text = 'Let us assume a node, the base address is stored in <y>first</y>.';
							typing('.introjs-tooltiptext', text, function() {
								nodeCreationAnim(1, function() {
									svgAnimatingLineTopToBottom('#tempNode', '#nextDiv1', 'line11', 'arrow', function() {
										fadeInBounceEffectWithTimelineMax('#tempNode', '#firstVal', function() {
											svgAnimatingLineRightToLeft('#firstDiv', '#dataDiv1', 'line1', 'arrow', function() {
												nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
													$('#line11').remove();
													$('#tempNode, #tempNodeParent').addClass('opacity00');
													fstNodeAnim();
												});
											});
										});
									});
								});
							});
						break;
					}
				break;
				case 'algorithmDiv':
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case 'posLesThanZero':
							zoomInEffect('#algorithmDiv', function() {
								zoomInEffect('#stepNme', function() {
									$('#algorithmSteps').append('<ul style="list-style-type: circle"></ul>');
									text = '<li><span id="l1">If <bl>position</b> is <g>less than or equal to zero</g>.</span>'
											+ '<ul class="margin-left" style="list-style-type: none"><li><span id="l2">Print <brn>No such position'
											+ ' in SLL So insertion is not possible</brn></span>  &emsp;</li></ul></li>';
									typing('#algorithmSteps > ul', text, function() {
										animationDivStep('#algorithmSteps #l2', 'pos1Node');
									});
								});
							});
						break;
						case 'memoryAlloc':
							/*$('#algorithmSteps').append('<ul style="list-style-type:circle"></ul>');
							text = '<li><span id="l1">Allocate <brn>dynamic memory</brn>. </span></li>';
							typing('#algorithmSteps > ul', text, function() {
								  animationDivStep('#algorithmSteps li', 'tmpNxtToFst');
							});*/
						break;
					}
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
	text = 'Here we will learn about <y>insertAtPosition()</y> method in <y>Single Linked List</y>.';
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-nextbutton').show();
	});
}

function animationDivStep(id, animateStep) {
	introNextSteps('#animationDiv', animateStep);
	nextBtnWithoutCalling(id, function() {
		introjs.nextStep();
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

function fstNodeAnim() {
	$('.introjs-tooltip').removeClass('hide');
	text = 'Let us <y>insert</y> a node at <y>first</y> position.';
	typing('.introjs-tooltiptext', text, function() {
		text = '<li id="li2" class="opacity00">Let us create a <y>dynamic memory</y>. Which contains <y>two</y> fields'
				+ ' <y>data</y> and <y>next</y>.</li>'
				+ '<li id="li3" class="opacity00">Which returns a value and that value should be stored in <y>temp</y>.</li>';
		$('.introjs-tooltiptext').append('<ul>' + text + '</ul>');
		TweenMax.to('#li2', 1, {opacity: 1, onComplete: function() {
			TweenMax.to('#li3', 1, {opacity: 1, onComplete: function() {
				nodeCreationAnim(2, function() {
					svgAnimatingLineLeftToRight('#tempNodeParent', '#nextDiv2', 'line11', 'arrow', function() {
						nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
							$('.introjs-tooltiptext ul').append('<li></li>');
							text = 'Store the <y>first</y> value (i.e., <y>' + $('#firstVal').text() + '</y>) in <y>temp -> next</y>.'
							typing('.introjs-tooltiptext li:last', text, function() {
								nextBtnWithFadeInEffect('#firstVal', '#next2', function() {
									svgAnimatingLineTopToBottom('#nextDiv2', '#nextDiv1', 'line2', 'arrow', function() {
										nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
											$('.introjs-tooltiptext ul').append('<li></li>');
											text = 'Store the <y>temp</y> value (i.e., <y>' + $('#tempNode').text() + '</y>) in <y>first</y>.'
											typing('.introjs-tooltiptext li:last', text, function() {
												nextBtnWithFadeInEffect('#tempNode', '#firstVal', function() {
													$('#line1').remove();
													svgAnimatingLineBottomToTop('#firstDiv', '#nextDiv2', 'line1', 'arrow', function() {
														rearranging();
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
			}});
		}});
	});
}

function rearranging() {
	$('.introjs-tooltiptext').append('<br>Now rearrange the nodes.');
	nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
		
	});
}

function movingNodes(id1) {
	/*TweenMax.to('#node1', 1, {left: '130px', onComplete: function() {
		createDynamicNodes('#dynamicNodes', 2);
		var t = $("#dynamicNodes #node2").detach();//detach is used to remove the selected element and re-inserted.
		$('#node1').before(t);
		$('#dynamicNodes #node2').html($('#dupNode #node2').html());
		$('#node1').css('left', '0');
		changeIds(function() {
			var l1 = $('#dupNode #node2').offset();
			var l2 = $('#dynamicNodes #node1').offset();
			var topLength = l1.top - l2.top;
			var leftLength = l1.left - l2.left;
			$('#node1').removeClass('opacity00');
			$('#dupNode #node2').addClass('opacity00');
			TweenMax.from($('#dynamicNodes #node1'), 1, {top: topLength, left: leftLength, onComplete: function() {
				
			}});
		});
	}});*/
}
function changeIds1(elementParent, idAttr) {
	$(elementParent).each(function(index) {
      	$(this).attr("id", idAttr + (index + 1));
    	
	});
}

function changeIds(callBackFunction) {
	$('#dynamicNodes .nodes').each(function(index) {
	      $(this).attr("id", "node"+ (index + 1));
	}); 
	changeIds1($("#dynamicNodes .data-nodes"), "nodeData");
	changeIds1($("#dynamicNodes .data-div"), "dataDiv");
	changeIds1($("#dynamicNodes .next-div"), "nextDiv");
	changeIds1($("#dynamicNodes .data-address"), "dataAddress");
	changeIds1($("#dynamicNodes .data-span"), "data");
	changeIds1($("#dynamicNodes .next-span"), "next");
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

function posLesThanZero() {
	$('.introjs-tooltip').removeClass('hide');
	text = 'Let us learn how to create <y>nodes</y>.<span id="appendText"></span>';
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-tooltiptext').append('<ul><li id="li1" class="opacity00">First time the <y>node pointer</y> variable <y>first</y>'
				+ ' is <y>NULL</y>.</li></ul>');
		TweenMax.to('#li1', 0.5, {opacity: 1, onComplete: function() {
			zoomInEffect('#firstNode', function() {
				zoomInEffect('#firstVal', function() {
					nextBtnWithoutCalling('.introjs-tooltipbuttons', function() {
						$('.introjs-tooltiptext ul').append('<li></li>');
						text = 'Let us insert a node at <y>zeroth</y> position.';
						typing('.introjs-tooltiptext ul li:last', text, function() {
							$('.introjs-tooltiptext li:last').append('<li></li>');
							text = 'If <y>position</y> is <y>less than or equal to zero</y> we can\'t insert any nodes.';
							typing('.introjs-tooltiptext li:last', text, function() {
								introNextSteps('#algorithmDiv', 'posLesThanZero');
								$('.introjs-nextbutton').show();
							});
						});
					});
				});
			});
		}});
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
	$(id).append('  <a class="introjs-button user-btn">Next &#8594</a>');
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



