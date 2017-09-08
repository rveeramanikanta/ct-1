var lang, intro, stepCount = 1;

function deleteAtBeginNodeInSllAnimation() { //call the method to start the intro and create some nodes
	lang = getURLParameter("lang");
	declareNodesWhenFunctionCall("tempNode", "tempVal", "tempNodeInDelMtd", "temp");
	svgAppend("#animationDiv", "svgId");
	svgMarkerAppend("#svgId", "arrow");
	introFunction();
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
						animateStep: 'firstNodeNull',
						tooltipClass : "hide",
					}]
	});
	intro.onafterchange(function(targetElement) {
		intro.refresh();
		var elementId = targetElement.id;
		$('.introjs-nextbutton').hide();
		$('.introjs-helperLayer').one('transitionend', function() {
			switch (elementId) {
			case 'animationDiv' :
				intro.refresh();
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
					case 'firstNodeNull': 
						$('.introjs-tooltip').removeClass('hide');
						text = "<ul><li>Let us assume <y>single linked is empty</y>. i.e <y>first</y> is "
								+ " <y>NULL</y>.</li><br/><div id='appendDiv'></div></ul>";
						typing(".introjs-tooltiptext", text, function() {
							appendNextBtn('.introjs-tooltipbuttons', 'firstEqNull');
						});
					break;
					case 'firstNotEqNull' :
						$('.introjs-tooltip').removeClass('hide');
						text = "<ul><li>Let us assume <y>single linked list</y> can contains only <y>one node</y>."
								+ " i.e <y>first</y> contains the <y>address</y> of the "
								+ " <y>first</y> node.</li><br/><div id='appendDiv'></div></ul>";
						typing(".introjs-tooltiptext", text, function() {
							appendNextBtn('.introjs-tooltipbuttons', 'firstNotEqNullAnimation');
						});
					break;
					case 'thirdExample' :
						$('.introjs-tooltip').removeClass('hide');
						text = "<ul><li>Let us assume <y>single linked list</y> can contains more than <y>one node</y>."
								+ " Apply the beside conditions.</li><br/><div id='appendDiv'></div></ul>";
						typing(".introjs-tooltiptext", text, function() {
							$('#algorithmStepsDiv').addClass('z-index1000000');
							appendNextBtn('.introjs-tooltipbuttons', 'multipleNodes');
						});
					break;
				}
			break;
			case 'algorithmStepsDiv' :
				$('#algorithmStepsDiv').removeClass('opacity00');
				intro.refresh();
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
					case 'condition1':
						$('#s1').addClass('opacity00');
						appendSteps(1);
						text = "<span id='l1'>If <g>first</g> is <brown>equal</brown> to <g>NULL</g>.</span><ol><li>"
								+ " <span id='l2'>Print <brown>List is empty, deletion is not possible</brown>.</span>"
								+ "<span id='btn'></span></li></ol>";
						$('#stepDes1').html(text);
						zoomInEffect('#s1', function() {
							stepCount++;
							introNextSteps('#animationDiv', 'firstNotEqNull');
							appendNextBtn('#btn', 'moveStep');
						});
					break;
					case 'condition2' :
						$('#s2').addClass('opacity00');
						appendSteps(2);
						if (lang == 'cpp') {
							text = "If <g>first</g> is <brown>not equal</brown> to <g>NULL</g>.<ol><li>"
								+ " <span id='l3'>Create a <g>Temp</g> node and store the <g>first</g> node value.</span></li>"
								+ "<li><span id='l4'>Store <g>first -> next</g> value to <g>first</g> node.</span></li>"
								+ "<li><span id='l5'>Print <brown>The deleted element (temp -> data) from SLL</brown></span></li>"
								+ "<li><span id='l6'>Now delete the <g>temp</g> node.</span><span id='btn'></span></li></ol>";
						} else if (lang == 'c') {
							text = "If <g>first</g> is <brown>not equal</brown> to <g>NULL</g>.<ol><li>"
								+ " <span id='l3'>Create a <g>Temp</g> node and store the <g>first</g> node value.</span></li>"
								+ "<li><span id='l4'>Store <g>first -> next</g> value to <g>first</g> node.</span></li>"
								+ "<li><span id='l5'>Print <brown>The deleted element (temp -> data) from SLL</brown></span></li>"
								+ "<li><span id='l6'>Now delete the <g>temp</g> node.</span></li>"
								+ "<li><span id='l7'>Return the <g>temp</g> node.</span><span id='btn'></span></li></ol>";
						}
						
						$('#stepDes2').html(text);
						zoomInEffect('#s2', function() {
							stepCount++;
							introNextSteps('#animationDiv', 'thirdExample');
							appendNextBtn('#btn', 'moveStep');
						});
					break;
				}
			break;
			case 'parentPre' :
				$('#parentPre').removeClass('opacity00');
				$('.introjs-tooltip').removeClass('hide');
				if (lang == 'c') {
					text = 'Now convert the above <y>algorithm</y> to <y>C</y> program.'
				} else if (lang == 'cpp') {
					text = 'Now convert the above <y>algorithm</y> to <y>CPP</y> program.'
				}
				typing(".introjs-tooltiptext", text, function() {
					appendNextBtn('.introjs-tooltipbuttons', 'convertToCode');
				});
			break;
			case "restartBtn":
				$('#parentPre').addClass('z-index1000000');
				$("#restartBtn").removeClass('opacity00');
				$('.introjs-tooltip').removeClass('hide');
				$('.introjs-tooltip').addClass('introjs-tooltip-min-width');
				text = 'Click to restart.';
				typing('.introjs-tooltiptext', text, function() {
					$('#restartBtn').click(function() {
						location.reload();
					});
				});
			break;
			}
		});
	});
	intro.start();
	$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();
	text = " Here, we will learn <y>Delete At Begin Node in Singly Linked List</y>.";
	typing(".introjs-tooltiptext", text, function() {
		$('.introjs-nextbutton').show();
	});
} 

function convertToCode() {
	$('.user-btn').remove();
	if (lang == 'cpp') {
		$('#nameOfTheMethos').addClass('opacity00').html('<span class="ct-green-color ct-css">void Sll::</span>'
				+ ' <span class="ct-green-color ct-css">deleteAtBegin()</span> {');
	} else if (lang == 'c') {
		$('#nameOfTheMethos').addClass('opacity00').html('<span class="ct-green-color ct-css">node</span>'
				+ ' <span class="ct-green-color ct-css">deleteAtBegin(node first)</span> {');
	}
		$('#mClose').html('}');
		zoomInEffect('#nameOfTheMethos', function() {
		transferEffect('#l1','#delBegIfCon', function() {
			flipEffectWithTweenMax('#delBegIfCon', "if (<g>first == NULL</g>) {", function() {
				zoomInEffect('#close', function() {
					transferEffect('#l2','#printfdelAtBeg1', function() {
						if (lang == 'cpp') {
							text = 'cout << "<brown>Single linked list is empty."\n'
								+ '\t\t\t" So deletion is not possible\\n</brown>";';
						} else if (lang == 'c') {
							text = 'printf(<brown>"Single linked list is empty."\n'
								+ '\t\t\t" So deletion is not possible\\n"</brown>);';
						}
						flipEffectWithTweenMax('#printfdelAtBeg1', text, function() {
							zoomInEffect('#openElse', function() {
								zoomInEffect('#close1', function() {
									transferEffect('#l3','#firstToTemp', function() {
										codeAnimation();
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

function codeAnimation() {
	$('.user-btn').remove();
	text = "node temp = first;";
	flipEffectWithTweenMax('#firstToTemp', text, function() {
		transferEffect('#l4','#firstNextToFirst', function() {
			text = "first = first -> next;";
			flipEffectWithTweenMax('#firstNextToFirst', text, function() {
				transferEffect('#l5','#printfdelAtBeg2', function() {
					if (lang == 'cpp') {
						text = 'cout << "The deleted element from SLL : "\n'
							+ '\t\t\t << temp -> data << "\\n";';
					} else if (lang == 'c') {
						text = 'printf("The deleted element from SLL :"\n\t\t\t "%d\\n, "'
							+ 'temp -> data);';
					}
					flipEffectWithTweenMax('#printfdelAtBeg2', text, function() {
						transferEffect('#l6','#freeNode', function() {
							if (lang == 'cpp') {
								text = 'delete temp;';
							} else if (lang == 'c') {
								text = 'free(temp);';
							}
							flipEffectWithTweenMax('#freeNode', text, function() {
								if (lang == 'cpp') {
									introNextSteps("#restartBtn", "restartBtn");
									$('.introjs-nextbutton').show();
								} else if (lang == 'c') {
									transferEffect('#l7','#returnTemp', function() {
										text = 'return temp;';
										flipEffectWithTweenMax('#returnTemp', text, function() {
											introNextSteps("#restartBtn", "restartBtn");
											$('.introjs-nextbutton').show();
										});
									});
								}
							});
						});
					});
				});
			});
		});
	});
}

function firstEqNull() {
	$('.user-btn, #btn').remove();;
	zoomInEffect('#firstNode', function() {
		text = '<li>Here <y>first</y> value (i.e <y>'+ $('#firstVal').text() +'</y>) is equal to <y>NULL</y>'
				+ ' means there in no node in a <y>list</y> so '
				+ 'deletion is not possible here.</li><li> Print <y>List is empty, deletion is not possible</y></li>';
		typing('#appendDiv', text, function() {
			introNextSteps('#algorithmStepsDiv', 'condition1');
			$('.introjs-nextbutton').show();
		});
	});
}

function firstNotEqNullAnimation() {
	$('.user-btn, #btn').remove();
	createDynamicNodes(1);
	svgAnimatingLineRightToLeft("#animationDiv", "#firstDiv", "#dataDiv1",
			 "#svgId", "line1", "arrow", true);
	setTimeout(function() {
		$('#data1').text(10);
		$('#next1').text('NULL');
		$('#data1, #next1').removeClass('opacity00');
		zoomInEffect('#node1', function() {
			$('#firstVal').text($('.data-address:first').text());
			$('#line1').css('opacity', '1');
			text = '<li>Here <y>first</y> value (i.e <y>'+ $('#firstVal').text() +'</y>) is not equal to <y>NULL</y> means '
					+ '<y>list</y> contains some nodes, so there is possible to delete the node.</li>'
			typing('#appendDiv', text, function() {
				$('#appendDiv').after('<div id="appendDiv1"></div>')
				appendNextBtn('.introjs-tooltipbuttons', 'createTempNode');
			});
		});
	},500);
}

function createTempNode() {
	$('.user-btn, #btn').remove();
	$('#s2').removeClass('blinkingGreen');
	$('.user-btn').remove();
	text = '<li>Let us take one tempary node (i.e <y>temp</y>) and store the <y>first</y> value (i.e <y> '
			+ $('#firstVal').text() +'</y>) to the <y>temp</y>.</li>';
	typing('#appendDiv1', text, function() {
		$('#appendDiv1').after('<div id="appendDiv2"></div>')
		appendNextBtn('.introjs-tooltipbuttons', 'createTempNodeAnimation');
	});
}

function createTempNodeAnimation() {
	$('.user-btn').remove();
	zoomInEffect('#tempNode', function() {
		$('#tempVal').removeClass('opacity00');
		fromEffectWithTweenMax("#tempVal", "#firstVal", $("#firstVal").text(), function() {
			svgAnimatingLineTopToBottom("#animationDiv", "#tempNode", "#dataDiv1",
					 "#svgId", "line11", "arrow", false, function() {
				appendNextBtn('.introjs-tooltipbuttons', 'firstNextToFirstText');
			});
		});
	});
}

function firstNextToFirstText() {
	$('.user-btn').remove();
	text = '<li>Now store <y>first -> next</y> value (i.e <y>'+ $('#next1').text() +'</y>) to <y>first</y> node.</li>'
	typing('#appendDiv2', text, function() {
		$('#appendDiv2').after('<div id="appendDiv3"></div>')
		appendNextBtn('.introjs-tooltipbuttons', 'firstNextToFirstAnimation');
	});
}

function firstNextToFirstAnimation() {
	$('.user-btn, #btn').remove();
	$('#firstVal').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
		svgAnimatingLineRightToLeft("#animationDiv", "#firstDiv", "#dataDiv1",
				 "#svgId", "line21", "arrow", false, function() {
			$('#line21').remove();
			$('#next1').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
				fadeInBounceEffectWithTimelineMax("#next1", "#firstVal", function() {
					$('#line1').remove();
					appendNextBtn('.introjs-tooltipbuttons', 'printAndDeleteNodeText');
				});
			});
		});
	});
}

function printAndDeleteNodeText() {
	$('.user-btn').remove();
	if (lang == 'cpp') {
		text = '<li>Now print the <y>temp -> data</y> (i.e <y>'+ $('#data1').text() +'</y>) and '
		+ ' <y>delete</y> the <y>temp</y> node i.e (<y>'+ $('#tempVal').text() +'</y>).</li>'	
	} else if (lang == 'c') {
		text = '<li>Now print the <y>temp -> data</y> (i.e <y>'+ $('#data1').text() +'</y>) and '
		+ ' <y>delete</y> the <y>temp</y> node i.e (<y>'+ $('#tempVal').text() +'</y>) and also return the <y>temp</y> node.</li>'
	}
	typing('#appendDiv3', text, function() {
		$('#appendDiv3').after('<div id="appendDiv4"></div>')
		appendNextBtn('.introjs-tooltipbuttons', 'printAndDeleteNodeAnimation');
	});
}

function printAndDeleteNodeAnimation() {
	$('.user-btn, #btn').remove();
	TweenMax.to("#node1", 0.5, { top : -80, onComplete: function() {
		$("#node1, #line11").remove();
		$('#tempNode').addClass('opacity00');
		if ($('#dynamicNodes .nodes').length == 0) {
			introNextSteps('#algorithmStepsDiv', 'condition2');
			$('.introjs-nextbutton').show();
		} else {
			$('#s4').css('background-color', '');
			$('line').remove();
			changeIdsAtBegin(function() {
				for (var i = 1; i <= $('#dynamicNodes .nodes').length; i++) {
					if (i == 1) {
						svgAnimatingLineRightToLeft("#animationDiv", "#firstDiv", "#dataDiv1",
								"#svgId", "line"+ i +"", "arrow", false);
					} else {
						svgAnimatingLineRightToLeft("#animationDiv", "#nextDiv"+ (i - 1) +"", "#dataDiv"+ (i) +"",
								"#svgId", "line"+ i +"", "arrow", false);
					}
				}
				deleteAtBegin();
				introNextSteps('#parentPre', 'converTextToCode', 'right');
				$('.introjs-nextbutton').show();
			});
		}
	}});
}

function multipleNodes() {
	$('.user-btn, #btn').remove();
	$('#tempVal').text('');
	for (var i = 1; i < 4; i++ ) {
		createDynamicNodes(i);
	}
	$('#dynamicNodes .next-span:last').text('NULL');
	$('#dynamicNodes .next-span:first').text($('.data-address').eq(1).text());
	$('#dynamicNodes .next-span').eq(1).text($('.data-address').eq(2).text());
	regenerateArrows(true);
	setTimeout(function() {
		$('#firstVal').text($('.data-address:first').text());
		for (var i = 1; i <= $('#dynamicNodes .nodes').length; i++ ) {
			$('#data' + i).text(i+'0').removeClass('opacity00');
			$('#node'+ i).removeClass('opacity00');
			$('#line' + i).css('opacity', '1');
		}
		appendNextBtn('.introjs-tooltipbuttons', 'applyBesideCondition');
	},500);
}

function applyBesideCondition() {
	$('.user-btn, #btn').remove();
	text = '<li>The <y>condition1</y> (<y>'+ $('#firstVal').text() +' == NULL</y>) is evaluates to <y>false</y> '
			+'because <y>first</y> node contains <y>'+ $('#firstVal').text() +'</y> not a <y>NULL</y>.</li>'
	typing('#appendDiv', text, function() {
		$('#s1').addClass('blinkingRed');
		$('#appendDiv').after('<div id="appendDiv11"></div>')
		appendNextBtn('.introjs-tooltipbuttons', 'applySecondCondition');
	});
}

function applySecondCondition() {
	$('#s1').removeClass('blinkingRed');
	$('.user-btn, #btn').remove();
	text = '<li>The <y>condition2</y> (<y>'+ $('#firstVal').text() +' != NULL</y>) is evaluates to <y>true</y>.</li>';
	typing('#appendDiv11', text, function() {
		$('#s2').addClass('blinkingGreen');
		$('#appendDiv11').after('<div id="appendDiv1"></div>')
		appendNextBtn('.introjs-tooltipbuttons', 'createTempNode');
	});
}

function deleteAtBegin() {
	$("#parentPre").append('<span id="deleteAtBeginParent"><span id="nameOfTheMethos"></span>\n'
			+ '\t<span id="firstToTemp" class="position opacity00"> Create a <g>Temp</g> node and store '
			+ '\n\tthe <g>first</g> node value.</span>\n'
			+ '\t<span id="delBegIfCon" class="position opacity00">If <g>first</g> is <brown>equal</brown> to <g>NULL</g>.</span>\n'
			+ '\t\t<span id="printfdelAtBeg1" class="position opacity00" style="display: inline-block">Print <brown>List is empty, deletion is '
			+ '\n\t\tnot possible</brown>.</span>\t' 
			+ '\n\t<span id="close" class="position opacity00">}</span>&nbsp;<span id="openElse" class="position opacity00">else {</span>\n'
			+ '\t\t<span id="firstNextToFirst" class="position opacity00">Store <g>first -> next</g> value to <g>first</g> node.</span>\n'
			+ '\t\t<span id="printfdelAtBeg2" class="position opacity00" style="display: inline-block">Print <brown>The deleted element '
			+ '\n\t\t(temp -> data) from SLL</brown>.</span>\n'
			+ '\t\t<span id="freeNode" class="position opacity00">Now delete the <g>temp</g> node.</span>\n\t'
			+ '\t\t<span id="returnTemp" class="opacity00 position">Return the temp node.</span>\n'
			+ '<span id="close1" class="opacity00">\t}</span>\n'
			+ '<span id="mClose"></span></span>');
}

function regenerateArrows(flag) {
	for (var i = 1; i <= $('#dynamicNodes .nodes').length; i++) {
		if (i == 1) {
			svgAnimatingLineRightToLeft("#animationDiv", "#firstDiv", "#dataDiv1",
					"#svgId", "line"+ i +"", "arrow", flag);
		} else {
			svgAnimatingLineRightToLeft("#animationDiv", "#nextDiv"+ (i - 1) +"", "#dataDiv"+ (i) +"",
					"#svgId", "line"+ i +"", "arrow", flag);
		}
	}
}


function changeIds1(elementParent, idAttr) {
	$(elementParent).each(function(index) {
      	$(this).attr("id", idAttr + (index + 1));
    	
	});
}

function changeIdsAtBegin(callBackFunction) {
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

function appendSteps(i) {
	$('#algorithmStepsDiv').append('<div class="col-xs-12 margin-top-5" id="s'+ i 
			+ '"><div class="col-xs-3 padding00" id="step'+ i +'"><blue>Condition '+ i 
			+ ' : </blue></div><div class="col-xs-9 padding00 position" id="stepDes'+ i +'"></div></div><br/>');
}

function moveStep() {
	$('.user-btn, #btn').remove();
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

function customIntroNxtStep(stepName, animatedStep, position) {
	introNextSteps(stepName, animatedStep, position);
	setTimeToIntroGoNextStep();
}

function setTimeToIntroGoNextStep() {
	setTimeout(function() {
		intro.nextStep();
	}, 1000);
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
	var x = '<div class="opacity00 col-xs-2 nodes" id="node' + nodeCount + '" style="top: 0px; width: auto;">'
						+ ' <div class="col-xs-12 padding00"><div class="col-xs-6 ct-blue-color ct-fonts padding00 text-center">'
						+ ' data</div><div class="ct-green-color ct-fonts text-center">next</div></div>'
						+ ' <div id="nodedata' + nodeCount + '" class="data-nodes"><div id="dataDiv' + nodeCount + '"'
						+ ' class="div-border left-radius col-xs-6 data-div"><span id="data' + nodeCount +'"'
						+ ' class="data-span position opacity00 ct-blue-color ct-fonts" style="top: 0px; left: 0px;"></span></div>'
						+ ' <div id="nextDiv' + nodeCount +'" class="position div-border right-radius col-xs-6 next-div">'
						+ ' <span id="next' + nodeCount +'" class="position next-span ct-green-color ct-fonts position"></span></div></div>'
						+ ' <div class="col-xs-12 padding00"><div class="col-xs-6 padding00 text-center">'
						+ ' <span id="dataAddress' + nodeCount + '" class="position data-address padding00 ct-brown-color ct-fonts">'+ randomAddress 
						+ '</span></div></div></div>';
	$('#dynamicNodes').append(x);
}

function declareNodesWhenFunctionCall(id1, id2, nodeName, nodeNameText, callBackFunction) {	//Temp node div declaration 
	$('#declareNodes').append('<div class="col-xs-2 col-xs-offset-1 extraNode opacity00 padding00" id=' + id1 + '>'
					+ '<div class="col-xs-12 box padding00 position"><span id=' + id2 + ' class="extrNodeVal ct-brown-color ct-fonts position"></span>'
					+ '</div><div class="text-center col-xs-12 padding00 ct-green-color" id=' + nodeName + '>' + nodeNameText + '</div></div> ');
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
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


function zoomInEffect(selector1, callBackFunction) {
	$(selector1).removeClass("opacity00").addClass('animated zoomIn').one('animationend', function() {
		$(selector1).removeClass("animated zoomIn");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function flipEffectWithTweenMax(selector, val, callBackFunction) {
	setTimeout(function(){
		TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete:function() {
			$(selector).html(val);
			TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
				intro.refresh();
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
			}});
		}});
	},200);
}

function fromEffectWithTweenMax(id1, id2, val, callBackFunction) {
	var l1 = $(id2).offset();
	$(id1).html($(id2).text()).offset({
	  "top" : l1.top,
	  "left" : l1.left
	});
	TweenMax.to(id1, 1, {top : 0, left : 0, onComplete: function() {
		$(id1).text("" + val + "");
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
		$('#dummy').offset({
			"top": l2.top, 
			"left": l2.left
		});
		$(selector2).text($(selector1).text());
		timelineMax.from(selector2, 2, {ease: Bounce.easeOut, top: topLength, left: leftLength, onComplete: function() {
      $(selector2).removeAttr("style")
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}}).to('#dummy', 0.5, {opacity: 1, top: parseInt($('#dummy').css("top")) - 40, onComplete: function() {
      		$(selector2).text($(selector1).text());
			$("#animatinDiv").removeAttr("style");			
			$('#dummy').remove();
		}}, "-=0.5");
	});
}



function svgAppend(selector, svgId) {
	var code = '<svg class="svg-css" id="' + svgId + '"></svg>';
	$(selector).append(code);
}

function svgMarkerAppend(svgId, svgMarkerId, curve) {
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

function svgLineAppend(svgId, svgLineId, markerId, x1, y1, x2, y2, flag) {
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
	line.style.markerEnd = 'url("#' + markerId + '")';
	$(svgId).append(line);
}

function svgAnimatingLineRightToLeft(parentSelector, selector1, selector2, svgId, svgLineId, markerId, flag, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1, flag);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function svgAnimatingLineTopToBottom(parentSelector, selector1, selector2, svgId, svgLineId, markerId, flag, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight();
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1, flag);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
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
		$('.introjs-tooltip').show();
	});
}