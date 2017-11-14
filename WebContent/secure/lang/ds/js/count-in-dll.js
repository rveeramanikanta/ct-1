var lang, introjs, sum = 0, nodeCount = stepCount = 1;

function countInDll() {
	svgAppend("#animationDiv", "svgId");
	var toolTopText = "This is a temporary node to store the address of node.";
	tooltipDisplay("#temp", "bottom", toolTopText);

	lang = getURLParameter("lang");
	lang = (lang == undefined) ? "c" : lang;
	introFunction();
}


function introFunction() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
			steps : [{
						element :'#headingDiv',
						intro :'',
					},{
						element :'#animationDiv',
						intro :'',
						animateStep: 'tempNodeNull',
						tooltipClass : "hide",
					}]
	});
	introjs.onafterchange(function(targetElement) {
		introjs.refresh();
		var elementId = targetElement.id;
		$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();
		$('.zindex').removeClass('zindex');
		$('.introjs-helperLayer').one('transitionend', function() {
			switch (elementId) {
			case 'animationDiv' :
				$('.tooltopClass').addClass('zindex');
				introjs.refresh();
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
					case 'tempNodeNull': 
						$('.introjs-tooltip').removeClass('hide');
						text = "<ul><li>Let us assume <y>doubly linked is empty</y>. i.e., <bwBg>first</bwBg> is <y>NULL</y>.</li></ul>";
						typing(".introjs-tooltiptext", text, function() {
							tooltipDisplay("#firstDiv", "bottom", "first stores the beginning of the linked list");
							appendNextBtn('.introjs-tooltipbuttons', 'tempEqNull');
						});
					break;
					case "tempNotEqNull" :
						$('#sumVar, #temp').addClass('opacity00');
						$('#ifTempEqNull').removeClass('y')
						$('.introjs-tooltip').removeClass('hide');
						text = "<ul><li>Let us assume <y>linked list</y> contain <y>more than one node</y>.</li><div id='appendDiv'></div></ul>";
						typing(".introjs-tooltiptext", text, function() {
							appendNextBtn('.introjs-tooltipbuttons', 'multipleNodes');
						});
						
					break;
				}
			break;
			case "algorithmStepsDiv" :
				$('.introjs-tooltip').css('height','');
				$('#algorithmStepsDiv').removeClass('opacity00');
				$('.tooltopClass').addClass('zindex');
				$('.zindex').removeClass('zindex');
				introjs.refresh();
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
				case 'Step1':
					$('#s1').addClass('opacity00');
					appendSteps(1);
					var text = 'Let us learn how to <bl>count</bl> the number of nodes in <brown>Doubly Linked List(DLL)</brown>.'
								+ '<ul><li>Let us take one temporary node <g>last</g> and it can be initialized with the <bwBg>first</bwBg> value.</li>'
								+ '<li> Let us take one temporary int variable <bl>sum</bl> and it can be initialized with <bl>0</bl>.</li>'
								+ '<li>Repeat the loop until <g>last</g> is equal to <g>NULL</g>.</li>'
								+ '<li>If it is <brown>false</brown>, then return the <bl>sum</bl>.<span id="btn"></span></li></ul>';
					$('#stepDes1').html(text);
					stepCount++;
					zoomInEffect('#s1', function() {
						introNextSteps('#mainDiv', 'first');
						appendNextBtn('#btn', 'moveStep');
					});
				break;
				case "Step2" :
					$('#s2').addClass('opacity00');
					appendSteps(2);
					var text = '<ul><li>If it is <brown>true</brown>, then <g>increment</g> the <bl>sum</bl> value by <brown>one</brown>'
								+ ' and traverse the <g>next</g> field of <g>last</g> to <g>last</g>.</li><li>Finally, return the '
								+ ' <bl>sum</bl> value as count.<span id="btn"></span></li></ul>';
					$('#stepDes2').html(text);
					stepCount++;
					zoomInEffect('#s2', function() {
						introNextSteps('#mainDiv', 'second');
						appendNextBtn('#btn', 'moveStep');
					});
				break;
				}
			break;
			case "mainDiv" :
				$('#parentPre').removeClass('opacity00');
				$('.zindex').removeClass('zindex');
				introjs.refresh();
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
					case 'first':
						$('#parentPre').append('<span id="funName"><span id="functionName">node <g>count()</g></span> { '
											+ '\n\t<span id="ifTempEqNull" class="opacity00">node last = first;'
											+ '\n\tint sum = 0;'
											+ '\n\twhile (last != NULL) { <span id="whileBody"></span>\n\t}'
											+ '\n\treturn sum;</span>\n}</span>');
						if (lang == 'cpp') {
							$('#functionName').html('int Dll::<g>count()</g>');
						}
						$('#parentPre').removeClass('opacity00');
						$('#algorithmStepsDiv ul:first').effect( "highlight",{color: 'yellow'}, 600, function() {
							transferEffect('#algorithmStepsDiv ul:first','#ifTempEqNull', function() {
								$('#ifTempEqNull').addClass('y').effect( "highlight",{color: 'yellow'}, 600);
								$('#funName').after('<span id="btn"></span>');
								introNextSteps('#animationDiv', 'tempNotEqNull');
								for (var i = 1; i < 4; i++ ) {
									createDynamicNodes(i);
								}
								appendNextBtn('#btn', 'moveStep');
							});
						});
					break;
					case "second" :
						$('#whileBody').append('\n\t\t<span id="whileBodyDec">'
											+ 'sum++;\n\t\tlast = last -> next;</span>');
						$('#whileBody').addClass('opacity00');
						$('#algorithmStepsDiv ul:last').effect( "highlight",{color: 'yellow'}, 600, function() {
							transferEffect('#algorithmStepsDiv ul:last','#whileBody', function() {
								$('#whileBody').addClass('y').effect( "highlight",{color: 'yellow'}, 600);
								$('#funName').after('<span id="btn"></span>');
								introNextSteps('#restartBtn', '', 'right');
								appendNextBtn('#btn', 'moveStep');
							});
						});
					break;
				}
			break;
			case "restartBtn":
				$('#mainDiv').addClass('z-index1000000');
				$("#restartBtn").removeClass('opacity00');
				$('#whileBody').removeClass('y');
				$('.introjs-tooltip').css('min-width','125px').removeClass('hide');
				$('.introjs-tooltiptext').append('Click to restart.');
				$('#restartBtn').click(function() {
					location.reload();
				});
			break;
			}
		});
	});
	introjs.start();
	text = " Here, we will learn how to <y>count</y> the number of nodes in <y>Doubly Linked List</y>.";
	typing(".introjs-tooltiptext", text, function() {
		$('.introjs-nextbutton').show();
	});
}

function appendLiAndTyping(text, callBackFunction) {
	$('.introjs-tooltiptext ul').append('<li></li>');
	typing('.introjs-tooltiptext li:last', text, function() {
		callBackFunction();
	})
}

function tempEqNull() {
	$('.user-btn, #btn').remove();
	if ($('#firstVal').text() == "NULL") {
		zoomInEffect('#firstNode');
	} 
	text = 'Let us take one temporary node (<y>last</y>) and store the <bwBg>first</bwBg> value (i.e., <y> '
		+ $('#firstVal').text() +'</y>) to <y>last</y>.';
	appendLiAndTyping(text, function() {
		appendNextBtn('.introjs-tooltipbuttons', 'lastNodeAnimation');
	});
}

function lastNodeAnimation() {
	$('.user-btn, #btn').remove();
	$('#tempVal').text('');
	zoomInEffect('#temp', function() {
		$('#tempVal').removeClass('opacity00');
		fromEffectWithTweenMax("#tempVal", "#firstVal", $("#firstVal").text(), function() {
			if ($('#tempVal').text() != 'NULL') {
				svgAnimatingLineTopAndBottom("#temp", "#dataDiv1", "line11", true, false, function() {
					sumText();
				});
			} else {
				sumText();
			}
		});
	});
}

function sumText() {
	text = 'Let us take one temporary int variable <y>sum</y> and it can be initialized with value <y>0</y>.';
	appendLiAndTyping(text, function() {
		appendNextBtn('.introjs-tooltipbuttons', 'sumVarInitialization');
	});
}

function sumVarInitialization() {
	$('.user-btn, #btn').remove();
	zoomInEffect('#sumVar', function() {
		text = 'Repeat the loop until <y>last</y> is <y>equal</y> to <y>NULL</y>.';
		appendLiAndTyping(text, function() {
			appendNextBtn('.introjs-tooltipbuttons', 'checkTempNotEqNull');
		});
	});
}

function checkTempNotEqNull() {
	$('.user-btn, #btn').remove();
	if ($('#tempVal').text() != 'NULL') {
		$('.introjs-tooltip').css('height','200');
		text = 'Here, the condition evaluates to <y>true</y>, because <y>last</y> is <y>not equal</y> to <y>NULL</y>. So '
				+ ' increment the <y>sum</y> value by <y>one</y>, then assign <y>next</y> field of <y>last</y> to <y>last</y>. Until '
				+ '<y>last</y> is <y>equal</y> to <y>NULL</y>.';
		appendLiAndTyping(text, function() {
			$('.introjs-tooltiptext').scrollTo('ul li:last', 500);
			appendNextBtn('.introjs-tooltipbuttons', 'tempNotNull');
		});
	} else {
		tempIsNull();
	}
}

function tempIsNull() {
	text = 'Here, the condition evaluates to <y>false</y>, because <y>last</y> is <y>equal</y> to <y>NULL</y>.';
	appendLiAndTyping(text, function() {
		$('.introjs-tooltiptext').scrollTo('ul li:last', 500);
		text = 'Now, return the <y>sum</y> (i.e., <y>'+ sum +'</y>).';
		appendLiAndTyping(text, function() {
			introNextSteps('#algorithmStepsDiv', 'Step'+ stepCount);
			$('.introjs-nextbutton').show();
		});
	});
}

function tempNotNull() {
	$('.user-btn, #btn').remove();
	if ($('#tempVal').text() == "NULL") {
		tempIsNull();
	} else {
		++sum;
		flipEffectWithTweenMax('#sum', sum, function() {
			$('#tempVal').parent().effect( "highlight",{color: 'blue'}, 600, function() {
				svgAnimatingLineTopAndBottom("#temp", "#dataDiv" + nodeCount, "line111", true, false, function() {
					$('#line111').remove();
					$('#next' + nodeCount).parent().effect( "highlight",{color: 'blue'}, 600, function() {
						fadeInBounceEffectWithTimelineMax("#next" + nodeCount, "#tempVal", function() {
							$('#line11').remove();
							if ($('#next' + nodeCount).text() == "NULL") {
								tempNotNull();
							} else {
								svgAnimatingLineTopAndBottom("#temp", "#dataDiv" + (nodeCount + 1), "line11", true, false, function() {
									nodeCount++;
									tempNotNull();
								});
							}
						}); 
					});
				});
			});
		});
	}
}

function multipleNodes() {
	$('.user-btn, #btn').remove();
	$('#tempVal').text('');
	$('.prev-span').eq(1).text($('.data-address').eq(0).text());
	$('.prev-span').eq(2).text($('.data-address').eq(1).text());
	$('.next-span:last').text('NULL');
	$('.next-span:first').text($('.data-address').eq(1).text());
	$('.next-span').eq(1).text($('.data-address').eq(2).text());
	setTimeout(function() {
		$('#firstNode').removeClass('opacity00')
		$('#firstVal').text($('.data-address:first').text());
		for (var i = 1; i <= $('.nodes').length; i++ ) {
			if (i == 1) {
				svgAnimatingLineTopAndBottom("#firstDiv", "#prevDiv1", "line"+ i, false, true);
			} else {
				svgAnimatingLineLeftAndRight("#nextDiv"+ (i - 1), "#prevDiv"+ i, "line"+ i, true, true);
				svgAnimatingLineLeftAndRight('#prevDiv' + i, '#nextDiv' + (i - 1), 'line1' + i, false, true);
			}
			$('#data' + i).text(i + '0').removeClass('opacity00');
			$('#node'+ i).removeClass('opacity00');
			$('#line' + i).css('opacity', '1');
		}
		appendNextBtn('.introjs-tooltipbuttons', 'tempEqNull');
	},500);
}

function appendSteps(i) {
	$('#algorithmStepsDiv').append('<div class="col-xs-12 margin-top-5 padding5" id="s'+ i 
							+ '"><div class="col-xs-12 padding00 position" id="stepDes'+ i +'"></div></div>');
}

function moveStep() {
	$('.user-btn, #btn').remove();
	introjs.nextStep();
}

function introNextSteps(stepName, animatedStep, position) {
	$('.introjs-disabled').removeClass('introjs-disabled');
	var options = {
			element :stepName,
			intro :'',
			position : position,
			tooltipClass : "hide",
			animateStep: animatedStep
	}
	introjs.insertOption(introjs._currentStep + 1, options);
	introjs._options.steps.push({"element" : stepName});
}

function appendNextBtn(id, value) {
	$(id).append('<a class="introjs-button user-btn" onclick="' + value + '()">Next &#8594;</a>');
}

function getURLParameter(sParam) { //choose the language like c or cpp...etc 
	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('&');
	for (var i = 0; i < sURLVariables.length; i++) {
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam) {
			return sParameterName[1];
		}
	}
}

function getRandomInt(min, max) { //generate dynamic memory location (address).
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function createDynamicNodes(nodeCount) { //Create data & next field div.
	var randomAddress = getRandomInt(1000, 5000);
	var x = '<div class="col-xs-2 nodes list-nodes opacity00" id="node' + nodeCount + '" style="top: 0px; width: auto;">'
			+ ' <div class="col-xs-12 padding00"><div class="col-xs-4 ct-green-color ct-fonts text-center padding00">prev</div>'
			+ ' <div class="col-xs-4 ct-blue-color ct-fonts padding00 text-center">data</div>'
			+ '	<div class="col-xs-4 ct-green-color ct-fonts text-center padding00">next</div></div>'
			+ ' <div id="nodedata' + nodeCount + '"><div id="prevDiv' + nodeCount + '" class="div-border left-radius col-xs-4 prev-div">'
			+ ' <span id="prev' + nodeCount + '" class="prev-span ct-green-color">NULL</span></div>'
			+ ' <div id="dataDiv' + nodeCount + '" class="div-border no-radius col-xs-4 data-div">'
			+ ' <span id="data' + nodeCount + '" class="data-span ct-blue-color opacity00" style="top: 0px; left: 0px;"></span></div>'
			+ ' <div id="nextDiv' + nodeCount + '" class="div-border right-radius col-xs-6 next-div">'
			+ ' <span id="next' + nodeCount + '" class="next-span ct-green-color">NULL</span></div></div>'
			+ ' <div class="col-xs-12 padding00"><div class="col-xs-4 col-xs-offset-4 padding00 text-center">'
			+ ' <span id="dataAddress' + nodeCount + '" class="data-address padding00 ct-brown-color">'+ randomAddress
			+ '</span></div></div></div>';
	$('#dynamicNodes').append(x);
	$('.nodes:last span').addClass('position ct-fonts');
	tooltipDisplay(".prev-div", "top", "This is an pointer type to hold the address of the previous node");
	tooltipDisplay(".data-div", "top", "This is an int data type to hold the user data");
	tooltipDisplay(".next-div", "top", "This is an pointer type to hold the address of the next node");
}

function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1000 , function() {
		$(selector2).removeClass('opacity00');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function zoomInEffect(selector1, callBackFunction) {
	$(selector1).removeClass("opacity00").addClass('animated zoomIn').one('animationend', function() {
		$(selector1).removeClass("animated zoomIn");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function flipEffectWithTweenMax(selector, val, callBackFunction) {
	$('#sum').effect('highlight', {color: 'blue'}, 700, function() {
		TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete:function() {
			$(selector).html(val);
			TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
				introjs.refresh();
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
			}});
		}});
	});
}

function fromEffectWithTweenMax(id1, id2, val, callBackFunction) {
	var l1 = $(id2).offset();
	$(id1).html($(id2).text()).offset({"top" : l1.top, "left" : l1.left});
	TweenMax.to(id1, 1, {top : 0, left : 0, onComplete: function() {
		$(id1).text(val);
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
		TweenLite.from(selector2, 2.8, { ease:  Bounce.easeOut, top:l1.top-l2.top, left :l1.left-l2.left});
		TweenLite.to($('#dummy'), 1.5, { ease: Sine.easeOut, top: 50 , delay : 1.1, opacity:0 , onComplete: function() {
			$(selector2 + ', #animationDiv').removeAttr("style");
			$(selector2).text($(selector1).text());
			$('#dummy').remove();
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	});
}

function tooltipDisplay(selector, position, text) {
	$(selector).addClass('zindex').attr({"data-placement": position, "title": text}).tooltip();
}

function svgAppend(selector, svgId) {
	var code = '<svg class="svg-css" id="' + svgId + '"></svg>';
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

function svgLineAppend(svgLineId, x1, y1, x2, y2, flag) {
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	line.setAttribute("id", svgLineId);
	line.setAttribute("class", "svg-line lines");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	if (flag) {
		line.setAttribute("opacity", 0);
	}
	line.style.markerEnd = 'url("#arrow")';
	$(svgId).append(line);
}

function svgAnimatingLineLeftAndRight(selector1, selector2, svgLineId, lineFlag, flag, callBackFunction) {
	var x1, x2, divideVal, parentOffset = $("#animationDiv").offset();
	if (lineFlag) { 	//right to left
		x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
		x2 = $(selector2).offset().left - parentOffset.left;
		divideVal = 1.5;
	} else {
		var x1 = $(selector1).offset().left - parentOffset.left;
		var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
		divideVal = 5;
	}
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / divideVal;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / divideVal;
	lineAnim(svgLineId, x1, y1, x2, y2, callBackFunction);
}

function svgAnimatingLineTopAndBottom(selector1, selector2, svgLineId, lineFlag, flag, callBackFunction) {
	var parentOffset = $("#animationDiv").offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	if (lineFlag) { 	//top to bottom
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

function typing(typingId, typingContent, typingCallbackFunction) {
	$('.typingCursor').removeClass('typingCursor');
	$(typingId).typewriting(typingContent, {
		"typing_interval" : '1',
		"cursor_color" : 'white'
	}, function() {
		typingCallbackFunction();
		$('.introjs-tooltip').scrollTo(typingId, 500);
		$('.introjs-tooltip').show();
	});
}