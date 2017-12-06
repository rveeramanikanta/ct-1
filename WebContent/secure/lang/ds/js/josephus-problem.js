var intro, printfCount = 1, nodeCount = 1, lineCount = 1;
var arr = ["sName", "i", "n"], dummmyArr = ["q", "temp", "first"];
function josephusProblemReady() {
	$('pre div').addClass('position-css');
	for (var i = 0; i < 3; i++) {
		appendVariables(arr[0]);
		appendVariableNodes(dummmyArr[0], "main");
		arr.shift();
		dummmyArr.shift();
	}
	svgAppend();
	initIntroJS();
	/*for (var i = 1; i < 13; i++) {
		appendListNodes(i);
		$('#output').append(' --> ' + $('#name' + i).text());
	}*/
}

function preBtnEvent() {
	//$('#includePre').parent().mouseout(function () {
	$('.introjs-button').click(function () {
		$('#includePre').parent().css({'display': 'none'});
		$('#includeBtn').css({'display': 'inline'});
		introjs.refresh();
	});
	$('#includeBtn').click(function () {
		$('#includePre').parent().css({'display': 'inline'});
		$('#includeBtn').css({'display': 'none'});
		introjs.refresh();
	});
}

function appendVariables(varName) {
	$('#variablesDiv').append('<div class="col-xs-2 text-center padding0 opacity00" id="' + varName + 'VarDec"><b>'
			 			+ varName + '</b> <b>=</b> <b class="border-css"><span id="' + varName + 'VarVal">' + varName + '</span></b></div>');
	if (varName == "sName") {
		$('#sNameVarDec').removeClass('col-xs-2').addClass('col-xs-3');
	}
	$('#' + varName + 'VarVal').addClass('opacity00 position-css');
	$('#variablesDiv > div:not(:first)').addClass('margin-top15');
}

function appendVariableNodes(nodeNme, subNme) {
	var sub = subNme.charAt(0).toUpperCase() + subNme.substring(1, subNme.length); 
	$('#variableNodesDiv').append('<div class="col-xs-1 text-center padding0 margin-left opacity00" id="' + nodeNme + 'VarDec' + sub + '">'
							+ '<div class="col-xs-12 box" id="' + nodeNme + sub + '">'
							+ '<span id="' + nodeNme + 'Val' + sub + '" class="brown-color">1248</span></div>'
							+ '<div class="col-xs-12 green-color padding0">' + nodeNme + '<sub>' + subNme + '</sub></div></div>');
	$('#' + nodeNme + 'Val' + sub).addClass('opacity00 position-css');
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function appendListNodes(count) {
	var randomAddress = getRandomInt(1000, 5000);
	var x = '<div class="col-xs-2 nodes opacity00" id="node' + count + '" style="top: 0px; width: auto;">'
			+ ' <div class="col-xs-12 padding0"><div class="col-xs-8 blue-color padding0 text-center">name</div>'
			+ ' <div class="green-color text-center">next</div></div>'
			+ ' <div id="nodedata' + count + '" class="data-nodes"><div id="nameDiv' + count + '" class="div-border left-radius col-xs-6 name-div">'
			+ ' <span id="name' + count +'" class="name-span position-css blue-color opacity00" style="top: 3px;"></span></div>'
			+ ' <div id="nextDiv' + count +'" class="position-css div-border right-radius col-xs-6 next-div">'
			+ ' <span id="next' + count +'" class="position-css next-span green-color position-css opacity00" style="top: 2px;">NULL</span></div>'
			+ ' </div><div class="col-xs-12 padding0"><div class="col-xs-8 padding0 text-center">'
			+ ' <span id="dataAddress' + count + '" class="position-css data-address padding0 brown-color">' + randomAddress 
			+ ' </span></div></div></div>';
	if ($('.nodes').length < 6) {
		$('#row1').append(x);
	} else {
		(count == 7) ? $('#row2').addClass('margin-top15') : '';
		$('#row2').append(x);
	}
}

function initIntroJS() {
	introjs = introJs();
	introjs.setOptions({
		keyboardNavigation: false,
		showStepNumbers: false,
		showBullets: false,
		exitOnOverlayClick: false,
		exitOnEsc: false,
		steps : [ {
				element : '#headingSection',
				intro : '',
				position : 'right'
			}, {
				element : '#includePre',
				intro: '',
				tooltipClass: 'hide'
		} ]
	});
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		switch(elementId) {
			case "headingSection":
				text = "Josephus problem";
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();
				});
			break;
			case 'strCmpWhileLoop':
			case 'mainPre':
			case 'includePre':
				var stepId;
				if (elementId == 'strCmpWhileLoop') {
					$('.zindex-css, .background-yellow').removeClass('background-yellow zindex-css');
					stepId = '#strCmpCond';
					$('.user-txt:last').attr('disabled', 'disabled');
				} else {
					$('#codeDiv').removeClass('opacity00');
					stepId = (elementId == 'includePre') ? '#structDec' : '#nodesDecInMain';
				}
				helperLayerWithCustomSTep(stepId, '', 'show', 'right');
			break;
			case 'structDec':
				$('.introjs-helperLayer').one('transitionend', function() {
					text = 'This is the declaration of a new struct type <y>list</y>.<br>'
					    	+ ' <ul><li><y>name</y> field is used to hold the <y>name</y> inside the linked list.</li>'
					    	+ '<li><y>next</y> field is used to keep the <y>address of next node</y>.</ul>';
					typing('.introjs-tooltiptext', text, function() {
						nextStepWithBtn('#typeDefDec', '', 'show');
					});
				});
			break;
			case 'typeDefDec':
				$('.introjs-helperLayer').one('transitionend', function() {
					text = 'The <y>typedef</y> creates a <y>node</y> as a new type <y>pointer</y> to <y>struct list</y>.';
					typing('.introjs-tooltiptext', text, function() {
						nextStepWithBtn('#mainPre', '', 'hide');
						$('#mainPre').removeClass('hide');
					});
				});
			break;
			case 'nodesDecInMain':
				$('#includePre').parent().css({'display': 'none'});
				$('#includeBtn').css({'display': 'inline'});
				preBtnEvent();
				introjs.refresh();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltiptext').append('<ul></ul>');
					text = 'Let us declare three int variables <y>q</y>, <y>temp</y>, <y>first</y>.';
					movingArrowWithLiTyping('#mainPre', '#nodesDecInMain span:first', '#nodesDecInMain span:first', text, function() {
						text = 'Let us initialize <y>first</y> with <y>NULL</y>.';
						movingArrowWithLiTyping('#mainPre', '#nodesDecInMain span:first', '#nodesDecInMain span:last', text, function() {
							nextStepWithBtn('#animationDiv', 'decQTempFirst', 'hide');
						});
					});
				});
			break;
			case 'endSNmeIAndNDec':
				$('.zindex-css').removeClass('zindex-css');
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltiptext').append('<ul></ul>');
					text = 'Let us declare a variable <y>sName</y> of type <y>char</y>.';
					movingArrowWithLiTyping('#mainPre', '#nodesDecInMain span:last', '#endSNmeIAndNDec span:eq(0)', text, function() {
						text = 'Let us declare two variable <y>i</y> and <y>n</y> of type <y>int</y>.';
						movingArrowWithLiTyping('#mainPre', '#endSNmeIAndNDec span:eq(0)', '#endSNmeIAndNDec span:eq(1)', text, function() {
							nextStepWithBtn('#animationDiv', 'decEndSnameIN', 'hide');
						});
					});
				});
			break;
			case 'animationDiv':
				$('#animationDiv').removeClass('opacity00');
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				$('.introjs-helperLayer').one('transitionend', function() {
					switch(animateStep) {
						case 'decQTempFirst':
							$('.background-yellow').removeClass('background-yellow');
							$('#nodesDecInMain').addClass('zindex-css');
							arr = ['#qVarDecMain', '#tempVarDecMain', '#firstVarDecMain', '#firstValMain'];
							dummmyArr = ['first', 'first', 'first', 'last'];
							recursiveZoomIn('#nodesDecInMain span:', 0, function() {
								customIntroNextStep('#endSNmeIAndNDec', '', 'show', 'right');
							});
						break;
						case 'decEndSnameIN':
							$('.background-yellow').removeClass('background-yellow');
							$('#endSNmeIAndNDec').addClass('zindex-css');
							arr = ['#sNameVarDec', '#iVarDec', '#nVarDec'];
							dummmyArr = ['first', 'eq(1)', 'eq(1)'];
							recursiveZoomIn('#endSNmeIAndNDec span:', 0, function() {
								customIntroNextStep('#printf1', 'enterSoldierName', 'hide');
							});
						break;
						case 'storeScanfVal':
							$('#sNameVarVal').text($('.user-txt:last').val())
							fromEffectWithTweenMax('.user-txt', '#sNameVarVal', function() {
								if ($('input').length == 1) {
									customIntroNextStep('#strCmpWhileLoop', '', 'hide');
								} else {
									customIntroNextStep('#strCmpCond', '', 'show', 'right');
								}
							});
						break;
						case 'nodeMemAllo':
							text = 'Let us assume <y>malloc()</y> allocates a memory to its members <y>name</y> and <y>next</y> at address'
									+ ' <y>' + $("#dataAddress" + nodeCount).text().trim() +'</y>.';
							typing('.introjs-tooltiptext' , text, function() {
								appendNextButton('displayNodeNameAndNext');
							});
						break;
					}
				});
			break;
			case 'printf' + printfCount :
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				$('.introjs-helperLayer').one('transitionend', function() {
					switch(animateStep) {
						case 'enterSoldierName':
							$('.zindex-css, .background-yellow').removeClass('background-yellow zindex-css');
							$('.arrow').remove();
							$('#printf' + printfCount).addClass('zindex-css');
							$('#output').append('<div class="opacity00">Enter Name of the Soldier : '
										+ ' <input class="user-txt" maxlength="10" size="10"/></div>');
							customIntroNextStep('#outputDiv', 'enterSodierNme', 'show', 'left');
						break;
					}
				});
			break;
			case 'outputDiv':
				$('#outputDiv').removeClass('opacity00');
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				$('.introjs-helperLayer').one('transitionend', function() {
					switch(animateStep) {
						case 'enterSodierNme':
							$('#outputDiv div:last').removeClass('opacity00');
							typing('.introjs-tooltiptext', 'Enter name of the soldier', function() {
								introNextSteps('#animationDiv', 'storeScanfVal', 'hide');
								validation();
							});
						break;
					}
				});
			break;
			case 'strCmpCond':
				$('.user-txt:last').attr('disabled', 'disabled');
				$('.introjs-helperLayer').one('transitionend', function() {
					text = '<span class="ct-code-b-yellow opacity00" id="mainCond"><span id="fstVal">strcmp(<span id="secondVal">'
							+ 'sName</span>, "end")</span> != 0</span>';
					$('.introjs-tooltiptext').append(text);
					$('.introjs-tooltiptext span').addClass('position-css');
					fromEffectWithTweenMax('#strCmpCond', '#mainCond', function() {
						callingNextButton(function() {
							flipEffect('#secondVal', "\"" + $('#sNameVarVal').text() + "\"", function() {
								var value = $('#sNameVarVal').text().toLowerCase().localeCompare("end");
								flipEffect('#fstVal', value, function() {
									appendCondCheckingText((value != 0), 'while-loop', function() {
										nextStepWithBtn('#allocMemory', '', 'show');
									});
								});
							});
						});
					});
				});
			break;
			case 'allocMemory':
				$('.introjs-helperLayer').one('transitionend', function() {
					text = '<ul><li class = "opacity00" id="li1">The <y>sizeof(struct list)</y> returns the size '
							+ ' occupied by a list node which contains <y>two</y> fields <y>name</y> and <y>next</y>.</li>'
							+ ' <li class = "opacity00" id="li2">The <y>malloc()</y> function allocates memory <y>dynamically</y>'
							+ ' to the size that is occuiped by the <y>list</y> return by the above statement.</li>'
							+ ' <li class = "opacity00" id="li3">The address returned by the <y>malloc()</span> is '
							+ ' stored in <y>temp</y>.</li></ul>'
					$(".introjs-tooltiptext").append(text);
					TweenMax.to('#li1', 1, {opacity: 1, onComplete: function() {
						TweenMax.to('#li2', 1, {opacity: 1, onComplete: function() {
							TweenMax.to('#li3', 1, {opacity: 1, onComplete: function() {
								appendListNodes(nodeCount);
								//nodeCount++;
								nextStepWithBtn("#animationDiv", "nodeMemAllo", 'show');
							}});
						}});
					}});
				});
			break;
		}
	});
	introjs.start();
}

function displayNodeNameAndNext() {
	$('.user-btn').remove();
	var address = $("#dataAddress" + nodeCount).text();
	$('#node' + nodeCount).removeClass('opacity00');
	TweenMax.from($('#node' + nodeCount), 1, {top : -50, onComplete: function() {
		text = 'Now, the <y>address</y> (i.e., <y>' + address +'</y>) of the memory allocated by the <y>malloc()</y> method is stored in <y>temp</y>.';
		typing('.introjs-tooltiptext' , text, function() {
			callingNextButton(function() {
				$('#tempValMain').text(address);
				fromEffectWithTweenMax('#dataAddress' + nodeCount, '#tempValMain', function() {
					svgAnimatingLineTopAndBottom('#tempMain', '#nextDiv' + nodeCount, 'line' + lineCount, true, function() {
						nextStepWithBtn('#assignNameNextVal', '', 'show', 'right');
					});
				});
			});
		});
	}});
}

function typing(typingId, typingContent, callBackFunction) {
	$(typingId).typewriting(typingContent, {
		'typing_interval' : '1',
		'cursor_color' : 'white'
	}, function() {
		$(typingId).removeClass('typingCursor');
		callBackFunction();
	});
}

function liTyping(text, callBackFunction) {
	$('.introjs-tooltiptext ul').append('<li></li>');
	typing('.introjs-tooltiptext li:last', text, function() {
		callBackFunction();
	});
}

function movingArrowWithLiTyping(parentId, fromId, toId, text, callBackFunction) {
	arrow(parentId, fromId, toId, function() {
		liTyping(text, function() {
			callBackFunction();
		});
	});
}

function zoomInWithHighlight(selector1, selector2, callBackFunction) {
	$('.background-yellow').removeClass('background-yellow');
	$(selector1).addClass('background-yellow');
	zoomInEffect(selector2, function() {
		callBackFunction();
	});
}

function introNextSteps(stepName, animatedStep, tooltip, position) {
	$('.introjs-disabled').removeClass('introjs-disabled');
	var newStep = {
			element : stepName,
			intro : '',
			animateStep : animatedStep,
			tooltipClass : tooltip,
			position : position
	}
	introjs.insertOption(introjs._currentStep + 1, newStep);
}

function nextStepWithBtn(stepName, animatedStep, tooltip, position) {
	introNextSteps(stepName, animatedStep, tooltip, position);
	$('.introjs-nextbutton').show();
}

function customIntroNextStep(stepName, animatedStep, tooltip, position) {
	introNextSteps(stepName, animatedStep, tooltip, position);
	setTimeout(function() {
		introjs.nextStep();
	}, 800);
}

function helperLayerWithCustomSTep(stepName, animatedStep, tooltip, position) {
	$('.introjs-helperLayer').one('transitionend', function() {
		customIntroNextStep(stepName, animatedStep, tooltip, position);
	});
}

function appendNextButton(methodName) {
	$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="' + methodName + '()">Next &#8594;</a>');
}

function callingNextButton(callBackFunction) {
	$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn">Next &#8594;</a>');
	$('.user-btn').click(function() {
		$('.user-btn').remove();
		callBackFunction();
	});
} 

function recursiveZoomIn(parentId, i, callBackFunction) {
	if (i < arr.length) {
		$(parentId + dummmyArr[i]).effect('highlight', {color: 'yellow'}, 1000);
		zoomInWithHighlight(parentId + dummmyArr[i], arr[i], function() {
			recursiveZoomIn(parentId, ++i, callBackFunction);
		});
	} else {
		arr = dummmyArr = [];
		callBackFunction();
	}
}

function appendCondCheckingText(flag, flagText, callBackFunction) {
	$('.introjs-tooltiptext').append('<br><div id="appendText"></div>')
	if (flag) {
		text = '<y>true</y>. Hence control enters into the <y>' + flagText + '-block</y>.'
	} else {
		text = '<y>false</y>. Hence control comes out of the <y>' + flagText + '-block</y>.'
	}
	typing('#appendText', 'Condition evaluates to ' + text, function() {
		callBackFunction();
	});
}

function appendCondText(text1, cond, text2, flag, val1, val2) {
	$(id).append('Now check the condition : <br><span id="mainCond" class="ct-code-b-yellow"><span id="fstVal"> ' + text1 +  '</span>' + cond 
			+ '<span id="secondVal">' + text2 + '</span></span>');
	$(id + ' span').addClass('position-css');
	flipEffect('#firstVal', val1, function() {
		if (flag) {
			flipEffect('#secondVal', val2, function() {});
		}
		setTimeout(function() {
			if (eval(val1 + cond + val2)) {
			} else {
			}
		}, 800);
	});
}

function flipEffect(selector, val, callBackFunction) {
	$(selector).effect('highlight', {color: 'yellow'}, 500, function() {
		TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete: function() {
			$(selector).text(val);
			TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete: function() {
				callBackFunction();
			}});
		}});
	});
}

function zoomInEffect(selector, callBackFunction) {
	$(selector).removeClass('opacity00').addClass('animated zoomIn').one('animationend', function() {
		$(selector).removeClass('animated zoomIn');
		callBackFunction();
	});
}

function fromEffectWithTweenMax(fromId, toId, callBackFunction) {
	var l1 = $(fromId).offset();
	var l2 = $(toId).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	$(toId).removeClass('opacity00');
	TweenMax.from($(toId), 1, {top: topLength, left: leftLength, onComplete: function() {
		callBackFunction();
	}});
}

function arrow(parentId, fromId, toId, callBackFunction) {
	$('.arrow').remove();
	$('.background-yellow').removeClass('background-yellow');
	$(toId).addClass('background-yellow');
	$(parentId).append("<i class='fa fa-arrow-right arrow animated' style='position: absolute; z-index: 10000000;'></i>");
	var l = $(fromId).offset();
	$('.arrow').offset({'top': l.top, 'left': l.left - ($('.arrow').outerWidth())});
	var l1 = $(fromId).offset();
	var l2 = $(toId).offset();	
	var topLength = parseInt($('.arrow').css('top')) + (l2.top - l1.top);
	var leftLength = parseInt($('.arrow').css('left')) + (l2.left - l1.left);
	TweenMax.to('.arrow', 0.5, { top : topLength, left : leftLength, onComplete: function() {
		if (typeof callBackFunction === 'function') {
			callBackFunction();
		}
	}});
}

function validation() {
	$('.user-txt:last').focus();
	$('.user-txt').keydown(function(e) {
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
	});
	$('.user-txt').keyup(function(e) {
		if ($(this).val().length > 0) {
			$('.introjs-nextbutton').show();
			if (e.keyCode == 13) {
				introjs.nextStep();
			}
		} else {
			$('.introjs-nextbutton').hide();
		}
	});
}

function svgAppend() {
	var code = '<svg class="svg-css" id="svgId"></svg>';
	$('#animationDiv').append(code);
	svgMarkerAppend();
}

function svgMarkerAppend(curve) {
	var marker = document.createElementNS("http://www.w3.org/2000/svg", 'marker');
	marker.setAttribute('id', 'arrow');
	marker.setAttribute('refX', '5');
	marker.setAttribute('refY', '2.5');
	marker.setAttribute('markerWidth', '5');
	marker.setAttribute('markerHeight', '5');
	marker.setAttribute('orient', 'auto');
	marker.style.fill = 'gray';
	$('#svgId').append(marker);
	var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	path.setAttribute("d", "M0,0 L5,2.5 L0,5 Z");
	$('#arrow').append(path);
}

function svgLineAppend(svgLineId, x1, y1, x2, y2) {
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	line.setAttribute("id", svgLineId);
	line.setAttribute("class", "svg-line lines");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	line.style.markerEnd = 'url("#arrow")';
	$('#svgId').append(line);
}

function svgAnimatingLineRightAndLeft(selector1, selector2, svgLineId, lineFlag, callBackFunction) {
	var parentOffset = $('#animationDiv').offset();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	var x1, x2;
	if (lineFlag) {	//RightToLeft
		x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
		x2 = $(selector2).offset().left - parentOffset.left;
	} else {	//LeftToRight
		x1 = $(selector1).offset().left - parentOffset.left;
		x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
	}
	lineAnimation(svgLineId, x1, y1, x2, y2, callBackFunction);
}

function svgAnimatingLineTopAndBottom(selector1, selector2, svgLineId, lineFlag, callBackFunction) {
	var parentOffset = $('#animationDiv').offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y1, y2;
	if (lineFlag) {	//TopToBottom
		y1 = $(selector1).offset().top - parentOffset.top;
		y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight();
	} else { //BottomToTop
		y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight();
		y2 = $(selector2).offset().top - parentOffset.top;
	}
	lineAnimation(svgLineId, x1, y1, x2, y2, callBackFunction);
}

function lineAnimation(svgLineId, x1, y1, x2, y2, callBackFunction) {
	svgLineAppend(svgLineId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}
//svgCurve('#node1', '#nameDiv1');
function svgCurve(selector1, selector2) {
	$("polyline").remove();
	var x = ($(selector1).offset().left - $("#animationDiv").offset().left) + $(selector1).width() + 10;
	var y = ($(selector1).offset().top - $("#animationDiv").offset().top) + $(selector1).outerHeight() / 2;
	var x1 = x + ($(selector1).width() / 5);
	var y1 = y;
	var x2 = x1;
	var y2 = y + 20 - ($(selector1).outerHeight());
	var x3 = ($(selector2).offset().left - $("#animationDiv").offset().left) - ($(selector2).outerWidth() / 3) + 2;
	var y3 = y2;
	var x4 = x3;
	var y4 = ($(selector2).offset().top - $("#animationDiv").offset().top) + $(selector2).outerHeight() / 2;
	var x5 = ($(selector2).offset().left - $("#animationDiv").offset().left);
	var y5 = y4; 		
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'polyline');
	line.setAttribute("class", "svg-line curve");
	var points = x + " " + y + ", " + x1 + " " + y1 + ", " + x2 + " " + y2 + ", " + x3 
				+ " " + y3 + ", " + x4 + " " + y4 + ", " + x5 + " " + y5;  
	line.style.markerEnd = 'url("#arrow")';
	$("#svgId").append(line);
	setTimeout(function() {
		TweenMax.to("polyline", 1, {attr: {points : points}});
	},500);
}













