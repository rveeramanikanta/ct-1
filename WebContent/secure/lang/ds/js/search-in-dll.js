var lang, intro, count = sVal = 0, stepCount = nodeCount = 1;
var flag = false;

function searchInDll() {
	lang = getURLParameter("lang");
	svgAppend("#animationDiv", "svgId");
	svgMarkerAppend("#svgId", "arrow");
	$('.radius-50').addClass('position box');
	$('.radius-50').parent().addClass(' text-center opacity00 padding00');
	introFunction();
	var toolTopText = "This is a temporary node to store the address of node.";
	tooltipDisplay("#currentNode", "bottom", toolTopText);
}


function introFunction() {
	intro = introJs();
	intro.setOptions({
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
	intro.onafterchange(function(targetElement) {
		intro.refresh();
		var elementId = targetElement.id;
		$('.introjs-nextbutton').hide();
		$('.zindex').removeClass('zindex');
		$('.introjs-helperLayer').one('transitionend', function() {
			switch (elementId) {
			case 'animationDiv' :
				$('.tooltopClass').addClass('zindex');
				intro.refresh();
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
					case 'tempNodeNull': 
						$('.introjs-tooltip').removeClass('hide');
						text = "<ul><li>Let us assume <y>linked is empty</y>. i.e <bwBg>first</bwBg> is "
								+ " <y>NULL</y>.</li><li>For example user want to <y>search</y> an element (<y>10</y>) in the list.</li></ul>";
						typing(".introjs-tooltiptext", text, function() {
							tooltipDisplay("#firstDiv", "bottom", "first stores the beginning of the linked list");
							zoomInEffect('#firstNode', function() {
								appendNextBtn('.introjs-tooltipbuttons', 'assignElemtoKey');
							});
						});
					break;
					case "tempNotEqNull" :
						count = sVal = 0, nodeCount = 1;
						$('.introjs-tooltip').removeClass('hide');
						text = "<ul><li>Let us assume <y>linked list</y> contain <y>more than one node</y>.</li><div id='appendDiv'></div></ul>";
						typing(".introjs-tooltiptext", text, function() {
							if (flag) {
								sVal = 20;
							} else {
								sVal = 50;
							}
							appendNextBtn('.introjs-tooltipbuttons', 'multipleNodes');
						});
					break;
				}
			break;
			case "algorithmStepsDiv" :
				$('.introjs-tooltip').css('height','');
				$('#algorithmStepsDiv, .zindex').removeClass('opacity00 zindex');
				$('.tooltopClass').addClass('zindex');
				intro.refresh();
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
				case 'Step1':
					$('#s1').addClass('opacity00');
					appendSteps(1);
					var text = '<ul><li>Declare an integer variable <g>key</g> and initialize with user <g>search element</g> to <g>Key</g>.</li>'
								+ ' <li>Check the condition <bwBg>first</bwBg> is equal to <g>NULL</g> or not.</li>'
								+ ' <li>If it is <brown>true</brown>, then display <brown>The given element'
								+ ' is not found in the given SLL</brown>.<span id="btn"></span></li></ul>';
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
					var text = '<ul><li>If it is <brown>false</brown>, then take one temporary node <g>currentNode</g> and initialize with'
								+ ' <bwBg>first</bwBg> value also take two integer variables <brown>count</brown> and <brown>key</brown>,'
								+ ' <g>count</g> will be initialized with the value <g>0</g> and key will be initialize with user search element.</li>'
								+ ' <li>Repeat the loop until the <g>next</g> of <g>currentNode</g> is equal to <g>key</g>.</li>'
								+ ' <li>If <g>key</g> is <brown>not found</brown> then check the another condition the <g>next</g> filed of '
								+ ' <g>currentNode</g> is <g>equal</g> to <g>NULL</g></li><li>If is <g>NULL</g> then display '
								+ ' <brown>The given element is not found in the given SLL</brown>.</li><li>If it is <brown>Not NULL</brown>'
								+ ' <g>increment</g> the count value by <g>one</g> also travers the <g>next</g> field of <g>currentNode</g>'
								+ '  to <g>currentNode</g>.<span id="btn"></span></li></ul>';
					$('#stepDes2').html(text);
					stepCount++;
					zoomInEffect('#s2', function() {
						$('#algorithmStepsDiv').scrollTo('ul li:last', 500);
						introNextSteps('#mainDiv', 'second');
						appendNextBtn('#btn', 'moveStep');
					});
				break;
				case "Step3" :
					$('#s3').addClass('opacity00');
					appendSteps(3);
					var text = '<ul><li>If the <g>key</g> value is <brown>found</brown> then display '
							+ ' <brown>The given element is found at location</brown>.</li><span id="btn"></span></li></ul>';
			$('#stepDes3').html(text);
			stepCount++;
			zoomInEffect('#s3', function() {
				$('#algorithmStepsDiv').scrollTo('ul li:last', 500);
				introNextSteps('#mainDiv', 'three');
				appendNextBtn('#btn', 'moveStep');
			});
				break;
				}
			break;
			case "mainDiv" :
				$('#parentPre').removeClass('opacity00');
				$('.zindex').removeClass('zindex');
				intro.refresh();
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
					case 'first':
						$('#parentPre').append('<span id="funName"><span id="functionName">node <g>search(int element)</g></span> { '
											+ '<span id="ifTempEqNull" class="opacity00">'
											+ '\n\tint key = element;'
											+ '\n\tif (<brown>first == NULL</brown>) {'
											+ '\n\t\t<span id="p1">printf("<brown>The given element %d is"\n\t\t\t'
											+' "not found in the given"\n\t\t\t" SLL.</brown>", key);</span>'
											+ '\n\t} <span id="whileBody"></span>'
											+'\n}</span>');
						$('#parentPre').removeClass('opacity00');
						if (lang == 'cpp') {
							$('#functionName').html('void Sll::<g>search(int element)</g>');
							$('#p1').html('cout << "The given element "\n\t\t\t\t\t << key << " is not found in the"\n\t\t\t\t\t" given SLL.";');
						}
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
										+ '\n\t\tnode currentNode = first;'
										+ '\n\t\tint count = 0'
										+ '\n\t\twhile (currentNode -> data != key) {'
										+ '\n\t\t\tif (currentNode -> next == NULL) {'
										+ '\n\t\t\t\t<span id="p2">printf("<brown>The given element %d is"\n\t\t\t\t\t'
										+ '"not found in the given"\n\t\t\t\t\t" SLL.</brown>", key);</span>'
										+ '\n\t\t\t\treturn 0;'
										+ '\n\t\t\t} else {'
										+ '\n\t\t\t\tcount++;'
										+ '\n\t\t\t\tcurrentNode = currentNode -> next;'
										+ '\n\t\t\t}\n\t\t}<span id="returnCount"></span>');
						$('#whileBody').addClass('opacity00');
						if (lang == 'cpp') {
							$('#p2').html('cout << "The given element " \n\t\t\t\t\t<< key << " is not found in the\n\t\t\t\t\t given SLL.";');
						}
						$('#algorithmStepsDiv ul:last').effect( "highlight",{color: 'yellow'}, 600, function() {
							transferEffect('#algorithmStepsDiv ul:last','#whileBody', function() {
								$('#whileBody').addClass('y').effect( "highlight",{color: 'yellow'}, 600);
								$('#funName').after('<span id="btn"></span>');
								$('#parentPre').scrollTo('#btn', 500);
								flag = true;
								introNextSteps('#animationDiv', 'tempNotEqNull');
								appendNextBtn('#btn', 'moveStep');
							});
						});
					break;
					case "three" :
						$('#returnCount').append('\n\t\t<span id="p3">printf("The given element is  %d"\n\t\t\t "found at position %d"'
								+ 'key, count);</span>');
						if (lang == 'cpp') {
							$('#p3').html('\n\t\tcout << "The given element is " \n\t\t\t << key << "found at position " \n\t\t\t << '
									+ 'count << ".";');
						}
						$('#returnCount').addClass('opacity00');
						$('#algorithmStepsDiv ul:last').effect( "highlight",{color: 'yellow'}, 600, function() {
							transferEffect('#algorithmStepsDiv ul:last','#returnCount', function() {
								$('#returnCount').addClass('y').effect( "highlight",{color: 'yellow'}, 600);
								$('#funName').after('<span id="btn"></span>');
								$('#parentPre').scrollTo('#btn', 500);
								introNextSteps('#restartBtn');
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
				$('#restartBtn').click(function() {
					location.reload();
				});
			break;
			}
		});
	});
	intro.start();
	$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();
	text = " Here, we will learn how to <y>search</y> an element in <y>Singly Linked List</y>.";
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

function assignElemtoKey() {
	$('.user-btn, #btn').remove();
	text = 'Declare an integer variable <y>key</y> and initialize with search element.';
	appendLiAndTyping(text, function() {
		sVal = 10;
		$('#key').text();
		zoomInEffect('#keyVar', function() {
			appendNextBtn('.introjs-tooltipbuttons', 'ifTempValueIsNull');
		});
	});
}

function ifTempValueIsNull() {
	$('.user-btn, #btn').remove();
	text = 'Check if <bwBg>first</bwBg> value is <y>NULL</y>.';
	appendLiAndTyping(text, function() {
		appendNextBtn('.introjs-tooltipbuttons', 'ifTempValueIsNullAnimation');
	});
}

function ifTempValueIsNullAnimation() {
	$('.user-btn, #btn').remove();
	if ($('#firstVal').text() == "NULL") {
		text = 'Here, the condition is evaluates to <y>true</y> so, display <y>The given element 10 is not found in the given SLL.</y>';
		appendLiAndTyping(text, function() {
			introNextSteps('#algorithmStepsDiv', 'Step'+ stepCount);
			$('.introjs-nextbutton').show();
		});
	} else {
		text = 'Here, the condition is evaluates to <y>false</y>, so repeat the loop until <y>temp</y> is <y>equal</y> to <y>NULL</y>.<br/>'
				+' It it is <y>true</y> then, print the <y>data</y> filed of the <y>temp</y> and also traverse the '
				+ '<y>next</y> field of <y>temp</y> to <y>temp</y> node. Otherwise print <y>NULL</y>';
		appendLiAndTyping(text, function() {
			appendNextBtn('.introjs-tooltipbuttons', 'tempNotNull');
		});
	}
}

function firstNotEqNull() {
	$('.user-btn, #btn').remove();
	text = 'For example user want to <y>search</y> an element (<y>'+ sVal +'</y>) in the list.';
	appendLiAndTyping(text, function() {
		appendNextBtn('.introjs-tooltipbuttons', 'firstIsNotNull');
	});
}

function firstIsNotNull() {
	$('.user-btn, #btn').remove();
	text = 'Here, <y>first</y> is <y>not</y> a <y>NULL</y>, means it contains some <y>address</y>, means <y>list</y> contains some nodes.';
	appendLiAndTyping(text, function() {
		appendNextBtn('.introjs-tooltipbuttons', 'declareCurrentNode');
	});
}

function declareCurrentNode() {
	$('.user-btn, #btn').remove();
	text = 'Declare one temporary node <y>currentNode</y> and initialize with <y>first</y> value (i.e. <y>'
			+ $('#firstVal').text() +'</y>).';
	appendLiAndTyping(text, function() {
		text = 'Let us take two temporary int variable <y>count</y> and <y>key</y>, count will be initialize with <y>0</y> and key will'
				+ ' be initialize with user search element (i.e. <y>'+ sVal +'</y>).';
		appendLiAndTyping(text, function() {
			appendNextBtn('.introjs-tooltipbuttons', 'declareCurrentNodeAnimation');
		});
		
	});
}

function declareCurrentNodeAnimation() {
	$('.user-btn, #btn').remove();
	zoomInEffect('#currentNode', function() {
		fromEffectWithTweenMax('#currentVal', '#firstVal', function() {
			svgAnimatingLineTopAndBottom("#currentNode", "#prevDiv1", "line11", true, false, function() {
				$('#count').text('0');
				count = 0;
				zoomInEffect('#countVar', function() {
					$('#key').text(sVal);
					zoomInEffect('#keyVar', function() {
						$('.introjs-tooltip').css('height','250');
						text = 'Repeat the loop until the <y>next</y> field of <y>currentNode</y> is <y>equal</y> to <y>key</y>.';
						appendLiAndTyping(text, function() {
							text = 'If it is <y>true</y> then check the another condition the <y>next</y> field of <y>currentNode</y> is <y>equal</y>'
									+' to <y>NULL</y>.';
							appendLiAndTyping(text, function() {
								text = 'If it is <y>NULL</y>, then display <y>The given element '
										+ 'is not found in the given SLL</y>.<span id="btn"></span>';
								appendLiAndTyping(text, function() {
									text = 'If it is <y>not NULL</y>, then <y>increment</y> the <y>count</y> value by <y>one</y> and also '
											+'traverse the <y>next</y> filed of <y>currentNode</y> to <y>currentNode</y> node.';
									appendLiAndTyping(text, function() {
										appendNextBtn('.introjs-tooltipbuttons', 'repeatLoop');
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

function repeatLoop() {
	$('.user-btn, #btn').remove();
	if ($('#data' + nodeCount).text() == sVal) {
		$('#data' + nodeCount).parent().css({'background-color': '#ccffcc'});
		$('#status' + nodeCount).empty().append('<i class="fa fa-check" style="color: green"></i>');
		zoomInEffect('#status' + nodeCount, function() {
			text = 'Here, the  <y>key</y> value <y>found</y> in <y>count + 1</y> position '
				+' so, print <y>The given element '+ sVal +' is found at position '+ (count + 1) +'.</y>';
			appendLiAndTyping(text, function() {
				introNextSteps('#algorithmStepsDiv', 'Step'+ stepCount);
				$('.introjs-nextbutton').show();
				
			});
		});
	} else {
		$('#data' + nodeCount).parent().effect( "highlight",{color: 'red'}, 600, function() {
			$('#key').effect( "highlight",{color: 'red'}, 600, function() {
				$('#status' +nodeCount).css({'color': 'red'});
				zoomInEffect('#status' +nodeCount, function() {
					if ($('#next' + nodeCount).text() != "NULL") {
						++count;
						$('#count').effect( "highlight",{color: 'yellow'}, 600, function() {
							flipEffectWithTweenMax('#count', count, function() {
								$('#currentVal').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
									svgAnimatingLineTopAndBottom("#currentNode", "#prevDiv" + nodeCount, "line111", true, false, function() {
										$('#line111').remove();
										$('#next' + nodeCount).parent().effect( "highlight",{color: 'yellow'}, 600, function() {
											fadeInBounceEffectWithTimelineMax("#next" + nodeCount, "#currentVal", "bottom", function() {
												$('#line11').remove();
												svgAnimatingLineTopAndBottom("#currentNode", "#prevDiv" + (nodeCount + 1), "line11", true, false, 
														function() {
													nodeCount++;
													repeatLoop();
												});
											}); 
										});
									});
								});
							});
						});
					} else  {
						$('#next' + nodeCount).parent().css({'background-color': '#ffcccc'});
						text = 'Here, the next field of <y>currentNode</y> is <y>NULL</y> means there is no more nodes to check'
								+' so, display <y>The given element '+ sVal +' is not found in the given SLL.</y>';
						appendLiAndTyping(text, function() {
							introNextSteps('#algorithmStepsDiv', 'Step'+ stepCount);
							$('.introjs-nextbutton').show();
						});
					}
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
				svgAnimatingLineLeftAndRight("#prevDiv"+ i, "#nextDiv"+ (i - 1), "line1"+ i, false, true);
			}
			$('#data' + i).text(i+'0').removeClass('opacity00');
			$('#node'+ i).removeClass('opacity00');
			$('#line' + i).css('opacity', '1');
		}
		appendNextBtn('.introjs-tooltipbuttons', 'firstNotEqNull');
	},500);
}

function appendSteps(i) {
	$('#algorithmStepsDiv').append('<div class="col-xs-12 margin-top-5 padding5" id="s'+ i 
			+ '"><div class="col-xs-12 padding00 position" id="stepDes'+ i +'"></div></div>');
}

function moveStep() {
	$('.user-btn, #btn').remove();
	if (intro._introItems[intro._currentStep + 1].animateStep == 'tempNotEqNull') {
		$('#firstVal').text('NULL');
		$('#countVar, #currentNode, #keyVar, .status').addClass('opacity00');
		$('#ifTempEqNull, #whileBody').removeClass('y');
		$('line').remove();
		$('#dynamicNodes, #currentVal').empty();
		for (var i = 1; i < 4; i++ ) {
			createDynamicNodes(i);
		}
	}
	intro.nextStep();
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
	intro.insertOption(intro._currentStep + 1, options);
	intro._options.steps.push({"element" : stepName});
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
			+ '<div class = "status opacity00 text-center" id="status' + nodeCount + '"><i class="fa fa-times"></i></div>'
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
	tooltipDisplay(".prev-div", "top", "This is a pointer type to hold the address of the previous node");
	tooltipDisplay(".data-div", "top", "This is an int data type to hold the user data");
	tooltipDisplay(".next-div", "top", "This is a pointer type to hold the address of the next node");
	tooltipDisplay(".data-address", "bottom", "it indicates the address of the node");
	
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
	$(selector).effect('highlight', {color: 'blue'}, 800, function() {
		TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete:function() {
			$(selector).html(val);
			TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
				intro.refresh();
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
	$('#svgId').append(line);
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
	$(typingId).typewriting(typingContent, {
		"typing_interval" : '5',
		"cursor_color" : 'white'
	}, function() {
		typingCallbackFunction();
		$('.introjs-tooltip').scrollTo(typingId, 500);
		$('.introjs-tooltip').show();
	});
} 