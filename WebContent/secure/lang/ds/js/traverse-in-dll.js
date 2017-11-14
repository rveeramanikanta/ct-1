var lang, introjs, sum = 0, nodeCount = stepCount = 1;

function traverseInDll() {
	svgAppend("#animationDiv", "svgId");
	svgMarkerAppend("#svgId");
	var toolTopText = "This is a temporary node to store the address of node.";
	tooltipDisplay("#temp", "bottom", toolTopText);
	
	for (var i = 1; i < 4; i++ ) {
		createDynamicNodes(i);
	}
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
		$('.introjs-nextbutton, .intorjs-prevbutton').hide();
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
						text = "<ul><li>Let us assume <y>linked is empty</y>. i.e., <bgb>first</bgb> is <y>NULL</y>.</li></ul>";
						typing(".introjs-tooltiptext", text, function() {
							var toolTopText = "first Nodes which stores the starting address of the list";
							tooltipDisplay("#firstDiv", "bottom", toolTopText);
							zoomInEffect('#firstNode', function() {
								appendNextBtn('.introjs-tooltipbuttons', 'ifTempValueIsNull');
							});
						});
					break;
					case "tempNotEqNull" :
						$('#sumVar, #temp').addClass('opacity00');
						$('#ifTempEqNull').removeClass('y')
						$('.introjs-tooltip').removeClass('hide');
						text = "<ul><li>Let us assume <y>linked list</y> can contain <y>more than one node</y>."
								+ "</li><div id='appendDiv'></div></ul>";
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
					var text = 'Let us learn how to <bl>count</bl> the number of nodes in a <brown>Doubly Linked List(DLL)</brown>'
								+ ' <ul><li>Check the condition <bgb>first</bgb> is equal to <g>NULL</g> or not.</li>'
								+ '<li>If it is <brown>TRUE</brown>, then print <brown>List is Empty</brown>.<span id="btn"></span></li></ul>';
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
					var text = '<ul><li>If it is <brown>FALSE</brown>, then take one temporary node <g>last</g> and initialize with the <bgb>first</bgb>'
								+ ' value.</li> <li>Repeat the loop until <g>last</g> is equal to <g>NULL</g>.</li>'
								+ ' <li>If it is <g>not NULL</g> then print the <bl>data</bl> field of <g>last</g> and assign <g>next</g> field of '
								+ ' <g>last</g> to <g>last</g>, otherwise print <g>NULL</g>.<span id="btn"></span></li></ul>';
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
						$('#parentPre').append('<span id="funName"><span id="functionName">node <g>traverse()</g></span> { '
								+ '<span id="ifTempEqNull" class="opacity00">'
								+ '\n\tif (<brown>first == NULL</brown>) {'
								+ '\n\t\t<span id="printf1">printf("<brown>List is Empty.</brown>");</span>'
								+ '\n\t} <span id="whileBody"></span>'
								+'</span>\n}');
						if (lang == 'cpp') {
							$('#functionName').html('void Dll::<g>traverse()</g>');
							$('#printf1').html('cout << "<brown>List is Empty.</brown>";');
						}
						$('#parentPre').removeClass('opacity00');
						$('#algorithmStepsDiv ul:first').effect( "highlight",{color: 'yellow'}, 600, function() {
							transferEffect('#algorithmStepsDiv ul:first','#ifTempEqNull', function() {
								$('#ifTempEqNull').addClass('y').effect( "highlight",{color: 'yellow'}, 600);
								$('#funName').after('<span id="btn"></span>');
								introNextSteps('#animationDiv', 'tempNotEqNull');
								appendNextBtn('#btn', 'moveStep');
							});
						});
					break;
					case "second" :
						$('#whileBody').append('<span id="whileBodyDec"> else {'
											+ '\n\t\tnode last = first;'
											+ '\n\t\twhile (last != NULL) {'
											+ '\n\t\t\t<span id="printf2">printf("%d --> ", last -> data);</span>'
											+ '\n\t\t\tlast = last -> next;'
											+ '\n\t\t}</span>\n\t\t<span id="printf3">printf("NULL\\n");</span>\n\t}');
						if (lang == 'cpp') {
							$('#printf2').html('cout << last -> data << " --> ";');
							$('#printf3').html('cout << "NULL\\n";');
						}
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
				$('.introjs-tooltip').css('min-width','');
				$('#mainDiv').addClass('z-index1000000');
				$("#restartBtn").removeClass('opacity00');
				$('#whileBody').removeClass('y');
				$('.introjs-tooltip').removeClass('hide');
				$('.intorjs-tooltiptext').append('Click to restart.');
				$('#restartBtn').click(function() {
					location.reload();
				});
			break;
			}
		});
	});
	introjs.start();
	$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();
	text = " Here, we will learn how to <y>display</y> nodes data in <y>Doubly Linked List</y>.";
	typing(".introjs-tooltiptext", text, function() {
		$('.introjs-nextbutton').show();
	});
}


function tempEqNull() {
	$('.user-btn, #btn').remove();
	$('.introjs-tooltiptext ul li:last').after('<li></li>');
	text = 'Let us take one temporary node (<y>last</y>) and store the <bgb>first</bgb> value (i.e., <y> ' 
			+  $('#firstVal').text() +'</y>) to <y>last</y>.';
	typing('.introjs-tooltiptext ul li:last', text, function() {
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
				svgAnimatingLineTopAndBottom("#temp", "#prevDiv1", "line11", true, '', function() {
					ifTempValueIsNull();	
				});
			} else {
				ifTempValueIsNull();
			}
		});
	});
}

function ifTempValueIsNull() {
	$('.user-btn, #btn').remove();
	$('.introjs-tooltiptext ul li:last').after('<li></li>');
	text = 'Check if the <bgb>first</bgb> value is <y>NULL</y> or not.';
	typing('.introjs-tooltiptext ul li:last', text, function() {
		appendNextBtn('.introjs-tooltipbuttons', 'ifTempValueIsNullAnimation');
	});
}

function ifTempValueIsNullAnimation() {
	$('.user-btn, #btn').remove();
	$('.introjs-tooltiptext ul li:last').after('<li></li>');
	if ($('#firstVal').text() == "NULL") {
		text = 'Here, the condition evaluates to <y>TRUE</y>. So, display <y>List is Empty.</y>';
		typing('.introjs-tooltiptext ul li:last', text, function() {
			introNextSteps('#algorithmStepsDiv', 'Step'+ stepCount);
			$('.introjs-nextbutton').show();
		});
	} else {
		text = 'Here, the condition evaluates to <y>FALSE</y>. So repeat the loop until <y>last</y> is <y>equal</y> to <y>NULL</y>.<br/>'
				+' If it is <y>TRUE</y> then, print the <y>data</y> filed of the <y>last</y> and also traverse the '
				+ '<y>next</y> field of <y>last</y> to <y>last</y> node. Otherwise, print <y>NULL</y>';
		typing('.introjs-tooltiptext ul li:last', text, function() {
			appendNextBtn('.introjs-tooltipbuttons', 'tempNotNull');
			
		});
	}
}

function tempNotNull() {
	$('#traverseVar > span').css({'font-weight' : 'bold'});
	$('.user-btn, #btn').remove();
	if ($('#tempVal').text() == "NULL") {
		introNextSteps('#algorithmStepsDiv', 'Step'+ stepCount);
		$('.introjs-nextbutton').show();
	} else {
		$('#traverseVar').removeClass('opacity00');
		$('#tempVal').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
			svgAnimatingLineTopAndBottom("#temp", "#prevDiv" + nodeCount, "line111", true, '', function() {
				$('#line111').remove();
				$('#data' + nodeCount).parent().effect( "highlight",{color: 'yellow'}, 600, function() {
					fromEffectWithTweenMax("#ndata" + nodeCount, "#data"+ nodeCount, $("#data" + nodeCount).text(), function() {
						setTimeout(function() {
							$('#ndata' + nodeCount).append('<c>&nbsp;-->&nbsp;</c>');
							zoomInEffect('#ndata' + nodeCount + ' c:last', function() {
								$('#tempVal').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
									svgAnimatingLineTopAndBottom("#temp", "#prevDiv" + nodeCount, "line111", true, '', function() {
										$('#line111').remove();
										$('#next' + nodeCount).parent().effect( "highlight",{color: 'yellow'}, 600, function() {
											fadeInBounceEffectWithTimelineMax("#next" + nodeCount, "#tempVal", "bottom", function() {
												$('#line11').remove();
												if ($('#next' + nodeCount).text() == "NULL") {
													$('#ndata4').append('<c>NULL</c>').addClass('opacity00');
													zoomInEffect('#ndata4', function() {
														tempNotNull();
													});
												} else {
													svgAnimatingLineTopAndBottom("#temp", "#prevDiv" + (nodeCount + 1), "line11", true, '', function() {
														nodeCount++;
														tempNotNull();
													});
												}
											}); 
										});
									});
								});
							});
						},800);
					});
				});
			});
		});
	}
}

function multipleNodes() {
	$('.user-btn, #btn').remove();
	$('#tempVal').text('');
	$('#dynamicNodes .next-span:last').text('NULL');
	$('#dynamicNodes .next-span:first').text($('.data-address').eq(1).text());
	$('#dynamicNodes .next-span').eq(1).text($('.data-address').eq(2).text());
	$('#dynamicNodes .prev-span').eq(1).text($('.data-address').eq(0).text());
	$('#dynamicNodes .prev-span').eq(2).text($('.data-address').eq(1).text());
	setTimeout(function() {
		$('#firstNode').removeClass('opacity00')
		$('#firstVal').text($('.data-address:first').text());
		for (var i = 1; i <= $('#dynamicNodes .nodes').length; i++ ) {
			$('#data' + i).text(i+'0').removeClass('opacity00');
			$('#node'+ i).removeClass('opacity00');
			$('#line' + i).css('opacity', '1');
		}
		regenerateArrows(true);
		appendNextBtn('.introjs-tooltipbuttons', 'tempEqNull');
	},500);
}

function regenerateArrows(flag) {
	for (var i = 1; i <= $('#dynamicNodes .nodes').length; i++) {
		if (i == 1) {
			svgAnimatingLineTopAndBottom("#firstDiv", "#prevDiv1", "line"+ i, false, true);
		} else {
			svgAnimatingLineRightToLeft("#nextDiv"+ (i - 1), "#prevDiv"+ i, "line"+ i, true);
			svgAnimatingLineLeftToRight('#prevDiv' + i, '#nextDiv' + (i - 1), "line1" + i, true);
		}
	}
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

function createDynamicNodes(nodeNum) {	//node
	var randomAddress = getRandomInt(1000, 5000);
	var x = '<div class="col-xs-2 nodes list-nodes opacity00" id="node' + nodeNum + '" style="top: 0px; width: auto;">'
	 				+ ' <div class="col-xs-12 padding00"><div class="col-xs-4 ct-green-color ct-fonts text-center padding00">prev</div>'
					+ ' <div class="col-xs-4 ct-blue-color ct-fonts padding00 text-center">data</div>'
					+ '	<div class="col-xs-4 ct-green-color ct-fonts text-center padding00">next</div></div>'
					+ ' <div id="nodedata' + nodeNum + '"><div id="prevDiv' + nodeNum + '" class="div-border left-radius col-xs-4 prev-div">'
					+ ' <span id="prev' + nodeNum + '" class="prev-span ct-green-color">NULL</span></div>'
					+ ' <div id="dataDiv' + nodeNum + '" class="div-border no-radius col-xs-4 data-div">'
					+ ' <span id="data' + nodeNum + '" class="data-span ct-blue-color opacity00" style="top: 0px; left: 0px;"></span></div>'
					+ ' <div id="nextDiv' + nodeNum + '" class="div-border right-radius col-xs-6 next-div">'
					+ ' <span id="next' + nodeNum + '" class="next-span ct-green-color">NULL</span></div></div>'
					+ ' <div class="col-xs-12 padding00"><div class="col-xs-4 col-xs-offset-4 padding00 text-center">'
					+ ' <span id="dataAddress' + nodeNum + '" class="data-address padding00 ct-brown-color ct-fonts">'+ randomAddress
					+ '</span></div></div></div>';
	$('#dynamicNodes').append(x);
	$('.nodes:last span').addClass('position ct-fonts');
	tooltipDisplay(".data-div", "top", "This is an int data type to hold the user data");
	tooltipDisplay(".next-div", "top", "This is an pointer type to hold the address of the next node");
	tooltipDisplay(".prev-div", "top", "This is an pointer type to hold the previous node's address");
	
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

function fromEffectWithTweenMax(id1, id2, val, callBackFunction) {
	var l1 = $(id2).offset();
	$(id1).html($(id2).text()).offset({
	  "top" : l1.top,
	  "left" : l1.left
	});
	TweenMax.to(id1, 1, {top : 0, left : 0, onComplete: function() {
		$(id1).text(val);
	  if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function fadeInBounceEffectWithTimelineMax(selector1, selector2, pos, callBackFunction) {
	var timelineMax = new TimelineMax();
	$(selector1).parent().effect( "highlight",{color: 'blue'}, 500, function() {
		var l1 = $(selector1).offset();
		var l2 = $(selector2).offset();
		var topLength = l1.top - l2.top;
		var leftLength = l1.left - l2.left;
		$("body").append("<span id='dummy' class='ct-brown-color' style='position: relative;z-index: 9999999;'>" + $(selector2).text() + "</span>");
		$('#dummy').offset({"top": l2.top, "left": l2.left});
		$(selector2).text($(selector1).text());
		TweenLite.from(selector2, 2.8, { ease:  Bounce.easeOut, top:l1.top-l2.top, left :l1.left-l2.left});
		if (pos == "left") {
			TweenLite.to($('#dummy'), 1.5, { ease: Sine.easeOut, left:-150 , delay : 1.1, opacity:0 , onComplete: function() {
				bounceCallBack(selector1, selector2, callBackFunction)
			}});
		} else if (pos == "right") {
			TweenLite.to($('#dummy'), 1.5, { ease: Sine.easeOut, left: 350 , delay : 1.1, opacity:0 , onComplete: function() {
				bounceCallBack(selector1, selector2, callBackFunction)
			}});
		} else {
			TweenLite.to($('#dummy'), 1.5, { ease: Sine.easeOut, top: 50 , delay : 1.1, opacity:0 , onComplete: function() {
				bounceCallBack(selector1, selector2, callBackFunction)
			}});
		}
	});
}

function bounceCallBack(selector1, selector2, callBackFunction) {
	$(selector2).removeAttr("style")
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
	$(selector2).text($(selector1).text());
	$("#animatinDiv").removeAttr("style");			
	$('#dummy').remove();
}

function tooltipDisplay(selector, position, text) {
	$(selector).attr({"data-placement": position, "title": text}).tooltip();
}

function svgAppend(selector, svgId) {
	var code = '<svg class="svg-css" id="' + svgId + '"></svg>';
	$(selector).append(code);
}

function svgMarkerAppend(curve) {
	var marker = document.createElementNS("http://www.w3.org/2000/svg", 'marker');
	marker.setAttribute('id', "arrow");
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
	$("#svgId").append(line);
}

function svgAnimatingLineRightToLeft(selector1, selector2, svgLineId, flag, callBackFunction) {
	var parentOffset = $("#animationDiv").offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	var x2 = $(selector2).offset().left - parentOffset.left;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 1.5;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 1.5;
	lineAnim(svgLineId, x1, y1, x2, y2, callBackFunction);
}

function svgAnimatingLineLeftToRight(selector1, selector2, svgLineId, flag, callBackFunction) {
	var parentOffset = $("#animationDiv").offset();
	var x1 = $(selector1).offset().left - parentOffset.left;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 5;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 5;
	lineAnim(svgLineId, x1, y1, x2, y2, callBackFunction);
}

function svgAnimatingLineTopAndBottom(selector1, selector2, svgLineId, lineFlag, flag, callBackFunction) {
	var parentOffset = $("#animationDiv").offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	if (lineFlag) {
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
	$(typingId).typewriting(typingContent, {
		"typing_interval" : '1',
		"cursor_color" : 'white'
	}, function() {
		typingCallbackFunction();
		$('.introjs-tooltip').scrollTo(typingId, 500);
		$('.introjs-tooltip').show();
	});
}